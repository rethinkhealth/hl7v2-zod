import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rel';

/**
 * HL7 v2.6 REL Segment
 * 
 * HL7 v2.6 REL segment definition
 * Contains field definitions and constraints for the REL segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * REL segment schema
 * Defines the structure and validation rules for the REL segment
 */
export const relSchema = z.object({
  "1": fields.REL_1.optional(),
  "2": fields.REL_2,
  "3": fields.REL_3,
  "4": fields.REL_4,
  "5": fields.REL_5,
  "6": fields.REL_6.optional(),
  "7": fields.REL_7.optional(),
  "8": fields.REL_8.optional(),
  "9": fields.REL_9.optional(),
  "10": fields.REL_10.optional(),
  "11": fields.REL_11.optional(),
  "12": fields.REL_12.optional(),
  "13": fields.REL_13.optional(),
  "14": fields.REL_14.optional(),
  "15": fields.REL_15.optional(),
  "16": fields.REL_16.optional()
}).register(hl7v2Metadata, {
  title: "REL",
  version: "2.6",
  description: "HL7 v2.6 REL segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the REL schema
 */
export type REL = z.infer<typeof relSchema>;

/**
 * Default export for convenience
 */
export default relSchema;