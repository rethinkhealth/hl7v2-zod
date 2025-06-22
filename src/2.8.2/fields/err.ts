import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 ERR Fields
 * 
 * HL7 v2.8 ERR field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ERR.2 - Error Location
 */
export const ERR_2 = datatypes.ERL.register(hl7v2Metadata, {
  "title": "ERR.2",
  "version": "2.8",
  "description": "Error Location",
  "type": "Field",
  "item": 1812,
  "table": "",
  "longName": "HL7Error Location"
});

/**
 * ERR.3 - HL7 Error Code
 */
export const ERR_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ERR.3",
  "version": "2.8",
  "description": "HL7 Error Code",
  "type": "Field",
  "item": 1813,
  "table": "HL70357",
  "longName": "HL7HL7 Error Code"
});

/**
 * ERR.4 - Severity
 */
export const ERR_4 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ERR.4",
  "version": "2.8",
  "description": "Severity",
  "type": "Field",
  "item": 1814,
  "table": "HL70516",
  "longName": "HL7Severity",
  "length": 1
});

/**
 * ERR.5 - Application Error Code
 */
export const ERR_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ERR.5",
  "version": "2.8",
  "description": "Application Error Code",
  "type": "Field",
  "item": 1815,
  "table": "HL70533",
  "longName": "HL7Application Error Code"
});

/**
 * ERR.6 - Application Error Parameter
 */
export const ERR_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ERR.6",
  "version": "2.8",
  "description": "Application Error Parameter",
  "type": "Field",
  "item": 1816,
  "table": "",
  "longName": "HL7Application Error Parameter"
});

/**
 * ERR.7 - Diagnostic Information
 */
export const ERR_7 = datatypes.TX.register(hl7v2Metadata, {
  "title": "ERR.7",
  "version": "2.8",
  "description": "Diagnostic Information",
  "type": "Field",
  "item": 1817,
  "table": "",
  "longName": "HL7Diagnostic Information"
});

/**
 * ERR.8 - User Message
 */
export const ERR_8 = datatypes.TX.register(hl7v2Metadata, {
  "title": "ERR.8",
  "version": "2.8",
  "description": "User Message",
  "type": "Field",
  "item": 1818,
  "table": "",
  "longName": "HL7User Message"
});

/**
 * ERR.9 - Inform Person Indicator
 */
export const ERR_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ERR.9",
  "version": "2.8",
  "description": "Inform Person Indicator",
  "type": "Field",
  "item": 1819,
  "table": "HL70517",
  "longName": "HL7Inform Person Indicator"
});

/**
 * ERR.10 - Override Type
 */
export const ERR_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ERR.10",
  "version": "2.8",
  "description": "Override Type",
  "type": "Field",
  "item": 1820,
  "table": "HL70518",
  "longName": "HL7Override Type"
});

/**
 * ERR.11 - Override Reason Code
 */
export const ERR_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ERR.11",
  "version": "2.8",
  "description": "Override Reason Code",
  "type": "Field",
  "item": 1821,
  "table": "HL70519",
  "longName": "HL7Override Reason Code"
});

/**
 * ERR.12 - Help Desk Contact Point
 */
export const ERR_12 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "ERR.12",
  "version": "2.8",
  "description": "Help Desk Contact Point",
  "type": "Field",
  "item": 1822,
  "table": "",
  "longName": "HL7Help Desk Contact Point"
});
