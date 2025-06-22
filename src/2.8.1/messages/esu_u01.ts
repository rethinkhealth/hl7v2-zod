import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 ESU_U01 Message
 * 
 * HL7 v2.8 ESU_U01 message definition
 * Contains segment definitions and constraints for the ESU_U01 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * ESU_U01 message schema
 * Defines the structure and validation rules for the ESU_U01 message
 */
export const esu_u01Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EQU": segments.equSchema,
  "ISD": z.array(segments.isdSchema).optional()
}).register(hl7v2Metadata, {
  title: "ESU_U01",
  version: "2.8",
  description: "HL7 v2.8 ESU_U01 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ESU_U01 schema
 */
export type ESU_U01 = z.infer<typeof esu_u01Schema>;

/**
 * Default export for convenience
 */
export default esu_u01Schema;