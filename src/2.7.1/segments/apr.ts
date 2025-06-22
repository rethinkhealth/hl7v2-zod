import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/apr';

/**
 * HL7 v2.7 APR Segment
 * 
 * HL7 v2.7 APR segment definition
 * Contains field definitions and constraints for the APR segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * APR segment schema
 * Defines the structure and validation rules for the APR segment
 */
export const aprSchema = z.object({
  "1": z.array(fields.APR_1).optional(),
  "2": z.array(fields.APR_2).optional(),
  "3": z.array(fields.APR_3).optional(),
  "4": fields.APR_4.optional(),
  "5": z.array(fields.APR_5).optional()
}).register(hl7v2Metadata, {
  title: "APR",
  version: "2.7",
  description: "HL7 v2.7 APR segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the APR schema
 */
export type APR = z.infer<typeof aprSchema>;

/**
 * Default export for convenience
 */
export default aprSchema;