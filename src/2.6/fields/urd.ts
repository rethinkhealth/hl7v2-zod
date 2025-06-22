import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 URD Fields
 * 
 * HL7 v2.6 URD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * URD.1 - R/U Date/Time
 */
export const URD_1 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "URD.1",
  "version": "2.6",
  "description": "R/U Date/Time",
  "type": "Field",
  "item": 45,
  "table": "",
  "longName": "HL7R/U Date/Time",
  "length": 24
});

/**
 * URD.2 - Report Priority
 */
export const URD_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "URD.2",
  "version": "2.6",
  "description": "Report Priority",
  "type": "Field",
  "item": 46,
  "table": "HL70109",
  "longName": "HL7Report Priority",
  "length": 1
});

/**
 * URD.3 - R/U Who Subject Definition
 */
export const URD_3 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "URD.3",
  "version": "2.6",
  "description": "R/U Who Subject Definition",
  "type": "Field",
  "item": 47,
  "table": "",
  "longName": "HL7R/U Who Subject Definition",
  "length": 250
});

/**
 * URD.4 - R/U What Subject Definition
 */
export const URD_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "URD.4",
  "version": "2.6",
  "description": "R/U What Subject Definition",
  "type": "Field",
  "item": 48,
  "table": "HL70048",
  "longName": "HL7R/U What Subject Definition",
  "length": 250
});

/**
 * URD.5 - R/U What Department Code
 */
export const URD_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "URD.5",
  "version": "2.6",
  "description": "R/U What Department Code",
  "type": "Field",
  "item": 49,
  "table": "",
  "longName": "HL7R/U What Department Code",
  "length": 250
});

/**
 * URD.6 - R/U Display/Print Locations
 */
export const URD_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "URD.6",
  "version": "2.6",
  "description": "R/U Display/Print Locations",
  "type": "Field",
  "item": 50,
  "table": "",
  "longName": "HL7R/U Display/Print Locations",
  "length": 20
});

/**
 * URD.7 - R/U Results Level
 */
export const URD_7 = datatypes.ID.register(hl7v2Metadata, {
  "title": "URD.7",
  "version": "2.6",
  "description": "R/U Results Level",
  "type": "Field",
  "item": 51,
  "table": "HL70108",
  "longName": "HL7R/U Results Level",
  "length": 1
});
