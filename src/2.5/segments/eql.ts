import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/eql";

/**
 * HL7 v2.5 EQL Segment
 *
 * HL7 v2.5 EQL segment definition
 * Contains field definitions and constraints for the EQL segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EQL segment schema
 * Defines the structure and validation rules for the EQL segment
 */
export const eqlSchema = z
  .object({
    "1": fields.EQL_1.optional(),
    "2": fields.EQL_2,
    "3": fields.EQL_3,
    "4": fields.EQL_4
  })
  .register(hl7v2Metadata, {
    title: "EQL",
    version: "2.5",
    description: "HL7 v2.5 EQL segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the EQL schema
 */
export type EQL = z.infer<typeof eqlSchema>;

/**
 * Default export for convenience
 */
export default eqlSchema;
