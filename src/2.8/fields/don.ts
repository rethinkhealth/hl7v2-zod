import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 DON Fields
 * 
 * HL7 v2.8 DON field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DON.1 - Donation Identification Number - DIN
 */
export const DON_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DON.1",
  "version": "2.8",
  "description": "Donation Identification Number - DIN",
  "type": "Field",
  "item": 3340,
  "table": "",
  "longName": "HL7Donation Identification Number - DIN"
});

/**
 * DON.2 - Donation Type
 */
export const DON_2 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.2",
  "version": "2.8",
  "description": "Donation Type",
  "type": "Field",
  "item": 3341,
  "table": "",
  "longName": "HL7Donation Type"
});

/**
 * DON.3 - Phlebotomy Start Date/Time
 */
export const DON_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DON.3",
  "version": "2.8",
  "description": "Phlebotomy Start Date/Time",
  "type": "Field",
  "item": 3342,
  "table": "",
  "longName": "HL7Phlebotomy Start Date/Time"
});

/**
 * DON.4 - Phlebotomy End Date/Time
 */
export const DON_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DON.4",
  "version": "2.8",
  "description": "Phlebotomy End Date/Time",
  "type": "Field",
  "item": 3343,
  "table": "",
  "longName": "HL7Phlebotomy End Date/Time"
});

/**
 * DON.5 - Donation Duration
 */
export const DON_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "DON.5",
  "version": "2.8",
  "description": "Donation Duration",
  "type": "Field",
  "item": 3344,
  "table": "",
  "longName": "HL7Donation Duration"
});

/**
 * DON.6 - Donation Duration Units
 */
export const DON_6 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.6",
  "version": "2.8",
  "description": "Donation Duration Units",
  "type": "Field",
  "item": 3345,
  "table": "HL70932",
  "longName": "HL7Donation Duration Units"
});

/**
 * DON.7 - Intended Procedure Type
 */
export const DON_7 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.7",
  "version": "2.8",
  "description": "Intended Procedure Type",
  "type": "Field",
  "item": 3346,
  "table": "HL70933",
  "longName": "HL7Intended Procedure Type"
});

/**
 * DON.8 - Actual Procedure Type
 */
export const DON_8 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.8",
  "version": "2.8",
  "description": "Actual Procedure Type",
  "type": "Field",
  "item": 3347,
  "table": "HL70933",
  "longName": "HL7Actual Procedure Type"
});

/**
 * DON.9 - Donor Eligibility Flag
 */
export const DON_9 = datatypes.ID.register(hl7v2Metadata, {
  "title": "DON.9",
  "version": "2.8",
  "description": "Donor Eligibility Flag",
  "type": "Field",
  "item": 3348,
  "table": "HL70136",
  "longName": "HL7Donor Eligibility Flag"
});

/**
 * DON.10 - Donor Eligibility Procedure Type
 */
export const DON_10 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.10",
  "version": "2.8",
  "description": "Donor Eligibility Procedure Type",
  "type": "Field",
  "item": 3349,
  "table": "HL70933",
  "longName": "HL7Donor Eligibility Procedure Type"
});

/**
 * DON.11 - Donor Eligibility Date
 */
export const DON_11 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DON.11",
  "version": "2.8",
  "description": "Donor Eligibility Date",
  "type": "Field",
  "item": 3350,
  "table": "",
  "longName": "HL7Donor Eligibility Date"
});

/**
 * DON.12 - Process Interruption
 */
export const DON_12 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.12",
  "version": "2.8",
  "description": "Process Interruption",
  "type": "Field",
  "item": 3351,
  "table": "HL70923",
  "longName": "HL7Process Interruption"
});

/**
 * DON.13 - Process Interruption Reason
 */
export const DON_13 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.13",
  "version": "2.8",
  "description": "Process Interruption Reason",
  "type": "Field",
  "item": 3352,
  "table": "HL70935",
  "longName": "HL7Process Interruption Reason"
});

/**
 * DON.14 - Phlebotomy Issue
 */
export const DON_14 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.14",
  "version": "2.8",
  "description": "Phlebotomy Issue",
  "type": "Field",
  "item": 3353,
  "table": "HL70925",
  "longName": "HL7Phlebotomy Issue"
});

/**
 * DON.15 - Intended Recipient Blood Relative
 */
export const DON_15 = datatypes.ID.register(hl7v2Metadata, {
  "title": "DON.15",
  "version": "2.8",
  "description": "Intended Recipient Blood Relative",
  "type": "Field",
  "item": 3354,
  "table": "HL70136",
  "longName": "HL7Intended Recipient Blood Relative"
});

/**
 * DON.16 - Intended Recipient Name
 */
export const DON_16 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "DON.16",
  "version": "2.8",
  "description": "Intended Recipient Name",
  "type": "Field",
  "item": 3355,
  "table": "",
  "longName": "HL7Intended Recipient Name"
});

/**
 * DON.17 - Intended Recipient DOB
 */
export const DON_17 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DON.17",
  "version": "2.8",
  "description": "Intended Recipient DOB",
  "type": "Field",
  "item": 3356,
  "table": "",
  "longName": "HL7Intended Recipient DOB"
});

/**
 * DON.18 - Intended Recipient Facility
 */
export const DON_18 = datatypes.XON.register(hl7v2Metadata, {
  "title": "DON.18",
  "version": "2.8",
  "description": "Intended Recipient Facility",
  "type": "Field",
  "item": 3357,
  "table": "",
  "longName": "HL7Intended Recipient Facility"
});

/**
 * DON.19 - Intended Recipient Procedure Date
 */
export const DON_19 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DON.19",
  "version": "2.8",
  "description": "Intended Recipient Procedure Date",
  "type": "Field",
  "item": 3358,
  "table": "",
  "longName": "HL7Intended Recipient Procedure Date"
});

/**
 * DON.20 - Intended Recipient Ordering Provider
 */
export const DON_20 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "DON.20",
  "version": "2.8",
  "description": "Intended Recipient Ordering Provider",
  "type": "Field",
  "item": 3359,
  "table": "",
  "longName": "HL7Intended Recipient Ordering Provider"
});

/**
 * DON.21 - Phlebotomy Status
 */
export const DON_21 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.21",
  "version": "2.8",
  "description": "Phlebotomy Status",
  "type": "Field",
  "item": 3360,
  "table": "HL70926",
  "longName": "HL7Phlebotomy Status"
});

/**
 * DON.22 - Arm Stick
 */
export const DON_22 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DON.22",
  "version": "2.8",
  "description": "Arm Stick",
  "type": "Field",
  "item": 3361,
  "table": "HL70927",
  "longName": "HL7Arm Stick"
});

/**
 * DON.23 - Bleed Start Phlebotomist
 */
export const DON_23 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "DON.23",
  "version": "2.8",
  "description": "Bleed Start Phlebotomist",
  "type": "Field",
  "item": 3362,
  "table": "",
  "longName": "HL7Bleed Start Phlebotomist"
});

/**
 * DON.24 - Bleed End Phlebotomist
 */
export const DON_24 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "DON.24",
  "version": "2.8",
  "description": "Bleed End Phlebotomist",
  "type": "Field",
  "item": 3363,
  "table": "",
  "longName": "HL7Bleed End Phlebotomist"
});

/**
 * DON.25 - Aphaeresis Type Machine
 */
export const DON_25 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DON.25",
  "version": "2.8",
  "description": "Aphaeresis Type Machine",
  "type": "Field",
  "item": 3364,
  "table": "",
  "longName": "HL7Aphaeresis Type Machine"
});

/**
 * DON.26 - Aphaeresis Machine Serial Number
 */
export const DON_26 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DON.26",
  "version": "2.8",
  "description": "Aphaeresis Machine Serial Number",
  "type": "Field",
  "item": 3365,
  "table": "",
  "longName": "HL7Aphaeresis Machine Serial Number"
});

/**
 * DON.27 - Donor Reaction
 */
export const DON_27 = datatypes.ID.register(hl7v2Metadata, {
  "title": "DON.27",
  "version": "2.8",
  "description": "Donor Reaction",
  "type": "Field",
  "item": 3366,
  "table": "HL70136",
  "longName": "HL7Donor Reaction"
});

/**
 * DON.28 - Final Review Staff ID
 */
export const DON_28 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "DON.28",
  "version": "2.8",
  "description": "Final Review Staff ID",
  "type": "Field",
  "item": 3367,
  "table": "",
  "longName": "HL7Final Review Staff ID"
});

/**
 * DON.29 - Final Review Date/Time
 */
export const DON_29 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DON.29",
  "version": "2.8",
  "description": "Final Review Date/Time",
  "type": "Field",
  "item": 3368,
  "table": "",
  "longName": "HL7Final Review Date/Time"
});

/**
 * DON.30 - Number of Tubes Collected
 */
export const DON_30 = datatypes.NM.register(hl7v2Metadata, {
  "title": "DON.30",
  "version": "2.8",
  "description": "Number of Tubes Collected",
  "type": "Field",
  "item": 3369,
  "table": "",
  "longName": "HL7Number of Tubes Collected"
});

/**
 * DON.31 - Donation Sample Identifier
 */
export const DON_31 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DON.31",
  "version": "2.8",
  "description": "Donation Sample Identifier",
  "type": "Field",
  "item": 3370,
  "table": "",
  "longName": "HL7Donation Sample Identifier"
});

/**
 * DON.32 - Donation Accept Staff
 */
export const DON_32 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "DON.32",
  "version": "2.8",
  "description": "Donation Accept Staff",
  "type": "Field",
  "item": 3371,
  "table": "",
  "longName": "HL7Donation Accept Staff"
});

/**
 * DON.33 - Donation Material Review Staff
 */
export const DON_33 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "DON.33",
  "version": "2.8",
  "description": "Donation Material Review Staff",
  "type": "Field",
  "item": 3372,
  "table": "",
  "longName": "HL7Donation Material Review Staff"
});
