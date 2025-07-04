import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 EQU Fields
 * 
 * HL7 v2.8 EQU field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EQU.1 - Equipment Instance Identifier
 */
export const EQU_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "EQU.1",
  "version": "2.8",
  "description": "Equipment Instance Identifier",
  "type": "Field",
  "item": 1479,
  "table": "",
  "longName": "HL7Equipment Instance Identifier"
});

/**
 * EQU.2 - Event Date/Time
 */
export const EQU_2 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "EQU.2",
  "version": "2.8",
  "description": "Event Date/Time",
  "type": "Field",
  "item": 1322,
  "table": "",
  "longName": "HL7Event Date/Time"
});

/**
 * EQU.3 - Equipment State
 */
export const EQU_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "EQU.3",
  "version": "2.8",
  "description": "Equipment State",
  "type": "Field",
  "item": 1323,
  "table": "HL70365",
  "longName": "HL7Equipment State"
});

/**
 * EQU.4 - Local/Remote Control State
 */
export const EQU_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "EQU.4",
  "version": "2.8",
  "description": "Local/Remote Control State",
  "type": "Field",
  "item": 1324,
  "table": "HL70366",
  "longName": "HL7Local/Remote Control State"
});

/**
 * EQU.5 - Alert Level
 */
export const EQU_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "EQU.5",
  "version": "2.8",
  "description": "Alert Level",
  "type": "Field",
  "item": 1325,
  "table": "HL70367",
  "longName": "HL7Alert Level"
});
