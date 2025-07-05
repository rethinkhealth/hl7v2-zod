import { z } from "zod/v4";
import hl7v2Metadata from "../registry";

/**
 * HL7 v2.8 ZL7 Segment
 *
 * HL7 v2.8 ZL7 segment definition
 * Contains field definitions and constraints for the ZL7 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ZL7 segment schema
 * Defines the structure and validation rules for the ZL7 segment
 * This segment contains undefined elements and is represented as any
 */
export const zl7Schema = z.any().register(hl7v2Metadata, {
  title: "ZL7",
  version: "2.8",
  description: "HL7 v2.8 ZL7 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ZL7 schema
 */
export type ZL7 = z.infer<typeof zl7Schema>;

/**
 * Default export for convenience
 */
export default zl7Schema;
