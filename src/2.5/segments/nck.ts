import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/nck";

/**
 * HL7 v2.5 NCK Segment
 *
 * HL7 v2.5 NCK segment definition
 * Contains field definitions and constraints for the NCK segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NCK segment schema
 * Defines the structure and validation rules for the NCK segment
 */
export const nckSchema = z
  .object({
    "1": fields.NCK_1
  })
  .register(hl7v2Metadata, {
    title: "NCK",
    version: "2.5",
    description: "HL7 v2.5 NCK segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the NCK schema
 */
export type NCK = z.infer<typeof nckSchema>;

/**
 * Default export for convenience
 */
export default nckSchema;
