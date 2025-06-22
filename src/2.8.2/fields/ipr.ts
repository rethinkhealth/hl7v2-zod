import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 IPR Fields
 * 
 * HL7 v2.8 IPR field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IPR.1 - IPR Identifier
 */
export const IPR_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPR.1",
  "version": "2.8",
  "description": "IPR Identifier",
  "type": "Field",
  "item": 2030,
  "table": "",
  "longName": "HL7IPR Identifier"
});

/**
 * IPR.2 - Provider Cross Reference Identifier
 */
export const IPR_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPR.2",
  "version": "2.8",
  "description": "Provider Cross Reference Identifier",
  "type": "Field",
  "item": 2031,
  "table": "",
  "longName": "HL7Provider Cross Reference Identifier"
});

/**
 * IPR.3 - Payer Cross Reference Identifier
 */
export const IPR_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPR.3",
  "version": "2.8",
  "description": "Payer Cross Reference Identifier",
  "type": "Field",
  "item": 2032,
  "table": "",
  "longName": "HL7Payer Cross Reference Identifier"
});

/**
 * IPR.4 - IPR Status
 */
export const IPR_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "IPR.4",
  "version": "2.8",
  "description": "IPR Status",
  "type": "Field",
  "item": 2033,
  "table": "HL70571",
  "longName": "HL7IPR Status"
});

/**
 * IPR.5 - IPR Date/Time
 */
export const IPR_5 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IPR.5",
  "version": "2.8",
  "description": "IPR Date/Time",
  "type": "Field",
  "item": 2034,
  "table": "",
  "longName": "HL7IPR Date/Time"
});

/**
 * IPR.6 - Adjudicated/Paid Amount
 */
export const IPR_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPR.6",
  "version": "2.8",
  "description": "Adjudicated/Paid Amount",
  "type": "Field",
  "item": 2035,
  "table": "",
  "longName": "HL7Adjudicated/Paid Amount"
});

/**
 * IPR.7 - Expected Payment Date/Time
 */
export const IPR_7 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "IPR.7",
  "version": "2.8",
  "description": "Expected Payment Date/Time",
  "type": "Field",
  "item": 2036,
  "table": "",
  "longName": "HL7Expected Payment Date/Time"
});

/**
 * IPR.8 - IPR Checksum
 */
export const IPR_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "IPR.8",
  "version": "2.8",
  "description": "IPR Checksum",
  "type": "Field",
  "item": 2037,
  "table": "",
  "longName": "HL7IPR Checksum"
});
