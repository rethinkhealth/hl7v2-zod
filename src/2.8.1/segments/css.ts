import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/css";

/**
 * HL7 v2.8 CSS Segment
 *
 * HL7 v2.8 CSS segment definition
 * Contains field definitions and constraints for the CSS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CSS segment schema
 * Defines the structure and validation rules for the CSS segment
 */
export const cssSchema = z
  .object({
    "1": fields.CSS_1,
    "2": fields.CSS_2.optional(),
    "3": z.array(fields.CSS_3).optional()
  })
  .register(hl7v2Metadata, {
    title: "CSS",
    version: "2.8",
    description: "HL7 v2.8 CSS segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the CSS schema
 */
export type CSS = z.infer<typeof cssSchema>;

/**
 * Default export for convenience
 */
export default cssSchema;
