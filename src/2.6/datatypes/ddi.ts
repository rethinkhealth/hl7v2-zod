import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.6 DDI Composite Data Type
 *
 * HL7 v2.6 DDI composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DDI.1 - Delay Days
 */
export const DDI_1 = SimpleTypes.NM.max(3).optional().register(hl7v2Metadata, {
  title: 'DDI.1',
  version: '2.6',
  description: 'Delay Days',
  type: 'DataType',
  length: 3,
  optionality: 'O',
});

/**
 * DDI.2 - Monetary Amount
 */
export const DDI_2 = SimpleTypes.ST.register(hl7v2Metadata, {
  title: 'DDI.2',
  version: '2.6',
  description: 'Monetary Amount',
  type: 'DataType',
  length: 16,
  optionality: 'R',
});

/**
 * DDI.3 - Number of Days
 */
export const DDI_3 = SimpleTypes.NM.max(4).optional().register(hl7v2Metadata, {
  title: 'DDI.3',
  version: '2.6',
  description: 'Number of Days',
  type: 'DataType',
  length: 4,
  optionality: 'O',
});

/**
 * DDI - HL7 v2.6 DDI composite data type
 *
 * Components:
 * - DDI.1: Delay Days (NM)
 * - DDI.2: Monetary Amount (MO)
 * - DDI.3: Number of Days (NM)
 */
export const DDI = z
  .object({
    [`1`]: DDI_1,
    [`2`]: DDI_2,
    [`3`]: DDI_3,
  })
  .register(hl7v2Metadata, {
    title: 'DDI',
    version: '2.6',
    description: 'HL7 v2.6 DDI composite data type',
  });

/**
 * Type definition for DDI
 */
export type DDI = z.infer<typeof DDI>;
