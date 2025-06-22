import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 LOC Fields
 * 
 * HL7 v2.7 LOC field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LOC.1 - Primary Key Value - LOC
 */
export const LOC_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LOC.1",
  "version": "2.7",
  "description": "Primary Key Value - LOC",
  "type": "Field",
  "item": 1307,
  "table": "",
  "longName": "HL7Primary Key Value - LOC"
});

/**
 * LOC.2 - Location Description
 */
export const LOC_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LOC.2",
  "version": "2.7",
  "description": "Location Description",
  "type": "Field",
  "item": 944,
  "table": "",
  "longName": "HL7Location Description"
});

/**
 * LOC.3 - Location Type - LOC
 */
export const LOC_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LOC.3",
  "version": "2.7",
  "description": "Location Type - LOC",
  "type": "Field",
  "item": 945,
  "table": "HL70260",
  "longName": "HL7Location Type - LOC"
});

/**
 * LOC.4 - Organization Name - LOC
 */
export const LOC_4 = datatypes.XON.register(hl7v2Metadata, {
  "title": "LOC.4",
  "version": "2.7",
  "description": "Organization Name - LOC",
  "type": "Field",
  "item": 947,
  "table": "",
  "longName": "HL7Organization Name - LOC"
});

/**
 * LOC.5 - Location Address
 */
export const LOC_5 = datatypes.XAD.register(hl7v2Metadata, {
  "title": "LOC.5",
  "version": "2.7",
  "description": "Location Address",
  "type": "Field",
  "item": 948,
  "table": "",
  "longName": "HL7Location Address"
});

/**
 * LOC.6 - Location Phone
 */
export const LOC_6 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "LOC.6",
  "version": "2.7",
  "description": "Location Phone",
  "type": "Field",
  "item": 949,
  "table": "",
  "longName": "HL7Location Phone"
});

/**
 * LOC.7 - License Number
 */
export const LOC_7 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LOC.7",
  "version": "2.7",
  "description": "License Number",
  "type": "Field",
  "item": 951,
  "table": "HL70461",
  "longName": "HL7License Number"
});

/**
 * LOC.8 - Location Equipment
 */
export const LOC_8 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LOC.8",
  "version": "2.7",
  "description": "Location Equipment",
  "type": "Field",
  "item": 953,
  "table": "HL70261",
  "longName": "HL7Location Equipment"
});

/**
 * LOC.9 - Location Service Code
 */
export const LOC_9 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LOC.9",
  "version": "2.7",
  "description": "Location Service Code",
  "type": "Field",
  "item": 1583,
  "table": "HL70442",
  "longName": "HL7Location Service Code"
});
