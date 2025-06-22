import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/qpd';

/**
 * HL7 v2.6 QPD Segment
 *
 * HL7 v2.6 QPD segment definition
 * Contains field definitions and constraints for the QPD segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QPD segment schema
 * Defines the structure and validation rules for the QPD segment
 */
export const qpdSchema = z
  .object({
    '1': fields.QPD_1,
    '2': fields.QPD_2.optional(),
    '3': fields.QPD_3.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'QPD',
    version: '2.6',
    description: 'HL7 v2.6 QPD segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the QPD schema
 */
export type QPD = z.infer<typeof qpdSchema>;

/**
 * Default export for convenience
 */
export default qpdSchema;
