import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.8 MA Composite Data Type
 * 
 * HL7 v2.8 MA composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MA.1 - Sample Y From Channel 1
 */
export const MA_1 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "MA.1",
  "version": "2.8",
  "description": "Sample Y From Channel 1",
  "type": "DataType",
  "optionality": "O"
});

/**
 * MA.2 - Sample Y From Channel 2
 */
export const MA_2 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "MA.2",
  "version": "2.8",
  "description": "Sample Y From Channel 2",
  "type": "DataType",
  "optionality": "O"
});

/**
 * MA.3 - Sample Y From Channel 3
 */
export const MA_3 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "MA.3",
  "version": "2.8",
  "description": "Sample Y From Channel 3",
  "type": "DataType",
  "optionality": "O"
});

/**
 * MA.4 - Sample Y From Channel 4
 */
export const MA_4 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "MA.4",
  "version": "2.8",
  "description": "Sample Y From Channel 4",
  "type": "DataType",
  "optionality": "O"
});

/**
 * MA - HL7 v2.8 MA composite data type
 * 
 * Components:
 * - MA.1: Sample Y From Channel 1 (NM)
 * - MA.2: Sample Y From Channel 2 (NM)
 * - MA.3: Sample Y From Channel 3 (NM)
 * - MA.4: Sample Y From Channel 4 (NM)
 */
export const MA = z.object({
  [`1`]: MA_1,
  [`2`]: MA_2,
  [`3`]: MA_3,
  [`4`]: MA_4
}).register(hl7v2Metadata, {
  title: 'MA',
  version: '2.8',
  description: 'HL7 v2.8 MA composite data type'
});

/**
 * Type definition for MA
 */
export type MA = z.infer<typeof MA>;
