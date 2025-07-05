import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 NTE Fields
 *
 * HL7 v2.5 NTE field definitions
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
  version: "2.5",
  description: "Set ID - NTE",
  type: "Field",
  item: 96,
  table: "",
  longName: "HL7Set ID - NTE",
  length: 4
});

/**
 * NTE.2 - Source of Comment
 */
export const NTE_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "NTE.2",
  version: "2.5",
  description: "Source of Comment",
  type: "Field",
  item: 97,
  table: "HL70105",
  longName: "HL7Source of Comment",
  length: 8
});

/**
 * NTE.3 - Comment
 */
export const NTE_3 = datatypes.FT.register(hl7v2Metadata, {
  title: "NTE.3",
  version: "2.5",
  description: "Comment",
  type: "Field",
  item: 98,
  table: "",
  longName: "HL7Comment",
  length: 65536
});

/**
 * NTE.4 - Comment Type
 */
export const NTE_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "NTE.4",
  version: "2.5",
  description: "Comment Type",
  type: "Field",
  item: 1318,
  table: "HL70364",
  longName: "HL7Comment Type",
  length: 250
});
