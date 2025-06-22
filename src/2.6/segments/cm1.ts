import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/cm1';

/**
 * HL7 v2.6 CM1 Segment
 *
 * HL7 v2.6 CM1 segment definition
 * Contains field definitions and constraints for the CM1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CM1 segment schema
 * Defines the structure and validation rules for the CM1 segment
 */
export const cm1Schema = z
  .object({
    '1': fields.CM1_1,
    '2': fields.CM1_2,
    '3': fields.CM1_3,
  })
  .register(hl7v2Metadata, {
    title: 'CM1',
    version: '2.6',
    description: 'HL7 v2.6 CM1 segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the CM1 schema
 */
export type CM1 = z.infer<typeof cm1Schema>;

/**
 * Default export for convenience
 */
export default cm1Schema;
