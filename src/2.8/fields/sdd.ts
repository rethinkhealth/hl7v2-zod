import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 SDD Fields
 * 
 * HL7 v2.8 SDD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SDD.1 - Lot Number
 */
export const SDD_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SDD.1",
  "version": "2.8",
  "description": "Lot Number",
  "type": "Field",
  "item": 2098,
  "table": "",
  "longName": "HL7Lot Number"
});

/**
 * SDD.2 - Device Number
 */
export const SDD_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SDD.2",
  "version": "2.8",
  "description": "Device Number",
  "type": "Field",
  "item": 2099,
  "table": "",
  "longName": "HL7Device Number"
});

/**
 * SDD.3 - Device Name
 */
export const SDD_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SDD.3",
  "version": "2.8",
  "description": "Device Name",
  "type": "Field",
  "item": 2281,
  "table": "",
  "longName": "HL7Device Name"
});

/**
 * SDD.4 - Device Data State
 */
export const SDD_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SDD.4",
  "version": "2.8",
  "description": "Device Data State",
  "type": "Field",
  "item": 2100,
  "table": "HL70667",
  "longName": "HL7Device Data State"
});

/**
 * SDD.5 - Load Status
 */
export const SDD_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "SDD.5",
  "version": "2.8",
  "description": "Load Status",
  "type": "Field",
  "item": 2101,
  "table": "HL70669",
  "longName": "HL7Load Status"
});

/**
 * SDD.6 - Control Code
 */
export const SDD_6 = datatypes.NM.register(hl7v2Metadata, {
  "title": "SDD.6",
  "version": "2.8",
  "description": "Control Code",
  "type": "Field",
  "item": 2102,
  "table": "",
  "longName": "HL7Control Code"
});

/**
 * SDD.7 - Operator Name
 */
export const SDD_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "SDD.7",
  "version": "2.8",
  "description": "Operator Name",
  "type": "Field",
  "item": 2103,
  "table": "",
  "longName": "HL7Operator Name"
});
