import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';

/**
 * HL7 v2.5 DR Composite Data Type
 * 
 * HL7 v2.5 DR composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DR.1 - Range Start Date/Time
 */
export const DR_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "DR.1",
  "version": "2.5",
  "description": "Range Start Date/Time",
  "type": "DataType",
  "length": 26,
  "optionality": "O"
});

/**
 * DR.2 - Range End Date/Time
 */
export const DR_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "DR.2",
  "version": "2.5",
  "description": "Range End Date/Time",
  "type": "DataType",
  "length": 26,
  "optionality": "O"
});

/**
 * DR - HL7 v2.5 DR composite data type
 * 
 * Components:
 * - DR.1: Range Start Date/Time (TS)
 * - DR.2: Range End Date/Time (TS)
 */
export const DR = z.object({
  "1": DR_1,
  "2": DR_2
}).register(hl7v2Metadata, {
  title: 'DR',
  version: '2.5',
  description: 'HL7 v2.5 DR composite data type'
});

/**
 * Type definition for DR
 */
export type DR = z.infer<typeof DR>;
