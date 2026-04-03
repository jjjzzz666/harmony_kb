/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import stream from './@ohos.util.stream'

/**
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace xml {
    /**
   * The XmlDynamicSerializer interface is used to dynamically generate an xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   * @name XmlDynamicSerializer
   */
  class XmlDynamicSerializer {
    /**
     * A parameterized constructor used to create a new XmlDynamicSerializer instance.
     * The input parameter is an encoding format of string type.
     *
     * @param { string } [encoding] - [encoding='utf8']  this is its encoding, only support utf-8.
     * @throws { BusinessError } 10200066 - Incorrect encoding format, only support utf-8.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    constructor(encoding?: string);

    /**
     * Write an attribute to xml element.
     *
     * @param { string } name - Key name of the attribute. Cannot be an empty string.
     * @param { string } value - Values of attribute.
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200063 - Illegal position for xml.
     * @throws { BusinessError } 10200064 - Cannot be an empty string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setAttributes(name: string, value: string): void;

    /**
     * Add an empty element.
     *
     * @param { string } name - Name of the element.
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200064 - Cannot be an empty string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    addEmptyElement(name: string): void;

    /**
     * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200063 - Illegal position for xml.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setDeclaration(): void;

    /**
     * Writes a element start tag with the given name.
     *
     * @param { string } name - Name of the element.
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200064 - Cannot be an empty string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    startElement(name: string): void;

    /**
     * Writes end tag of the element.
     *
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200065 - There is no match between the startElement and the endElement.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    endElement(): void;

    /**
     * Writes the namespace of the current element tag.
     *
     * @param { string } prefix - Values name of the prefix. Cannot be an empty string.
     * @param { string } namespace - Values of namespace. Cannot be an empty string.
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200064 - Cannot be an empty string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setNamespace(prefix: string, namespace: string): void;

    /**
     * Writes the comment to xml.
     *
     * @param { string } text - Values of comment. Cannot be an empty string.
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200064 - Cannot be an empty string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setComment(text: string): void;

    /**
     * Writes the CDATA.
     *
     * @param { string } text - Values of CDATA. Cannot be an empty string.
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200064 - Cannot be an empty string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setCdata(text: string): void;

    /**
     * Writes the text to xml element.
     *
     * @param { string } text - Values of text. Cannot be an empty string.
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200064 - Cannot be an empty string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setText(text: string): void;

    /**
     * Writes the DOCTYPE.
     *
     * @param { string } text - Values of docType. Cannot be an empty string.
     * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
     * @throws { BusinessError } 10200064 - Cannot be an empty string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setDocType(text: string): void;

    /**
     * Get an ArrayBuffer from a XmlDynamicSerializer instance.
     *
     * @returns { ArrayBuffer } - Returns ArrayBuffer result from a XmlDynamicSerializer instance.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getOutput(): ArrayBuffer;
  }
  /**
   * The XmlSerializer interface is used to generate an xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @name XmlSerializer
   */
  /**
   * The XmlSerializer interface is used to generate an xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   * @name XmlSerializer
   */
  /**
   * The XmlSerializer interface is used to generate an xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @name XmlSerializer
   */
  class XmlSerializer {
    /**
     * A parameterized constructor used to create a new XmlSerializer instance.
     * As the input parameter of the constructor function, init supports three types.
     * The input parameter is an Arrarybuffer.
     * The input parameter is a DataView.
     * The input parameter is an encoding format of string type.
     *
     * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
     * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * A parameterized constructor used to create a new XmlSerializer instance.
     * As the input parameter of the constructor function, init supports three types.
     * The input parameter is an Arrarybuffer.
     * The input parameter is a DataView.
     * The input parameter is an encoding format of string type.
     *
     * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
     * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * A constructor used to create an XmlSerializer instance.
     *
     * @param { ArrayBuffer | DataView } buffer - ArrayBuffer or DataView for storing the XML information to set.
     * @param { string } [encoding] - Encoding format. The default value is 'utf-8' (the only format currently supported).
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(buffer: ArrayBuffer | DataView, encoding?: string);

    /**
     * Write an attribute.
     *
     * @param { string } name - Key name of the attribute.
     * @param { string } value - Values of attribute.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Write an attribute.
     *
     * @param { string } name - Key name of the attribute.
     * @param { string } value - Values of attribute.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Sets an attribute.
     *
     * @param { string } name - Key of the attribute.
     * @param { string } value - Value of the attribute.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setAttributes(name: string, value: string): void;

    /**
     * Add an empty element.
     *
     * @param { string } name - Key name of the attribute.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Add an empty element.
     *
     * @param { string } name - Key name of the attribute.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Adds an empty element.
     *
     * @param { string } name - Name of the empty element to add.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    addEmptyElement(name: string): void;

    /**
     * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Sets a file declaration with encoding.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setDeclaration(): void;

    /**
     * Writes a element start tag with the given name.
     *
     * @param { string } name - Name of the element.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Writes a element start tag with the given name.
     *
     * @param { string } name - Name of the element.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes the start tag based on the given element name.
     *
     * @param { string } name - Name of the element.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    startElement(name: string): void;

    /**
     * Writes end tag of the element.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Writes end tag of the element.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Writes the end tag of the element.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    endElement(): void;

    /**
     * Writes the namespace of the current element tag.
     *
     * @param { string } prefix - Values name of the prefix.
     * @param { string } namespace - Values of namespace.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Writes the namespace of the current element tag.
     *
     * @param { string } prefix - Values name of the prefix.
     * @param { string } namespace - Values of namespace.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the namespace for an element tag.
     *
     * @param { string } prefix - Prefix of the element and its child elements.
     * @param { string } namespace - Namespace to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setNamespace(prefix: string, namespace: string): void;

    /**
     * Writes the comment.
     *
     * @param { string } text - Values of comment.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Writes the comment.
     *
     * @param { string } text - Values of comment.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Sets a comment.
     *
     * @param { string } text - Comment to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setComment(text: string): void;

    /**
     * Writes the CDATA.
     *
     * @param { string } text -  Values of CDATA.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Writes the CDATA.
     *
     * @param { string } text - Values of CDATA.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Adds data to the CDATA tag. The structure of the generated CDATA tag is "<! <![CDATA["+ Data added + "]]>".
     *
     * @param { string } text - CDATA data to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setCDATA(text: string): void;

    /**
     * Writes the text.
     *
     * @param { string } text - Values of text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Writes the text.
     *
     * @param { string } text - Values of text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Sets a tag value.
     *
     * @param { string } text - Tag value to set, which is the content of the text attribute.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setText(text: string): void;

    /**
     * Writes the DOCTYPE.
     *
     * @param { string } text - Values of docType.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Writes the DOCTYPE.
     *
     * @param { string } text - Values of docType.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Sets a document type.
     *
     * @param { string } text - Content of DocType to set.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setDocType(text: string): void;
  }

  /**
   * The event types represented by XML elements.
   *
   * @enum { number }
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * The event types represented by XML elements.
   *
   * @enum { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * The event types represented by XML elements.
   *
   * @enum { number }
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum EventType {
    /**
     * Start a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Start a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Start a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    START_DOCUMENT,
    /**
     * End a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * End a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * End a document.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    END_DOCUMENT,
    /**
     * Start a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Start a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Start a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    START_TAG,
    /**
     * End a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * End a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * End a tag.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    END_TAG,
    /**
     * Character data.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Character data.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Character data.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT,
    /**
     * A CDATA sections.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * A CDATA sections.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * A CDATA sections.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    CDSECT,
    /**
     * An XML comment.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * An XML comment.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * An XML comment.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    COMMENT,
    /**
     * An XML document type declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * An XML document type declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * An XML document type declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    DOCDECL,
    /**
     * An XML processing instruction declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * An XML processing instruction declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * An XML processing instruction declaration.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    INSTRUCTION,
    /**
     * An entity reference.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * An entity reference.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * An entity reference.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ENTITY_REFERENCE,
    /**
     * A whitespace.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * A whitespace.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * A whitespace.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WHITESPACE
  }

  /**
   * The current parse info.
   *
   * @typedef ParseInfo
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * The current parse info.
   *
   * @typedef ParseInfo
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * The current parse info.
   *
   * @typedef ParseInfo
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface ParseInfo {
    /**
     * The current column number, starting from 1.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The current column number, starting from 1.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the current column number, starting from 1.
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getColumnNumber(): int;
    /**
     * The current depth of the element.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The current depth of the element.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the depth of this element.
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getDepth(): int;
    /**
     * The current line number, starting from 1.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The current line number, starting from 1.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the current line number, starting from 1.
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getLineNumber(): int;
    /**
     * The current element's name.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The current element's name.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the name of this element.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getName(): string;
    /**
     * The current element's namespace.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The current element's namespace.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the namespace of this element.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getNamespace(): string;
    /**
     * The current element's prefix.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The current element's prefix.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the prefix of this element.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getPrefix(): string;
    /**
     * The text content of the current event as String.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The text content of the current event as String.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the text of the current event.
     *
     * @returns { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getText(): string;
    /**
     * Returns true if the current element is empty.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Returns true if the current element is empty.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the current element is empty.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isEmptyElementTag(): boolean;
    /**
     * Checks whether the current TEXT event contains only whitespace characters.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Checks whether the current TEXT event contains only whitespace characters.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the current event contains only whitespace characters.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    isWhitespace(): boolean;
    /**
     * Returns the number of attributes of the current start tag.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Returns the number of attributes of the current start tag.
     *
     * @returns { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the number of attributes for the current start tag.
     *
     * @returns { int }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    getAttributeCount(): int;
  }

  /**
   * Parse options for XmlPullParser.
   *
   * @typedef ParseOptions
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * Parse options for XmlPullParser.
   *
   * @typedef ParseOptions
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * Parse options for XmlPullParser.
   *
   * @typedef ParseOptions
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface ParseOptions {
    /**
     * Whether to parsing Doctype of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to parsing Doctype of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to parsing Doctype of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    supportDoctype?: boolean;

    /**
     * Whether to ignore parsing texts of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to ignore parsing texts of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to ignore parsing texts of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    ignoreNameSpace?: boolean;

    /**
     * Tag value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Tag value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Tag value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    tagValueCallbackFunction?: (name: string, value: string) => boolean;

    /**
     * Attribute value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Attribute value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Attribute value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    attributeValueCallbackFunction?: (name: string, value: string) => boolean;

    /**
     * Attribute value and tag callback function.
     *
     * @type { ?AttributeWithTagCb }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     * @since 24 static
     */
    attributeWithTagCallbackFunction?: AttributeWithTagCb;

    /**
     * Token value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Token value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Token value callback function.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    tokenValueCallbackFunction?: (eventType: EventType, value: ParseInfo) => boolean;
  }

  /**
   * The type of ParseOptions attributeWithTagCallbackFunction.
   *
   * @typedef { function } AttributeWithTagCb
   * @param { string } tagName - The tag in xml parse node
   * @param { string } key - The key in xml parse node
   * @param { string } value - The value in xml parse node
   * @returns { boolean } - whether continue to parse xml data
   * @syscap SystemCapability.Utils.Lang
   * @atomicservice
   * @since 20 dynamic
   */
  /**
   * The type of ParseOptions attributeWithTagCallbackFunction.
   *
   * @typedef { function } AttributeWithTagCb
   * @param { string } tagName - The tag in xml parse node
   * @param { string } key - The key in xml parse node
   * @param { string } value - The value in xml parse node
   * @returns { boolean } - whether continue to parse xml data
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   * @since 24 static
   */
  type AttributeWithTagCb = (tagName: string, key: string, value: string) => boolean;

  /**
   * The XmlPullParser interface is used to parse the existing xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @name XmlPullParser
   */
  /**
   * The XmlPullParser interface is used to parse the existing xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   * @name XmlPullParser
   */
  /**
   * The XmlPullParser interface is used to parse the existing xml file.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @name XmlPullParser
   */
  class XmlPullParser {
    /**
     * A constructor used to create a new XmlPullParser instance.
     *
     * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
     * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * A constructor used to create a new XmlPullParser instance.
     *
     * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
     * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Creates and returns an XmlPullParser object.
     *
     * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
     * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(buffer: ArrayBuffer | DataView, encoding?: string);

    /**
     * Starts parsing the XML file.
     *
     * @param { ParseOptions } option - Parse options for XmlPullParser, the interface including
	   * two Boolean variables and three callback functions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Starts parsing the XML file.
     *
     * @param { ParseOptions } option - Parse options for XmlPullParser, the interface including
	   * two Boolean variables and three callback functions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Starts parsing the XML file.
     *
     * @param { ParseOptions } option - Parse options for XmlPullParser, the interface including
	   * two Boolean variables and three callback functions.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 14
     * @useinstead ohos.xml.XmlPullParser.parseXml
     */
    parse(option: ParseOptions): void;

    /**
     * Parses XML information.
     *
     * @param { ParseOptions } option - XML parsing options.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    parseXml(option: ParseOptions): void;
  }

  /**
   * The XmlSAXParser provides the capability of parsing XML in a streaming manner.
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   * @name XmlSAXParser
   */
  class XmlSAXParser {
    /**
     * Creates and returns an XmlSAXParser instance.
     *
     * @param { stream.Readable } inputStream - An instance, of stream.Readable for the new XmlSAXParser.
     * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    constructor(inputStream: stream.Readable, encoding?: string);

    /**
     * Creates and returns an XmlSAXParser instance.
     *
     * @param { XmlSAXHandler } xmlSAXHandler - The simple API for XML handler.
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    parse(xmlSAXHandler: XmlSAXHandler): void;
  }

  /**
   * A simple API for XML handling
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface XmlSAXHandler {
    /**
     * CallBack function triggered at the beginning of the document
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    startDocument(): void;

    /**
     * CallBack function triggered at the end of the document
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    endDocument(): void;

    /**
     * CallBack function triggered at the beginning of the element
     *
     * @param { string } elementName - Name of the element
     * @param { string | undefined } namespaceURI - URI of the namespace
     * @param { string | undefined } qName - Fully qualified name with namespace
     * @param { Map<string,string> } attributes - attributes mapping
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    startElement(elementName: string, namespaceURI: string | undefined, qName: string | undefined, attributes: Map<string,string>): void;

    /**
     * CallBack function triggered at the end of the element
     *
     * @param { string } elementName - Name of the element
     * @param { string | undefined } namespaceURI - URI of the namespace
     * @param { string | undefined } qName - Fully qualified name with namespace
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    endElement(elementName: string, namespaceURI: string | undefined, qName: string | undefined): void;

    /**
     * CallBack function triggered by the text content
     *
     * @param { string } content - literal content
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    characters(content: string): void;
  }
}
export default xml;
