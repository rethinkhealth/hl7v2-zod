import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.9 MFI Fields
 * 
 * HL7 v2.9 MFI field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFI.1 - Master File Identifier
 */
export const MFI_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "MFI.1",
  "version": "2.9",
  "description": "Master File Identifier",
  "type": "Field",
  "item": 658,
  "table": "HL70175",
  "longName": "HL7Master File Identifier"
});

/**
 * MFI.2 - Master File Application Identifier
 */
export const MFI_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MFI.2",
  "version": "2.9",
  "description": "Master File Application Identifier",
  "type": "Field",
  "item": 659,
  "table": "HL70361",
  "longName": "HL7Master File Application Identifier"
});

/**
 * MFI.3 - File-Level Event Code
 */
export const MFI_3 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MFI.3",
  "version": "2.9",
  "description": "File-Level Event Code",
  "type": "Field",
  "item": 660,
  "table": "HL70178",
  "longName": "HL7File-Level Event Code",
  "length": 3
});

/**
 * MFI.4 - Entered Date/Time
 */
export const MFI_4 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "MFI.4",
  "version": "2.9",
  "description": "Entered Date/Time",
  "type": "Field",
  "item": 661,
  "table": "",
  "longName": "HL7Entered Date/Time"
});

/**
 * MFI.5 - Effective Date/Time
 */
export const MFI_5 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "MFI.5",
  "version": "2.9",
  "description": "Effective Date/Time",
  "type": "Field",
  "item": 662,
  "table": "",
  "longName": "HL7Effective Date/Time"
});

/**
 * MFI.6 - Response Level Code
 */
export const MFI_6 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MFI.6",
  "version": "2.9",
  "description": "Response Level Code",
  "type": "Field",
  "item": 663,
  "table": "HL70179",
  "longName": "HL7Response Level Code",
  "length": 2
});
