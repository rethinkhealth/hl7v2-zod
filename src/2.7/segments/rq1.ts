import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/rq1';

/**
 * HL7 v2.7 RQ1 Segment
 * 
 * HL7 v2.7 RQ1 segment definition
 * Contains field definitions and constraints for the RQ1 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RQ1 segment schema
 * Defines the structure and validation rules for the RQ1 segment
 */
export const rq1Schema = z.object({
  "1": fields.RQ1_1.optional(),
  "2": fields.RQ1_2.optional(),
  "3": fields.RQ1_3.optional(),
  "4": fields.RQ1_4.optional(),
  "5": fields.RQ1_5.optional(),
  "6": fields.RQ1_6.optional(),
  "7": fields.RQ1_7.optional()
}).register(hl7v2Metadata, {
  title: "RQ1",
  version: "2.7",
  description: "HL7 v2.7 RQ1 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the RQ1 schema
 */
export type RQ1 = z.infer<typeof rq1Schema>;

/**
 * Default export for convenience
 */
export default rq1Schema;