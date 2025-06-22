import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/sgh';

/**
 * HL7 v2.9 SGH Segment
 * 
 * HL7 v2.9 SGH segment definition
 * Contains field definitions and constraints for the SGH segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SGH segment schema
 * Defines the structure and validation rules for the SGH segment
 */
export const sghSchema = z.object({
  "1": fields.SGH_1,
  "2": fields.SGH_2.optional()
}).register(hl7v2Metadata, {
  title: "SGH",
  version: "2.9",
  description: "HL7 v2.9 SGH segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the SGH schema
 */
export type SGH = z.infer<typeof sghSchema>;

/**
 * Default export for convenience
 */
export default sghSchema;