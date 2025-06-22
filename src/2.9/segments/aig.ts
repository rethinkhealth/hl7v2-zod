import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/aig';

/**
 * HL7 v2.9 AIG Segment
 * 
 * HL7 v2.9 AIG segment definition
 * Contains field definitions and constraints for the AIG segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AIG segment schema
 * Defines the structure and validation rules for the AIG segment
 */
export const aigSchema = z.object({
  "1": fields.AIG_1,
  "2": fields.AIG_2.optional(),
  "3": fields.AIG_3.optional(),
  "4": fields.AIG_4,
  "5": z.array(fields.AIG_5).optional(),
  "6": fields.AIG_6.optional(),
  "7": fields.AIG_7.optional(),
  "8": fields.AIG_8.optional(),
  "9": fields.AIG_9.optional(),
  "10": fields.AIG_10.optional(),
  "11": fields.AIG_11.optional(),
  "12": fields.AIG_12.optional(),
  "13": fields.AIG_13.optional(),
  "14": fields.AIG_14.optional()
}).register(hl7v2Metadata, {
  title: "AIG",
  version: "2.9",
  description: "HL7 v2.9 AIG segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the AIG schema
 */
export type AIG = z.infer<typeof aigSchema>;

/**
 * Default export for convenience
 */
export default aigSchema;