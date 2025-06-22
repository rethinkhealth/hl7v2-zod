import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 AIP Fields
 * 
 * HL7 v2.7 AIP field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AIP.1 - Set ID - AIP
 */
export const AIP_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "AIP.1",
  "version": "2.7",
  "description": "Set ID - AIP",
  "type": "Field",
  "item": 906,
  "table": "",
  "longName": "HL7Set ID - AIP",
  "length": 4
});

/**
 * AIP.2 - Segment Action Code
 */
export const AIP_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "AIP.2",
  "version": "2.7",
  "description": "Segment Action Code",
  "type": "Field",
  "item": 763,
  "table": "HL70206",
  "longName": "HL7Segment Action Code",
  "length": 1
});

/**
 * AIP.3 - Personnel Resource ID
 */
export const AIP_3 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "AIP.3",
  "version": "2.7",
  "description": "Personnel Resource ID",
  "type": "Field",
  "item": 913,
  "table": "",
  "longName": "HL7Personnel Resource ID"
});

/**
 * AIP.4 - Resource Type
 */
export const AIP_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AIP.4",
  "version": "2.7",
  "description": "Resource Type",
  "type": "Field",
  "item": 907,
  "table": "HL70182",
  "longName": "HL7Resource Type"
});

/**
 * AIP.5 - Resource Group
 */
export const AIP_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AIP.5",
  "version": "2.7",
  "description": "Resource Group",
  "type": "Field",
  "item": 899,
  "table": "",
  "longName": "HL7Resource Group"
});

/**
 * AIP.6 - Start Date/Time
 */
export const AIP_6 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "AIP.6",
  "version": "2.7",
  "description": "Start Date/Time",
  "type": "Field",
  "item": 1202,
  "table": "",
  "longName": "HL7Start Date/Time"
});

/**
 * AIP.7 - Start Date/Time Offset
 */
export const AIP_7 = datatypes.NM.register(hl7v2Metadata, {
  "title": "AIP.7",
  "version": "2.7",
  "description": "Start Date/Time Offset",
  "type": "Field",
  "item": 891,
  "table": "",
  "longName": "HL7Start Date/Time Offset"
});

/**
 * AIP.8 - Start Date/Time Offset Units
 */
export const AIP_8 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "AIP.8",
  "version": "2.7",
  "description": "Start Date/Time Offset Units",
  "type": "Field",
  "item": 892,
  "table": "",
  "longName": "HL7Start Date/Time Offset Units"
});

/**
 * AIP.9 - Duration
 */
export const AIP_9 = datatypes.NM.register(hl7v2Metadata, {
  "title": "AIP.9",
  "version": "2.7",
  "description": "Duration",
  "type": "Field",
  "item": 893,
  "table": "",
  "longName": "HL7Duration"
});

/**
 * AIP.10 - Duration Units
 */
export const AIP_10 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "AIP.10",
  "version": "2.7",
  "description": "Duration Units",
  "type": "Field",
  "item": 894,
  "table": "",
  "longName": "HL7Duration Units"
});

/**
 * AIP.11 - Allow Substitution Code
 */
export const AIP_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AIP.11",
  "version": "2.7",
  "description": "Allow Substitution Code",
  "type": "Field",
  "item": 895,
  "table": "HL70279",
  "longName": "HL7Allow Substitution Code"
});

/**
 * AIP.12 - Filler Status Code
 */
export const AIP_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AIP.12",
  "version": "2.7",
  "description": "Filler Status Code",
  "type": "Field",
  "item": 889,
  "table": "HL70278",
  "longName": "HL7Filler Status Code"
});
