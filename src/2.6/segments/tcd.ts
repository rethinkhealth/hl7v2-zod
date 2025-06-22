import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/tcd';

/**
 * HL7 v2.6 TCD Segment
 *
 * HL7 v2.6 TCD segment definition
 * Contains field definitions and constraints for the TCD segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TCD segment schema
 * Defines the structure and validation rules for the TCD segment
 */
export const tcdSchema = z
  .object({
    '1': fields.TCD_1,
    '2': fields.TCD_2.optional(),
    '3': fields.TCD_3.optional(),
    '4': fields.TCD_4.optional(),
    '5': fields.TCD_5.optional(),
    '6': fields.TCD_6.optional(),
    '7': fields.TCD_7.optional(),
    '8': fields.TCD_8.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'TCD',
    version: '2.6',
    description: 'HL7 v2.6 TCD segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the TCD schema
 */
export type TCD = z.infer<typeof tcdSchema>;

/**
 * Default export for convenience
 */
export default tcdSchema;
