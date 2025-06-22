import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 OMC Fields
 * 
 * HL7 v2.8 OMC field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMC.1 - Sequence Number - Test/Observation Master File
 */
export const OMC_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OMC.1",
  "version": "2.8",
  "description": "Sequence Number - Test/Observation Master File",
  "type": "Field",
  "item": 586,
  "table": "",
  "longName": "HL7Sequence Number - Test/Observation Master File"
});

/**
 * OMC.2 - Segment Action Code
 */
export const OMC_2 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OMC.2",
  "version": "2.8",
  "description": "Segment Action Code",
  "type": "Field",
  "item": 763,
  "table": "HL70206",
  "longName": "HL7Segment Action Code"
});

/**
 * OMC.3 - Segment Unique Key
 */
export const OMC_3 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OMC.3",
  "version": "2.8",
  "description": "Segment Unique Key",
  "type": "Field",
  "item": 764,
  "table": "",
  "longName": "HL7Segment Unique Key"
});

/**
 * OMC.4 - Clinical Information Request
 */
export const OMC_4 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OMC.4",
  "version": "2.8",
  "description": "Clinical Information Request",
  "type": "Field",
  "item": 3444,
  "table": "HL79999",
  "longName": "HL7Clinical Information Request"
});

/**
 * OMC.5 - Collection Event/Process Step
 */
export const OMC_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OMC.5",
  "version": "2.8",
  "description": "Collection Event/Process Step",
  "type": "Field",
  "item": 3445,
  "table": "HL70938",
  "longName": "HL7Collection Event/Process Step"
});

/**
 * OMC.6 - Communication Location
 */
export const OMC_6 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OMC.6",
  "version": "2.8",
  "description": "Communication Location",
  "type": "Field",
  "item": 3446,
  "table": "HL70939",
  "longName": "HL7Communication Location"
});

/**
 * OMC.7 - Answer Required
 */
export const OMC_7 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OMC.7",
  "version": "2.8",
  "description": "Answer Required",
  "type": "Field",
  "item": 3447,
  "table": "HL70136",
  "longName": "HL7Answer Required"
});

/**
 * OMC.8 - Hint/Help Text
 */
export const OMC_8 = datatypes.ST.register(hl7v2Metadata, {
  "title": "OMC.8",
  "version": "2.8",
  "description": "Hint/Help Text",
  "type": "Field",
  "item": 3448,
  "table": "",
  "longName": "HL7Hint/Help Text"
});

/**
 * OMC.9 - Type of Answer
 */
export const OMC_9 = datatypes.VARIES.register(hl7v2Metadata, {
  "title": "OMC.9",
  "version": "2.8",
  "description": "Type of Answer",
  "type": "Field",
  "item": 3449,
  "table": "HL70125",
  "longName": "HL7Type of Answer"
});

/**
 * OMC.10 - Multiple Answers Allowed
 */
export const OMC_10 = datatypes.ID.register(hl7v2Metadata, {
  "title": "OMC.10",
  "version": "2.8",
  "description": "Multiple Answers Allowed",
  "type": "Field",
  "item": 3450,
  "table": "HL70136",
  "longName": "HL7Multiple Answers Allowed"
});

/**
 * OMC.11 - Answer Choices
 */
export const OMC_11 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "OMC.11",
  "version": "2.8",
  "description": "Answer Choices",
  "type": "Field",
  "item": 3451,
  "table": "HL79999",
  "longName": "HL7Answer Choices"
});

/**
 * OMC.12 - Character Limit
 */
export const OMC_12 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OMC.12",
  "version": "2.8",
  "description": "Character Limit",
  "type": "Field",
  "item": 3452,
  "table": "",
  "longName": "HL7Character Limit"
});

/**
 * OMC.13 - Number of Decimals
 */
export const OMC_13 = datatypes.NM.register(hl7v2Metadata, {
  "title": "OMC.13",
  "version": "2.8",
  "description": "Number of Decimals",
  "type": "Field",
  "item": 3453,
  "table": "",
  "longName": "HL7Number of Decimals"
});
