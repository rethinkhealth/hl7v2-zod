import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/drg";

/**
 * HL7 v2.5 DRG Segment
 *
 * HL7 v2.5 DRG segment definition
 * Contains field definitions and constraints for the DRG segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DRG segment schema
 * Defines the structure and validation rules for the DRG segment
 */
export const drgSchema = z
  .object({
    "1": fields.DRG_1.optional(),
    "2": fields.DRG_2.optional(),
    "3": fields.DRG_3.optional(),
    "4": fields.DRG_4.optional(),
    "5": fields.DRG_5.optional(),
    "6": fields.DRG_6.optional(),
    "7": fields.DRG_7.optional(),
    "8": fields.DRG_8.optional(),
    "9": fields.DRG_9.optional(),
    "10": fields.DRG_10.optional(),
    "11": fields.DRG_11.optional()
  })
  .register(hl7v2Metadata, {
    title: "DRG",
    version: "2.5",
    description: "HL7 v2.5 DRG segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the DRG schema
 */
export type DRG = z.infer<typeof drgSchema>;

/**
 * Default export for convenience
 */
export default drgSchema;
