import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 ISD Fields
 * 
 * HL7 v2.7 ISD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ISD.1 - Reference Interaction Number
 */
export const ISD_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "ISD.1",
  "version": "2.7",
  "description": "Reference Interaction Number",
  "type": "Field",
  "item": 1326,
  "table": "",
  "longName": "HL7Reference Interaction Number"
});

/**
 * ISD.2 - Interaction Type Identifier
 */
export const ISD_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ISD.2",
  "version": "2.7",
  "description": "Interaction Type Identifier",
  "type": "Field",
  "item": 1327,
  "table": "HL70368",
  "longName": "HL7Interaction Type Identifier"
});

/**
 * ISD.3 - Interaction Active State
 */
export const ISD_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ISD.3",
  "version": "2.7",
  "description": "Interaction Active State",
  "type": "Field",
  "item": 1328,
  "table": "HL70387",
  "longName": "HL7Interaction Active State"
});
