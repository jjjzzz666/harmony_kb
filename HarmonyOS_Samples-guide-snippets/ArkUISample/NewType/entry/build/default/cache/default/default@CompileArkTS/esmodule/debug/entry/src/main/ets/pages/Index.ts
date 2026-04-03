if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { PersistenceV2, Type } from "@ohos:arkui.StateManagement";
@ObservedV2
class SampleChild {
    @Trace
    childNumber: number = 1;
}
@ObservedV2
class Sample {
    // 对于复杂对象需要@Type修饰，确保反序列化成功，去掉@Type会反序列化值失败。
    @Type(SampleChild)
    // 对于没有初值的类属性，经过@Type修饰后，需要手动保存，否则持久化失败。
    // 无法使用@Type修饰的类属性，必须要有初值才能持久化。
    @Trace
    sampleChild?: SampleChild = undefined;
}
class TestCase extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.sample = PersistenceV2.connect(Sample, () => new Sample)!;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.sample = PersistenceV2.connect(Sample, () => new Sample)!;
    }
    @Local
    sample: Sample;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('childNumber value:' + this.sample.sampleChild?.childNumber);
            Text.onClick(() => {
                this.sample.sampleChild = new SampleChild();
                this.sample.sampleChild.childNumber = 2;
                PersistenceV2.save(Sample);
            });
            Text.fontSize(30);
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TestCase";
    }
}
registerNamedRoute(() => new TestCase(undefined, {}), "", { bundleName: "com.samples.newtype", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
