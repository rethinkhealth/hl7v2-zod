import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/qrf';

/**
 * HL7 v2.6 QRF Segment
 *
 * HL7 v2.6 QRF segment definition
 * Contains field definitions and constraints for the QRF segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QRF segment schema
 * Defines the structure and validation rules for the QRF segment
 */
export const qrfSchema = z
  .object({
    '1': z.array(fields.QRF_1),
    '2': fields.QRF_2.optional(),
    '3': fields.QRF_3.optional(),
    '4': z.array(fields.QRF_4).optional(),
    '5': z.array(fields.QRF_5).optional(),
    '6': z.array(fields.QRF_6).optional(),
    '7': z.array(fields.QRF_7).optional(),
    '8': z.array(fields.QRF_8).optional(),
    '9': fields.QRF_9.optional(),
    '10': fields.QRF_10.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'QRF',
    version: '2.6',
    description: 'HL7 v2.6 QRF segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the QRF schema
 */
export type QRF = z.infer<typeof qrfSchema>;

/**
 * Default export for convenience
 */
export default qrfSchema;
