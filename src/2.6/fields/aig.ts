import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.6 AIG Fields
 *
 * HL7 v2.6 AIG field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AIG.1 - Set ID - AIG
 */
export const AIG_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "AIG.1",
  version: "2.6",
  description: "Set ID - AIG",
  type: "Field",
  item: 896,
  table: "",
  longName: "HL7Set ID - AIG",
  length: 4
});

/**
 * AIG.2 - Segment Action Code
 */
export const AIG_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "AIG.2",
  version: "2.6",
  description: "Segment Action Code",
  type: "Field",
  item: 763,
  table: "HL70206",
  longName: "HL7Segment Action Code",
  length: 3
});

/**
 * AIG.3 - Resource ID
 */
export const AIG_3 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AIG.3",
  version: "2.6",
  description: "Resource ID",
  type: "Field",
  item: 897,
  table: "",
  longName: "HL7Resource ID",
  length: 250
});

/**
 * AIG.4 - Resource Type
 */
export const AIG_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AIG.4",
  version: "2.6",
  description: "Resource Type",
  type: "Field",
  item: 898,
  table: "",
  longName: "HL7Resource Type",
  length: 250
});

/**
 * AIG.5 - Resource Group
 */
export const AIG_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AIG.5",
  version: "2.6",
  description: "Resource Group",
  type: "Field",
  item: 899,
  table: "",
  longName: "HL7Resource Group",
  length: 250
});

/**
 * AIG.6 - Resource Quantity
 */
export const AIG_6 = datatypes.NM.register(hl7v2Metadata, {
  title: "AIG.6",
  version: "2.6",
  description: "Resource Quantity",
  type: "Field",
  item: 900,
  table: "",
  longName: "HL7Resource Quantity",
  length: 5
});

/**
 * AIG.7 - Resource Quantity Units
 */
export const AIG_7 = datatypes.CNE.register(hl7v2Metadata, {
  title: "AIG.7",
  version: "2.6",
  description: "Resource Quantity Units",
  type: "Field",
  item: 901,
  table: "",
  longName: "HL7Resource Quantity Units",
  length: 250
});

/**
 * AIG.8 - Start Date/Time
 */
export const AIG_8 = datatypes.DTM.register(hl7v2Metadata, {
  title: "AIG.8",
  version: "2.6",
  description: "Start Date/Time",
  type: "Field",
  item: 1202,
  table: "",
  longName: "HL7Start Date/Time",
  length: 24
});

/**
 * AIG.9 - Start Date/Time Offset
 */
export const AIG_9 = datatypes.NM.register(hl7v2Metadata, {
  title: "AIG.9",
  version: "2.6",
  description: "Start Date/Time Offset",
  type: "Field",
  item: 891,
  table: "",
  longName: "HL7Start Date/Time Offset",
  length: 20
});

/**
 * AIG.10 - Start Date/Time Offset Units
 */
export const AIG_10 = datatypes.CNE.register(hl7v2Metadata, {
  title: "AIG.10",
  version: "2.6",
  description: "Start Date/Time Offset Units",
  type: "Field",
  item: 892,
  table: "",
  longName: "HL7Start Date/Time Offset Units",
  length: 250
});

/**
 * AIG.11 - Duration
 */
export const AIG_11 = datatypes.NM.register(hl7v2Metadata, {
  title: "AIG.11",
  version: "2.6",
  description: "Duration",
  type: "Field",
  item: 893,
  table: "",
  longName: "HL7Duration",
  length: 20
});

/**
 * AIG.12 - Duration Units
 */
export const AIG_12 = datatypes.CNE.register(hl7v2Metadata, {
  title: "AIG.12",
  version: "2.6",
  description: "Duration Units",
  type: "Field",
  item: 894,
  table: "",
  longName: "HL7Duration Units",
  length: 250
});

/**
 * AIG.13 - Allow Substitution Code
 */
export const AIG_13 = datatypes.IS.register(hl7v2Metadata, {
  title: "AIG.13",
  version: "2.6",
  description: "Allow Substitution Code",
  type: "Field",
  item: 895,
  table: "HL70279",
  longName: "HL7Allow Substitution Code",
  length: 10
});

/**
 * AIG.14 - Filler Status Code
 */
export const AIG_14 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AIG.14",
  version: "2.6",
  description: "Filler Status Code",
  type: "Field",
  item: 889,
  table: "HL70278",
  longName: "HL7Filler Status Code",
  length: 250
});
