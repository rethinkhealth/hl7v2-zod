import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/dev';

/**
 * HL7 v2.9 DEV Segment
 * 
 * HL7 v2.9 DEV segment definition
 * Contains field definitions and constraints for the DEV segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DEV segment schema
 * Defines the structure and validation rules for the DEV segment
 */
export const devSchema = z.object({
  "1": fields.DEV_1,
  "2": fields.DEV_2.optional(),
  "3": z.array(fields.DEV_3).optional(),
  "4": z.array(fields.DEV_4).optional(),
  "5": fields.DEV_5.optional(),
  "6": fields.DEV_6.optional(),
  "7": fields.DEV_7.optional(),
  "8": fields.DEV_8.optional(),
  "9": fields.DEV_9.optional(),
  "10": fields.DEV_10.optional(),
  "11": fields.DEV_11.optional(),
  "12": fields.DEV_12.optional(),
  "13": fields.DEV_13.optional(),
  "14": z.array(fields.DEV_14).optional(),
  "15": fields.DEV_15.optional(),
  "16": fields.DEV_16.optional(),
  "17": fields.DEV_17.optional()
}).register(hl7v2Metadata, {
  title: "DEV",
  version: "2.9",
  description: "HL7 v2.9 DEV segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the DEV schema
 */
export type DEV = z.infer<typeof devSchema>;

/**
 * Default export for convenience
 */
export default devSchema;