import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 AIS Fields
 * 
 * HL7 v2.6 AIS field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AIS.1 - Set ID - AIS
 */
export const AIS_1 = datatypes.SI.register(hl7v2Metadata, {
  "title": "AIS.1",
  "version": "2.6",
  "description": "Set ID - AIS",
  "type": "Field",
  "item": 890,
  "table": "",
  "longName": "HL7Set ID - AIS",
  "length": 4
});

/**
 * AIS.2 - Segment Action Code
 */
export const AIS_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "AIS.2",
  "version": "2.6",
  "description": "Segment Action Code",
  "type": "Field",
  "item": 763,
  "table": "HL70206",
  "longName": "HL7Segment Action Code",
  "length": 3
});

/**
 * AIS.3 - Universal Service Identifier
 */
export const AIS_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AIS.3",
  "version": "2.6",
  "description": "Universal Service Identifier",
  "type": "Field",
  "item": 238,
  "table": "",
  "longName": "HL7Universal Service Identifier",
  "length": 705
});

/**
 * AIS.4 - Start Date/Time
 */
export const AIS_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "AIS.4",
  "version": "2.6",
  "description": "Start Date/Time",
  "type": "Field",
  "item": 1202,
  "table": "",
  "longName": "HL7Start Date/Time",
  "length": 24
});

/**
 * AIS.5 - Start Date/Time Offset
 */
export const AIS_5 = datatypes.NM.register(hl7v2Metadata, {
  "title": "AIS.5",
  "version": "2.6",
  "description": "Start Date/Time Offset",
  "type": "Field",
  "item": 891,
  "table": "",
  "longName": "HL7Start Date/Time Offset",
  "length": 20
});

/**
 * AIS.6 - Start Date/Time Offset Units
 */
export const AIS_6 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "AIS.6",
  "version": "2.6",
  "description": "Start Date/Time Offset Units",
  "type": "Field",
  "item": 892,
  "table": "",
  "longName": "HL7Start Date/Time Offset Units",
  "length": 250
});

/**
 * AIS.7 - Duration
 */
export const AIS_7 = datatypes.NM.register(hl7v2Metadata, {
  "title": "AIS.7",
  "version": "2.6",
  "description": "Duration",
  "type": "Field",
  "item": 893,
  "table": "",
  "longName": "HL7Duration",
  "length": 20
});

/**
 * AIS.8 - Duration Units
 */
export const AIS_8 = datatypes.CNE.register(hl7v2Metadata, {
  "title": "AIS.8",
  "version": "2.6",
  "description": "Duration Units",
  "type": "Field",
  "item": 894,
  "table": "",
  "longName": "HL7Duration Units",
  "length": 250
});

/**
 * AIS.9 - Allow Substitution Code
 */
export const AIS_9 = datatypes.IS.register(hl7v2Metadata, {
  "title": "AIS.9",
  "version": "2.6",
  "description": "Allow Substitution Code",
  "type": "Field",
  "item": 895,
  "table": "HL70279",
  "longName": "HL7Allow Substitution Code",
  "length": 10
});

/**
 * AIS.10 - Filler Status Code
 */
export const AIS_10 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AIS.10",
  "version": "2.6",
  "description": "Filler Status Code",
  "type": "Field",
  "item": 889,
  "table": "HL70278",
  "longName": "HL7Filler Status Code",
  "length": 250
});

/**
 * AIS.11 - Placer Supplemental Service Information
 */
export const AIS_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AIS.11",
  "version": "2.6",
  "description": "Placer Supplemental Service Information",
  "type": "Field",
  "item": 1474,
  "table": "HL70411",
  "longName": "HL7Placer Supplemental Service Information",
  "length": 705
});

/**
 * AIS.12 - Filler Supplemental Service Information
 */
export const AIS_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "AIS.12",
  "version": "2.6",
  "description": "Filler Supplemental Service Information",
  "type": "Field",
  "item": 1475,
  "table": "HL70411",
  "longName": "HL7Filler Supplemental Service Information",
  "length": 705
});
