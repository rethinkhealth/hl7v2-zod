import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/ctd';

/**
 * HL7 v2.7 CTD Segment
 * 
 * HL7 v2.7 CTD segment definition
 * Contains field definitions and constraints for the CTD segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CTD segment schema
 * Defines the structure and validation rules for the CTD segment
 */
export const ctdSchema = z.object({
  "1": z.array(fields.CTD_1),
  "2": z.array(fields.CTD_2).optional(),
  "3": z.array(fields.CTD_3).optional(),
  "4": fields.CTD_4.optional(),
  "5": z.array(fields.CTD_5).optional(),
  "6": fields.CTD_6.optional(),
  "7": z.array(fields.CTD_7).optional()
}).register(hl7v2Metadata, {
  title: "CTD",
  version: "2.7",
  description: "HL7 v2.7 CTD segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the CTD schema
 */
export type CTD = z.infer<typeof ctdSchema>;

/**
 * Default export for convenience
 */
export default ctdSchema;