import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 LDP Fields
 * 
 * HL7 v2.9 LDP field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LDP.1 - Primary Key Value - LDP
 */
export const LDP_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LDP.1",
  "version": "2.9",
  "description": "Primary Key Value - LDP",
  "type": "Field",
  "item": 963,
  "table": "",
  "longName": "HL7Primary Key Value - LDP"
});

/**
 * LDP.2 - Location Department
 */
export const LDP_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LDP.2",
  "version": "2.9",
  "description": "Location Department",
  "type": "Field",
  "item": 964,
  "table": "HL70264",
  "longName": "HL7Location Department"
});

/**
 * LDP.3 - Location Service
 */
export const LDP_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LDP.3",
  "version": "2.9",
  "description": "Location Service",
  "type": "Field",
  "item": 965,
  "table": "HL70069",
  "longName": "HL7Location Service"
});

/**
 * LDP.4 - Specialty Type
 */
export const LDP_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LDP.4",
  "version": "2.9",
  "description": "Specialty Type",
  "type": "Field",
  "item": 966,
  "table": "HL70265",
  "longName": "HL7Specialty Type"
});

/**
 * LDP.5 - Valid Patient Classes
 */
export const LDP_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LDP.5",
  "version": "2.9",
  "description": "Valid Patient Classes",
  "type": "Field",
  "item": 967,
  "table": "HL70004",
  "longName": "HL7Valid Patient Classes"
});

/**
 * LDP.6 - Active/Inactive Flag
 */
export const LDP_6 = datatypes.ID.register(hl7v2Metadata, {
  "title": "LDP.6",
  "version": "2.9",
  "description": "Active/Inactive Flag",
  "type": "Field",
  "item": 675,
  "table": "HL70183",
  "longName": "HL7Active/Inactive Flag",
  "length": 1
});

/**
 * LDP.7 - Activation Date - LDP
 */
export const LDP_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "LDP.7",
  "version": "2.9",
  "description": "Activation Date - LDP",
  "type": "Field",
  "item": 969,
  "table": "",
  "longName": "HL7Activation Date - LDP"
});

/**
 * LDP.8 - Inactivation Date - LDP
 */
export const LDP_8 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "LDP.8",
  "version": "2.9",
  "description": "Inactivation Date - LDP",
  "type": "Field",
  "item": 970,
  "table": "",
  "longName": "HL7Inactivation Date - LDP"
});

/**
 * LDP.9 - Inactivated Reason
 */
export const LDP_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LDP.9",
  "version": "2.9",
  "description": "Inactivated Reason",
  "type": "Field",
  "item": 971,
  "table": "",
  "longName": "HL7Inactivated Reason"
});

/**
 * LDP.10 - Visiting Hours
 */
export const LDP_10 = datatypes.ST.register(hl7v2Metadata, {
  "title": "LDP.10",
  "version": "2.9",
  "description": "Visiting Hours",
  "type": "Field",
  "item": 976,
  "table": "HL70267",
  "longName": "HL7Visiting Hours"
});

/**
 * LDP.11 - Contact Phone
 */
export const LDP_11 = datatypes.XTN.register(hl7v2Metadata, {
  "title": "LDP.11",
  "version": "2.9",
  "description": "Contact Phone",
  "type": "Field",
  "item": 978,
  "table": "",
  "longName": "HL7Contact Phone"
});

/**
 * LDP.12 - Location Cost Center
 */
export const LDP_12 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "LDP.12",
  "version": "2.9",
  "description": "Location Cost Center",
  "type": "Field",
  "item": 1584,
  "table": "HL70462",
  "longName": "HL7Location Cost Center"
});
