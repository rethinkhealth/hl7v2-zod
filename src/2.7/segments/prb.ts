import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/prb';

/**
 * HL7 v2.7 PRB Segment
 * 
 * HL7 v2.7 PRB segment definition
 * Contains field definitions and constraints for the PRB segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRB segment schema
 * Defines the structure and validation rules for the PRB segment
 */
export const prbSchema = z.object({
  "1": fields.PRB_1,
  "2": fields.PRB_2,
  "3": fields.PRB_3,
  "4": fields.PRB_4,
  "5": fields.PRB_5.optional(),
  "6": fields.PRB_6.optional(),
  "7": fields.PRB_7.optional(),
  "8": fields.PRB_8.optional(),
  "9": fields.PRB_9.optional(),
  "10": fields.PRB_10.optional(),
  "11": z.array(fields.PRB_11).optional(),
  "12": fields.PRB_12.optional(),
  "13": fields.PRB_13.optional(),
  "14": fields.PRB_14.optional(),
  "15": fields.PRB_15.optional(),
  "16": fields.PRB_16.optional(),
  "17": fields.PRB_17.optional(),
  "18": fields.PRB_18.optional(),
  "19": fields.PRB_19.optional(),
  "20": fields.PRB_20.optional(),
  "21": fields.PRB_21.optional(),
  "22": fields.PRB_22.optional(),
  "23": fields.PRB_23.optional(),
  "24": fields.PRB_24.optional(),
  "25": fields.PRB_25.optional(),
  "26": fields.PRB_26.optional(),
  "27": fields.PRB_27.optional(),
  "28": fields.PRB_28.optional()
}).register(hl7v2Metadata, {
  title: "PRB",
  version: "2.7",
  description: "HL7 v2.7 PRB segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PRB schema
 */
export type PRB = z.infer<typeof prbSchema>;

/**
 * Default export for convenience
 */
export default prbSchema;