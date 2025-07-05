import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pce";

/**
 * HL7 v2.8 PCE Segment
 *
 * HL7 v2.8 PCE segment definition
 * Contains field definitions and constraints for the PCE segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PCE segment schema
 * Defines the structure and validation rules for the PCE segment
 */
export const pceSchema = z
  .object({
    "1": fields.PCE_1,
    "2": fields.PCE_2.optional(),
    "3": fields.PCE_3.optional(),
    "4": fields.PCE_4.optional()
  })
  .register(hl7v2Metadata, {
    title: "PCE",
    version: "2.8",
    description: "HL7 v2.8 PCE segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PCE schema
 */
export type PCE = z.infer<typeof pceSchema>;

/**
 * Default export for convenience
 */
export default pceSchema;
