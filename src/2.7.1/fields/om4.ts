import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 OM4 Fields
 * 
 * HL7 v2.7 OM4 field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM4.1 - Sequence Number - Test/Observation Master File
 */
export const OM4_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OM4.1",
  "version": "2.7",
  "description": "Sequence Number - Test/Observation Master File",
  "type": "Field",
  "item": 586,
  "table": "",
  "longName": "HL7Sequence Number - Test/Observation Master File"
});

/**
 * OM4.2 - Derived Specimen
 */
export const OM4_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OM4.2",
  "version": "2.7",
  "description": "Derived Specimen",
  "type": "Field",
  "item": 642,
  "table": "HL70170",
  "longName": "HL7Derived Specimen",
  "length": 1
});

/**
 * OM4.3 - Container Description
 */
export const OM4_3 = datatypes.TX.register(hl7v2Metadata, {
  "title": "OM4.3",
  "version": "2.7",
  "description": "Container Description",
  "type": "Field",
  "item": 643,
  "table": "",
  "longName": "HL7Container Description",
  "length": 60
});

/**
 * OM4.4 - Container Volume
 */
export const OM4_4 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OM4.4",
  "version": "2.7",
  "description": "Container Volume",
  "type": "Field",
  "item": 644,
  "table": "",
  "longName": "HL7Container Volume"
});

/**
 * OM4.5 - Container Units
 */
export const OM4_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM4.5",
  "version": "2.7",
  "description": "Container Units",
  "type": "Field",
  "item": 645,
  "table": "HL79999",
  "longName": "HL7Container Units"
});

/**
 * OM4.6 - Specimen
 */
export const OM4_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM4.6",
  "version": "2.7",
  "description": "Specimen",
  "type": "Field",
  "item": 646,
  "table": "HL79999",
  "longName": "HL7Specimen"
});

/**
 * OM4.7 - Additive
 */
export const OM4_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OM4.7",
  "version": "2.7",
  "description": "Additive",
  "type": "Field",
  "item": 647,
  "table": "HL70371",
  "longName": "HL7Additive"
});

/**
 * OM4.8 - Preparation
 */
export const OM4_8 = datatypes.TX.register(hl7v2Metadata, {
  "title": "OM4.8",
  "version": "2.7",
  "description": "Preparation",
  "type": "Field",
  "item": 648,
  "table": "",
  "longName": "HL7Preparation"
});

/**
 * OM4.9 - Special Handling Requirements
 */
export const OM4_9 = datatypes.TX.register(hl7v2Metadata, {
  "title": "OM4.9",
  "version": "2.7",
  "description": "Special Handling Requirements",
  "type": "Field",
  "item": 649,
  "table": "",
  "longName": "HL7Special Handling Requirements"
});

/**
 * OM4.10 - Normal Collection Volume
 */
export const OM4_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OM4.10",
  "version": "2.7",
  "description": "Normal Collection Volume",
  "type": "Field",
  "item": 650,
  "table": "",
  "longName": "HL7Normal Collection Volume"
});

/**
 * OM4.11 - Minimum Collection Volume
 */
export const OM4_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OM4.11",
  "version": "2.7",
  "description": "Minimum Collection Volume",
  "type": "Field",
  "item": 651,
  "table": "",
  "longName": "HL7Minimum Collection Volume"
});

/**
 * OM4.12 - Specimen Requirements
 */
export const OM4_12 = datatypes.TX.register(hl7v2Metadata, {
  "title": "OM4.12",
  "version": "2.7",
  "description": "Specimen Requirements",
  "type": "Field",
  "item": 652,
  "table": "",
  "longName": "HL7Specimen Requirements"
});

/**
 * OM4.13 - Specimen Priorities
 */
export const OM4_13 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OM4.13",
  "version": "2.7",
  "description": "Specimen Priorities",
  "type": "Field",
  "item": 653,
  "table": "HL70027",
  "longName": "HL7Specimen Priorities",
  "length": 1
});

/**
 * OM4.14 - Specimen Retention Time
 */
export const OM4_14 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OM4.14",
  "version": "2.7",
  "description": "Specimen Retention Time",
  "type": "Field",
  "item": 654,
  "table": "",
  "longName": "HL7Specimen Retention Time"
});
