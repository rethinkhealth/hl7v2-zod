import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/nte';

/**
 * HL7 v2.5 NTE Segment
 * 
 * HL7 v2.5 NTE segment definition
 * Contains field definitions and constraints for the NTE segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NTE segment schema
 * Defines the structure and validation rules for the NTE segment
 */
export const nteSchema = z.object({
  "1": fields.NTE_1.optional(),
  "2": fields.NTE_2.optional(),
  "3": z.array(fields.NTE_3).optional(),
  "4": fields.NTE_4.optional()
}).register(hl7v2Metadata, {
  title: "NTE",
  version: "2.5",
  description: "HL7 v2.5 NTE segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the NTE schema
 */
export type NTE = z.infer<typeof nteSchema>;

/**
 * Default export for convenience
 */
export default nteSchema;