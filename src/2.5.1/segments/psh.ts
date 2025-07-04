import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/psh';

/**
 * HL7 v2.5 PSH Segment
 * 
 * HL7 v2.5 PSH segment definition
 * Contains field definitions and constraints for the PSH segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PSH segment schema
 * Defines the structure and validation rules for the PSH segment
 */
export const pshSchema = z.object({
  "1": fields.PSH_1,
  "2": fields.PSH_2.optional(),
  "3": fields.PSH_3,
  "4": fields.PSH_4.optional(),
  "5": fields.PSH_5.optional(),
  "6": fields.PSH_6.optional(),
  "7": fields.PSH_7.optional(),
  "8": fields.PSH_8.optional(),
  "9": fields.PSH_9.optional(),
  "10": fields.PSH_10.optional(),
  "11": fields.PSH_11.optional(),
  "12": fields.PSH_12.optional(),
  "13": z.array(fields.PSH_13).optional(),
  "14": z.array(fields.PSH_14).optional()
}).register(hl7v2Metadata, {
  title: "PSH",
  version: "2.5",
  description: "HL7 v2.5 PSH segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PSH schema
 */
export type PSH = z.infer<typeof pshSchema>;

/**
 * Default export for convenience
 */
export default pshSchema;