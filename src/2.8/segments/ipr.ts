import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ipr';

/**
 * HL7 v2.8 IPR Segment
 * 
 * HL7 v2.8 IPR segment definition
 * Contains field definitions and constraints for the IPR segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IPR segment schema
 * Defines the structure and validation rules for the IPR segment
 */
export const iprSchema = z.object({
  "1": fields.IPR_1,
  "2": fields.IPR_2,
  "3": fields.IPR_3,
  "4": fields.IPR_4,
  "5": fields.IPR_5,
  "6": fields.IPR_6.optional(),
  "7": fields.IPR_7.optional(),
  "8": fields.IPR_8
}).register(hl7v2Metadata, {
  title: "IPR",
  version: "2.8",
  description: "HL7 v2.8 IPR segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the IPR schema
 */
export type IPR = z.infer<typeof iprSchema>;

/**
 * Default export for convenience
 */
export default iprSchema;