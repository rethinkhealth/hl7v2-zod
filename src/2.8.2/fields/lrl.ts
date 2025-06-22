import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 LRL Fields
 * 
 * HL7 v2.8 LRL field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LRL.1 - Primary Key Value - LRL
 */
export const LRL_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LRL.1",
  "version": "2.8",
  "description": "Primary Key Value - LRL",
  "type": "Field",
  "item": 943,
  "table": "",
  "longName": "HL7Primary Key Value - LRL"
});

/**
 * LRL.2 - Segment Action Code
 */
export const LRL_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "LRL.2",
  "version": "2.8",
  "description": "Segment Action Code",
  "type": "Field",
  "item": 763,
  "table": "HL70206",
  "longName": "HL7Segment Action Code"
});

/**
 * LRL.3 - Segment Unique Key
 */
export const LRL_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LRL.3",
  "version": "2.8",
  "description": "Segment Unique Key",
  "type": "Field",
  "item": 764,
  "table": "",
  "longName": "HL7Segment Unique Key"
});

/**
 * LRL.4 - Location Relationship ID
 */
export const LRL_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LRL.4",
  "version": "2.8",
  "description": "Location Relationship ID",
  "type": "Field",
  "item": 1277,
  "table": "HL70325",
  "longName": "HL7Location Relationship ID"
});

/**
 * LRL.5 - Organizational Location Relationship Value
 */
export const LRL_5 = datatypes.XON.register(hl7v2Metadata, {
  "title": "LRL.5",
  "version": "2.8",
  "description": "Organizational Location Relationship Value",
  "type": "Field",
  "item": 1301,
  "table": "",
  "longName": "HL7Organizational Location Relationship Value"
});

/**
 * LRL.6 - Patient Location Relationship Value
 */
export const LRL_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LRL.6",
  "version": "2.8",
  "description": "Patient Location Relationship Value",
  "type": "Field",
  "item": 1292,
  "table": "",
  "longName": "HL7Patient Location Relationship Value"
});
