import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/prd';

/**
 * HL7 v2.6 PRD Segment
 * 
 * HL7 v2.6 PRD segment definition
 * Contains field definitions and constraints for the PRD segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRD segment schema
 * Defines the structure and validation rules for the PRD segment
 */
export const prdSchema = z.object({
  "1": z.array(fields.PRD_1),
  "2": z.array(fields.PRD_2).optional(),
  "3": z.array(fields.PRD_3).optional(),
  "4": fields.PRD_4.optional(),
  "5": z.array(fields.PRD_5).optional(),
  "6": fields.PRD_6.optional(),
  "7": z.array(fields.PRD_7).optional(),
  "8": fields.PRD_8.optional(),
  "9": z.array(fields.PRD_9).optional(),
  "10": fields.PRD_10.optional(),
  "11": z.array(fields.PRD_11).optional(),
  "12": z.array(fields.PRD_12).optional(),
  "13": z.array(fields.PRD_13).optional(),
  "14": fields.PRD_14.optional()
}).register(hl7v2Metadata, {
  title: "PRD",
  version: "2.6",
  description: "HL7 v2.6 PRD segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PRD schema
 */
export type PRD = z.infer<typeof prdSchema>;

/**
 * Default export for convenience
 */
export default prdSchema;