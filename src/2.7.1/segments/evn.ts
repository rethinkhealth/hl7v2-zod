import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/evn';

/**
 * HL7 v2.7 EVN Segment
 * 
 * HL7 v2.7 EVN segment definition
 * Contains field definitions and constraints for the EVN segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EVN segment schema
 * Defines the structure and validation rules for the EVN segment
 */
export const evnSchema = z.object({
  "2": fields.EVN_2,
  "3": fields.EVN_3.optional(),
  "4": fields.EVN_4.optional(),
  "5": z.array(fields.EVN_5).optional(),
  "6": fields.EVN_6.optional(),
  "7": fields.EVN_7.optional()
}).register(hl7v2Metadata, {
  title: "EVN",
  version: "2.7",
  description: "HL7 v2.7 EVN segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the EVN schema
 */
export type EVN = z.infer<typeof evnSchema>;

/**
 * Default export for convenience
 */
export default evnSchema;