import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/vnd';

/**
 * HL7 v2.8 VND Segment
 * 
 * HL7 v2.8 VND segment definition
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
  "2": fields.VND_2,
  "3": fields.VND_3.optional(),
  "4": fields.VND_4.optional(),
  "5": fields.VND_5.optional()
}).register(hl7v2Metadata, {
  title: "VND",
  version: "2.8",
  description: "HL7 v2.8 VND segment",
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