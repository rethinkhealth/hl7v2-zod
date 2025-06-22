import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/stz';

/**
 * HL7 v2.9 STZ Segment
 * 
 * HL7 v2.9 STZ segment definition
 * Contains field definitions and constraints for the STZ segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * STZ segment schema
 * Defines the structure and validation rules for the STZ segment
 */
export const stzSchema = z.object({
  "1": fields.STZ_1.optional(),
  "2": fields.STZ_2.optional(),
  "3": fields.STZ_3.optional(),
  "4": fields.STZ_4.optional()
}).register(hl7v2Metadata, {
  title: "STZ",
  version: "2.9",
  description: "HL7 v2.9 STZ segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the STZ schema
 */
export type STZ = z.infer<typeof stzSchema>;

/**
 * Default export for convenience
 */
export default stzSchema;