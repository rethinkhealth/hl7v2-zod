import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 ESR_U02 Message
 * 
 * HL7 v2.7 ESR_U02 message definition
 * Contains segment definitions and constraints for the ESR_U02 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * ESR_U02 message schema
 * Defines the structure and validation rules for the ESR_U02 message
 */
export const esr_u02Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EQU": segments.equSchema,
  "ROL": segments.rolSchema.optional()
}).register(hl7v2Metadata, {
  title: "ESR_U02",
  version: "2.7",
  description: "HL7 v2.7 ESR_U02 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ESR_U02 schema
 */
export type ESR_U02 = z.infer<typeof esr_u02Schema>;

/**
 * Default export for convenience
 */
export default esr_u02Schema;