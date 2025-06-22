import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';

/**
 * HL7 v2.9 ROL Segment
 * 
 * HL7 v2.9 ROL segment definition
 * Contains field definitions and constraints for the ROL segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ROL segment schema
 * Defines the structure and validation rules for the ROL segment
 * This segment contains undefined elements and is represented as any
 */
export const rolSchema = z.any().register(hl7v2Metadata, {
  title: "ROL",
  version: "2.9",
  description: "HL7 v2.9 ROL segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ROL schema
 */
export type ROL = z.infer<typeof rolSchema>;

/**
 * Default export for convenience
 */
export default rolSchema;