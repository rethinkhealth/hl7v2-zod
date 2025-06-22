import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 OH2 Fields
 * 
 * HL7 v2.9 OH2 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OH2.1 - Set ID
 */
export const OH2_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "OH2.1",
  "version": "2.9",
  "description": "Set ID",
  "type": "Field",
  "item": 3522,
  "table": "",
  "longName": "HL7Set ID"
});

/**
 * OH2.2 - Action Code
 */
export const OH2_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OH2.2",
  "version": "2.9",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * OH2.3 - Entered Date
 */
export const OH2_3 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH2.3",
  "version": "2.9",
  "description": "Entered Date",
  "type": "Field",
  "item": 3524,
  "table": "",
  "longName": "HL7Entered Date"
});

/**
 * OH2.4 - Occupation
 */
export const OH2_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OH2.4",
  "version": "2.9",
  "description": "Occupation",
  "type": "Field",
  "item": 3525,
  "table": "HL70958",
  "longName": "HL7Occupation"
});

/**
 * OH2.5 - Industry
 */
export const OH2_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OH2.5",
  "version": "2.9",
  "description": "Industry",
  "type": "Field",
  "item": 3526,
  "table": "HL70955",
  "longName": "HL7Industry"
});

/**
 * OH2.6 - Work Classification
 */
export const OH2_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OH2.6",
  "version": "2.9",
  "description": "Work Classification",
  "type": "Field",
  "item": 3527,
  "table": "HL70959",
  "longName": "HL7Work Classification"
});

/**
 * OH2.7 - Job Start Date
 */
export const OH2_7 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH2.7",
  "version": "2.9",
  "description": "Job Start Date",
  "type": "Field",
  "item": 2494,
  "table": "",
  "longName": "HL7Job Start Date"
});

/**
 * OH2.8 - Job End Date
 */
export const OH2_8 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH2.8",
  "version": "2.9",
  "description": "Job End Date",
  "type": "Field",
  "item": 2495,
  "table": "",
  "longName": "HL7Job End Date"
});

/**
 * OH2.9 - Work Schedule
 */
export const OH2_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OH2.9",
  "version": "2.9",
  "description": "Work Schedule",
  "type": "Field",
  "item": 3528,
  "table": "HL70954",
  "longName": "HL7Work Schedule"
});

/**
 * OH2.10 - Average Hours worked per Day
 */
export const OH2_10 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OH2.10",
  "version": "2.9",
  "description": "Average Hours worked per Day",
  "type": "Field",
  "item": 3529,
  "table": "",
  "longName": "HL7Average Hours worked per Day"
});

/**
 * OH2.11 - Average Days Worked per Week
 */
export const OH2_11 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OH2.11",
  "version": "2.9",
  "description": "Average Days Worked per Week",
  "type": "Field",
  "item": 3530,
  "table": "",
  "longName": "HL7Average Days Worked per Week"
});

/**
 * OH2.12 - Employer Organization
 */
export const OH2_12 = datatypes.XON.register(hl7v2Metadata, {
  "title": "OH2.12",
  "version": "2.9",
  "description": "Employer Organization",
  "type": "Field",
  "item": 3531,
  "table": "",
  "longName": "HL7Employer Organization"
});

/**
 * OH2.13 - Employer Address
 */
export const OH2_13 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "OH2.13",
  "version": "2.9",
  "description": "Employer Address",
  "type": "Field",
  "item": 3546,
  "table": "",
  "longName": "HL7Employer Address"
});

/**
 * OH2.14 - Supervisory Level
 */
export const OH2_14 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OH2.14",
  "version": "2.9",
  "description": "Supervisory Level",
  "type": "Field",
  "item": 3532,
  "table": "HL70956",
  "longName": "HL7Supervisory Level"
});

/**
 * OH2.15 - Job Duties
 */
export const OH2_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OH2.15",
  "version": "2.9",
  "description": "Job Duties",
  "type": "Field",
  "item": 3533,
  "table": "",
  "longName": "HL7Job Duties"
});

/**
 * OH2.16 - Occupational Hazards
 */
export const OH2_16 = datatypes.FT.register(hl7v2Metadata, {
  "title": "OH2.16",
  "version": "2.9",
  "description": "Occupational Hazards",
  "type": "Field",
  "item": 3534,
  "table": "",
  "longName": "HL7Occupational Hazards"
});

/**
 * OH2.17 - Job Unique Identifier
 */
export const OH2_17 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OH2.17",
  "version": "2.9",
  "description": "Job Unique Identifier",
  "type": "Field",
  "item": 2433,
  "table": "",
  "longName": "HL7Job Unique Identifier"
});

/**
 * OH2.18 - Current Job Indicator
 */
export const OH2_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OH2.18",
  "version": "2.9",
  "description": "Current Job Indicator",
  "type": "Field",
  "item": 2471,
  "table": "HL70136",
  "longName": "HL7Current Job Indicator"
});
