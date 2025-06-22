import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ub2';

/**
 * HL7 v2.8 UB2 Segment
 * 
 * HL7 v2.8 UB2 segment definition
 * Contains field definitions and constraints for the UB2 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * UB2 segment schema
 * Defines the structure and validation rules for the UB2 segment
 */
export const ub2Schema = z.object({
  "1": fields.UB2_1.optional(),
  "2": fields.UB2_2.optional(),
  "3": z.array(fields.UB2_3).optional(),
  "4": fields.UB2_4.optional(),
  "5": fields.UB2_5.optional(),
  "6": z.array(fields.UB2_6).optional(),
  "7": z.array(fields.UB2_7).optional(),
  "8": z.array(fields.UB2_8).optional(),
  "9": z.array(fields.UB2_9).optional(),
  "10": z.array(fields.UB2_10).optional(),
  "11": fields.UB2_11.optional(),
  "12": z.array(fields.UB2_12).optional(),
  "13": z.array(fields.UB2_13).optional(),
  "14": z.array(fields.UB2_14).optional(),
  "15": fields.UB2_15.optional(),
  "16": z.array(fields.UB2_16).optional(),
  "17": fields.UB2_17.optional()
}).register(hl7v2Metadata, {
  title: "UB2",
  version: "2.8",
  description: "HL7 v2.8 UB2 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the UB2 schema
 */
export type UB2 = z.infer<typeof ub2Schema>;

/**
 * Default export for convenience
 */
export default ub2Schema;