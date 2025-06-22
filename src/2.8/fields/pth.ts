import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 PTH Fields
 * 
 * HL7 v2.8 PTH field definitions
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
  "version": "2.8",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "HL70206",
  "longName": "HL7Action Code",
  "length": 2
});

/**
 * PTH.2 - Pathway ID
 */
export const PTH_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PTH.2",
  "version": "2.8",
  "description": "Pathway ID",
  "type": "Field",
  "item": 1207,
  "table": "",
  "longName": "HL7Pathway ID"
});

/**
 * PTH.3 - Pathway Instance ID
 */
export const PTH_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "PTH.3",
  "version": "2.8",
  "description": "Pathway Instance ID",
  "type": "Field",
  "item": 1208,
  "table": "",
  "longName": "HL7Pathway Instance ID"
});

/**
 * PTH.4 - Pathway Established Date/Time
 */
export const PTH_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PTH.4",
  "version": "2.8",
  "description": "Pathway Established Date/Time",
  "type": "Field",
  "item": 1209,
  "table": "",
  "longName": "HL7Pathway Established Date/Time"
});

/**
 * PTH.5 - Pathway Life Cycle Status
 */
export const PTH_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PTH.5",
  "version": "2.8",
  "description": "Pathway Life Cycle Status",
  "type": "Field",
  "item": 1210,
  "table": "",
  "longName": "HL7Pathway Life Cycle Status"
});

/**
 * PTH.6 - Change Pathway Life Cycle Status Date/Time
 */
export const PTH_6 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PTH.6",
  "version": "2.8",
  "description": "Change Pathway Life Cycle Status Date/Time",
  "type": "Field",
  "item": 1211,
  "table": "",
  "longName": "HL7Change Pathway Life Cycle Status Date/Time"
});

/**
 * PTH.7 - Mood Code
 */
export const PTH_7 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "PTH.7",
  "version": "2.8",
  "description": "Mood Code",
  "type": "Field",
  "item": 2239,
  "table": "HL70725",
  "longName": "HL7Mood Code"
});
