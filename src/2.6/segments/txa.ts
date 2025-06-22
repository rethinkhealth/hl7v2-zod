import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/txa';

/**
 * HL7 v2.6 TXA Segment
 * 
 * HL7 v2.6 TXA segment definition
 * Contains field definitions and constraints for the TXA segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TXA segment schema
 * Defines the structure and validation rules for the TXA segment
 */
export const txaSchema = z.object({
  "1": fields.TXA_1,
  "2": fields.TXA_2,
  "3": fields.TXA_3.optional(),
  "4": fields.TXA_4.optional(),
  "5": z.array(fields.TXA_5).optional(),
  "6": fields.TXA_6.optional(),
  "7": fields.TXA_7.optional(),
  "8": z.array(fields.TXA_8).optional(),
  "9": z.array(fields.TXA_9).optional(),
  "10": z.array(fields.TXA_10).optional(),
  "11": z.array(fields.TXA_11).optional(),
  "12": fields.TXA_12,
  "13": fields.TXA_13.optional(),
  "14": z.array(fields.TXA_14).optional(),
  "15": fields.TXA_15.optional(),
  "16": fields.TXA_16.optional(),
  "17": fields.TXA_17,
  "18": fields.TXA_18.optional(),
  "19": fields.TXA_19.optional(),
  "20": fields.TXA_20.optional(),
  "21": fields.TXA_21.optional(),
  "22": z.array(fields.TXA_22).optional(),
  "23": z.array(fields.TXA_23).optional()
}).register(hl7v2Metadata, {
  title: "TXA",
  version: "2.6",
  description: "HL7 v2.6 TXA segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the TXA schema
 */
export type TXA = z.infer<typeof txaSchema>;

/**
 * Default export for convenience
 */
export default txaSchema;