
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 PR1 Fields
 * 
 * HL7 v2.5 PR1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PR1.1 - Set ID - PR1
 */
export const PR1_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "PR1.1",
  "version": "2.5",
  "description": "Set ID - PR1",
  "type": "Field",
  "item": 391,
  "table": "",
  "longName": "HL7Set ID - PR1",
  "length": 4
});

/**
 * PR1.2 - Procedure Coding Method
 */
export const PR1_2 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PR1.2",
  "version": "2.5",
  "description": "Procedure Coding Method",
  "type": "Field",
  "item": 392,
  "table": "HL70089",
  "longName": "HL7Procedure Coding Method",
  "length": 3
});

/**
 * PR1.3 - Procedure Code
 */
export const PR1_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PR1.3",
  "version": "2.5",
  "description": "Procedure Code",
  "type": "Field",
  "item": 393,
  "table": "HL70088",
  "longName": "HL7Procedure Code",
  "length": 250
});

/**
 * PR1.4 - Procedure Description
 */
export const PR1_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PR1.4",
  "version": "2.5",
  "description": "Procedure Description",
  "type": "Field",
  "item": 394,
  "table": "",
  "longName": "HL7Procedure Description",
  "length": 40
});

/**
 * PR1.5 - Procedure Date/Time
 */
export const PR1_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PR1.5",
  "version": "2.5",
  "description": "Procedure Date/Time",
  "type": "Field",
  "item": 395,
  "table": "",
  "longName": "HL7Procedure Date/Time",
  "length": 26
});

/**
 * PR1.6 - Procedure Functional Type
 */
export const PR1_6 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PR1.6",
  "version": "2.5",
  "description": "Procedure Functional Type",
  "type": "Field",
  "item": 396,
  "table": "HL70230",
  "longName": "HL7Procedure Functional Type",
  "length": 2
});

/**
 * PR1.7 - Procedure Minutes
 */
export const PR1_7 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PR1.7",
  "version": "2.5",
  "description": "Procedure Minutes",
  "type": "Field",
  "item": 397,
  "table": "",
  "longName": "HL7Procedure Minutes",
  "length": 4
});

/**
 * PR1.8 - Anesthesiologist
 */
export const PR1_8 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "PR1.8",
  "version": "2.5",
  "description": "Anesthesiologist",
  "type": "Field",
  "item": 398,
  "table": "HL70010",
  "longName": "HL7Anesthesiologist",
  "length": 250
});

/**
 * PR1.9 - Anesthesia Code
 */
export const PR1_9 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PR1.9",
  "version": "2.5",
  "description": "Anesthesia Code",
  "type": "Field",
  "item": 399,
  "table": "HL70019",
  "longName": "HL7Anesthesia Code",
  "length": 2
});

/**
 * PR1.10 - Anesthesia Minutes
 */
export const PR1_10 = datatypes.NM.register(hl7v2Metadata, {
  "title": "PR1.10",
  "version": "2.5",
  "description": "Anesthesia Minutes",
  "type": "Field",
  "item": 400,
  "table": "",
  "longName": "HL7Anesthesia Minutes",
  "length": 4
});

/**
 * PR1.11 - Surgeon
 */
export const PR1_11 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "PR1.11",
  "version": "2.5",
  "description": "Surgeon",
  "type": "Field",
  "item": 401,
  "table": "HL70010",
  "longName": "HL7Surgeon",
  "length": 250
});

/**
 * PR1.12 - Procedure Practitioner
 */
export const PR1_12 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "PR1.12",
  "version": "2.5",
  "description": "Procedure Practitioner",
  "type": "Field",
  "item": 402,
  "table": "HL70010",
  "longName": "HL7Procedure Practitioner",
  "length": 250
});

/**
 * PR1.13 - Consent Code
 */
export const PR1_13 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PR1.13",
  "version": "2.5",
  "description": "Consent Code",
  "type": "Field",
  "item": 403,
  "table": "HL70059",
  "longName": "HL7Consent Code",
  "length": 250
});

/**
 * PR1.14 - Procedure Priority
 */
export const PR1_14 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PR1.14",
  "version": "2.5",
  "description": "Procedure Priority",
  "type": "Field",
  "item": 404,
  "table": "HL70418",
  "longName": "HL7Procedure Priority",
  "length": 2
});

/**
 * PR1.15 - Associated Diagnosis Code
 */
export const PR1_15 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PR1.15",
  "version": "2.5",
  "description": "Associated Diagnosis Code",
  "type": "Field",
  "item": 772,
  "table": "HL70051",
  "longName": "HL7Associated Diagnosis Code",
  "length": 250
});

/**
 * PR1.16 - Procedure Code Modifier
 */
export const PR1_16 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PR1.16",
  "version": "2.5",
  "description": "Procedure Code Modifier",
  "type": "Field",
  "item": 1316,
  "table": "HL70340",
  "longName": "HL7Procedure Code Modifier",
  "length": 250
});

/**
 * PR1.17 - Procedure DRG Type
 */
export const PR1_17 = datatypes.IS.register(hl7v2Metadata, {
  "title": "PR1.17",
  "version": "2.5",
  "description": "Procedure DRG Type",
  "type": "Field",
  "item": 1501,
  "table": "HL70416",
  "longName": "HL7Procedure DRG Type",
  "length": 20
});

/**
 * PR1.18 - Tissue Type Code
 */
export const PR1_18 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PR1.18",
  "version": "2.5",
  "description": "Tissue Type Code",
  "type": "Field",
  "item": 1502,
  "table": "HL70417",
  "longName": "HL7Tissue Type Code",
  "length": 250
});

/**
 * PR1.19 - Procedure Identifier
 */
export const PR1_19 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PR1.19",
  "version": "2.5",
  "description": "Procedure Identifier",
  "type": "Field",
  "item": 1848,
  "table": "",
  "longName": "HL7Procedure Identifier",
  "length": 427
});

/**
 * PR1.20 - Procedure Action Code
 */
export const PR1_20 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PR1.20",
  "version": "2.5",
  "description": "Procedure Action Code",
  "type": "Field",
  "item": 1849,
  "table": "HL70206",
  "longName": "HL7Procedure Action Code",
  "length": 1
});
