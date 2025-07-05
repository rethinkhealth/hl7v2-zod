import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 ADJ Fields
 *
 * HL7 v2.7 ADJ field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADJ.1 - Provider Adjustment Number
 */
export const ADJ_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "ADJ.1",
  version: "2.7",
  description: "Provider Adjustment Number",
  type: "Field",
  item: 2003,
  table: "",
  longName: "HL7Provider Adjustment Number"
});

/**
 * ADJ.2 - Payer Adjustment Number
 */
export const ADJ_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "ADJ.2",
  version: "2.7",
  description: "Payer Adjustment Number",
  type: "Field",
  item: 2004,
  table: "",
  longName: "HL7Payer Adjustment Number"
});

/**
 * ADJ.3 - Adjustment Sequence Number
 */
export const ADJ_3 = datatypes.SI.register(hl7v2Metadata, {
  title: "ADJ.3",
  version: "2.7",
  description: "Adjustment Sequence Number",
  type: "Field",
  item: 2005,
  table: "",
  longName: "HL7Adjustment Sequence Number",
  length: 4
});

/**
 * ADJ.4 - Adjustment Category
 */
export const ADJ_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ADJ.4",
  version: "2.7",
  description: "Adjustment Category",
  type: "Field",
  item: 2006,
  table: "HL70564",
  longName: "HL7Adjustment Category"
});

/**
 * ADJ.5 - Adjustment Amount
 */
export const ADJ_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "ADJ.5",
  version: "2.7",
  description: "Adjustment Amount",
  type: "Field",
  item: 2007,
  table: "",
  longName: "HL7Adjustment Amount"
});

/**
 * ADJ.6 - Adjustment Quantity
 */
export const ADJ_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "ADJ.6",
  version: "2.7",
  description: "Adjustment Quantity",
  type: "Field",
  item: 2008,
  table: "HL70560",
  longName: "HL7Adjustment Quantity"
});

/**
 * ADJ.7 - Adjustment Reason PA
 */
export const ADJ_7 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ADJ.7",
  version: "2.7",
  description: "Adjustment Reason PA",
  type: "Field",
  item: 2009,
  table: "HL70565",
  longName: "HL7Adjustment Reason PA"
});

/**
 * ADJ.8 - Adjustment Description
 */
export const ADJ_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "ADJ.8",
  version: "2.7",
  description: "Adjustment Description",
  type: "Field",
  item: 2010,
  table: "",
  longName: "HL7Adjustment Description"
});

/**
 * ADJ.9 - Original Value
 */
export const ADJ_9 = datatypes.NM.register(hl7v2Metadata, {
  title: "ADJ.9",
  version: "2.7",
  description: "Original Value",
  type: "Field",
  item: 2011,
  table: "",
  longName: "HL7Original Value"
});

/**
 * ADJ.10 - Substitute Value
 */
export const ADJ_10 = datatypes.NM.register(hl7v2Metadata, {
  title: "ADJ.10",
  version: "2.7",
  description: "Substitute Value",
  type: "Field",
  item: 2012,
  table: "",
  longName: "HL7Substitute Value"
});

/**
 * ADJ.11 - Adjustment Action
 */
export const ADJ_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ADJ.11",
  version: "2.7",
  description: "Adjustment Action",
  type: "Field",
  item: 2013,
  table: "HL70569",
  longName: "HL7Adjustment Action"
});

/**
 * ADJ.12 - Provider Adjustment Number Cross Reference
 */
export const ADJ_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "ADJ.12",
  version: "2.7",
  description: "Provider Adjustment Number Cross Reference",
  type: "Field",
  item: 2014,
  table: "",
  longName: "HL7Provider Adjustment Number Cross Reference"
});

/**
 * ADJ.13 - Provider Product/Service Line Item Number Cross Reference
 */
export const ADJ_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "ADJ.13",
  version: "2.7",
  description: "Provider Product/Service Line Item Number Cross Reference",
  type: "Field",
  item: 2015,
  table: "",
  longName: "HL7Provider Product/Service Line Item Number Cross Reference"
});

/**
 * ADJ.14 - Adjustment Date
 */
export const ADJ_14 = datatypes.DTM.register(hl7v2Metadata, {
  title: "ADJ.14",
  version: "2.7",
  description: "Adjustment Date",
  type: "Field",
  item: 2016,
  table: "",
  longName: "HL7Adjustment Date"
});

/**
 * ADJ.15 - Responsible Organization
 */
export const ADJ_15 = datatypes.XON.register(hl7v2Metadata, {
  title: "ADJ.15",
  version: "2.7",
  description: "Responsible Organization",
  type: "Field",
  item: 2017,
  table: "",
  longName: "HL7Responsible Organization"
});
