import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/odt';

/**
 * HL7 v2.8 ODT Segment
 * 
 * HL7 v2.8 ODT segment definition
 * Contains field definitions and constraints for the ODT segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ODT segment schema
 * Defines the structure and validation rules for the ODT segment
 */
export const odtSchema = z.object({
  "1": fields.ODT_1,
  "2": z.array(fields.ODT_2).optional(),
  "3": fields.ODT_3.optional()
}).register(hl7v2Metadata, {
  title: "ODT",
  version: "2.8",
  description: "HL7 v2.8 ODT segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ODT schema
 */
export type ODT = z.infer<typeof odtSchema>;

/**
 * Default export for convenience
 */
export default odtSchema;