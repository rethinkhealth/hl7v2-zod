import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/equ';

/**
 * HL7 v2.7 EQU Segment
 * 
 * HL7 v2.7 EQU segment definition
 * Contains field definitions and constraints for the EQU segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EQU segment schema
 * Defines the structure and validation rules for the EQU segment
 */
export const equSchema = z.object({
  "1": fields.EQU_1,
  "2": fields.EQU_2,
  "3": fields.EQU_3.optional(),
  "4": fields.EQU_4.optional(),
  "5": fields.EQU_5.optional()
}).register(hl7v2Metadata, {
  title: "EQU",
  version: "2.7",
  description: "HL7 v2.7 EQU segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the EQU schema
 */
export type EQU = z.infer<typeof equSchema>;

/**
 * Default export for convenience
 */
export default equSchema;