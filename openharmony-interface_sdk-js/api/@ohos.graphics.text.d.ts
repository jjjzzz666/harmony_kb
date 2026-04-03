/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics2D
 */
import type drawing from './@ohos.graphics.drawing';
import type common2D from './@ohos.graphics.common2D';
/*** if arkts static */
import { Resource } from './global/resource';
/*** endif */

/**
 * The Text module provides a set of APIs for text layout and font management. 
 * It aims to deliver high-quality typesetting through features like character-to-glyph
 * conversion, kerning, line breaking, alignment, and text measurement. Additionally,
 * it provides font management capabilities, including font registration, font descriptors,
 * and font collection management.
 * 
 * This module provides the following classes for creating complex text paragraphs:
 * 
 * TextStyle: defines the font type, size, spacing, and other text properties.
 * FontCollection: manages a collection of different fonts.
 * FontDescriptor: provides information about font descriptors.
 * ParagraphStyle: controls line break and word break strategies for the entire paragraph.
 * ParagraphBuilder: used to create different paragraph objects.
 * Paragraph: created by calling build() of the ParagraphBuilder class.
 * LineTypeset: created by calling buildLineTypeset() of the ParagraphBuilder class.
 * TextLine: paragraph text on a line-by-line basis, obtained by calling getTextLines() of the Paragraph class.
 * Run: text typesetting unit, obtained by calling getGlyphRuns() of the TextLine class.
 *
 * @namespace text
 * @syscap SystemCapability.Graphics.Drawing
 * @since 12 dynamic
 */
/**
 * The Text module provides a set of APIs for text layout and font management.
 * It aims to deliver high-quality typesetting through features like character-to-glyph
 * conversion, kerning, line breaking, alignment, and text measurement. Additionally,
 * it provides font management capabilities, including font registration, font descriptors,
 * and font collection management.
 *
 * This module provides the following classes for creating complex text paragraphs:
 *
 * TextStyle: defines the font type, size, spacing, and other text properties.
 * FontCollection: manages a collection of different fonts.
 * FontDescriptor: provides information about font descriptors.
 * ParagraphStyle: controls line break and word break strategies for the entire paragraph.
 * ParagraphBuilder: used to create different paragraph objects.
 * Paragraph: created by calling build() of the ParagraphBuilder class.
 * LineTypeset: created by calling buildLineTypeset() of the ParagraphBuilder class.
 * TextLine: paragraph text on a line-by-line basis, obtained by calling getTextLines() of the Paragraph class.
 * Run: text typesetting unit, obtained by calling getGlyphRuns() of the TextLine class.
 *
 * @namespace text
 * @syscap SystemCapability.Graphics.Drawing
 * @form
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
/**
 * The Text module provides a set of APIs for text layout and font management.
 * It aims to deliver high-quality typesetting through features like character-to-glyph
 * conversion, kerning, line breaking, alignment, and text measurement. Additionally,
 * it provides font management capabilities, including font registration, font descriptors,
 * and font collection management.
 *
 * This module provides the following classes for creating complex text paragraphs:
 *
 * TextStyle: defines the font type, size, spacing, and other text properties.
 * FontCollection: manages a collection of different fonts.
 * FontDescriptor: provides information about font descriptors.
 * ParagraphStyle: controls line break and word break strategies for the entire paragraph.
 * ParagraphBuilder: used to create different paragraph objects.
 * Paragraph: created by calling build() of the ParagraphBuilder class.
 * LineTypeset: created by calling buildLineTypeset() of the ParagraphBuilder class.
 * TextLine: paragraph text on a line-by-line basis, obtained by calling getTextLines() of the Paragraph class.
 * Run: text typesetting unit, obtained by calling getGlyphRuns() of the TextLine class.
 *
 * @namespace text
 * @syscap SystemCapability.Graphics.Drawing
 * @crossplatform
 * @form
 * @atomicservice
 * @since 24 dynamic&static
 */
declare namespace text {

  /**
   * Refers to how to align the horizontal position of text when displaying text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Refers to how to align the horizontal position of text when displaying text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Refers to how to align the horizontal position of text when displaying text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextAlign {
    /**
     * Use the left side of the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Use the left side of the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Use the left side of the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    LEFT = 0,

    /**
     * Use the right side of the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Use the right side of the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Use the right side of the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    RIGHT = 1,

    /**
     * Use the midpoint line the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Use the midpoint line the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Use the midpoint line the text as a reference line for alignment.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    CENTER = 2,

    /**
     * Justified, which means that each line (except the last line) is stretched so that every line has equal width,
     * and the left and right margins are straight.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Justified, which means that each line (except the last line) is stretched so that every line has equal width,
     * and the left and right margins are straight.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Justified, which means that each line (except the last line) is stretched so that every line has equal width,
     * and the left and right margins are straight.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    JUSTIFY = 3,

    /**
     * Align text from start, based on the TextDirection, such as left-to-right or right-to-left.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Align text from start, based on the TextDirection, such as left-to-right or right-to-left.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Align text from start, based on the TextDirection, such as left-to-right or right-to-left.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    START = 4,

    /**
     * Align text from end, based on the TextDirection, such as left-to-right or right-to-left, opposite to START.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Align text from end, based on the TextDirection, such as left-to-right or right-to-left, opposite to START.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Align text from end, based on the TextDirection, such as left-to-right or right-to-left, opposite to START.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    END = 5,
  }

  /**
   * Enumerates the vertical alignment modes.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  /**
   * Enumerates the vertical alignment modes.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates the vertical alignment modes.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextVerticalAlign {
    /**
     * Baseline alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Baseline alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Baseline alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    BASELINE = 0,
    /**
     * Bottom alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Bottom alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Bottom alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    BOTTOM = 1,
    /**
     * Center alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Center alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Center alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    CENTER = 2,
    /**
     * Top alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Top alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Top alignment in the vertical direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TOP = 3
  }

  /**
   * Enumerate text runs direction.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerate text runs direction.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerate text runs direction.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextDirection {
    /**
     * The text is oriented from right to left.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The text is oriented from right to left.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The text is oriented from right to left.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    RTL,

    /**
     * The text is oriented from left to right.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The text is oriented from left to right.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The text is oriented from left to right.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    LTR,
  }

  /**
   * Enumerate text segmentation strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerate text segmentation strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerate text segmentation strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum BreakStrategy {
    /**
     * Fills the current line as much as possible without adding hyphens.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Fills the current line as much as possible without adding hyphens.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Fills the current line as much as possible without adding hyphens.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    GREEDY,

    /**
     * Optimizes layout and may add hyphens when necessary.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Optimizes layout and may add hyphens when necessary.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Optimizes layout and may add hyphens when necessary.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    HIGH_QUALITY,

    /**
     * Ensures consistent line width in a paragraph, adding hyphens if needed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Ensures consistent line width in a paragraph, adding hyphens if needed.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Ensures consistent line width in a paragraph, adding hyphens if needed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    BALANCED,
  }

  /**
   * Enumerate word break strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerate word break strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerate word break strategy.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum WordBreak {
    /**
     * Default mode that break words based on language-specific conventions.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Default mode that break words based on language-specific conventions.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Default mode that break words based on language-specific conventions.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    NORMAL,

    /**
     * Allows breaks within any character in non-CJK text. (CJK means Chinese, Japanese, and Korean.)
     * This value is suitable for Asian text that contains some non-Asian text. For example, 
     * it can be used to break consecutive English characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Allows breaks within any character in non-CJK text. (CJK means Chinese, Japanese, and Korean.)
     * This value is suitable for Asian text that contains some non-Asian text. For example, 
     * it can be used to break consecutive English characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Allows breaks within any character in non-CJK text. (CJK means Chinese, Japanese, and Korean.)
     * This value is suitable for Asian text that contains some non-Asian text. For example, 
     * it can be used to break consecutive English characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    BREAK_ALL,

    /**
     * Allows breaks between any two characters in non-CJK text. It prioritizes breaking at whitespace
     * or other natural breakpoints to keep words intact. If no breakpoints are found, it breaks between
     * any two characters. For CJK text, this behaves like NORMAL.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Allows breaks between any two characters in non-CJK text. It prioritizes breaking at whitespace
     * or other natural breakpoints to keep words intact. If no breakpoints are found, it breaks between
     * any two characters. For CJK text, this behaves like NORMAL.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Allows breaks between any two characters in non-CJK text. It prioritizes breaking at whitespace
     * or other natural breakpoints to keep words intact. If no breakpoints are found, it breaks between
     * any two characters. For CJK text, this behaves like NORMAL.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    BREAK_WORD,

    /**
     * Attempts to break words at the end of a line using a hyphen. If a hyphen cannot be added,
     * it behaves like BREAK_WORD.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Attempts to break words at the end of a line using a hyphen. If a hyphen cannot be added,
     * it behaves like BREAK_WORD.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Attempts to break words at the end of a line using a hyphen. If a hyphen cannot be added,
     * it behaves like BREAK_WORD.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    BREAK_HYPHEN,
  }

  /**
   * Describes a text decoration.
   * @typedef Decoration
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes a text decoration.
   * @typedef Decoration
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes a text decoration.
   * @typedef Decoration
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface Decoration {
    /**
     * Type of the decoration. The default value is NONE.
     * @type { ?TextDecorationType }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Type of the decoration. The default value is NONE.
     * @type { ?TextDecorationType }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Type of the decoration. The default value is NONE.
     * @type { ?TextDecorationType }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    textDecoration?: TextDecorationType;

    /**
     * Color of the decoration. The default value is transparent.
     * @type { ?common2D.Color }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Color of the decoration. The default value is transparent.
     * @type { ?common2D.Color }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Color of the decoration. The default value is transparent.
     * @type { ?common2D.Color }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    color?: common2D.Color;

    /**
     * Style of the decoration. The default value is SOLID.
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Style of the decoration. The default value is SOLID.
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Style of the decoration. The default value is SOLID.
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    decorationStyle?: TextDecorationStyle;

    /**
     * Scale factor for the thickness of the decoration line. The value is a floating point number.
     * The default value is 1.0.
     * @type { ?double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Scale factor for the thickness of the decoration line. The value is a floating point number.
     * The default value is 1.0.
     * @type { ?double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Scale factor for the thickness of the decoration line. The value is a floating point number.
     * The default value is 1.0.
     * @type { ?double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    decorationThicknessScale?: double;
  }

  /**
   * Enumerates the text decoration types.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerates the text decoration types.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates the text decoration types.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextDecorationType {
    /**
     * There are no text decoration.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * There are no text decoration.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * There are no text decoration.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    NONE,

    /**
     * There is a decoration line below the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * There is a decoration line below the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * There is a decoration line below the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    UNDERLINE,

    /**
     * There is a decoration line above the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * There is a decoration line above the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * There is a decoration line above the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    OVERLINE,

    /**
     * There is a decoration line through the middle of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * There is a decoration line through the middle of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * There is a decoration line through the middle of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    LINE_THROUGH,
  }

  /**
   * Enumerates the text decoration styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerates the text decoration styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates the text decoration styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextDecorationStyle {
    /**
     * Decoration line is solid line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Decoration line is solid line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Decoration line is solid line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    SOLID,

    /**
     * Decoration line is double line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Decoration line is double line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Decoration line is double line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    DOUBLE,

    /**
     * Decoration line is dotted line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Decoration line is dotted line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Decoration line is dotted line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    DOTTED,

    /**
     * Decoration line is dashed line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Decoration line is dashed line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Decoration line is dashed line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    DASHED,

    /**
     * Decoration line is wavy line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Decoration line is wavy line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Decoration line is wavy line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    WAVY,
  }

  /**
   * Enumeration of font weight of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumeration of font weight of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumeration of font weight of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum FontWeight {
    /**
     * Thin
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Thin
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Thin
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    W100,

    /**
     * Extra-light
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Extra-light
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Extra-light
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    W200,

    /**
     * Light
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Light
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Light
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    W300,

    /**
     * Normal/Regular
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Normal/Regular
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Normal/Regular
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    W400,

    /**
     * Medium
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Medium
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Medium
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    W500,

    /**
     * Semi-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Semi-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Semi-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    W600,

    /**
     * Bold
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Bold
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Bold
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    W700,

    /**
     * Extra-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Extra-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Extra-bold
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    W800,

    /**
     * Black
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Black
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Black
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    W900,
  }

  /**
   * Enumeration of font style of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumeration of font style of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumeration of font style of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum FontStyle {
    /**
     * Upright font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Upright font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Upright font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    NORMAL,

    /**
     * Slant font. If no italic version is available for the current font, the oblique version will be used instead.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Slant font. If no italic version is available for the current font, the oblique version will be used instead.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Slant font. If no italic version is available for the current font, the oblique version will be used instead.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ITALIC,

    /**
     * Oblique font. If no oblique version is available for the current font, the italic version will be used instead.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Oblique font. If no oblique version is available for the current font, the italic version will be used instead.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Oblique font. If no oblique version is available for the current font, the italic version will be used instead.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    OBLIQUE,
  }

  /**
   * Enumeration of font width of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumeration of font width of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumeration of font width of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum FontWidth {
    /**
     * Ultra condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Ultra condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Ultra condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ULTRA_CONDENSED = 1,

    /**
     * Extra condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Extra condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Extra condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    EXTRA_CONDENSED = 2,

    /**
     * Condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    CONDENSED = 3,

    /**
     * Semi condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Semi condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Semi condensed font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    SEMI_CONDENSED = 4,

    /**
     * Normal font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Normal font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Normal font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    NORMAL = 5,

    /**
     * Semi expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Semi expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Semi expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    SEMI_EXPANDED = 6,

    /**
     * Expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    EXPANDED = 7,

    /**
     * Extra expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Extra expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Extra expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    EXTRA_EXPANDED = 8,

    /**
     * Ultra expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Ultra expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Ultra expanded font width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ULTRA_EXPANDED = 9,
  }

  /**
   * Enumerates the text height modifier patterns.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerates the text height modifier patterns.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates the text height modifier patterns.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextHeightBehavior {
    /**
     * Allows the first line of the paragraph to rise and the last line to drop.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Allows the first line of the paragraph to rise and the last line to drop.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Allows the first line of the paragraph to rise and the last line to drop.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ALL = 0x0,

    /**
     * Prevents the first line of a paragraph from rising.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Prevents the first line of a paragraph from rising.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Prevents the first line of a paragraph from rising.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    DISABLE_FIRST_ASCENT = 0x1,

    /**
     * Prevents the last line of a paragraph from dropping.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Prevents the last line of a paragraph from dropping.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Prevents the last line of a paragraph from dropping.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    DISABLE_LAST_ASCENT = 0x2,

    /**
     * Combines the effects of disabling the first line from rising and the last line from dropping.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Combines the effects of disabling the first line from rising and the last line from dropping.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Combines the effects of disabling the first line from rising and the last line from dropping.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    DISABLE_ALL = 0x1 | 0x2,
  }

  /**
   * Enumeration the type of text baseline.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumeration the type of text baseline.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumeration the type of text baseline.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextBaseline {
    /**
     * The alphabetic baseline, typically used for Latin-based scripts where the baseline aligns
     * with the base of lowercase letters.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The alphabetic baseline, typically used for Latin-based scripts where the baseline aligns
     * with the base of lowercase letters.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The alphabetic baseline, typically used for Latin-based scripts where the baseline aligns
     * with the base of lowercase letters.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ALPHABETIC,

    /**
     * The ideographic baseline, commonly used for ideographic scripts such as Chinese, Japanese, and Korean,
     * where the baseline aligns with the center of characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The ideographic baseline, commonly used for ideographic scripts such as Chinese, Japanese, and Korean,
     * where the baseline aligns with the center of characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The ideographic baseline, commonly used for ideographic scripts such as Chinese, Japanese, and Korean,
     * where the baseline aligns with the center of characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    IDEOGRAPHIC,
  }

  /**
   * Enumerates of ellipsis mode.
   * EllipsisMode.START and EllipsisMode.MIDDLE take effect only when text overflows in a single line.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerates of ellipsis mode.
   * EllipsisMode.START and EllipsisMode.MIDDLE take effect only when text overflows in a single line.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates of ellipsis mode.
   * EllipsisMode.START and EllipsisMode.MIDDLE take effect only when text overflows in a single line.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum EllipsisMode {
    /**
     * Places the ellipsis in the text header. It is valid only when maxLines is set to 1 in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Places the ellipsis in the text header. It is valid only when maxLines is set to 1 in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Places the ellipsis in the text header. It is valid only when maxLines is set to 1 in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    START,

    /**
     * Places the ellipsis in the middle of the text. It is valid only when maxLines is set to 1 in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Places the ellipsis in the middle of the text. It is valid only when maxLines is set to 1 in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Places the ellipsis in the middle of the text. It is valid only when maxLines is set to 1 in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    MIDDLE,

    /**
     * Places the ellipsis at the end of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Places the ellipsis at the end of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Places the ellipsis at the end of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    END,

    /**
     * Places the ellipsis in the text header. It is valid for any value of maxLines in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    MULTILINE_START,

    /**
     * Places the ellipsis in the middle of the text. It is valid for any value of maxLines in ParagraphStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    MULTILINE_MIDDLE,
  }

  /**
   * Describes shadow of text.
   * @typedef TextShadow
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes shadow of text.
   * @typedef TextShadow
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes shadow of text.
   * @typedef TextShadow
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextShadow {
    /**
     * Color of the text shadow. The default value is black (255, 0, 0, 0).
     * @type { ?common2D.Color } The color of text shadow
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Color of the text shadow. The default value is black (255, 0, 0, 0).
     * @type { ?common2D.Color } The color of text shadow
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Color of the text shadow. The default value is black (255, 0, 0, 0).
     * @type { ?common2D.Color } The color of text shadow
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    color?: common2D.Color;
    /**
     * Position of the text shadow relative to the text.
     * The horizontal and vertical coordinates must be greater than or equal to 0.
     * @type { ?common2D.Point } The point of shadow
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Position of the text shadow relative to the text.
     * The horizontal and vertical coordinates must be greater than or equal to 0.
     * @type { ?common2D.Point } The point of shadow
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Position of the text shadow relative to the text.
     * The horizontal and vertical coordinates must be greater than or equal to 0.
     * @type { ?common2D.Point } The point of shadow
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    point?: common2D.Point;
    /**
     * The value sets special effect radius of blurring text.
     * The value is a floating point number. The default value is 0.0px.
     * @type { ?double } The value about radius of blur, it type is "double"
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The value sets special effect radius of blurring text.
     * The value is a floating point number. The default value is 0.0px.
     * @type { ?double } The value about radius of blur, it type is "double"
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The value sets special effect radius of blurring text.
     * The value is a floating point number. The default value is 0.0px.
     * @type { ?double } The value about radius of blur, it type is "double"
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    blurRadius?: double;
  }

  /**
   * Describes the style of a rectangle.
   * @typedef RectStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes the style of a rectangle.
   * @typedef RectStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes the style of a rectangle.
   * @typedef RectStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface RectStyle {
    /**
     * Color of the rectangle.
     * @type { common2D.Color } The color of rect style
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Color of the rectangle.
     * @type { common2D.Color } The color of rect style
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Color of the rectangle.
     * @type { common2D.Color } The color of rect style
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    color: common2D.Color;

    /**
     * Left top radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Left top radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Left top radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    leftTopRadius: double;

    /**
     * Right top radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Right top radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Right top radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    rightTopRadius: double;

    /**
     * Right bottom radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Right bottom radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Right bottom radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    rightBottomRadius: double;

    /**
     * Left bottom radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Left bottom radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Left bottom radius of the rectangle.
     * @type { double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    leftBottomRadius: double;
  }

  /**
   * Enumerates line height scaling type.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 21 dynamic
   */
  /**
   * Enumerates line height scaling type.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  enum LineHeightStyle {
    /**
     * Use the font size as the scale factor for line height scaling.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21 dynamic
     */
    /**
     * Use the font size as the scale factor for line height scaling.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    FONT_SIZE = 0,

    /**
     * Use the text height after shaping as the scale factor for line height scaling.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21 dynamic
     */
    /**
     * Use the text height after shaping as the scale factor for line height scaling.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    FONT_HEIGHT = 1
  }

  /**
   * Describes font feature of text.
   * @typedef FontFeature
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes font feature of text.
   * @typedef FontFeature
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes font feature of text.
   * @typedef FontFeature
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface FontFeature {
    /**
     * String identified by the keyword in the font feature key-value pair.
     * @type { string } feature name
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * String identified by the keyword in the font feature key-value pair.
     * @type { string } feature name
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * String identified by the keyword in the font feature key-value pair.
     * @type { string } feature name
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    name: string;
    /**
     * 	Value in the font feature key-value pair.
     * @type { int } feature value
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * 	Value in the font feature key-value pair.
     * @type { int } feature value
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * 	Value in the font feature key-value pair.
     * @type { int } feature value
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    value: int;
  }

  /**
   * Describes font variation of text.
   * @typedef FontVariation
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes font variation of text.
   * @typedef FontVariation
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes font variation of text.
   * @typedef FontVariation
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface FontVariation {
    /**
     * String identified by the keyword in the font variation key-value pair.
     * @type { string } variation axis
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * String identified by the keyword in the font variation key-value pair.
     * @type { string } variation axis
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * String identified by the keyword in the font variation key-value pair.
     * @type { string } variation axis
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    axis: string;
    /**
     * Value in the font variation key-value pair.
     * @type { double } variation value
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Value in the font variation key-value pair.
     * @type { double } variation value
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Value in the font variation key-value pair.
     * @type { double } variation value
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    value: double;
    /**
     * Data normalized.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    isNormalized?: boolean;
  }

  /**
   * Describes badge type of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  /**
   * Describes badge type of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes badge type of text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextBadgeType {
    /**
     * No badge.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * No badge.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * No badge.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TEXT_BADGE_NONE,
    /**
     * Superscript.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Superscript.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Superscript.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TEXT_SUPERSCRIPT,
    /**
     * Subscript.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Subscript.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Subscript.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TEXT_SUBSCRIPT,
  }

  /**
   * Describes text style.
   * @typedef TextStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes text style.
   * @typedef TextStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes text style.
   * @typedef TextStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextStyle {

    /**
     * Text decoration. By default, no decoration is used.
     * @type { ?Decoration } decoration for text
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text decoration. By default, no decoration is used.
     * @type { ?Decoration } decoration for text
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text decoration. By default, no decoration is used.
     * @type { ?Decoration } decoration for text
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    decoration?: Decoration;

    /**
     * Text color. The default color is white.
     * @type { ?common2D.Color } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text color. The default color is white.
     * @type { ?common2D.Color } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text color. The default color is white.
     * @type { ?common2D.Color } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    color?: common2D.Color;

    /**
     * Font weight. The default value is W400. Currently, only the default system font supports font weight adjustment.
     * For other fonts, if the weight is less than semi-bold (W600), there is no variation in stroke thickness.
     * If the weight is greater than or equal to semi-bold, it might result in a fake bold effect.
     * @type { ?FontWeight } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Font weight. The default value is W400. Currently, only the default system font supports font weight adjustment.
     * For other fonts, if the weight is less than semi-bold (W600), there is no variation in stroke thickness.
     * If the weight is greater than or equal to semi-bold, it might result in a fake bold effect.
     * @type { ?FontWeight } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font weight. The default value is W400. Currently, only the default system font supports font weight adjustment.
     * For other fonts, if the weight is less than semi-bold (W600), there is no variation in stroke thickness.
     * If the weight is greater than or equal to semi-bold, it might result in a fake bold effect.
     * @type { ?FontWeight } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontWeight?: FontWeight;

    /**
     * Font style. The default value is NORMAL.
     * @type { ?FontStyle } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Font style. The default value is NORMAL.
     * @type { ?FontStyle } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font style. The default value is NORMAL.
     * @type { ?FontStyle } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontStyle?: FontStyle;

    /**
     * Text baseline type. The default value is ALPHABETIC.
     * @type { ?TextBaseline } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text baseline type. The default value is ALPHABETIC.
     * @type { ?TextBaseline } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text baseline type. The default value is ALPHABETIC.
     * @type { ?TextBaseline } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    baseline?: TextBaseline;

    /**
     * Array of font families. By default, the array is empty, indicating that all system fonts are matched.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Array of font families. By default, the array is empty, indicating that all system fonts are matched.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Array of font families. By default, the array is empty, indicating that all system fonts are matched.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontFamilies?: Array<string>;

    /**
     * Font size, in units of px. The value is a floating point number. The default value is 14.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Font size, in units of px. The value is a floating point number. The default value is 14.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font size, in units of px. The value is a floating point number. The default value is 14.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontSize?: double;

    /**
     * Letter spacing, in units of px. The value is a floating point number.
     * The default value is 0.0. A positive value causes characters to spread farther apart,
     * and a negative value bring characters closer together.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Letter spacing, in units of px. The value is a floating point number.
     * The default value is 0.0. A positive value causes characters to spread farther apart,
     * and a negative value bring characters closer together.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Letter spacing, in units of px. The value is a floating point number.
     * The default value is 0.0. A positive value causes characters to spread farther apart,
     * and a negative value bring characters closer together.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    letterSpacing?: double;

    /**
     * Word spacing, in units of px. The value is a floating point number. The default value is 0.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Word spacing, in units of px. The value is a floating point number. The default value is 0.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Word spacing, in units of px. The value is a floating point number. The default value is 0.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    wordSpacing?: double;

    /**
     * Maximum line height. The value is a double number.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21 dynamic
     */
    /**
     * Maximum line height. The value is a double number.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    lineHeightMaximum?: double;

    /**
     * Minimum line height. The value is a double number.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21 dynamic
     */
    /**
     * Minimum line height. The value is a double number.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    lineHeightMinimum?: double;

    /**
     * Line height scaling base style. The default value is FONT_SIZE.
     * @type { ?LineHeightStyle } Line height scaling style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21 dynamic
     */
    /**
     * Line height scaling base style. The default value is FONT_SIZE.
     * @type { ?LineHeightStyle } Line height scaling style.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    lineHeightStyle?: LineHeightStyle;

    /**
     * Scale factor of the line height. The value is a floating point number.
     * The default value is 1.0. This parameter is valid only when heightOnly is set to true.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Scale factor of the line height. The value is a floating point number.
     * The default value is 1.0. This parameter is valid only when heightOnly is set to true.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Scale factor of the line height. The value is a floating point number.
     * The default value is 1.0. This parameter is valid only when heightOnly is set to true.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    heightScale?: double;

    /**
     * Whether half leading is enabled.
     * Half leading is the leading split in half and applied equally to the top and bottom edges.
     * The value true means that half leading is enabled, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Whether half leading is enabled.
     * Half leading is the leading split in half and applied equally to the top and bottom edges.
     * The value true means that half leading is enabled, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Whether half leading is enabled.
     * Half leading is the leading split in half and applied equally to the top and bottom edges.
     * The value true means that half leading is enabled, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    halfLeading?: boolean;

    /**
     * How the height of the text box is set.
     * The value true means that the height of the text box is set based on the font size and the value of heightScale,
     * and false means that the height is set based on the line height and line spacing. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * How the height of the text box is set.
     * The value true means that the height of the text box is set based on the font size and the value of heightScale,
     * and false means that the height is set based on the line height and line spacing. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * How the height of the text box is set.
     * The value true means that the height of the text box is set based on the font size and the value of heightScale,
     * and false means that the height is set based on the line height and line spacing. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    heightOnly?: boolean;

    /**
     * Ellipsis content, which will be used to replace the extra content.
     * @type { ?string } it is u16string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Ellipsis content, which will be used to replace the extra content.
     * @type { ?string } it is u16string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Ellipsis content, which will be used to replace the extra content.
     * @type { ?string } it is u16string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ellipsis?: string;

    /**
     * Ellipsis type. The default value is END, indicating that the ellipsis is at the end of a line.
     * @type { ?EllipsisMode } Ellipsis mode.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Ellipsis type. The default value is END, indicating that the ellipsis is at the end of a line.
     * @type { ?EllipsisMode } Ellipsis mode.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Ellipsis type. The default value is END, indicating that the ellipsis is at the end of a line.
     * @type { ?EllipsisMode } Ellipsis mode.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ellipsisMode?: EllipsisMode;

    /**
     * Locale. For example, 'en' indicates English, 'zh-Hans' indicates Simplified Chinese,
     * and 'zh-Hant' indicates Traditional Chinese. For details, see ISO 639-1. The default value is an empty string.
     * @type { ?string } it is string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Locale. For example, 'en' indicates English, 'zh-Hans' indicates Simplified Chinese,
     * and 'zh-Hant' indicates Traditional Chinese. For details, see ISO 639-1. The default value is an empty string.
     * @type { ?string } it is string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Locale. For example, 'en' indicates English, 'zh-Hans' indicates Simplified Chinese,
     * and 'zh-Hant' indicates Traditional Chinese. For details, see ISO 639-1. The default value is an empty string.
     * @type { ?string } it is string type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    locale?: string;

    /**
     * Shift of the baseline. The value is a floating point number. The default value is 0.0px.
     * @type { ?double } it is double type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Shift of the baseline. The value is a floating point number. The default value is 0.0px.
     * @type { ?double } it is double type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Shift of the baseline. The value is a floating point number. The default value is 0.0px.
     * @type { ?double } it is double type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    baselineShift?: double;

    /**
     * Text Style available font features.
     * @type { ?Array<FontFeature> } A collection of font features.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text Style available font features.
     * @type { ?Array<FontFeature> } A collection of font features.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text Style available font features.
     * @type { ?Array<FontFeature> } A collection of font features.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontFeatures?: Array<FontFeature>;

    /**
     * Text shadows of text.
     * @type { ?Array<TextShadow> } textShadow gather.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text shadows of text.
     * @type { ?Array<TextShadow> } textShadow gather.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text shadows of text.
     * @type { ?Array<TextShadow> } textShadow gather.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    textShadows?: Array<TextShadow>;

    /**
     * Rectangle style of text.
     * @type { ?RectStyle } rect style for text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Rectangle style of text.
     * @type { ?RectStyle } rect style for text.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Rectangle style of text.
     * @type { ?RectStyle } rect style for text.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    backgroundRect?: RectStyle;

    /**
     * Text Style available font variations.
     * @type { ?Array<FontVariation> } A collection of font variations.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text Style available font variations.
     * @type { ?Array<FontVariation> } A collection of font variations.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text Style available font variations.
     * @type { ?Array<FontVariation> } A collection of font variations.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontVariations?: Array<FontVariation>;

    /**
     * Text style available badge type.
     * @type { ?TextBadgeType } The type of text badge type.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Text style available badge type.
     * @type { ?TextBadgeType } The type of text badge type.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text style available badge type.
     * @type { ?TextBadgeType } The type of text badge type.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    badgeType?: TextBadgeType;

    /**
     * Font width. The default value is NORMAL.
     * @type {  ?FontWidth  } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21 dynamic
     */
    /**
     * Font width. The default value is NORMAL.
     * @type {  ?FontWidth  } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    fontWidth?: FontWidth;
    /**
     * Font edging. The default value is ANTI_ALIAS.
     *
     * @type { ?drawing.FontEdging } The type of font edging.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontEdging?: drawing.FontEdging;
  }

  /**
   * Implements a collection of fonts.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Implements a collection of fonts.
   * @syscap SystemCapability.Graphics.Drawing
   * @form
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Implements a collection of fonts.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @form
   * @atomicservice
   * @since 24 dynamic&static
   */
  class FontCollection {
    /**
     * Get global FontCollection instance of the application.
     * @returns { FontCollection } The FontCollection object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Get global FontCollection instance of the application.
     * @returns { FontCollection } The FontCollection object.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Get global FontCollection instance of the application.
     * @returns { FontCollection } The FontCollection object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    static getGlobalInstance(): FontCollection;

    /**
     * Get local FontCollection instance of the application.
     * @returns { FontCollection } The FontCollection object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    static getLocalInstance(): FontCollection;

    /**
     * Loads a custom font. This API returns the result synchronously.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are .ttf and .otf.
     * @param { string } name - the font name.
     * @param { string | Resource } path - Path of the font file to import. The value must be
     * **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Loads a custom font. This API returns the result synchronously.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are .ttf and .otf.
     * @param { string } name - the font name.
     * @param { string | Resource } path - Path of the font file to import. The value must be
     * **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Loads a custom font. This API returns the result synchronously.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are .ttf and .otf.
     * @param { string } name - the font name.
     * @param { string | Resource } path - Path of the font file to import. The value must be
     *     **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic&static
     */
    loadFontSync(name: string, path: string | Resource): void;

    /**
     * Loads a custom font. This API uses a promise to return the result.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are ttf and otf.
     * @param { string } name - Name of the font. Any string is acceptable.
     * @param { string | Resource } path - Path of the font file to load.
     * The value must be **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Loads a custom font. This API uses a promise to return the result.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are ttf and otf.
     * @param { string } name - Name of the font. Any string is acceptable.
     * @param { string | Resource } path - Path of the font file to load.
     * The value must be **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Loads a custom font. This API uses a promise to return the result.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are ttf and otf.
     * @param { string } name - Name of the font. Any string is acceptable.
     * @param { string | Resource } path - Path of the font file to load.
     *     The value must be **file://**absolute path of the font file or **rawfile/**directory or file name.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic&static
     */
    loadFont(name: string, path: string | Resource): Promise<void>;

    /**
     * Loads a custom font with enhanced error checking. This API returns the result synchronously.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are .ttf, .otf and .ttc.
     * @param { string } name - the font name.
     * @param { string | Resource } path - Path of the font file to load.
     * The value must be **"file:// + absolute path of the font file"** or **$rawfile("path of the font file")**.
     * @param { int } [index] - The index of the font file.
     * @throws { BusinessError } 25900001 - Parameter error.
     * @throws { BusinessError } 25900002 - File not found.
     * @throws { BusinessError } 25900003 - Failed to open the file.
     * @throws { BusinessError } 25900004 - File seek failed.
     * @throws { BusinessError } 25900005 - Failed to get the file size.
     * @throws { BusinessError } 25900006 - Failed to read the file.
     * @throws { BusinessError } 25900007 - Empty file.
     * @throws { BusinessError } 25900008 - Corrupt file.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    loadFontSyncWithCheck(name: string, path: string | Resource, index?: int): void;

    /**
     * Loads a custom font with enhanced error checking. This API uses a promise to return the result.
     * In this API, name specifies the alias of the font, and the custom font effect can be displayed only when
     * the value of name is set in fontFamilies in TextStyle. The supported font file formats are .ttf, .otf and .ttc.
     * @param { string } name - Name of the font. Any string is acceptable.
     * @param { string | Resource } path - Path of the font file to load.
     * The value must be **"file:// + absolute path of the font file"** or **$rawfile("path of the font file")**.
     * @param { int } [index] - The index of the font file.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 25900001 - Parameter error.
     * @throws { BusinessError } 25900002 - File not found.
     * @throws { BusinessError } 25900003 - Failed to open the file.
     * @throws { BusinessError } 25900004 - File seek failed.
     * @throws { BusinessError } 25900005 - Failed to get the file size.
     * @throws { BusinessError } 25900006 - Failed to read the file.
     * @throws { BusinessError } 25900007 - Empty file.
     * @throws { BusinessError } 25900008 - Corrupt file.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 23 dynamic&static
     */
    loadFontWithCheck(name: string, path: string | Resource, index?: int): Promise<void>;

    /**
     * Unloads a custom font synchronously. This API returns the result synchronously.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Unloads a custom font synchronously. This API returns the result synchronously.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Unloads a custom font synchronously. This API returns the result synchronously.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic&static
     */
    unloadFontSync(name: string): void;

    /**
     * Unloads a custom font. This API uses a promise to return the result.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Unloads a custom font. This API uses a promise to return the result.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Unloads a custom font. This API uses a promise to return the result.
     * After unloading a font alias through this API, the corresponding custom font will no longer be available.
     * All typography using the font alias should be destroyed and re-created.
     * - Unloading a non-existent font alias has no effect and will **not** throw an error.
     * - This operation only affects subsequent font usages.
     * unload a font that is currently in used may lead to text rendering anomalies,
     * including garbled characters or missing glyphs.
     * @param { string } name - The alias of the font to unload.
     * This must exactly match the name used when loading the font through.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic&static
     */
    unloadFont(name: string): Promise<void>;

    /**
     * Clear font caches.
     * The font cache has a memory limit and a clearing mechanism. It occupies limited memory.
     * You are not advised to clear it unless otherwise required.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Clear font caches.
     * The font cache has a memory limit and a clearing mechanism. It occupies limited memory.
     * You are not advised to clear it unless otherwise required.
     * @syscap SystemCapability.Graphics.Drawing
     * @form
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Clear font caches.
     * The font cache has a memory limit and a clearing mechanism. It occupies limited memory.
     * You are not advised to clear it unless otherwise required.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @form
     * @atomicservice
     * @since 24 dynamic&static
     */
     clearCaches(): void;
  }

  /**
   * Describes the strut style, which determines the line spacing, baseline alignment mode,
   * and other properties related to the line height when drawing texts. The strut style is disabled by default.
   * @typedef StrutStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes the strut style, which determines the line spacing, baseline alignment mode,
   * and other properties related to the line height when drawing texts. The strut style is disabled by default.
   * @typedef StrutStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes the strut style, which determines the line spacing, baseline alignment mode,
   * and other properties related to the line height when drawing texts. The strut style is disabled by default.
   * @typedef StrutStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface StrutStyle {
    /**
     * List of font families. By default, the list corresponds to the system's default fonts.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * List of font families. By default, the list corresponds to the system's default fonts.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * List of font families. By default, the list corresponds to the system's default fonts.
     * @type { ?Array<string> } fontfamily gather
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontFamilies?: Array<string>;

    /**
     * Font style. The default value is NORMAL.
     * @type { ?FontStyle } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Font style. The default value is NORMAL.
     * @type { ?FontStyle } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font style. The default value is NORMAL.
     * @type { ?FontStyle } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontStyle?: FontStyle;

    /**
     * Font width. The default value is NORMAL.
     * @type { ?FontWidth } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Font width. The default value is NORMAL.
     * @type { ?FontWidth } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font width. The default value is NORMAL.
     * @type { ?FontWidth } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontWidth?: FontWidth;

    /**
     * Font weight. The default value is W400. The default system font supports font weight adjustment.
     * For other fonts, if the weight is less than W600, there is no variation in stroke thickness.
     * If the weight is greater than or equal to W600, it might result in a fake bold effect.
     * @type { ?FontWeight } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Font weight. The default value is W400. The default system font supports font weight adjustment.
     * For other fonts, if the weight is less than W600, there is no variation in stroke thickness.
     * If the weight is greater than or equal to W600, it might result in a fake bold effect.
     * @type { ?FontWeight } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font weight. The default value is W400. The default system font supports font weight adjustment.
     * For other fonts, if the weight is less than W600, there is no variation in stroke thickness.
     * If the weight is greater than or equal to W600, it might result in a fake bold effect.
     * @type { ?FontWeight } it is uint32_t type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontWeight?: FontWeight;

    /**
     * Font size, in units of px. The value is a floating point number. The default value is 14.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Font size, in units of px. The value is a floating point number. The default value is 14.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font size, in units of px. The value is a floating point number. The default value is 14.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontSize?: double;

    /**
     * Scale factor of the line height. The value is a floating point number. The default value is 1.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Scale factor of the line height. The value is a floating point number. The default value is 1.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Scale factor of the line height. The value is a floating point number. The default value is 1.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    height?: double;

    /**
     * Custom leading to be applied to the strut. The value is a floating point number. The default value is -1.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Custom leading to be applied to the strut. The value is a floating point number. The default value is -1.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Custom leading to be applied to the strut. The value is a floating point number. The default value is -1.0.
     * @type { ?double } it is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    leading?: double;

    /**
     * Whether to forcibly use the strut height for all lines. The value true means to forcibly use the strut height
     * for all lines, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Whether to forcibly use the strut height for all lines. The value true means to forcibly use the strut height
     * for all lines, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Whether to forcibly use the strut height for all lines. The value true means to forcibly use the strut height
     * for all lines, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    forceHeight?: boolean;

    /**
     * Whether to enable the strut style.
     * The value true means to enable the strut style, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Whether to enable the strut style.
     * The value true means to enable the strut style, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Whether to enable the strut style.
     * The value true means to enable the strut style, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    enabled?: boolean;

    /**
     * 	Whether to override the height. The value true means to override the height, and false means the opposite.
     * The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * 	Whether to override the height. The value true means to override the height, and false means the opposite.
     * The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * 	Whether to override the height. The value true means to override the height, and false means the opposite.
     * The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    heightOverride?: boolean;

    /**
     * Whether half leading is enabled.
     * Half leading is the leading split in half and applied equally to the top and bottom edges.
     * The value true means that half leading is enabled, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Whether half leading is enabled.
     * Half leading is the leading split in half and applied equally to the top and bottom edges.
     * The value true means that half leading is enabled, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Whether half leading is enabled.
     * Half leading is the leading split in half and applied equally to the top and bottom edges.
     * The value true means that half leading is enabled, and false means the opposite. The default value is false.
     * @type { ?boolean } it is boolean type data
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    halfLeading?: boolean;
  }

  /**
   * Determines the configuration used by ParagraphBuilder to position lines within a Paragraph of text.
   * @typedef ParagraphStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Determines the configuration used by ParagraphBuilder to position lines within a Paragraph of text.
   * @typedef ParagraphStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Determines the configuration used by ParagraphBuilder to position lines within a Paragraph of text.
   * @typedef ParagraphStyle
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface ParagraphStyle {
    /**
     * Text style applied to the paragraph. The default value is the initial text style.
     * @type { ?TextStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text style applied to the paragraph. The default value is the initial text style.
     * @type { ?TextStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text style applied to the paragraph. The default value is the initial text style.
     * @type { ?TextStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    textStyle?: TextStyle;

    /**
     * Text direction. The default value is LTR.
     * @type { ?TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text direction. The default value is LTR.
     * @type { ?TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text direction. The default value is LTR.
     * @type { ?TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    textDirection?: TextDirection;

    /**
     * Text alignment mode. The default value is START. This parameter is invalid when the tab parameter is configured.
     * @type { ?TextAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text alignment mode. The default value is START. This parameter is invalid when the tab parameter is configured.
     * @type { ?TextAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text alignment mode. The default value is START. This parameter is invalid when the tab parameter is configured.
     * @type { ?TextAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    align?: TextAlign;

    /**
     * Word break type. The default value is BREAK_WORD.
     * @type { ?WordBreak }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Word break type. The default value is BREAK_WORD.
     * @type { ?WordBreak }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Word break type. The default value is BREAK_WORD.
     * @type { ?WordBreak }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    wordBreak?: WordBreak;

    /**
     * Maximum number of lines. The value is an integer. The default value is 1e9.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Maximum number of lines. The value is an integer. The default value is 1e9.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Maximum number of lines. The value is an integer. The default value is 1e9.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    maxLines?: int;

    /**
     * Text break strategy. The default value is GREEDY.
     * @type { ?BreakStrategy }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text break strategy. The default value is GREEDY.
     * @type { ?BreakStrategy }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text break strategy. The default value is GREEDY.
     * @type { ?BreakStrategy }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    breakStrategy?: BreakStrategy;

    /**
     * Strut style. The default value is the initial StrutStyle object.
     * @type { ?StrutStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Strut style. The default value is the initial StrutStyle object.
     * @type { ?StrutStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Strut style. The default value is the initial StrutStyle object.
     * @type { ?StrutStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    strutStyle?: StrutStyle;

    /**
     * Text height modifier pattern. The default value is ALL.
     * @type { ?TextHeightBehavior }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text height modifier pattern. The default value is ALL.
     * @type { ?TextHeightBehavior }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text height modifier pattern. The default value is ALL.
     * @type { ?TextHeightBehavior }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    textHeightBehavior?: TextHeightBehavior;

    /**
     * Alignment mode and position of the text after the tab character in a paragraph. By default, the tab character
     * is replaced with a space. This parameter is invalid when it is used together with the align parameter or
     * the ellipsis parameter in TextStyle.
     * @type { ?TextTab }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Alignment mode and position of the text after the tab character in a paragraph. By default, the tab character
     * is replaced with a space. This parameter is invalid when it is used together with the align parameter or
     * the ellipsis parameter in TextStyle.
     * @type { ?TextTab }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Alignment mode and position of the text after the tab character in a paragraph. By default, the tab character
     * is replaced with a space. This parameter is invalid when it is used together with the align parameter or
     * the ellipsis parameter in TextStyle.
     * @type { ?TextTab }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    tab?: TextTab;

    /**
     * Whether to optimize white spaces at the end of each line.
     * @type { ?boolean } Boolean type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Whether to optimize white spaces at the end of each line.
     * @type { ?boolean } Boolean type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Whether to optimize white spaces at the end of each line.
     * @type { ?boolean } Boolean type data.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    trailingSpaceOptimized?: boolean;

    /**
     * Whether to enable automatic spacing between Chinese and English for paragraph.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Whether to enable automatic spacing between Chinese and English for paragraph.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Whether to enable automatic spacing between Chinese and English for paragraph.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    autoSpace?: boolean;

    /**
     * Vertical alignment mode of the paragraph.
     * @type { ?TextVerticalAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Vertical alignment mode of the paragraph.
     * @type { ?TextVerticalAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Vertical alignment mode of the paragraph.
     * @type { ?TextVerticalAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    verticalAlign?: TextVerticalAlign;

    /**
     * Line spacing. The value is a double number.
     * @type { ?double } It is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @since 21 dynamic
     */
    /**
     * Line spacing. The value is a double number.
     * @type { ?double } It is double type data
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    lineSpacing?: double;

    /**
     * Whether to enable compression of leading punctuation.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    compressHeadPunctuation?: boolean;

    /**
     * Whether to Add padding to the font.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    includeFontPadding?: boolean;

    /**
     * Whether to enable line spacing fallback.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    fallbackLineSpacing?: boolean;

    /**
     * Whether to enable orphan char optimization.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    orphanCharOptimization?: boolean;
  }

  /**
   * Enumerates the vertical alignment modes of a placeholder relative to the surrounding text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerates the vertical alignment modes of a placeholder relative to the surrounding text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates the vertical alignment modes of a placeholder relative to the surrounding text.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum PlaceholderAlignment {
    /**
     * Aligns the baseline of the placeholder to the baseline of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Aligns the baseline of the placeholder to the baseline of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Aligns the baseline of the placeholder to the baseline of the text.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    OFFSET_AT_BASELINE,

    /**
     * Aligns the bottom edge of the placeholder to the baseline of the text.
     * sits on top of the baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Aligns the bottom edge of the placeholder to the baseline of the text.
     * sits on top of the baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Aligns the bottom edge of the placeholder to the baseline of the text.
     * sits on top of the baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ABOVE_BASELINE,

    /**
     * Aligns the top edge of the placeholder to the baseline of the text.
     * hangs below the baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Aligns the top edge of the placeholder to the baseline of the text.
     * hangs below the baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Aligns the top edge of the placeholder to the baseline of the text.
     * hangs below the baseline.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    BELOW_BASELINE,

    /**
     * Align the top edge of the placeholder with the top edge of the font. When the placeholder is very tall,
     * the extra space will hang from the top and extend through the bottom of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Align the top edge of the placeholder with the top edge of the font. When the placeholder is very tall,
     * the extra space will hang from the top and extend through the bottom of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Align the top edge of the placeholder with the top edge of the font. When the placeholder is very tall,
     * the extra space will hang from the top and extend through the bottom of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TOP_OF_ROW_BOX,

    /**
     * Align the bottom edge of the placeholder with the bottom edge of the text. When the placeholder is very tall,
     * the extra space will rise from the bottom and extend through the top of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Align the bottom edge of the placeholder with the bottom edge of the text. When the placeholder is very tall,
     * the extra space will rise from the bottom and extend through the top of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Align the bottom edge of the placeholder with the bottom edge of the text. When the placeholder is very tall,
     * the extra space will rise from the bottom and extend through the top of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    BOTTOM_OF_ROW_BOX,

    /**
     * Align the middle of the placeholder with the middle of the text. When the placeholder is very tall,
     * the extra space will grow equally from the top and bottom of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Align the middle of the placeholder with the middle of the text. When the placeholder is very tall,
     * the extra space will grow equally from the top and bottom of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Align the middle of the placeholder with the middle of the text. When the placeholder is very tall,
     * the extra space will grow equally from the top and bottom of the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    CENTER_OF_ROW_BOX,

    /**
     * Follow Paragraph setting,
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Follow Paragraph setting,
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Follow Paragraph setting,
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    FOLLOW_PARAGRAPH,
  }

  /**
   * Describes the placeholder style.
   * @typedef PlaceholderSpan
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes the placeholder style.
   * @typedef PlaceholderSpan
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes the placeholder style.
   * @typedef PlaceholderSpan
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface PlaceholderSpan {
    /**
     * Width of the placeholder, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Width of the placeholder, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Width of the placeholder, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    width: double;

    /**
     * Height of the placeholder, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Height of the placeholder, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Height of the placeholder, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    height: double;

    /**
     * Vertical alignment of the placeholder relative to the surrounding text.
     * @type { PlaceholderAlignment }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Vertical alignment of the placeholder relative to the surrounding text.
     * @type { PlaceholderAlignment }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Vertical alignment of the placeholder relative to the surrounding text.
     * @type { PlaceholderAlignment }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    align: PlaceholderAlignment;

    /**
     * Type of the text baseline.
     * @type { TextBaseline }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Type of the text baseline.
     * @type { TextBaseline }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Type of the text baseline.
     * @type { TextBaseline }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    baseline: TextBaseline;

    /**
     * Offset to the text baseline, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Offset to the text baseline, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Offset to the text baseline, in units of px. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    baselineOffset: double;
  }

  /**
   * Describes a left-closed and right-open interval.
   * @typedef Range
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes a left-closed and right-open interval.
   * @typedef Range
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes a left-closed and right-open interval.
   * @typedef Range
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface Range {
    /**
     * Index of the leftmost point of the interval. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Index of the leftmost point of the interval. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Index of the leftmost point of the interval. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    start: int;

    /**
     * Index of the rightmost point of the interval. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Index of the rightmost point of the interval. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Index of the rightmost point of the interval. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    end: int;
  }

  /**
   * Enumerates the font types, which can be combined through bitwise OR operations.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 14 dynamic
   */
  /**
   * Enumerates the font types, which can be combined through bitwise OR operations.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates the font types, which can be combined through bitwise OR operations.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum SystemFontType {
    /**
     * All font types, including the system font type, style font type, and user-installed font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * All font types, including the system font type, style font type, and user-installed font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * All font types, including the system font type, style font type, and user-installed font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ALL = 1 << 0,

    /**
     * System generic font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * System generic font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * System generic font type.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    GENERIC = 1 << 1,

    /**
     * Style font type. The style font type is designed for 2-in-1 devices.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Style font type. The style font type is designed for 2-in-1 devices.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    STYLISH = 1 << 2,

    /**
     * Font type that has been installed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Font type that has been installed.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    INSTALLED = 1 << 3,

    /**
     * Customized font types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Customized font types.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Customized font types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    CUSTOMIZED = 1 << 4,
  }

  /**
   * Font variation axis.
   * 
   * @typedef FontVariationAxis
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface FontVariationAxis {
    /**
     * Font variation axis keyword.
     * 
     * @type { string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    key: string;

    /**
     * Font variation axis min value.
     * 
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    minValue: double;

    /**
     * Font variation axis max value.
     * 
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    maxValue: double;

    /**
     * Font variation axis default value.
     * 
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    defaultValue: double;

    /**
     * Font variation axis flags.
     * 
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    flags: int;

    /**
     * Font variation axis english name.
     * 
     * @type { string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    name: string;

    /**
     * Font variation axis local name, maybe empty.
     * 
     * @type { string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    localName: string;
  }

  /**
   * Font variation instance.
   * 
   * @typedef FontVariationInstance
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface FontVariationInstance {
    /**
     * Font variation instance english name.
     * 
     * @type { string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    name: string;

    /**
     * Font variation instance local name, maybe empty.
     * 
     * @type { string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    localName: string;

    /**
     * Returns the array of font variation.
     * 
     * @type { Array<FontVariation> }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    coordinates: Array<FontVariation>;
  }

  /**
   * Describes the font descriptor information.
   * @typedef FontDescriptor
   * @syscap SystemCapability.Graphics.Drawing
   * @since 14 dynamic
   */
  /**
   * Describes the font descriptor information.
   * @typedef FontDescriptor
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes the font descriptor information.
   * @typedef FontDescriptor
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface FontDescriptor {
    /**
     * Absolute path of the font. Any string is acceptable, but the value must adhere to the system's path constraints.
     * The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Absolute path of the font. Any string is acceptable, but the value must adhere to the system's path constraints.
     * The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Absolute path of the font. Any string is acceptable, but the value must adhere to the system's path constraints.
     * The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    path?: string;

    /**
     * Unique name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Unique name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Unique name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    postScriptName?: string;

    /**
     * Font name. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Font name. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font name. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fullName?: string;

    /**
     * Family name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Family name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Family name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontFamily?: string;

    /**
     * Subfamily name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Subfamily name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Subfamily name of the font. Any string is acceptable. The default value is an empty string.
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontSubfamily?: string;

    /**
     * Font weight. The default value is 0.
     * @type { ?FontWeight }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Font weight. The default value is 0.
     * @type { ?FontWeight }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font weight. The default value is 0.
     * @type { ?FontWeight }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    weight?: FontWeight;

    /**
     * Font width. The value is an integer ranging from 1 to 9. The default value is 0.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Font width. The value is an integer ranging from 1 to 9. The default value is 0.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Font width. The value is an integer ranging from 1 to 9. The default value is 0.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    width?: int;

    /**
     * Whether the font is italic. The value 0 means that the font is not italic, and 1 means the opposite.
     * The default value is 0.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Whether the font is italic. The value 0 means that the font is not italic, and 1 means the opposite.
     * The default value is 0.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Whether the font is italic. The value 0 means that the font is not italic, and 1 means the opposite.
     * The default value is 0.
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    italic?: int;

    /**
     * Whether the font is monospaced. The value true means that the font is monospaced, and false means the opposite.
     * The default value is false.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Whether the font is monospaced. The value true means that the font is monospaced, and false means the opposite.
     * The default value is false.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Whether the font is monospaced. The value true means that the font is monospaced, and false means the opposite.
     * The default value is false.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    monoSpace?: boolean;

    /**
     * Whether the font is symbolic. The value true means that the font is symbolic, and false means the opposite.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 14 dynamic
     */
    /**
     * Whether the font is symbolic. The value true means that the font is symbolic, and false means the opposite.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Whether the font is symbolic. The value true means that the font is symbolic, and false means the opposite.
     * @type { ?boolean }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    symbolic?: boolean;

    /**
     * Font local post script name
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localPostscriptName?: string;

    /**
     * Font local full name
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localFullName?: string;

    /**
     * Font local family name
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localFamilyName?: string;

    /**
     * Font local subfamily name
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    localSubFamilyName?: string;

    /**
     * Font version
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    version?: string;

    /**
     * Font manufacture
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    manufacture?: string;

    /**
     * Font copyright
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    copyright?: string;

    /**
     * Font trademark
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    trademark?: string;

    /**
     * Font license
     * @type { ?string }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 23 dynamic&static
     */
    license?: string;

    /**
     * Returns the array of font variation axis.
     * 
     * @type { ?Array<FontVariationAxis> }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    variationAxisRecords?: Array<FontVariationAxis>;

    /**
     * Returns the array of font variation instance.
     * 
     * @type { ?Array<FontVariationInstance> }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 24 dynamic&static
     */
    variationInstanceRecords?: Array<FontVariationInstance>;

    /**
     * The font index in ttc file
     * @type { ?int }
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    index?: int;
  }

  /**
   * Implements a carrier that stores the text content and style. You can perform operations such as layout and drawing.
   * Before calling any of the following APIs, you must use build() of the ParagraphBuilder class to
   * create a Paragraph object.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Implements a carrier that stores the text content and style. You can perform operations such as layout and drawing.
   * Before calling any of the following APIs, you must use build() of the ParagraphBuilder class to
   * create a Paragraph object.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Implements a carrier that stores the text content and style. You can perform operations such as layout and drawing.
   * Before calling any of the following APIs, you must use build() of the ParagraphBuilder class to
   * create a Paragraph object.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  class Paragraph {
    /**
     * Performs layout and calculates the positions of all glyphs with constrained height and width.
     *
     * @param { TextRectSize } size - The constrainted height and width, in units of px.
     * @returns { TextLayoutResult } The rectangle size needed and the character range that actually fits the paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    layoutWithConstraints(size: TextRectSize): TextLayoutResult;

    /**
     * Performs layout and calculates the positions of all glyphs.
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Performs layout and calculates the positions of all glyphs.
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Performs layout and calculates the positions of all glyphs.
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    layoutSync(width: double): void;

    /**
     * Performs layout and calculates the positions of all glyphs. This API uses a promise to return the result.
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Performs layout and calculates the positions of all glyphs. This API uses a promise to return the result.
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Performs layout and calculates the positions of all glyphs. This API uses a promise to return the result.
     * @param { double } width - Maximum width of a single line, in units of px. The value is a floating point number.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    layout(width: double): Promise<void>;

    /**
     * Paints the text on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Paints the text on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Paints the text on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * Draw the laid out text onto the supplied canvas along the path and offset.
     * @param { drawing.Canvas } canvas - Canvas used to carry the drawn content and drawing status.
     * @param { drawing.Path } path - Path used to determine the position of the text.
     * @param { double } hOffset - Horizontal offset along the path direction. A positive number indicates a position
     * that is ahead along the path from its start point, and a negative number indicates a position that is behind
     * from the start point.
     * @param { double } vOffset - Vertical offset along the path direction. A positive number indicates a position
     * on the left side of the path, and a negative number indicates a position on the right side of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Draw the laid out text onto the supplied canvas along the path and offset.
     * @param { drawing.Canvas } canvas - Canvas used to carry the drawn content and drawing status.
     * @param { drawing.Path } path - Path used to determine the position of the text.
     * @param { double } hOffset - Horizontal offset along the path direction. A positive number indicates a position
     * that is ahead along the path from its start point, and a negative number indicates a position that is behind
     * from the start point.
     * @param { double } vOffset - Vertical offset along the path direction. A positive number indicates a position
     * on the left side of the path, and a negative number indicates a position on the right side of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Draw the laid out text onto the supplied canvas along the path and offset.
     * @param { drawing.Canvas } canvas - Canvas used to carry the drawn content and drawing status.
     * @param { drawing.Path } path - Path used to determine the position of the text.
     * @param { double } hOffset - Horizontal offset along the path direction. A positive number indicates a position
     *     that is ahead along the path from its start point, and a negative number indicates a position that is behind
     *     from the start point.
     * @param { double } vOffset - Vertical offset along the path direction. A positive number indicates a position
     *     on the left side of the path, and a negative number indicates a position on the right side of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    paintOnPath(canvas: drawing.Canvas, path: drawing.Path, hOffset: double, vOffset: double): void;

    /**
     * Obtains the maximum width of the line in the text.
     * @returns { double } Maximum line width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the maximum width of the line in the text.
     * @returns { double } Maximum line width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the maximum width of the line in the text.
     * @returns { double } Maximum line width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getMaxWidth(): double;

    /**
     * Obtains the total height of the text.
     * @returns { double } Total height, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the total height of the text.
     * @returns { double } Total height, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the total height of the text.
     * @returns { double } Total height, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getHeight(): double;

    /**
     * Obtains the longest line in the text.
     * @returns { double } Longest line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the longest line in the text.
     * @returns { double } Longest line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the longest line in the text.
     * @returns { double } Longest line, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getLongestLine(): double;

    /**
     * Obtains the width of the longest line, including its indentation, in the text.
     * You are advised to round up the return value. If the text content is empty, 0 is returned.
     * @returns { double } Width of the longest line, including its indentation.
     * The value is a floating point number, in px.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 13 dynamic
     */
    /**
     * Obtains the width of the longest line, including its indentation, in the text.
     * You are advised to round up the return value. If the text content is empty, 0 is returned.
     * @returns { double } Width of the longest line, including its indentation.
     * The value is a floating point number, in px.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the width of the longest line, including its indentation, in the text.
     * You are advised to round up the return value. If the text content is empty, 0 is returned.
     * @returns { double } Width of the longest line, including its indentation.
     *     The value is a floating point number, in px.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getLongestLineWithIndent(): double;

    /**
     * Obtains the minimum intrinsic width of the paragraph.
     * @returns { double } Minimum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the minimum intrinsic width of the paragraph.
     * @returns { double } Minimum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the minimum intrinsic width of the paragraph.
     * @returns { double } Minimum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getMinIntrinsicWidth(): double;

    /**
     * Obtains the maximum intrinsic width of the paragraph.
     * @returns { double } Maximum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the maximum intrinsic width of the paragraph.
     * @returns { double } Maximum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the maximum intrinsic width of the paragraph.
     * @returns { double } Maximum intrinsic width, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getMaxIntrinsicWidth(): double;

    /**
     * Obtains the alphabetic baseline.
     * @returns { double } Alphabetic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the alphabetic baseline.
     * @returns { double } Alphabetic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the alphabetic baseline.
     * @returns { double } Alphabetic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getAlphabeticBaseline(): double;

    /**
     * Obtains the ideographic baseline.
     * @returns { double } Ideographic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the ideographic baseline.
     * @returns { double } Ideographic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the ideographic baseline.
     * @returns { double } Ideographic baseline, in units of px. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getIdeographicBaseline(): double;

    /**
     * Obtains the rectangles occupied by the characters in the range of the text under the given rectangle width and
     * height.
     * @param { Range } range - Range of the text.
     * @param { RectWidthStyle } widthStyle - Width of the rectangle.
     * @param { RectHeightStyle } heightStyle - Height of the rectangle.
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the rectangles occupied by the characters in the range of the text under the given rectangle width and
     * height.
     * @param { Range } range - Range of the text.
     * @param { RectWidthStyle } widthStyle - Width of the rectangle.
     * @param { RectHeightStyle } heightStyle - Height of the rectangle.
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the rectangles occupied by the characters in the range of the text under the given rectangle width and
     * height.
     * @param { Range } range - Range of the text.
     * @param { RectWidthStyle } widthStyle - Width of the rectangle.
     * @param { RectHeightStyle } heightStyle - Height of the rectangle.
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getRectsForRange(range: Range, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>;

    /**
     * Obtains the rectangles occupied by all placeholders in the text.
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the rectangles occupied by all placeholders in the text.
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the rectangles occupied by all placeholders in the text.
     * @returns { Array<TextBox> } Array holding the rectangles obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getRectsForPlaceholders(): Array<TextBox>;

    /**
     * Obtains the position of a glyph closest to the given coordinates.
     * @param { double } x - X coordinate. The value is a floating point number.
     * @param { double } y - Y coordinate. The value is a floating point number.
     * @returns { PositionWithAffinity } Position of the glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the position of a glyph closest to the given coordinates.
     * @param { double } x - X coordinate. The value is a floating point number.
     * @param { double } y - Y coordinate. The value is a floating point number.
     * @returns { PositionWithAffinity } Position of the glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the position of a glyph closest to the given coordinates.
     * @param { double } x - X coordinate. The value is a floating point number.
     * @param { double } y - Y coordinate. The value is a floating point number.
     * @returns { PositionWithAffinity } Position of the glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getGlyphPositionAtCoordinate(x: double, y: double): PositionWithAffinity;

    /**
     * Obtains the range of the word where the glyph with a given offset is located.
     * @param { int } offset - Offset of the glyph. The value is an integer.
     * @returns { Range } Range of the word.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the range of the word where the glyph with a given offset is located.
     * @param { int } offset - Offset of the glyph. The value is an integer.
     * @returns { Range } Range of the word.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the range of the word where the glyph with a given offset is located.
     * @param { int } offset - Offset of the glyph. The value is an integer.
     * @returns { Range } Range of the word.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getWordBoundary(offset: int): Range;

    /**
     * Obtains the number of text lines.
     * @returns { int } Number of text lines. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the number of text lines.
     * @returns { int } Number of text lines. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the number of text lines.
     * @returns { int } Number of text lines. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getLineCount(): int;

    /**
     * Obtains the height of a given line.
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() – 1.
     * @returns { double } The line height value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the height of a given line.
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() – 1.
     * @returns { double } The line height value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the height of a given line.
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() – 1.
     * @returns { double } The line height value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getLineHeight(line: int): double;

    /**
     * Obtains the width of a given line.
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() – 1.
     * @returns { double } The line width value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the width of a given line.
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() – 1.
     * @returns { double } The line width value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the width of a given line.
     * @param { int } line - Index of the line. The value is an integer ranging from 0 to getLineCount() – 1.
     * @returns { double } The line width value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getLineWidth(line: int): double;

    /**
     * Checks whether the number of lines in the paragraph exceeds the maximum.
     * @returns { boolean } Check result. The value true means that the number of lines exceeds the maximum,
     * and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Checks whether the number of lines in the paragraph exceeds the maximum.
     * @returns { boolean } Check result. The value true means that the number of lines exceeds the maximum,
     * and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Checks whether the number of lines in the paragraph exceeds the maximum.
     * @returns { boolean } Check result. The value true means that the number of lines exceeds the maximum,
     *     and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    didExceedMaxLines(): boolean;

    /**
     * Obtains all the text lines.
     * @returns { Array<TextLine> } Array of text lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains all the text lines.
     * @returns { Array<TextLine> } Array of text lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains all the text lines.
     * @returns { Array<TextLine> } Array of text lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getTextLines(): Array<TextLine>;

    /**
     * Obtains the actually visible text range in the specified line, excluding any overflow ellipsis.
     * @param { int } lineNumber - Line number of the text range, starting from 0. This API can only be used to
     * obtain the bounds of existing lines. That is, the line number must start from 0, and the maximum line number
     * is getLineCount - 1.
     * @param { boolean } includeSpaces - Whether spaces are included. The value true means that spaces are contained,
     * and false means the opposite.
     * @returns { Range } Text range obtained. If the line index is invalid, start and end are both 0.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the actually visible text range in the specified line, excluding any overflow ellipsis.
     * @param { int } lineNumber - Line number of the text range, starting from 0. This API can only be used to
     * obtain the bounds of existing lines. That is, the line number must start from 0, and the maximum line number
     * is getLineCount - 1.
     * @param { boolean } includeSpaces - Whether spaces are included. The value true means that spaces are contained,
     * and false means the opposite.
     * @returns { Range } Text range obtained. If the line index is invalid, start and end are both 0.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the actually visible text range in the specified line, excluding any overflow ellipsis.
     * @param { int } lineNumber - Line number of the text range, starting from 0. This API can only be used to
     *     obtain the bounds of existing lines. That is, the line number must start from 0, and the maximum line number
     *     is getLineCount - 1.
     * @param { boolean } includeSpaces - Whether spaces are included. The value true means that spaces are contained,
     *     and false means the opposite.
     * @returns { Range } Text range obtained. If the line index is invalid, start and end are both 0.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getActualTextRange(lineNumber: int, includeSpaces: boolean): Range;

    /**
     * Obtains an array of line measurement information.
     * @returns { Array<LineMetrics> } Array of line measurement information.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains an array of line measurement information.
     * @returns { Array<LineMetrics> } Array of line measurement information.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains an array of line measurement information.
     * @returns { Array<LineMetrics> } Array of line measurement information.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getLineMetrics(): Array<LineMetrics>;

    /**
     * Obtains the line measurement information of a line.
     * @param { int } lineNumber - Line number, starting from 0.
     * @returns { LineMetrics | undefined } LineMetrics object containing the measurement information if the specified
     * line number is valid and the measurement information exists. If the line number is invalid or
     * the measurement information cannot be obtained, undefined is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the line measurement information of a line.
     * @param { int } lineNumber - Line number, starting from 0.
     * @returns { LineMetrics | undefined } LineMetrics object containing the measurement information if the specified
     * line number is valid and the measurement information exists. If the line number is invalid or
     * the measurement information cannot be obtained, undefined is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the line measurement information of a line.
     * @param { int } lineNumber - Line number, starting from 0.
     * @returns { LineMetrics | undefined } LineMetrics object containing the measurement information if the specified
     *     line number is valid and the measurement information exists. If the line number is invalid or
     *     the measurement information cannot be obtained, undefined is returned.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getLineMetrics(lineNumber: int): LineMetrics | undefined;

    /**
     * Synchronously updates the text color of the typography.
     * @param { common2D.Color } color - Color of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Synchronously updates the text color of the typography.
     * @param { common2D.Color } color - Color of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Synchronously updates the text color of the typography.
     * @param { common2D.Color } color - Color of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    updateColor(color: common2D.Color): void;

    /**
     * Synchronously updates text decoration.
     * @param { Decoration } decoration - Decoration of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Synchronously updates text decoration.
     * @param { Decoration } decoration - Decoration of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Synchronously updates text decoration.
     * @param { Decoration } decoration - Decoration of text.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    updateDecoration(decoration: Decoration): void;

    /**
     * Obtains the character ranges corresponding to the specified glyph range.
     *
     * @param { Range } glyphRange - The glyph range.
     * @param { drawing.TextEncoding } encoding - The text encoding type.
     *     Currently only UTF-8 and UTF-16 encoding types are supported.
     *     For UTF-8 encoding, the returned character range represents byte ranges.
     *     For UTF-16 encoding, the returned character range represents UTF-16 code unit ranges.
     * @returns { Array<Range> } The character ranges.
     *     It contains two elements, the first is the character range and the second is the actual glyph range.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getCharacterRangeForGlyphRange(glyphRange: Range, encoding: drawing.TextEncoding): Array<Range>;

    /**
     * Obtains the glyph ranges corresponding to the specified character range.
     *
     * @param { Range } characterRange - The character range.
     * @param { drawing.TextEncoding } encoding - The text encoding type.
     *     Currently only UTF-8 and UTF-16 encoding types are supported.
     *     For UTF-8 encoding, the input character range should be interpreted as byte ranges.
     *     For UTF-16 encoding, the input character range should be interpreted as UTF-16 code unit ranges.
     * @returns { Array<Range> } The glyph ranges.
     *     It contains two elements, the first is the glyph range and the second is the actual character range.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getGlyphRangeForCharacterRange(characterRange: Range, encoding: drawing.TextEncoding): Array<Range>;

    /**
     * Obtains the character position and affinity at the specified coordinate.
     *
     * @param { double } x - The x-coordinate. Unit: px
     * @param { double } y - The y-coordinate. Unit: px
     * @param { drawing.TextEncoding } encoding - The text encoding type.
     *     Currently only UTF-8 and UTF-16 encoding types are supported.
     *     For UTF-8 encoding, the returned position represents a byte offset.
     *     For UTF-16 encoding, the returned position represents a UTF-16 code unit offset.
     * @returns { PositionWithAffinity } The position with affinity.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    getCharacterPositionAtCoordinate(x: double, y: double, encoding: drawing.TextEncoding): PositionWithAffinity;
  }

  /**
   * Implements a carrier that stores the text content and style. It can be used to compute layout details for
   * individual lines of text. Before calling any of the following APIs, you must use buildLineTypeset()
   * in the ParagraphBuilder class to create a LineTypeset object.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   */
  /**
   * Implements a carrier that stores the text content and style. It can be used to compute layout details for
   * individual lines of text. Before calling any of the following APIs, you must use buildLineTypeset()
   * in the ParagraphBuilder class to create a LineTypeset object.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Implements a carrier that stores the text content and style. It can be used to compute layout details for
   * individual lines of text. Before calling any of the following APIs, you must use buildLineTypeset()
   * in the ParagraphBuilder class to create a LineTypeset object.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  class LineTypeset {
    /**
     * Obtains the number of characters that can fit in the layout from the specified position within a limited width.
     * @param { int } startIndex - Start position (inclusive) for calculation. The value is an integer in the range
     * [0, total number of text characters). If the parameter is invalid, an exception is thrown.
     * @param { double } width - Layout width. The value is a floating point number greater than 0, in px.
     * @returns { int } Number of characters.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the number of characters that can fit in the layout from the specified position within a limited width.
     * @param { int } startIndex - Start position (inclusive) for calculation. The value is an integer in the range
     * [0, total number of text characters). If the parameter is invalid, an exception is thrown.
     * @param { double } width - Layout width. The value is a floating point number greater than 0, in px.
     * @returns { int } Number of characters.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the number of characters that can fit in the layout from the specified position within a limited width.
     * @param { int } startIndex - Start position (inclusive) for calculation. The value is an integer in the range
     *     [0, total number of text characters). If the parameter is invalid, an exception is thrown.
     * @param { double } width - Layout width. The value is a floating point number greater than 0, in px.
     * @returns { int } Number of characters.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getLineBreak(startIndex: int, width: double): int;

    /**
     * Generates a text line object based on the specified layout range.
     * @param { int } startIndex - Start position for layout calculation. The value is an integer in the
     * range [0, total number of text characters).
     * @param { int } count - 	Number of characters from the specified start position. The value is an integer in
     * the range [0, total number of text characters). The sum of startIndex and count cannot be greater than
     * the total number of text characters. When count is 0, the range is [startIndex, end of the text].
     * You can use getLineBreak to obtain the number of characters that can fit in the layout.
     * @returns { TextLine } TextLine object generated based on the characters in the text range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Generates a text line object based on the specified layout range.
     * @param { int } startIndex - Start position for layout calculation. The value is an integer in the
     * range [0, total number of text characters).
     * @param { int } count - 	Number of characters from the specified start position. The value is an integer in
     * the range [0, total number of text characters). The sum of startIndex and count cannot be greater than
     * the total number of text characters. When count is 0, the range is [startIndex, end of the text].
     * You can use getLineBreak to obtain the number of characters that can fit in the layout.
     * @returns { TextLine } TextLine object generated based on the characters in the text range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Generates a text line object based on the specified layout range.
     * @param { int } startIndex - Start position for layout calculation. The value is an integer in the
     *     range [0, total number of text characters).
     * @param { int } count - 	Number of characters from the specified start position. The value is an integer in
     *     the range [0, total number of text characters). The sum of startIndex and count cannot be greater than
     *     the total number of text characters. When count is 0, the range is [startIndex, end of the text].
     *     You can use getLineBreak to obtain the number of characters that can fit in the layout.
     * @returns { TextLine } TextLine object generated based on the characters in the text range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    createLine(startIndex: int, count: int): TextLine;
  }

  /**
   * Describes the rectangle that holds the text.
   * @typedef TextBox
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes the rectangle that holds the text.
   * @typedef TextBox
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes the rectangle that holds the text.
   * @typedef TextBox
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextBox {
    /**
     * Information about the rectangle.
     * @type { common2D.Rect }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Information about the rectangle.
     * @type { common2D.Rect }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Information about the rectangle.
     * @type { common2D.Rect }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    rect: common2D.Rect;

    /**
     * Text direction.
     * @type { TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Text direction.
     * @type { TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Text direction.
     * @type { TextDirection }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    direction: TextDirection;
  }

  /**
   * Describes the position and affinity of a glyph.
   * @typedef PositionWithAffinity
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes the position and affinity of a glyph.
   * @typedef PositionWithAffinity
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes the position and affinity of a glyph.
   * @typedef PositionWithAffinity
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface PositionWithAffinity {
    /**
     * Index of the glyph relative to the paragraph. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Index of the glyph relative to the paragraph. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Index of the glyph relative to the paragraph. The value is an integer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    position: int;

    /**
     * Affinity of the position.
     * @type { Affinity }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Affinity of the position.
     * @type { Affinity }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Affinity of the position.
     * @type { Affinity }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    affinity: Affinity;
  }

  /**
   * Enumerates the rectangle width styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerates the rectangle width styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates the rectangle width styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum RectWidthStyle {
    /**
     * If letterSpacing is not set, the rectangle conforms tightly to the text it contains.
     * However, if letterSpacing is set, a gap is introduced between the rectangle and text.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * If letterSpacing is not set, the rectangle conforms tightly to the text it contains.
     * However, if letterSpacing is set, a gap is introduced between the rectangle and text.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * If letterSpacing is not set, the rectangle conforms tightly to the text it contains.
     * However, if letterSpacing is set, a gap is introduced between the rectangle and text.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TIGHT,

    /**
     * The rectangle's width is extended to align with the widest rectangle across all lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The rectangle's width is extended to align with the widest rectangle across all lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The rectangle's width is extended to align with the widest rectangle across all lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    MAX,
  }

  /**
   * Enumerates the rectangle height styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerates the rectangle height styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates the rectangle height styles.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum RectHeightStyle {
    /**
     * Tight style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Tight style.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Tight style.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TIGHT,

    /**
     * Extends the height to match the highest rectangle in all lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Extends the height to match the highest rectangle in all lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Extends the height to match the highest rectangle in all lines.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    MAX,

    /**
     * The top and bottom of each rect will cover half of the space above and half of the space below the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The top and bottom of each rect will cover half of the space above and half of the space below the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The top and bottom of each rect will cover half of the space above and half of the space below the line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    INCLUDE_LINE_SPACE_MIDDLE,

    /**
     * The line spacing will be added to the top of the rect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The line spacing will be added to the top of the rect.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The line spacing will be added to the top of the rect.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    INCLUDE_LINE_SPACE_TOP,

    /**
     * The line spacing will be added to the bottom of the rect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The line spacing will be added to the bottom of the rect.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The line spacing will be added to the bottom of the rect.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    INCLUDE_LINE_SPACE_BOTTOM,

    /**
     * The height of the boxes will be calculated by text strut.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The height of the boxes will be calculated by text strut.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The height of the boxes will be calculated by text strut.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    STRUT,
  }

  /**
   * Enumerates text affinity.When a selection range involves line breaks or other special characters, the
   * affinity determines which side of the characters the start and end of the selection range should be
   * closer to.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Enumerates text affinity.When a selection range involves line breaks or other special characters, the
   * affinity determines which side of the characters the start and end of the selection range should be
   * closer to.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Enumerates text affinity.When a selection range involves line breaks or other special characters, the
   * affinity determines which side of the characters the start and end of the selection range should be
   * closer to.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum Affinity {
    /**
     * The position has affinity for the upstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The position has affinity for the upstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The position has affinity for the upstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    UPSTREAM,
    /**
     * The position has affinity for the downstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The position has affinity for the downstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The position has affinity for the downstream side of the text position.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    DOWNSTREAM,
  }

  /**
   * Builds a Paragraph containing text with the given styling information.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Builds a Paragraph containing text with the given styling information.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Builds a Paragraph containing text with the given styling information.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  class ParagraphBuilder {
    /**
     * A constructor used to create a ParagraphBuilder object.
     * @param { ParagraphStyle } paragraphStyle - Paragraph style {@link ParagraphStyle}
     * @param { FontCollection } fontCollection - Font collection {@link FontCollection}
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * A constructor used to create a ParagraphBuilder object.
     * @param { ParagraphStyle } paragraphStyle - Paragraph style {@link ParagraphStyle}
     * @param { FontCollection } fontCollection - Font collection {@link FontCollection}
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * A constructor used to create a ParagraphBuilder object.
     * @param { ParagraphStyle } paragraphStyle - Paragraph style {@link ParagraphStyle}
     * @param { FontCollection } fontCollection - Font collection {@link FontCollection}
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    constructor(paragraphStyle: ParagraphStyle, fontCollection: FontCollection);

    /**
     * Applies a new style to the current text blob.
     * <p>**NOTE**</p>
     * When you update the style of the current text blob, all text added afterward will use this new style.
     * @param { TextStyle } textStyle - Text style, which describes various visual attributes of text, such as font,
     * font size, color, font weight, word spacing, line spacing, decoration (such as underline and strikethrough),
     * and text shadow. {@link TextStyle}
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Applies a new style to the current text blob.
     * <p>**NOTE**</p>
     * When you update the style of the current text blob, all text added afterward will use this new style.
     * @param { TextStyle } textStyle - Text style, which describes various visual attributes of text, such as font,
     * font size, color, font weight, word spacing, line spacing, decoration (such as underline and strikethrough),
     * and text shadow. {@link TextStyle}
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Applies a new style to the current text blob.
     * <p>**NOTE**</p>
     * When you update the style of the current text blob, all text added afterward will use this new style.
     * @param { TextStyle } textStyle - Text style, which describes various visual attributes of text, such as font,
     *     font size, color, font weight, word spacing, line spacing, decoration (such as underline and strikethrough),
     *     and text shadow. {@link TextStyle}
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    pushStyle(textStyle: TextStyle): void;

    /**
     * Restores the previous text style.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Restores the previous text style.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Restores the previous text style.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    popStyle(): void;

    /**
     * Inserts a text string into the paragraph being built.
     * @param { string } text - Exact text string inserted into the paragraph. If an invalid Unicode character is
     * provided, it is displayed as �.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Inserts a text string into the paragraph being built.
     * @param { string } text - Exact text string inserted into the paragraph. If an invalid Unicode character is
     * provided, it is displayed as �.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Inserts a text string into the paragraph being built.
     * @param { string } text - Exact text string inserted into the paragraph. If an invalid Unicode character is
     *     provided, it is displayed as �.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    addText(text: string): void;

    /**
     * Inserts a placeholder into the paragraph being built.
     * @param { PlaceholderSpan } placeholderSpan - Placeholder span, which describes the size, alignment,
     * baseline type, and baseline offset of the placeholder. {@link PlaceholderSpan}
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Inserts a placeholder into the paragraph being built.
     * @param { PlaceholderSpan } placeholderSpan - Placeholder span, which describes the size, alignment,
     * baseline type, and baseline offset of the placeholder. {@link PlaceholderSpan}
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Inserts a placeholder into the paragraph being built.
     * @param { PlaceholderSpan } placeholderSpan - Placeholder span, which describes the size, alignment,
     *     baseline type, and baseline offset of the placeholder. {@link PlaceholderSpan}
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    addPlaceholder(placeholderSpan: PlaceholderSpan): void;

    /**
     * Creates a paragraph object that can be used for subsequent layout and rendering.
     * @returns { Paragraph } Paragraph object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Creates a paragraph object that can be used for subsequent layout and rendering.
     * @returns { Paragraph } Paragraph object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Creates a paragraph object that can be used for subsequent layout and rendering.
     * @returns { Paragraph } Paragraph object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    build(): Paragraph;

    /**
     * Builds a line typesetter.
     * @returns { LineTypeset } LineTypeset object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Builds a line typesetter.
     * @returns { LineTypeset } LineTypeset object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Builds a line typesetter.
     * @returns { LineTypeset } LineTypeset object that can be used for subsequent rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    buildLineTypeset(): LineTypeset;

    /**
     * Inserts a symbol into the paragraph being built.
     * @param { int } symbolId - Symbol code to insert. The value is a hexadecimal number in the
     * range 0xF0000-0xF0C97. For details about the configurable symbol codes (unicode values in the list view),
     * see <a href="https://developer.huawei.com/consumer/cn/design/harmonyos-symbol/">HarmonyOS Symbol</a>.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Inserts a symbol into the paragraph being built.
     * @param { int } symbolId - Symbol code to insert. The value is a hexadecimal number in the
     * range 0xF0000-0xF0C97. For details about the configurable symbol codes (unicode values in the list view),
     * see <a href="https://developer.huawei.com/consumer/cn/design/harmonyos-symbol/">HarmonyOS Symbol</a>.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Inserts a symbol into the paragraph being built.
     * @param { int } symbolId - Symbol code to insert. The value is a hexadecimal number in the
     *     range 0xF0000-0xF0C97.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    addSymbol(symbolId: int): void;
  }

  /**
   * Describes the typographic boundaries of a text line. These boundaries depend on the typographic font and font size,
   * not on the characters themselves. For example, for the string " a b " (which has a space before "a" and a space
   * after "b"), the typographic boundaries include the spaces at the beginning and end of the line. Similarly,
   * the strings "j" and "E" have identical typographic boundaries, which are independent of the characters themselves.
   * @typedef TypographicBounds
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   */
  /**
   * Describes the typographic boundaries of a text line. These boundaries depend on the typographic font and font size,
   * not on the characters themselves. For example, for the string " a b " (which has a space before "a" and a space
   * after "b"), the typographic boundaries include the spaces at the beginning and end of the line. Similarly,
   * the strings "j" and "E" have identical typographic boundaries, which are independent of the characters themselves.
   * @typedef TypographicBounds
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes the typographic boundaries of a text line. These boundaries depend on the typographic font and font size,
   * not on the characters themselves. For example, for the string " a b " (which has a space before "a" and a space
   * after "b"), the typographic boundaries include the spaces at the beginning and end of the line. Similarly,
   * the strings "j" and "E" have identical typographic boundaries, which are independent of the characters themselves.
   * @typedef TypographicBounds
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TypographicBounds {
    /**
     * Ascent of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Ascent of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Ascent of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ascent: double;

    /**
     * Descent of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Descent of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Descent of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    descent: double;

    /**
     * Leading of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Leading of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Leading of a text line. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    leading: double;

    /**
     * Width of the typographic boundaries. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Width of the typographic boundaries. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Width of the typographic boundaries. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    width: double;
  }

  /**
   * Defines the callback used to receive the offset and index of each character in a text line object
   * as its parameters.
   *
   * @typedef { function } CaretOffsetsCallback
   * @param { double } offset - Offset of each character in a text line. The value is a floating point number.
   * @param { int } index - Index of each character in a text line. The value is an integer.
   * @param { boolean } leadingEdge - Whether the cursor is located at the front of the character. The value true means
   * that the cursor is located at the front of the character, that is, the offset does not contain the character
   * width. The value false means that the cursor is located at the rear of the character, that is, the offset
   * contains the character width.
   * callback function.
   * @returns { boolean } Whether to stop calling the callback. The value true means to stop calling the callback,
   * and false means to continue calling the callback.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   */
  /**
   * Defines the callback used to receive the offset and index of each character in a text line object
   * as its parameters.
   *
   * @typedef { function } CaretOffsetsCallback
   * @param { double } offset - Offset of each character in a text line. The value is a floating point number.
   * @param { int } index - Index of each character in a text line. The value is an integer.
   * @param { boolean } leadingEdge - Whether the cursor is located at the front of the character. The value true means
   * that the cursor is located at the front of the character, that is, the offset does not contain the character
   * width. The value false means that the cursor is located at the rear of the character, that is, the offset
   * contains the character width.
   * callback function.
   * @returns { boolean } Whether to stop calling the callback. The value true means to stop calling the callback,
   * and false means to continue calling the callback.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Defines the callback used to receive the offset and index of each character in a text line object
   * as its parameters.
   *
   * @typedef { function } CaretOffsetsCallback
   * @param { double } offset - Offset of each character in a text line. The value is a floating point number.
   * @param { int } index - Index of each character in a text line. The value is an integer.
   * @param { boolean } leadingEdge - Whether the cursor is located at the front of the character. The value true means
   *     that the cursor is located at the front of the character, that is, the offset does not contain the character
   *     width. The value false means that the cursor is located at the rear of the character, that is, the offset
   *     contains the character width.
   * @returns { boolean } Whether to stop calling the callback. The value true means to stop calling the callback,
   *     and false means to continue calling the callback.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  type CaretOffsetsCallback = (offset: double, index: int, leadingEdge: boolean) => boolean;

  /**
   * Implements a carrier that describes the basic text line structure of a paragraph.
   * Before calling any of the following APIs, you must use getTextLines() of the Paragraph class or createLine() of
   * the LineTypeset class to create a TextLine object.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Implements a carrier that describes the basic text line structure of a paragraph.
   * Before calling any of the following APIs, you must use getTextLines() of the Paragraph class or createLine() of
   * the LineTypeset class to create a TextLine object.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Implements a carrier that describes the basic text line structure of a paragraph.
   * Before calling any of the following APIs, you must use getTextLines() of the Paragraph class or createLine() of
   * the LineTypeset class to create a TextLine object.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  class TextLine {
    /**
     * Obtains the number of glyphs in this text line.
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the number of glyphs in this text line.
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the number of glyphs in this text line.
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getGlyphCount(): int;

    /**
     * Obtains the range of the text in this text line in the entire paragraph.
     * @returns { Range } Range of the text in this text line in the entire paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the range of the text in this text line in the entire paragraph.
     * @returns { Range } Range of the text in this text line in the entire paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the range of the text in this text line in the entire paragraph.
     * @returns { Range } Range of the text in this text line in the entire paragraph.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getTextRange(): Range;

    /**
     * Obtains the array of glyph runs in the text line.
     * @returns { Array<Run> } Array of the runs obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the array of glyph runs in the text line.
     * @returns { Array<Run> } Array of the runs obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the array of glyph runs in the text line.
     * @returns { Array<Run> } Array of the runs obtained.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getGlyphRuns(): Array<Run>;

    /**
     * Paints this text line on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Paints this text line on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Paints this text line on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * Creates a truncated text line object.
     * @param { double } width - Width of the line after truncation. The value is a floating point number.
     * @param { EllipsisMode } ellipsisMode - Ellipsis mode. Currently, only START and END are supported.
     * @param { string } ellipsis - String used to mark a truncation.
     * @returns { TextLine } Truncated text line object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Creates a truncated text line object.
     * @param { double } width - Width of the line after truncation. The value is a floating point number.
     * @param { EllipsisMode } ellipsisMode - Ellipsis mode. Currently, only START and END are supported.
     * @param { string } ellipsis - String used to mark a truncation.
     * @returns { TextLine } Truncated text line object.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     */
    /**
     * Creates a truncated text line object.
     * @param { double } width - Width of the line after truncation. The value is a floating point number.
     * @param { EllipsisMode } ellipsisMode - Ellipsis mode. Currently, only START and END are supported.
     * @param { string } ellipsis - String used to mark a truncation.
     * @returns { TextLine } Truncated text line object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    createTruncatedLine(width: double, ellipsisMode: EllipsisMode, ellipsis: string): TextLine;

    /**
     * Creates a truncated text line object.
     * @param { double } width - Width of the line after truncation. The value is a floating point number.
     * @param { EllipsisMode } ellipsisMode - Ellipsis mode. Currently, only START and END are supported.
     * @param { string } ellipsis - String used to mark a truncation.
     * @returns { TextLine | undefined } Truncated text line object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    createTruncatedLine(width: double, ellipsisMode: EllipsisMode, ellipsis: string): TextLine | undefined;

    /**
     * Obtains the typographic boundaries of this text line. These boundaries depend on the typographic font and font
     * size, but not on the characters themselves. For example, for the string " a b " (which has a space before
     * "a" and a space after "b"), the typographic boundaries include the spaces at the beginning and end of the
     * line. Similarly, the strings "j" and "E" have identical typographic boundaries, which are independent of
     * the characters themselves.
     * @returns { TypographicBounds } Typographic boundaries of the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the typographic boundaries of this text line. These boundaries depend on the typographic font and font
     * size, but not on the characters themselves. For example, for the string " a b " (which has a space before
     * "a" and a space after "b"), the typographic boundaries include the spaces at the beginning and end of the
     * line. Similarly, the strings "j" and "E" have identical typographic boundaries, which are independent of
     * the characters themselves.
     * @returns { TypographicBounds } Typographic boundaries of the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the typographic boundaries of this text line. These boundaries depend on the typographic font and font
     * size, but not on the characters themselves. For example, for the string " a b " (which has a space before
     * "a" and a space after "b"), the typographic boundaries include the spaces at the beginning and end of the
     * line. Similarly, the strings "j" and "E" have identical typographic boundaries, which are independent of
     * the characters themselves.
     * @returns { TypographicBounds } Typographic boundaries of the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getTypographicBounds(): TypographicBounds;

    /**
     * Obtains the image boundaries of this text line. The image boundaries, equivalent to visual boundaries, depend on
     * the font, font size, and characters. For example, for the string " a b " (which has a space before "a" and
     * a space after "b"), only "a b" are visible to users, and therefore the image boundaries do not include these
     * spaces at the beginning and end of the line. For the strings "j" and "E", their image boundaries are
     * different. Specifically, the width of the boundary for "j" is narrower than that for "E", and the height of
     * the boundary for "j" is taller than that for "E".
     * @returns { common2D.Rect } Image boundary of the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the image boundaries of this text line. The image boundaries, equivalent to visual boundaries, depend on
     * the font, font size, and characters. For example, for the string " a b " (which has a space before "a" and
     * a space after "b"), only "a b" are visible to users, and therefore the image boundaries do not include these
     * spaces at the beginning and end of the line. For the strings "j" and "E", their image boundaries are
     * different. Specifically, the width of the boundary for "j" is narrower than that for "E", and the height of
     * the boundary for "j" is taller than that for "E".
     * @returns { common2D.Rect } Image boundary of the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the image boundaries of this text line. The image boundaries, equivalent to visual boundaries, depend on
     * the font, font size, and characters. For example, for the string " a b " (which has a space before "a" and
     * a space after "b"), only "a b" are visible to users, and therefore the image boundaries do not include these
     * spaces at the beginning and end of the line. For the strings "j" and "E", their image boundaries are
     * different. Specifically, the width of the boundary for "j" is narrower than that for "E", and the height of
     * the boundary for "j" is taller than that for "E".
     * @returns { common2D.Rect } Image boundary of the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getImageBounds(): common2D.Rect;

    /**
     * Obtains the width of the spaces at the end of this text line.
     * @returns { double } Number of spaces at the end of the text line. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the width of the spaces at the end of this text line.
     * @returns { double } Number of spaces at the end of the text line. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the width of the spaces at the end of this text line.
     * @returns { double } Number of spaces at the end of the text line. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getTrailingSpaceWidth(): double;

    /**
     * Obtains the index of a character at the specified position in the original string.
     * @param { common2D.Point } point - Position of the character.
     * @returns { int } Index of the character in the text line. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the index of a character at the specified position in the original string.
     * @param { common2D.Point } point - Position of the character.
     * @returns { int } Index of the character in the text line. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the index of a character at the specified position in the original string.
     * @param { common2D.Point } point - Position of the character.
     * @returns { int } Index of the character in the text line. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getStringIndexForPosition(point: common2D.Point): int;

    /**
     * Obtains the offset of a character with the specified index in this text line.
     * @param { int } index - Index of the character. The value is an integer.
     * @returns { double } Offset of the character with the specified index. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the offset of a character with the specified index in this text line.
     * @param { int } index - Index of the character. The value is an integer.
     * @returns { double } Offset of the character with the specified index. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the offset of a character with the specified index in this text line.
     * @param { int } index - Index of the character. The value is an integer.
     * @returns { double } Offset of the character with the specified index. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getOffsetForStringIndex(index: int): double;

    /**
     * Enumerates the offset and index of each character in a text line.
     * @param { CaretOffsetsCallback } callback - Custom function, which contains the offset and index of each
     * character in the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Enumerates the offset and index of each character in a text line.
     * @param { CaretOffsetsCallback } callback - Custom function, which contains the offset and index of each
     * character in the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Enumerates the offset and index of each character in a text line.
     * @param { CaretOffsetsCallback } callback - Custom function, which contains the offset and index of each
     *     character in the text line.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    enumerateCaretOffsets(callback: CaretOffsetsCallback): void;

    /**
     * Obtains the offset of this text line after alignment based on the alignment factor and alignment width.
     * @param { double } alignmentFactor - Alignment factor, which determines how text is aligned. The value is a
     * floating point number. A value less than or equal to 0.0 means that the text is left-aligned; a value
     * between 0.0 and 0.5 means that the text is slightly left-aligned; the value 0.5 means that is text
     * is centered; a value between 0.5 and 1 means that the text is slightly right-aligned; a value greater than
     * or equal to 1.0 means that the text is right-aligned.
     * @param { double } alignmentWidth - Alignment width, that is, the width of the text line. The value is a floating
     * point number. If the width is less than the actual width of the text line, 0 is returned.
     * @returns { double } Offset required for alignment. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the offset of this text line after alignment based on the alignment factor and alignment width.
     * @param { double } alignmentFactor - Alignment factor, which determines how text is aligned. The value is a
     * floating point number. A value less than or equal to 0.0 means that the text is left-aligned; a value
     * between 0.0 and 0.5 means that the text is slightly left-aligned; the value 0.5 means that is text
     * is centered; a value between 0.5 and 1 means that the text is slightly right-aligned; a value greater than
     * or equal to 1.0 means that the text is right-aligned.
     * @param { double } alignmentWidth - Alignment width, that is, the width of the text line. The value is a floating
     * point number. If the width is less than the actual width of the text line, 0 is returned.
     * @returns { double } Offset required for alignment. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the offset of this text line after alignment based on the alignment factor and alignment width.
     * @param { double } alignmentFactor - Alignment factor, which determines how text is aligned. The value is a
     *     floating point number. A value less than or equal to 0.0 means that the text is left-aligned; a value
     *     between 0.0 and 0.5 means that the text is slightly left-aligned; the value 0.5 means that is text
     *     is centered; a value between 0.5 and 1 means that the text is slightly right-aligned; a value greater than
     *     or equal to 1.0 means that the text is right-aligned.
     * @param { double } alignmentWidth - Alignment width, that is, the width of the text line. The value is a floating
     *     point number. If the width is less than the actual width of the text line, 0 is returned.
     * @returns { double } Offset required for alignment. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getAlignmentOffset(alignmentFactor: double, alignmentWidth: double): double;
  }

  /**
   * Implements a unit for text layout.
   * Before calling any of the following APIs, you must use getGlyphRuns() of the TextLine class to create a Run object.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Implements a unit for text layout.
   * Before calling any of the following APIs, you must use getGlyphRuns() of the TextLine class to create a Run object.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Implements a unit for text layout.
   * Before calling any of the following APIs, you must use getGlyphRuns() of the TextLine class to create a Run object.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  class Run {
    /**
     * Obtains the number of glyphs in this run.
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the number of glyphs in this run.
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the number of glyphs in this run.
     * @returns { int } Number of glyphs. The value is an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getGlyphCount(): int;

    /**
     * Obtains the index of each glyph in this run.
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the index of each glyph in this run.
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the index of each glyph in this run.
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getGlyphs(): Array<int>;

    /**
     * Obtains the index of each glyph in the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end
     * of the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is
     * returned.
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the index of each glyph in the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end
     * of the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is
     * returned.
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     */
    /**
     * Obtains the index of each glyph in the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     *     range. end indicates the length of the range. If the length is 0, the range is from range.start to the end
     *     of the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is
     *     returned.
     * @returns { Array<int> } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    getGlyphs(range: Range): Array<int>;

    /**
     * Obtains the index of each glyph in the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end
     * of the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is
     * returned.
     * @returns { Array<int> | undefined } Array holding the index of each glyph in the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getGlyphs(range: Range): Array<int> | undefined;

    /**
     * Obtains the position of each glyph relative to the respective line in this run.
     * @returns { Array<common2D.Point> } Array holding the position of each glyph relative to the respective line in
     * the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the position of each glyph relative to the respective line in this run.
     * @returns { Array<common2D.Point> } Array holding the position of each glyph relative to the respective line in
     * the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the position of each glyph relative to the respective line in this run.
     * @returns { Array<common2D.Point> } Array holding the position of each glyph relative to the respective line in
     *     the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getPositions(): Array<common2D.Point>;

    /**
     * Obtains the position array of each glyph relative to the respective line within the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * @returns { Array<common2D.Point> } 	Array holding the position of each glyph relative to the respective line in
     * the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the position array of each glyph relative to the respective line within the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * @returns { Array<common2D.Point> } 	Array holding the position of each glyph relative to the respective line in
     * the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     */
    /**
     * Obtains the position array of each glyph relative to the respective line within the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     *     range. end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     *     the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * @returns { Array<common2D.Point> } 	Array holding the position of each glyph relative to the respective line in
     *     the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    getPositions(range: Range): Array<common2D.Point>;

    /**
     * Obtains the position array of each glyph relative to the respective line within the specified range of this run.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range. end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * @returns { Array<common2D.Point> | undefined } 	Array holding the position of each glyph relative to the respective line in
     * the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getPositions(range: Range): Array<common2D.Point> | undefined;

	  /**
     * Obtains the offset of each glyph in this run relative to its index.
     * @returns { Array<common2D.Point> } Array holding the offset of each glyph in the run relative to its index.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the offset of each glyph in this run relative to its index.
     * @returns { Array<common2D.Point> } Array holding the offset of each glyph in the run relative to its index.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the offset of each glyph in this run relative to its index.
     * @returns { Array<common2D.Point> } Array holding the offset of each glyph in the run relative to its index.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getOffsets(): Array<common2D.Point>;

    /**
     * Obtains the Font object of this run.
     * @returns { drawing.Font } Font object of this run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the Font object of this run.
     * @returns { drawing.Font } Font object of this run.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the Font object of this run.
     * @returns { drawing.Font } Font object of this run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getFont(): drawing.Font;

    /**
     * Paints this run on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Paints this run on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Paints this run on the canvas with the coordinate point (x, y) as the upper left corner.
     * @param { drawing.Canvas } canvas - Target canvas.
     * @param { double } x - X coordinate of the upper left corner. The value is a floating point number.
     * @param { double } y - Y coordinate of the upper left corner. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    paint(canvas: drawing.Canvas, x: double, y: double): void;

    /**
     * Obtains an array of character indices for glyphs within a specified range of this run, where the indices are
     * offsets relative to the entire paragraph.
     * @param { Range } [range] - Range of the glyphs, where range.start indicates the start position of the range, and
     * range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * If this parameter is not passed, the entire run is obtained.
     * @returns { Array<int> } Array of character indices.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains an array of character indices for glyphs within a specified range of this run, where the indices are
     * offsets relative to the entire paragraph.
     * @param { Range } [range] - Range of the glyphs, where range.start indicates the start position of the range, and
     * range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * If this parameter is not passed, the entire run is obtained.
     * @returns { Array<int> } Array of character indices.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     */
    /**
     * Obtains an array of character indices for glyphs within a specified range of this run, where the indices are
     * offsets relative to the entire paragraph.
     * @param { Range } [range] - Range of the glyphs, where range.start indicates the start position of the range, and
     *     range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     *     the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     *     If this parameter is not passed, the entire run is obtained.
     * @returns { Array<int> } Array of character indices.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    getStringIndices(range?: Range): Array<int>;

    /**
     * Obtains an array of character indices for glyphs within a specified range of this run, where the indices are
     * offsets relative to the entire paragraph.
     * @param { Range } [range] - Range of the glyphs, where range.start indicates the start position of the range, and
     * range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run. If range.end or range.start is set to a negative value, null, or undefined, undefined is returned.
     * If this parameter is not passed, the entire run is obtained.
     * @returns { Array<int> | undefined } Array of character indices.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getStringIndices(range?: Range): Array<int> | undefined;

    /**
     * Obtains the range of glyphs generated by this run.
     * @returns { Range } 	Range of the glyphs, where start indicates the start position of the range, which is the
     * index relative to the entire paragraph, and end indicates the length of the range.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the range of glyphs generated by this run.
     * @returns { Range } 	Range of the glyphs, where start indicates the start position of the range, which is the
     * index relative to the entire paragraph, and end indicates the length of the range.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the range of glyphs generated by this run.
     * @returns { Range } 	Range of the glyphs, where start indicates the start position of the range, which is the
     *     index relative to the entire paragraph, and end indicates the length of the range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getStringRange(): Range;

    /**
     * Obtain the typographic boundaries of this run. These boundaries depend on the typographic font and font size,
     * but not on the characters themselves. For example, for the string " a b " (which has a space before "a" and
     * a space after "b"), the typographic boundaries include the spaces at the beginning and end of the line.
     * @returns { TypographicBounds } Typographic boundaries of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtain the typographic boundaries of this run. These boundaries depend on the typographic font and font size,
     * but not on the characters themselves. For example, for the string " a b " (which has a space before "a" and
     * a space after "b"), the typographic boundaries include the spaces at the beginning and end of the line.
     * @returns { TypographicBounds } Typographic boundaries of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtain the typographic boundaries of this run. These boundaries depend on the typographic font and font size,
     * but not on the characters themselves. For example, for the string " a b " (which has a space before "a" and
     * a space after "b"), the typographic boundaries include the spaces at the beginning and end of the line.
     * @returns { TypographicBounds } Typographic boundaries of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getTypographicBounds(): TypographicBounds;

    /**
     * Obtains the image boundary of this run. The image boundary, equivalent to a visual boundary, is related to the
     * font, font size, and characters. For example, for the string " a b " (which has a space before "a" and a
     * space after "b"), only "a b" are visible to users, and therefore the image boundary does not include these
     * spaces at the beginning and end.
     * @returns { common2D.Rect } Image boundary of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Obtains the image boundary of this run. The image boundary, equivalent to a visual boundary, is related to the
     * font, font size, and characters. For example, for the string " a b " (which has a space before "a" and a
     * space after "b"), only "a b" are visible to users, and therefore the image boundary does not include these
     * spaces at the beginning and end.
     * @returns { common2D.Rect } Image boundary of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the image boundary of this run. The image boundary, equivalent to a visual boundary, is related to the
     * font, font size, and characters. For example, for the string " a b " (which has a space before "a" and a
     * space after "b"), only "a b" are visible to users, and therefore the image boundary does not include these
     * spaces at the beginning and end.
     * @returns { common2D.Rect } Image boundary of the run.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getImageBounds(): common2D.Rect;

    /**
     * Obtains the text direction of the run.
     * @returns { TextDirection } Returns the text direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Obtains the text direction of the run.
     * @returns { TextDirection } Returns the text direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Obtains the text direction of the run.
     * @returns { TextDirection } Returns the text direction.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    getTextDirection(): TextDirection;

    /**
     * Gets the glyph width array within the range.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run.
     * @returns { Array<common2D.Point> } Array holding the advance width and height of each glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Gets the glyph width array within the range.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run.
     * @returns { Array<common2D.Point> } Array holding the advance width and height of each glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     */
    /**
     * Gets the glyph width array within the range.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     * range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     * the run.
     * @returns { Array<common2D.Point> } Array holding the advance width and height of each glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic
     */
    getAdvances(range: Range): Array<common2D.Point>;

    /**
     * Gets the glyph width array within the range.
     * @param { Range } range - Range of the glyphs, where range.start indicates the start position of the range, and
     *     range.end indicates the length of the range. If the length is 0, the range is from range.start to the end of
     *     the run.
     * @returns { Array<common2D.Point> | undefined } Array holding the advance width and height of each glyph.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 23 static
     */
    getAdvances(range: Range): Array<common2D.Point> | undefined;
  }

  /**
   * Describes the layout information and metrics for a continuous piece of text (a run) in a line of text.
   * @typedef RunMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes the layout information and metrics for a continuous piece of text (a run) in a line of text.
   * @typedef RunMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes the layout information and metrics for a continuous piece of text (a run) in a line of text.
   * @typedef RunMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface RunMetrics {
    /**
     * The metrics of an Font.
     * @type { TextStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * The metrics of an Font.
     * @type { TextStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * The metrics of an Font.
     * @type { TextStyle }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    textStyle: TextStyle;

    /**
     * Describes text style.
     * @type { drawing.FontMetrics }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Describes text style.
     * @type { drawing.FontMetrics }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Describes text style.
     * @type { drawing.FontMetrics }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    fontMetrics: drawing.FontMetrics;
  }

  /**
   * Describes the measurement information of a single line of text in the text layout.
   * @typedef LineMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  /**
   * Describes the measurement information of a single line of text in the text layout.
   * @typedef LineMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Describes the measurement information of a single line of text in the text layout.
   * @typedef LineMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface LineMetrics {
    /**
     * Start index of the line in the text buffer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Start index of the line in the text buffer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Start index of the line in the text buffer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    startIndex: int;

    /**
     * End index of the line in the text buffer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * End index of the line in the text buffer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * End index of the line in the text buffer.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    endIndex: int;

    /**
     * Ascent, that is, the distance from the baseline to the top of the character.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Ascent, that is, the distance from the baseline to the top of the character.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Ascent, that is, the distance from the baseline to the top of the character.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    ascent: double;

    /**
     * Descent, that is, the distance from the baseline to the bottom of the character.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Descent, that is, the distance from the baseline to the bottom of the character.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Descent, that is, the distance from the baseline to the bottom of the character.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    descent: double;

    /**
     * Height of the line, which is Math.round(ascent + descent).
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Height of the line, which is Math.round(ascent + descent).
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Height of the line, which is Math.round(ascent + descent).
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    height: double;

    /**
     * Width of the line.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Width of the line.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Width of the line.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    width: double;

    /**
     * Left edge of the line. The right edge is the value of left plus the value of width.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Left edge of the line. The right edge is the value of left plus the value of width.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Left edge of the line. The right edge is the value of left plus the value of width.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    left: double;

    /**
     * Y coordinate of the baseline in the line relative to the top of the paragraph.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Y coordinate of the baseline in the line relative to the top of the paragraph.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Y coordinate of the baseline in the line relative to the top of the paragraph.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    baseline: double;

    /**
     * Line number, starting from 0.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Line number, starting from 0.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Line number, starting from 0.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    lineNumber: int;

    /**
     * Height from the top to the current line.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Height from the top to the current line.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Height from the top to the current line.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    topHeight: double;

    /**
     * Mapping between text index ranges and the FontMetrics associated with
     * them. The first run will be keyed under start_index. The metrics here.
     * are before layout and are the base values we calculate from.
     * @type { Map<int, RunMetrics> }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Mapping between text index ranges and the FontMetrics associated with
     * them. The first run will be keyed under start_index. The metrics here.
     * are before layout and are the base values we calculate from.
     * @type { Map<int, RunMetrics> }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Mapping between text index ranges and the FontMetrics associated with
     * them. The first run will be keyed under start_index. The metrics here.
     * are before layout and are the base values we calculate from.
     * @type { Map<int, RunMetrics> }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    runMetrics: Map<int, RunMetrics>;
  }

  /**
   * Obtains the full names of all fonts of the specified type. This API uses a promise to return the result.
   * @param { SystemFontType } fontType - System font type.
   * @returns { Promise<Array<string>> } 	Promise used to return the full names of all fonts of the specified type.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 14 dynamic
   */
  /**
   * Obtains the full names of all fonts of the specified type. This API uses a promise to return the result.
   * @param { SystemFontType } fontType - System font type.
   * @returns { Promise<Array<string>> } 	Promise used to return the full names of all fonts of the specified type.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Obtains the full names of all fonts of the specified type. This API uses a promise to return the result.
   * @param { SystemFontType } fontType - System font type.
   * @returns { Promise<Array<string>> } 	Promise used to return the full names of all fonts of the specified type.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  function getSystemFontFullNamesByType(fontType: SystemFontType): Promise<Array<string>>;

  /**
   * Obtains the font descriptor based on the font name and type. This API uses a promise to return the result.
   * A font descriptor is a data structure that describes font features. It contains details of the font appearance and
   * properties.
   * @param { string } fullName - Font name, corresponding to the value of fullName in the name table of the
   * corresponding font file. It is obtained by calling getSystemFontFullNamesByType.
   * @param { SystemFontType } fontType - System font type.
   * @returns { Promise<FontDescriptor> } Promise used to return the font descriptor.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 14 dynamic
   */
  /**
   * Obtains the font descriptor based on the font name and type. This API uses a promise to return the result.
   * A font descriptor is a data structure that describes font features. It contains details of the font appearance and
   * properties.
   * @param { string } fullName - Font name, corresponding to the value of fullName in the name table of the
   * corresponding font file. It is obtained by calling getSystemFontFullNamesByType.
   * @param { SystemFontType } fontType - System font type.
   * @returns { Promise<FontDescriptor> } Promise used to return the font descriptor.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Obtains the font descriptor based on the font name and type. This API uses a promise to return the result.
   * A font descriptor is a data structure that describes font features. It contains details of the font appearance and
   * properties.
   * @param { string } fullName - Font name, corresponding to the value of fullName in the name table of the
   *     corresponding font file. It is obtained by calling getSystemFontFullNamesByType.
   * @param { SystemFontType } fontType - System font type.
   * @returns { Promise<FontDescriptor> } Promise used to return the font descriptor.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  function getFontDescriptorByFullName(fullName: string, fontType: SystemFontType): Promise<FontDescriptor>;

  /**
   * Obtains all system font descriptors that match the provided font descriptor. This API uses a promise to return the
   * result.
   * @param { FontDescriptor } desc - Font descriptor to match against. If this parameter is left unspecified,
   * all system font descriptors are returned. If a specific value is provided, the matching is performed based on
   * <br.the value provided. If the matching fails, an empty array is returned.
   * @returns { Promise<Array<FontDescriptor>> } Promise used to return all matched system font descriptors, and an
   * empty array will be returned if the matching fails.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   */
  /**
   * Obtains all system font descriptors that match the provided font descriptor. This API uses a promise to return the
   * result.
   * @param { FontDescriptor } desc - Font descriptor to match against. If this parameter is left unspecified,
   * all system font descriptors are returned. If a specific value is provided, the matching is performed based on
   * <br.the value provided. If the matching fails, an empty array is returned.
   * @returns { Promise<Array<FontDescriptor>> } Promise used to return all matched system font descriptors, and an
   * empty array will be returned if the matching fails.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Obtains all system font descriptors that match the provided font descriptor. This API uses a promise to return the
   * result.
   * @param { FontDescriptor } desc - Font descriptor to match against. If this parameter is left unspecified,
   *     all system font descriptors are returned. If a specific value is provided, the matching is performed based on
   *     the value provided. If the matching fails, an empty array is returned.
   * @returns { Promise<Array<FontDescriptor>> } Promise used to return all matched system font descriptors, and an
   *     empty array will be returned if the matching fails.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  function matchFontDescriptors(desc: FontDescriptor): Promise<Array<FontDescriptor>>;

  /**
   * Implements a paragraph-style text tab, which stores the alignment mode and position.
   * @typedef TextTab
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18 dynamic
   */
  /**
   * Implements a paragraph-style text tab, which stores the alignment mode and position.
   * @typedef TextTab
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Implements a paragraph-style text tab, which stores the alignment mode and position.
   * @typedef TextTab
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextTab {
    /**
     * Alignment mode of the text following the tab character in a paragraph. It can be set to LEFT, RIGHT, and CENTER
     * defined in TextAlign. Other enumerated values have the effect of left alignment. The default value is left
     * alignment.
     * @type { TextAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Alignment mode of the text following the tab character in a paragraph. It can be set to LEFT, RIGHT, and CENTER
     * defined in TextAlign. Other enumerated values have the effect of left alignment. The default value is left
     * alignment.
     * @type { TextAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Alignment mode of the text following the tab character in a paragraph. It can be set to LEFT, RIGHT, and CENTER
     * defined in TextAlign. Other enumerated values have the effect of left alignment. The default value is left
     * alignment.
     * @type { TextAlign }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    alignment: TextAlign;

    /**
     * Alignment position of the text following the tab character. The value is a floating point number, in px.
     * The minimum value is 1.0. When the value is less than 1.0, the tab character is replaced with a space.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    /**
     * Alignment position of the text following the tab character. The value is a floating point number, in px.
     * The minimum value is 1.0. When the value is less than 1.0, the tab character is replaced with a space.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Alignment position of the text following the tab character. The value is a floating point number, in px.
     * The minimum value is 1.0. When the value is less than 1.0, the tab character is replaced with a space.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    location: double;
  }

  /**
   * The text's rectangle after layout. The value is a floating point number, in px.
   *
   * @typedef TextRectSize
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextRectSize {
   /**
    * The width of the text's rectangle.
    *
    * @type { double }
    * @syscap SystemCapability.Graphics.Drawing
    * @stagemodelonly
    * @atomicservice
    * @since 24 dynamic&static
    */
    width: double;

   /**
    * The height of the text's rectangle.
    *
    * @type { double }
    * @syscap SystemCapability.Graphics.Drawing
    * @stagemodelonly
    * @atomicservice
    * @since 24 dynamic&static
    */
    height: double;
  }

  /**
   * The text layout result.
   *
   * @typedef TextLayoutResult
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface TextLayoutResult {
   /**
    * The character range of the string that fits in the paragraph's rectangle.
    *
    * @type { Array<Range> }
    * @syscap SystemCapability.Graphics.Drawing
    * @atomicservice
    * @stagemodelonly
    * @since 24 dynamic&static
    */
    fitStrRange: Array<Range>;

   /**
    * The size of the paragraph's rectangle after layout.
    *
    * @type { TextRectSize }
    * @syscap SystemCapability.Graphics.Drawing
    * @atomicservice
    * @stagemodelonly
    * @since 24 dynamic&static
    */
    correctRect: TextRectSize;
  }

  /**
   * Defines text rendering high contrast mode to enhance readability.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  /**
   * Defines text rendering high contrast mode to enhance readability.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Defines text rendering high contrast mode to enhance readability.
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextHighContrast {
    /**
     * Follow system's high contrast settings for text rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Follow system's high contrast settings for text rendering.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    TEXT_FOLLOW_SYSTEM_HIGH_CONTRAST,
    /**
     * Disables high contrast rendering regardless of system settings.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Disables high contrast rendering regardless of system settings.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Disables high contrast rendering regardless of system settings.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TEXT_APP_DISABLE_HIGH_CONTRAST,
    /**
     * Enable high contrast rendering regardless of system settings.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Enable high contrast rendering regardless of system settings.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Enable high contrast rendering regardless of system settings.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    TEXT_APP_ENABLE_HIGH_CONTRAST,
  }

  /**
   * Sets high contrast mode of text rendering.
   * @param { TextHighContrast } action - High contrast mode.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  /**
   * Sets high contrast mode of text rendering.
   * @param { TextHighContrast } action - High contrast mode.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Sets high contrast mode of text rendering.
   * @param { TextHighContrast } action - High contrast mode.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  function setTextHighContrast(action: TextHighContrast): void;

  /**
   * Visual representations for undefined (.notdef) glyphs.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  /**
   * Visual representations for undefined (.notdef) glyphs.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Visual representations for undefined (.notdef) glyphs.
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  enum TextUndefinedGlyphDisplay {
    /**
     * Use the font's built-in .notdef glyph. This respects font's internal .notdef glyph design,
     * which might be an empty box, blank space, or custom symbol.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Use the font's built-in .notdef glyph. This respects font's internal .notdef glyph design,
     * which might be an empty box, blank space, or custom symbol.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Use the font's built-in .notdef glyph. This respects font's internal .notdef glyph design,
     * which might be an empty box, blank space, or custom symbol.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    USE_DEFAULT,
    /**
     * Always replace undefined glyphs with explicit tofu blocks,
     * overriding the font's default behavior. Useful for debugging missing characters
     * or enforcing consistent missing symbol display.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    /**
     * Always replace undefined glyphs with explicit tofu blocks,
     * overriding the font's default behavior. Useful for debugging missing characters
     * or enforcing consistent missing symbol display.
     * @syscap SystemCapability.Graphics.Drawing
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * Always replace undefined glyphs with explicit tofu blocks,
     * overriding the font's default behavior. Useful for debugging missing characters
     * or enforcing consistent missing symbol display.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @atomicservice
     * @since 24 dynamic&static
     */
    USE_TOFU,
  }

  /**
   * Sets the glyph type to use when a character maps to the .notdef (undefined) glyph.
   * affects all text rendered after this call.
   * This configuration affects how the renderer displays characters that are not defined in the font:
   * - The default behavior follows font's internal .notdef glyph design
   * - Tofu blocks explicitly show missing characters as visible squares
   * @param { TextUndefinedGlyphDisplay } noGlyphShow - The strategy for handling undefined glyphs.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 20 dynamic
   */
  /**
   * Sets the glyph type to use when a character maps to the .notdef (undefined) glyph.
   * affects all text rendered after this call.
   * This configuration affects how the renderer displays characters that are not defined in the font:
   * - The default behavior follows font's internal .notdef glyph design
   * - Tofu blocks explicitly show missing characters as visible squares
   * @param { TextUndefinedGlyphDisplay } noGlyphShow - The strategy for handling undefined glyphs.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  /**
   * Sets the glyph type to use when a character maps to the .notdef (undefined) glyph.
   * affects all text rendered after this call.
   * This configuration affects how the renderer displays characters that are not defined in the font:
   * - The default behavior follows font's internal .notdef glyph design
   * - Tofu blocks explicitly show missing characters as visible squares
   * @param { TextUndefinedGlyphDisplay } noGlyphShow - The strategy for handling undefined glyphs.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic&static
   */
  function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void;

  /**
   * Obtains the font descriptor array based on the provided font file path or resource.
   * @param { string | Resource } path - Path or resource of the font file.
   *     The value must be **file://**absolute path of the font file or **rawfile/**directory or file name.
   * @returns { Promise<Array<FontDescriptor>> } Promise used to return all parsed font descriptors,
   *     and an empty array will be returned if no fonts are found, invalid path, no permission, or non-font file.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function getFontDescriptorsFromPath(path: string | Resource): Promise<Array<FontDescriptor>>;

  /**
   * Checks whether the font format specified by the path is supported.
   * @param { string | Resource } fontURL - The font source, which can be a local file path or a Resource object.
   * @returns { boolean } A boolean value indicating whether the font is supported.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 23 dynamic&static
   */
  function isFontSupported(fontURL: string | Resource): boolean;

  /**
   * Obtain font Unicode set based on the provided font file path or resource.
   * @param { string | Resource } path - Path or resource of the font file.
   *     The value must be **file://**absolute path of the font file or **rawfile/**directory or file name.
   * @param { int } index - Index of ttc files, if the file is ttf, the index should be set to 0.
   * @returns { Promise<Array<int>> } Promise used to return all parsed font unicode,
   *     and an empty array will be returned if no font data are found, invalid path, no permission, or non-font file.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getFontUnicodeSet(path: string | Resource, index: int) : Promise<Array<int>>;

  /**
   * Obtain font count based on the provided font file path or resource.
   * @param { string | Resource } path - Path or resource of the font file.
   * @returns { int } font count.
   * @syscap SystemCapability.Graphics.Drawing
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getFontCount(path: string | Resource) : int;

  /**
   * Obtain the corresponding font path array based on the font type.
   * @param { SystemFontType } fontType - System font type.
   * @returns { Array<string> } An array of font path.
   * @syscap SystemCapability.Graphics.Drawing
   * @atomicservice
   * @since 23 dynamic&static
   */
  function getFontPathsByType(fontType: SystemFontType): Array<string>;
}

export default text;
