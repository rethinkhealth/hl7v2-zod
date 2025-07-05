import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pda";

/**
 * HL7 v2.8 PDA Segment
 *
 * HL7 v2.8 PDA segment definition
 * Contains field definitions and constraints for the PDA segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PDA segment schema
 * Defines the structure and validation rules for the PDA segment
 */
export const pdaSchema = z
  .object({
    "1": z.array(fields.PDA_1).optional(),
    "2": fields.PDA_2.optional(),
    "3": fields.PDA_3.optional(),
    "4": fields.PDA_4.optional(),
    "5": fields.PDA_5.optional(),
    "6": fields.PDA_6.optional(),
    "7": fields.PDA_7.optional(),
    "8": fields.PDA_8.optional(),
    "9": fields.PDA_9.optional()
  })
  .register(hl7v2Metadata, {
    title: "PDA",
    version: "2.8",
    description: "HL7 v2.8 PDA segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PDA schema
 */
export type PDA = z.infer<typeof pdaSchema>;

/**
 * Default export for convenience
 */
export default pdaSchema;
