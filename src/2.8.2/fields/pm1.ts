import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 PM1 Fields
 * 
 * HL7 v2.8 PM1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PM1.1 - Health Plan ID
 */
export const PM1_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PM1.1",
  "version": "2.8",
  "description": "Health Plan ID",
  "type": "Field",
  "item": 368,
  "table": "HL70072",
  "longName": "HL7Health Plan ID"
});

/**
 * PM1.2 - Insurance Company ID
 */
export const PM1_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PM1.2",
  "version": "2.8",
  "description": "Insurance Company ID",
  "type": "Field",
  "item": 428,
  "table": "",
  "longName": "HL7Insurance Company ID"
});

/**
 * PM1.3 - Insurance Company Name
 */
export const PM1_3 = datatypes.XON.register(hl7v2Metadata, {
  "title": "PM1.3",
  "version": "2.8",
  "description": "Insurance Company Name",
  "type": "Field",
  "item": 429,
  "table": "",
  "longName": "HL7Insurance Company Name"
});

/**
 * PM1.4 - Insurance Company Address
 */
export const PM1_4 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "PM1.4",
  "version": "2.8",
  "description": "Insurance Company Address",
  "type": "Field",
  "item": 430,
  "table": "",
  "longName": "HL7Insurance Company Address"
});

/**
 * PM1.5 - Insurance Co Contact Person
 */
export const PM1_5 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "PM1.5",
  "version": "2.8",
  "description": "Insurance Co Contact Person",
  "type": "Field",
  "item": 431,
  "table": "",
  "longName": "HL7Insurance Co Contact Person"
});

/**
 * PM1.6 - Insurance Co Phone Number
 */
export const PM1_6 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "PM1.6",
  "version": "2.8",
  "description": "Insurance Co Phone Number",
  "type": "Field",
  "item": 432,
  "table": "",
  "longName": "HL7Insurance Co Phone Number"
});

/**
 * PM1.7 - Group Number
 */
export const PM1_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PM1.7",
  "version": "2.8",
  "description": "Group Number",
  "type": "Field",
  "item": 433,
  "table": "",
  "longName": "HL7Group Number"
});

/**
 * PM1.8 - Group Name
 */
export const PM1_8 = datatypes.XON.register(hl7v2Metadata, {
  "title": "PM1.8",
  "version": "2.8",
  "description": "Group Name",
  "type": "Field",
  "item": 434,
  "table": "",
  "longName": "HL7Group Name"
});

/**
 * PM1.9 - Plan Effective Date
 */
export const PM1_9 = datatypes.DT.register(hl7v2Metadata, {
  "title": "PM1.9",
  "version": "2.8",
  "description": "Plan Effective Date",
  "type": "Field",
  "item": 437,
  "table": "",
  "longName": "HL7Plan Effective Date"
});

/**
 * PM1.10 - Plan Expiration Date
 */
export const PM1_10 = datatypes.DT.register(hl7v2Metadata, {
  "title": "PM1.10",
  "version": "2.8",
  "description": "Plan Expiration Date",
  "type": "Field",
  "item": 438,
  "table": "",
  "longName": "HL7Plan Expiration Date"
});

/**
 * PM1.11 - Patient DOB Required
 */
export const PM1_11 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.11",
  "version": "2.8",
  "description": "Patient DOB Required",
  "type": "Field",
  "item": 3454,
  "table": "HL70136",
  "longName": "HL7Patient DOB Required"
});

/**
 * PM1.12 - Patient Gender Required
 */
export const PM1_12 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.12",
  "version": "2.8",
  "description": "Patient Gender Required",
  "type": "Field",
  "item": 3455,
  "table": "HL70136",
  "longName": "HL7Patient Gender Required"
});

/**
 * PM1.13 - Patient Relationship Required
 */
export const PM1_13 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.13",
  "version": "2.8",
  "description": "Patient Relationship Required",
  "type": "Field",
  "item": 3456,
  "table": "HL70136",
  "longName": "HL7Patient Relationship Required"
});

/**
 * PM1.14 - Patient Signature Required
 */
export const PM1_14 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.14",
  "version": "2.8",
  "description": "Patient Signature Required",
  "type": "Field",
  "item": 3457,
  "table": "HL70136",
  "longName": "HL7Patient Signature Required"
});

/**
 * PM1.15 - Diagnosis Required
 */
export const PM1_15 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.15",
  "version": "2.8",
  "description": "Diagnosis Required",
  "type": "Field",
  "item": 3458,
  "table": "HL70136",
  "longName": "HL7Diagnosis Required"
});

/**
 * PM1.16 - Service Required
 */
export const PM1_16 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.16",
  "version": "2.8",
  "description": "Service Required",
  "type": "Field",
  "item": 3459,
  "table": "HL70136",
  "longName": "HL7Service Required"
});

/**
 * PM1.17 - Patient Name Required
 */
export const PM1_17 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.17",
  "version": "2.8",
  "description": "Patient Name Required",
  "type": "Field",
  "item": 3460,
  "table": "HL70136",
  "longName": "HL7Patient Name Required"
});

/**
 * PM1.18 - Patient Address Required
 */
export const PM1_18 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.18",
  "version": "2.8",
  "description": "Patient Address Required",
  "type": "Field",
  "item": 3461,
  "table": "HL70136",
  "longName": "HL7Patient Address Required"
});

/**
 * PM1.19 - Subscribers Name Required
 */
export const PM1_19 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.19",
  "version": "2.8",
  "description": "Subscribers Name Required",
  "type": "Field",
  "item": 3462,
  "table": "HL70136",
  "longName": "HL7Subscribers Name Required"
});

/**
 * PM1.20 - Workman's Comp Indicator
 */
export const PM1_20 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.20",
  "version": "2.8",
  "description": "Workman's Comp Indicator",
  "type": "Field",
  "item": 3463,
  "table": "HL70136",
  "longName": "HL7Workman's Comp Indicator"
});

/**
 * PM1.21 - Bill Type Required
 */
export const PM1_21 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.21",
  "version": "2.8",
  "description": "Bill Type Required",
  "type": "Field",
  "item": 3464,
  "table": "HL70136",
  "longName": "HL7Bill Type Required"
});

/**
 * PM1.22 - Commercial Carrier Name and Address Required
 */
export const PM1_22 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PM1.22",
  "version": "2.8",
  "description": "Commercial Carrier Name and Address Required",
  "type": "Field",
  "item": 3465,
  "table": "HL70136",
  "longName": "HL7Commercial Carrier Name and Address Required"
});

/**
 * PM1.23 - Policy Number Pattern
 */
export const PM1_23 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PM1.23",
  "version": "2.8",
  "description": "Policy Number Pattern",
  "type": "Field",
  "item": 3466,
  "table": "",
  "longName": "HL7Policy Number Pattern"
});

/**
 * PM1.24 - Group Number Pattern
 */
export const PM1_24 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PM1.24",
  "version": "2.8",
  "description": "Group Number Pattern",
  "type": "Field",
  "item": 3467,
  "table": "",
  "longName": "HL7Group Number Pattern"
});
