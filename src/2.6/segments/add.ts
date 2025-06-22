import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/add';

/**
 * HL7 v2.6 ADD Segment
 *
 * HL7 v2.6 ADD segment definition
 * Contains field definitions and constraints for the ADD segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADD segment schema
 * Defines the structure and validation rules for the ADD segment
 */
export const addSchema = z
  .object({
    '1': fields.ADD_1.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'ADD',
    version: '2.6',
    description: 'HL7 v2.6 ADD segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the ADD schema
 */
export type ADD = z.infer<typeof addSchema>;

/**
 * Default export for convenience
 */
export default addSchema;
