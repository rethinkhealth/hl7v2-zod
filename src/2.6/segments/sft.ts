import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/sft';

/**
 * HL7 v2.6 SFT Segment
 * 
 * HL7 v2.6 SFT segment definition
 * Contains field definitions and constraints for the SFT segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SFT segment schema
 * Defines the structure and validation rules for the SFT segment
 */
export const sftSchema = z.object({
  "1": fields.SFT_1,
  "2": fields.SFT_2,
  "3": fields.SFT_3,
  "4": fields.SFT_4,
  "5": fields.SFT_5.optional(),
  "6": fields.SFT_6.optional()
}).register(hl7v2Metadata, {
  title: "SFT",
  version: "2.6",
  description: "HL7 v2.6 SFT segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the SFT schema
 */
export type SFT = z.infer<typeof sftSchema>;

/**
 * Default export for convenience
 */
export default sftSchema;