import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/pac';

/**
 * HL7 v2.8 PAC Segment
 * 
 * HL7 v2.8 PAC segment definition
 * Contains field definitions and constraints for the PAC segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PAC segment schema
 * Defines the structure and validation rules for the PAC segment
 */
export const pacSchema = z.object({
  "1": fields.PAC_1,
  "2": fields.PAC_2.optional(),
  "3": fields.PAC_3.optional(),
  "4": fields.PAC_4.optional(),
  "5": fields.PAC_5,
  "6": z.array(fields.PAC_6).optional(),
  "7": z.array(fields.PAC_7).optional(),
  "8": z.array(fields.PAC_8).optional()
}).register(hl7v2Metadata, {
  title: "PAC",
  version: "2.8",
  description: "HL7 v2.8 PAC segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PAC schema
 */
export type PAC = z.infer<typeof pacSchema>;

/**
 * Default export for convenience
 */
export default pacSchema;