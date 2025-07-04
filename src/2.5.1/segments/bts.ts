import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/bts';

/**
 * HL7 v2.5 BTS Segment
 * 
 * HL7 v2.5 BTS segment definition
 * Contains field definitions and constraints for the BTS segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BTS segment schema
 * Defines the structure and validation rules for the BTS segment
 */
export const btsSchema = z.object({
  "1": fields.BTS_1.optional(),
  "2": fields.BTS_2.optional(),
  "3": z.array(fields.BTS_3).optional()
}).register(hl7v2Metadata, {
  title: "BTS",
  version: "2.5",
  description: "HL7 v2.5 BTS segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the BTS schema
 */
export type BTS = z.infer<typeof btsSchema>;

/**
 * Default export for convenience
 */
export default btsSchema;