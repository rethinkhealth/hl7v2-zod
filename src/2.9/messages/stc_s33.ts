import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 STC_S33 Message
 * 
 * HL7 v2.9 STC_S33 message definition
 * Contains segment definitions and constraints for the STC_S33 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * STC_S33 message schema
 * Defines the structure and validation rules for the STC_S33 message
 */
export const stc_s33Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "SCP": z.array(segments.scpSchema)
}).register(hl7v2Metadata, {
  title: "STC_S33",
  version: "2.9",
  description: "HL7 v2.9 STC_S33 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the STC_S33 schema
 */
export type STC_S33 = z.infer<typeof stc_s33Schema>;

/**
 * Default export for convenience
 */
export default stc_s33Schema;