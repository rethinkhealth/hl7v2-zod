import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/err';

/**
 * HL7 v2.8 ERR Segment
 * 
 * HL7 v2.8 ERR segment definition
 * Contains field definitions and constraints for the ERR segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ERR segment schema
 * Defines the structure and validation rules for the ERR segment
 */
export const errSchema = z.object({
  "2": z.array(fields.ERR_2).optional(),
  "3": fields.ERR_3,
  "4": fields.ERR_4,
  "5": fields.ERR_5.optional(),
  "6": z.array(fields.ERR_6).optional(),
  "7": fields.ERR_7.optional(),
  "8": fields.ERR_8.optional(),
  "9": z.array(fields.ERR_9).optional(),
  "10": fields.ERR_10.optional(),
  "11": z.array(fields.ERR_11).optional(),
  "12": z.array(fields.ERR_12).optional()
}).register(hl7v2Metadata, {
  title: "ERR",
  version: "2.8",
  description: "HL7 v2.8 ERR segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ERR schema
 */
export type ERR = z.infer<typeof errSchema>;

/**
 * Default export for convenience
 */
export default errSchema;