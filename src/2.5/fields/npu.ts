import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 NPU Fields
 *
 * HL7 v2.5 NPU field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NPU.1 - Bed Location
 */
export const NPU_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "NPU.1",
  version: "2.5",
  description: "Bed Location",
  type: "Field",
  item: 209,
  table: "",
  longName: "HL7Bed Location",
  length: 80
});

/**
 * NPU.2 - Bed Status
 */
export const NPU_2 = datatypes.IS.register(hl7v2Metadata, {
  title: "NPU.2",
  version: "2.5",
  description: "Bed Status",
  type: "Field",
  item: 170,
  table: "HL70116",
  longName: "HL7Bed Status",
  length: 1
});
