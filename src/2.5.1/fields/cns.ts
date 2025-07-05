
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.5 CNS Fields
 * 
 * HL7 v2.5 CNS field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CNS.1 - Starting Notification Reference Number
 */
export const CNS_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "CNS.1",
  "version": "2.5",
  "description": "Starting Notification Reference Number",
  "type": "Field",
  "item": 1402,
  "table": "",
  "longName": "HL7Starting Notification Reference Number",
  "length": 20
});

/**
 * CNS.2 - Ending Notification Reference Number
 */
export const CNS_2 = datatypes.NM.register(hl7v2Metadata, {
  "title": "CNS.2",
  "version": "2.5",
  "description": "Ending Notification Reference Number",
  "type": "Field",
  "item": 1403,
  "table": "",
  "longName": "HL7Ending Notification Reference Number",
  "length": 20
});

/**
 * CNS.3 - Starting Notification Date/Time
 */
export const CNS_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CNS.3",
  "version": "2.5",
  "description": "Starting Notification Date/Time",
  "type": "Field",
  "item": 1404,
  "table": "",
  "longName": "HL7Starting Notification Date/Time",
  "length": 26
});

/**
 * CNS.4 - Ending Notification Date/Time
 */
export const CNS_4 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CNS.4",
  "version": "2.5",
  "description": "Ending Notification Date/Time",
  "type": "Field",
  "item": 1405,
  "table": "",
  "longName": "HL7Ending Notification Date/Time",
  "length": 26
});

/**
 * CNS.5 - Starting Notification Code
 */
export const CNS_5 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CNS.5",
  "version": "2.5",
  "description": "Starting Notification Code",
  "type": "Field",
  "item": 1406,
  "table": "",
  "longName": "HL7Starting Notification Code",
  "length": 250
});

/**
 * CNS.6 - Ending Notification Code
 */
export const CNS_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CNS.6",
  "version": "2.5",
  "description": "Ending Notification Code",
  "type": "Field",
  "item": 1407,
  "table": "",
  "longName": "HL7Ending Notification Code",
  "length": 250
});
