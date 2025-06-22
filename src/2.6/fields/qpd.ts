import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.6 QPD Fields
 * 
 * HL7 v2.6 QPD field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QPD.1 - Message Query Name
 */
export const QPD_1 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "QPD.1",
  "version": "2.6",
  "description": "Message Query Name",
  "type": "Field",
  "item": 1375,
  "table": "HL70471",
  "longName": "HL7Message Query Name",
  "length": 250
});

/**
 * QPD.2 - Query Tag
 */
export const QPD_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QPD.2",
  "version": "2.6",
  "description": "Query Tag",
  "type": "Field",
  "item": 696,
  "table": "",
  "longName": "HL7Query Tag",
  "length": 32
});

/**
 * QPD.3 - User Parameters (in successive fields)
 */
export const QPD_3 = datatypes.VARIES.register(hl7v2Metadata, {
  "title": "QPD.3",
  "version": "2.6",
  "description": "User Parameters (in successive fields)",
  "type": "Field",
  "item": 1435,
  "table": "",
  "longName": "HL7User Parameters (in successive fields)",
  "length": 256
});
