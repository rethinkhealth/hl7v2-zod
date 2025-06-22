import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/prt';

/**
 * HL7 v2.8 PRT Segment
 * 
 * HL7 v2.8 PRT segment definition
 * Contains field definitions and constraints for the PRT segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRT segment schema
 * Defines the structure and validation rules for the PRT segment
 */
export const prtSchema = z.object({
  "1": fields.PRT_1.optional(),
  "2": fields.PRT_2,
  "3": fields.PRT_3.optional(),
  "4": fields.PRT_4,
  "5": z.array(fields.PRT_5).optional(),
  "6": fields.PRT_6.optional(),
  "7": fields.PRT_7.optional(),
  "8": z.array(fields.PRT_8).optional(),
  "9": z.array(fields.PRT_9).optional(),
  "10": z.array(fields.PRT_10).optional(),
  "11": fields.PRT_11.optional(),
  "12": fields.PRT_12.optional(),
  "13": fields.PRT_13.optional(),
  "14": z.array(fields.PRT_14).optional(),
  "15": z.array(fields.PRT_15).optional(),
  "16": fields.PRT_16.optional(),
  "17": fields.PRT_17.optional(),
  "18": fields.PRT_18.optional(),
  "19": fields.PRT_19.optional(),
  "20": fields.PRT_20.optional(),
  "21": fields.PRT_21.optional(),
  "22": fields.PRT_22.optional()
}).register(hl7v2Metadata, {
  title: "PRT",
  version: "2.8",
  description: "HL7 v2.8 PRT segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PRT schema
 */
export type PRT = z.infer<typeof prtSchema>;

/**
 * Default export for convenience
 */
export default prtSchema;