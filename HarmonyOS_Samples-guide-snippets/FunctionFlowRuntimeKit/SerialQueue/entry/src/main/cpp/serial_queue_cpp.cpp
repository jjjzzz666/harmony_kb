/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [Start serial_cpp]
#include <chrono>
#include <thread>
#include "hilog/log.h"
#include "ffrt/ffrt.h" // 来自 OpenHarmony 第三方库 "@ppd/ffrt"

#undef LOG_TAG
#define LOG_TAG "SerialCppTag"

class Logger {
public:
    Logger(const std::string& filename)
    {
        // 创建队列
        queue_ = std::make_unique<ffrt::queue>("loggerQueue");
        
        logFile_ = stdout;
        OH_LOG_INFO(LOG_APP, "Log file opened");
    }

    ~Logger() {
        // 销毁队列
        queue_ = nullptr;
        OH_LOG_INFO(LOG_APP, "Log file opened");
    }

    // 添加日志任务
    void log(const std::string& message) {
        queue_->submit([this, message] {
            OH_LOG_INFO(LOG_APP, "Writing message %{public}s", message.c_str());
        });
    }

private:
    FILE *logFile_;
    std::unique_ptr<ffrt::queue> queue_;
};

int serial_queue_cpp_exec()
{
    Logger logger("log.txt");

    // 主线程添加日志任务
    logger.log("Log message 1");
    logger.log("Log message 2");
    logger.log("Log message 3");

    // 模拟主线程继续执行其他任务
    std::this_thread::sleep_for(std::chrono::seconds(1));

    return 0;
}
// [End serial_cpp]