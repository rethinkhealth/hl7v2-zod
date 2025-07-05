import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/scd';

/**
 * HL7 v2.6 SCD Segment
 * 
 * HL7 v2.6 SCD segment definition
 * Contains field definitions and constraints for the SCD segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SCD segment schema
 * Defines the structure and validation rules for the SCD segment
 */
export const scdSchema = z.object({
  "1": fields.SCD_1.optional(),
  "2": fields.SCD_2.optional(),
  "3": fields.SCD_3.optional(),
  "4": fields.SCD_4.optional(),
  "5": fields.SCD_5.optional(),
  "6": fields.SCD_6.optional(),
  "7": fields.SCD_7.optional(),
  "8": fields.SCD_8.optional(),
  "9": fields.SCD_9.optional(),
  "10": fields.SCD_10.optional(),
  "11": fields.SCD_11.optional(),
  "12": fields.SCD_12.optional(),
  "13": fields.SCD_13.optional(),
  "14": fields.SCD_14.optional(),
  "15": fields.SCD_15.optional(),
  "16": fields.SCD_16.optional(),
  "17": fields.SCD_17.optional(),
  "18": fields.SCD_18.optional(),
  "19": fields.SCD_19.optional(),
  "20": fields.SCD_20.optional(),
  "21": fields.SCD_21.optional(),
  "22": fields.SCD_22.optional(),
  "23": fields.SCD_23.optional(),
  "24": fields.SCD_24.optional(),
  "25": fields.SCD_25.optional(),
  "26": fields.SCD_26.optional(),
  "27": fields.SCD_27.optional(),
  "28": fields.SCD_28.optional(),
  "29": fields.SCD_29.optional(),
  "30": fields.SCD_30.optional(),
  "31": fields.SCD_31.optional(),
  "32": fields.SCD_32.optional(),
  "33": z.array(fields.SCD_33).optional(),
  "34": fields.SCD_34.optional(),
  "35": fields.SCD_35.optional(),
  "36": fields.SCD_36.optional(),
  "37": fields.SCD_37.optional()
}).register(hl7v2Metadata, {
  title: "SCD",
  version: "2.6",
  description: "HL7 v2.6 SCD segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the SCD schema
 */
export type SCD = z.infer<typeof scdSchema>;

/**
 * Default export for convenience
 */
export default scdSchema;