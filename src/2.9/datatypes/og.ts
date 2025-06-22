import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.9 OG Composite Data Type
 * 
 * HL7 v2.9 OG composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OG.1 - Original Sub-Identifier
 */
export const OG_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "OG.1",
  "version": "2.9",
  "description": "Original Sub-Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * OG.2 - Group
 */
export const OG_2 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "OG.2",
  "version": "2.9",
  "description": "Group",
  "type": "DataType",
  "optionality": "O"
});

/**
 * OG.3 - Sequence
 */
export const OG_3 = SimpleTypes.NM.optional().register(hl7v2Metadata, {
  "title": "OG.3",
  "version": "2.9",
  "description": "Sequence",
  "type": "DataType",
  "optionality": "O"
});

/**
 * OG.4 - Identifier
 */
export const OG_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  "title": "OG.4",
  "version": "2.9",
  "description": "Identifier",
  "type": "DataType",
  "optionality": "O"
});

/**
 * OG - HL7 v2.9 OG composite data type
 * 
 * Components:
 * - OG.1: Original Sub-Identifier (ST)
 * - OG.2: Group (NM)
 * - OG.3: Sequence (NM)
 * - OG.4: Identifier (ST)
 */
export const OG = z.object({
  [`1`]: OG_1,
  [`2`]: OG_2,
  [`3`]: OG_3,
  [`4`]: OG_4
}).register(hl7v2Metadata, {
  title: 'OG',
  version: '2.9',
  description: 'HL7 v2.9 OG composite data type'
});

/**
 * Type definition for OG
 */
export type OG = z.infer<typeof OG>;
