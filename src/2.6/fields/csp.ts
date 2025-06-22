import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 CSP Fields
 * 
 * HL7 v2.6 CSP field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CSP.1 - Study Phase Identifier
 */
export const CSP_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CSP.1",
  "version": "2.6",
  "description": "Study Phase Identifier",
  "type": "Field",
  "item": 1022,
  "table": "",
  "longName": "HL7Study Phase Identifier",
  "length": 705
});

/**
 * CSP.2 - Date/time Study Phase Began
 */
export const CSP_2 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CSP.2",
  "version": "2.6",
  "description": "Date/time Study Phase Began",
  "type": "Field",
  "item": 1052,
  "table": "",
  "longName": "HL7Date/time Study Phase Began",
  "length": 24
});

/**
 * CSP.3 - Date/time Study Phase Ended
 */
export const CSP_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "CSP.3",
  "version": "2.6",
  "description": "Date/time Study Phase Ended",
  "type": "Field",
  "item": 1053,
  "table": "",
  "longName": "HL7Date/time Study Phase Ended",
  "length": 24
});

/**
 * CSP.4 - Study Phase Evaluability
 */
export const CSP_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "CSP.4",
  "version": "2.6",
  "description": "Study Phase Evaluability",
  "type": "Field",
  "item": 1054,
  "table": "HL79999",
  "longName": "HL7Study Phase Evaluability",
  "length": 705
});
