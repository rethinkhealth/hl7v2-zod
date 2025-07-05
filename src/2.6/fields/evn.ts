
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 EVN Fields
 * 
 * HL7 v2.6 EVN field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EVN.1 - Event Type Code
 */
export const EVN_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "EVN.1",
  "version": "2.6",
  "description": "Event Type Code",
  "type": "Field",
  "item": 99,
  "table": "HL70003",
  "longName": "HL7Event Type Code"
});

/**
 * EVN.2 - Recorded Date/Time
 */
export const EVN_2 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "EVN.2",
  "version": "2.6",
  "description": "Recorded Date/Time",
  "type": "Field",
  "item": 100,
  "table": "",
  "longName": "HL7Recorded Date/Time",
  "length": 24
});

/**
 * EVN.3 - Date/Time Planned Event
 */
export const EVN_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "EVN.3",
  "version": "2.6",
  "description": "Date/Time Planned Event",
  "type": "Field",
  "item": 101,
  "table": "",
  "longName": "HL7Date/Time Planned Event",
  "length": 24
});

/**
 * EVN.4 - Event Reason Code
 */
export const EVN_4 = datatypes.IS.register(hl7v2Metadata, {
  "title": "EVN.4",
  "version": "2.6",
  "description": "Event Reason Code",
  "type": "Field",
  "item": 102,
  "table": "HL70062",
  "longName": "HL7Event Reason Code",
  "length": 3
});

/**
 * EVN.5 - Operator ID
 */
export const EVN_5 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "EVN.5",
  "version": "2.6",
  "description": "Operator ID",
  "type": "Field",
  "item": 103,
  "table": "HL70188",
  "longName": "HL7Operator ID",
  "length": 250
});

/**
 * EVN.6 - Event Occurred
 */
export const EVN_6 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "EVN.6",
  "version": "2.6",
  "description": "Event Occurred",
  "type": "Field",
  "item": 1278,
  "table": "",
  "longName": "HL7Event Occurred",
  "length": 24
});

/**
 * EVN.7 - Event Facility
 */
export const EVN_7 = datatypes.ST.register(hl7v2Metadata, {
  "title": "EVN.7",
  "version": "2.6",
  "description": "Event Facility",
  "type": "Field",
  "item": 1534,
  "table": "",
  "longName": "HL7Event Facility",
  "length": 241
});
