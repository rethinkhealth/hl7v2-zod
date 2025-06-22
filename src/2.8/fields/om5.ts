import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 OM5 Fields
 * 
 * HL7 v2.8 OM5 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM5.1 - Sequence Number - Test/Observation Master File
 */
export const OM5_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OM5.1",
  "version": "2.8",
  "description": "Sequence Number - Test/Observation Master File",
  "type": "Field",
  "item": 586,
  "table": "",
  "longName": "HL7Sequence Number - Test/Observation Master File"
});

/**
 * OM5.2 - Test/Observations Included Within an Ordered Test Battery
 */
export const OM5_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM5.2",
  "version": "2.8",
  "description": "Test/Observations Included Within an Ordered Test Battery",
  "type": "Field",
  "item": 655,
  "table": "HL79999",
  "longName": "HL7Test/Observations Included Within an Ordered Test Battery"
});

/**
 * OM5.3 - Observation ID Suffixes
 */
export const OM5_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OM5.3",
  "version": "2.8",
  "description": "Observation ID Suffixes",
  "type": "Field",
  "item": 656,
  "table": "",
  "longName": "HL7Observation ID Suffixes"
});
