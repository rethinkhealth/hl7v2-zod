import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/arv";

/**
 * HL7 v2.6 ARV Segment
 *
 * HL7 v2.6 ARV segment definition
 * Contains field definitions and constraints for the ARV segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ARV segment schema
 * Defines the structure and validation rules for the ARV segment
 */
export const arvSchema = z
  .object({
    "1": fields.ARV_1.optional(),
    "2": fields.ARV_2,
    "3": fields.ARV_3,
    "4": z.array(fields.ARV_4).optional(),
    "5": z.array(fields.ARV_5).optional(),
    "6": fields.ARV_6.optional()
  })
  .register(hl7v2Metadata, {
    title: "ARV",
    version: "2.6",
    description: "HL7 v2.6 ARV segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the ARV schema
 */
export type ARV = z.infer<typeof arvSchema>;

/**
 * Default export for convenience
 */
export default arvSchema;
