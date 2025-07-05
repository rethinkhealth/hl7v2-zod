import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/sid";

/**
 * HL7 v2.7 SID Segment
 *
 * HL7 v2.7 SID segment definition
 * Contains field definitions and constraints for the SID segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SID segment schema
 * Defines the structure and validation rules for the SID segment
 */
export const sidSchema = z
  .object({
    "1": fields.SID_1.optional(),
    "2": fields.SID_2.optional(),
    "3": fields.SID_3.optional(),
    "4": fields.SID_4.optional()
  })
  .register(hl7v2Metadata, {
    title: "SID",
    version: "2.7",
    description: "HL7 v2.7 SID segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the SID schema
 */
export type SID = z.infer<typeof sidSchema>;

/**
 * Default export for convenience
 */
export default sidSchema;
