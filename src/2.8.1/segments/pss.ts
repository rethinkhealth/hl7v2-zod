import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pss";

/**
 * HL7 v2.8 PSS Segment
 *
 * HL7 v2.8 PSS segment definition
 * Contains field definitions and constraints for the PSS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PSS segment schema
 * Defines the structure and validation rules for the PSS segment
 */
export const pssSchema = z
  .object({
    "1": fields.PSS_1,
    "2": fields.PSS_2.optional(),
    "3": fields.PSS_3,
    "4": fields.PSS_4,
    "5": fields.PSS_5
  })
  .register(hl7v2Metadata, {
    title: "PSS",
    version: "2.8",
    description: "HL7 v2.8 PSS segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PSS schema
 */
export type PSS = z.infer<typeof pssSchema>;

/**
 * Default export for convenience
 */
export default pssSchema;
