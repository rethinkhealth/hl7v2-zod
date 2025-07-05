import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 BTS Fields
 *
 * HL7 v2.5 BTS field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BTS.1 - Batch Message Count
 */
export const BTS_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "BTS.1",
  version: "2.5",
  description: "Batch Message Count",
  type: "Field",
  item: 93,
  table: "",
  longName: "HL7Batch Message Count",
  length: 10
});

/**
 * BTS.2 - Batch Comment
 */
export const BTS_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "BTS.2",
  version: "2.5",
  description: "Batch Comment",
  type: "Field",
  item: 90,
  table: "",
  longName: "HL7Batch Comment",
  length: 80
});

/**
 * BTS.3 - Batch Totals
 */
export const BTS_3 = datatypes.NM.register(hl7v2Metadata, {
  title: "BTS.3",
  version: "2.5",
  description: "Batch Totals",
  type: "Field",
  item: 95,
  table: "",
  longName: "HL7Batch Totals",
  length: 100
});
