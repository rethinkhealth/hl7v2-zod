import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/dps';

/**
 * HL7 v2.9 DPS Segment
 * 
 * HL7 v2.9 DPS segment definition
 * Contains field definitions and constraints for the DPS segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DPS segment schema
 * Defines the structure and validation rules for the DPS segment
 */
export const dpsSchema = z.object({
  "1": fields.DPS_1,
  "2": z.array(fields.DPS_2),
  "3": fields.DPS_3.optional(),
  "4": fields.DPS_4.optional(),
  "5": fields.DPS_5.optional()
}).register(hl7v2Metadata, {
  title: "DPS",
  version: "2.9",
  description: "HL7 v2.9 DPS segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the DPS schema
 */
export type DPS = z.infer<typeof dpsSchema>;

/**
 * Default export for convenience
 */
export default dpsSchema;