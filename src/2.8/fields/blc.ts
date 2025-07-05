import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 BLC Fields
 *
 * HL7 v2.8 BLC field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BLC.1 - Blood Product Code
 */
export const BLC_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "BLC.1",
  version: "2.8",
  description: "Blood Product Code",
  type: "Field",
  item: 1528,
  table: "HL70426",
  longName: "HL7Blood Product Code"
});

/**
 * BLC.2 - Blood Amount
 */
export const BLC_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "BLC.2",
  version: "2.8",
  description: "Blood Amount",
  type: "Field",
  item: 1529,
  table: "",
  longName: "HL7Blood Amount"
});
