import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/sdd';

/**
 * HL7 v2.8 SDD Segment
 * 
 * HL7 v2.8 SDD segment definition
 * Contains field definitions and constraints for the SDD segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SDD segment schema
 * Defines the structure and validation rules for the SDD segment
 */
export const sddSchema = z.object({
  "1": fields.SDD_1.optional(),
  "2": fields.SDD_2.optional(),
  "3": fields.SDD_3.optional(),
  "4": fields.SDD_4.optional(),
  "5": fields.SDD_5.optional(),
  "6": fields.SDD_6.optional(),
  "7": fields.SDD_7.optional()
}).register(hl7v2Metadata, {
  title: "SDD",
  version: "2.8",
  description: "HL7 v2.8 SDD segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the SDD schema
 */
export type SDD = z.infer<typeof sddSchema>;

/**
 * Default export for convenience
 */
export default sddSchema;