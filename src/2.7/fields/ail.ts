import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.7 AIL Fields
 *
 * HL7 v2.7 AIL field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AIL.1 - Set ID - AIL
 */
export const AIL_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "AIL.1",
  version: "2.7",
  description: "Set ID - AIL",
  type: "Field",
  item: 902,
  table: "",
  longName: "HL7Set ID - AIL",
  length: 4
});

/**
 * AIL.2 - Segment Action Code
 */
export const AIL_2 = datatypes.ID.register(hl7v2Metadata, {
  title: "AIL.2",
  version: "2.7",
  description: "Segment Action Code",
  type: "Field",
  item: 763,
  table: "HL70206",
  longName: "HL7Segment Action Code",
  length: 1
});

/**
 * AIL.3 - Location Resource ID
 */
export const AIL_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "AIL.3",
  version: "2.7",
  description: "Location Resource ID",
  type: "Field",
  item: 903,
  table: "",
  longName: "HL7Location Resource ID"
});

/**
 * AIL.4 - Location Type - AIL
 */
export const AIL_4 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AIL.4",
  version: "2.7",
  description: "Location Type - AIL",
  type: "Field",
  item: 904,
  table: "HL70305",
  longName: "HL7Location Type - AIL"
});

/**
 * AIL.5 - Location Group
 */
export const AIL_5 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AIL.5",
  version: "2.7",
  description: "Location Group",
  type: "Field",
  item: 905,
  table: "",
  longName: "HL7Location Group"
});

/**
 * AIL.6 - Start Date/Time
 */
export const AIL_6 = datatypes.DTM.register(hl7v2Metadata, {
  title: "AIL.6",
  version: "2.7",
  description: "Start Date/Time",
  type: "Field",
  item: 1202,
  table: "",
  longName: "HL7Start Date/Time"
});

/**
 * AIL.7 - Start Date/Time Offset
 */
export const AIL_7 = datatypes.NM.register(hl7v2Metadata, {
  title: "AIL.7",
  version: "2.7",
  description: "Start Date/Time Offset",
  type: "Field",
  item: 891,
  table: "",
  longName: "HL7Start Date/Time Offset"
});

/**
 * AIL.8 - Start Date/Time Offset Units
 */
export const AIL_8 = datatypes.CNE.register(hl7v2Metadata, {
  title: "AIL.8",
  version: "2.7",
  description: "Start Date/Time Offset Units",
  type: "Field",
  item: 892,
  table: "",
  longName: "HL7Start Date/Time Offset Units"
});

/**
 * AIL.9 - Duration
 */
export const AIL_9 = datatypes.NM.register(hl7v2Metadata, {
  title: "AIL.9",
  version: "2.7",
  description: "Duration",
  type: "Field",
  item: 893,
  table: "",
  longName: "HL7Duration"
});

/**
 * AIL.10 - Duration Units
 */
export const AIL_10 = datatypes.CNE.register(hl7v2Metadata, {
  title: "AIL.10",
  version: "2.7",
  description: "Duration Units",
  type: "Field",
  item: 894,
  table: "",
  longName: "HL7Duration Units"
});

/**
 * AIL.11 - Allow Substitution Code
 */
export const AIL_11 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AIL.11",
  version: "2.7",
  description: "Allow Substitution Code",
  type: "Field",
  item: 895,
  table: "HL70279",
  longName: "HL7Allow Substitution Code"
});

/**
 * AIL.12 - Filler Status Code
 */
export const AIL_12 = datatypes.CWE.register(hl7v2Metadata, {
  title: "AIL.12",
  version: "2.7",
  description: "Filler Status Code",
  type: "Field",
  item: 889,
  table: "HL70278",
  longName: "HL7Filler Status Code"
});
