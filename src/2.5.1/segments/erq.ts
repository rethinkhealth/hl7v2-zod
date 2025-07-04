import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/erq';

/**
 * HL7 v2.5 ERQ Segment
 * 
 * HL7 v2.5 ERQ segment definition
 * Contains field definitions and constraints for the ERQ segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ERQ segment schema
 * Defines the structure and validation rules for the ERQ segment
 */
export const erqSchema = z.object({
  "1": fields.ERQ_1.optional(),
  "2": fields.ERQ_2,
  "3": z.array(fields.ERQ_3).optional()
}).register(hl7v2Metadata, {
  title: "ERQ",
  version: "2.5",
  description: "HL7 v2.5 ERQ segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ERQ schema
 */
export type ERQ = z.infer<typeof erqSchema>;

/**
 * Default export for convenience
 */
export default erqSchema;