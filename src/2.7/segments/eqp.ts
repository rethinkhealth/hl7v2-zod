import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/eqp";

/**
 * HL7 v2.7 EQP Segment
 *
 * HL7 v2.7 EQP segment definition
 * Contains field definitions and constraints for the EQP segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EQP segment schema
 * Defines the structure and validation rules for the EQP segment
 */
export const eqpSchema = z
  .object({
    "1": fields.EQP_1,
    "2": fields.EQP_2.optional(),
    "3": fields.EQP_3,
    "4": fields.EQP_4.optional(),
    "5": fields.EQP_5
  })
  .register(hl7v2Metadata, {
    title: "EQP",
    version: "2.7",
    description: "HL7 v2.7 EQP segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the EQP schema
 */
export type EQP = z.infer<typeof eqpSchema>;

/**
 * Default export for convenience
 */
export default eqpSchema;
