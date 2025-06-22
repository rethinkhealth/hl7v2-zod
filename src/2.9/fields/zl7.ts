import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 ZL7 Fields
 * 
 * HL7 v2.9 ZL7 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ZL7.1 - Display-sort-key
 */
export const ZL7_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "ZL7.1",
  "version": "2.9",
  "description": "Display-sort-key",
  "type": "Field",
  "item": "",
  "table": "",
  "longName": "HL7Display-sort-key"
});

/**
 * ZL7.2 - Display-sort-key
 */
export const ZL7_2 = datatypes.NM.register(hl7v2Metadata, {
  "title": "ZL7.2",
  "version": "2.9",
  "description": "Display-sort-key",
  "type": "Field",
  "item": "",
  "table": "",
  "longName": "HL7Display-sort-key"
});
