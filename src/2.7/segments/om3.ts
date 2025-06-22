import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/om3';

/**
 * HL7 v2.7 OM3 Segment
 * 
 * HL7 v2.7 OM3 segment definition
 * Contains field definitions and constraints for the OM3 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM3 segment schema
 * Defines the structure and validation rules for the OM3 segment
 */
export const om3Schema = z.object({
  "1": fields.OM3_1.optional(),
  "2": fields.OM3_2.optional(),
  "3": z.array(fields.OM3_3).optional(),
  "4": z.array(fields.OM3_4).optional(),
  "5": z.array(fields.OM3_5).optional(),
  "6": z.array(fields.OM3_6).optional(),
  "7": fields.OM3_7.optional()
}).register(hl7v2Metadata, {
  title: "OM3",
  version: "2.7",
  description: "HL7 v2.7 OM3 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the OM3 schema
 */
export type OM3 = z.infer<typeof om3Schema>;

/**
 * Default export for convenience
 */
export default om3Schema;