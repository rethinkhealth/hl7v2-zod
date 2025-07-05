import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/aff";

/**
 * HL7 v2.8 AFF Segment
 *
 * HL7 v2.8 AFF segment definition
 * Contains field definitions and constraints for the AFF segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AFF segment schema
 * Defines the structure and validation rules for the AFF segment
 */
export const affSchema = z
  .object({
    "1": fields.AFF_1,
    "2": fields.AFF_2,
    "3": fields.AFF_3.optional(),
    "4": z.array(fields.AFF_4).optional(),
    "5": fields.AFF_5.optional()
  })
  .register(hl7v2Metadata, {
    title: "AFF",
    version: "2.8",
    description: "HL7 v2.8 AFF segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the AFF schema
 */
export type AFF = z.infer<typeof affSchema>;

/**
 * Default export for convenience
 */
export default affSchema;
