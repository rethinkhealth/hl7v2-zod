import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 RGS Fields
 * 
 * HL7 v2.8 RGS field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RGS.1 - Set ID - RGS
 */
export const RGS_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "RGS.1",
  "version": "2.8",
  "description": "Set ID - RGS",
  "type": "Field",
  "item": 1203,
  "table": "",
  "longName": "HL7Set ID - RGS",
  "length": 4
});

/**
 * RGS.2 - Segment Action Code
 */
export const RGS_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RGS.2",
  "version": "2.8",
  "description": "Segment Action Code",
  "type": "Field",
  "item": 763,
  "table": "HL70206",
  "longName": "HL7Segment Action Code"
});

/**
 * RGS.3 - Resource Group ID
 */
export const RGS_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RGS.3",
  "version": "2.8",
  "description": "Resource Group ID",
  "type": "Field",
  "item": 1204,
  "table": "",
  "longName": "HL7Resource Group ID"
});
