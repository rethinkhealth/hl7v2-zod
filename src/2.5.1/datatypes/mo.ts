import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.5 MO Composite Data Type
 * 
 * HL7 v2.5 MO composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MO.1 - Quantity
 */
export const MO_1 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  "title": "MO.1",
  "version": "2.5",
  "description": "Quantity",
  "type": "DataType",
  "length": 16,
  "optionality": "O"
});

/**
 * MO.2 - Denomination
 */
export const MO_2 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "MO.2",
  "version": "2.5",
  "description": "Denomination",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * MO - HL7 v2.5 MO composite data type
 * 
 * Components:
 * - MO.1: Quantity (NM)
 * - MO.2: Denomination (ID)
 */
export const MO = z.object({
  [`1`]: MO_1,
  [`2`]: MO_2
}).register(hl7v2Metadata, {
  title: 'MO',
  version: '2.5',
  description: 'HL7 v2.5 MO composite data type'
});

/**
 * Type definition for MO
 */
export type MO = z.infer<typeof MO>;
