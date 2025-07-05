import { z } from "zod/v4";
import hl7v2Metadata from "../registry";

/**
 * HL7 v2.7 UB1 Segment
 *
 * HL7 v2.7 UB1 segment definition
 * Contains field definitions and constraints for the UB1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * UB1 segment schema
 * Defines the structure and validation rules for the UB1 segment
 * This segment contains undefined elements and is represented as any
 */
export const ub1Schema = z.any().register(hl7v2Metadata, {
  title: "UB1",
  version: "2.7",
  description: "HL7 v2.7 UB1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the UB1 schema
 */
export type UB1 = z.infer<typeof ub1Schema>;

/**
 * Default export for convenience
 */
export default ub1Schema;
