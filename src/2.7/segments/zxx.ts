import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';

/**
 * HL7 v2.7 Zxx Segment
 * 
 * HL7 v2.7 Zxx segment definition
 * Contains field definitions and constraints for the Zxx segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * Zxx segment schema
 * Defines the structure and validation rules for the Zxx segment
 * This segment contains undefined elements and is represented as any
 */
export const zxxSchema = z.any().register(hl7v2Metadata, {
  title: "Zxx",
  version: "2.7",
  description: "HL7 v2.7 Zxx segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the Zxx schema
 */
export type Zxx = z.infer<typeof zxxSchema>;

/**
 * Default export for convenience
 */
export default zxxSchema;