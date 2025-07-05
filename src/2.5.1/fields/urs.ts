
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 URS Fields
 * 
 * HL7 v2.5 URS field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * URS.1 - R/U Where Subject Definition
 */
export const URS_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "URS.1",
  "version": "2.5",
  "description": "R/U Where Subject Definition",
  "type": "Field",
  "item": 52,
  "table": "",
  "longName": "HL7R/U Where Subject Definition",
  "length": 20
});

/**
 * URS.2 - R/U When Data Start Date/Time
 */
export const URS_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "URS.2",
  "version": "2.5",
  "description": "R/U When Data Start Date/Time",
  "type": "Field",
  "item": 53,
  "table": "",
  "longName": "HL7R/U When Data Start Date/Time",
  "length": 26
});

/**
 * URS.3 - R/U When Data End Date/Time
 */
export const URS_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "URS.3",
  "version": "2.5",
  "description": "R/U When Data End Date/Time",
  "type": "Field",
  "item": 54,
  "table": "",
  "longName": "HL7R/U When Data End Date/Time",
  "length": 26
});

/**
 * URS.4 - R/U What User Qualifier
 */
export const URS_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "URS.4",
  "version": "2.5",
  "description": "R/U What User Qualifier",
  "type": "Field",
  "item": 55,
  "table": "",
  "longName": "HL7R/U What User Qualifier",
  "length": 20
});

/**
 * URS.5 - R/U Other Results Subject Definition
 */
export const URS_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "URS.5",
  "version": "2.5",
  "description": "R/U Other Results Subject Definition",
  "type": "Field",
  "item": 56,
  "table": "",
  "longName": "HL7R/U Other Results Subject Definition",
  "length": 20
});

/**
 * URS.6 - R/U Which Date/Time Qualifier
 */
export const URS_6 = datatypes.ID.register(hl7v2Metadata, {
  "title": "URS.6",
  "version": "2.5",
  "description": "R/U Which Date/Time Qualifier",
  "type": "Field",
  "item": 57,
  "table": "HL70156",
  "longName": "HL7R/U Which Date/Time Qualifier",
  "length": 12
});

/**
 * URS.7 - R/U Which Date/Time Status Qualifier
 */
export const URS_7 = datatypes.ID.register(hl7v2Metadata, {
  "title": "URS.7",
  "version": "2.5",
  "description": "R/U Which Date/Time Status Qualifier",
  "type": "Field",
  "item": 58,
  "table": "HL70157",
  "longName": "HL7R/U Which Date/Time Status Qualifier",
  "length": 12
});

/**
 * URS.8 - R/U Date/Time Selection Qualifier
 */
export const URS_8 = datatypes.ID.register(hl7v2Metadata, {
  "title": "URS.8",
  "version": "2.5",
  "description": "R/U Date/Time Selection Qualifier",
  "type": "Field",
  "item": 59,
  "table": "HL70158",
  "longName": "HL7R/U Date/Time Selection Qualifier",
  "length": 12
});

/**
 * URS.9 - R/U Quantity/Timing Qualifier
 */
export const URS_9 = datatypes.ST.register(hl7v2Metadata, {
  "title": "URS.9",
  "version": "2.5",
  "description": "R/U Quantity/Timing Qualifier",
  "type": "Field",
  "item": 695,
  "table": "",
  "longName": "HL7R/U Quantity/Timing Qualifier",
  "length": 60
});
