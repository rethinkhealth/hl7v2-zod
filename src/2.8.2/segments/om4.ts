import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/om4';

/**
 * HL7 v2.8 OM4 Segment
 * 
 * HL7 v2.8 OM4 segment definition
 * Contains field definitions and constraints for the OM4 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM4 segment schema
 * Defines the structure and validation rules for the OM4 segment
 */
export const om4Schema = z.object({
  "1": fields.OM4_1.optional(),
  "2": fields.OM4_2.optional(),
  "3": z.array(fields.OM4_3).optional(),
  "4": z.array(fields.OM4_4).optional(),
  "5": z.array(fields.OM4_5).optional(),
  "6": fields.OM4_6.optional(),
  "7": fields.OM4_7.optional(),
  "8": fields.OM4_8.optional(),
  "9": fields.OM4_9.optional(),
  "10": fields.OM4_10.optional(),
  "11": fields.OM4_11.optional(),
  "12": fields.OM4_12.optional(),
  "13": z.array(fields.OM4_13).optional(),
  "14": fields.OM4_14.optional(),
  "15": z.array(fields.OM4_15).optional(),
  "16": fields.OM4_16.optional(),
  "17": fields.OM4_17.optional(),
  "18": z.array(fields.OM4_18).optional()
}).register(hl7v2Metadata, {
  title: "OM4",
  version: "2.8",
  description: "HL7 v2.8 OM4 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the OM4 schema
 */
export type OM4 = z.infer<typeof om4Schema>;

/**
 * Default export for convenience
 */
export default om4Schema;