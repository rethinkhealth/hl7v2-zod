import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 ECD Fields
 * 
 * HL7 v2.8 ECD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ECD.1 - Reference Command Number
 */
export const ECD_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "ECD.1",
  "version": "2.8",
  "description": "Reference Command Number",
  "type": "Field",
  "item": 1390,
  "table": "",
  "longName": "HL7Reference Command Number"
});

/**
 * ECD.2 - Remote Control Command
 */
export const ECD_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "ECD.2",
  "version": "2.8",
  "description": "Remote Control Command",
  "type": "Field",
  "item": 1391,
  "table": "HL70368",
  "longName": "HL7Remote Control Command"
});

/**
 * ECD.3 - Response Required
 */
export const ECD_3 = datatypes.ID.register(hl7v2Metadata, {
  "title": "ECD.3",
  "version": "2.8",
  "description": "Response Required",
  "type": "Field",
  "item": 1392,
  "table": "HL70136",
  "longName": "HL7Response Required",
  "length": 1
});

/**
 * ECD.5 - Parameters
 */
export const ECD_5 = datatypes.TX.register(hl7v2Metadata, {
  "title": "ECD.5",
  "version": "2.8",
  "description": "Parameters",
  "type": "Field",
  "item": 1394,
  "table": "",
  "longName": "HL7Parameters"
});
