import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/vtq';

/**
 * HL7 v2.5 VTQ Segment
 * 
 * HL7 v2.5 VTQ segment definition
 * Contains field definitions and constraints for the VTQ segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VTQ segment schema
 * Defines the structure and validation rules for the VTQ segment
 */
export const vtqSchema = z.object({
  "1": fields.VTQ_1.optional(),
  "2": fields.VTQ_2,
  "3": fields.VTQ_3,
  "4": fields.VTQ_4,
  "5": z.array(fields.VTQ_5).optional()
}).register(hl7v2Metadata, {
  title: "VTQ",
  version: "2.5",
  description: "HL7 v2.5 VTQ segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the VTQ schema
 */
export type VTQ = z.infer<typeof vtqSchema>;

/**
 * Default export for convenience
 */
export default vtqSchema;