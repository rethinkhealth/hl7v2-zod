import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/iar";

/**
 * HL7 v2.7 IAR Segment
 *
 * HL7 v2.7 IAR segment definition
 * Contains field definitions and constraints for the IAR segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IAR segment schema
 * Defines the structure and validation rules for the IAR segment
 */
export const iarSchema = z
  .object({
    "1": fields.IAR_1,
    "2": fields.IAR_2,
    "3": fields.IAR_3.optional(),
    "4": fields.IAR_4.optional()
  })
  .register(hl7v2Metadata, {
    title: "IAR",
    version: "2.7",
    description: "HL7 v2.7 IAR segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the IAR schema
 */
export type IAR = z.infer<typeof iarSchema>;

/**
 * Default export for convenience
 */
export default iarSchema;
