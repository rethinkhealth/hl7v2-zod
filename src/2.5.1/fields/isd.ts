
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 ISD Fields
 * 
 * HL7 v2.5 ISD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ISD.1 - Reference Interaction Number (unique identifier)
 */
export const ISD_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "ISD.1",
  "version": "2.5",
  "description": "Reference Interaction Number (unique identifier)",
  "type": "Field",
  "item": 1326,
  "table": "",
  "longName": "HL7Reference Interaction Number (unique identifier)",
  "length": 20
});

/**
 * ISD.2 - Interaction Type Identifier
 */
export const ISD_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ISD.2",
  "version": "2.5",
  "description": "Interaction Type Identifier",
  "type": "Field",
  "item": 1327,
  "table": "HL70368",
  "longName": "HL7Interaction Type Identifier",
  "length": 250
});

/**
 * ISD.3 - Interaction Active State
 */
export const ISD_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "ISD.3",
  "version": "2.5",
  "description": "Interaction Active State",
  "type": "Field",
  "item": 1328,
  "table": "HL70387",
  "longName": "HL7Interaction Active State",
  "length": 250
});
