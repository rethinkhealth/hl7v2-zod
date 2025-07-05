import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/lcc";

/**
 * HL7 v2.7 LCC Segment
 *
 * HL7 v2.7 LCC segment definition
 * Contains field definitions and constraints for the LCC segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LCC segment schema
 * Defines the structure and validation rules for the LCC segment
 */
export const lccSchema = z
  .object({
    "1": fields.LCC_1,
    "2": fields.LCC_2,
    "3": z.array(fields.LCC_3).optional(),
    "4": z.array(fields.LCC_4)
  })
  .register(hl7v2Metadata, {
    title: "LCC",
    version: "2.7",
    description: "HL7 v2.7 LCC segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the LCC schema
 */
export type LCC = z.infer<typeof lccSchema>;

/**
 * Default export for convenience
 */
export default lccSchema;
