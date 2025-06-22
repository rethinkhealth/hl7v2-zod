import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 SGT Fields
 * 
 * HL7 v2.8 SGT field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SGT.1 - Set ID - SGT
 */
export const SGT_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "SGT.1",
  "version": "2.8",
  "description": "Set ID - SGT",
  "type": "Field",
  "item": 3394,
  "table": "",
  "longName": "HL7Set ID - SGT"
});

/**
 * SGT.2 - Segment Group Name
 */
export const SGT_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SGT.2",
  "version": "2.8",
  "description": "Segment Group Name",
  "type": "Field",
  "item": 3395,
  "table": "",
  "longName": "HL7Segment Group Name"
});
