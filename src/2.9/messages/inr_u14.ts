import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 INR_U14 Message
 * 
 * HL7 v2.9 INR_U14 message definition
 * Contains segment definitions and constraints for the INR_U14 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * INR_U14 message schema
 * Defines the structure and validation rules for the INR_U14 message
 */
export const inr_u14Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EQU": segments.equSchema,
  "INV": z.array(segments.invSchema).optional()
}).register(hl7v2Metadata, {
  title: "INR_U14",
  version: "2.9",
  description: "HL7 v2.9 INR_U14 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the INR_U14 schema
 */
export type INR_U14 = z.infer<typeof inr_u14Schema>;

/**
 * Default export for convenience
 */
export default inr_u14Schema;