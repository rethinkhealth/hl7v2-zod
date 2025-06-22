import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/oh3';

/**
 * HL7 v2.9 OH3 Segment
 * 
 * HL7 v2.9 OH3 segment definition
 * Contains field definitions and constraints for the OH3 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OH3 segment schema
 * Defines the structure and validation rules for the OH3 segment
 */
export const oh3Schema = z.object({
  "1": fields.OH3_1,
  "2": fields.OH3_2.optional(),
  "3": fields.OH3_3,
  "4": fields.OH3_4,
  "5": fields.OH3_5.optional(),
  "6": fields.OH3_6.optional(),
  "7": fields.OH3_7.optional(),
  "8": fields.OH3_8.optional()
}).register(hl7v2Metadata, {
  title: "OH3",
  version: "2.9",
  description: "HL7 v2.9 OH3 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the OH3 schema
 */
export type OH3 = z.infer<typeof oh3Schema>;

/**
 * Default export for convenience
 */
export default oh3Schema;