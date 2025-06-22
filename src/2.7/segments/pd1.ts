import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/pd1';

/**
 * HL7 v2.7 PD1 Segment
 * 
 * HL7 v2.7 PD1 segment definition
 * Contains field definitions and constraints for the PD1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PD1 segment schema
 * Defines the structure and validation rules for the PD1 segment
 */
export const pd1Schema = z.object({
  "1": z.array(fields.PD1_1).optional(),
  "2": fields.PD1_2.optional(),
  "3": z.array(fields.PD1_3).optional(),
  "5": fields.PD1_5.optional(),
  "6": fields.PD1_6.optional(),
  "7": fields.PD1_7.optional(),
  "8": fields.PD1_8.optional(),
  "9": fields.PD1_9.optional(),
  "10": z.array(fields.PD1_10).optional(),
  "11": fields.PD1_11.optional(),
  "12": fields.PD1_12.optional(),
  "13": fields.PD1_13.optional(),
  "14": z.array(fields.PD1_14).optional(),
  "15": z.array(fields.PD1_15).optional(),
  "16": fields.PD1_16.optional(),
  "17": fields.PD1_17.optional(),
  "18": fields.PD1_18.optional(),
  "19": fields.PD1_19.optional(),
  "20": fields.PD1_20.optional(),
  "21": fields.PD1_21.optional(),
  "22": fields.PD1_22.optional()
}).register(hl7v2Metadata, {
  title: "PD1",
  version: "2.7",
  description: "HL7 v2.7 PD1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PD1 schema
 */
export type PD1 = z.infer<typeof pd1Schema>;

/**
 * Default export for convenience
 */
export default pd1Schema;