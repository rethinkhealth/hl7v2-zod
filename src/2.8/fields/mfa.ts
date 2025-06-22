import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 MFA Fields
 * 
 * HL7 v2.8 MFA field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFA.1 - Record-Level Event Code
 */
export const MFA_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MFA.1",
  "version": "2.8",
  "description": "Record-Level Event Code",
  "type": "Field",
  "item": 664,
  "table": "HL70180",
  "longName": "HL7Record-Level Event Code",
  "length": 3
});

/**
 * MFA.2 - MFN Control ID
 */
export const MFA_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MFA.2",
  "version": "2.8",
  "description": "MFN Control ID",
  "type": "Field",
  "item": 665,
  "table": "",
  "longName": "HL7MFN Control ID"
});

/**
 * MFA.3 - Event Completion Date/Time
 */
export const MFA_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "MFA.3",
  "version": "2.8",
  "description": "Event Completion Date/Time",
  "type": "Field",
  "item": 668,
  "table": "",
  "longName": "HL7Event Completion Date/Time"
});

/**
 * MFA.4 - MFN Record Level Error Return
 */
export const MFA_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "MFA.4",
  "version": "2.8",
  "description": "MFN Record Level Error Return",
  "type": "Field",
  "item": 669,
  "table": "HL70181",
  "longName": "HL7MFN Record Level Error Return"
});

/**
 * MFA.5 - Primary Key Value - MFA
 */
export const MFA_5 = datatypes.VARIES.register(hl7v2Metadata, {
  "title": "MFA.5",
  "version": "2.8",
  "description": "Primary Key Value - MFA",
  "type": "Field",
  "item": 1308,
  "table": "HL79999",
  "longName": "HL7Primary Key Value - MFA"
});

/**
 * MFA.6 - Primary Key Value Type - MFA
 */
export const MFA_6 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MFA.6",
  "version": "2.8",
  "description": "Primary Key Value Type - MFA",
  "type": "Field",
  "item": 1320,
  "table": "HL70355",
  "longName": "HL7Primary Key Value Type - MFA",
  "length": 3
});
