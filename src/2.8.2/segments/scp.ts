import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/scp';

/**
 * HL7 v2.8 SCP Segment
 * 
 * HL7 v2.8 SCP segment definition
 * Contains field definitions and constraints for the SCP segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SCP segment schema
 * Defines the structure and validation rules for the SCP segment
 */
export const scpSchema = z.object({
  "1": fields.SCP_1.optional(),
  "2": fields.SCP_2.optional(),
  "3": fields.SCP_3.optional(),
  "4": fields.SCP_4.optional(),
  "5": fields.SCP_5.optional(),
  "6": fields.SCP_6.optional(),
  "7": fields.SCP_7.optional(),
  "8": fields.SCP_8.optional()
}).register(hl7v2Metadata, {
  title: "SCP",
  version: "2.8",
  description: "HL7 v2.8 SCP segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the SCP schema
 */
export type SCP = z.infer<typeof scpSchema>;

/**
 * Default export for convenience
 */
export default scpSchema;