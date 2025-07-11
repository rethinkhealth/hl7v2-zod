import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 FHS Fields
 *
 * HL7 v2.8 FHS field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FHS.1 - File Field Separator
 */
export const FHS_1 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.1",
  version: "2.8",
  description: "File Field Separator",
  type: "Field",
  item: 67,
  table: "",
  longName: "HL7File Field Separator",
  length: 1
});

/**
 * FHS.2 - File Encoding Characters
 */
export const FHS_2 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.2",
  version: "2.8",
  description: "File Encoding Characters",
  type: "Field",
  item: 68,
  table: "",
  longName: "HL7File Encoding Characters",
  length: 5
});

/**
 * FHS.3 - File Sending Application
 */
export const FHS_3 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.3",
  version: "2.8",
  description: "File Sending Application",
  type: "Field",
  item: 69,
  table: "",
  longName: "HL7File Sending Application"
});

/**
 * FHS.4 - File Sending Facility
 */
export const FHS_4 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.4",
  version: "2.8",
  description: "File Sending Facility",
  type: "Field",
  item: 70,
  table: "",
  longName: "HL7File Sending Facility"
});

/**
 * FHS.5 - File Receiving Application
 */
export const FHS_5 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.5",
  version: "2.8",
  description: "File Receiving Application",
  type: "Field",
  item: 71,
  table: "",
  longName: "HL7File Receiving Application"
});

/**
 * FHS.6 - File Receiving Facility
 */
export const FHS_6 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.6",
  version: "2.8",
  description: "File Receiving Facility",
  type: "Field",
  item: 72,
  table: "",
  longName: "HL7File Receiving Facility"
});

/**
 * FHS.7 - File Creation Date/Time
 */
export const FHS_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: "FHS.7",
  version: "2.8",
  description: "File Creation Date/Time",
  type: "Field",
  item: 73,
  table: "",
  longName: "HL7File Creation Date/Time"
});

/**
 * FHS.8 - File Security
 */
export const FHS_8 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.8",
  version: "2.8",
  description: "File Security",
  type: "Field",
  item: 74,
  table: "",
  longName: "HL7File Security"
});

/**
 * FHS.9 - File Name/ID
 */
export const FHS_9 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.9",
  version: "2.8",
  description: "File Name/ID",
  type: "Field",
  item: 75,
  table: "",
  longName: "HL7File Name/ID"
});

/**
 * FHS.10 - File Header Comment
 */
export const FHS_10 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.10",
  version: "2.8",
  description: "File Header Comment",
  type: "Field",
  item: 76,
  table: "",
  longName: "HL7File Header Comment"
});

/**
 * FHS.11 - File Control ID
 */
export const FHS_11 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.11",
  version: "2.8",
  description: "File Control ID",
  type: "Field",
  item: 77,
  table: "",
  longName: "HL7File Control ID"
});

/**
 * FHS.12 - Reference File Control ID
 */
export const FHS_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.12",
  version: "2.8",
  description: "Reference File Control ID",
  type: "Field",
  item: 78,
  table: "",
  longName: "HL7Reference File Control ID"
});

/**
 * FHS.13 - File Sending Network Address
 */
export const FHS_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.13",
  version: "2.8",
  description: "File Sending Network Address",
  type: "Field",
  item: 2269,
  table: "",
  longName: "HL7File Sending Network Address"
});

/**
 * FHS.14 - File Receiving Network Address
 */
export const FHS_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "FHS.14",
  version: "2.8",
  description: "File Receiving Network Address",
  type: "Field",
  item: 2270,
  table: "",
  longName: "HL7File Receiving Network Address"
});
