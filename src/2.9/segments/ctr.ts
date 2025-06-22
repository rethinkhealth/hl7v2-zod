import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ctr';

/**
 * HL7 v2.9 CTR Segment
 * 
 * HL7 v2.9 CTR segment definition
 * Contains field definitions and constraints for the CTR segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CTR segment schema
 * Defines the structure and validation rules for the CTR segment
 */
export const ctrSchema = z.object({
  "1": fields.CTR_1,
  "2": fields.CTR_2.optional(),
  "3": fields.CTR_3.optional(),
  "4": fields.CTR_4,
  "5": fields.CTR_5,
  "6": fields.CTR_6.optional(),
  "7": fields.CTR_7.optional(),
  "8": fields.CTR_8,
  "9": fields.CTR_9.optional(),
  "10": fields.CTR_10.optional(),
  "11": fields.CTR_11.optional(),
  "12": fields.CTR_12.optional(),
  "13": fields.CTR_13.optional(),
  "14": fields.CTR_14.optional(),
  "15": fields.CTR_15.optional(),
  "16": z.array(fields.CTR_16).optional(),
  "17": fields.CTR_17.optional(),
  "18": fields.CTR_18.optional(),
  "19": fields.CTR_19.optional(),
  "20": fields.CTR_20.optional(),
  "21": fields.CTR_21.optional()
}).register(hl7v2Metadata, {
  title: "CTR",
  version: "2.9",
  description: "HL7 v2.9 CTR segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the CTR schema
 */
export type CTR = z.infer<typeof ctrSchema>;

/**
 * Default export for convenience
 */
export default ctrSchema;