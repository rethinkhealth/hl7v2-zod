import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ldp';

/**
 * HL7 v2.6 LDP Segment
 * 
 * HL7 v2.6 LDP segment definition
 * Contains field definitions and constraints for the LDP segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LDP segment schema
 * Defines the structure and validation rules for the LDP segment
 */
export const ldpSchema = z.object({
  "1": fields.LDP_1,
  "2": fields.LDP_2,
  "3": z.array(fields.LDP_3).optional(),
  "4": z.array(fields.LDP_4).optional(),
  "5": z.array(fields.LDP_5).optional(),
  "6": fields.LDP_6.optional(),
  "7": fields.LDP_7.optional(),
  "8": fields.LDP_8.optional(),
  "9": fields.LDP_9.optional(),
  "10": z.array(fields.LDP_10).optional(),
  "11": fields.LDP_11.optional(),
  "12": fields.LDP_12.optional()
}).register(hl7v2Metadata, {
  title: "LDP",
  version: "2.6",
  description: "HL7 v2.6 LDP segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the LDP schema
 */
export type LDP = z.infer<typeof ldpSchema>;

/**
 * Default export for convenience
 */
export default ldpSchema;