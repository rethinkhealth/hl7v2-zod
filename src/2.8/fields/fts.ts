import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.8 FTS Fields
 * 
 * HL7 v2.8 FTS field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FTS.1 - File Batch Count
 */
export const FTS_1 = datatypes.NM.register(hl7v2Metadata, {
  "title": "FTS.1",
  "version": "2.8",
  "description": "File Batch Count",
  "type": "Field",
  "item": 79,
  "table": "",
  "longName": "HL7File Batch Count"
});

/**
 * FTS.2 - File Trailer Comment
 */
export const FTS_2 = datatypes.ST.register(hl7v2Metadata, {
  "title": "FTS.2",
  "version": "2.8",
  "description": "File Trailer Comment",
  "type": "Field",
  "item": 80,
  "table": "",
  "longName": "HL7File Trailer Comment"
});
