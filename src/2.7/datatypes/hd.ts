import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.7 HD Composite Data Type
 * 
 * HL7 v2.7 HD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * HD.1 - Namespace ID
 */
export const HD_1 = SimpleTypes.IS.optional().register(hl7v2Metadata, {
  "title": "HD.1",
  "version": "2.7",
  "description": "Namespace ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * HD.2 - Universal ID
 */
export const HD_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "HD.2",
  "version": "2.7",
  "description": "Universal ID",
  "type": "DataType",
  "optionality": "O"
});

/**
 * HD.3 - Universal ID Type
 */
export const HD_3 = SimpleTypes.ID.max(6).optional().register(hl7v2Metadata, {
  "title": "HD.3",
  "version": "2.7",
  "description": "Universal ID Type",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * HD - HL7 v2.7 HD composite data type
 * 
 * Components:
 * - HD.1: Namespace ID (IS)
 * - HD.2: Universal ID (ST)
 * - HD.3: Universal ID Type (ID)
 */
export const HD = z.object({
  [`1`]: HD_1,
  [`2`]: HD_2,
  [`3`]: HD_3
}).register(hl7v2Metadata, {
  title: 'HD',
  version: '2.7',
  description: 'HL7 v2.7 HD composite data type'
});

/**
 * Type definition for HD
 */
export type HD = z.infer<typeof HD>;
