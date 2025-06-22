import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 OVR Fields
 * 
 * HL7 v2.7 OVR field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OVR.1 - Business Rule Override Type
 */
export const OVR_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OVR.1",
  "version": "2.7",
  "description": "Business Rule Override Type",
  "type": "Field",
  "item": 1829,
  "table": "HL70518",
  "longName": "HL7Business Rule Override Type"
});

/**
 * OVR.2 - Business Rule Override Code
 */
export const OVR_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OVR.2",
  "version": "2.7",
  "description": "Business Rule Override Code",
  "type": "Field",
  "item": 1830,
  "table": "HL70521",
  "longName": "HL7Business Rule Override Code"
});

/**
 * OVR.3 - Override Comments
 */
export const OVR_3 = datatypes.TX.register(hl7v2Metadata, {
  "title": "OVR.3",
  "version": "2.7",
  "description": "Override Comments",
  "type": "Field",
  "item": 1831,
  "table": "",
  "longName": "HL7Override Comments"
});

/**
 * OVR.4 - Override Entered By
 */
export const OVR_4 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "OVR.4",
  "version": "2.7",
  "description": "Override Entered By",
  "type": "Field",
  "item": 1832,
  "table": "",
  "longName": "HL7Override Entered By"
});

/**
 * OVR.5 - Override Authorized By
 */
export const OVR_5 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "OVR.5",
  "version": "2.7",
  "description": "Override Authorized By",
  "type": "Field",
  "item": 1833,
  "table": "",
  "longName": "HL7Override Authorized By"
});
