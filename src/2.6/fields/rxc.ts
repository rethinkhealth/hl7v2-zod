
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 RXC Fields
 * 
 * HL7 v2.6 RXC field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXC.1 - RX Component Type
 */
export const RXC_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "RXC.1",
  "version": "2.6",
  "description": "RX Component Type",
  "type": "Field",
  "item": 313,
  "table": "HL70166",
  "longName": "HL7RX Component Type",
  "length": 1
});

/**
 * RXC.2 - Component Code
 */
export const RXC_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXC.2",
  "version": "2.6",
  "description": "Component Code",
  "type": "Field",
  "item": 314,
  "table": "HL79999",
  "longName": "HL7Component Code",
  "length": 250
});

/**
 * RXC.3 - Component Amount
 */
export const RXC_3 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXC.3",
  "version": "2.6",
  "description": "Component Amount",
  "type": "Field",
  "item": 315,
  "table": "",
  "longName": "HL7Component Amount",
  "length": 20
});

/**
 * RXC.4 - Component Units
 */
export const RXC_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXC.4",
  "version": "2.6",
  "description": "Component Units",
  "type": "Field",
  "item": 316,
  "table": "HL79999",
  "longName": "HL7Component Units",
  "length": 250
});

/**
 * RXC.5 - Component Strength
 */
export const RXC_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXC.5",
  "version": "2.6",
  "description": "Component Strength",
  "type": "Field",
  "item": 1124,
  "table": "",
  "longName": "HL7Component Strength",
  "length": 20
});

/**
 * RXC.6 - Component Strength Units
 */
export const RXC_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXC.6",
  "version": "2.6",
  "description": "Component Strength Units",
  "type": "Field",
  "item": 1125,
  "table": "HL79999",
  "longName": "HL7Component Strength Units",
  "length": 250
});

/**
 * RXC.7 - Supplementary Code
 */
export const RXC_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXC.7",
  "version": "2.6",
  "description": "Supplementary Code",
  "type": "Field",
  "item": 1476,
  "table": "HL79999",
  "longName": "HL7Supplementary Code",
  "length": 250
});

/**
 * RXC.8 - Component Drug Strength Volume
 */
export const RXC_8 = datatypes.NM.register(hl7v2Metadata, {
  "title": "RXC.8",
  "version": "2.6",
  "description": "Component Drug Strength Volume",
  "type": "Field",
  "item": 1671,
  "table": "",
  "longName": "HL7Component Drug Strength Volume",
  "length": 5
});

/**
 * RXC.9 - Component Drug Strength Volume Units
 */
export const RXC_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "RXC.9",
  "version": "2.6",
  "description": "Component Drug Strength Volume Units",
  "type": "Field",
  "item": 1672,
  "table": "HL79999",
  "longName": "HL7Component Drug Strength Volume Units",
  "length": 250
});
