/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit ArkTS
 */

/* 共用部分*/
/*** if arkts dynamic&static */
import buffer from '@ohos.buffer';
import uri from '@ohos.uri';
import url from '@ohos.url';
import ArrayList from '@ohos.util.ArrayList';
import util from '@ohos.util';
import Deque from '@ohos.util.Deque';
import HashMap from '@ohos.util.HashMap';
import HashSet from '@ohos.util.HashSet';
import LightWeightMap from '@ohos.util.LightWeightMap';
import LightWeightSet from '@ohos.util.LightWeightSet';
import LinkedList from '@ohos.util.LinkedList';
import List from '@ohos.util.List';
import PlainArray from '@ohos.util.PlainArray';
import Queue from '@ohos.util.Queue';
import Stack from '@ohos.util.Stack';
import TreeMap from '@ohos.util.TreeMap';
import TreeSet from '@ohos.util.TreeSet';
import xml from '@ohos.xml';
import collections from '@arkts.collections';
import stream from '@ohos.util.stream';
import Decimal from '@arkts.math.Decimal';
import { ArrayListComparatorFn } from '@ohos.util.ArrayList';
import { ListComparatorFn } from '@ohos.util.List';
/*** endif */

/* 1.1 独有部分 */
import convertxml from '@ohos.convertxml';
import process from '@ohos.process';
import taskpool from '@ohos.taskpool';
import Vector from '@ohos.util.Vector';
import fastbuffer from '@ohos.fastbuffer';
import worker, {
  DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, EventTarget,
  MessageEvent, MessageEvents, PostMessageOptions, ThreadWorkerGlobalScope,
  WorkerEventListener, WorkerEventTarget, WorkerOptions, ThreadWorkerPriority
} from '@ohos.worker';
import JSON from '@ohos.util.json';
import lang, { Retention, RetentionPolicy } from '@arkts.lang';
import ArkTSUtils from '@arkts.utils';
export {
  ArrayList, convertxml, DedicatedWorkerGlobalScope, Deque, ErrorEvent, Event, EventListener,
  EventTarget, HashMap, HashSet, LightWeightMap, LightWeightSet, LinkedList, List, MessageEvent,
  MessageEvents, PlainArray, PostMessageOptions, Queue, Stack, ThreadWorkerGlobalScope, TreeMap,
  TreeSet, Vector, WorkerEventListener, WorkerEventTarget, WorkerOptions, ThreadWorkerPriority, buffer, process, taskpool,
  uri, url, util, worker, xml, JSON, lang, Retention, RetentionPolicy, ArkTSUtils, collections, stream, Decimal, fastbuffer,
  ArrayListComparatorFn, ListComparatorFn
};

/* 1.2 独有部分 */
/*** if arkts static */
import transfer from '@ohos.transfer';
import { ArrayListForEachCb } from '@ohos.util.ArrayList';
import { ArrayListReplaceCb } from '@ohos.util.ArrayList';
import { DequeForEachCb } from '@ohos.util.Deque';
import { HashMapCbFn } from '@ohos.util.HashMap';
import { HashSetCbFn } from '@ohos.util.HashSet';
import { LightWeightMapCbFn } from '@ohos.util.LightWeightMap';
import { LightWeightSetForEachCb } from '@ohos.util.LightWeightSet';
import { LinkedListForEachCb } from '@ohos.util.LinkedList';
import { ListForEachCb } from '@ohos.util.List';
import { ListReplaceCb } from '@ohos.util.List';
import { PlainArrayForEachCb } from '@ohos.util.PlainArray';
import { QueueForEachCb } from '@ohos.util.Queue';
import { StackForEachCb } from '@ohos.util.Stack';
import { TreeMapForEachCb } from '@ohos.util.TreeMap';
import { TreeMapComparator } from '@ohos.util.TreeMap';
import { TreeSetForEachCb } from '@ohos.util.TreeSet';
import { TreeSetComparator } from '@ohos.util.TreeSet';
export {
  ArrayList, Deque, HashMap, HashSet, LightWeightMap, LightWeightSet, LinkedList, List,
  PlainArray, Queue, Stack, TreeMap, TreeSet, buffer, uri, url, util, stream, xml, transfer,
  collections, Decimal, ArrayListComparatorFn, ArrayListForEachCb, ArrayListReplaceCb,
  DequeForEachCb, HashMapCbFn, HashSetCbFn, LightWeightMapCbFn, LightWeightSetForEachCb,
  LinkedListForEachCb, ListComparatorFn, ListForEachCb, ListReplaceCb, PlainArrayForEachCb,
  QueueForEachCb, StackForEachCb, TreeMapForEachCb, TreeMapComparator, TreeSetForEachCb, TreeSetComparator
};
/*** endif */
