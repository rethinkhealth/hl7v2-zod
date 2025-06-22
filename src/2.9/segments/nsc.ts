import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/nsc';

/**
 * HL7 v2.9 NSC Segment
 * 
 * HL7 v2.9 NSC segment definition
 * Contains field definitions and constraints for the NSC segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NSC segment schema
 * Defines the structure and validation rules for the NSC segment
 */
export const nscSchema = z.object({
  "1": fields.NSC_1,
  "2": fields.NSC_2.optional(),
  "3": fields.NSC_3.optional(),
  "4": fields.NSC_4.optional(),
  "5": fields.NSC_5.optional(),
  "6": fields.NSC_6.optional(),
  "7": fields.NSC_7.optional(),
  "8": fields.NSC_8.optional(),
  "9": fields.NSC_9.optional()
}).register(hl7v2Metadata, {
  title: "NSC",
  version: "2.9",
  description: "HL7 v2.9 NSC segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the NSC schema
 */
export type NSC = z.infer<typeof nscSchema>;

/**
 * Default export for convenience
 */
export default nscSchema;