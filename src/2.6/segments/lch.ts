import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/lch';

/**
 * HL7 v2.6 LCH Segment
 *
 * HL7 v2.6 LCH segment definition
 * Contains field definitions and constraints for the LCH segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LCH segment schema
 * Defines the structure and validation rules for the LCH segment
 */
export const lchSchema = z
  .object({
    '1': fields.LCH_1,
    '2': fields.LCH_2.optional(),
    '3': fields.LCH_3.optional(),
    '4': fields.LCH_4,
    '5': fields.LCH_5,
  })
  .register(hl7v2Metadata, {
    title: 'LCH',
    version: '2.6',
    description: 'HL7 v2.6 LCH segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the LCH schema
 */
export type LCH = z.infer<typeof lchSchema>;

/**
 * Default export for convenience
 */
export default lchSchema;
