import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.9 SRT Composite Data Type
 * 
 * HL7 v2.9 SRT composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SRT.1 - Sort-by Field
 */
export const SRT_1 = SimpleTypes.ST.register(hl7v2Metadata, {
  "title": "SRT.1",
  "version": "2.9",
  "description": "Sort-by Field",
  "type": "DataType",
  "optionality": "R"
});

/**
 * SRT.2 - Sequencing
 */
export const SRT_2 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "SRT.2",
  "version": "2.9",
  "description": "Sequencing",
  "type": "DataType",
  "optionality": "O"
});

/**
 * SRT - HL7 v2.9 SRT composite data type
 * 
 * Components:
 * - SRT.1: Sort-by Field (ST)
 * - SRT.2: Sequencing (ID)
 */
export const SRT = z.object({
  [`1`]: SRT_1,
  [`2`]: SRT_2
}).register(hl7v2Metadata, {
  title: 'SRT',
  version: '2.9',
  description: 'HL7 v2.9 SRT composite data type'
});

/**
 * Type definition for SRT
 */
export type SRT = z.infer<typeof SRT>;
