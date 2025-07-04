import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/bhs';

/**
 * HL7 v2.5 BHS Segment
 * 
 * HL7 v2.5 BHS segment definition
 * Contains field definitions and constraints for the BHS segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BHS segment schema
 * Defines the structure and validation rules for the BHS segment
 */
export const bhsSchema = z.object({
  "1": fields.BHS_1,
  "2": fields.BHS_2,
  "3": fields.BHS_3.optional(),
  "4": fields.BHS_4.optional(),
  "5": fields.BHS_5.optional(),
  "6": fields.BHS_6.optional(),
  "7": fields.BHS_7.optional(),
  "8": fields.BHS_8.optional(),
  "9": fields.BHS_9.optional(),
  "10": fields.BHS_10.optional(),
  "11": fields.BHS_11.optional(),
  "12": fields.BHS_12.optional()
}).register(hl7v2Metadata, {
  title: "BHS",
  version: "2.5",
  description: "HL7 v2.5 BHS segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the BHS schema
 */
export type BHS = z.infer<typeof bhsSchema>;

/**
 * Default export for convenience
 */
export default bhsSchema;