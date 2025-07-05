import hl7v2Metadata from "../registry";
import * as datatypes from "../datatypes";

/**
 * HL7 v2.8 TXA Fields
 *
 * HL7 v2.8 TXA field definitions
 * Each field consists of specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TXA.1 - Set ID- TXA
 */
export const TXA_1 = datatypes.SI.register(hl7v2Metadata, {
  title: "TXA.1",
  version: "2.8",
  description: "Set ID- TXA",
  type: "Field",
  item: 914,
  table: "",
  longName: "HL7Set ID- TXA",
  length: 4
});

/**
 * TXA.2 - Document Type
 */
export const TXA_2 = datatypes.CWE.register(hl7v2Metadata, {
  title: "TXA.2",
  version: "2.8",
  description: "Document Type",
  type: "Field",
  item: 915,
  table: "HL70270",
  longName: "HL7Document Type"
});

/**
 * TXA.3 - Document Content Presentation
 */
export const TXA_3 = datatypes.ID.register(hl7v2Metadata, {
  title: "TXA.3",
  version: "2.8",
  description: "Document Content Presentation",
  type: "Field",
  item: 916,
  table: "HL70191",
  longName: "HL7Document Content Presentation"
});

/**
 * TXA.4 - Activity Date/Time
 */
export const TXA_4 = datatypes.DTM.register(hl7v2Metadata, {
  title: "TXA.4",
  version: "2.8",
  description: "Activity Date/Time",
  type: "Field",
  item: 917,
  table: "",
  longName: "HL7Activity Date/Time"
});

/**
 * TXA.5 - Primary Activity Provider Code/Name
 */
export const TXA_5 = datatypes.XCN.register(hl7v2Metadata, {
  title: "TXA.5",
  version: "2.8",
  description: "Primary Activity Provider Code/Name",
  type: "Field",
  item: 918,
  table: "",
  longName: "HL7Primary Activity Provider Code/Name"
});

/**
 * TXA.6 - Origination Date/Time
 */
export const TXA_6 = datatypes.DTM.register(hl7v2Metadata, {
  title: "TXA.6",
  version: "2.8",
  description: "Origination Date/Time",
  type: "Field",
  item: 919,
  table: "",
  longName: "HL7Origination Date/Time"
});

/**
 * TXA.7 - Transcription Date/Time
 */
export const TXA_7 = datatypes.DTM.register(hl7v2Metadata, {
  title: "TXA.7",
  version: "2.8",
  description: "Transcription Date/Time",
  type: "Field",
  item: 920,
  table: "",
  longName: "HL7Transcription Date/Time"
});

/**
 * TXA.8 - Edit Date/Time
 */
export const TXA_8 = datatypes.DTM.register(hl7v2Metadata, {
  title: "TXA.8",
  version: "2.8",
  description: "Edit Date/Time",
  type: "Field",
  item: 921,
  table: "",
  longName: "HL7Edit Date/Time"
});

/**
 * TXA.9 - Originator Code/Name
 */
export const TXA_9 = datatypes.XCN.register(hl7v2Metadata, {
  title: "TXA.9",
  version: "2.8",
  description: "Originator Code/Name",
  type: "Field",
  item: 922,
  table: "",
  longName: "HL7Originator Code/Name"
});

/**
 * TXA.10 - Assigned Document Authenticator
 */
export const TXA_10 = datatypes.XCN.register(hl7v2Metadata, {
  title: "TXA.10",
  version: "2.8",
  description: "Assigned Document Authenticator",
  type: "Field",
  item: 923,
  table: "",
  longName: "HL7Assigned Document Authenticator"
});

/**
 * TXA.11 - Transcriptionist Code/Name
 */
export const TXA_11 = datatypes.XCN.register(hl7v2Metadata, {
  title: "TXA.11",
  version: "2.8",
  description: "Transcriptionist Code/Name",
  type: "Field",
  item: 924,
  table: "",
  longName: "HL7Transcriptionist Code/Name"
});

/**
 * TXA.12 - Unique Document Number
 */
export const TXA_12 = datatypes.ST.register(hl7v2Metadata, {
  title: "TXA.12",
  version: "2.8",
  description: "Unique Document Number",
  type: "Field",
  item: 925,
  table: "",
  longName: "HL7Unique Document Number"
});

/**
 * TXA.13 - Parent Document Number
 */
export const TXA_13 = datatypes.ST.register(hl7v2Metadata, {
  title: "TXA.13",
  version: "2.8",
  description: "Parent Document Number",
  type: "Field",
  item: 926,
  table: "",
  longName: "HL7Parent Document Number"
});

/**
 * TXA.14 - Placer Order Number
 */
export const TXA_14 = datatypes.ST.register(hl7v2Metadata, {
  title: "TXA.14",
  version: "2.8",
  description: "Placer Order Number",
  type: "Field",
  item: 216,
  table: "",
  longName: "HL7Placer Order Number"
});

/**
 * TXA.15 - Filler Order Number
 */
export const TXA_15 = datatypes.ST.register(hl7v2Metadata, {
  title: "TXA.15",
  version: "2.8",
  description: "Filler Order Number",
  type: "Field",
  item: 217,
  table: "",
  longName: "HL7Filler Order Number"
});

/**
 * TXA.16 - Unique Document File Name
 */
export const TXA_16 = datatypes.ST.register(hl7v2Metadata, {
  title: "TXA.16",
  version: "2.8",
  description: "Unique Document File Name",
  type: "Field",
  item: 927,
  table: "",
  longName: "HL7Unique Document File Name"
});

/**
 * TXA.17 - Document Completion Status
 */
export const TXA_17 = datatypes.ID.register(hl7v2Metadata, {
  title: "TXA.17",
  version: "2.8",
  description: "Document Completion Status",
  type: "Field",
  item: 928,
  table: "HL70271",
  longName: "HL7Document Completion Status",
  length: 2
});

/**
 * TXA.18 - Document Confidentiality Status
 */
export const TXA_18 = datatypes.ID.register(hl7v2Metadata, {
  title: "TXA.18",
  version: "2.8",
  description: "Document Confidentiality Status",
  type: "Field",
  item: 929,
  table: "HL70272",
  longName: "HL7Document Confidentiality Status",
  length: 1
});

/**
 * TXA.19 - Document Availability Status
 */
export const TXA_19 = datatypes.ID.register(hl7v2Metadata, {
  title: "TXA.19",
  version: "2.8",
  description: "Document Availability Status",
  type: "Field",
  item: 930,
  table: "HL70273",
  longName: "HL7Document Availability Status",
  length: 2
});

/**
 * TXA.20 - Document Storage Status
 */
export const TXA_20 = datatypes.ID.register(hl7v2Metadata, {
  title: "TXA.20",
  version: "2.8",
  description: "Document Storage Status",
  type: "Field",
  item: 932,
  table: "HL70275",
  longName: "HL7Document Storage Status",
  length: 2
});

/**
 * TXA.21 - Document Change Reason
 */
export const TXA_21 = datatypes.ST.register(hl7v2Metadata, {
  title: "TXA.21",
  version: "2.8",
  description: "Document Change Reason",
  type: "Field",
  item: 933,
  table: "",
  longName: "HL7Document Change Reason"
});

/**
 * TXA.22 - Authentication Person, Time Stamp (set)
 */
export const TXA_22 = datatypes.PPN.register(hl7v2Metadata, {
  title: "TXA.22",
  version: "2.8",
  description: "Authentication Person, Time Stamp (set)",
  type: "Field",
  item: 934,
  table: "",
  longName: "HL7Authentication Person, Time Stamp (set)"
});

/**
 * TXA.23 - Distributed Copies (Code and Name of Recipient(s) )
 */
export const TXA_23 = datatypes.XCN.register(hl7v2Metadata, {
  title: "TXA.23",
  version: "2.8",
  description: "Distributed Copies (Code and Name of Recipient(s) )",
  type: "Field",
  item: 935,
  table: "",
  longName: "HL7Distributed Copies (Code and Name of Recipient(s) )"
});

/**
 * TXA.24 - Folder Assignment
 */
export const TXA_24 = datatypes.CWE.register(hl7v2Metadata, {
  title: "TXA.24",
  version: "2.8",
  description: "Folder Assignment",
  type: "Field",
  item: 2378,
  table: "",
  longName: "HL7Folder Assignment"
});

/**
 * TXA.25 - Document Title
 */
export const TXA_25 = datatypes.ST.register(hl7v2Metadata, {
  title: "TXA.25",
  version: "2.8",
  description: "Document Title",
  type: "Field",
  item: 3301,
  table: "",
  longName: "HL7Document Title"
});

/**
 * TXA.26 - Agreed Due Date/Time
 */
export const TXA_26 = datatypes.DTM.register(hl7v2Metadata, {
  title: "TXA.26",
  version: "2.8",
  description: "Agreed Due Date/Time",
  type: "Field",
  item: 3302,
  table: "",
  longName: "HL7Agreed Due Date/Time"
});
