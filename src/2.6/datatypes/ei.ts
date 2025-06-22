import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.6 EI Composite Data Type
 * 
 * HL7 v2.6 EI composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EI.1 - Entity Identifier
 */
export const EI_1 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  "title": "EI.1",
  "version": "2.6",
  "description": "Entity Identifier",
  "type": "DataType",
  "length": 199,
  "optionality": "O"
});

/**
 * EI.2 - Namespace ID
 */
export const EI_2 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  "title": "EI.2",
  "version": "2.6",
  "description": "Namespace ID",
  "type": "DataType",
  "length": 20,
  "optionality": "O"
});

/**
 * EI.3 - Universal ID
 */
export const EI_3 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  "title": "EI.3",
  "version": "2.6",
  "description": "Universal ID",
  "type": "DataType",
  "length": 199,
  "optionality": "O"
});

/**
 * EI.4 - Universal ID Type
 */
export const EI_4 = SimpleTypes.ID.max(6).optional().register(hl7v2Metadata, {
  "title": "EI.4",
  "version": "2.6",
  "description": "Universal ID Type",
  "type": "DataType",
  "length": 6,
  "optionality": "O"
});

/**
 * EI - HL7 v2.6 EI composite data type
 * 
 * Components:
 * - EI.1: Entity Identifier (ST)
 * - EI.2: Namespace ID (IS)
 * - EI.3: Universal ID (ST)
 * - EI.4: Universal ID Type (ID)
 */
export const EI = z.object({
  [`1`]: EI_1,
  [`2`]: EI_2,
  [`3`]: EI_3,
  [`4`]: EI_4
}).register(hl7v2Metadata, {
  title: 'EI',
  version: '2.6',
  description: 'HL7 v2.6 EI composite data type'
});

/**
 * Type definition for EI
 */
export type EI = z.infer<typeof EI>;
