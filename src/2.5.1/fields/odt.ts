
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 ODT Fields
 * 
 * HL7 v2.5 ODT field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ODT.1 - Tray Type
 */
export const ODT_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ODT.1",
  "version": "2.5",
  "description": "Tray Type",
  "type": "Field",
  "item": 273,
  "table": "HL70160",
  "longName": "HL7Tray Type",
  "length": 250
});

/**
 * ODT.2 - Service Period
 */
export const ODT_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ODT.2",
  "version": "2.5",
  "description": "Service Period",
  "type": "Field",
  "item": 270,
  "table": "",
  "longName": "HL7Service Period",
  "length": 250
});

/**
 * ODT.3 - Text Instruction
 */
export const ODT_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ODT.3",
  "version": "2.5",
  "description": "Text Instruction",
  "type": "Field",
  "item": 272,
  "table": "",
  "longName": "HL7Text Instruction",
  "length": 80
});
