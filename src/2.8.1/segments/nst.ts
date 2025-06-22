import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/nst';

/**
 * HL7 v2.8 NST Segment
 * 
 * HL7 v2.8 NST segment definition
 * Contains field definitions and constraints for the NST segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NST segment schema
 * Defines the structure and validation rules for the NST segment
 */
export const nstSchema = z.object({
  "1": fields.NST_1,
  "2": fields.NST_2.optional(),
  "3": fields.NST_3.optional(),
  "4": fields.NST_4.optional(),
  "5": fields.NST_5.optional(),
  "6": fields.NST_6.optional(),
  "7": fields.NST_7.optional(),
  "8": fields.NST_8.optional(),
  "9": fields.NST_9.optional(),
  "10": fields.NST_10.optional(),
  "11": fields.NST_11.optional(),
  "12": fields.NST_12.optional(),
  "13": fields.NST_13.optional(),
  "14": fields.NST_14.optional(),
  "15": fields.NST_15.optional()
}).register(hl7v2Metadata, {
  title: "NST",
  version: "2.8",
  description: "HL7 v2.8 NST segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the NST schema
 */
export type NST = z.infer<typeof nstSchema>;

/**
 * Default export for convenience
 */
export default nstSchema;