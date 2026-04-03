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

// [Start concurrent_cpp]
#include <unistd.h>
#include "hilog/log.h"
#include "ffrt/ffrt.h" // 来自 OpenHarmony 第三方库 "@ppd/ffrt"

#undef LOG_TAG
#define LOG_TAG "ConcurrentCppTag"

class BankQueueSystem {
private:
    std::unique_ptr<ffrt::queue> queue_;

public:
    BankQueueSystem(const char *name, int concurrency)
    {
        queue_ = std::make_unique<ffrt::queue>(
            ffrt::queue_concurrent, name, ffrt::queue_attr().max_concurrency(concurrency));
        OH_LOG_INFO(LOG_APP, "bank system has been initialized");
    }

    ~BankQueueSystem()
    {
        queue_ = nullptr;
        OH_LOG_INFO(LOG_APP, "bank system has been destroyed");
    }

    // 开始排队，即提交队列任务
    ffrt::task_handle Enter(const std::function<void()>& func, const char *name, ffrt_queue_priority_t level, int delay)
    {
        return queue_->submit_h(func, ffrt::task_attr().name(name).priority(level).delay(delay));
    }

    // 退出排队，即取消队列任务
    int Exit(const ffrt::task_handle &t)
    {
        return queue_->cancel(t);
    }

    // 等待排队，即等待队列任务
    void Wait(const ffrt::task_handle& handle)
    {
        queue_->wait(handle);
    }
};

void BankBusiness()
{
    usleep(100 * 1000);
    OH_LOG_INFO(LOG_APP, "saving or withdraw ordinary customer");
}

void BankBusinessVIP()
{
    usleep(100 * 1000);
    OH_LOG_INFO(LOG_APP, "saving or withdraw VIP");
}

int concurrent_queue_cpp_exec()
{
    BankQueueSystem bankQueue("Bank", 2);

    auto task1 = bankQueue.Enter(BankBusiness, "customer1", ffrt_queue_priority_low, 0);
    auto task2 = bankQueue.Enter(BankBusiness, "customer2", ffrt_queue_priority_low, 0);
    // VIP享受更优先的服务
    auto task3 = bankQueue.Enter(BankBusinessVIP, "customer3 vip", ffrt_queue_priority_high, 0);
    auto task4 = bankQueue.Enter(BankBusiness, "customer4", ffrt_queue_priority_low, 0);
    auto task5 = bankQueue.Enter(BankBusiness, "customer5", ffrt_queue_priority_low, 0);

    // 取消客户4的服务
    bankQueue.Exit(task4);

    // 等待所有的客户服务完成
    bankQueue.Wait(task5);
    return 0;
}
// [End concurrent_cpp]