import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 DPS Fields
 * 
 * HL7 v2.8 DPS field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DPS.1 - Diagnosis Code - MCP
 */
export const DPS_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "DPS.1",
  "version": "2.8",
  "description": "Diagnosis Code - MCP",
  "type": "Field",
  "item": 3472,
  "table": "HL70051",
  "longName": "HL7Diagnosis Code - MCP"
});

/**
 * DPS.2 - Procedure Code
 */
export const DPS_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "DPS.2",
  "version": "2.8",
  "description": "Procedure Code",
  "type": "Field",
  "item": 3484,
  "table": "HL70941",
  "longName": "HL7Procedure Code"
});

/**
 * DPS.3 - Effective Date/Time
 */
export const DPS_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DPS.3",
  "version": "2.8",
  "description": "Effective Date/Time",
  "type": "Field",
  "item": 662,
  "table": "",
  "longName": "HL7Effective Date/Time"
});

/**
 * DPS.4 - Expiration Date/Time
 */
export const DPS_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "DPS.4",
  "version": "2.8",
  "description": "Expiration Date/Time",
  "type": "Field",
  "item": 3473,
  "table": "",
  "longName": "HL7Expiration Date/Time"
});

/**
 * DPS.5 - Type of Limitation
 */
export const DPS_5 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "DPS.5",
  "version": "2.8",
  "description": "Type of Limitation",
  "type": "Field",
  "item": 3474,
  "table": "HL70940",
  "longName": "HL7Type of Limitation"
});
