import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rdt';

/**
 * HL7 v2.7 RDT Segment
 * 
 * HL7 v2.7 RDT segment definition
 * Contains field definitions and constraints for the RDT segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RDT segment schema
 * Defines the structure and validation rules for the RDT segment
 */
export const rdtSchema = z.object({
  "1": fields.RDT_1
}).register(hl7v2Metadata, {
  title: "RDT",
  version: "2.7",
  description: "HL7 v2.7 RDT segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RDT schema
 */
export type RDT = z.infer<typeof rdtSchema>;

/**
 * Default export for convenience
 */
export default rdtSchema;