import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/oh1';

/**
 * HL7 v2.9 OH1 Segment
 * 
 * HL7 v2.9 OH1 segment definition
 * Contains field definitions and constraints for the OH1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OH1 segment schema
 * Defines the structure and validation rules for the OH1 segment
 */
export const oh1Schema = z.object({
  "1": fields.OH1_1,
  "2": fields.OH1_2.optional(),
  "3": fields.OH1_3,
  "4": fields.OH1_4.optional(),
  "5": fields.OH1_5.optional(),
  "6": fields.OH1_6,
  "7": fields.OH1_7.optional()
}).register(hl7v2Metadata, {
  title: "OH1",
  version: "2.9",
  description: "HL7 v2.9 OH1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the OH1 schema
 */
export type OH1 = z.infer<typeof oh1Schema>;

/**
 * Default export for convenience
 */
export default oh1Schema;