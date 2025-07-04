import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 IAM Fields
 * 
 * HL7 v2.8 IAM field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IAM.1 - Set ID - IAM
 */
export const IAM_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "IAM.1",
  "version": "2.8",
  "description": "Set ID - IAM",
  "type": "Field",
  "item": 1612,
  "table": "",
  "longName": "HL7Set ID - IAM",
  "length": 4
});

/**
 * IAM.2 - Allergen Type Code
 */
export const IAM_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.2",
  "version": "2.8",
  "description": "Allergen Type Code",
  "type": "Field",
  "item": 204,
  "table": "HL70127",
  "longName": "HL7Allergen Type Code"
});

/**
 * IAM.3 - Allergen Code/Mnemonic/Description
 */
export const IAM_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.3",
  "version": "2.8",
  "description": "Allergen Code/Mnemonic/Description",
  "type": "Field",
  "item": 205,
  "table": "",
  "longName": "HL7Allergen Code/Mnemonic/Description"
});

/**
 * IAM.4 - Allergy Severity Code
 */
export const IAM_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.4",
  "version": "2.8",
  "description": "Allergy Severity Code",
  "type": "Field",
  "item": 206,
  "table": "HL70128",
  "longName": "HL7Allergy Severity Code"
});

/**
 * IAM.5 - Allergy Reaction Code
 */
export const IAM_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IAM.5",
  "version": "2.8",
  "description": "Allergy Reaction Code",
  "type": "Field",
  "item": 207,
  "table": "",
  "longName": "HL7Allergy Reaction Code"
});

/**
 * IAM.6 - Allergy Action Code
 */
export const IAM_6 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "IAM.6",
  "version": "2.8",
  "description": "Allergy Action Code",
  "type": "Field",
  "item": 1551,
  "table": "HL70206",
  "longName": "HL7Allergy Action Code"
});

/**
 * IAM.7 - Allergy Unique Identifier
 */
export const IAM_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IAM.7",
  "version": "2.8",
  "description": "Allergy Unique Identifier",
  "type": "Field",
  "item": 1552,
  "table": "",
  "longName": "HL7Allergy Unique Identifier"
});

/**
 * IAM.8 - Action Reason
 */
export const IAM_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IAM.8",
  "version": "2.8",
  "description": "Action Reason",
  "type": "Field",
  "item": 1553,
  "table": "",
  "longName": "HL7Action Reason"
});

/**
 * IAM.9 - Sensitivity to Causative Agent Code
 */
export const IAM_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.9",
  "version": "2.8",
  "description": "Sensitivity to Causative Agent Code",
  "type": "Field",
  "item": 1554,
  "table": "HL70436",
  "longName": "HL7Sensitivity to Causative Agent Code"
});

/**
 * IAM.10 - Allergen Group Code/Mnemonic/Description
 */
export const IAM_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.10",
  "version": "2.8",
  "description": "Allergen Group Code/Mnemonic/Description",
  "type": "Field",
  "item": 1555,
  "table": "",
  "longName": "HL7Allergen Group Code/Mnemonic/Description"
});

/**
 * IAM.11 - Onset Date
 */
export const IAM_11 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IAM.11",
  "version": "2.8",
  "description": "Onset Date",
  "type": "Field",
  "item": 1556,
  "table": "",
  "longName": "HL7Onset Date"
});

/**
 * IAM.12 - Onset Date Text
 */
export const IAM_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IAM.12",
  "version": "2.8",
  "description": "Onset Date Text",
  "type": "Field",
  "item": 1557,
  "table": "",
  "longName": "HL7Onset Date Text"
});

/**
 * IAM.13 - Reported Date/Time
 */
export const IAM_13 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IAM.13",
  "version": "2.8",
  "description": "Reported Date/Time",
  "type": "Field",
  "item": 1558,
  "table": "",
  "longName": "HL7Reported Date/Time"
});

/**
 * IAM.14 - Reported By
 */
export const IAM_14 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "IAM.14",
  "version": "2.8",
  "description": "Reported By",
  "type": "Field",
  "item": 1559,
  "table": "",
  "longName": "HL7Reported By"
});

/**
 * IAM.15 - Relationship to Patient Code
 */
export const IAM_15 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.15",
  "version": "2.8",
  "description": "Relationship to Patient Code",
  "type": "Field",
  "item": 1560,
  "table": "HL70063",
  "longName": "HL7Relationship to Patient Code"
});

/**
 * IAM.16 - Alert Device Code
 */
export const IAM_16 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.16",
  "version": "2.8",
  "description": "Alert Device Code",
  "type": "Field",
  "item": 1561,
  "table": "HL70437",
  "longName": "HL7Alert Device Code"
});

/**
 * IAM.17 - Allergy Clinical Status Code
 */
export const IAM_17 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.17",
  "version": "2.8",
  "description": "Allergy Clinical Status Code",
  "type": "Field",
  "item": 1562,
  "table": "HL70438",
  "longName": "HL7Allergy Clinical Status Code"
});

/**
 * IAM.18 - Statused by Person
 */
export const IAM_18 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IAM.18",
  "version": "2.8",
  "description": "Statused by Person",
  "type": "Field",
  "item": 1563,
  "table": "",
  "longName": "HL7Statused by Person"
});

/**
 * IAM.19 - Statused by Organization
 */
export const IAM_19 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IAM.19",
  "version": "2.8",
  "description": "Statused by Organization",
  "type": "Field",
  "item": 1564,
  "table": "",
  "longName": "HL7Statused by Organization"
});

/**
 * IAM.20 - Statused at Date/Time
 */
export const IAM_20 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IAM.20",
  "version": "2.8",
  "description": "Statused at Date/Time",
  "type": "Field",
  "item": 1565,
  "table": "",
  "longName": "HL7Statused at Date/Time"
});

/**
 * IAM.21 - Inactivated by Person
 */
export const IAM_21 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IAM.21",
  "version": "2.8",
  "description": "Inactivated by Person",
  "type": "Field",
  "item": 2294,
  "table": "",
  "longName": "HL7Inactivated by Person"
});

/**
 * IAM.22 - Inactivated Date/Time
 */
export const IAM_22 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IAM.22",
  "version": "2.8",
  "description": "Inactivated Date/Time",
  "type": "Field",
  "item": 2295,
  "table": "",
  "longName": "HL7Inactivated Date/Time"
});

/**
 * IAM.23 - Initially Recorded by Person
 */
export const IAM_23 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IAM.23",
  "version": "2.8",
  "description": "Initially Recorded by Person",
  "type": "Field",
  "item": 2296,
  "table": "",
  "longName": "HL7Initially Recorded by Person"
});

/**
 * IAM.24 - Initially Recorded Date/Time
 */
export const IAM_24 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IAM.24",
  "version": "2.8",
  "description": "Initially Recorded Date/Time",
  "type": "Field",
  "item": 2297,
  "table": "",
  "longName": "HL7Initially Recorded Date/Time"
});

/**
 * IAM.25 - Modified by Person
 */
export const IAM_25 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IAM.25",
  "version": "2.8",
  "description": "Modified by Person",
  "type": "Field",
  "item": 2298,
  "table": "",
  "longName": "HL7Modified by Person"
});

/**
 * IAM.26 - Modified Date/Time
 */
export const IAM_26 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IAM.26",
  "version": "2.8",
  "description": "Modified Date/Time",
  "type": "Field",
  "item": 2299,
  "table": "",
  "longName": "HL7Modified Date/Time"
});

/**
 * IAM.27 - Clinician Identified Code
 */
export const IAM_27 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.27",
  "version": "2.8",
  "description": "Clinician Identified Code",
  "type": "Field",
  "item": 2300,
  "table": "",
  "longName": "HL7Clinician Identified Code"
});

/**
 * IAM.28 - Initially Recorded by Organization
 */
export const IAM_28 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IAM.28",
  "version": "2.8",
  "description": "Initially Recorded by Organization",
  "type": "Field",
  "item": 3293,
  "table": "",
  "longName": "HL7Initially Recorded by Organization"
});

/**
 * IAM.29 - Modified by Organization
 */
export const IAM_29 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IAM.29",
  "version": "2.8",
  "description": "Modified by Organization",
  "type": "Field",
  "item": 3294,
  "table": "",
  "longName": "HL7Modified by Organization"
});

/**
 * IAM.30 - Inactivated by Organization
 */
export const IAM_30 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IAM.30",
  "version": "2.8",
  "description": "Inactivated by Organization",
  "type": "Field",
  "item": 3295,
  "table": "",
  "longName": "HL7Inactivated by Organization"
});
