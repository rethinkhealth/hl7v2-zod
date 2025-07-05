import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/msa";

/**
 * HL7 v2.6 MSA Segment
 *
 * HL7 v2.6 MSA segment definition
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
    "3": fields.MSA_3.optional(),
    "4": fields.MSA_4.optional(),
    "6": fields.MSA_6.optional(),
    "7": fields.MSA_7.optional(),
    "8": fields.MSA_8.optional()
  })
  .register(hl7v2Metadata, {
    title: "MSA",
    version: "2.6",
    description: "HL7 v2.6 MSA segment",
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
