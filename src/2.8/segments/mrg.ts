import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/mrg";

/**
 * HL7 v2.8 MRG Segment
 *
 * HL7 v2.8 MRG segment definition
 * Contains field definitions and constraints for the MRG segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MRG segment schema
 * Defines the structure and validation rules for the MRG segment
 */
export const mrgSchema = z
  .object({
    "1": z.array(fields.MRG_1),
    "3": fields.MRG_3.optional(),
    "5": fields.MRG_5.optional(),
    "6": z.array(fields.MRG_6).optional(),
    "7": z.array(fields.MRG_7).optional()
  })
  .register(hl7v2Metadata, {
    title: "MRG",
    version: "2.8",
    description: "HL7 v2.8 MRG segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the MRG schema
 */
export type MRG = z.infer<typeof mrgSchema>;

/**
 * Default export for convenience
 */
export default mrgSchema;
