import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/dst';

/**
 * HL7 v2.9 DST Segment
 * 
 * HL7 v2.9 DST segment definition
 * Contains field definitions and constraints for the DST segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DST segment schema
 * Defines the structure and validation rules for the DST segment
 */
export const dstSchema = z.object({
  "1": fields.DST_1,
  "2": z.array(fields.DST_2).optional()
}).register(hl7v2Metadata, {
  title: "DST",
  version: "2.9",
  description: "HL7 v2.9 DST segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the DST schema
 */
export type DST = z.infer<typeof dstSchema>;

/**
 * Default export for convenience
 */
export default dstSchema;