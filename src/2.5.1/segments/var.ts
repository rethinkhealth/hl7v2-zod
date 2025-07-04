import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/var';

/**
 * HL7 v2.5 VAR Segment
 * 
 * HL7 v2.5 VAR segment definition
 * Contains field definitions and constraints for the VAR segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VAR segment schema
 * Defines the structure and validation rules for the VAR segment
 */
export const varSchema = z.object({
  "1": fields.VAR_1,
  "2": fields.VAR_2,
  "3": fields.VAR_3.optional(),
  "4": z.array(fields.VAR_4).optional(),
  "5": fields.VAR_5.optional(),
  "6": z.array(fields.VAR_6).optional()
}).register(hl7v2Metadata, {
  title: "VAR",
  version: "2.5",
  description: "HL7 v2.5 VAR segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the VAR schema
 */
export type VAR = z.infer<typeof varSchema>;

/**
 * Default export for convenience
 */
export default varSchema;