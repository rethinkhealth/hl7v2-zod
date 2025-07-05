import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/fts";

/**
 * HL7 v2.8 FTS Segment
 *
 * HL7 v2.8 FTS segment definition
 * Contains field definitions and constraints for the FTS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * FTS segment schema
 * Defines the structure and validation rules for the FTS segment
 */
export const ftsSchema = z
  .object({
    "1": fields.FTS_1.optional(),
    "2": fields.FTS_2.optional()
  })
  .register(hl7v2Metadata, {
    title: "FTS",
    version: "2.8",
    description: "HL7 v2.8 FTS segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the FTS schema
 */
export type FTS = z.infer<typeof ftsSchema>;

/**
 * Default export for convenience
 */
export default ftsSchema;
