import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 SGH Fields
 *
 * HL7 v2.8 SGH field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SGH.1 - Set ID - SGH
 */
export const SGH_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "SGH.1",
  version: "2.8",
  description: "Set ID - SGH",
  type: "Field",
  item: 3389,
  table: "",
  longName: "HL7Set ID - SGH",
  length: 4
});

/**
 * SGH.2 - Segment Group Name
 */
export const SGH_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "SGH.2",
  version: "2.8",
  description: "Segment Group Name",
  type: "Field",
  item: 3390,
  table: "",
  longName: "HL7Segment Group Name"
});
