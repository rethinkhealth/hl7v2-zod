import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 AL1 Fields
 * 
 * HL7 v2.7 AL1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AL1.1 - Set ID - AL1
 */
export const AL1_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "AL1.1",
  "version": "2.7",
  "description": "Set ID - AL1",
  "type": "Field",
  "item": 203,
  "table": "",
  "longName": "HL7Set ID - AL1",
  "length": 4
});

/**
 * AL1.2 - Allergen Type Code
 */
export const AL1_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AL1.2",
  "version": "2.7",
  "description": "Allergen Type Code",
  "type": "Field",
  "item": 204,
  "table": "HL70127",
  "longName": "HL7Allergen Type Code"
});

/**
 * AL1.3 - Allergen Code/Mnemonic/Description
 */
export const AL1_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AL1.3",
  "version": "2.7",
  "description": "Allergen Code/Mnemonic/Description",
  "type": "Field",
  "item": 205,
  "table": "",
  "longName": "HL7Allergen Code/Mnemonic/Description"
});

/**
 * AL1.4 - Allergy Severity Code
 */
export const AL1_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AL1.4",
  "version": "2.7",
  "description": "Allergy Severity Code",
  "type": "Field",
  "item": 206,
  "table": "HL70128",
  "longName": "HL7Allergy Severity Code"
});

/**
 * AL1.5 - Allergy Reaction Code
 */
export const AL1_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "AL1.5",
  "version": "2.7",
  "description": "Allergy Reaction Code",
  "type": "Field",
  "item": 207,
  "table": "",
  "longName": "HL7Allergy Reaction Code"
});
