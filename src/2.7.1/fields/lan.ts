import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 LAN Fields
 * 
 * HL7 v2.7 LAN field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LAN.1 - Set ID - LAN
 */
export const LAN_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "LAN.1",
  "version": "2.7",
  "description": "Set ID - LAN",
  "type": "Field",
  "item": 1455,
  "table": "",
  "longName": "HL7Set ID - LAN",
  "length": 4
});

/**
 * LAN.2 - Language Code
 */
export const LAN_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LAN.2",
  "version": "2.7",
  "description": "Language Code",
  "type": "Field",
  "item": 1456,
  "table": "HL70296",
  "longName": "HL7Language Code"
});

/**
 * LAN.3 - Language Ability Code
 */
export const LAN_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LAN.3",
  "version": "2.7",
  "description": "Language Ability Code",
  "type": "Field",
  "item": 1457,
  "table": "HL70403",
  "longName": "HL7Language Ability Code"
});

/**
 * LAN.4 - Language Proficiency Code
 */
export const LAN_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LAN.4",
  "version": "2.7",
  "description": "Language Proficiency Code",
  "type": "Field",
  "item": 1458,
  "table": "HL70404",
  "longName": "HL7Language Proficiency Code"
});
