import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/sgt";

/**
 * HL7 v2.8 SGT Segment
 *
 * HL7 v2.8 SGT segment definition
 * Contains field definitions and constraints for the SGT segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SGT segment schema
 * Defines the structure and validation rules for the SGT segment
 */
export const sgtSchema = z
  .object({
    "1": fields.SGT_1,
    "2": fields.SGT_2.optional()
  })
  .register(hl7v2Metadata, {
    title: "SGT",
    version: "2.8",
    description: "HL7 v2.8 SGT segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the SGT schema
 */
export type SGT = z.infer<typeof sgtSchema>;

/**
 * Default export for convenience
 */
export default sgtSchema;
