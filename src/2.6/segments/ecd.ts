import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ecd';

/**
 * HL7 v2.6 ECD Segment
 *
 * HL7 v2.6 ECD segment definition
 * Contains field definitions and constraints for the ECD segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ECD segment schema
 * Defines the structure and validation rules for the ECD segment
 */
export const ecdSchema = z
  .object({
    '1': fields.ECD_1,
    '2': fields.ECD_2,
    '3': fields.ECD_3.optional(),
    '4': fields.ECD_4.optional(),
    '5': z.array(fields.ECD_5).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'ECD',
    version: '2.6',
    description: 'HL7 v2.6 ECD segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the ECD schema
 */
export type ECD = z.infer<typeof ecdSchema>;

/**
 * Default export for convenience
 */
export default ecdSchema;
