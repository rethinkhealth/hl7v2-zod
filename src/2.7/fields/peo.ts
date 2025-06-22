import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 PEO Fields
 * 
 * HL7 v2.7 PEO field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PEO.1 - Event Identifiers Used
 */
export const PEO_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PEO.1",
  "version": "2.7",
  "description": "Event Identifiers Used",
  "type": "Field",
  "item": 1073,
  "table": "HL79999",
  "longName": "HL7Event Identifiers Used"
});

/**
 * PEO.2 - Event Symptom/Diagnosis Code
 */
export const PEO_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PEO.2",
  "version": "2.7",
  "description": "Event Symptom/Diagnosis Code",
  "type": "Field",
  "item": 1074,
  "table": "HL79999",
  "longName": "HL7Event Symptom/Diagnosis Code"
});

/**
 * PEO.3 - Event Onset Date/Time
 */
export const PEO_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PEO.3",
  "version": "2.7",
  "description": "Event Onset Date/Time",
  "type": "Field",
  "item": 1075,
  "table": "",
  "longName": "HL7Event Onset Date/Time"
});

/**
 * PEO.4 - Event Exacerbation Date/Time
 */
export const PEO_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PEO.4",
  "version": "2.7",
  "description": "Event Exacerbation Date/Time",
  "type": "Field",
  "item": 1076,
  "table": "",
  "longName": "HL7Event Exacerbation Date/Time"
});

/**
 * PEO.5 - Event Improved Date/Time
 */
export const PEO_5 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PEO.5",
  "version": "2.7",
  "description": "Event Improved Date/Time",
  "type": "Field",
  "item": 1077,
  "table": "",
  "longName": "HL7Event Improved Date/Time"
});

/**
 * PEO.6 - Event Ended Data/Time
 */
export const PEO_6 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PEO.6",
  "version": "2.7",
  "description": "Event Ended Data/Time",
  "type": "Field",
  "item": 1078,
  "table": "",
  "longName": "HL7Event Ended Data/Time"
});

/**
 * PEO.7 - Event Location Occurred Address
 */
export const PEO_7 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "PEO.7",
  "version": "2.7",
  "description": "Event Location Occurred Address",
  "type": "Field",
  "item": 1079,
  "table": "",
  "longName": "HL7Event Location Occurred Address"
});

/**
 * PEO.8 - Event Qualification
 */
export const PEO_8 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PEO.8",
  "version": "2.7",
  "description": "Event Qualification",
  "type": "Field",
  "item": 1080,
  "table": "HL70237",
  "longName": "HL7Event Qualification",
  "length": 1
});

/**
 * PEO.9 - Event Serious
 */
export const PEO_9 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PEO.9",
  "version": "2.7",
  "description": "Event Serious",
  "type": "Field",
  "item": 1081,
  "table": "HL70238",
  "longName": "HL7Event Serious",
  "length": 1
});

/**
 * PEO.10 - Event Expected
 */
export const PEO_10 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PEO.10",
  "version": "2.7",
  "description": "Event Expected",
  "type": "Field",
  "item": 1082,
  "table": "HL70239",
  "longName": "HL7Event Expected",
  "length": 1
});

/**
 * PEO.11 - Event Outcome
 */
export const PEO_11 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PEO.11",
  "version": "2.7",
  "description": "Event Outcome",
  "type": "Field",
  "item": 1083,
  "table": "HL70240",
  "longName": "HL7Event Outcome",
  "length": 1
});

/**
 * PEO.12 - Patient Outcome
 */
export const PEO_12 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PEO.12",
  "version": "2.7",
  "description": "Patient Outcome",
  "type": "Field",
  "item": 1084,
  "table": "HL70241",
  "longName": "HL7Patient Outcome",
  "length": 1
});

/**
 * PEO.13 - Event Description from Others
 */
export const PEO_13 = datatypes.FT.register(hl7v2Metadata, {
  "title": "PEO.13",
  "version": "2.7",
  "description": "Event Description from Others",
  "type": "Field",
  "item": 1085,
  "table": "",
  "longName": "HL7Event Description from Others"
});

/**
 * PEO.14 - Event Description from Original Reporter
 */
export const PEO_14 = datatypes.FT.register(hl7v2Metadata, {
  "title": "PEO.14",
  "version": "2.7",
  "description": "Event Description from Original Reporter",
  "type": "Field",
  "item": 1086,
  "table": "",
  "longName": "HL7Event Description from Original Reporter"
});

/**
 * PEO.15 - Event Description from Patient
 */
export const PEO_15 = datatypes.FT.register(hl7v2Metadata, {
  "title": "PEO.15",
  "version": "2.7",
  "description": "Event Description from Patient",
  "type": "Field",
  "item": 1087,
  "table": "",
  "longName": "HL7Event Description from Patient"
});

/**
 * PEO.16 - Event Description from Practitioner
 */
export const PEO_16 = datatypes.FT.register(hl7v2Metadata, {
  "title": "PEO.16",
  "version": "2.7",
  "description": "Event Description from Practitioner",
  "type": "Field",
  "item": 1088,
  "table": "",
  "longName": "HL7Event Description from Practitioner"
});

/**
 * PEO.17 - Event Description from Autopsy
 */
export const PEO_17 = datatypes.FT.register(hl7v2Metadata, {
  "title": "PEO.17",
  "version": "2.7",
  "description": "Event Description from Autopsy",
  "type": "Field",
  "item": 1089,
  "table": "",
  "longName": "HL7Event Description from Autopsy"
});

/**
 * PEO.18 - Cause Of Death
 */
export const PEO_18 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "PEO.18",
  "version": "2.7",
  "description": "Cause Of Death",
  "type": "Field",
  "item": 1090,
  "table": "HL79999",
  "longName": "HL7Cause Of Death"
});

/**
 * PEO.19 - Primary Observer Name
 */
export const PEO_19 = datatypes.XPN.register(hl7v2Metadata, {
  "title": "PEO.19",
  "version": "2.7",
  "description": "Primary Observer Name",
  "type": "Field",
  "item": 1091,
  "table": "",
  "longName": "HL7Primary Observer Name"
});

/**
 * PEO.20 - Primary Observer Address
 */
export const PEO_20 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "PEO.20",
  "version": "2.7",
  "description": "Primary Observer Address",
  "type": "Field",
  "item": 1092,
  "table": "",
  "longName": "HL7Primary Observer Address"
});

/**
 * PEO.21 - Primary Observer Telephone
 */
export const PEO_21 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "PEO.21",
  "version": "2.7",
  "description": "Primary Observer Telephone",
  "type": "Field",
  "item": 1093,
  "table": "",
  "longName": "HL7Primary Observer Telephone"
});

/**
 * PEO.22 - Primary Observer's Qualification
 */
export const PEO_22 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PEO.22",
  "version": "2.7",
  "description": "Primary Observer's Qualification",
  "type": "Field",
  "item": 1094,
  "table": "HL70242",
  "longName": "HL7Primary Observer's Qualification",
  "length": 1
});

/**
 * PEO.23 - Confirmation Provided By
 */
export const PEO_23 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PEO.23",
  "version": "2.7",
  "description": "Confirmation Provided By",
  "type": "Field",
  "item": 1095,
  "table": "HL70242",
  "longName": "HL7Confirmation Provided By",
  "length": 1
});

/**
 * PEO.24 - Primary Observer Aware Date/Time
 */
export const PEO_24 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "PEO.24",
  "version": "2.7",
  "description": "Primary Observer Aware Date/Time",
  "type": "Field",
  "item": 1096,
  "table": "",
  "longName": "HL7Primary Observer Aware Date/Time"
});

/**
 * PEO.25 - Primary Observer's identity May Be Divulged
 */
export const PEO_25 = datatypes.ID.register(hl7v2Metadata, {
  "title": "PEO.25",
  "version": "2.7",
  "description": "Primary Observer's identity May Be Divulged",
  "type": "Field",
  "item": 1097,
  "table": "HL70243",
  "longName": "HL7Primary Observer's identity May Be Divulged",
  "length": 2
});
