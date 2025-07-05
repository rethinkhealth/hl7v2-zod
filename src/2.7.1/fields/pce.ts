import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 PCE Fields
 *
 * HL7 v2.7 PCE field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PCE.1 - Set ID - PCE
 */
export const PCE_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "PCE.1",
  version: "2.7",
  description: "Set ID - PCE",
  type: "Field",
  item: 2228,
  table: "",
  longName: "HL7Set ID - PCE",
  length: 4
});

/**
 * PCE.2 - Cost Center Account Number
 */
export const PCE_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "PCE.2",
  version: "2.7",
  description: "Cost Center Account Number",
  type: "Field",
  item: 281,
  table: "HL70319",
  longName: "HL7Cost Center Account Number"
});

/**
 * PCE.3 - Transaction Code
 */
export const PCE_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCE.3",
  version: "2.7",
  description: "Transaction Code",
  type: "Field",
  item: 361,
  table: "HL70132",
  longName: "HL7Transaction Code"
});

/**
 * PCE.4 - Transaction amount - unit
 */
export const PCE_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "PCE.4",
  version: "2.7",
  description: "Transaction amount - unit",
  type: "Field",
  item: 366,
  table: "",
  longName: "HL7Transaction amount - unit"
});
