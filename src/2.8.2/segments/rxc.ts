import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rxc';

/**
 * HL7 v2.8 RXC Segment
 * 
 * HL7 v2.8 RXC segment definition
 * Contains field definitions and constraints for the RXC segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXC segment schema
 * Defines the structure and validation rules for the RXC segment
 */
export const rxcSchema = z.object({
  "1": fields.RXC_1,
  "2": fields.RXC_2,
  "3": fields.RXC_3,
  "4": fields.RXC_4,
  "5": fields.RXC_5.optional(),
  "6": fields.RXC_6.optional(),
  "7": z.array(fields.RXC_7).optional(),
  "8": fields.RXC_8.optional(),
  "9": fields.RXC_9.optional(),
  "10": fields.RXC_10.optional(),
  "11": fields.RXC_11.optional()
}).register(hl7v2Metadata, {
  title: "RXC",
  version: "2.8",
  description: "HL7 v2.8 RXC segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RXC schema
 */
export type RXC = z.infer<typeof rxcSchema>;

/**
 * Default export for convenience
 */
export default rxcSchema;