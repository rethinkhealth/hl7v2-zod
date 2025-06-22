import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rxv';

/**
 * HL7 v2.8 RXV Segment
 * 
 * HL7 v2.8 RXV segment definition
 * Contains field definitions and constraints for the RXV segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RXV segment schema
 * Defines the structure and validation rules for the RXV segment
 */
export const rxvSchema = z.object({
  "1": fields.RXV_1.optional(),
  "2": fields.RXV_2,
  "3": fields.RXV_3.optional(),
  "4": fields.RXV_4.optional(),
  "5": fields.RXV_5.optional(),
  "6": fields.RXV_6.optional(),
  "7": fields.RXV_7,
  "8": fields.RXV_8.optional(),
  "9": fields.RXV_9.optional(),
  "10": fields.RXV_10.optional(),
  "11": fields.RXV_11.optional(),
  "12": fields.RXV_12.optional(),
  "13": fields.RXV_13.optional(),
  "14": fields.RXV_14.optional(),
  "15": fields.RXV_15.optional(),
  "16": fields.RXV_16,
  "17": fields.RXV_17.optional(),
  "18": fields.RXV_18.optional(),
  "19": fields.RXV_19.optional(),
  "20": fields.RXV_20.optional(),
  "21": fields.RXV_21.optional(),
  "22": fields.RXV_22.optional()
}).register(hl7v2Metadata, {
  title: "RXV",
  version: "2.8",
  description: "HL7 v2.8 RXV segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RXV schema
 */
export type RXV = z.infer<typeof rxvSchema>;

/**
 * Default export for convenience
 */
export default rxvSchema;