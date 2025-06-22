import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/org';

/**
 * HL7 v2.6 ORG Segment
 *
 * HL7 v2.6 ORG segment definition
 * Contains field definitions and constraints for the ORG segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORG segment schema
 * Defines the structure and validation rules for the ORG segment
 */
export const orgSchema = z
  .object({
    '1': fields.ORG_1,
    '2': fields.ORG_2.optional(),
    '3': fields.ORG_3.optional(),
    '4': fields.ORG_4.optional(),
    '5': fields.ORG_5.optional(),
    '6': fields.ORG_6.optional(),
    '7': fields.ORG_7.optional(),
    '8': fields.ORG_8.optional(),
    '9': fields.ORG_9.optional(),
    '10': fields.ORG_10.optional(),
    '11': fields.ORG_11.optional(),
    '12': fields.ORG_12.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'ORG',
    version: '2.6',
    description: 'HL7 v2.6 ORG segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the ORG schema
 */
export type ORG = z.infer<typeof orgSchema>;

/**
 * Default export for convenience
 */
export default orgSchema;
