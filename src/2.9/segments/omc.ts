import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/omc';

/**
 * HL7 v2.9 OMC Segment
 * 
 * HL7 v2.9 OMC segment definition
 * Contains field definitions and constraints for the OMC segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMC segment schema
 * Defines the structure and validation rules for the OMC segment
 */
export const omcSchema = z.object({
  "1": fields.OMC_1.optional(),
  "2": fields.OMC_2.optional(),
  "3": fields.OMC_3.optional(),
  "4": fields.OMC_4,
  "5": z.array(fields.OMC_5),
  "6": fields.OMC_6,
  "7": fields.OMC_7.optional(),
  "8": fields.OMC_8.optional(),
  "9": fields.OMC_9.optional(),
  "10": fields.OMC_10.optional(),
  "11": z.array(fields.OMC_11).optional(),
  "12": fields.OMC_12.optional(),
  "13": fields.OMC_13.optional()
}).register(hl7v2Metadata, {
  title: "OMC",
  version: "2.9",
  description: "HL7 v2.9 OMC segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the OMC schema
 */
export type OMC = z.infer<typeof omcSchema>;

/**
 * Default export for convenience
 */
export default omcSchema;