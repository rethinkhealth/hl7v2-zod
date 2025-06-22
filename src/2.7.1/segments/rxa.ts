import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rxa';

/**
 * HL7 v2.7 RXA Segment
 * 
 * HL7 v2.7 RXA segment definition
 * Contains field definitions and constraints for the RXA segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXA segment schema
 * Defines the structure and validation rules for the RXA segment
 */
export const rxaSchema = z.object({
  "1": fields.RXA_1,
  "2": fields.RXA_2,
  "3": fields.RXA_3,
  "4": fields.RXA_4,
  "5": fields.RXA_5,
  "6": fields.RXA_6,
  "7": fields.RXA_7.optional(),
  "8": fields.RXA_8.optional(),
  "9": z.array(fields.RXA_9).optional(),
  "10": z.array(fields.RXA_10).optional(),
  "11": fields.RXA_11.optional(),
  "12": fields.RXA_12.optional(),
  "13": fields.RXA_13.optional(),
  "14": fields.RXA_14.optional(),
  "15": z.array(fields.RXA_15).optional(),
  "16": z.array(fields.RXA_16).optional(),
  "17": z.array(fields.RXA_17).optional(),
  "18": z.array(fields.RXA_18).optional(),
  "19": z.array(fields.RXA_19).optional(),
  "20": fields.RXA_20.optional(),
  "21": fields.RXA_21.optional(),
  "22": fields.RXA_22.optional(),
  "23": fields.RXA_23.optional(),
  "24": fields.RXA_24.optional(),
  "25": fields.RXA_25.optional(),
  "26": fields.RXA_26.optional(),
  "27": fields.RXA_27.optional(),
  "28": fields.RXA_28.optional()
}).register(hl7v2Metadata, {
  title: "RXA",
  version: "2.7",
  description: "HL7 v2.7 RXA segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RXA schema
 */
export type RXA = z.infer<typeof rxaSchema>;

/**
 * Default export for convenience
 */
export default rxaSchema;