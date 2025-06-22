import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 MSH Fields
 * 
 * HL7 v2.7 MSH field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MSH.1 - Field Separator
 */
export const MSH_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.1",
  "version": "2.7",
  "description": "Field Separator",
  "type": "Field",
  "item": 1,
  "table": "",
  "longName": "HL7Field Separator",
  "length": 1
});

/**
 * MSH.2 - Encoding Characters
 */
export const MSH_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.2",
  "version": "2.7",
  "description": "Encoding Characters",
  "type": "Field",
  "item": 2,
  "table": "",
  "longName": "HL7Encoding Characters",
  "length": 5
});

/**
 * MSH.3 - Sending Application
 */
export const MSH_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.3",
  "version": "2.7",
  "description": "Sending Application",
  "type": "Field",
  "item": 3,
  "table": "HL70361",
  "longName": "HL7Sending Application"
});

/**
 * MSH.4 - Sending Facility
 */
export const MSH_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.4",
  "version": "2.7",
  "description": "Sending Facility",
  "type": "Field",
  "item": 4,
  "table": "HL70362",
  "longName": "HL7Sending Facility"
});

/**
 * MSH.5 - Receiving Application
 */
export const MSH_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.5",
  "version": "2.7",
  "description": "Receiving Application",
  "type": "Field",
  "item": 5,
  "table": "HL70361",
  "longName": "HL7Receiving Application"
});

/**
 * MSH.6 - Receiving Facility
 */
export const MSH_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.6",
  "version": "2.7",
  "description": "Receiving Facility",
  "type": "Field",
  "item": 6,
  "table": "HL70362",
  "longName": "HL7Receiving Facility"
});

/**
 * MSH.7 - Date/Time of Message
 */
export const MSH_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "MSH.7",
  "version": "2.7",
  "description": "Date/Time of Message",
  "type": "Field",
  "item": 7,
  "table": "",
  "longName": "HL7Date/Time of Message"
});

/**
 * MSH.8 - Security
 */
export const MSH_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.8",
  "version": "2.7",
  "description": "Security",
  "type": "Field",
  "item": 8,
  "table": "",
  "longName": "HL7Security"
});

/**
 * MSH.9 - Message Type
 */
export const MSH_9 = datatypes.MSG.register(hl7v2Metadata, {
  "title": "MSH.9",
  "version": "2.7",
  "description": "Message Type",
  "type": "Field",
  "item": 9,
  "table": "",
  "longName": "HL7Message Type"
});

/**
 * MSH.10 - Message Control ID
 */
export const MSH_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.10",
  "version": "2.7",
  "description": "Message Control ID",
  "type": "Field",
  "item": 10,
  "table": "",
  "longName": "HL7Message Control ID",
  "length": 199
});

/**
 * MSH.11 - Processing ID
 */
export const MSH_11 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.11",
  "version": "2.7",
  "description": "Processing ID",
  "type": "Field",
  "item": 11,
  "table": "",
  "longName": "HL7Processing ID"
});

/**
 * MSH.12 - Version ID
 */
export const MSH_12 = datatypes.VID.register(hl7v2Metadata, {
  "title": "MSH.12",
  "version": "2.7",
  "description": "Version ID",
  "type": "Field",
  "item": 12,
  "table": "",
  "longName": "HL7Version ID"
});

/**
 * MSH.13 - Sequence Number
 */
export const MSH_13 = datatypes.NM.register(hl7v2Metadata, {
  "title": "MSH.13",
  "version": "2.7",
  "description": "Sequence Number",
  "type": "Field",
  "item": 13,
  "table": "",
  "longName": "HL7Sequence Number"
});

/**
 * MSH.14 - Continuation Pointer
 */
export const MSH_14 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.14",
  "version": "2.7",
  "description": "Continuation Pointer",
  "type": "Field",
  "item": 14,
  "table": "",
  "longName": "HL7Continuation Pointer"
});

/**
 * MSH.15 - Accept Acknowledgment Type
 */
export const MSH_15 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MSH.15",
  "version": "2.7",
  "description": "Accept Acknowledgment Type",
  "type": "Field",
  "item": 15,
  "table": "HL70155",
  "longName": "HL7Accept Acknowledgment Type",
  "length": 2
});

/**
 * MSH.16 - Application Acknowledgment Type
 */
export const MSH_16 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MSH.16",
  "version": "2.7",
  "description": "Application Acknowledgment Type",
  "type": "Field",
  "item": 16,
  "table": "HL70155",
  "longName": "HL7Application Acknowledgment Type",
  "length": 2
});

/**
 * MSH.17 - Country Code
 */
export const MSH_17 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MSH.17",
  "version": "2.7",
  "description": "Country Code",
  "type": "Field",
  "item": 17,
  "table": "HL70399",
  "longName": "HL7Country Code",
  "length": 3
});

/**
 * MSH.18 - Character Set
 */
export const MSH_18 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MSH.18",
  "version": "2.7",
  "description": "Character Set",
  "type": "Field",
  "item": 692,
  "table": "HL70211",
  "longName": "HL7Character Set",
  "length": 15
});

/**
 * MSH.19 - Principal Language Of Message
 */
export const MSH_19 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "MSH.19",
  "version": "2.7",
  "description": "Principal Language Of Message",
  "type": "Field",
  "item": 693,
  "table": "",
  "longName": "HL7Principal Language Of Message"
});

/**
 * MSH.20 - Alternate Character Set Handling Scheme
 */
export const MSH_20 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MSH.20",
  "version": "2.7",
  "description": "Alternate Character Set Handling Scheme",
  "type": "Field",
  "item": 1317,
  "table": "HL70356",
  "longName": "HL7Alternate Character Set Handling Scheme",
  "length": 13
});

/**
 * MSH.21 - Message Profile Identifier
 */
export const MSH_21 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.21",
  "version": "2.7",
  "description": "Message Profile Identifier",
  "type": "Field",
  "item": 1598,
  "table": "",
  "longName": "HL7Message Profile Identifier"
});

/**
 * MSH.22 - Sending Responsible Organization
 */
export const MSH_22 = datatypes.XON.register(hl7v2Metadata, {
  "title": "MSH.22",
  "version": "2.7",
  "description": "Sending Responsible Organization",
  "type": "Field",
  "item": 1823,
  "table": "",
  "longName": "HL7Sending Responsible Organization"
});

/**
 * MSH.23 - Receiving Responsible Organization
 */
export const MSH_23 = datatypes.XON.register(hl7v2Metadata, {
  "title": "MSH.23",
  "version": "2.7",
  "description": "Receiving Responsible Organization",
  "type": "Field",
  "item": 1824,
  "table": "",
  "longName": "HL7Receiving Responsible Organization"
});

/**
 * MSH.24 - Sending Network Address
 */
export const MSH_24 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.24",
  "version": "2.7",
  "description": "Sending Network Address",
  "type": "Field",
  "item": 1825,
  "table": "",
  "longName": "HL7Sending Network Address"
});

/**
 * MSH.25 - Receiving Network Address
 */
export const MSH_25 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MSH.25",
  "version": "2.7",
  "description": "Receiving Network Address",
  "type": "Field",
  "item": 1826,
  "table": "",
  "longName": "HL7Receiving Network Address"
});
