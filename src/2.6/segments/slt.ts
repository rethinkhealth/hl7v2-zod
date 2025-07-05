import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/slt";

/**
 * HL7 v2.6 SLT Segment
 *
 * HL7 v2.6 SLT segment definition
 * Contains field definitions and constraints for the SLT segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SLT segment schema
 * Defines the structure and validation rules for the SLT segment
 */
export const sltSchema = z
  .object({
    "1": fields.SLT_1.optional(),
    "2": fields.SLT_2.optional(),
    "3": fields.SLT_3.optional(),
    "4": fields.SLT_4.optional(),
    "5": fields.SLT_5.optional()
  })
  .register(hl7v2Metadata, {
    title: "SLT",
    version: "2.6",
    description: "HL7 v2.6 SLT segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the SLT schema
 */
export type SLT = z.infer<typeof sltSchema>;

/**
 * Default export for convenience
 */
export default sltSchema;
