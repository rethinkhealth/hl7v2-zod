import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/al1';

/**
 * HL7 v2.6 AL1 Segment
 * 
 * HL7 v2.6 AL1 segment definition
 * Contains field definitions and constraints for the AL1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AL1 segment schema
 * Defines the structure and validation rules for the AL1 segment
 */
export const al1Schema = z.object({
  "1": fields.AL1_1,
  "2": fields.AL1_2.optional(),
  "3": fields.AL1_3,
  "4": fields.AL1_4.optional(),
  "5": z.array(fields.AL1_5).optional(),
  "6": fields.AL1_6.optional()
}).register(hl7v2Metadata, {
  title: "AL1",
  version: "2.6",
  description: "HL7 v2.6 AL1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the AL1 schema
 */
export type AL1 = z.infer<typeof al1Schema>;

/**
 * Default export for convenience
 */
export default al1Schema;