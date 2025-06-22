import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/oh4';

/**
 * HL7 v2.9 OH4 Segment
 * 
 * HL7 v2.9 OH4 segment definition
 * Contains field definitions and constraints for the OH4 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OH4 segment schema
 * Defines the structure and validation rules for the OH4 segment
 */
export const oh4Schema = z.object({
  "1": fields.OH4_1,
  "2": fields.OH4_2.optional(),
  "3": fields.OH4_3,
  "4": fields.OH4_4.optional(),
  "5": fields.OH4_5.optional(),
  "6": fields.OH4_6.optional()
}).register(hl7v2Metadata, {
  title: "OH4",
  version: "2.9",
  description: "HL7 v2.9 OH4 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the OH4 schema
 */
export type OH4 = z.infer<typeof oh4Schema>;

/**
 * Default export for convenience
 */
export default oh4Schema;