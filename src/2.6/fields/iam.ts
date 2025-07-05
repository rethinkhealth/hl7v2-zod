
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 IAM Fields
 * 
 * HL7 v2.6 IAM field definitions
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
  "version": "2.6",
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
  "version": "2.6",
  "description": "Allergen Type Code",
  "type": "Field",
  "item": 204,
  "table": "HL70127",
  "longName": "HL7Allergen Type Code",
  "length": 705
});

/**
 * IAM.3 - Allergen Code/Mnemonic/Description
 */
export const IAM_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.3",
  "version": "2.6",
  "description": "Allergen Code/Mnemonic/Description",
  "type": "Field",
  "item": 205,
  "table": "",
  "longName": "HL7Allergen Code/Mnemonic/Description",
  "length": 705
});

/**
 * IAM.4 - Allergy Severity Code
 */
export const IAM_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.4",
  "version": "2.6",
  "description": "Allergy Severity Code",
  "type": "Field",
  "item": 206,
  "table": "HL70128",
  "longName": "HL7Allergy Severity Code",
  "length": 705
});

/**
 * IAM.5 - Allergy Reaction Code
 */
export const IAM_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IAM.5",
  "version": "2.6",
  "description": "Allergy Reaction Code",
  "type": "Field",
  "item": 207,
  "table": "",
  "longName": "HL7Allergy Reaction Code",
  "length": 15
});

/**
 * IAM.6 - Allergy Action Code
 */
export const IAM_6 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "IAM.6",
  "version": "2.6",
  "description": "Allergy Action Code",
  "type": "Field",
  "item": 1551,
  "table": "HL70206",
  "longName": "HL7Allergy Action Code",
  "length": 250
});

/**
 * IAM.7 - Allergy Unique Identifier
 */
export const IAM_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IAM.7",
  "version": "2.6",
  "description": "Allergy Unique Identifier",
  "type": "Field",
  "item": 1552,
  "table": "",
  "longName": "HL7Allergy Unique Identifier",
  "length": 427
});

/**
 * IAM.8 - Action Reason
 */
export const IAM_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IAM.8",
  "version": "2.6",
  "description": "Action Reason",
  "type": "Field",
  "item": 1553,
  "table": "",
  "longName": "HL7Action Reason",
  "length": 60
});

/**
 * IAM.9 - Sensitivity to Causative Agent Code
 */
export const IAM_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.9",
  "version": "2.6",
  "description": "Sensitivity to Causative Agent Code",
  "type": "Field",
  "item": 1554,
  "table": "HL70436",
  "longName": "HL7Sensitivity to Causative Agent Code",
  "length": 705
});

/**
 * IAM.10 - Allergen Group Code/Mnemonic/Description
 */
export const IAM_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.10",
  "version": "2.6",
  "description": "Allergen Group Code/Mnemonic/Description",
  "type": "Field",
  "item": 1555,
  "table": "",
  "longName": "HL7Allergen Group Code/Mnemonic/Description",
  "length": 705
});

/**
 * IAM.11 - Onset Date
 */
export const IAM_11 = datatypes.DT.register(hl7v2Metadata, {
  "title": "IAM.11",
  "version": "2.6",
  "description": "Onset Date",
  "type": "Field",
  "item": 1556,
  "table": "",
  "longName": "HL7Onset Date",
  "length": 8
});

/**
 * IAM.12 - Onset Date Text
 */
export const IAM_12 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IAM.12",
  "version": "2.6",
  "description": "Onset Date Text",
  "type": "Field",
  "item": 1557,
  "table": "",
  "longName": "HL7Onset Date Text",
  "length": 60
});

/**
 * IAM.13 - Reported Date/Time
 */
export const IAM_13 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IAM.13",
  "version": "2.6",
  "description": "Reported Date/Time",
  "type": "Field",
  "item": 1558,
  "table": "",
  "longName": "HL7Reported Date/Time",
  "length": 8
});

/**
 * IAM.14 - Reported By
 */
export const IAM_14 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "IAM.14",
  "version": "2.6",
  "description": "Reported By",
  "type": "Field",
  "item": 1559,
  "table": "",
  "longName": "HL7Reported By",
  "length": 250
});

/**
 * IAM.15 - Relationship to Patient Code
 */
export const IAM_15 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.15",
  "version": "2.6",
  "description": "Relationship to Patient Code",
  "type": "Field",
  "item": 1560,
  "table": "HL70063",
  "longName": "HL7Relationship to Patient Code",
  "length": 705
});

/**
 * IAM.16 - Alert Device Code
 */
export const IAM_16 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.16",
  "version": "2.6",
  "description": "Alert Device Code",
  "type": "Field",
  "item": 1561,
  "table": "HL70437",
  "longName": "HL7Alert Device Code",
  "length": 705
});

/**
 * IAM.17 - Allergy Clinical Status Code
 */
export const IAM_17 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IAM.17",
  "version": "2.6",
  "description": "Allergy Clinical Status Code",
  "type": "Field",
  "item": 1562,
  "table": "HL70438",
  "longName": "HL7Allergy Clinical Status Code",
  "length": 705
});

/**
 * IAM.18 - Statused by Person
 */
export const IAM_18 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "IAM.18",
  "version": "2.6",
  "description": "Statused by Person",
  "type": "Field",
  "item": 1563,
  "table": "",
  "longName": "HL7Statused by Person",
  "length": 250
});

/**
 * IAM.19 - Statused by Organization
 */
export const IAM_19 = datatypes.XON.register(hl7v2Metadata, {
  "title": "IAM.19",
  "version": "2.6",
  "description": "Statused by Organization",
  "type": "Field",
  "item": 1564,
  "table": "",
  "longName": "HL7Statused by Organization",
  "length": 250
});

/**
 * IAM.20 - Statused at Date/Time
 */
export const IAM_20 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IAM.20",
  "version": "2.6",
  "description": "Statused at Date/Time",
  "type": "Field",
  "item": 1565,
  "table": "",
  "longName": "HL7Statused at Date/Time",
  "length": 8
});
