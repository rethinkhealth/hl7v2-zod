import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as datatypes from '../datatypes';

/**
 * HL7 v2.7 QID Fields
 * 
 * HL7 v2.7 QID field definitions
 * Each field consists of specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QID.1 - Query Tag
 */
export const QID_1 = datatypes.ST.register(hl7v2Metadata, {
  "title": "QID.1",
  "version": "2.7",
  "description": "Query Tag",
  "type": "Field",
  "item": 696,
  "table": "",
  "longName": "HL7Query Tag"
});

/**
 * QID.2 - Message Query Name
 */
export const QID_2 = datatypes.CWE.register(hl7v2Metadata, {
  "title": "QID.2",
  "version": "2.7",
  "description": "Message Query Name",
  "type": "Field",
  "item": 1375,
  "table": "HL70471",
  "longName": "HL7Message Query Name"
});
