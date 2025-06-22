import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/om7';

/**
 * HL7 v2.7 OM7 Segment
 * 
 * HL7 v2.7 OM7 segment definition
 * Contains field definitions and constraints for the OM7 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM7 segment schema
 * Defines the structure and validation rules for the OM7 segment
 */
export const om7Schema = z.object({
  "1": fields.OM7_1,
  "2": fields.OM7_2,
  "3": z.array(fields.OM7_3).optional(),
  "4": fields.OM7_4.optional(),
  "5": z.array(fields.OM7_5).optional(),
  "6": fields.OM7_6.optional(),
  "7": fields.OM7_7.optional(),
  "8": fields.OM7_8.optional(),
  "9": fields.OM7_9.optional(),
  "10": fields.OM7_10.optional(),
  "11": fields.OM7_11.optional(),
  "12": fields.OM7_12.optional(),
  "13": fields.OM7_13.optional(),
  "14": fields.OM7_14.optional(),
  "15": fields.OM7_15.optional(),
  "16": fields.OM7_16.optional(),
  "17": fields.OM7_17.optional(),
  "18": fields.OM7_18.optional(),
  "19": fields.OM7_19.optional(),
  "20": fields.OM7_20.optional(),
  "21": z.array(fields.OM7_21).optional(),
  "22": fields.OM7_22.optional(),
  "23": fields.OM7_23.optional(),
  "24": z.array(fields.OM7_24).optional()
}).register(hl7v2Metadata, {
  title: "OM7",
  version: "2.7",
  description: "HL7 v2.7 OM7 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the OM7 schema
 */
export type OM7 = z.infer<typeof om7Schema>;

/**
 * Default export for convenience
 */
export default om7Schema;