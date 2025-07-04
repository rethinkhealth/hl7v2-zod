import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.5 TS Composite Data Type
 * 
 * HL7 v2.5 TS composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TS.1 - Time
 */
export const TS_1 = SimpleTypes.DTM.max(24).register(hl7v2Metadata, {
  "title": "TS.1",
  "version": "2.5",
  "description": "Time",
  "type": "DataType",
  "length": 24,
  "optionality": "R"
});

/**
 * TS.2 - Degree of Precision
 */
export const TS_2 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  "title": "TS.2",
  "version": "2.5",
  "description": "Degree of Precision",
  "type": "DataType",
  "length": 1,
  "optionality": "O"
});

/**
 * TS - HL7 v2.5 TS composite data type
 * 
 * Components:
 * - TS.1: Time (DTM)
 * - TS.2: Degree of Precision (ID)
 */
export const TS = z.object({
  [`1`]: TS_1,
  [`2`]: TS_2
}).register(hl7v2Metadata, {
  title: 'TS',
  version: '2.5',
  description: 'HL7 v2.5 TS composite data type'
});

/**
 * Type definition for TS
 */
export type TS = z.infer<typeof TS>;
