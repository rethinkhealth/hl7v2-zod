import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 CDM Fields
 * 
 * HL7 v2.9 CDM field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CDM.1 - Primary Key Value - CDM
 */
export const CDM_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CDM.1",
  "version": "2.9",
  "description": "Primary Key Value - CDM",
  "type": "Field",
  "item": 1306,
  "table": "",
  "longName": "HL7Primary Key Value - CDM"
});

/**
 * CDM.2 - Charge Code Alias
 */
export const CDM_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CDM.2",
  "version": "2.9",
  "description": "Charge Code Alias",
  "type": "Field",
  "item": 983,
  "table": "HL70132",
  "longName": "HL7Charge Code Alias"
});

/**
 * CDM.3 - Charge Description Short
 */
export const CDM_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CDM.3",
  "version": "2.9",
  "description": "Charge Description Short",
  "type": "Field",
  "item": 984,
  "table": "",
  "longName": "HL7Charge Description Short"
});

/**
 * CDM.4 - Charge Description Long
 */
export const CDM_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CDM.4",
  "version": "2.9",
  "description": "Charge Description Long",
  "type": "Field",
  "item": 985,
  "table": "",
  "longName": "HL7Charge Description Long"
});

/**
 * CDM.5 - Description Override Indicator
 */
export const CDM_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CDM.5",
  "version": "2.9",
  "description": "Description Override Indicator",
  "type": "Field",
  "item": 986,
  "table": "HL70268",
  "longName": "HL7Description Override Indicator"
});

/**
 * CDM.6 - Exploding Charges
 */
export const CDM_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CDM.6",
  "version": "2.9",
  "description": "Exploding Charges",
  "type": "Field",
  "item": 987,
  "table": "HL70132",
  "longName": "HL7Exploding Charges"
});

/**
 * CDM.7 - Procedure Code
 */
export const CDM_7 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "CDM.7",
  "version": "2.9",
  "description": "Procedure Code",
  "type": "Field",
  "item": 393,
  "table": "HL70088",
  "longName": "HL7Procedure Code"
});

/**
 * CDM.8 - Active/Inactive Flag
 */
export const CDM_8 = datatypes.ID.register(hl7v2Metadata, {
  "title": "CDM.8",
  "version": "2.9",
  "description": "Active/Inactive Flag",
  "type": "Field",
  "item": 675,
  "table": "HL70183",
  "longName": "HL7Active/Inactive Flag",
  "length": 1
});

/**
 * CDM.9 - Inventory Number
 */
export const CDM_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CDM.9",
  "version": "2.9",
  "description": "Inventory Number",
  "type": "Field",
  "item": 990,
  "table": "HL70463",
  "longName": "HL7Inventory Number"
});

/**
 * CDM.10 - Resource Load
 */
export const CDM_10 = datatypes.NM.register(hl7v2Metadata, {
  "title": "CDM.10",
  "version": "2.9",
  "description": "Resource Load",
  "type": "Field",
  "item": 991,
  "table": "",
  "longName": "HL7Resource Load"
});

/**
 * CDM.11 - Contract Number
 */
export const CDM_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CDM.11",
  "version": "2.9",
  "description": "Contract Number",
  "type": "Field",
  "item": 992,
  "table": "",
  "longName": "HL7Contract Number"
});

/**
 * CDM.12 - Contract Organization
 */
export const CDM_12 = datatypes.XON.register(hl7v2Metadata, {
  "title": "CDM.12",
  "version": "2.9",
  "description": "Contract Organization",
  "type": "Field",
  "item": 993,
  "table": "",
  "longName": "HL7Contract Organization"
});

/**
 * CDM.13 - Room Fee Indicator
 */
export const CDM_13 = datatypes.ID.register(hl7v2Metadata, {
  "title": "CDM.13",
  "version": "2.9",
  "description": "Room Fee Indicator",
  "type": "Field",
  "item": 994,
  "table": "HL70136",
  "longName": "HL7Room Fee Indicator",
  "length": 1
});
