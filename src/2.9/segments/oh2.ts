import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/oh2';

/**
 * HL7 v2.9 OH2 Segment
 * 
 * HL7 v2.9 OH2 segment definition
 * Contains field definitions and constraints for the OH2 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OH2 segment schema
 * Defines the structure and validation rules for the OH2 segment
 */
export const oh2Schema = z.object({
  "1": fields.OH2_1,
  "2": fields.OH2_2.optional(),
  "3": fields.OH2_3.optional(),
  "4": fields.OH2_4,
  "5": fields.OH2_5,
  "6": fields.OH2_6.optional(),
  "7": fields.OH2_7.optional(),
  "8": fields.OH2_8.optional(),
  "9": fields.OH2_9.optional(),
  "10": fields.OH2_10.optional(),
  "11": fields.OH2_11.optional(),
  "12": fields.OH2_12.optional(),
  "13": z.array(fields.OH2_13).optional(),
  "14": fields.OH2_14.optional(),
  "15": z.array(fields.OH2_15).optional(),
  "16": z.array(fields.OH2_16).optional(),
  "17": fields.OH2_17.optional(),
  "18": fields.OH2_18.optional()
}).register(hl7v2Metadata, {
  title: "OH2",
  version: "2.9",
  description: "HL7 v2.9 OH2 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the OH2 schema
 */
export type OH2 = z.infer<typeof oh2Schema>;

/**
 * Default export for convenience
 */
export default oh2Schema;