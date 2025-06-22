import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/acc';

/**
 * HL7 v2.6 ACC Segment
 *
 * HL7 v2.6 ACC segment definition
 * Contains field definitions and constraints for the ACC segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ACC segment schema
 * Defines the structure and validation rules for the ACC segment
 */
export const accSchema = z
  .object({
    '1': fields.ACC_1.optional(),
    '2': fields.ACC_2.optional(),
    '3': fields.ACC_3.optional(),
    '4': fields.ACC_4.optional(),
    '5': fields.ACC_5.optional(),
    '6': fields.ACC_6.optional(),
    '7': fields.ACC_7.optional(),
    '8': fields.ACC_8.optional(),
    '9': fields.ACC_9.optional(),
    '10': fields.ACC_10.optional(),
    '11': fields.ACC_11.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'ACC',
    version: '2.6',
    description: 'HL7 v2.6 ACC segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the ACC schema
 */
export type ACC = z.infer<typeof accSchema>;

/**
 * Default export for convenience
 */
export default accSchema;
