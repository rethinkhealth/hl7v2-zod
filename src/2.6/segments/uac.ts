import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/uac";

/**
 * HL7 v2.6 UAC Segment
 *
 * HL7 v2.6 UAC segment definition
 * Contains field definitions and constraints for the UAC segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * UAC segment schema
 * Defines the structure and validation rules for the UAC segment
 */
export const uacSchema = z
  .object({
    "1": fields.UAC_1,
    "2": fields.UAC_2
  })
  .register(hl7v2Metadata, {
    title: "UAC",
    version: "2.6",
    description: "HL7 v2.6 UAC segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the UAC schema
 */
export type UAC = z.infer<typeof uacSchema>;

/**
 * Default export for convenience
 */
export default uacSchema;
