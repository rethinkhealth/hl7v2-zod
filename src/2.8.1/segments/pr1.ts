import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pr1";

/**
 * HL7 v2.8 PR1 Segment
 *
 * HL7 v2.8 PR1 segment definition
 * Contains field definitions and constraints for the PR1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PR1 segment schema
 * Defines the structure and validation rules for the PR1 segment
 */
export const pr1Schema = z
  .object({
    "1": fields.PR1_1,
    "3": fields.PR1_3,
    "5": fields.PR1_5,
    "6": fields.PR1_6.optional(),
    "7": fields.PR1_7.optional(),
    "9": fields.PR1_9.optional(),
    "10": fields.PR1_10.optional(),
    "13": fields.PR1_13.optional(),
    "14": fields.PR1_14.optional(),
    "15": fields.PR1_15.optional(),
    "16": z.array(fields.PR1_16).optional(),
    "17": fields.PR1_17.optional(),
    "18": z.array(fields.PR1_18).optional(),
    "19": fields.PR1_19.optional(),
    "20": fields.PR1_20.optional(),
    "21": fields.PR1_21.optional(),
    "22": fields.PR1_22.optional(),
    "23": z.array(fields.PR1_23).optional(),
    "24": fields.PR1_24.optional(),
    "25": fields.PR1_25.optional()
  })
  .register(hl7v2Metadata, {
    title: "PR1",
    version: "2.8",
    description: "HL7 v2.8 PR1 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PR1 schema
 */
export type PR1 = z.infer<typeof pr1Schema>;

/**
 * Default export for convenience
 */
export default pr1Schema;
