import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/fhs';

/**
 * HL7 v2.6 FHS Segment
 *
 * HL7 v2.6 FHS segment definition
 * Contains field definitions and constraints for the FHS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FHS segment schema
 * Defines the structure and validation rules for the FHS segment
 */
export const fhsSchema = z
  .object({
    '1': fields.FHS_1,
    '2': fields.FHS_2,
    '3': fields.FHS_3.optional(),
    '4': fields.FHS_4.optional(),
    '5': fields.FHS_5.optional(),
    '6': fields.FHS_6.optional(),
    '7': fields.FHS_7.optional(),
    '8': fields.FHS_8.optional(),
    '9': fields.FHS_9.optional(),
    '10': fields.FHS_10.optional(),
    '11': fields.FHS_11.optional(),
    '12': fields.FHS_12.optional(),
    '13': fields.FHS_13.optional(),
    '14': fields.FHS_14.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'FHS',
    version: '2.6',
    description: 'HL7 v2.6 FHS segment',
    type: 'Segment',
  });

/**
 * TypeScript type inferred from the FHS schema
 */
export type FHS = z.infer<typeof fhsSchema>;

/**
 * Default export for convenience
 */
export default fhsSchema;
