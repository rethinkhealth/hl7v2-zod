
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 STZ Fields
 * 
 * HL7 v2.6 STZ field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * STZ.1 - Sterilization Type
 */
export const STZ_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "STZ.1",
  "version": "2.6",
  "description": "Sterilization Type",
  "type": "Field",
  "item": 2213,
  "table": "HL70806",
  "longName": "HL7Sterilization Type",
  "length": 250
});

/**
 * STZ.2 - Sterilization Cycle
 */
export const STZ_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "STZ.2",
  "version": "2.6",
  "description": "Sterilization Cycle",
  "type": "Field",
  "item": 2214,
  "table": "",
  "longName": "HL7Sterilization Cycle",
  "length": 250
});

/**
 * STZ.3 - Maintenance Cycle
 */
export const STZ_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "STZ.3",
  "version": "2.6",
  "description": "Maintenance Cycle",
  "type": "Field",
  "item": 2215,
  "table": "HL70809",
  "longName": "HL7Maintenance Cycle",
  "length": 250
});

/**
 * STZ.4 - Maintenance Type
 */
export const STZ_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "STZ.4",
  "version": "2.6",
  "description": "Maintenance Type",
  "type": "Field",
  "item": 2216,
  "table": "HL70811",
  "longName": "HL7Maintenance Type",
  "length": 250
});
