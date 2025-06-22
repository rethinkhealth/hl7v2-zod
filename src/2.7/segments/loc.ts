import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/loc';

/**
 * HL7 v2.7 LOC Segment
 * 
 * HL7 v2.7 LOC segment definition
 * Contains field definitions and constraints for the LOC segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LOC segment schema
 * Defines the structure and validation rules for the LOC segment
 */
export const locSchema = z.object({
  "1": fields.LOC_1,
  "2": fields.LOC_2.optional(),
  "3": z.array(fields.LOC_3),
  "4": z.array(fields.LOC_4).optional(),
  "5": z.array(fields.LOC_5).optional(),
  "6": z.array(fields.LOC_6).optional(),
  "7": z.array(fields.LOC_7).optional(),
  "8": z.array(fields.LOC_8).optional(),
  "9": fields.LOC_9.optional()
}).register(hl7v2Metadata, {
  title: "LOC",
  version: "2.7",
  description: "HL7 v2.7 LOC segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the LOC schema
 */
export type LOC = z.infer<typeof locSchema>;

/**
 * Default export for convenience
 */
export default locSchema;