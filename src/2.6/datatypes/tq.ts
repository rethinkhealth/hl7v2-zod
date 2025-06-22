import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import { SimpleTypes } from './simpletypes';
import { MixedTypes } from './mixedtypes';
import { OSD } from './osd';
import { CWE } from './cwe';

/**
 * HL7 v2.6 TQ Composite Data Type
 *
 * HL7 v2.6 TQ composite data type
 * Each composite type consists of multiple components with specific types and constraints.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TQ.1 - Quantity
 */
export const TQ_1 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: 'TQ.1',
  version: '2.6',
  description: 'Quantity',
  type: 'DataType',
  length: 267,
  optionality: 'O',
});

/**
 * TQ.2 - Interval
 */
export const TQ_2 = SimpleTypes.ST.optional().register(hl7v2Metadata, {
  title: 'TQ.2',
  version: '2.6',
  description: 'Interval',
  type: 'DataType',
  length: 206,
  optionality: 'O',
});

/**
 * TQ.3 - Duration
 */
export const TQ_3 = SimpleTypes.ST.max(6).optional().register(hl7v2Metadata, {
  title: 'TQ.3',
  version: '2.6',
  description: 'Duration',
  type: 'DataType',
  length: 6,
  optionality: 'O',
});

/**
 * TQ.4 - Start Date/Time
 */
export const TQ_4 = SimpleTypes.DTM.max(24).optional().register(hl7v2Metadata, {
  title: 'TQ.4',
  version: '2.6',
  description: 'Start Date/Time',
  type: 'DataType',
  length: 24,
  optionality: 'O',
});

/**
 * TQ.5 - End Date/Time
 */
export const TQ_5 = SimpleTypes.DTM.max(24).optional().register(hl7v2Metadata, {
  title: 'TQ.5',
  version: '2.6',
  description: 'End Date/Time',
  type: 'DataType',
  length: 24,
  optionality: 'O',
});

/**
 * TQ.6 - Priority
 */
export const TQ_6 = SimpleTypes.ST.max(6).optional().register(hl7v2Metadata, {
  title: 'TQ.6',
  version: '2.6',
  description: 'Priority',
  type: 'DataType',
  length: 6,
  optionality: 'O',
});

/**
 * TQ.7 - Condition
 */
export const TQ_7 = SimpleTypes.ST.max(199).optional().register(hl7v2Metadata, {
  title: 'TQ.7',
  version: '2.6',
  description: 'Condition',
  type: 'DataType',
  length: 199,
  optionality: 'O',
});

/**
 * TQ.8 - Text
 */
export const TQ_8 = MixedTypes.TX.optional().register(hl7v2Metadata, {
  title: 'TQ.8',
  version: '2.6',
  description: 'Text',
  type: 'DataType',
  length: 200,
  optionality: 'O',
});

/**
 * TQ.9 - Conjunction
 */
export const TQ_9 = SimpleTypes.ID.max(1).optional().register(hl7v2Metadata, {
  title: 'TQ.9',
  version: '2.6',
  description: 'Conjunction',
  type: 'DataType',
  length: 1,
  optionality: 'O',
});

/**
 * TQ.10 - Order Sequencing
 */
export const TQ_10 = OSD.optional().register(hl7v2Metadata, {
  title: 'TQ.10',
  version: '2.6',
  description: 'Order Sequencing',
  type: 'DataType',
  length: 110,
  optionality: 'O',
});

/**
 * TQ.11 - Occurrence Duration
 */
export const TQ_11 = CWE.optional().register(hl7v2Metadata, {
  title: 'TQ.11',
  version: '2.6',
  description: 'Occurrence Duration',
  type: 'DataType',
  length: 705,
  optionality: 'O',
});

/**
 * TQ.12 - Total Occurrences
 */
export const TQ_12 = SimpleTypes.NM.max(4).optional().register(hl7v2Metadata, {
  title: 'TQ.12',
  version: '2.6',
  description: 'Total Occurrences',
  type: 'DataType',
  length: 4,
  optionality: 'O',
});

/**
 * TQ - HL7 v2.6 TQ composite data type
 *
 * Components:
 * - TQ.1: Quantity (CQ)
 * - TQ.2: Interval (RI)
 * - TQ.3: Duration (ST)
 * - TQ.4: Start Date/Time (DTM)
 * - TQ.5: End Date/Time (DTM)
 * - TQ.6: Priority (ST)
 * - TQ.7: Condition (ST)
 * - TQ.8: Text (TX)
 * - TQ.9: Conjunction (ID)
 * - TQ.10: Order Sequencing (OSD)
 * - TQ.11: Occurrence Duration (CWE)
 * - TQ.12: Total Occurrences (NM)
 */
export const TQ = z
  .object({
    [`1`]: TQ_1,
    [`2`]: TQ_2,
    [`3`]: TQ_3,
    [`4`]: TQ_4,
    [`5`]: TQ_5,
    [`6`]: TQ_6,
    [`7`]: TQ_7,
    [`8`]: TQ_8,
    [`9`]: TQ_9,
    [`10`]: TQ_10,
    [`11`]: TQ_11,
    [`12`]: TQ_12,
  })
  .register(hl7v2Metadata, {
    title: 'TQ',
    version: '2.6',
    description: 'HL7 v2.6 TQ composite data type',
  });

/**
 * Type definition for TQ
 */
export type TQ = z.infer<typeof TQ>;
