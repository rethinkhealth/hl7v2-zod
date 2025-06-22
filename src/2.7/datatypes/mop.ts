import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.7 MOP Composite Data Type
 * 
 * HL7 v2.7 MOP composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MOP.1 - Money or Percentage Indicator
 */
export const MOP_1 = SimpleTypes.ID.register(hl7v2Metadata, {
  "title": "MOP.1",
  "version": "2.7",
  "description": "Money or Percentage Indicator",
  "type": "DataType",
  "optionality": "R"
});

/**
 * MOP.2 - Money or Percentage Quantity
 */
export const MOP_2 = SimpleTypes.NM.register(hl7v2Metadata, {
  "title": "MOP.2",
  "version": "2.7",
  "description": "Money or Percentage Quantity",
  "type": "DataType",
  "optionality": "R"
});

/**
 * MOP.3 - Monetary  Denomination
 */
export const MOP_3 = SimpleTypes.ID.max(3).optional().register(hl7v2Metadata, {
  "title": "MOP.3",
  "version": "2.7",
  "description": "Monetary  Denomination",
  "type": "DataType",
  "length": 3,
  "optionality": "O"
});

/**
 * MOP - HL7 v2.7 MOP composite data type
 * 
 * Components:
 * - MOP.1: Money or Percentage Indicator (ID)
 * - MOP.2: Money or Percentage Quantity (NM)
 * - MOP.3: Monetary  Denomination (ID)
 */
export const MOP = z.object({
  [`1`]: MOP_1,
  [`2`]: MOP_2,
  [`3`]: MOP_3
}).register(hl7v2Metadata, {
  title: 'MOP',
  version: '2.7',
  description: 'HL7 v2.7 MOP composite data type'
});

/**
 * Type definition for MOP
 */
export type MOP = z.infer<typeof MOP>;
