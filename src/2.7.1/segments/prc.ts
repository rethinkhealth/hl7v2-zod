import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/prc';

/**
 * HL7 v2.7 PRC Segment
 * 
 * HL7 v2.7 PRC segment definition
 * Contains field definitions and constraints for the PRC segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRC segment schema
 * Defines the structure and validation rules for the PRC segment
 */
export const prcSchema = z.object({
  "1": fields.PRC_1,
  "2": z.array(fields.PRC_2).optional(),
  "3": z.array(fields.PRC_3).optional(),
  "4": z.array(fields.PRC_4).optional(),
  "5": z.array(fields.PRC_5).optional(),
  "6": z.array(fields.PRC_6).optional(),
  "7": fields.PRC_7.optional(),
  "8": fields.PRC_8.optional(),
  "9": fields.PRC_9.optional(),
  "10": fields.PRC_10.optional(),
  "11": fields.PRC_11.optional(),
  "12": fields.PRC_12.optional(),
  "13": fields.PRC_13.optional(),
  "14": z.array(fields.PRC_14).optional(),
  "15": fields.PRC_15.optional(),
  "16": fields.PRC_16.optional(),
  "17": fields.PRC_17.optional(),
  "18": fields.PRC_18.optional()
}).register(hl7v2Metadata, {
  title: "PRC",
  version: "2.7",
  description: "HL7 v2.7 PRC segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PRC schema
 */
export type PRC = z.infer<typeof prcSchema>;

/**
 * Default export for convenience
 */
export default prcSchema;