import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 QCN_J01 Message
 *
 * HL7 v2.6 QCN_J01 message definition
 * Contains segment definitions and constraints for the QCN_J01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QCN_J01 message schema
 * Defines the structure and validation rules for the QCN_J01 message
 */
export const qcn_j01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    QID: segments.qidSchema,
  })
  .register(hl7v2Metadata, {
    title: 'QCN_J01',
    version: '2.6',
    description: 'HL7 v2.6 QCN_J01 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the QCN_J01 schema
 */
export type QCN_J01 = z.infer<typeof qcn_j01Schema>;

/**
 * Default export for convenience
 */
export default qcn_j01Schema;
