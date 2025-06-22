import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';

/**
 * HL7 v2.6 LA1 Composite Data Type
 *
 * HL7 v2.6 LA1 composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LA1.1 - Point of Care
 */
export const LA1_1 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  title: 'LA1.1',
  version: '2.6',
  description: 'Point of Care',
  type: 'DataType',
  length: 20,
  optionality: 'O',
});

/**
 * LA1.2 - Room
 */
export const LA1_2 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  title: 'LA1.2',
  version: '2.6',
  description: 'Room',
  type: 'DataType',
  length: 20,
  optionality: 'O',
});

/**
 * LA1.3 - Bed
 */
export const LA1_3 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  title: 'LA1.3',
  version: '2.6',
  description: 'Bed',
  type: 'DataType',
  length: 20,
  optionality: 'O',
});

/**
 * LA1.4 - Facility
 */
export const LA1_4 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: 'LA1.4',
  version: '2.6',
  description: 'Facility',
  type: 'DataType',
  length: 227,
  optionality: 'O',
});

/**
 * LA1.5 - Location Status
 */
export const LA1_5 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  title: 'LA1.5',
  version: '2.6',
  description: 'Location Status',
  type: 'DataType',
  length: 20,
  optionality: 'O',
});

/**
 * LA1.6 - Patient Location Type
 */
export const LA1_6 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  title: 'LA1.6',
  version: '2.6',
  description: 'Patient Location Type',
  type: 'DataType',
  length: 20,
  optionality: 'O',
});

/**
 * LA1.7 - Building
 */
export const LA1_7 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  title: 'LA1.7',
  version: '2.6',
  description: 'Building',
  type: 'DataType',
  length: 20,
  optionality: 'O',
});

/**
 * LA1.8 - Floor
 */
export const LA1_8 = SimpleTypes.IS.max(20).optional().register(hl7v2Metadata, {
  title: 'LA1.8',
  version: '2.6',
  description: 'Floor',
  type: 'DataType',
  length: 20,
  optionality: 'O',
});

/**
 * LA1.9 - Address
 */
export const LA1_9 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: 'LA1.9',
  version: '2.6',
  description: 'Address',
  type: 'DataType',
  length: 415,
  optionality: 'O',
});

/**
 * LA1 - HL7 v2.6 LA1 composite data type
 *
 * Components:
 * - LA1.1: Point of Care (IS)
 * - LA1.2: Room (IS)
 * - LA1.3: Bed (IS)
 * - LA1.4: Facility (HD)
 * - LA1.5: Location Status (IS)
 * - LA1.6: Patient Location Type (IS)
 * - LA1.7: Building (IS)
 * - LA1.8: Floor (IS)
 * - LA1.9: Address (AD)
 */
export const LA1 = z
  .object({
    [`1`]: LA1_1,
    [`2`]: LA1_2,
    [`3`]: LA1_3,
    [`4`]: LA1_4,
    [`5`]: LA1_5,
    [`6`]: LA1_6,
    [`7`]: LA1_7,
    [`8`]: LA1_8,
    [`9`]: LA1_9,
  })
  .register(hl7v2Metadata, {
    title: 'LA1',
    version: '2.6',
    description: 'HL7 v2.6 LA1 composite data type',
  });

/**
 * Type definition for LA1
 */
export type LA1 = z.infer<typeof LA1>;
