import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/mfe';

/**
 * HL7 v2.7 MFE Segment
 * 
 * HL7 v2.7 MFE segment definition
 * Contains field definitions and constraints for the MFE segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFE segment schema
 * Defines the structure and validation rules for the MFE segment
 */
export const mfeSchema = z.object({
  "1": fields.MFE_1,
  "2": fields.MFE_2.optional(),
  "3": fields.MFE_3.optional(),
  "4": z.array(fields.MFE_4),
  "5": z.array(fields.MFE_5),
  "6": fields.MFE_6.optional(),
  "7": fields.MFE_7.optional()
}).register(hl7v2Metadata, {
  title: "MFE",
  version: "2.7",
  description: "HL7 v2.7 MFE segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the MFE schema
 */
export type MFE = z.infer<typeof mfeSchema>;

/**
 * Default export for convenience
 */
export default mfeSchema;