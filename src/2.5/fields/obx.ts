import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.5 OBX Fields
 *
 * HL7 v2.5 OBX field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OBX.1 - Set ID - OBX
 */
export const OBX_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "OBX.1",
  version: "2.5",
  description: "Set ID - OBX",
  type: "Field",
  item: 569,
  table: "",
  longName: "HL7Set ID - OBX",
  length: 4
});

/**
 * OBX.2 - Value Type
 */
export const OBX_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "OBX.2",
  version: "2.5",
  description: "Value Type",
  type: "Field",
  item: 570,
  table: "HL70125",
  longName: "HL7Value Type",
  length: 2
});

/**
 * OBX.3 - Observation Identifier
 */
export const OBX_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.3",
  version: "2.5",
  description: "Observation Identifier",
  type: "Field",
  item: 571,
  table: "",
  longName: "HL7Observation Identifier",
  length: 250
});

/**
 * OBX.4 - Observation Sub-ID
 */
export const OBX_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.4",
  version: "2.5",
  description: "Observation Sub-ID",
  type: "Field",
  item: 572,
  table: "",
  longName: "HL7Observation Sub-ID",
  length: 20
});

/**
 * OBX.5 - Observation Value
 */
export const OBX_5 = datatypes.VARIES.register(hl7v2Metadata, {
  title: "OBX.5",
  version: "2.5",
  description: "Observation Value",
  type: "Field",
  item: 573,
  table: "",
  longName: "HL7Observation Value",
  length: 99999
});

/**
 * OBX.6 - Units
 */
export const OBX_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.6",
  version: "2.5",
  description: "Units",
  type: "Field",
  item: 574,
  table: "",
  longName: "HL7Units",
  length: 250
});

/**
 * OBX.7 - References Range
 */
export const OBX_7 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.7",
  version: "2.5",
  description: "References Range",
  type: "Field",
  item: 575,
  table: "",
  longName: "HL7References Range",
  length: 60
});

/**
 * OBX.8 - Abnormal Flags
 */
export const OBX_8 = datatypes.IS.register(hl7v2Metadata, {
  title: "OBX.8",
  version: "2.5",
  description: "Abnormal Flags",
  type: "Field",
  item: 576,
  table: "HL70078",
  longName: "HL7Abnormal Flags",
  length: 5
});

/**
 * OBX.9 - Probability
 */
export const OBX_9 = datatypes.NM.register(hl7v2Metadata, {
  title: "OBX.9",
  version: "2.5",
  description: "Probability",
  type: "Field",
  item: 577,
  table: "",
  longName: "HL7Probability",
  length: 5
});

/**
 * OBX.10 - Nature of Abnormal Test
 */
export const OBX_10 = datatypes.ID.register(hl7v2Metadata, {
  title: "OBX.10",
  version: "2.5",
  description: "Nature of Abnormal Test",
  type: "Field",
  item: 578,
  table: "HL70080",
  longName: "HL7Nature of Abnormal Test",
  length: 2
});

/**
 * OBX.11 - Observation Result Status
 */
export const OBX_11 = datatypes.ID.register(hl7v2Metadata, {
  title: "OBX.11",
  version: "2.5",
  description: "Observation Result Status",
  type: "Field",
  item: 579,
  table: "HL70085",
  longName: "HL7Observation Result Status",
  length: 1
});

/**
 * OBX.12 - Effective Date of Reference Range
 */
export const OBX_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.12",
  version: "2.5",
  description: "Effective Date of Reference Range",
  type: "Field",
  item: 580,
  table: "",
  longName: "HL7Effective Date of Reference Range",
  length: 26
});

/**
 * OBX.13 - User Defined Access Checks
 */
export const OBX_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.13",
  version: "2.5",
  description: "User Defined Access Checks",
  type: "Field",
  item: 581,
  table: "",
  longName: "HL7User Defined Access Checks",
  length: 20
});

/**
 * OBX.14 - Date/Time of the Observation
 */
export const OBX_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.14",
  version: "2.5",
  description: "Date/Time of the Observation",
  type: "Field",
  item: 582,
  table: "",
  longName: "HL7Date/Time of the Observation",
  length: 26
});

/**
 * OBX.15 - Producer's ID
 */
export const OBX_15 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.15",
  version: "2.5",
  description: "Producer's ID",
  type: "Field",
  item: 583,
  table: "",
  longName: "HL7Producer's ID",
  length: 250
});

/**
 * OBX.16 - Responsible Observer
 */
export const OBX_16 = datatypes.XCN.register(hl7v2Metadata, {
  title: "OBX.16",
  version: "2.5",
  description: "Responsible Observer",
  type: "Field",
  item: 584,
  table: "",
  longName: "HL7Responsible Observer",
  length: 250
});

/**
 * OBX.17 - Observation Method
 */
export const OBX_17 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.17",
  version: "2.5",
  description: "Observation Method",
  type: "Field",
  item: 936,
  table: "",
  longName: "HL7Observation Method",
  length: 250
});

/**
 * OBX.18 - Equipment Instance Identifier
 */
export const OBX_18 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.18",
  version: "2.5",
  description: "Equipment Instance Identifier",
  type: "Field",
  item: 1479,
  table: "",
  longName: "HL7Equipment Instance Identifier",
  length: 22
});

/**
 * OBX.19 - Date/Time of the Analysis
 */
export const OBX_19 = datatypes.ST.register(hl7v2Metadata, {
  title: "OBX.19",
  version: "2.5",
  description: "Date/Time of the Analysis",
  type: "Field",
  item: 1480,
  table: "",
  longName: "HL7Date/Time of the Analysis",
  length: 26
});
