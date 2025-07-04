import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 TXA Fields
 * 
 * HL7 v2.5 TXA field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TXA.1 - Set ID - TXA
 */
export const TXA_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "TXA.1",
  "version": "2.5",
  "description": "Set ID - TXA",
  "type": "Field",
  "item": 914,
  "table": "",
  "longName": "HL7Set ID - TXA",
  "length": 4
});

/**
 * TXA.2 - Document Type
 */
export const TXA_2 = datatypes.IS.register(hl7v2Metadata, {
  "title": "TXA.2",
  "version": "2.5",
  "description": "Document Type",
  "type": "Field",
  "item": 915,
  "table": "HL70270",
  "longName": "HL7Document Type",
  "length": 30
});

/**
 * TXA.3 - Document Content Presentation
 */
export const TXA_3 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TXA.3",
  "version": "2.5",
  "description": "Document Content Presentation",
  "type": "Field",
  "item": 916,
  "table": "HL70191",
  "longName": "HL7Document Content Presentation",
  "length": 2
});

/**
 * TXA.4 - Activity Date/Time
 */
export const TXA_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.4",
  "version": "2.5",
  "description": "Activity Date/Time",
  "type": "Field",
  "item": 917,
  "table": "",
  "longName": "HL7Activity Date/Time",
  "length": 26
});

/**
 * TXA.5 - Primary Activity Provider Code/Name
 */
export const TXA_5 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "TXA.5",
  "version": "2.5",
  "description": "Primary Activity Provider Code/Name",
  "type": "Field",
  "item": 918,
  "table": "",
  "longName": "HL7Primary Activity Provider Code/Name",
  "length": 250
});

/**
 * TXA.6 - Origination Date/Time
 */
export const TXA_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.6",
  "version": "2.5",
  "description": "Origination Date/Time",
  "type": "Field",
  "item": 919,
  "table": "",
  "longName": "HL7Origination Date/Time",
  "length": 26
});

/**
 * TXA.7 - Transcription Date/Time
 */
export const TXA_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.7",
  "version": "2.5",
  "description": "Transcription Date/Time",
  "type": "Field",
  "item": 920,
  "table": "",
  "longName": "HL7Transcription Date/Time",
  "length": 26
});

/**
 * TXA.8 - Edit Date/Time
 */
export const TXA_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.8",
  "version": "2.5",
  "description": "Edit Date/Time",
  "type": "Field",
  "item": 921,
  "table": "",
  "longName": "HL7Edit Date/Time",
  "length": 26
});

/**
 * TXA.9 - Originator Code/Name
 */
export const TXA_9 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "TXA.9",
  "version": "2.5",
  "description": "Originator Code/Name",
  "type": "Field",
  "item": 922,
  "table": "",
  "longName": "HL7Originator Code/Name",
  "length": 250
});

/**
 * TXA.10 - Assigned Document Authenticator
 */
export const TXA_10 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "TXA.10",
  "version": "2.5",
  "description": "Assigned Document Authenticator",
  "type": "Field",
  "item": 923,
  "table": "",
  "longName": "HL7Assigned Document Authenticator",
  "length": 250
});

/**
 * TXA.11 - Transcriptionist Code/Name
 */
export const TXA_11 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "TXA.11",
  "version": "2.5",
  "description": "Transcriptionist Code/Name",
  "type": "Field",
  "item": 924,
  "table": "",
  "longName": "HL7Transcriptionist Code/Name",
  "length": 250
});

/**
 * TXA.12 - Unique Document Number
 */
export const TXA_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.12",
  "version": "2.5",
  "description": "Unique Document Number",
  "type": "Field",
  "item": 925,
  "table": "",
  "longName": "HL7Unique Document Number",
  "length": 30
});

/**
 * TXA.13 - Parent Document Number
 */
export const TXA_13 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.13",
  "version": "2.5",
  "description": "Parent Document Number",
  "type": "Field",
  "item": 926,
  "table": "",
  "longName": "HL7Parent Document Number",
  "length": 30
});

/**
 * TXA.14 - Placer Order Number
 */
export const TXA_14 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.14",
  "version": "2.5",
  "description": "Placer Order Number",
  "type": "Field",
  "item": 216,
  "table": "",
  "longName": "HL7Placer Order Number",
  "length": 22
});

/**
 * TXA.15 - Filler Order Number
 */
export const TXA_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.15",
  "version": "2.5",
  "description": "Filler Order Number",
  "type": "Field",
  "item": 217,
  "table": "",
  "longName": "HL7Filler Order Number",
  "length": 22
});

/**
 * TXA.16 - Unique Document File Name
 */
export const TXA_16 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.16",
  "version": "2.5",
  "description": "Unique Document File Name",
  "type": "Field",
  "item": 927,
  "table": "",
  "longName": "HL7Unique Document File Name",
  "length": 30
});

/**
 * TXA.17 - Document Completion Status
 */
export const TXA_17 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TXA.17",
  "version": "2.5",
  "description": "Document Completion Status",
  "type": "Field",
  "item": 928,
  "table": "HL70271",
  "longName": "HL7Document Completion Status",
  "length": 2
});

/**
 * TXA.18 - Document Confidentiality Status
 */
export const TXA_18 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TXA.18",
  "version": "2.5",
  "description": "Document Confidentiality Status",
  "type": "Field",
  "item": 929,
  "table": "HL70272",
  "longName": "HL7Document Confidentiality Status",
  "length": 2
});

/**
 * TXA.19 - Document Availability Status
 */
export const TXA_19 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TXA.19",
  "version": "2.5",
  "description": "Document Availability Status",
  "type": "Field",
  "item": 930,
  "table": "HL70273",
  "longName": "HL7Document Availability Status",
  "length": 2
});

/**
 * TXA.20 - Document Storage Status
 */
export const TXA_20 = datatypes.ID.register(hl7v2Metadata, {
  "title": "TXA.20",
  "version": "2.5",
  "description": "Document Storage Status",
  "type": "Field",
  "item": 932,
  "table": "HL70275",
  "longName": "HL7Document Storage Status",
  "length": 2
});

/**
 * TXA.21 - Document Change Reason
 */
export const TXA_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "TXA.21",
  "version": "2.5",
  "description": "Document Change Reason",
  "type": "Field",
  "item": 933,
  "table": "",
  "longName": "HL7Document Change Reason",
  "length": 30
});

/**
 * TXA.22 - Authentication Person, Time Stamp
 */
export const TXA_22 = datatypes.PPN.register(hl7v2Metadata, {
  "title": "TXA.22",
  "version": "2.5",
  "description": "Authentication Person, Time Stamp",
  "type": "Field",
  "item": 934,
  "table": "",
  "longName": "HL7Authentication Person, Time Stamp",
  "length": 250
});

/**
 * TXA.23 - Distributed Copies (Code and Name of Recipients)
 */
export const TXA_23 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "TXA.23",
  "version": "2.5",
  "description": "Distributed Copies (Code and Name of Recipients)",
  "type": "Field",
  "item": 935,
  "table": "",
  "longName": "HL7Distributed Copies (Code and Name of Recipients)",
  "length": 250
});
