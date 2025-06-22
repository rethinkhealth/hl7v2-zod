import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as fields from '../fields/gp2';

/**
 * HL7 v2.8 GP2 Segment
 * 
 * HL7 v2.8 GP2 segment definition
 * Contains field definitions and constraints for the GP2 segment.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * GP2 segment schema
 * Defines the structure and validation rules for the GP2 segment
 */
export const gp2Schema = z.object({
  "1": fields.GP2_1.optional(),
  "2": fields.GP2_2.optional(),
  "3": fields.GP2_3.optional(),
  "4": fields.GP2_4.optional(),
  "5": fields.GP2_5.optional(),
  "6": z.array(fields.GP2_6).optional(),
  "7": fields.GP2_7.optional(),
  "8": z.array(fields.GP2_8).optional(),
  "9": fields.GP2_9.optional(),
  "10": fields.GP2_10.optional(),
  "11": fields.GP2_11.optional(),
  "12": fields.GP2_12.optional(),
  "13": fields.GP2_13.optional(),
  "14": fields.GP2_14.optional()
}).register(hl7v2Metadata, {
  title: "GP2",
  version: "2.8",
  description: "HL7 v2.8 GP2 segment",
  type: "Segment"
});

/**
 * TypeScript type inferred from the GP2 schema
 */
export type GP2 = z.infer<typeof gp2Schema>;

/**
 * Default export for convenience
 */
export default gp2Schema;