import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/om6";

/**
 * HL7 v2.5 OM6 Segment
 *
 * HL7 v2.5 OM6 segment definition
 * Contains field definitions and constraints for the OM6 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM6 segment schema
 * Defines the structure and validation rules for the OM6 segment
 */
export const om6Schema = z
  .object({
    "1": fields.OM6_1.optional(),
    "2": fields.OM6_2.optional()
  })
  .register(hl7v2Metadata, {
    title: "OM6",
    version: "2.5",
    description: "HL7 v2.5 OM6 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the OM6 schema
 */
export type OM6 = z.infer<typeof om6Schema>;

/**
 * Default export for convenience
 */
export default om6Schema;
