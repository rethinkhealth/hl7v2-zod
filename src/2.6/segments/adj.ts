import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/adj';

/**
 * HL7 v2.6 ADJ Segment
 * 
 * HL7 v2.6 ADJ segment definition
 * Contains field definitions and constraints for the ADJ segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADJ segment schema
 * Defines the structure and validation rules for the ADJ segment
 */
export const adjSchema = z.object({
  "1": fields.ADJ_1,
  "2": fields.ADJ_2,
  "3": fields.ADJ_3,
  "4": fields.ADJ_4,
  "5": fields.ADJ_5.optional(),
  "6": fields.ADJ_6.optional(),
  "7": fields.ADJ_7.optional(),
  "8": fields.ADJ_8.optional(),
  "9": fields.ADJ_9.optional(),
  "10": fields.ADJ_10.optional(),
  "11": fields.ADJ_11.optional(),
  "12": fields.ADJ_12.optional(),
  "13": fields.ADJ_13.optional(),
  "14": fields.ADJ_14,
  "15": fields.ADJ_15.optional()
}).register(hl7v2Metadata, {
  title: "ADJ",
  version: "2.6",
  description: "HL7 v2.6 ADJ segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the ADJ schema
 */
export type ADJ = z.infer<typeof adjSchema>;

/**
 * Default export for convenience
 */
export default adjSchema;