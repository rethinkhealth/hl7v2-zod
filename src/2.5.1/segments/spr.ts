import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/spr';

/**
 * HL7 v2.5 SPR Segment
 * 
 * HL7 v2.5 SPR segment definition
 * Contains field definitions and constraints for the SPR segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SPR segment schema
 * Defines the structure and validation rules for the SPR segment
 */
export const sprSchema = z.object({
  "1": fields.SPR_1.optional(),
  "2": fields.SPR_2,
  "3": fields.SPR_3,
  "4": z.array(fields.SPR_4).optional()
}).register(hl7v2Metadata, {
  title: "SPR",
  version: "2.5",
  description: "HL7 v2.5 SPR segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the SPR schema
 */
export type SPR = z.infer<typeof sprSchema>;

/**
 * Default export for convenience
 */
export default sprSchema;