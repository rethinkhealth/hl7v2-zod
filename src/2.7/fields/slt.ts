import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 SLT Fields
 *
 * HL7 v2.7 SLT field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SLT.1 - Device Number
 */
export const SLT_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "SLT.1",
  version: "2.7",
  description: "Device Number",
  type: "Field",
  item: 2094,
  table: "",
  longName: "HL7Device Number"
});

/**
 * SLT.2 - Device Name
 */
export const SLT_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "SLT.2",
  version: "2.7",
  description: "Device Name",
  type: "Field",
  item: 2280,
  table: "",
  longName: "HL7Device Name"
});

/**
 * SLT.3 - Lot Number
 */
export const SLT_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "SLT.3",
  version: "2.7",
  description: "Lot Number",
  type: "Field",
  item: 2095,
  table: "",
  longName: "HL7Lot Number"
});

/**
 * SLT.4 - Item Identifier
 */
export const SLT_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "SLT.4",
  version: "2.7",
  description: "Item Identifier",
  type: "Field",
  item: 2096,
  table: "",
  longName: "HL7Item Identifier"
});

/**
 * SLT.5 - Bar Code
 */
export const SLT_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "SLT.5",
  version: "2.7",
  description: "Bar Code",
  type: "Field",
  item: 2097,
  table: "",
  longName: "HL7Bar Code"
});
