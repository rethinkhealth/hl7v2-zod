import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 ROL Fields
 *
 * HL7 v2.8 ROL field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ROL.1 - Role Instance ID
 */
export const ROL_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "ROL.1",
  version: "2.8",
  description: "Role Instance ID",
  type: "Field",
  item: 1206,
  table: "",
  longName: "HL7Role Instance ID"
});

/**
 * ROL.2 - Action Code
 */
export const ROL_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "ROL.2",
  version: "2.8",
  description: "Action Code",
  type: "Field",
  item: 816,
  table: "HL70206",
  longName: "HL7Action Code",
  length: 2
});

/**
 * ROL.3 - Role-ROL
 */
export const ROL_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ROL.3",
  version: "2.8",
  description: "Role-ROL",
  type: "Field",
  item: 1197,
  table: "HL70443",
  longName: "HL7Role-ROL"
});

/**
 * ROL.4 - Role Person
 */
export const ROL_4 = datatypes.XCN.register(hl7v2Metadata, {
  title: "ROL.4",
  version: "2.8",
  description: "Role Person",
  type: "Field",
  item: 1198,
  table: "",
  longName: "HL7Role Person"
});

/**
 * ROL.5 - Role Begin Date/Time
 */
export const ROL_5 = datatypes.DTM.register(hl7v2Metadata, {
  title: "ROL.5",
  version: "2.8",
  description: "Role Begin Date/Time",
  type: "Field",
  item: 1199,
  table: "",
  longName: "HL7Role Begin Date/Time"
});

/**
 * ROL.6 - Role End Date/Time
 */
export const ROL_6 = datatypes.DTM.register(hl7v2Metadata, {
  title: "ROL.6",
  version: "2.8",
  description: "Role End Date/Time",
  type: "Field",
  item: 1200,
  table: "",
  longName: "HL7Role End Date/Time"
});

/**
 * ROL.7 - Role Duration
 */
export const ROL_7 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ROL.7",
  version: "2.8",
  description: "Role Duration",
  type: "Field",
  item: 1201,
  table: "",
  longName: "HL7Role Duration"
});

/**
 * ROL.8 - Role Action Reason
 */
export const ROL_8 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ROL.8",
  version: "2.8",
  description: "Role Action Reason",
  type: "Field",
  item: 1205,
  table: "",
  longName: "HL7Role Action Reason"
});

/**
 * ROL.9 - Provider Type
 */
export const ROL_9 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ROL.9",
  version: "2.8",
  description: "Provider Type",
  type: "Field",
  item: 1510,
  table: "",
  longName: "HL7Provider Type"
});

/**
 * ROL.10 - Organization Unit Type
 */
export const ROL_10 = datatypes.CWE.register(hl7v2Metadata, {
  title: "ROL.10",
  version: "2.8",
  description: "Organization Unit Type",
  type: "Field",
  item: 1461,
  table: "HL70406",
  longName: "HL7Organization Unit Type"
});

/**
 * ROL.11 - Office/Home Address/Birthplace
 */
export const ROL_11 = datatypes.XAD.register(hl7v2Metadata, {
  title: "ROL.11",
  version: "2.8",
  description: "Office/Home Address/Birthplace",
  type: "Field",
  item: 679,
  table: "",
  longName: "HL7Office/Home Address/Birthplace"
});

/**
 * ROL.12 - Phone
 */
export const ROL_12 = datatypes.XTN.register(hl7v2Metadata, {
  title: "ROL.12",
  version: "2.8",
  description: "Phone",
  type: "Field",
  item: 678,
  table: "",
  longName: "HL7Phone"
});

/**
 * ROL.13 - Person's Location
 */
export const ROL_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "ROL.13",
  version: "2.8",
  description: "Person's Location",
  type: "Field",
  item: 2183,
  table: "",
  longName: "HL7Person's Location"
});

/**
 * ROL.14 - Organization
 */
export const ROL_14 = datatypes.XON.register(hl7v2Metadata, {
  title: "ROL.14",
  version: "2.8",
  description: "Organization",
  type: "Field",
  item: 2377,
  table: "",
  longName: "HL7Organization"
});
