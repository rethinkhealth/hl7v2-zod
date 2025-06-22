import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ivt';

/**
 * HL7 v2.6 IVT Segment
 * 
 * HL7 v2.6 IVT segment definition
 * Contains field definitions and constraints for the IVT segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IVT segment schema
 * Defines the structure and validation rules for the IVT segment
 */
export const ivtSchema = z.object({
  "1": fields.IVT_1,
  "2": fields.IVT_2,
  "3": fields.IVT_3.optional(),
  "4": fields.IVT_4.optional(),
  "5": fields.IVT_5.optional(),
  "6": fields.IVT_6.optional(),
  "7": z.array(fields.IVT_7).optional(),
  "8": fields.IVT_8.optional(),
  "9": fields.IVT_9.optional(),
  "10": fields.IVT_10.optional(),
  "11": fields.IVT_11.optional(),
  "12": fields.IVT_12.optional(),
  "13": fields.IVT_13.optional(),
  "14": fields.IVT_14.optional(),
  "15": fields.IVT_15.optional(),
  "16": fields.IVT_16.optional(),
  "17": fields.IVT_17.optional(),
  "18": fields.IVT_18.optional(),
  "19": z.array(fields.IVT_19).optional(),
  "20": fields.IVT_20.optional(),
  "21": fields.IVT_21.optional(),
  "22": fields.IVT_22.optional(),
  "23": fields.IVT_23.optional(),
  "24": fields.IVT_24.optional(),
  "25": fields.IVT_25.optional(),
  "26": fields.IVT_26.optional()
}).register(hl7v2Metadata, {
  title: "IVT",
  version: "2.6",
  description: "HL7 v2.6 IVT segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the IVT schema
 */
export type IVT = z.infer<typeof ivtSchema>;

/**
 * Default export for convenience
 */
export default ivtSchema;