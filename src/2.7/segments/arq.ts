import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/arq';

/**
 * HL7 v2.7 ARQ Segment
 * 
 * HL7 v2.7 ARQ segment definition
 * Contains field definitions and constraints for the ARQ segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ARQ segment schema
 * Defines the structure and validation rules for the ARQ segment
 */
export const arqSchema = z.object({
  "1": fields.ARQ_1,
  "2": fields.ARQ_2.optional(),
  "3": fields.ARQ_3.optional(),
  "4": fields.ARQ_4.optional(),
  "5": fields.ARQ_5.optional(),
  "6": fields.ARQ_6.optional(),
  "7": fields.ARQ_7.optional(),
  "8": fields.ARQ_8.optional(),
  "9": fields.ARQ_9.optional(),
  "10": fields.ARQ_10.optional(),
  "11": z.array(fields.ARQ_11).optional(),
  "12": fields.ARQ_12.optional(),
  "13": fields.ARQ_13.optional(),
  "14": fields.ARQ_14.optional(),
  "15": z.array(fields.ARQ_15),
  "16": z.array(fields.ARQ_16).optional(),
  "17": z.array(fields.ARQ_17).optional(),
  "18": fields.ARQ_18.optional(),
  "19": z.array(fields.ARQ_19),
  "20": z.array(fields.ARQ_20).optional(),
  "21": fields.ARQ_21.optional(),
  "22": fields.ARQ_22.optional(),
  "23": fields.ARQ_23.optional(),
  "24": z.array(fields.ARQ_24).optional(),
  "25": z.array(fields.ARQ_25).optional()
}).register(hl7v2Metadata, {
  title: "ARQ",
  version: "2.7",
  description: "HL7 v2.7 ARQ segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ARQ schema
 */
export type ARQ = z.infer<typeof arqSchema>;

/**
 * Default export for convenience
 */
export default arqSchema;