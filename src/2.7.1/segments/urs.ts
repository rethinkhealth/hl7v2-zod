import { z } from "zod/v4";
import hl7v2Metadata from "../registry";

/**
 * HL7 v2.7 URS Segment
 *
 * HL7 v2.7 URS segment definition
 * Contains field definitions and constraints for the URS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * URS segment schema
 * Defines the structure and validation rules for the URS segment
 * This segment contains undefined elements and is represented as any
 */
export const ursSchema = z.any().register(hl7v2Metadata, {
  title: "URS",
  version: "2.7",
  description: "HL7 v2.7 URS segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the URS schema
 */
export type URS = z.infer<typeof ursSchema>;

/**
 * Default export for convenience
 */
export default ursSchema;
