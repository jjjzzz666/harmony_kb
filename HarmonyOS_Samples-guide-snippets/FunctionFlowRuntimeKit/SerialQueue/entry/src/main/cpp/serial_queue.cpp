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

// [Start serial_c]
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include "hilog/log.h"
#include "ffrt/ffrt.h" // 来自 OpenHarmony 第三方库 "@ppd/ffrt"

#undef LOG_TAG
#define LOG_TAG "SerialTag"

typedef struct {
    FILE *logFile;          // 日志文件指针
    ffrt_queue_t queue;     // 任务队列
} logger_t;

// 全局Logger变量
logger_t* g_logger = NULL;

// 初始化日志系统
logger_t *logger_create(const char *filename)
{
    logger_t *logger = (logger_t *)malloc(sizeof(logger_t));
    if (!logger) {
        OH_LOG_ERROR(LOG_APP, "Failed to allocate memory for logger_t");
        return NULL;
    }

    // 打开日志文件
    logger->logFile = stdout;
    if (!logger->logFile) {
        OH_LOG_ERROR(LOG_APP, "Failed to open log file");
        free(logger);
        return NULL;
    }
    OH_LOG_INFO(LOG_APP, "Log file opened: %{public}s", filename);

    // 创建任务队列
    logger->queue = ffrt_queue_create(ffrt_queue_serial, "logger_queue_c", NULL);
    if (!logger->queue) {
        OH_LOG_ERROR(LOG_APP, "Failed to create queue");
        fclose(logger->logFile);
        free(logger);
        return NULL;
    }

    return logger;
}

// 销毁日志系统
void logger_destroy(logger_t *logger)
{
    if (logger) {
        // 销毁队列
        if (logger->queue) {
            ffrt_queue_destroy(logger->queue);
        }

        // 关闭日志文件
        if (logger->logFile) {
            fclose(logger->logFile);
            OH_LOG_INFO(LOG_APP, "Log file closed");
        }

        free(logger);
    }
}

// 日志任务
void write_task(void *arg)
{
    char *message = (char *)arg;
    if (g_logger && g_logger->logFile) {
        OH_LOG_INFO(LOG_APP, "Writing message %{public}s", message);
        fflush(g_logger->logFile);
    }

    free(message);
}

// 添加日志任务
void logger_log(logger_t *logger, const char *message)
{
    if (!logger || !logger->queue) {
        return;
    }

    // 复制消息字符串
    char *messageCopy = strdup(message);
    if (!messageCopy) {
        OH_LOG_ERROR(LOG_APP, "Failed to allocate memory for message");
        return;
    }

    ffrt_queue_submit_f(logger->queue, write_task, messageCopy, NULL);
}

int serial_queue_exec()
{
    // 初始化全局logger
    g_logger = logger_create("log_c.txt");
    if (!g_logger) {
        return -1;
    }

    // 使用全局logger添加日志任务
    logger_log(g_logger, "Log message 1");
    logger_log(g_logger, "Log message 2");
    logger_log(g_logger, "Log message 3");

    // 模拟主线程继续执行其他任务
    sleep(1);

    // 销毁全局logger
    logger_destroy(g_logger);
    g_logger = NULL;
    return 0;
}
// [End serial_c]