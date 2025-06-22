import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ORA_R41 Message
 * 
 * HL7 v2.9 ORA_R41 message definition
 * Contains segment definitions and constraints for the ORA_R41 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * ORA_R41 message schema
 * Defines the structure and validation rules for the ORA_R41 message
 */
export const ora_r41Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORA_R41",
  version: "2.9",
  description: "HL7 v2.9 ORA_R41 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORA_R41 schema
 */
export type ORA_R41 = z.infer<typeof ora_r41Schema>;

/**
 * Default export for convenience
 */
export default ora_r41Schema;