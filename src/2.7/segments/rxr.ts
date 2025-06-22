import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rxr';

/**
 * HL7 v2.7 RXR Segment
 * 
 * HL7 v2.7 RXR segment definition
 * Contains field definitions and constraints for the RXR segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXR segment schema
 * Defines the structure and validation rules for the RXR segment
 */
export const rxrSchema = z.object({
  "1": fields.RXR_1,
  "2": fields.RXR_2.optional(),
  "3": fields.RXR_3.optional(),
  "4": fields.RXR_4.optional(),
  "5": fields.RXR_5.optional(),
  "6": fields.RXR_6.optional()
}).register(hl7v2Metadata, {
  title: "RXR",
  version: "2.7",
  description: "HL7 v2.7 RXR segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RXR schema
 */
export type RXR = z.infer<typeof rxrSchema>;

/**
 * Default export for convenience
 */
export default rxrSchema;