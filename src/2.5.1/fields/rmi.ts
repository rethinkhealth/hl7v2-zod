
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 RMI Fields
 * 
 * HL7 v2.5 RMI field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RMI.1 - Risk Management Incident Code
 */
export const RMI_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RMI.1",
  "version": "2.5",
  "description": "Risk Management Incident Code",
  "type": "Field",
  "item": 1530,
  "table": "HL70427",
  "longName": "HL7Risk Management Incident Code",
  "length": 250
});

/**
 * RMI.2 - Date/Time Incident
 */
export const RMI_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RMI.2",
  "version": "2.5",
  "description": "Date/Time Incident",
  "type": "Field",
  "item": 1531,
  "table": "",
  "longName": "HL7Date/Time Incident",
  "length": 26
});

/**
 * RMI.3 - Incident Type Code
 */
export const RMI_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "RMI.3",
  "version": "2.5",
  "description": "Incident Type Code",
  "type": "Field",
  "item": 1533,
  "table": "HL70428",
  "longName": "HL7Incident Type Code",
  "length": 250
});
