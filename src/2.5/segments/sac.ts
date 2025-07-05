import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/sac";

/**
 * HL7 v2.5 SAC Segment
 *
 * HL7 v2.5 SAC segment definition
 * Contains field definitions and constraints for the SAC segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SAC segment schema
 * Defines the structure and validation rules for the SAC segment
 */
export const sacSchema = z
  .object({
    "1": fields.SAC_1.optional(),
    "2": fields.SAC_2.optional(),
    "3": fields.SAC_3.optional(),
    "4": fields.SAC_4.optional(),
    "5": fields.SAC_5.optional(),
    "6": fields.SAC_6.optional(),
    "7": fields.SAC_7.optional(),
    "8": fields.SAC_8.optional(),
    "9": fields.SAC_9.optional(),
    "10": fields.SAC_10.optional(),
    "11": fields.SAC_11.optional(),
    "12": fields.SAC_12.optional(),
    "13": fields.SAC_13.optional(),
    "14": fields.SAC_14.optional(),
    "15": z.array(fields.SAC_15).optional(),
    "16": fields.SAC_16.optional(),
    "17": fields.SAC_17.optional(),
    "18": fields.SAC_18.optional(),
    "19": fields.SAC_19.optional(),
    "20": fields.SAC_20.optional(),
    "21": fields.SAC_21.optional(),
    "22": fields.SAC_22.optional(),
    "23": fields.SAC_23.optional(),
    "24": fields.SAC_24.optional(),
    "25": fields.SAC_25.optional(),
    "26": fields.SAC_26.optional(),
    "27": z.array(fields.SAC_27).optional(),
    "28": fields.SAC_28.optional(),
    "29": fields.SAC_29.optional(),
    "30": fields.SAC_30.optional(),
    "31": fields.SAC_31.optional(),
    "32": fields.SAC_32.optional(),
    "33": fields.SAC_33.optional(),
    "34": fields.SAC_34.optional(),
    "35": fields.SAC_35.optional(),
    "36": fields.SAC_36.optional(),
    "37": fields.SAC_37.optional(),
    "38": fields.SAC_38.optional(),
    "39": fields.SAC_39.optional(),
    "40": z.array(fields.SAC_40).optional(),
    "41": z.array(fields.SAC_41).optional(),
    "42": fields.SAC_42.optional(),
    "43": z.array(fields.SAC_43).optional(),
    "44": z.array(fields.SAC_44).optional()
  })
  .register(hl7v2Metadata, {
    title: "SAC",
    version: "2.5",
    description: "HL7 v2.5 SAC segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the SAC schema
 */
export type SAC = z.infer<typeof sacSchema>;

/**
 * Default export for convenience
 */
export default sacSchema;
