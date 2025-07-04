import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 SID Fields
 * 
 * HL7 v2.8 SID field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SID.1 - Application/Method Identifier
 */
export const SID_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SID.1",
  "version": "2.8",
  "description": "Application/Method Identifier",
  "type": "Field",
  "item": 1426,
  "table": "HL79999",
  "longName": "HL7Application/Method Identifier"
});

/**
 * SID.2 - Substance Lot Number
 */
export const SID_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SID.2",
  "version": "2.8",
  "description": "Substance Lot Number",
  "type": "Field",
  "item": 1129,
  "table": "",
  "longName": "HL7Substance Lot Number"
});

/**
 * SID.3 - Substance Container Identifier
 */
export const SID_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SID.3",
  "version": "2.8",
  "description": "Substance Container Identifier",
  "type": "Field",
  "item": 1428,
  "table": "",
  "longName": "HL7Substance Container Identifier"
});

/**
 * SID.4 - Substance Manufacturer Identifier
 */
export const SID_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SID.4",
  "version": "2.8",
  "description": "Substance Manufacturer Identifier",
  "type": "Field",
  "item": 1429,
  "table": "HL70385",
  "longName": "HL7Substance Manufacturer Identifier"
});
