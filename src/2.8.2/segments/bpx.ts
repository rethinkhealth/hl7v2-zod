import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/bpx';

/**
 * HL7 v2.8 BPX Segment
 * 
 * HL7 v2.8 BPX segment definition
 * Contains field definitions and constraints for the BPX segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BPX segment schema
 * Defines the structure and validation rules for the BPX segment
 */
export const bpxSchema = z.object({
  "1": fields.BPX_1,
  "2": fields.BPX_2,
  "3": fields.BPX_3,
  "4": fields.BPX_4,
  "5": fields.BPX_5.optional(),
  "6": fields.BPX_6.optional(),
  "7": fields.BPX_7.optional(),
  "8": fields.BPX_8.optional(),
  "9": fields.BPX_9.optional(),
  "10": fields.BPX_10.optional(),
  "11": fields.BPX_11.optional(),
  "12": z.array(fields.BPX_12).optional(),
  "13": fields.BPX_13.optional(),
  "14": fields.BPX_14,
  "15": fields.BPX_15.optional(),
  "16": fields.BPX_16.optional(),
  "17": fields.BPX_17.optional(),
  "18": fields.BPX_18.optional(),
  "19": fields.BPX_19.optional(),
  "20": fields.BPX_20.optional(),
  "21": fields.BPX_21.optional()
}).register(hl7v2Metadata, {
  title: "BPX",
  version: "2.8",
  description: "HL7 v2.8 BPX segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the BPX schema
 */
export type BPX = z.infer<typeof bpxSchema>;

/**
 * Default export for convenience
 */
export default bpxSchema;