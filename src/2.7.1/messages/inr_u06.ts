import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 INR_U06 Message
 * 
 * HL7 v2.7 INR_U06 message definition
 * Contains segment definitions and constraints for the INR_U06 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * INR_U06 message schema
 * Defines the structure and validation rules for the INR_U06 message
 */
export const inr_u06Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EQU": segments.equSchema,
  "INV": z.array(segments.invSchema),
  "ROL": segments.rolSchema.optional()
}).register(hl7v2Metadata, {
  title: "INR_U06",
  version: "2.7",
  description: "HL7 v2.7 INR_U06 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the INR_U06 schema
 */
export type INR_U06 = z.infer<typeof inr_u06Schema>;

/**
 * Default export for convenience
 */
export default inr_u06Schema;