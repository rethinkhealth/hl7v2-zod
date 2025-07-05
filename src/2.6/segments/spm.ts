import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/spm";

/**
 * HL7 v2.6 SPM Segment
 *
 * HL7 v2.6 SPM segment definition
 * Contains field definitions and constraints for the SPM segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SPM segment schema
 * Defines the structure and validation rules for the SPM segment
 */
export const spmSchema = z
  .object({
    "1": fields.SPM_1.optional(),
    "2": fields.SPM_2.optional(),
    "3": z.array(fields.SPM_3).optional(),
    "4": fields.SPM_4,
    "5": z.array(fields.SPM_5).optional(),
    "6": z.array(fields.SPM_6).optional(),
    "7": fields.SPM_7.optional(),
    "8": fields.SPM_8.optional(),
    "9": z.array(fields.SPM_9).optional(),
    "10": fields.SPM_10.optional(),
    "11": z.array(fields.SPM_11).optional(),
    "12": fields.SPM_12.optional(),
    "13": fields.SPM_13.optional(),
    "14": z.array(fields.SPM_14).optional(),
    "15": z.array(fields.SPM_15).optional(),
    "16": z.array(fields.SPM_16).optional(),
    "17": fields.SPM_17.optional(),
    "18": fields.SPM_18.optional(),
    "19": fields.SPM_19.optional(),
    "20": fields.SPM_20.optional(),
    "21": z.array(fields.SPM_21).optional(),
    "22": fields.SPM_22.optional(),
    "23": fields.SPM_23.optional(),
    "24": z.array(fields.SPM_24).optional(),
    "25": fields.SPM_25.optional(),
    "26": fields.SPM_26.optional(),
    "27": fields.SPM_27.optional(),
    "28": fields.SPM_28.optional(),
    "29": fields.SPM_29.optional()
  })
  .register(hl7v2Metadata, {
    title: "SPM",
    version: "2.6",
    description: "HL7 v2.6 SPM segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the SPM schema
 */
export type SPM = z.infer<typeof spmSchema>;

/**
 * Default export for convenience
 */
export default spmSchema;
