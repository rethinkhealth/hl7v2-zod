import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 ODS Fields
 * 
 * HL7 v2.7 ODS field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ODS.1 - Type
 */
export const ODS_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ODS.1",
  "version": "2.7",
  "description": "Type",
  "type": "Field",
  "item": 269,
  "table": "HL70159",
  "longName": "HL7Type",
  "length": 1
});

/**
 * ODS.2 - Service Period
 */
export const ODS_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ODS.2",
  "version": "2.7",
  "description": "Service Period",
  "type": "Field",
  "item": 270,
  "table": "HL79999",
  "longName": "HL7Service Period"
});

/**
 * ODS.3 - Diet, Supplement, or Preference Code
 */
export const ODS_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ODS.3",
  "version": "2.7",
  "description": "Diet, Supplement, or Preference Code",
  "type": "Field",
  "item": 271,
  "table": "HL79999",
  "longName": "HL7Diet, Supplement, or Preference Code"
});

/**
 * ODS.4 - Text Instruction
 */
export const ODS_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ODS.4",
  "version": "2.7",
  "description": "Text Instruction",
  "type": "Field",
  "item": 272,
  "table": "",
  "longName": "HL7Text Instruction"
});
