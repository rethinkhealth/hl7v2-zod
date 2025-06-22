import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/con';

/**
 * HL7 v2.9 CON Segment
 * 
 * HL7 v2.9 CON segment definition
 * Contains field definitions and constraints for the CON segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CON segment schema
 * Defines the structure and validation rules for the CON segment
 */
export const conSchema = z.object({
  "1": fields.CON_1,
  "2": fields.CON_2.optional(),
  "3": fields.CON_3.optional(),
  "4": fields.CON_4.optional(),
  "5": z.array(fields.CON_5).optional(),
  "6": z.array(fields.CON_6).optional(),
  "7": z.array(fields.CON_7).optional(),
  "8": z.array(fields.CON_8).optional(),
  "9": z.array(fields.CON_9).optional(),
  "10": fields.CON_10.optional(),
  "11": fields.CON_11,
  "12": fields.CON_12.optional(),
  "13": fields.CON_13.optional(),
  "14": fields.CON_14.optional(),
  "15": fields.CON_15.optional(),
  "16": fields.CON_16.optional(),
  "17": fields.CON_17.optional(),
  "18": fields.CON_18.optional(),
  "19": fields.CON_19.optional(),
  "20": fields.CON_20.optional(),
  "21": fields.CON_21.optional(),
  "22": fields.CON_22.optional(),
  "23": fields.CON_23.optional(),
  "24": z.array(fields.CON_24),
  "25": z.array(fields.CON_25)
}).register(hl7v2Metadata, {
  title: "CON",
  version: "2.9",
  description: "HL7 v2.9 CON segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the CON schema
 */
export type CON = z.infer<typeof conSchema>;

/**
 * Default export for convenience
 */
export default conSchema;