import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/cm0";

/**
 * HL7 v2.6 CM0 Segment
 *
 * HL7 v2.6 CM0 segment definition
 * Contains field definitions and constraints for the CM0 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CM0 segment schema
 * Defines the structure and validation rules for the CM0 segment
 */
export const cm0Schema = z
  .object({
    "1": fields.CM0_1.optional(),
    "2": fields.CM0_2,
    "3": z.array(fields.CM0_3).optional(),
    "4": fields.CM0_4,
    "5": z.array(fields.CM0_5).optional(),
    "6": fields.CM0_6.optional(),
    "7": fields.CM0_7.optional(),
    "8": fields.CM0_8.optional(),
    "9": z.array(fields.CM0_9).optional(),
    "10": fields.CM0_10.optional(),
    "11": z.array(fields.CM0_11).optional()
  })
  .register(hl7v2Metadata, {
    title: "CM0",
    version: "2.6",
    description: "HL7 v2.6 CM0 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the CM0 schema
 */
export type CM0 = z.infer<typeof cm0Schema>;

/**
 * Default export for convenience
 */
export default cm0Schema;
