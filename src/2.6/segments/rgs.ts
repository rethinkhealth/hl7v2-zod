import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rgs';

/**
 * HL7 v2.6 RGS Segment
 *
 * HL7 v2.6 RGS segment definition
 * Contains field definitions and constraints for the RGS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RGS segment schema
 * Defines the structure and validation rules for the RGS segment
 */
export const rgsSchema = z
  .object({
    '1': fields.RGS_1,
    '2': fields.RGS_2.optional(),
    '3': fields.RGS_3.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGS',
    version: '2.6',
    description: 'HL7 v2.6 RGS segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the RGS schema
 */
export type RGS = z.infer<typeof rgsSchema>;

/**
 * Default export for convenience
 */
export default rgsSchema;
