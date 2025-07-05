import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/lrl";

/**
 * HL7 v2.6 LRL Segment
 *
 * HL7 v2.6 LRL segment definition
 * Contains field definitions and constraints for the LRL segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LRL segment schema
 * Defines the structure and validation rules for the LRL segment
 */
export const lrlSchema = z
  .object({
    "1": fields.LRL_1,
    "2": fields.LRL_2.optional(),
    "3": fields.LRL_3.optional(),
    "4": fields.LRL_4,
    "5": z.array(fields.LRL_5).optional(),
    "6": fields.LRL_6.optional()
  })
  .register(hl7v2Metadata, {
    title: "LRL",
    version: "2.6",
    description: "HL7 v2.6 LRL segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the LRL schema
 */
export type LRL = z.infer<typeof lrlSchema>;

/**
 * Default export for convenience
 */
export default lrlSchema;
