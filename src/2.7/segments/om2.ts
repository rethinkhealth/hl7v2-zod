import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/om2';

/**
 * HL7 v2.7 OM2 Segment
 * 
 * HL7 v2.7 OM2 segment definition
 * Contains field definitions and constraints for the OM2 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM2 segment schema
 * Defines the structure and validation rules for the OM2 segment
 */
export const om2Schema = z.object({
  "1": fields.OM2_1.optional(),
  "2": fields.OM2_2.optional(),
  "3": z.array(fields.OM2_3).optional(),
  "4": fields.OM2_4.optional(),
  "5": fields.OM2_5.optional(),
  "6": z.array(fields.OM2_6).optional(),
  "7": z.array(fields.OM2_7).optional(),
  "8": fields.OM2_8.optional(),
  "9": z.array(fields.OM2_9).optional(),
  "10": fields.OM2_10.optional()
}).register(hl7v2Metadata, {
  title: "OM2",
  version: "2.7",
  description: "HL7 v2.7 OM2 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the OM2 schema
 */
export type OM2 = z.infer<typeof om2Schema>;

/**
 * Default export for convenience
 */
export default om2Schema;