import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/msa";

/**
 * HL7 v2.8 MSA Segment
 *
 * HL7 v2.8 MSA segment definition
 * Contains field definitions and constraints for the MSA segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MSA segment schema
 * Defines the structure and validation rules for the MSA segment
 */
export const msaSchema = z
  .object({
    "1": fields.MSA_1,
    "2": fields.MSA_2,
    "4": fields.MSA_4.optional(),
    "7": fields.MSA_7.optional(),
    "8": fields.MSA_8.optional()
  })
  .register(hl7v2Metadata, {
    title: "MSA",
    version: "2.8",
    description: "HL7 v2.8 MSA segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the MSA schema
 */
export type MSA = z.infer<typeof msaSchema>;

/**
 * Default export for convenience
 */
export default msaSchema;
