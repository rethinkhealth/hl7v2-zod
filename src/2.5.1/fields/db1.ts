
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 DB1 Fields
 * 
 * HL7 v2.5 DB1 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DB1.1 - Set ID - DB1
 */
export const DB1_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "DB1.1",
  "version": "2.5",
  "description": "Set ID - DB1",
  "type": "Field",
  "item": 1283,
  "table": "",
  "longName": "HL7Set ID - DB1",
  "length": 4
});

/**
 * DB1.2 - Disabled Person Code
 */
export const DB1_2 = datatypes.IS.register(hl7v2Metadata, {
  "title": "DB1.2",
  "version": "2.5",
  "description": "Disabled Person Code",
  "type": "Field",
  "item": 1284,
  "table": "HL70334",
  "longName": "HL7Disabled Person Code",
  "length": 2
});

/**
 * DB1.3 - Disabled Person Identifier
 */
export const DB1_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "DB1.3",
  "version": "2.5",
  "description": "Disabled Person Identifier",
  "type": "Field",
  "item": 1285,
  "table": "",
  "longName": "HL7Disabled Person Identifier",
  "length": 250
});

/**
 * DB1.4 - Disabled Indicator
 */
export const DB1_4 = datatypes.ID.register(hl7v2Metadata, {
  "title": "DB1.4",
  "version": "2.5",
  "description": "Disabled Indicator",
  "type": "Field",
  "item": 1286,
  "table": "HL70136",
  "longName": "HL7Disabled Indicator",
  "length": 1
});

/**
 * DB1.5 - Disability Start Date
 */
export const DB1_5 = datatypes.DT.register(hl7v2Metadata, {
  "title": "DB1.5",
  "version": "2.5",
  "description": "Disability Start Date",
  "type": "Field",
  "item": 1287,
  "table": "",
  "longName": "HL7Disability Start Date",
  "length": 8
});

/**
 * DB1.6 - Disability End Date
 */
export const DB1_6 = datatypes.DT.register(hl7v2Metadata, {
  "title": "DB1.6",
  "version": "2.5",
  "description": "Disability End Date",
  "type": "Field",
  "item": 1288,
  "table": "",
  "longName": "HL7Disability End Date",
  "length": 8
});

/**
 * DB1.7 - Disability Return to Work Date
 */
export const DB1_7 = datatypes.DT.register(hl7v2Metadata, {
  "title": "DB1.7",
  "version": "2.5",
  "description": "Disability Return to Work Date",
  "type": "Field",
  "item": 1289,
  "table": "",
  "longName": "HL7Disability Return to Work Date",
  "length": 8
});

/**
 * DB1.8 - Disability Unable to Work Date
 */
export const DB1_8 = datatypes.DT.register(hl7v2Metadata, {
  "title": "DB1.8",
  "version": "2.5",
  "description": "Disability Unable to Work Date",
  "type": "Field",
  "item": 1290,
  "table": "",
  "longName": "HL7Disability Unable to Work Date",
  "length": 8
});
