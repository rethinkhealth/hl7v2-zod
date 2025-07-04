import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.5 MA Composite Data Type
 * 
 * HL7 v2.5 MA composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MA.1 - Sample 1 From Channel 1
 */
export const MA_1 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "MA.1",
  "version": "2.5",
  "description": "Sample 1 From Channel 1",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * MA.2 - Sample 1 From Channel 2
 */
export const MA_2 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "MA.2",
  "version": "2.5",
  "description": "Sample 1 From Channel 2",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * MA.3 - Sample 1 From Channel N
 */
export const MA_3 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "MA.3",
  "version": "2.5",
  "description": "Sample 1 From Channel N",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * MA.4 - Sample 2 From Channel 1
 */
export const MA_4 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "MA.4",
  "version": "2.5",
  "description": "Sample 2 From Channel 1",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * MA.5 - Sample 2 From Channel N
 */
export const MA_5 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "MA.5",
  "version": "2.5",
  "description": "Sample 2 From Channel N",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * MA.6 - Sample N From Channel N
 */
export const MA_6 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "MA.6",
  "version": "2.5",
  "description": "Sample N From Channel N",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * MA - HL7 v2.5 MA composite data type
 * 
 * Components:
 * - MA.1: Sample 1 From Channel 1 (NM)
 * - MA.2: Sample 1 From Channel 2 (NM)
 * - MA.3: Sample 1 From Channel N (NM)
 * - MA.4: Sample 2 From Channel 1 (NM)
 * - MA.5: Sample 2 From Channel N (NM)
 * - MA.6: Sample N From Channel N (NM)
 */
export const MA = z.object({
  [`1`]: MA_1,
  [`2`]: MA_2,
  [`3`]: MA_3,
  [`4`]: MA_4,
  [`5`]: MA_5,
  [`6`]: MA_6
}).register(hl7v2Metadata, {
  title: 'MA',
  version: '2.5',
  description: 'HL7 v2.5 MA composite data type'
});

/**
 * Type definition for MA
 */
export type MA = z.infer<typeof MA>;
