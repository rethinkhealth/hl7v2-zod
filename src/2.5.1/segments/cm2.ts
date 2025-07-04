import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/cm2';

/**
 * HL7 v2.5 CM2 Segment
 * 
 * HL7 v2.5 CM2 segment definition
 * Contains field definitions and constraints for the CM2 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CM2 segment schema
 * Defines the structure and validation rules for the CM2 segment
 */
export const cm2Schema = z.object({
  "1": fields.CM2_1.optional(),
  "2": fields.CM2_2,
  "3": fields.CM2_3.optional(),
  "4": z.array(fields.CM2_4)
}).register(hl7v2Metadata, {
  title: "CM2",
  version: "2.5",
  description: "HL7 v2.5 CM2 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the CM2 schema
 */
export type CM2 = z.infer<typeof cm2Schema>;

/**
 * Default export for convenience
 */
export default cm2Schema;