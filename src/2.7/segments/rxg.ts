import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rxg';

/**
 * HL7 v2.7 RXG Segment
 * 
 * HL7 v2.7 RXG segment definition
 * Contains field definitions and constraints for the RXG segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXG segment schema
 * Defines the structure and validation rules for the RXG segment
 */
export const rxgSchema = z.object({
  "1": fields.RXG_1,
  "2": fields.RXG_2.optional(),
  "4": fields.RXG_4,
  "5": fields.RXG_5,
  "6": fields.RXG_6.optional(),
  "7": fields.RXG_7,
  "8": fields.RXG_8.optional(),
  "9": z.array(fields.RXG_9).optional(),
  "10": fields.RXG_10.optional(),
  "11": fields.RXG_11.optional(),
  "12": fields.RXG_12.optional(),
  "13": z.array(fields.RXG_13).optional(),
  "14": fields.RXG_14.optional(),
  "15": fields.RXG_15.optional(),
  "16": fields.RXG_16.optional(),
  "17": fields.RXG_17.optional(),
  "18": fields.RXG_18.optional(),
  "19": z.array(fields.RXG_19).optional(),
  "20": z.array(fields.RXG_20).optional(),
  "21": z.array(fields.RXG_21).optional(),
  "22": z.array(fields.RXG_22).optional(),
  "23": fields.RXG_23.optional(),
  "24": fields.RXG_24.optional(),
  "25": fields.RXG_25.optional(),
  "26": fields.RXG_26.optional(),
  "27": fields.RXG_27.optional(),
  "28": fields.RXG_28.optional(),
  "29": fields.RXG_29.optional(),
  "30": fields.RXG_30.optional()
}).register(hl7v2Metadata, {
  title: "RXG",
  version: "2.7",
  description: "HL7 v2.7 RXG segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RXG schema
 */
export type RXG = z.infer<typeof rxgSchema>;

/**
 * Default export for convenience
 */
export default rxgSchema;