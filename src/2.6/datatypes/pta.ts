import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { MOP } from './mop';

/**
 * HL7 v2.6 PTA Composite Data Type
 *
 * HL7 v2.6 PTA composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PTA.1 - Policy Type
 */
export const PTA_1 = SimpleTypes.IS.max(5).register(hl7v2Metadata, {
  title: 'PTA.1',
  version: '2.6',
  description: 'Policy Type',
  type: 'DataType',
  length: 5,
  optionality: 'R',
});

/**
 * PTA.2 - Amount Class
 */
export const PTA_2 = SimpleTypes.IS.max(9).optional().register(hl7v2Metadata, {
  title: 'PTA.2',
  version: '2.6',
  description: 'Amount Class',
  type: 'DataType',
  length: 9,
  optionality: 'O',
});

/**
 * PTA.3 - Money or Percentage Quantity
 */
export const PTA_3 = SimpleTypes.NM.max(16).optional().register(hl7v2Metadata, {
  title: 'PTA.3',
  version: '2.6',
  description: 'Money or Percentage Quantity',
  type: 'DataType',
  length: 16,
  optionality: 'O',
});

/**
 * PTA.4 - Money or Percentage
 */
export const PTA_4 = MOP.register(hl7v2Metadata, {
  title: 'PTA.4',
  version: '2.6',
  description: 'Money or Percentage',
  type: 'DataType',
  length: 23,
  optionality: 'R',
});

/**
 * PTA - HL7 v2.6 PTA composite data type
 *
 * Components:
 * - PTA.1: Policy Type (IS)
 * - PTA.2: Amount Class (IS)
 * - PTA.3: Money or Percentage Quantity (NM)
 * - PTA.4: Money or Percentage (MOP)
 */
export const PTA = z
  .object({
    [`1`]: PTA_1,
    [`2`]: PTA_2,
    [`3`]: PTA_3,
    [`4`]: PTA_4,
  })
  .register(hl7v2Metadata, {
    title: 'PTA',
    version: '2.6',
    description: 'HL7 v2.6 PTA composite data type',
  });

/**
 * Type definition for PTA
 */
export type PTA = z.infer<typeof PTA>;
