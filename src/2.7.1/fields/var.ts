import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 VAR Fields
 * 
 * HL7 v2.7 VAR field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VAR.1 - Variance Instance ID
 */
export const VAR_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VAR.1",
  "version": "2.7",
  "description": "Variance Instance ID",
  "type": "Field",
  "item": 1212,
  "table": "",
  "longName": "HL7Variance Instance ID"
});

/**
 * VAR.2 - Documented Date/Time
 */
export const VAR_2 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "VAR.2",
  "version": "2.7",
  "description": "Documented Date/Time",
  "type": "Field",
  "item": 1213,
  "table": "",
  "longName": "HL7Documented Date/Time"
});

/**
 * VAR.3 - Stated Variance Date/Time
 */
export const VAR_3 = datatypes.DTM.register(hl7v2Metadata, {
  "title": "VAR.3",
  "version": "2.7",
  "description": "Stated Variance Date/Time",
  "type": "Field",
  "item": 1214,
  "table": "",
  "longName": "HL7Stated Variance Date/Time"
});

/**
 * VAR.4 - Variance Originator
 */
export const VAR_4 = datatypes.XCN.register(hl7v2Metadata, {
  "title": "VAR.4",
  "version": "2.7",
  "description": "Variance Originator",
  "type": "Field",
  "item": 1215,
  "table": "",
  "longName": "HL7Variance Originator"
});

/**
 * VAR.5 - Variance Classification
 */
export const VAR_5 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "VAR.5",
  "version": "2.7",
  "description": "Variance Classification",
  "type": "Field",
  "item": 1216,
  "table": "",
  "longName": "HL7Variance Classification"
});

/**
 * VAR.6 - Variance Description
 */
export const VAR_6 = datatypes.ST.register(hl7v2Metadata, {
  "title": "VAR.6",
  "version": "2.7",
  "description": "Variance Description",
  "type": "Field",
  "item": 1217,
  "table": "",
  "longName": "HL7Variance Description"
});
