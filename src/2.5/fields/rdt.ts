import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 RDT Fields
 *
 * HL7 v2.5 RDT field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RDT.1 - Column Value
 */
export const RDT_1 = datatypes.VARIES.register(hl7v2Metadata, {
  title: "RDT.1",
  version: "2.5",
  description: "Column Value",
  type: "Field",
  item: 703,
  table: "",
  longName: "HL7Column Value",
  length: 99999
});
