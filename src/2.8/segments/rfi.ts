import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rfi';

/**
 * HL7 v2.8 RFI Segment
 * 
 * HL7 v2.8 RFI segment definition
 * Contains field definitions and constraints for the RFI segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RFI segment schema
 * Defines the structure and validation rules for the RFI segment
 */
export const rfiSchema = z.object({
  "1": fields.RFI_1,
  "2": fields.RFI_2,
  "3": fields.RFI_3.optional(),
  "4": fields.RFI_4.optional()
}).register(hl7v2Metadata, {
  title: "RFI",
  version: "2.8",
  description: "HL7 v2.8 RFI segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RFI schema
 */
export type RFI = z.infer<typeof rfiSchema>;

/**
 * Default export for convenience
 */
export default rfiSchema;