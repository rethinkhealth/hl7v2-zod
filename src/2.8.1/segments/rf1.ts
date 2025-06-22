import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rf1';

/**
 * HL7 v2.8 RF1 Segment
 * 
 * HL7 v2.8 RF1 segment definition
 * Contains field definitions and constraints for the RF1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RF1 segment schema
 * Defines the structure and validation rules for the RF1 segment
 */
export const rf1Schema = z.object({
  "1": fields.RF1_1.optional(),
  "2": fields.RF1_2.optional(),
  "3": fields.RF1_3.optional(),
  "4": z.array(fields.RF1_4).optional(),
  "5": fields.RF1_5.optional(),
  "6": fields.RF1_6,
  "7": fields.RF1_7.optional(),
  "8": fields.RF1_8.optional(),
  "9": fields.RF1_9.optional(),
  "10": z.array(fields.RF1_10).optional(),
  "11": z.array(fields.RF1_11).optional(),
  "12": fields.RF1_12.optional(),
  "13": fields.RF1_13.optional(),
  "14": fields.RF1_14.optional(),
  "15": fields.RF1_15.optional(),
  "16": fields.RF1_16.optional(),
  "17": fields.RF1_17.optional(),
  "19": fields.RF1_19.optional(),
  "20": fields.RF1_20.optional(),
  "21": fields.RF1_21.optional(),
  "22": fields.RF1_22.optional(),
  "23": fields.RF1_23.optional(),
  "24": fields.RF1_24.optional(),
  "25": fields.RF1_25.optional()
}).register(hl7v2Metadata, {
  title: "RF1",
  version: "2.8",
  description: "HL7 v2.8 RF1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RF1 schema
 */
export type RF1 = z.infer<typeof rf1Schema>;

/**
 * Default export for convenience
 */
export default rf1Schema;