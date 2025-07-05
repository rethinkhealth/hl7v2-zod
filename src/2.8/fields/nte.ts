import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 NTE Fields
 *
 * HL7 v2.8 NTE field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NTE.1 - Set ID - NTE
 */
export const NTE_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "NTE.1",
  version: "2.8",
  description: "Set ID - NTE",
  type: "Field",
  item: 96,
  table: "",
  longName: "HL7Set ID - NTE"
});

/**
 * NTE.2 - Source of Comment
 */
export const NTE_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "NTE.2",
  version: "2.8",
  description: "Source of Comment",
  type: "Field",
  item: 97,
  table: "HL70105",
  longName: "HL7Source of Comment",
  length: 1
});

/**
 * NTE.3 - Comment
 */
export const NTE_3 = datatypes.FT.register(hl7v2Metadata, {
  title: "NTE.3",
  version: "2.8",
  description: "Comment",
  type: "Field",
  item: 98,
  table: "",
  longName: "HL7Comment"
});

/**
 * NTE.4 - Comment Type
 */
export const NTE_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "NTE.4",
  version: "2.8",
  description: "Comment Type",
  type: "Field",
  item: 1318,
  table: "HL70364",
  longName: "HL7Comment Type"
});

/**
 * NTE.5 - Entered By
 */
export const NTE_5 = datatypes.XCN.register(hl7v2Metadata, {
  title: "NTE.5",
  version: "2.8",
  description: "Entered By",
  type: "Field",
  item: 224,
  table: "",
  longName: "HL7Entered By"
});

/**
 * NTE.6 - Entered Date/Time
 */
export const NTE_6 = datatypes.DTM.register(hl7v2Metadata, {
  title: "NTE.6",
  version: "2.8",
  description: "Entered Date/Time",
  type: "Field",
  item: 661,
  table: "",
  longName: "HL7Entered Date/Time"
});

/**
 * NTE.7 - Effective Start Date
 */
export const NTE_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: "NTE.7",
  version: "2.8",
  description: "Effective Start Date",
  type: "Field",
  item: 1004,
  table: "",
  longName: "HL7Effective Start Date"
});

/**
 * NTE.8 - Expiration Date
 */
export const NTE_8 = datatypes.DTM.register(hl7v2Metadata, {
  title: "NTE.8",
  version: "2.8",
  description: "Expiration Date",
  type: "Field",
  item: 2185,
  table: "",
  longName: "HL7Expiration Date"
});
