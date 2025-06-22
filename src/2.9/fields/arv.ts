import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 ARV Fields
 * 
 * HL7 v2.9 ARV field definitions
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
  "version": "2.9",
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
  "version": "2.9",
  "description": "Access Restriction Action Code",
  "type": "Field",
  "item": 2144,
  "table": "HL70206",
  "longName": "HL7Access Restriction Action Code"
});

/**
 * ARV.3 - Access Restriction Value
 */
export const ARV_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ARV.3",
  "version": "2.9",
  "description": "Access Restriction Value",
  "type": "Field",
  "item": 2145,
  "table": "HL70717",
  "longName": "HL7Access Restriction Value"
});

/**
 * ARV.4 - Access Restriction Reason
 */
export const ARV_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ARV.4",
  "version": "2.9",
  "description": "Access Restriction Reason",
  "type": "Field",
  "item": 2146,
  "table": "HL70719",
  "longName": "HL7Access Restriction Reason"
});

/**
 * ARV.5 - Special Access Restriction Instructions
 */
export const ARV_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ARV.5",
  "version": "2.9",
  "description": "Special Access Restriction Instructions",
  "type": "Field",
  "item": 2147,
  "table": "",
  "longName": "HL7Special Access Restriction Instructions"
});

/**
 * ARV.6 - Access Restriction Date Range
 */
export const ARV_6 = datatypes.DR.register(hl7v2Metadata, {
  "title": "ARV.6",
  "version": "2.9",
  "description": "Access Restriction Date Range",
  "type": "Field",
  "item": 2148,
  "table": "",
  "longName": "HL7Access Restriction Date Range"
});

/**
 * ARV.7 - Security Classification Tag
 */
export const ARV_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ARV.7",
  "version": "2.9",
  "description": "Security Classification Tag",
  "type": "Field",
  "item": 3512,
  "table": "HL70952",
  "longName": "HL7Security Classification Tag"
});

/**
 * ARV.8 - Security Handling Instructions
 */
export const ARV_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ARV.8",
  "version": "2.9",
  "description": "Security Handling Instructions",
  "type": "Field",
  "item": 3513,
  "table": "HL70953",
  "longName": "HL7Security Handling Instructions"
});

/**
 * ARV.9 - Access Restriction Message Location
 */
export const ARV_9 = datatypes.ERL.register(hl7v2Metadata, {
  "title": "ARV.9",
  "version": "2.9",
  "description": "Access Restriction Message Location",
  "type": "Field",
  "item": 3514,
  "table": "",
  "longName": "HL7Access Restriction Message Location"
});

/**
 * ARV.10 - Access Restriction Instance Identifier
 */
export const ARV_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ARV.10",
  "version": "2.9",
  "description": "Access Restriction Instance Identifier",
  "type": "Field",
  "item": 2470,
  "table": "",
  "longName": "HL7Access Restriction Instance Identifier"
});
