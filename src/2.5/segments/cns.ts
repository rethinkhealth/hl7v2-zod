import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/cns";

/**
 * HL7 v2.5 CNS Segment
 *
 * HL7 v2.5 CNS segment definition
 * Contains field definitions and constraints for the CNS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CNS segment schema
 * Defines the structure and validation rules for the CNS segment
 */
export const cnsSchema = z
  .object({
    "1": fields.CNS_1.optional(),
    "2": fields.CNS_2.optional(),
    "3": fields.CNS_3.optional(),
    "4": fields.CNS_4.optional(),
    "5": fields.CNS_5.optional(),
    "6": fields.CNS_6.optional()
  })
  .register(hl7v2Metadata, {
    title: "CNS",
    version: "2.5",
    description: "HL7 v2.5 CNS segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the CNS schema
 */
export type CNS = z.infer<typeof cnsSchema>;

/**
 * Default export for convenience
 */
export default cnsSchema;
