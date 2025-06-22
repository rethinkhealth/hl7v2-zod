import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 OH3 Fields
 * 
 * HL7 v2.9 OH3 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OH3.1 - Set ID
 */
export const OH3_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "OH3.1",
  "version": "2.9",
  "description": "Set ID",
  "type": "Field",
  "item": 3535,
  "table": "",
  "longName": "HL7Set ID"
});

/**
 * OH3.2 - Action Code
 */
export const OH3_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OH3.2",
  "version": "2.9",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * OH3.3 - Occupation
 */
export const OH3_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OH3.3",
  "version": "2.9",
  "description": "Occupation",
  "type": "Field",
  "item": 3537,
  "table": "HL70958",
  "longName": "HL7Occupation"
});

/**
 * OH3.4 - Industry
 */
export const OH3_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OH3.4",
  "version": "2.9",
  "description": "Industry",
  "type": "Field",
  "item": 3538,
  "table": "HL70955",
  "longName": "HL7Industry"
});

/**
 * OH3.5 - Usual Occupation Duration (years)
 */
export const OH3_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OH3.5",
  "version": "2.9",
  "description": "Usual Occupation Duration (years)",
  "type": "Field",
  "item": 3539,
  "table": "",
  "longName": "HL7Usual Occupation Duration (years)"
});

/**
 * OH3.6 - Start year
 */
export const OH3_6 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH3.6",
  "version": "2.9",
  "description": "Start year",
  "type": "Field",
  "item": 3540,
  "table": "",
  "longName": "HL7Start year"
});

/**
 * OH3.7 - Entered Date
 */
export const OH3_7 = datatypes.DT.register(hl7v2Metadata, {
  "title": "OH3.7",
  "version": "2.9",
  "description": "Entered Date",
  "type": "Field",
  "item": 3542,
  "table": "",
  "longName": "HL7Entered Date"
});

/**
 * OH3.8 - Work Unique Identifier
 */
export const OH3_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OH3.8",
  "version": "2.9",
  "description": "Work Unique Identifier",
  "type": "Field",
  "item": 2446,
  "table": "",
  "longName": "HL7Work Unique Identifier"
});
