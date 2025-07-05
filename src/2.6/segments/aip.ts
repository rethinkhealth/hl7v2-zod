import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/aip';

/**
 * HL7 v2.6 AIP Segment
 * 
 * HL7 v2.6 AIP segment definition
 * Contains field definitions and constraints for the AIP segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AIP segment schema
 * Defines the structure and validation rules for the AIP segment
 */
export const aipSchema = z.object({
  "1": fields.AIP_1,
  "2": fields.AIP_2.optional(),
  "3": z.array(fields.AIP_3).optional(),
  "4": fields.AIP_4.optional(),
  "5": fields.AIP_5.optional(),
  "6": fields.AIP_6.optional(),
  "7": fields.AIP_7.optional(),
  "8": fields.AIP_8.optional(),
  "9": fields.AIP_9.optional(),
  "10": fields.AIP_10.optional(),
  "11": fields.AIP_11.optional(),
  "12": fields.AIP_12.optional()
}).register(hl7v2Metadata, {
  title: "AIP",
  version: "2.6",
  description: "HL7 v2.6 AIP segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the AIP schema
 */
export type AIP = z.infer<typeof aipSchema>;

/**
 * Default export for convenience
 */
export default aipSchema;