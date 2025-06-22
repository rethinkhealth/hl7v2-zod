import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';

/**
 * HL7 v2.8 Hxx Segment
 * 
 * HL7 v2.8 Hxx segment definition
 * Contains field definitions and constraints for the Hxx segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * Hxx segment schema
 * Defines the structure and validation rules for the Hxx segment
 * This segment contains undefined elements and is represented as any
 */
export const hxxSchema = z.any().register(hl7v2Metadata, {
  title: "Hxx",
  version: "2.8",
  description: "HL7 v2.8 Hxx segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the Hxx schema
 */
export type Hxx = z.infer<typeof hxxSchema>;

/**
 * Default export for convenience
 */
export default hxxSchema;