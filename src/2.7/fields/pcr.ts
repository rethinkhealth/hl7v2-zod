import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 PCR Fields
 *
 * HL7 v2.7 PCR field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PCR.1 - Implicated Product
 */
export const PCR_1 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCR.1",
  version: "2.7",
  description: "Implicated Product",
  type: "Field",
  item: 1098,
  table: "HL79999",
  longName: "HL7Implicated Product"
});

/**
 * PCR.2 - Generic Product
 */
export const PCR_2 = datatypes.IS.register(hl7v2Metadata, {
  title: "PCR.2",
  version: "2.7",
  description: "Generic Product",
  type: "Field",
  item: 1099,
  table: "HL70249",
  longName: "HL7Generic Product"
});

/**
 * PCR.3 - Product Class
 */
export const PCR_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCR.3",
  version: "2.7",
  description: "Product Class",
  type: "Field",
  item: 1100,
  table: "HL79999",
  longName: "HL7Product Class"
});

/**
 * PCR.4 - Total Duration Of Therapy
 */
export const PCR_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "PCR.4",
  version: "2.7",
  description: "Total Duration Of Therapy",
  type: "Field",
  item: 1101,
  table: "",
  longName: "HL7Total Duration Of Therapy"
});

/**
 * PCR.5 - Product Manufacture Date
 */
export const PCR_5 = datatypes.DTM.register(hl7v2Metadata, {
  title: "PCR.5",
  version: "2.7",
  description: "Product Manufacture Date",
  type: "Field",
  item: 1102,
  table: "",
  longName: "HL7Product Manufacture Date"
});

/**
 * PCR.6 - Product Expiration Date
 */
export const PCR_6 = datatypes.DTM.register(hl7v2Metadata, {
  title: "PCR.6",
  version: "2.7",
  description: "Product Expiration Date",
  type: "Field",
  item: 1103,
  table: "",
  longName: "HL7Product Expiration Date"
});

/**
 * PCR.7 - Product Implantation Date
 */
export const PCR_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: "PCR.7",
  version: "2.7",
  description: "Product Implantation Date",
  type: "Field",
  item: 1104,
  table: "",
  longName: "HL7Product Implantation Date"
});

/**
 * PCR.8 - Product Explantation Date
 */
export const PCR_8 = datatypes.DTM.register(hl7v2Metadata, {
  title: "PCR.8",
  version: "2.7",
  description: "Product Explantation Date",
  type: "Field",
  item: 1105,
  table: "",
  longName: "HL7Product Explantation Date"
});

/**
 * PCR.9 - Single Use Device
 */
export const PCR_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCR.9",
  version: "2.7",
  description: "Single Use Device",
  type: "Field",
  item: 1106,
  table: "HL70244",
  longName: "HL7Single Use Device"
});

/**
 * PCR.10 - Indication For Product Use
 */
export const PCR_10 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCR.10",
  version: "2.7",
  description: "Indication For Product Use",
  type: "Field",
  item: 1107,
  table: "HL79999",
  longName: "HL7Indication For Product Use"
});

/**
 * PCR.11 - Product Problem
 */
export const PCR_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCR.11",
  version: "2.7",
  description: "Product Problem",
  type: "Field",
  item: 1108,
  table: "HL70245",
  longName: "HL7Product Problem"
});

/**
 * PCR.12 - Product Serial/Lot Number
 */
export const PCR_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "PCR.12",
  version: "2.7",
  description: "Product Serial/Lot Number",
  type: "Field",
  item: 1109,
  table: "",
  longName: "HL7Product Serial/Lot Number"
});

/**
 * PCR.13 - Product Available For Inspection
 */
export const PCR_13 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCR.13",
  version: "2.7",
  description: "Product Available For Inspection",
  type: "Field",
  item: 1110,
  table: "HL70246",
  longName: "HL7Product Available For Inspection"
});

/**
 * PCR.14 - Product Evaluation Performed
 */
export const PCR_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCR.14",
  version: "2.7",
  description: "Product Evaluation Performed",
  type: "Field",
  item: 1111,
  table: "HL79999",
  longName: "HL7Product Evaluation Performed"
});

/**
 * PCR.15 - Product Evaluation Status
 */
export const PCR_15 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCR.15",
  version: "2.7",
  description: "Product Evaluation Status",
  type: "Field",
  item: 1112,
  table: "HL70247",
  longName: "HL7Product Evaluation Status"
});

/**
 * PCR.16 - Product Evaluation Results
 */
export const PCR_16 = datatypes.CWE.register(hl7v2Metadata, {
  title: "PCR.16",
  version: "2.7",
  description: "Product Evaluation Results",
  type: "Field",
  item: 1113,
  table: "HL79999",
  longName: "HL7Product Evaluation Results"
});

/**
 * PCR.17 - Evaluated Product Source
 */
export const PCR_17 = datatypes.ID.register(hl7v2Metadata, {
  title: "PCR.17",
  version: "2.7",
  description: "Evaluated Product Source",
  type: "Field",
  item: 1114,
  table: "HL70248",
  longName: "HL7Evaluated Product Source",
  length: 1
});

/**
 * PCR.18 - Date Product Returned To Manufacturer
 */
export const PCR_18 = datatypes.DTM.register(hl7v2Metadata, {
  title: "PCR.18",
  version: "2.7",
  description: "Date Product Returned To Manufacturer",
  type: "Field",
  item: 1115,
  table: "",
  longName: "HL7Date Product Returned To Manufacturer"
});

/**
 * PCR.19 - Device Operator Qualifications
 */
export const PCR_19 = datatypes.ID.register(hl7v2Metadata, {
  title: "PCR.19",
  version: "2.7",
  description: "Device Operator Qualifications",
  type: "Field",
  item: 1116,
  table: "HL70242",
  longName: "HL7Device Operator Qualifications",
  length: 1
});

/**
 * PCR.20 - Relatedness Assessment
 */
export const PCR_20 = datatypes.ID.register(hl7v2Metadata, {
  title: "PCR.20",
  version: "2.7",
  description: "Relatedness Assessment",
  type: "Field",
  item: 1117,
  table: "HL70250",
  longName: "HL7Relatedness Assessment",
  length: 1
});

/**
 * PCR.21 - Action Taken In Response To The Event
 */
export const PCR_21 = datatypes.ID.register(hl7v2Metadata, {
  title: "PCR.21",
  version: "2.7",
  description: "Action Taken In Response To The Event",
  type: "Field",
  item: 1118,
  table: "HL70251",
  longName: "HL7Action Taken In Response To The Event",
  length: 2
});

/**
 * PCR.22 - Event Causality Observations
 */
export const PCR_22 = datatypes.ID.register(hl7v2Metadata, {
  title: "PCR.22",
  version: "2.7",
  description: "Event Causality Observations",
  type: "Field",
  item: 1119,
  table: "HL70252",
  longName: "HL7Event Causality Observations",
  length: 2
});

/**
 * PCR.23 - Indirect Exposure Mechanism
 */
export const PCR_23 = datatypes.ID.register(hl7v2Metadata, {
  title: "PCR.23",
  version: "2.7",
  description: "Indirect Exposure Mechanism",
  type: "Field",
  item: 1120,
  table: "HL70253",
  longName: "HL7Indirect Exposure Mechanism",
  length: 1
});
