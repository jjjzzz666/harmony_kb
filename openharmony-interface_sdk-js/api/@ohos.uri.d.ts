/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

/**
 * The uri module provides utilities for URI resolution and parsing.
 *
 * @namespace uri
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * The uri module provides APIs for parsing URI strings that comply with the RFC3986 standard.
 * This standard defines how to encode and parse the identifiers used to locate network resources.
 * The module does not support parsing of URIs in non-standard scenarios.
 *
 * @namespace uri
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * The uri module provides APIs for parsing URI strings that comply with the RFC3986 standard.
 * This standard defines how to encode and parse the identifiers used to locate network resources.
 * The module does not support parsing of URIs in non-standard scenarios.
 *
 * @namespace uri
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace uri {
  /**
   * URI Represents a Uniform Resource Identifier (URI) reference.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @name URI
   */
  /**
   * URI Represents a Uniform Resource Identifier (URI) reference.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   * @name URI
   */
  /**
   * URI Represents a Uniform Resource Identifier (URI) reference.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   * @name URI
   */
  class URI {
    /**
     * URI constructor, which is used to instantiate a URI object.
     * uri: Constructs a URI by parsing a given string.
     *
     * @param { string } uri - uri uri
     * @throws { BusinessError } 10200002 - Invalid uri string.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * A constructor used to create a URI instance.
     *
     * @param { string } uri - Input object.
     * @throws { BusinessError } 10200002 - Invalid uri string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * A constructor used to create a URI instance.
     *
     * @param { string } uri - Input object.
     * @throws { BusinessError } 10200002 - Invalid uri string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(uri: string);
    /**
     * Returns the serialized URI as a string.
     *
     * @returns { string } Returns the serialized URI as a string.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Converts this URI into an encoded string.
     *
     * @returns { string } URI in a serialized string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Converts this URI into an encoded string.
     *
     * @returns { string } URI in a serialized string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    toString(): string;

    /**
     * Check whether this URI is equivalent to other URI objects.
     *
     * @param { URI } other - other other URI object to be compared
     * @returns { boolean } boolean Tests whether this URI is equivalent to other URI objects.
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.uri.URI.equalsTo
     */
    equals(other: URI): boolean;

    /**
     * Check whether this URI is equivalent to other URI objects.
     *
     * @param { URI } other - other other URI object to be compared
     * @returns { boolean } boolean Tests whether this URI is equivalent to other URI objects.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Checks whether this URI is the same as another URI object.
     *
     * @param { URI } other - URI object to compare.
     * @returns { boolean } boolean Tests whether this URI is equivalent to other URI objects.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether this URI is the same as another URI object.
     *
     * @param { URI } other - URI object to compare.
     * @returns { boolean } boolean Tests whether this URI is equivalent to other URI objects.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    equalsTo(other: URI): boolean;

    /**
     * Indicates whether this URI is an absolute URI.
     *
     * @returns { boolean } boolean Indicates whether the URI is an absolute URI (whether the scheme component is defined).
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Checks whether this URI is an absolute URI (whether the scheme component is defined).
     *
     * @returns { boolean } boolean Indicates whether the URI is an absolute URI (whether the scheme component is defined).
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether this URI is an absolute URI (whether the scheme component is defined).
     *
     * @returns { boolean } boolean Indicates whether the URI is an absolute URI (whether the scheme component is defined).
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    checkIsAbsolute(): boolean;

    /**
     * Normalize the path of this URI, It is not safe to call the normalize interface with URI.
     *
     * @returns { URI } URI Used to normalize the path of this URI and return a URI object whose path has been normalized.
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Normalizes the path of this URI.
     *
     * @returns { URI } URI Used to normalize the path of this URI and return a URI object whose path has been normalized.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Normalizes the path of this URI.
     *
     * @returns { URI } URI Used to normalize the path of this URI and return a URI object whose path has been normalized.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    normalize(): URI;
    /**
     * Obtains the first value of a given key from the query component of this URI. If the query component contains encoded content,
     * this API decodes the key before obtaining the value.
     *
     * @param { string } key - Key of the query parameter.
     * @returns { string } Return decoded value.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    getQueryValue(key: string): string;
    /**
     * Obtains the first value of a given key from the query component of this URI. If the query component contains encoded content,
     * this API decodes the key before obtaining the value.
     *
     * @param { string } key - Key of the query parameter.
     * @returns { string | null } Return decoded value, If no corresponding value is found return a null object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    getQueryValue(key: string): string | null;
    /**
     * Adds a query parameter to this URI to create a new URI, while keeping the existing URI unchanged.
     *
     * @param { string } [key] - Key of the query parameter.
     * @param { string } [value] - Value of the query parameter.
     * @returns { URI } Return URI object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addQueryValue(key: string, value: string): URI;
    /**
     * Obtains all non-repeated keys in the query component of this URI. 
     *
     * @returns { string[] } Return a set of decoded names.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getQueryNames(): string[];
    /**
     * Obtains the values of a given key from the query component of this URI.
     *
     * @param { string } key - Key of the URI query parameter.
     * @returns { string[] } Return a set of decoded values.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getQueryValues(key: string): string[];
    /**
     * Obtains the value of the Boolean type of a query parameter in this URI.
     *
     * @param { string } key - Indicates the key value to be queried.
     * @param { boolean } defaultValue - The default value returned when the key has no query parameters.
     * @returns { boolean } Query returns defaultValue if the key does not exist.
     * Query returns false if the value of the key is "false" or "0", otherwise returns true.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getBooleanQueryValue(key: string, defaultValue: boolean): boolean;
    /**
     * Clears the query component of this URI to create a new URI, while keeping the existing URI object unchanged.
     *
     * @returns { URI } After clearing, return the URI object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    clearQuery(): URI;
    /**
     * Obtains the last segment of this URI.
     *
     * @returns { string } Returns the last decoded segment, or null if the path is empty.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getLastSegment(): string;
    /**
     * Gets the decoded path segments.
     *
     * @returns { string[] } Return decoded path segments, each without a leading or trailing "/".
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getSegment(): string[];
    /**
     * Encodes a given field, appends it to the path component of this URI to create a new URI, and returns the new URI,
     * while keeping the existing URI unchanged.
     *
     * @param { string } [pathSegment] - path segment to be added.
     * @returns { URI } After adding, return the URI object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addSegment(pathSegment: string): URI;
    /**
     * Appends an encoded field to the path component of this URI to create a new URI and returns the new URI,
     * while keeping the existing URI unchanged.
     *
     * @param { string } pathSegment - Encoding path segment to be added.
     * @returns { URI } After adding, return the URI object.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    addEncodedSegment(pathSegment: string): URI;
    /**
     * Checks whether this URI is a hierarchical URI. The URI that starts with a slash (/) in scheme-specific-part is a
     * hierarchical URI. Relative URIs are also hierarchical.
     *
     * @returns { boolean } Return true as Hierarchical, otherwise return false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    checkHierarchical(): boolean;
    /**
     * Checks whether this URI is an opaque URI. The URI that does not start with a slash (/) is an opaque URI.
     *
     * @returns { boolean } Return true as Opaque, otherwise return false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    checkOpaque(): boolean;
    /**
     * Determine whether URI is Relative.
     *
     * @returns { boolean } Return true as Relative, otherwise return false.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    checkRelative(): boolean;
    /**
     * Creates a URI based on the provided scheme, scheme-specific-part, and fragment components.
     *
     * @param { string } scheme -  of the URI.
     * @param { string } ssp -scheme-specific-part, everything between the scheme separator (':') and the fragment
     * separator ('#'), which will get encoded.
     * @param { string } fragment - fragment, everything after the '#', null if undefined, will get encoded.
     * @returns { URI } Return Uri consisting of a given scheme, SSP, and fragment.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    static createFromParts(scheme: string, ssp: string, fragment: string): URI;
    /**
     * Gets the protocol part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the protocol part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the protocol part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Gets/Sets the protocol part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    scheme: string;

    /**
     * Obtains the user information part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Obtains the user information part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the user information part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Gets/Sets Obtains the user information part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    userInfo: string;

    /**
     * Gets the hostname portion of the URI without a port.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the hostname portion of the URI without a port.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the hostname portion of the URI without a port.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    host: string;

    /**
     * Gets the port portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the port portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the port portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    port: string;

    /**
     * Gets the path portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the path portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the path portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Gets/Sets the path portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    path: string;

    /**
     * Gets the query portion of the URI
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the query portion of the URI
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the query portion of the URI
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Gets/Sets the query portion of the URI
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    query: string;

    /**
     * Gets the fragment part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the fragment part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the fragment part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Gets/Sets the fragment part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    fragment: string;

    /**
     * Gets the decoding permission component part of this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the decoding permission component part of this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the decoding permission component part of this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Gets/Sets the decoding permission component part of this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    authority: string;

    /**
     * Gets the decoding scheme-specific part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Gets the decoding scheme-specific part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the decoding scheme-specific part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Gets/Sets the decoding scheme-specific part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    ssp: string;
    /**
     * Gets/Sets Obtains the encoded user information part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedUserInfo: string;
    /**
     * Gets/Sets the encoded path portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedPath: string;
    /**
     * Gets/Sets the encoded query component from this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedQuery: string;
    /**
     * Gets/Sets the encoded fragment part of this URI, everything after the '#'.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedFragment: string;
    /**
     * Gets/Sets the encoded authority part of this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedAuthority: string;
    /**
     * Gets/Sets the scheme-specific part of this URI, i.e. everything between the scheme separator ':' and
     * the fragment separator '#'.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    encodedSSP: string;
    /**
     * Gets the protocol part of the URI.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get scheme(): string | null;

    /**
     * Sets the protocol part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set scheme(input: string);

    /**
     * Gets Obtains the user information part of the URI.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get userInfo(): string | null;

    /**
     * Sets Obtains the user information part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set userInfo(input: string);

    /**
     * Gets the hostname portion of the URI without a port.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    get host(): string | null;

    /**
     * Gets the port portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 23 static
     */
    get port(): string;

    /**
     * Gets the path portion of the URI.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get path(): string | null;

    /**
     * Sets the path portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set path(input: string);

    /**
     * Gets the query portion of the URI
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get query(): string | null;

    /**
     * Sets the query portion of the URI
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set query(input: string);

    /**
     * Gets the fragment part of the URI.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get fragment(): string | null;

    /**
     * Sets the fragment part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set fragment(input: string);

    /**
     * Gets the decoding permission component part of this URI.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get authority(): string | null;

    /**
     * Sets the decoding permission component part of this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set authority(input: string);

    /**
     * Gets the decoding scheme-specific part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get ssp(): string;

    /**
     * Sets the decoding scheme-specific part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set ssp(input: string);

    /**
     * Gets Obtains the encoded user information part of the URI.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedUserInfo(): string | null;
    /**
     * Sets Obtains the encoded user information part of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedUserInfo(input: string);

    /**
     * Gets the encoded path portion of the URI.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedPath(): string | null;
    /**
     * Sets the encoded path portion of the URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedPath(input: string);

    /**
     * Gets the encoded query component from this URI.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedQuery(): string | null;
    /**
     * Sets the encoded query component from this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedQuery(input: string);

    /**
     * Gets the encoded fragment part of this URI, everything after the '#'.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedFragment(): string | null;
    /**
     * Sets the encoded fragment part of this URI, everything after the '#'.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedFragment(input: string);

    /**
     * Gets the encoded authority part of this URI.
     *
     * @type { string | null }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedAuthority(): string | null;
    /**
     * Sets the encoded authority part of this URI.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedAuthority(input: string);

    /**
     * Gets the scheme-specific part of this URI, i.e. everything between the scheme separator ':' and
     * the fragment separator '#'.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    get encodedSSP(): string;

    /**
     * Sets the scheme-specific part of this URI, i.e. everything between the scheme separator ':' and
     * the fragment separator '#'.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    set encodedSSP(input: string);
  }
}
export default uri;
