import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 DSC Fields
 *
 * HL7 v2.7 DSC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DSC.1 - Continuation Pointer
 */
export const DSC_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "DSC.1",
  version: "2.7",
  description: "Continuation Pointer",
  type: "Field",
  item: 14,
  table: "",
  longName: "HL7Continuation Pointer"
});

/**
 * DSC.2 - Continuation Style
 */
export const DSC_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "DSC.2",
  version: "2.7",
  description: "Continuation Style",
  type: "Field",
  item: 1354,
  table: "HL70398",
  longName: "HL7Continuation Style",
  length: 1
});
