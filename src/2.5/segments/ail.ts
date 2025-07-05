import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/ail";

/**
 * HL7 v2.5 AIL Segment
 *
 * HL7 v2.5 AIL segment definition
 * Contains field definitions and constraints for the AIL segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AIL segment schema
 * Defines the structure and validation rules for the AIL segment
 */
export const ailSchema = z
  .object({
    "1": fields.AIL_1,
    "2": fields.AIL_2.optional(),
    "3": z.array(fields.AIL_3).optional(),
    "4": fields.AIL_4.optional(),
    "5": fields.AIL_5.optional(),
    "6": fields.AIL_6.optional(),
    "7": fields.AIL_7.optional(),
    "8": fields.AIL_8.optional(),
    "9": fields.AIL_9.optional(),
    "10": fields.AIL_10.optional(),
    "11": fields.AIL_11.optional(),
    "12": fields.AIL_12.optional()
  })
  .register(hl7v2Metadata, {
    title: "AIL",
    version: "2.5",
    description: "HL7 v2.5 AIL segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the AIL schema
 */
export type AIL = z.infer<typeof ailSchema>;

/**
 * Default export for convenience
 */
export default ailSchema;
