import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 UB2 Fields
 *
 * HL7 v2.6 UB2 field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * UB2.1 - Set ID - UB2
 */
export const UB2_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "UB2.1",
  version: "2.6",
  description: "Set ID - UB2",
  type: "Field",
  item: 553,
  table: "",
  longName: "HL7Set ID - UB2",
  length: 4
});

/**
 * UB2.2 - Co-Insurance Days (9)
 */
export const UB2_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.2",
  version: "2.6",
  description: "Co-Insurance Days (9)",
  type: "Field",
  item: 554,
  table: "",
  longName: "HL7Co-Insurance Days (9)",
  length: 3
});

/**
 * UB2.3 - Condition Code (24-30)
 */
export const UB2_3 = datatypes.IS.register(hl7v2Metadata, {
  title: "UB2.3",
  version: "2.6",
  description: "Condition Code (24-30)",
  type: "Field",
  item: 555,
  table: "HL70043",
  longName: "HL7Condition Code (24-30)",
  length: 2
});

/**
 * UB2.4 - Covered Days (7)
 */
export const UB2_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.4",
  version: "2.6",
  description: "Covered Days (7)",
  type: "Field",
  item: 556,
  table: "",
  longName: "HL7Covered Days (7)",
  length: 3
});

/**
 * UB2.5 - Non-Covered Days (8)
 */
export const UB2_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.5",
  version: "2.6",
  description: "Non-Covered Days (8)",
  type: "Field",
  item: 557,
  table: "",
  longName: "HL7Non-Covered Days (8)",
  length: 4
});

/**
 * UB2.6 - Value Amount & Code
 */
export const UB2_6 = datatypes.UVC.register(hl7v2Metadata, {
  title: "UB2.6",
  version: "2.6",
  description: "Value Amount & Code",
  type: "Field",
  item: 558,
  table: "",
  longName: "HL7Value Amount & Code",
  length: 41
});

/**
 * UB2.7 - Occurrence Code & Date (32-35)
 */
export const UB2_7 = datatypes.OCD.register(hl7v2Metadata, {
  title: "UB2.7",
  version: "2.6",
  description: "Occurrence Code & Date (32-35)",
  type: "Field",
  item: 559,
  table: "",
  longName: "HL7Occurrence Code & Date (32-35)",
  length: 259
});

/**
 * UB2.8 - Occurrence Span Code/Dates (36)
 */
export const UB2_8 = datatypes.OSP.register(hl7v2Metadata, {
  title: "UB2.8",
  version: "2.6",
  description: "Occurrence Span Code/Dates (36)",
  type: "Field",
  item: 560,
  table: "",
  longName: "HL7Occurrence Span Code/Dates (36)",
  length: 268
});

/**
 * UB2.9 - UB92 Locator 2 (State)
 */
export const UB2_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.9",
  version: "2.6",
  description: "UB92 Locator 2 (State)",
  type: "Field",
  item: 561,
  table: "",
  longName: "HL7UB92 Locator 2 (State)",
  length: 29
});

/**
 * UB2.10 - UB92 Locator 11 (State)
 */
export const UB2_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.10",
  version: "2.6",
  description: "UB92 Locator 11 (State)",
  type: "Field",
  item: 562,
  table: "",
  longName: "HL7UB92 Locator 11 (State)",
  length: 12
});

/**
 * UB2.11 - UB92 Locator 31 (National)
 */
export const UB2_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.11",
  version: "2.6",
  description: "UB92 Locator 31 (National)",
  type: "Field",
  item: 563,
  table: "",
  longName: "HL7UB92 Locator 31 (National)",
  length: 5
});

/**
 * UB2.12 - Document Control Number
 */
export const UB2_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.12",
  version: "2.6",
  description: "Document Control Number",
  type: "Field",
  item: 564,
  table: "",
  longName: "HL7Document Control Number",
  length: 23
});

/**
 * UB2.13 - UB92 Locator 49 (National)
 */
export const UB2_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.13",
  version: "2.6",
  description: "UB92 Locator 49 (National)",
  type: "Field",
  item: 565,
  table: "",
  longName: "HL7UB92 Locator 49 (National)",
  length: 4
});

/**
 * UB2.14 - UB92 Locator 56 (State)
 */
export const UB2_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.14",
  version: "2.6",
  description: "UB92 Locator 56 (State)",
  type: "Field",
  item: 566,
  table: "",
  longName: "HL7UB92 Locator 56 (State)",
  length: 14
});

/**
 * UB2.15 - UB92 Locator 57 (National)
 */
export const UB2_15 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.15",
  version: "2.6",
  description: "UB92 Locator 57 (National)",
  type: "Field",
  item: 567,
  table: "",
  longName: "HL7UB92 Locator 57 (National)",
  length: 27
});

/**
 * UB2.16 - UB92 Locator 78 (State)
 */
export const UB2_16 = datatypes.ST.register(hl7v2Metadata, {
  title: "UB2.16",
  version: "2.6",
  description: "UB92 Locator 78 (State)",
  type: "Field",
  item: 568,
  table: "",
  longName: "HL7UB92 Locator 78 (State)",
  length: 2
});

/**
 * UB2.17 - Special Visit Count
 */
export const UB2_17 = datatypes.NM.register(hl7v2Metadata, {
  title: "UB2.17",
  version: "2.6",
  description: "Special Visit Count",
  type: "Field",
  item: 815,
  table: "",
  longName: "HL7Special Visit Count",
  length: 3
});
