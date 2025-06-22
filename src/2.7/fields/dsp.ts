import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 DSP Fields
 * 
 * HL7 v2.7 DSP field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DSP.1 - Set ID - DSP
 */
export const DSP_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "DSP.1",
  "version": "2.7",
  "description": "Set ID - DSP",
  "type": "Field",
  "item": 61,
  "table": "",
  "longName": "HL7Set ID - DSP",
  "length": 4
});

/**
 * DSP.2 - Display Level
 */
export const DSP_2 = datatypes.SI.register(hl7v2Metadata, {
  "title": "DSP.2",
  "version": "2.7",
  "description": "Display Level",
  "type": "Field",
  "item": 62,
  "table": "",
  "longName": "HL7Display Level",
  "length": 4
});

/**
 * DSP.3 - Data Line
 */
export const DSP_3 = datatypes.TX.register(hl7v2Metadata, {
  "title": "DSP.3",
  "version": "2.7",
  "description": "Data Line",
  "type": "Field",
  "item": 63,
  "table": "",
  "longName": "HL7Data Line"
});

/**
 * DSP.4 - Logical Break Point
 */
export const DSP_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DSP.4",
  "version": "2.7",
  "description": "Logical Break Point",
  "type": "Field",
  "item": 64,
  "table": "",
  "longName": "HL7Logical Break Point"
});

/**
 * DSP.5 - Result ID
 */
export const DSP_5 = datatypes.TX.register(hl7v2Metadata, {
  "title": "DSP.5",
  "version": "2.7",
  "description": "Result ID",
  "type": "Field",
  "item": 65,
  "table": "",
  "longName": "HL7Result ID"
});
