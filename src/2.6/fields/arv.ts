
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 ARV Fields
 * 
 * HL7 v2.6 ARV field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ARV.1 - Set ID
 */
export const ARV_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "ARV.1",
  "version": "2.6",
  "description": "Set ID",
  "type": "Field",
  "item": 2143,
  "table": "",
  "longName": "HL7Set ID",
  "length": 4
});

/**
 * ARV.2 - Access Restriction Action Code
 */
export const ARV_2 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "ARV.2",
  "version": "2.6",
  "description": "Access Restriction Action Code",
  "type": "Field",
  "item": 2144,
  "table": "HL70206",
  "longName": "HL7Access Restriction Action Code",
  "length": 705
});

/**
 * ARV.3 - Access Restriction Value
 */
export const ARV_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ARV.3",
  "version": "2.6",
  "description": "Access Restriction Value",
  "type": "Field",
  "item": 2145,
  "table": "HL70717",
  "longName": "HL7Access Restriction Value",
  "length": 705
});

/**
 * ARV.4 - Access Restriction Reason
 */
export const ARV_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ARV.4",
  "version": "2.6",
  "description": "Access Restriction Reason",
  "type": "Field",
  "item": 2146,
  "table": "HL70719",
  "longName": "HL7Access Restriction Reason",
  "length": 705
});

/**
 * ARV.5 - Special Access Restriction Instructions
 */
export const ARV_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ARV.5",
  "version": "2.6",
  "description": "Special Access Restriction Instructions",
  "type": "Field",
  "item": 2147,
  "table": "",
  "longName": "HL7Special Access Restriction Instructions",
  "length": 250
});

/**
 * ARV.6 - Access Restriction Date Range
 */
export const ARV_6 = datatypes.DR.register(hl7v2Metadata, {
  "title": "ARV.6",
  "version": "2.6",
  "description": "Access Restriction Date Range",
  "type": "Field",
  "item": 2148,
  "table": "",
  "longName": "HL7Access Restriction Date Range",
  "length": 49
});
