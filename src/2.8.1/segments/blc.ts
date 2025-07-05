import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/blc";

/**
 * HL7 v2.8 BLC Segment
 *
 * HL7 v2.8 BLC segment definition
 * Contains field definitions and constraints for the BLC segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BLC segment schema
 * Defines the structure and validation rules for the BLC segment
 */
export const blcSchema = z
  .object({
    "1": fields.BLC_1.optional(),
    "2": fields.BLC_2.optional()
  })
  .register(hl7v2Metadata, {
    title: "BLC",
    version: "2.8",
    description: "HL7 v2.8 BLC segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the BLC schema
 */
export type BLC = z.infer<typeof blcSchema>;

/**
 * Default export for convenience
 */
export default blcSchema;
