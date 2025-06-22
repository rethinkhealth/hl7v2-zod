import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/mfi';

/**
 * HL7 v2.8 MFI Segment
 * 
 * HL7 v2.8 MFI segment definition
 * Contains field definitions and constraints for the MFI segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFI segment schema
 * Defines the structure and validation rules for the MFI segment
 */
export const mfiSchema = z.object({
  "1": fields.MFI_1,
  "2": z.array(fields.MFI_2).optional(),
  "3": fields.MFI_3,
  "4": fields.MFI_4.optional(),
  "5": fields.MFI_5.optional(),
  "6": fields.MFI_6
}).register(hl7v2Metadata, {
  title: "MFI",
  version: "2.8",
  description: "HL7 v2.8 MFI segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the MFI schema
 */
export type MFI = z.infer<typeof mfiSchema>;

/**
 * Default export for convenience
 */
export default mfiSchema;