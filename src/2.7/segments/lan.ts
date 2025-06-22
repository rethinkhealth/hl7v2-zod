import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/lan';

/**
 * HL7 v2.7 LAN Segment
 * 
 * HL7 v2.7 LAN segment definition
 * Contains field definitions and constraints for the LAN segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LAN segment schema
 * Defines the structure and validation rules for the LAN segment
 */
export const lanSchema = z.object({
  "1": fields.LAN_1,
  "2": fields.LAN_2,
  "3": z.array(fields.LAN_3).optional(),
  "4": fields.LAN_4.optional()
}).register(hl7v2Metadata, {
  title: "LAN",
  version: "2.7",
  description: "HL7 v2.7 LAN segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the LAN schema
 */
export type LAN = z.infer<typeof lanSchema>;

/**
 * Default export for convenience
 */
export default lanSchema;