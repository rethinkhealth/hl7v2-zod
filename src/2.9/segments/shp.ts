import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/shp';

/**
 * HL7 v2.9 SHP Segment
 * 
 * HL7 v2.9 SHP segment definition
 * Contains field definitions and constraints for the SHP segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SHP segment schema
 * Defines the structure and validation rules for the SHP segment
 */
export const shpSchema = z.object({
  "1": fields.SHP_1,
  "2": z.array(fields.SHP_2).optional(),
  "3": fields.SHP_3.optional(),
  "4": fields.SHP_4,
  "5": fields.SHP_5.optional(),
  "6": fields.SHP_6.optional(),
  "7": z.array(fields.SHP_7).optional(),
  "8": fields.SHP_8.optional(),
  "9": z.array(fields.SHP_9).optional(),
  "10": z.array(fields.SHP_10).optional(),
  "11": z.array(fields.SHP_11).optional(),
  "12": fields.SHP_12.optional()
}).register(hl7v2Metadata, {
  title: "SHP",
  version: "2.9",
  description: "HL7 v2.9 SHP segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the SHP schema
 */
export type SHP = z.infer<typeof shpSchema>;

/**
 * Default export for convenience
 */
export default shpSchema;