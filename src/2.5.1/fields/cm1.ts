import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 CM1 Fields
 * 
 * HL7 v2.5 CM1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CM1.1 - Set ID - CM1
 */
export const CM1_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "CM1.1",
  "version": "2.5",
  "description": "Set ID - CM1",
  "type": "Field",
  "item": 1021,
  "table": "",
  "longName": "HL7Set ID - CM1",
  "length": 4
});

/**
 * CM1.2 - Study Phase Identifier
 */
export const CM1_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CM1.2",
  "version": "2.5",
  "description": "Study Phase Identifier",
  "type": "Field",
  "item": 1022,
  "table": "",
  "longName": "HL7Study Phase Identifier",
  "length": 250
});

/**
 * CM1.3 - Description of Study Phase
 */
export const CM1_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CM1.3",
  "version": "2.5",
  "description": "Description of Study Phase",
  "type": "Field",
  "item": 1023,
  "table": "",
  "longName": "HL7Description of Study Phase",
  "length": 300
});
