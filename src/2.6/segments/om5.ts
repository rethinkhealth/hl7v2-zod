import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/om5";

/**
 * HL7 v2.6 OM5 Segment
 *
 * HL7 v2.6 OM5 segment definition
 * Contains field definitions and constraints for the OM5 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM5 segment schema
 * Defines the structure and validation rules for the OM5 segment
 */
export const om5Schema = z
  .object({
    "1": fields.OM5_1.optional(),
    "2": z.array(fields.OM5_2).optional(),
    "3": fields.OM5_3.optional()
  })
  .register(hl7v2Metadata, {
    title: "OM5",
    version: "2.6",
    description: "HL7 v2.6 OM5 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the OM5 schema
 */
export type OM5 = z.infer<typeof om5Schema>;

/**
 * Default export for convenience
 */
export default om5Schema;
