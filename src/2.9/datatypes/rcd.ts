import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.9 RCD Composite Data Type
 * 
 * HL7 v2.9 RCD composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RCD.1 - Segment Field Name
 */
export const RCD_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "RCD.1",
  "version": "2.9",
  "description": "Segment Field Name",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RCD.2 - HL7 Data Type
 */
export const RCD_2 = SimpleTypes.ID.optional().register(hl7v2Metadata, {
  "title": "RCD.2",
  "version": "2.9",
  "description": "HL7 Data Type",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RCD.3 - Maximum Column Width
 */
export const RCD_3 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "RCD.3",
  "version": "2.9",
  "description": "Maximum Column Width",
  "type": "DataType",
  "optionality": "O"
});

/**
 * RCD - HL7 v2.9 RCD composite data type
 * 
 * Components:
 * - RCD.1: Segment Field Name (ST)
 * - RCD.2: HL7 Data Type (ID)
 * - RCD.3: Maximum Column Width (NM)
 */
export const RCD = z.object({
  [`1`]: RCD_1,
  [`2`]: RCD_2,
  [`3`]: RCD_3
}).register(hl7v2Metadata, {
  title: 'RCD',
  version: '2.9',
  description: 'HL7 v2.9 RCD composite data type'
});

/**
 * Type definition for RCD
 */
export type RCD = z.infer<typeof RCD>;
