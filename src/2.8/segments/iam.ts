import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/iam";

/**
 * HL7 v2.8 IAM Segment
 *
 * HL7 v2.8 IAM segment definition
 * Contains field definitions and constraints for the IAM segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IAM segment schema
 * Defines the structure and validation rules for the IAM segment
 */
export const iamSchema = z
  .object({
    "1": fields.IAM_1,
    "2": fields.IAM_2.optional(),
    "3": fields.IAM_3,
    "4": fields.IAM_4.optional(),
    "5": z.array(fields.IAM_5).optional(),
    "6": fields.IAM_6,
    "7": fields.IAM_7.optional(),
    "8": fields.IAM_8.optional(),
    "9": fields.IAM_9.optional(),
    "10": fields.IAM_10.optional(),
    "11": fields.IAM_11.optional(),
    "12": fields.IAM_12.optional(),
    "13": fields.IAM_13.optional(),
    "14": fields.IAM_14.optional(),
    "15": fields.IAM_15.optional(),
    "16": fields.IAM_16.optional(),
    "17": fields.IAM_17.optional(),
    "18": fields.IAM_18.optional(),
    "19": fields.IAM_19.optional(),
    "20": fields.IAM_20.optional(),
    "21": fields.IAM_21.optional(),
    "22": fields.IAM_22.optional(),
    "23": fields.IAM_23.optional(),
    "24": fields.IAM_24.optional(),
    "25": fields.IAM_25.optional(),
    "26": fields.IAM_26.optional(),
    "27": fields.IAM_27.optional(),
    "28": fields.IAM_28.optional(),
    "29": fields.IAM_29.optional(),
    "30": fields.IAM_30.optional()
  })
  .register(hl7v2Metadata, {
    title: "IAM",
    version: "2.8",
    description: "HL7 v2.8 IAM segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the IAM schema
 */
export type IAM = z.infer<typeof iamSchema>;

/**
 * Default export for convenience
 */
export default iamSchema;
