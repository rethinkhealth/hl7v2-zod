import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/urs';

/**
 * HL7 v2.5 URS Segment
 * 
 * HL7 v2.5 URS segment definition
 * Contains field definitions and constraints for the URS segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * URS segment schema
 * Defines the structure and validation rules for the URS segment
 */
export const ursSchema = z.object({
  "1": z.array(fields.URS_1),
  "2": fields.URS_2.optional(),
  "3": fields.URS_3.optional(),
  "4": z.array(fields.URS_4).optional(),
  "5": z.array(fields.URS_5).optional(),
  "6": z.array(fields.URS_6).optional(),
  "7": z.array(fields.URS_7).optional(),
  "8": z.array(fields.URS_8).optional(),
  "9": fields.URS_9.optional()
}).register(hl7v2Metadata, {
  title: "URS",
  version: "2.5",
  description: "HL7 v2.5 URS segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the URS schema
 */
export type URS = z.infer<typeof ursSchema>;

/**
 * Default export for convenience
 */
export default ursSchema;