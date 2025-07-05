import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/urd";

/**
 * HL7 v2.6 URD Segment
 *
 * HL7 v2.6 URD segment definition
 * Contains field definitions and constraints for the URD segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * URD segment schema
 * Defines the structure and validation rules for the URD segment
 */
export const urdSchema = z
  .object({
    "1": fields.URD_1.optional(),
    "2": fields.URD_2.optional(),
    "3": z.array(fields.URD_3),
    "4": z.array(fields.URD_4).optional(),
    "5": z.array(fields.URD_5).optional(),
    "6": z.array(fields.URD_6).optional(),
    "7": fields.URD_7.optional()
  })
  .register(hl7v2Metadata, {
    title: "URD",
    version: "2.6",
    description: "HL7 v2.6 URD segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the URD schema
 */
export type URD = z.infer<typeof urdSchema>;

/**
 * Default export for convenience
 */
export default urdSchema;
