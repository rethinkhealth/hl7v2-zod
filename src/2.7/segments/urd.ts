import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';

/**
 * HL7 v2.7 URD Segment
 * 
 * HL7 v2.7 URD segment definition
 * Contains field definitions and constraints for the URD segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * URD segment schema
 * Defines the structure and validation rules for the URD segment
 * This segment contains undefined elements and is represented as any
 */
export const urdSchema = z.any().register(hl7v2Metadata, {
  title: "URD",
  version: "2.7",
  description: "HL7 v2.7 URD segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the URD schema
 */
export type URD = z.infer<typeof urdSchema>;

/**
 * Default export for convenience
 */
export default urdSchema;