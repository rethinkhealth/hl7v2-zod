import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/gp1';

/**
 * HL7 v2.6 GP1 Segment
 *
 * HL7 v2.6 GP1 segment definition
 * Contains field definitions and constraints for the GP1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * GP1 segment schema
 * Defines the structure and validation rules for the GP1 segment
 */
export const gp1Schema = z
  .object({
    '1': fields.GP1_1,
    '2': z.array(fields.GP1_2).optional(),
    '3': fields.GP1_3.optional(),
    '4': z.array(fields.GP1_4).optional(),
    '5': fields.GP1_5.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'GP1',
    version: '2.6',
    description: 'HL7 v2.6 GP1 segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the GP1 schema
 */
export type GP1 = z.infer<typeof gp1Schema>;

/**
 * Default export for convenience
 */
export default gp1Schema;
