import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 ORG Fields
 * 
 * HL7 v2.8 ORG field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORG.1 - Set ID - ORG
 */
export const ORG_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "ORG.1",
  "version": "2.8",
  "description": "Set ID - ORG",
  "type": "Field",
  "item": 1459,
  "table": "",
  "longName": "HL7Set ID - ORG",
  "length": 4
});

/**
 * ORG.2 - Organization Unit Code
 */
export const ORG_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORG.2",
  "version": "2.8",
  "description": "Organization Unit Code",
  "type": "Field",
  "item": 1460,
  "table": "HL70405",
  "longName": "HL7Organization Unit Code"
});

/**
 * ORG.3 - Organization Unit Type Code
 */
export const ORG_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORG.3",
  "version": "2.8",
  "description": "Organization Unit Type Code",
  "type": "Field",
  "item": 1625,
  "table": "HL70474",
  "longName": "HL7Organization Unit Type Code"
});

/**
 * ORG.4 - Primary Org Unit Indicator
 */
export const ORG_4 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ORG.4",
  "version": "2.8",
  "description": "Primary Org Unit Indicator",
  "type": "Field",
  "item": 1462,
  "table": "HL70136",
  "longName": "HL7Primary Org Unit Indicator",
  "length": 1
});

/**
 * ORG.5 - Practitioner Org Unit Identifier
 */
export const ORG_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ORG.5",
  "version": "2.8",
  "description": "Practitioner Org Unit Identifier",
  "type": "Field",
  "item": 1463,
  "table": "",
  "longName": "HL7Practitioner Org Unit Identifier"
});

/**
 * ORG.6 - Health Care Provider Type Code
 */
export const ORG_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORG.6",
  "version": "2.8",
  "description": "Health Care Provider Type Code",
  "type": "Field",
  "item": 1464,
  "table": "HL70452",
  "longName": "HL7Health Care Provider Type Code"
});

/**
 * ORG.7 - Health Care Provider Classification Code
 */
export const ORG_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORG.7",
  "version": "2.8",
  "description": "Health Care Provider Classification Code",
  "type": "Field",
  "item": 1614,
  "table": "HL70453",
  "longName": "HL7Health Care Provider Classification Code"
});

/**
 * ORG.8 - Health Care Provider Area of Specialization Code
 */
export const ORG_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORG.8",
  "version": "2.8",
  "description": "Health Care Provider Area of Specialization Code",
  "type": "Field",
  "item": 1615,
  "table": "HL70454",
  "longName": "HL7Health Care Provider Area of Specialization Code"
});

/**
 * ORG.9 - Effective Date Range
 */
export const ORG_9 = datatypes.DR.register(hl7v2Metadata, {
  "title": "ORG.9",
  "version": "2.8",
  "description": "Effective Date Range",
  "type": "Field",
  "item": 1465,
  "table": "",
  "longName": "HL7Effective Date Range"
});

/**
 * ORG.10 - Employment Status Code
 */
export const ORG_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORG.10",
  "version": "2.8",
  "description": "Employment Status Code",
  "type": "Field",
  "item": 1276,
  "table": "HL70066",
  "longName": "HL7Employment Status Code"
});

/**
 * ORG.11 - Board Approval Indicator
 */
export const ORG_11 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ORG.11",
  "version": "2.8",
  "description": "Board Approval Indicator",
  "type": "Field",
  "item": 1467,
  "table": "HL70136",
  "longName": "HL7Board Approval Indicator",
  "length": 1
});

/**
 * ORG.12 - Primary Care Physician Indicator
 */
export const ORG_12 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ORG.12",
  "version": "2.8",
  "description": "Primary Care Physician Indicator",
  "type": "Field",
  "item": 1468,
  "table": "HL70136",
  "longName": "HL7Primary Care Physician Indicator",
  "length": 1
});

/**
 * ORG.13 - Cost Center Code
 */
export const ORG_13 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ORG.13",
  "version": "2.8",
  "description": "Cost Center Code",
  "type": "Field",
  "item": 1891,
  "table": "HL70539",
  "longName": "HL7Cost Center Code"
});
