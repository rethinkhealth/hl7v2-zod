import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 RF1 Fields
 * 
 * HL7 v2.8 RF1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RF1.1 - Referral Status
 */
export const RF1_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RF1.1",
  "version": "2.8",
  "description": "Referral Status",
  "type": "Field",
  "item": 1137,
  "table": "HL70283",
  "longName": "HL7Referral Status"
});

/**
 * RF1.2 - Referral Priority
 */
export const RF1_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RF1.2",
  "version": "2.8",
  "description": "Referral Priority",
  "type": "Field",
  "item": 1138,
  "table": "HL70280",
  "longName": "HL7Referral Priority"
});

/**
 * RF1.3 - Referral Type
 */
export const RF1_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RF1.3",
  "version": "2.8",
  "description": "Referral Type",
  "type": "Field",
  "item": 1139,
  "table": "HL70281",
  "longName": "HL7Referral Type"
});

/**
 * RF1.4 - Referral Disposition
 */
export const RF1_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RF1.4",
  "version": "2.8",
  "description": "Referral Disposition",
  "type": "Field",
  "item": 1140,
  "table": "HL70282",
  "longName": "HL7Referral Disposition"
});

/**
 * RF1.5 - Referral Category
 */
export const RF1_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RF1.5",
  "version": "2.8",
  "description": "Referral Category",
  "type": "Field",
  "item": 1141,
  "table": "HL70284",
  "longName": "HL7Referral Category"
});

/**
 * RF1.6 - Originating Referral Identifier
 */
export const RF1_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RF1.6",
  "version": "2.8",
  "description": "Originating Referral Identifier",
  "type": "Field",
  "item": 1142,
  "table": "",
  "longName": "HL7Originating Referral Identifier"
});

/**
 * RF1.7 - Effective Date
 */
export const RF1_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RF1.7",
  "version": "2.8",
  "description": "Effective Date",
  "type": "Field",
  "item": 1143,
  "table": "",
  "longName": "HL7Effective Date"
});

/**
 * RF1.8 - Expiration Date
 */
export const RF1_8 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RF1.8",
  "version": "2.8",
  "description": "Expiration Date",
  "type": "Field",
  "item": 1144,
  "table": "",
  "longName": "HL7Expiration Date"
});

/**
 * RF1.9 - Process Date
 */
export const RF1_9 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RF1.9",
  "version": "2.8",
  "description": "Process Date",
  "type": "Field",
  "item": 1145,
  "table": "",
  "longName": "HL7Process Date"
});

/**
 * RF1.10 - Referral Reason
 */
export const RF1_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RF1.10",
  "version": "2.8",
  "description": "Referral Reason",
  "type": "Field",
  "item": 1228,
  "table": "HL70336",
  "longName": "HL7Referral Reason"
});

/**
 * RF1.11 - External Referral Identifier
 */
export const RF1_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RF1.11",
  "version": "2.8",
  "description": "External Referral Identifier",
  "type": "Field",
  "item": 1300,
  "table": "",
  "longName": "HL7External Referral Identifier"
});

/**
 * RF1.12 - Referral Documentation Completion Status
 */
export const RF1_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RF1.12",
  "version": "2.8",
  "description": "Referral Documentation Completion Status",
  "type": "Field",
  "item": 2262,
  "table": "HL70865",
  "longName": "HL7Referral Documentation Completion Status"
});

/**
 * RF1.13 - Planned Treatment Stop Date
 */
export const RF1_13 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RF1.13",
  "version": "2.8",
  "description": "Planned Treatment Stop Date",
  "type": "Field",
  "item": 3400,
  "table": "",
  "longName": "HL7Planned Treatment Stop Date"
});

/**
 * RF1.14 - Referral Reason Text
 */
export const RF1_14 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RF1.14",
  "version": "2.8",
  "description": "Referral Reason Text",
  "type": "Field",
  "item": 3401,
  "table": "",
  "longName": "HL7Referral Reason Text",
  "length": 60
});

/**
 * RF1.15 - Number of Authorized Treatments/Units
 */
export const RF1_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RF1.15",
  "version": "2.8",
  "description": "Number of Authorized Treatments/Units",
  "type": "Field",
  "item": 3402,
  "table": "",
  "longName": "HL7Number of Authorized Treatments/Units"
});

/**
 * RF1.16 - Number of Used Treatments/Units
 */
export const RF1_16 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RF1.16",
  "version": "2.8",
  "description": "Number of Used Treatments/Units",
  "type": "Field",
  "item": 3403,
  "table": "",
  "longName": "HL7Number of Used Treatments/Units"
});

/**
 * RF1.17 - Number of Schedule Treatments/Units
 */
export const RF1_17 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RF1.17",
  "version": "2.8",
  "description": "Number of Schedule Treatments/Units",
  "type": "Field",
  "item": 3404,
  "table": "",
  "longName": "HL7Number of Schedule Treatments/Units"
});

/**
 * RF1.18 - Remaining Benefit Amount
 */
export const RF1_18 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RF1.18",
  "version": "2.8",
  "description": "Remaining Benefit Amount",
  "type": "Field",
  "item": 3405,
  "table": "",
  "longName": "HL7Remaining Benefit Amount"
});

/**
 * RF1.19 - Authorized Provider
 */
export const RF1_19 = datatypes.XON.register(hl7v2Metadata, {
  "title": "RF1.19",
  "version": "2.8",
  "description": "Authorized Provider",
  "type": "Field",
  "item": 3406,
  "table": "",
  "longName": "HL7Authorized Provider",
  "length": 250
});

/**
 * RF1.20 - Authorized Health Professional
 */
export const RF1_20 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "RF1.20",
  "version": "2.8",
  "description": "Authorized Health Professional",
  "type": "Field",
  "item": 3407,
  "table": "",
  "longName": "HL7Authorized Health Professional",
  "length": 250
});

/**
 * RF1.21 - Source Text
 */
export const RF1_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RF1.21",
  "version": "2.8",
  "description": "Source Text",
  "type": "Field",
  "item": 3408,
  "table": "",
  "longName": "HL7Source Text",
  "length": 60
});

/**
 * RF1.22 - Source Date
 */
export const RF1_22 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "RF1.22",
  "version": "2.8",
  "description": "Source Date",
  "type": "Field",
  "item": 3409,
  "table": "",
  "longName": "HL7Source Date"
});

/**
 * RF1.23 - Source Phone
 */
export const RF1_23 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "RF1.23",
  "version": "2.8",
  "description": "Source Phone",
  "type": "Field",
  "item": 3410,
  "table": "",
  "longName": "HL7Source Phone",
  "length": 250
});

/**
 * RF1.24 - Comment
 */
export const RF1_24 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RF1.24",
  "version": "2.8",
  "description": "Comment",
  "type": "Field",
  "item": 3411,
  "table": "",
  "longName": "HL7Comment",
  "length": 250
});

/**
 * RF1.25 - Action Code
 */
export const RF1_25 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RF1.25",
  "version": "2.8",
  "description": "Action Code",
  "type": "Field",
  "item": 3412,
  "table": "HL70206",
  "longName": "HL7Action Code"
});
