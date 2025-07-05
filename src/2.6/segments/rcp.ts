import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rcp';

/**
 * HL7 v2.6 RCP Segment
 * 
 * HL7 v2.6 RCP segment definition
 * Contains field definitions and constraints for the RCP segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RCP segment schema
 * Defines the structure and validation rules for the RCP segment
 */
export const rcpSchema = z.object({
  "1": fields.RCP_1.optional(),
  "2": fields.RCP_2.optional(),
  "3": fields.RCP_3.optional(),
  "4": fields.RCP_4.optional(),
  "5": fields.RCP_5.optional(),
  "6": z.array(fields.RCP_6).optional(),
  "7": z.array(fields.RCP_7).optional()
}).register(hl7v2Metadata, {
  title: "RCP",
  version: "2.6",
  description: "HL7 v2.6 RCP segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RCP schema
 */
export type RCP = z.infer<typeof rcpSchema>;

/**
 * Default export for convenience
 */
export default rcpSchema;