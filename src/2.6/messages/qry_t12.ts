import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 QRY_T12 Message
 *
 * HL7 v2.6 QRY_T12 message definition
 * Contains segment definitions and constraints for the QRY_T12 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QRY_T12 message schema
 * Defines the structure and validation rules for the QRY_T12 message
 */
export const qry_t12Schema = z
  .object({
    MSH: segments.mshSchema,
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'QRY_T12',
    version: '2.6',
    description: 'HL7 v2.6 QRY_T12 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the QRY_T12 schema
 */
export type QRY_T12 = z.infer<typeof qry_t12Schema>;

/**
 * Default export for convenience
 */
export default qry_t12Schema;
