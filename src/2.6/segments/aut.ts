import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/aut';

/**
 * HL7 v2.6 AUT Segment
 * 
 * HL7 v2.6 AUT segment definition
 * Contains field definitions and constraints for the AUT segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AUT segment schema
 * Defines the structure and validation rules for the AUT segment
 */
export const autSchema = z.object({
  "1": fields.AUT_1.optional(),
  "2": fields.AUT_2,
  "3": fields.AUT_3.optional(),
  "4": fields.AUT_4.optional(),
  "5": fields.AUT_5.optional(),
  "6": fields.AUT_6.optional(),
  "7": fields.AUT_7.optional(),
  "8": fields.AUT_8.optional(),
  "9": fields.AUT_9.optional(),
  "10": fields.AUT_10.optional()
}).register(hl7v2Metadata, {
  title: "AUT",
  version: "2.6",
  description: "HL7 v2.6 AUT segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the AUT schema
 */
export type AUT = z.infer<typeof autSchema>;

/**
 * Default export for convenience
 */
export default autSchema;