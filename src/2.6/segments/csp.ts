import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/csp';

/**
 * HL7 v2.6 CSP Segment
 * 
 * HL7 v2.6 CSP segment definition
 * Contains field definitions and constraints for the CSP segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CSP segment schema
 * Defines the structure and validation rules for the CSP segment
 */
export const cspSchema = z.object({
  "1": fields.CSP_1,
  "2": fields.CSP_2,
  "3": fields.CSP_3.optional(),
  "4": fields.CSP_4.optional()
}).register(hl7v2Metadata, {
  title: "CSP",
  version: "2.6",
  description: "HL7 v2.6 CSP segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the CSP schema
 */
export type CSP = z.infer<typeof cspSchema>;

/**
 * Default export for convenience
 */
export default cspSchema;