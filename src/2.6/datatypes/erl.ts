import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.6 ERL Composite Data Type
 *
 * HL7 v2.6 ERL composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ERL.1 - Segment ID
 */
export const ERL_1 = SimpleTypes.ST.max(3).register(hl7v2Metadata, {
  title: 'ERL.1',
  version: '2.6',
  description: 'Segment ID',
  type: 'DataType',
  length: 3,
  optionality: 'R',
});

/**
 * ERL.2 - Segment Sequence
 */
export const ERL_2 = SimpleTypes.NM.max(2).register(hl7v2Metadata, {
  title: 'ERL.2',
  version: '2.6',
  description: 'Segment Sequence',
  type: 'DataType',
  length: 2,
  optionality: 'R',
});

/**
 * ERL.3 - Field Position
 */
export const ERL_3 = SimpleTypes.NM.max(2).optional().register(hl7v2Metadata, {
  title: 'ERL.3',
  version: '2.6',
  description: 'Field Position',
  type: 'DataType',
  length: 2,
  optionality: 'O',
});

/**
 * ERL.4 - Field Repetition
 */
export const ERL_4 = SimpleTypes.NM.max(2).optional().register(hl7v2Metadata, {
  title: 'ERL.4',
  version: '2.6',
  description: 'Field Repetition',
  type: 'DataType',
  length: 2,
  optionality: 'O',
});

/**
 * ERL.5 - Component Number
 */
export const ERL_5 = SimpleTypes.NM.max(2).optional().register(hl7v2Metadata, {
  title: 'ERL.5',
  version: '2.6',
  description: 'Component Number',
  type: 'DataType',
  length: 2,
  optionality: 'O',
});

/**
 * ERL.6 - Sub-Component Number
 */
export const ERL_6 = SimpleTypes.NM.max(2).optional().register(hl7v2Metadata, {
  title: 'ERL.6',
  version: '2.6',
  description: 'Sub-Component Number',
  type: 'DataType',
  length: 2,
  optionality: 'O',
});

/**
 * ERL - HL7 v2.6 ERL composite data type
 *
 * Components:
 * - ERL.1: Segment ID (ST)
 * - ERL.2: Segment Sequence (NM)
 * - ERL.3: Field Position (NM)
 * - ERL.4: Field Repetition (NM)
 * - ERL.5: Component Number (NM)
 * - ERL.6: Sub-Component Number (NM)
 */
export const ERL = z
  .object({
    [`1`]: ERL_1,
    [`2`]: ERL_2,
    [`3`]: ERL_3,
    [`4`]: ERL_4,
    [`5`]: ERL_5,
    [`6`]: ERL_6,
  })
  .register(hl7v2Metadata, {
    title: 'ERL',
    version: '2.6',
    description: 'HL7 v2.6 ERL composite data type',
  });

/**
 * Type definition for ERL
 */
export type ERL = z.infer<typeof ERL>;
