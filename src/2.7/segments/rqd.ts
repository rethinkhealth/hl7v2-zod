import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rqd';

/**
 * HL7 v2.7 RQD Segment
 * 
 * HL7 v2.7 RQD segment definition
 * Contains field definitions and constraints for the RQD segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RQD segment schema
 * Defines the structure and validation rules for the RQD segment
 */
export const rqdSchema = z.object({
  "1": fields.RQD_1.optional(),
  "2": fields.RQD_2.optional(),
  "3": fields.RQD_3.optional(),
  "4": fields.RQD_4.optional(),
  "5": fields.RQD_5.optional(),
  "6": fields.RQD_6.optional(),
  "7": fields.RQD_7.optional(),
  "8": fields.RQD_8.optional(),
  "9": fields.RQD_9.optional(),
  "10": fields.RQD_10.optional()
}).register(hl7v2Metadata, {
  title: "RQD",
  version: "2.7",
  description: "HL7 v2.7 RQD segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RQD schema
 */
export type RQD = z.infer<typeof rqdSchema>;

/**
 * Default export for convenience
 */
export default rqdSchema;