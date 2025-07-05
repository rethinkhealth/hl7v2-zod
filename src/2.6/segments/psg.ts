import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/psg";

/**
 * HL7 v2.6 PSG Segment
 *
 * HL7 v2.6 PSG segment definition
 * Contains field definitions and constraints for the PSG segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PSG segment schema
 * Defines the structure and validation rules for the PSG segment
 */
export const psgSchema = z
  .object({
    "1": fields.PSG_1,
    "2": fields.PSG_2.optional(),
    "3": fields.PSG_3,
    "4": fields.PSG_4,
    "5": fields.PSG_5,
    "6": fields.PSG_6
  })
  .register(hl7v2Metadata, {
    title: "PSG",
    version: "2.6",
    description: "HL7 v2.6 PSG segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PSG schema
 */
export type PSG = z.infer<typeof psgSchema>;

/**
 * Default export for convenience
 */
export default psgSchema;
