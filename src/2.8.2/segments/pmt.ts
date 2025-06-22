import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/pmt';

/**
 * HL7 v2.8 PMT Segment
 * 
 * HL7 v2.8 PMT segment definition
 * Contains field definitions and constraints for the PMT segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PMT segment schema
 * Defines the structure and validation rules for the PMT segment
 */
export const pmtSchema = z.object({
  "1": fields.PMT_1,
  "2": fields.PMT_2,
  "3": fields.PMT_3,
  "4": fields.PMT_4,
  "5": fields.PMT_5,
  "6": fields.PMT_6,
  "7": fields.PMT_7.optional(),
  "8": fields.PMT_8.optional(),
  "9": fields.PMT_9.optional(),
  "10": fields.PMT_10.optional(),
  "11": fields.PMT_11,
  "12": fields.PMT_12.optional()
}).register(hl7v2Metadata, {
  title: "PMT",
  version: "2.8",
  description: "HL7 v2.8 PMT segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the PMT schema
 */
export type PMT = z.infer<typeof pmtSchema>;

/**
 * Default export for convenience
 */
export default pmtSchema;