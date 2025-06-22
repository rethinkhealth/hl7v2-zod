import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/fac';

/**
 * HL7 v2.9 FAC Segment
 * 
 * HL7 v2.9 FAC segment definition
 * Contains field definitions and constraints for the FAC segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FAC segment schema
 * Defines the structure and validation rules for the FAC segment
 */
export const facSchema = z.object({
  "1": fields.FAC_1,
  "2": fields.FAC_2.optional(),
  "3": z.array(fields.FAC_3),
  "4": fields.FAC_4,
  "5": z.array(fields.FAC_5).optional(),
  "6": z.array(fields.FAC_6).optional(),
  "7": z.array(fields.FAC_7).optional(),
  "8": z.array(fields.FAC_8).optional(),
  "9": z.array(fields.FAC_9),
  "10": fields.FAC_10.optional(),
  "11": z.array(fields.FAC_11).optional(),
  "12": fields.FAC_12.optional()
}).register(hl7v2Metadata, {
  title: "FAC",
  version: "2.9",
  description: "HL7 v2.9 FAC segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the FAC schema
 */
export type FAC = z.infer<typeof facSchema>;

/**
 * Default export for convenience
 */
export default facSchema;