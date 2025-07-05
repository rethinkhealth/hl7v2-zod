import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/abs";

/**
 * HL7 v2.8 ABS Segment
 *
 * HL7 v2.8 ABS segment definition
 * Contains field definitions and constraints for the ABS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ABS segment schema
 * Defines the structure and validation rules for the ABS segment
 */
export const absSchema = z
  .object({
    "1": fields.ABS_1.optional(),
    "2": fields.ABS_2.optional(),
    "3": fields.ABS_3.optional(),
    "4": fields.ABS_4.optional(),
    "5": fields.ABS_5.optional(),
    "6": fields.ABS_6.optional(),
    "7": fields.ABS_7.optional(),
    "8": fields.ABS_8.optional(),
    "9": fields.ABS_9.optional(),
    "10": fields.ABS_10.optional(),
    "11": fields.ABS_11.optional(),
    "12": fields.ABS_12.optional(),
    "13": fields.ABS_13.optional(),
    "14": fields.ABS_14.optional()
  })
  .register(hl7v2Metadata, {
    title: "ABS",
    version: "2.8",
    description: "HL7 v2.8 ABS segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the ABS schema
 */
export type ABS = z.infer<typeof absSchema>;

/**
 * Default export for convenience
 */
export default absSchema;
