import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ft1';

/**
 * HL7 v2.8 FT1 Segment
 * 
 * HL7 v2.8 FT1 segment definition
 * Contains field definitions and constraints for the FT1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FT1 segment schema
 * Defines the structure and validation rules for the FT1 segment
 */
export const ft1Schema = z.object({
  "1": fields.FT1_1.optional(),
  "2": fields.FT1_2.optional(),
  "3": fields.FT1_3.optional(),
  "4": fields.FT1_4,
  "5": fields.FT1_5.optional(),
  "6": fields.FT1_6,
  "7": fields.FT1_7,
  "10": fields.FT1_10.optional(),
  "11": fields.FT1_11.optional(),
  "12": fields.FT1_12.optional(),
  "13": fields.FT1_13.optional(),
  "14": fields.FT1_14.optional(),
  "15": fields.FT1_15.optional(),
  "16": fields.FT1_16.optional(),
  "17": fields.FT1_17.optional(),
  "18": fields.FT1_18.optional(),
  "19": z.array(fields.FT1_19).optional(),
  "20": z.array(fields.FT1_20).optional(),
  "21": z.array(fields.FT1_21).optional(),
  "22": fields.FT1_22.optional(),
  "23": fields.FT1_23.optional(),
  "24": z.array(fields.FT1_24).optional(),
  "25": fields.FT1_25.optional(),
  "26": z.array(fields.FT1_26).optional(),
  "27": fields.FT1_27.optional(),
  "28": fields.FT1_28.optional(),
  "29": fields.FT1_29.optional(),
  "30": fields.FT1_30.optional(),
  "31": z.array(fields.FT1_31).optional(),
  "32": z.array(fields.FT1_32).optional(),
  "33": fields.FT1_33.optional(),
  "34": fields.FT1_34.optional(),
  "35": fields.FT1_35.optional(),
  "36": z.array(fields.FT1_36).optional(),
  "37": fields.FT1_37.optional(),
  "38": fields.FT1_38.optional(),
  "39": fields.FT1_39.optional(),
  "40": fields.FT1_40.optional(),
  "41": fields.FT1_41.optional(),
  "42": fields.FT1_42.optional(),
  "43": fields.FT1_43.optional()
}).register(hl7v2Metadata, {
  title: "FT1",
  version: "2.8",
  description: "HL7 v2.8 FT1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the FT1 schema
 */
export type FT1 = z.infer<typeof ft1Schema>;

/**
 * Default export for convenience
 */
export default ft1Schema;