import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/btx';

/**
 * HL7 v2.6 BTX Segment
 * 
 * HL7 v2.6 BTX segment definition
 * Contains field definitions and constraints for the BTX segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BTX segment schema
 * Defines the structure and validation rules for the BTX segment
 */
export const btxSchema = z.object({
  "1": fields.BTX_1,
  "2": fields.BTX_2.optional(),
  "3": fields.BTX_3.optional(),
  "4": fields.BTX_4.optional(),
  "5": fields.BTX_5.optional(),
  "6": fields.BTX_6.optional(),
  "7": fields.BTX_7.optional(),
  "8": fields.BTX_8,
  "9": fields.BTX_9.optional(),
  "10": fields.BTX_10.optional(),
  "11": fields.BTX_11,
  "12": fields.BTX_12,
  "13": fields.BTX_13,
  "14": fields.BTX_14.optional(),
  "15": fields.BTX_15.optional(),
  "16": fields.BTX_16.optional(),
  "17": fields.BTX_17.optional(),
  "18": z.array(fields.BTX_18).optional(),
  "19": fields.BTX_19.optional()
}).register(hl7v2Metadata, {
  title: "BTX",
  version: "2.6",
  description: "HL7 v2.6 BTX segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the BTX schema
 */
export type BTX = z.infer<typeof btxSchema>;

/**
 * Default export for convenience
 */
export default btxSchema;