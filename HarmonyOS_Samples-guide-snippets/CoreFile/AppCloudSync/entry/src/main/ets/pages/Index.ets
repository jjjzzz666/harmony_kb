import { fileIo as fs, ReadOptions, cloudSync, fileUri } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { buffer } from '@kit.ArkTS';
import { cloudCommon } from '@kit.CloudFoundationKit';

class FileItem {
  name: string = "";
  isDirectory: boolean = false;
  size: number = 0;
  mtime: string = "";
  location: number = 0
}

@Entry
@Component
struct Index {
  @State files: FileItem[] = [];
  @State currUri: string = "";
  @State textContent: string = "";
  @State errorCode: number = 0;
  @State errorMessage: string = "";
  @State state: cloudSync.SyncState = cloudSync.SyncState.STOPPED;
  @State errCode: cloudSync.ErrorType = cloudSync.ErrorType.NO_ERROR;
  @State process: number = 0;
  @State downloadErr: cloudSync.DownloadErrorType = cloudSync.DownloadErrorType.NO_ERROR;

  private context = getContext(this) as common.UIAbilityContext;
  private baseUri = this.context.cloudFileDir + "/";
  private fileSync = new cloudSync.FileSync();
  private cloudFileCache = new cloudSync.CloudFileCache();
  private cloudSyncCallback = (pg: cloudSync.SyncProgress) => {
    this.state = pg.state;
    this.errCode = pg.error;
  }
  private downloadProcess = (pg: cloudSync.DownloadProgress) => {
    this.process = pg.processed;
    this.downloadErr = pg.error;
  }

  private async loadFiles() {
    try {
      const files = fs.listFileSync(this.baseUri);
      this.files = files.map((fileName: string) => {
        const fullPath = this.baseUri + fileName;
        const  fileStat = fs.statSync(fullPath);
        let fileItem = new FileItem();
        fileItem.name = fileName;
        fileItem.isDirectory = fileStat.isDirectory();
        fileItem.size = fileStat.size;
        fileItem.mtime = this.formatTime(new Date(fileStat.mtime * 1000));
        fileItem.location = fileStat.location;
        return fileItem;
      });
    } catch (error) {
      console.error("读取文件列表失败: ", error);
      this.errorCode = error.code;
      this.errorMessage = error.message;
      this.files = [];
    }
  }

  private formatTime(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  }

  build() {
    Column({space: 20}) {
      // 用来展示当前选中的文件路径
      Text(`当前选中的文本路径：${this.baseUri + this.currUri}`)
        .fontSize(16).fontWeight(500).margin({top: 10})

      // 展示当前 cloud 目录下的所有子文件
      List({ space: 10 }) {
        ForEach(this.files, (item: FileItem, index) => {
          ListItem() {
            Row({space: 5}) {
              Text(item.name).fontSize(14).fontWeight(500).width("%20").maxLines(1)
              Text(`${item.size}B`).fontSize(12).width("%20").maxLines(1)
              Text(item.mtime).fontSize(12).width("%20").maxLines(1)
              Text(item.isDirectory ? "文件夹" : "文件").fontSize(12).width("%20").maxLines(1)
              if (item.location == 1) {
                Text("本地").fontSize(12).width("%20").maxLines(1)
              } else if (item.location == 2) {
                Text("云上").fontSize(12).width("%20").maxLines(1)
              } else if (item.location == 3) {
                Text("本地&云上").fontSize((12)).width("%20").maxLines(1)
              }
            }.padding(12).backgroundColor(Color.White).borderRadius(10).width("100%").border({width:1, color:Color.Gray})
          }.onClick(() => {
            this.currUri = item.name;
          })
        })
      }.width("100%").padding(20)

      // 文本输入框，用来选中当前文件uri
      TextInput({
        placeholder: "请输入文件名",
        text: this.currUri
      }).onChange((value: string) => {
        this.currUri = value
      }).width("80%").height(50).backgroundColor("#f0f0f0").borderRadius(10).margin({top: 20})

      // 文本展示和编辑区域
      TextArea({text: this.textContent})
        .width('80%').height(90).borderWidth(1).margin(1)
        .minFontSize(12)
        .maxFontSize(12)
        .maxLines(3)
        .heightAdaptivePolicy(TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST)
        .onChange((value: string) => {
          this.textContent = value
        })

      Row() {
        // 读取一个文件或新建一个空文件
        Button("读取or新建").onClick(() => {
          try {
            // 打开文件
            // 文件不存在时创建并打开文件，文件存在时打开文件
            let file = fs.openSync(this.baseUri + this.currUri, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
            // 创建一个大小为1024字节的ArrayBuffer对象，用于存储从文件中读取的数据
            let arrayBuffer = new ArrayBuffer(1024);
            // 设置读取的偏移量和长度
            let readOptions: ReadOptions = {
              offset: 0,
              length: arrayBuffer.byteLength
            };
            // 读取文件内容到ArrayBuffer对象中，并返回实际读取的字节数
            let readLen = fs.readSync(file.fd, arrayBuffer, readOptions);
            // 将ArrayBuffer对象转换为Buffer对象，并转换为字符串输出
            let buf = buffer.from(arrayBuffer, 0, readLen);
            console.info("the content of file: " + buf.toString());
            this.textContent = buf.toString();
            // 关闭文件
            fs.closeSync(file);
            this.loadFiles();
          } catch (error) {
            this.errorCode = error.code;
            this.errorMessage = error.message;
          }
        })

        // 刷新列表
        Button("刷新列表").onClick(() => {
          try {
            this.loadFiles();
          } catch (error) {
            this.errorCode = error.code;
            this.errorMessage = error.message;
          }
        })

        // 保存文件
        Button("保存文件").onClick(() => {
          try {
            // 文件不存在时创建并打开文件，文件存在时打开文件
            let file = fs.openSync(this.baseUri + this.currUri, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
            // 写入一段内容至文件
            let writeLen = fs.writeSync(file.fd, this.textContent);
            // 关闭文件
            fs.closeSync(file);
            this.loadFiles();
          } catch (error) {
            this.errorCode = error.code;
            this.errorMessage = error.message;
          }
        })
      }.justifyContent(FlexAlign.SpaceAround).width('100%')

      Row() {
        Column({ space: 5 }) {
          Button("注册监听").onClick(() => {
            try {
              this.cloudFileCache.on("progress", this.downloadProcess);
            } catch (error) {
              console.error("下载注册监听失败: ", error);
              this.errorCode = error.code;
              this.errorMessage = error.message;
            }
          });
          Button("下载文件").onClick(() => {
            try {
              let uri = fileUri.getUriFromPath(this.baseUri + this.currUri);
              this.cloudFileCache.start(uri);
            } catch (error) {
              console.error("文件下载失败: ", error);
              this.errorCode = error.code;
              this.errorMessage = error.message;
            }
          });
          Button("释放缓存").onClick(() => {
            try {
              let uri = fileUri.getUriFromPath(this.baseUri + this.currUri);
              this.cloudFileCache.cleanFileCache(uri);
            } catch (error) {
              console.error("释放文件缓存失败: ", error);
              this.errorCode = error.code;
              this.errorMessage = error.message;
            }
          })
          Button("解除监听").onClick(() => {
            try {
              this.cloudFileCache.off("progress");
            } catch (error) {
              console.error("解除下载回调失败: ", error);
              this.errorCode = error.code;
              this.errorMessage = error.message;
            }
          });
          Text(`下载进度：${this.process}`).fontSize(12)
          Text(`错误码：${this.downloadErr}`).fontSize(12)
        }.alignItems(HorizontalAlign.Center).width("30%").padding(10).border({ width: 1, radius: 20 }).margin(10)

        Column({ space: 5 }) {
          Button("注册监听").onClick(() => {
            try {
              this.fileSync.on("progress", this.cloudSyncCallback);
            } catch (error) {
              console.error("注册监听失败: ", error);
              this.errorCode = error.code;
              this.errorMessage = error.message;
            }
          });
          Button("触发同步").onClick(() => {
            try {
              this.fileSync.on("progress", this.cloudSyncCallback);
              this.fileSync.start();
            } catch (error) {
              console.error("触发同步失败: ", error);
              this.errorCode = error.code;
              this.errorMessage = error.message;
            }
          });
          Button("停止同步").onClick(() => {
            try {
              this.fileSync.stop();
            } catch (error) {
              console.error("停止同步失败: ", error);
              this.errorCode = error.code;
              this.errorMessage = error.message;
            }
          })
          Button("解除监听").onClick(() => {
            try {
              this.fileSync.off("progress");
            } catch (error) {
              console.error("解注册监听: ", error);
              this.errorCode = error.code;
              this.errorMessage = error.message;
            }
          });
          Text(`同步状态：${this.state}`).fontSize(12)
          Text(`错误码：${this.errCode}`).fontSize(12)
        }.alignItems(HorizontalAlign.Center).width("30%").padding(10).border({ width: 1, radius: 20 }).margin(10)

      }.justifyContent(FlexAlign.SpaceAround).width('100%')
    }.width("100%").height("100%").onAppear(() => {this.loadFiles()})
  }
}