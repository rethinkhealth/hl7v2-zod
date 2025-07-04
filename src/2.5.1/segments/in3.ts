import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/in3';

/**
 * HL7 v2.5 IN3 Segment
 * 
 * HL7 v2.5 IN3 segment definition
 * Contains field definitions and constraints for the IN3 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IN3 segment schema
 * Defines the structure and validation rules for the IN3 segment
 */
export const in3Schema = z.object({
  "1": fields.IN3_1,
  "2": fields.IN3_2.optional(),
  "3": z.array(fields.IN3_3).optional(),
  "4": fields.IN3_4.optional(),
  "5": fields.IN3_5.optional(),
  "6": fields.IN3_6.optional(),
  "7": fields.IN3_7.optional(),
  "8": z.array(fields.IN3_8).optional(),
  "9": fields.IN3_9.optional(),
  "10": fields.IN3_10.optional(),
  "11": fields.IN3_11.optional(),
  "12": fields.IN3_12.optional(),
  "13": fields.IN3_13.optional(),
  "14": z.array(fields.IN3_14).optional(),
  "15": fields.IN3_15.optional(),
  "16": z.array(fields.IN3_16).optional(),
  "17": fields.IN3_17.optional(),
  "18": fields.IN3_18.optional(),
  "19": z.array(fields.IN3_19).optional(),
  "20": z.array(fields.IN3_20).optional(),
  "21": fields.IN3_21.optional(),
  "22": fields.IN3_22.optional(),
  "23": fields.IN3_23.optional(),
  "24": z.array(fields.IN3_24).optional(),
  "25": z.array(fields.IN3_25).optional()
}).register(hl7v2Metadata, {
  title: "IN3",
  version: "2.5",
  description: "HL7 v2.5 IN3 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the IN3 schema
 */
export type IN3 = z.infer<typeof in3Schema>;

/**
 * Default export for convenience
 */
export default in3Schema;