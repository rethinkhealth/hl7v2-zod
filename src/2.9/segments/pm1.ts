import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/pm1';

/**
 * HL7 v2.9 PM1 Segment
 * 
 * HL7 v2.9 PM1 segment definition
 * Contains field definitions and constraints for the PM1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PM1 segment schema
 * Defines the structure and validation rules for the PM1 segment
 */
export const pm1Schema = z.object({
  "1": fields.PM1_1,
  "2": z.array(fields.PM1_2),
  "3": z.array(fields.PM1_3).optional(),
  "4": z.array(fields.PM1_4).optional(),
  "5": z.array(fields.PM1_5).optional(),
  "6": z.array(fields.PM1_6).optional(),
  "7": fields.PM1_7.optional(),
  "8": z.array(fields.PM1_8).optional(),
  "9": fields.PM1_9.optional(),
  "10": fields.PM1_10.optional(),
  "11": fields.PM1_11.optional(),
  "12": fields.PM1_12.optional(),
  "13": fields.PM1_13.optional(),
  "14": fields.PM1_14.optional(),
  "15": fields.PM1_15.optional(),
  "16": fields.PM1_16.optional(),
  "17": fields.PM1_17.optional(),
  "18": fields.PM1_18.optional(),
  "19": fields.PM1_19.optional(),
  "20": fields.PM1_20.optional(),
  "21": fields.PM1_21.optional(),
  "22": fields.PM1_22.optional(),
  "23": fields.PM1_23.optional(),
  "24": fields.PM1_24.optional()
}).register(hl7v2Metadata, {
  title: "PM1",
  version: "2.9",
  description: "HL7 v2.9 PM1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PM1 schema
 */
export type PM1 = z.infer<typeof pm1Schema>;

/**
 * Default export for convenience
 */
export default pm1Schema;