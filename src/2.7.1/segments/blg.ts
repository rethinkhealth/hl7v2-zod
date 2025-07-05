import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/blg";

/**
 * HL7 v2.7 BLG Segment
 *
 * HL7 v2.7 BLG segment definition
 * Contains field definitions and constraints for the BLG segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BLG segment schema
 * Defines the structure and validation rules for the BLG segment
 */
export const blgSchema = z
  .object({
    "1": fields.BLG_1.optional(),
    "2": fields.BLG_2.optional(),
    "3": fields.BLG_3.optional(),
    "4": fields.BLG_4.optional()
  })
  .register(hl7v2Metadata, {
    title: "BLG",
    version: "2.7",
    description: "HL7 v2.7 BLG segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the BLG schema
 */
export type BLG = z.infer<typeof blgSchema>;

/**
 * Default export for convenience
 */
export default blgSchema;
