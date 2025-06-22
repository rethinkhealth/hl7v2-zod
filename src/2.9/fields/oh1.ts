import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 OH1 Fields
 * 
 * HL7 v2.9 OH1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OH1.1 - Set ID
 */
export const OH1_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "OH1.1",
  "version": "2.9",
  "description": "Set ID",
  "type": "Field",
  "item": 3516,
  "table": "",
  "longName": "HL7Set ID"
});

/**
 * OH1.2 - Action Code
 */
export const OH1_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OH1.2",
  "version": "2.9",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * OH1.3 - Employment Status
 */
export const OH1_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OH1.3",
  "version": "2.9",
  "description": "Employment Status",
  "type": "Field",
  "item": 3518,
  "table": "HL70957",
  "longName": "HL7Employment Status"
});

/**
 * OH1.4 - Employment Status Start Date
 */
export const OH1_4 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH1.4",
  "version": "2.9",
  "description": "Employment Status Start Date",
  "type": "Field",
  "item": 3519,
  "table": "",
  "longName": "HL7Employment Status Start Date"
});

/**
 * OH1.5 - Employment Status End Date
 */
export const OH1_5 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH1.5",
  "version": "2.9",
  "description": "Employment Status End Date",
  "type": "Field",
  "item": 3520,
  "table": "",
  "longName": "HL7Employment Status End Date"
});

/**
 * OH1.6 - Entered Date
 */
export const OH1_6 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH1.6",
  "version": "2.9",
  "description": "Entered Date",
  "type": "Field",
  "item": 3521,
  "table": "",
  "longName": "HL7Entered Date"
});

/**
 * OH1.7 - Employment Status Unique Identifier
 */
export const OH1_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OH1.7",
  "version": "2.9",
  "description": "Employment Status Unique Identifier",
  "type": "Field",
  "item": 2432,
  "table": "",
  "longName": "HL7Employment Status Unique Identifier"
});
