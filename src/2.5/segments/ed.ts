import { z } from "zod/v4";
import hl7v2Metadata from "../registry";

/**
 * HL7 v2.5 ED Segment
 *
 * HL7 v2.5 ED segment definition
 * Contains field definitions and constraints for the ED segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ED segment schema
 * Defines the structure and validation rules for the ED segment
 * This segment contains undefined elements and is represented as any
 */
export const edSchema = z.any().register(hl7v2Metadata, {
  title: "ED",
  version: "2.5",
  description: "HL7 v2.5 ED segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ED schema
 */
export type ED = z.infer<typeof edSchema>;

/**
 * Default export for convenience
 */
export default edSchema;
