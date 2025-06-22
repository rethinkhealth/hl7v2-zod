import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 OH4 Fields
 * 
 * HL7 v2.9 OH4 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OH4.1 - Set ID
 */
export const OH4_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "OH4.1",
  "version": "2.9",
  "description": "Set ID",
  "type": "Field",
  "item": 3543,
  "table": "",
  "longName": "HL7Set ID"
});

/**
 * OH4.2 - Action Code
 */
export const OH4_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OH4.2",
  "version": "2.9",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * OH4.3 - Combat Zone Start Date
 */
export const OH4_3 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH4.3",
  "version": "2.9",
  "description": "Combat Zone Start Date",
  "type": "Field",
  "item": 3544,
  "table": "",
  "longName": "HL7Combat Zone Start Date"
});

/**
 * OH4.4 - Combat Zone  End Date
 */
export const OH4_4 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH4.4",
  "version": "2.9",
  "description": "Combat Zone  End Date",
  "type": "Field",
  "item": 3545,
  "table": "",
  "longName": "HL7Combat Zone  End Date"
});

/**
 * OH4.5 - Entered Date
 */
export const OH4_5 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH4.5",
  "version": "2.9",
  "description": "Entered Date",
  "type": "Field",
  "item": 3524,
  "table": "",
  "longName": "HL7Entered Date"
});

/**
 * OH4.6 - Combat Zone Unique Identifier
 */
export const OH4_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OH4.6",
  "version": "2.9",
  "description": "Combat Zone Unique Identifier",
  "type": "Field",
  "item": 2449,
  "table": "",
  "longName": "HL7Combat Zone Unique Identifier"
});
