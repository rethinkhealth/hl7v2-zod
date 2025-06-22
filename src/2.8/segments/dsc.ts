import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/dsc';

/**
 * HL7 v2.8 DSC Segment
 * 
 * HL7 v2.8 DSC segment definition
 * Contains field definitions and constraints for the DSC segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DSC segment schema
 * Defines the structure and validation rules for the DSC segment
 */
export const dscSchema = z.object({
  "1": fields.DSC_1.optional(),
  "2": fields.DSC_2.optional()
}).register(hl7v2Metadata, {
  title: "DSC",
  version: "2.8",
  description: "HL7 v2.8 DSC segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the DSC schema
 */
export type DSC = z.infer<typeof dscSchema>;

/**
 * Default export for convenience
 */
export default dscSchema;