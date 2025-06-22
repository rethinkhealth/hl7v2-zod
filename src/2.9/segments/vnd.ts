import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/vnd';

/**
 * HL7 v2.9 VND Segment
 * 
 * HL7 v2.9 VND segment definition
 * Contains field definitions and constraints for the VND segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VND segment schema
 * Defines the structure and validation rules for the VND segment
 */
export const vndSchema = z.object({
  "1": fields.VND_1,
  "2": fields.VND_2.optional(),
  "3": fields.VND_3.optional(),
  "4": fields.VND_4.optional(),
  "5": fields.VND_5.optional(),
  "6": z.array(fields.VND_6).optional(),
  "7": fields.VND_7.optional(),
  "8": fields.VND_8.optional(),
  "9": z.array(fields.VND_9).optional(),
  "10": z.array(fields.VND_10).optional(),
  "11": fields.VND_11.optional()
}).register(hl7v2Metadata, {
  title: "VND",
  version: "2.9",
  description: "HL7 v2.9 VND segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the VND schema
 */
export type VND = z.infer<typeof vndSchema>;

/**
 * Default export for convenience
 */
export default vndSchema;