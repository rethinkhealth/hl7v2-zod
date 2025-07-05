
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 PTH Fields
 * 
 * HL7 v2.5 PTH field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PTH.1 - Action Code
 */
export const PTH_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PTH.1",
  "version": "2.5",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "HL70287",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * PTH.2 - Pathway ID
 */
export const PTH_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PTH.2",
  "version": "2.5",
  "description": "Pathway ID",
  "type": "Field",
  "item": 1207,
  "table": "",
  "longName": "HL7Pathway ID",
  "length": 250
});

/**
 * PTH.3 - Pathway Instance ID
 */
export const PTH_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PTH.3",
  "version": "2.5",
  "description": "Pathway Instance ID",
  "type": "Field",
  "item": 1208,
  "table": "",
  "longName": "HL7Pathway Instance ID",
  "length": 60
});

/**
 * PTH.4 - Pathway Established Date/Time
 */
export const PTH_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PTH.4",
  "version": "2.5",
  "description": "Pathway Established Date/Time",
  "type": "Field",
  "item": 1209,
  "table": "",
  "longName": "HL7Pathway Established Date/Time",
  "length": 26
});

/**
 * PTH.5 - Pathway Life Cycle Status
 */
export const PTH_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PTH.5",
  "version": "2.5",
  "description": "Pathway Life Cycle Status",
  "type": "Field",
  "item": 1210,
  "table": "",
  "longName": "HL7Pathway Life Cycle Status",
  "length": 250
});

/**
 * PTH.6 - Change Pathway Life Cycle Status Date/Time
 */
export const PTH_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PTH.6",
  "version": "2.5",
  "description": "Change Pathway Life Cycle Status Date/Time",
  "type": "Field",
  "item": 1211,
  "table": "",
  "longName": "HL7Change Pathway Life Cycle Status Date/Time",
  "length": 26
});
