import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 CSS Fields
 * 
 * HL7 v2.5 CSS field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CSS.1 - Study Scheduled Time Point
 */
export const CSS_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CSS.1",
  "version": "2.5",
  "description": "Study Scheduled Time Point",
  "type": "Field",
  "item": 1055,
  "table": "",
  "longName": "HL7Study Scheduled Time Point",
  "length": 250
});

/**
 * CSS.2 - Study Scheduled Patient Time Point
 */
export const CSS_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CSS.2",
  "version": "2.5",
  "description": "Study Scheduled Patient Time Point",
  "type": "Field",
  "item": 1056,
  "table": "",
  "longName": "HL7Study Scheduled Patient Time Point",
  "length": 26
});

/**
 * CSS.3 - Study Quality Control Codes
 */
export const CSS_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CSS.3",
  "version": "2.5",
  "description": "Study Quality Control Codes",
  "type": "Field",
  "item": 1057,
  "table": "",
  "longName": "HL7Study Quality Control Codes",
  "length": 250
});
