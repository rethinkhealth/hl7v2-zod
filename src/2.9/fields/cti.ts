import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 CTI Fields
 * 
 * HL7 v2.9 CTI field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CTI.1 - Sponsor Study ID
 */
export const CTI_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "CTI.1",
  "version": "2.9",
  "description": "Sponsor Study ID",
  "type": "Field",
  "item": 1011,
  "table": "",
  "longName": "HL7Sponsor Study ID"
});

/**
 * CTI.2 - Study Phase Identifier
 */
export const CTI_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CTI.2",
  "version": "2.9",
  "description": "Study Phase Identifier",
  "type": "Field",
  "item": 1022,
  "table": "",
  "longName": "HL7Study Phase Identifier"
});

/**
 * CTI.3 - Study Scheduled Time Point
 */
export const CTI_3 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CTI.3",
  "version": "2.9",
  "description": "Study Scheduled Time Point",
  "type": "Field",
  "item": 1055,
  "table": "HL70595",
  "longName": "HL7Study Scheduled Time Point"
});

/**
 * CTI.4 - Action Code
 */
export const CTI_4 = datatypes.ID.register(hl7v2Metadata, {
  "title": "CTI.4",
  "version": "2.9",
  "description": "Action Code",
  "type": "Field",
  "item": 816,
  "table": "",
  "longName": "HL7Action Code",
  "length": 2
});
