import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 IN3 Fields
 * 
 * HL7 v2.8 IN3 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IN3.1 - Set ID - IN3
 */
export const IN3_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "IN3.1",
  "version": "2.8",
  "description": "Set ID - IN3",
  "type": "Field",
  "item": 502,
  "table": "",
  "longName": "HL7Set ID - IN3",
  "length": 4
});

/**
 * IN3.2 - Certification Number
 */
export const IN3_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN3.2",
  "version": "2.8",
  "description": "Certification Number",
  "type": "Field",
  "item": 503,
  "table": "",
  "longName": "HL7Certification Number"
});

/**
 * IN3.3 - Certified By
 */
export const IN3_3 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IN3.3",
  "version": "2.8",
  "description": "Certified By",
  "type": "Field",
  "item": 504,
  "table": "",
  "longName": "HL7Certified By"
});

/**
 * IN3.4 - Certification Required
 */
export const IN3_4 = datatypes.ID.register(hl7v2Metadata, {
  "title": "IN3.4",
  "version": "2.8",
  "description": "Certification Required",
  "type": "Field",
  "item": 505,
  "table": "HL70136",
  "longName": "HL7Certification Required",
  "length": 1
});

/**
 * IN3.5 - Penalty
 */
export const IN3_5 = datatypes.MOP.register(hl7v2Metadata, {
  "title": "IN3.5",
  "version": "2.8",
  "description": "Penalty",
  "type": "Field",
  "item": 506,
  "table": "",
  "longName": "HL7Penalty"
});

/**
 * IN3.6 - Certification Date/Time
 */
export const IN3_6 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IN3.6",
  "version": "2.8",
  "description": "Certification Date/Time",
  "type": "Field",
  "item": 507,
  "table": "",
  "longName": "HL7Certification Date/Time"
});

/**
 * IN3.7 - Certification Modify Date/Time
 */
export const IN3_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IN3.7",
  "version": "2.8",
  "description": "Certification Modify Date/Time",
  "type": "Field",
  "item": 508,
  "table": "",
  "longName": "HL7Certification Modify Date/Time"
});

/**
 * IN3.8 - Operator
 */
export const IN3_8 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IN3.8",
  "version": "2.8",
  "description": "Operator",
  "type": "Field",
  "item": 509,
  "table": "",
  "longName": "HL7Operator"
});

/**
 * IN3.9 - Certification Begin Date
 */
export const IN3_9 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IN3.9",
  "version": "2.8",
  "description": "Certification Begin Date",
  "type": "Field",
  "item": 510,
  "table": "",
  "longName": "HL7Certification Begin Date"
});

/**
 * IN3.10 - Certification End Date
 */
export const IN3_10 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IN3.10",
  "version": "2.8",
  "description": "Certification End Date",
  "type": "Field",
  "item": 511,
  "table": "",
  "longName": "HL7Certification End Date"
});

/**
 * IN3.11 - Days
 */
export const IN3_11 = datatypes.DTN.register(hl7v2Metadata, {
  "title": "IN3.11",
  "version": "2.8",
  "description": "Days",
  "type": "Field",
  "item": 512,
  "table": "",
  "longName": "HL7Days"
});

/**
 * IN3.12 - Non-Concur Code/Description
 */
export const IN3_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN3.12",
  "version": "2.8",
  "description": "Non-Concur Code/Description",
  "type": "Field",
  "item": 513,
  "table": "HL70233",
  "longName": "HL7Non-Concur Code/Description"
});

/**
 * IN3.13 - Non-Concur Effective Date/Time
 */
export const IN3_13 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IN3.13",
  "version": "2.8",
  "description": "Non-Concur Effective Date/Time",
  "type": "Field",
  "item": 514,
  "table": "",
  "longName": "HL7Non-Concur Effective Date/Time"
});

/**
 * IN3.14 - Physician Reviewer
 */
export const IN3_14 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IN3.14",
  "version": "2.8",
  "description": "Physician Reviewer",
  "type": "Field",
  "item": 515,
  "table": "HL70010",
  "longName": "HL7Physician Reviewer"
});

/**
 * IN3.15 - Certification Contact
 */
export const IN3_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN3.15",
  "version": "2.8",
  "description": "Certification Contact",
  "type": "Field",
  "item": 516,
  "table": "",
  "longName": "HL7Certification Contact"
});

/**
 * IN3.16 - Certification Contact Phone Number
 */
export const IN3_16 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "IN3.16",
  "version": "2.8",
  "description": "Certification Contact Phone Number",
  "type": "Field",
  "item": 517,
  "table": "",
  "longName": "HL7Certification Contact Phone Number"
});

/**
 * IN3.17 - Appeal Reason
 */
export const IN3_17 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN3.17",
  "version": "2.8",
  "description": "Appeal Reason",
  "type": "Field",
  "item": 518,
  "table": "HL70345",
  "longName": "HL7Appeal Reason"
});

/**
 * IN3.18 - Certification Agency
 */
export const IN3_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN3.18",
  "version": "2.8",
  "description": "Certification Agency",
  "type": "Field",
  "item": 519,
  "table": "HL70346",
  "longName": "HL7Certification Agency"
});

/**
 * IN3.19 - Certification Agency Phone Number
 */
export const IN3_19 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "IN3.19",
  "version": "2.8",
  "description": "Certification Agency Phone Number",
  "type": "Field",
  "item": 520,
  "table": "",
  "longName": "HL7Certification Agency Phone Number"
});

/**
 * IN3.20 - Pre-Certification Requirement
 */
export const IN3_20 = datatypes.ICD.register(hl7v2Metadata, {
  "title": "IN3.20",
  "version": "2.8",
  "description": "Pre-Certification Requirement",
  "type": "Field",
  "item": 521,
  "table": "HL70136",
  "longName": "HL7Pre-Certification Requirement"
});

/**
 * IN3.21 - Case Manager
 */
export const IN3_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IN3.21",
  "version": "2.8",
  "description": "Case Manager",
  "type": "Field",
  "item": 522,
  "table": "",
  "longName": "HL7Case Manager"
});

/**
 * IN3.22 - Second Opinion Date
 */
export const IN3_22 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IN3.22",
  "version": "2.8",
  "description": "Second Opinion Date",
  "type": "Field",
  "item": 523,
  "table": "",
  "longName": "HL7Second Opinion Date"
});

/**
 * IN3.23 - Second Opinion Status
 */
export const IN3_23 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN3.23",
  "version": "2.8",
  "description": "Second Opinion Status",
  "type": "Field",
  "item": 524,
  "table": "HL70151",
  "longName": "HL7Second Opinion Status"
});

/**
 * IN3.24 - Second Opinion Documentation Received
 */
export const IN3_24 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN3.24",
  "version": "2.8",
  "description": "Second Opinion Documentation Received",
  "type": "Field",
  "item": 525,
  "table": "HL70152",
  "longName": "HL7Second Opinion Documentation Received"
});

/**
 * IN3.25 - Second Opinion Physician
 */
export const IN3_25 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IN3.25",
  "version": "2.8",
  "description": "Second Opinion Physician",
  "type": "Field",
  "item": 526,
  "table": "HL70010",
  "longName": "HL7Second Opinion Physician"
});

/**
 * IN3.26 - Certification Type
 */
export const IN3_26 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN3.26",
  "version": "2.8",
  "description": "Certification Type",
  "type": "Field",
  "item": 3336,
  "table": "HL70921",
  "longName": "HL7Certification Type"
});

/**
 * IN3.27 - Certification Category
 */
export const IN3_27 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IN3.27",
  "version": "2.8",
  "description": "Certification Category",
  "type": "Field",
  "item": 3337,
  "table": "HL70922",
  "longName": "HL7Certification Category"
});
