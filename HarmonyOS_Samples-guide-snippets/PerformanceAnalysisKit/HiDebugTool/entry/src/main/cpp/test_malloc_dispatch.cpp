/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

#include <cstddef>
#include <cstdint>
#include <cstdio>
#include <sys/mman.h>
#include <unistd.h>
#include <thread>
#include <iostream>
#include <map>
#include <vector>
#include <string>
#include "string.h"
#include <cstring>
// [Start MallocDispatchTableImport]
#include "hidebug/hidebug.h"
#include "hidebug/hidebug_type.h"
// [End MallocDispatchTableImport]
#include "hilog/log.h"
#pragma clang optimize off

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x3200
#define LOG_TAG "MallocDispatch"
namespace {
    bool g_isInit = false;
    HiDebug_MallocDispatch* g_current = nullptr;
}
static void* MyMalloc(size_t size)
{
    HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
    printf("test my_malloc---\n");
    return original->malloc(size);
}

static void MyFree(void* ptr)
{
    HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
    printf("test my_free----\n");
    original->free(ptr);
}

// [Start DIYMapFunctions]
static void* MyMmap(void* addr, size_t len, int prot, int flags, int fd, off_t offset)
{
    HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
    void* returnAddr = original->mmap(addr, len, prot, flags, fd, offset);
    OH_LOG_INFO(LOG_APP, "test MyMmap with len:%{public}d and addr:%{public}p", len, returnAddr);
    return returnAddr;
}

static int MyMunmap(void* addr, size_t len)
{
    HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
    OH_LOG_INFO(LOG_APP, "test MyMunmap with len:%{public}d and addr:%{public}p", len, addr);
    return original->munmap(addr, len);
}
// [End DIYMapFunctions]

static void* MyCalloc(size_t nmemb, size_t size)
{
    HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
    printf("test my_calloc----\n");
    return original->calloc(nmemb, size);
}

static void* MyRealloc(void* ptr, size_t size)
{
    HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
    printf("test my_realloc----\n");
    return original->realloc(ptr, size);
}

HiDebug_MallocDispatch* InitCustomMalloc()
{
    // [Start InitCustomMalloc]
    //Obtain default MallocDispatchTable that can allocate memory directly.
    HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
    //Create a MallocDispatchTable struct called current.
    HiDebug_MallocDispatch* current = (HiDebug_MallocDispatch*)original->malloc(sizeof(HiDebug_MallocDispatch));
    memset(current, 0, sizeof(HiDebug_MallocDispatch));
    //replace function pointers of current, from which self-defined functions can be redirected.
    current->mmap = MyMmap;
    current->munmap = MyMunmap;
    // [End InitCustomMalloc]
    current->malloc = MyMalloc;
    current->free = MyFree;
    current->calloc = MyCalloc;
    current->realloc = MyRealloc;
    // [Start SetMallocDispatchTable]
    OH_HiDebug_SetMallocDispatchTable(current);
    // [End SetMallocDispatchTable]
    return current;
}

void DesCustomMalloc(HiDebug_MallocDispatch* current)
{
    // [Start DesCustomMalloc]
    //release memory of self-defined MallocDispatchTable struct.
    HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
    original->free(current);
    //reset MallocDispatchTable strut that libc uses.
    OH_HiDebug_RestoreMallocDispatchTable();
    // [End DesCustomMalloc]
}

void TestMalloc()
{
    int* temp = (int*)malloc(sizeof(int));
    if (temp == nullptr) {
        printf("malloc failed\n");
        return;
    }
    *temp = 8;
    int* temp2 = (int*)malloc(sizeof(int));
    if (temp2 == nullptr) {
        printf("malloc failed\n");
        return;
    }
    *temp2 = 10;
    int ret = *temp2 + *temp;
    printf("ret = %d\n", ret);
    free(temp);
    free(temp2);
}
void TestMmap()
{
    // [Start TestMallocDispatchMmap]
    char* mapPtr = nullptr;
    const size_t bufferSize = 100;  // 100 : the size of memory
    mapPtr = (char*)mmap(nullptr, bufferSize, PROT_READ | PROT_WRITE, MAP_SHARED | MAP_ANONYMOUS, -1, 0);
    if (mapPtr == MAP_FAILED) {
        printf("mmap failed\n");
        return;
    }
    munmap(mapPtr, bufferSize);
    // [End TestMallocDispatchMmap]
}

void TestCalloc()
{
    int* ptr = (int*)calloc(5, sizeof(int));  // 5 : the length of array
    if (ptr == nullptr) {
        printf("calloc failed\n");
        return;
    }
    for (size_t i = 0; i < 5; ++i) {  // 5 : the length of array
        ptr[i] = i * i;
        printf("ptr[%zu] = %d\n", i, ptr[i]);
    }
    free(ptr);
}

void TestRealloc()
{
    int* ptr = (int*)malloc(5 * sizeof(int)); // 5 : the length of array
    if (ptr == nullptr) {
        printf("malloc failed\n");
        return;
    }
    for (size_t i = 0; i < 5; ++i) { // 5 : the length of array
        ptr[i] = i * i;
        printf("ptr[%zu] = %d\n", i, ptr[i]);
    }
    int* newPtr = (int*)realloc(ptr, 10 * sizeof(int)); // 10 : the length of array
    if (newPtr == nullptr) {
        printf("realloc failed\n");
        free(ptr);
        return;
    }
    for (size_t i = 0; i < 10; ++i) { // 10 : the length of array
        newPtr[i] = i * i;
        printf("newPtr[%zu] = %d\n", i, newPtr[i]);
    }
    free(newPtr);
}

void TestMutilThread(int num)
{
    std::cout << "TestMutilThread num = " << num << ", thread_id is " << std::this_thread::get_id() << std::endl;
    TestMalloc();
    TestMmap();
    TestCalloc();
    TestRealloc();
}

class TestCustomClass {
   private:
    int temp_;

   public:
    TestCustomClass()
    {
        temp_ = 10;
        printf("TestCustomClass constructor\n");
    }
    ~TestCustomClass()
    {
        printf("TestCustomClass destructor\n");
    }
};

void TestNewFunc()
{
    int* ptr = new int(10);
    if (ptr == nullptr) {
        printf("new failed\n");
        return;
    }
    printf("ptr = %d\n", *ptr);
    delete ptr;
    ptr = nullptr;
    int* ptr2 = new int[10]; // 10 : the length of array
    if (ptr2 == nullptr) {
        printf("new failed\n");
        return;
    }
    for (size_t i = 0; i < 10; ++i) { // 10 : the length of array
        ptr2[i] = i * i;
    }
    for (size_t i = 0; i < 10; ++i) { // 10 : the length of array
        printf("ptr2[%zu] = %d\n", i, ptr2[i]);
    }
    delete[] ptr2;
    ptr2 = nullptr;
    std::string* str = new std::string("hello, world");
    if (str == nullptr) {
        printf("new failed\n");
        return;
    }
    printf("str = %s\n", str->c_str());
    delete str;
    str = nullptr;
    TestCustomClass* test = new TestCustomClass();
    if (test == nullptr) {
        printf("new failed\n");
        return;
    }
    delete test;
    test = nullptr;
    std::vector<int>* vec = new std::vector<int>(10); // 10 : the length of vector
    if (vec == nullptr) {
        printf("new failed\n");
        return;
    }
    for (size_t i = 0; i < vec->size(); ++i) {
        (*vec)[i] = i * i;
    }
    for (size_t i = 0; i < vec->size(); ++i) {
        printf("vec[%zu] = %d\n", i, (*vec)[i]);
    }
    delete vec;
    vec = nullptr;
    std::map<int, int>* map = new std::map<int, int>();
    if (map == nullptr) {
        printf("new failed\n");
        return;
    }
    for (size_t i = 0; i < 10; ++i) { // 10 : test 10 times
        (*map)[i] = i * i;
    }
    for (size_t i = 0; i < 10; ++i) { // 10 : test 10 times
        printf("map[%zu] = %d\n", i, (*map)[i]);
    }
    delete map;
    map = nullptr;
}

static void* MyNestedMalloc(size_t size)
{
    if (g_isInit) {
        HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
        return original->malloc(size);
    }
    HiDebug_MallocDispatch* original = (HiDebug_MallocDispatch*)OH_HiDebug_GetDefaultMallocDispatchTable();
    printf("test MyNestedMalloc----\n");
    g_isInit = true;
    TestMalloc();
    g_isInit = false;
    return original->malloc(size);
}

void SetMallocDispatchImpl()
{
    OH_LOG_INFO(LOG_APP, "SetMallocDispatch");
    g_current = InitCustomMalloc();
}

void ResetMallocDispatchImpl()
{
    OH_LOG_INFO(LOG_APP, "ResetMallocDispatch");
    DesCustomMalloc(g_current);
}

void AllocateMemoryImpl()
{
    TestMmap();
}

#pragma clang optimize on