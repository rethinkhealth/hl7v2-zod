
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 MFE Fields
 * 
 * HL7 v2.6 MFE field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFE.1 - Record-Level Event Code
 */
export const MFE_1 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MFE.1",
  "version": "2.6",
  "description": "Record-Level Event Code",
  "type": "Field",
  "item": 664,
  "table": "HL70180",
  "longName": "HL7Record-Level Event Code",
  "length": 3
});

/**
 * MFE.2 - MFN Control ID
 */
export const MFE_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "MFE.2",
  "version": "2.6",
  "description": "MFN Control ID",
  "type": "Field",
  "item": 665,
  "table": "",
  "longName": "HL7MFN Control ID",
  "length": 20
});

/**
 * MFE.3 - Effective Date/Time
 */
export const MFE_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "MFE.3",
  "version": "2.6",
  "description": "Effective Date/Time",
  "type": "Field",
  "item": 662,
  "table": "",
  "longName": "HL7Effective Date/Time",
  "length": 24
});

/**
 * MFE.4 - Primary Key Value - MFE
 */
export const MFE_4 = datatypes.VARIES.register(hl7v2Metadata, {
  "title": "MFE.4",
  "version": "2.6",
  "description": "Primary Key Value - MFE",
  "type": "Field",
  "item": 667,
  "table": "HL79999",
  "longName": "HL7Primary Key Value - MFE",
  "length": 200
});

/**
 * MFE.5 - Primary Key Value Type
 */
export const MFE_5 = datatypes.ID.register(hl7v2Metadata, {
  "title": "MFE.5",
  "version": "2.6",
  "description": "Primary Key Value Type",
  "type": "Field",
  "item": 1319,
  "table": "HL70355",
  "longName": "HL7Primary Key Value Type",
  "length": 3
});

/**
 * MFE.6 - Entered Date/Time
 */
export const MFE_6 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "MFE.6",
  "version": "2.6",
  "description": "Entered Date/Time",
  "type": "Field",
  "item": 661,
  "table": "",
  "longName": "HL7Entered Date/Time",
  "length": 24
});

/**
 * MFE.7 - Entered By
 */
export const MFE_7 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "MFE.7",
  "version": "2.6",
  "description": "Entered By",
  "type": "Field",
  "item": 224,
  "table": "",
  "longName": "HL7Entered By",
  "length": 3220
});
