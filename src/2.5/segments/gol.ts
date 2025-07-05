import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/gol";

/**
 * HL7 v2.5 GOL Segment
 *
 * HL7 v2.5 GOL segment definition
 * Contains field definitions and constraints for the GOL segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * GOL segment schema
 * Defines the structure and validation rules for the GOL segment
 */
export const golSchema = z
  .object({
    "1": fields.GOL_1,
    "2": fields.GOL_2,
    "3": fields.GOL_3,
    "4": fields.GOL_4,
    "5": fields.GOL_5.optional(),
    "6": fields.GOL_6.optional(),
    "7": fields.GOL_7.optional(),
    "8": fields.GOL_8.optional(),
    "9": fields.GOL_9.optional(),
    "10": fields.GOL_10.optional(),
    "11": fields.GOL_11.optional(),
    "12": fields.GOL_12.optional(),
    "13": fields.GOL_13.optional(),
    "14": fields.GOL_14.optional(),
    "15": fields.GOL_15.optional(),
    "16": fields.GOL_16.optional(),
    "17": z.array(fields.GOL_17).optional(),
    "18": fields.GOL_18.optional(),
    "19": fields.GOL_19.optional(),
    "20": z.array(fields.GOL_20).optional(),
    "21": z.array(fields.GOL_21).optional()
  })
  .register(hl7v2Metadata, {
    title: "GOL",
    version: "2.5",
    description: "HL7 v2.5 GOL segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the GOL schema
 */
export type GOL = z.infer<typeof golSchema>;

/**
 * Default export for convenience
 */
export default golSchema;
