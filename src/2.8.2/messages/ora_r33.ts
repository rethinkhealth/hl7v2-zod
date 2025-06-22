import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 ORA_R33 Message
 * 
 * HL7 v2.8 ORA_R33 message definition
 * Contains segment definitions and constraints for the ORA_R33 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * ORA_R33 message schema
 * Defines the structure and validation rules for the ORA_R33 message
 */
export const ora_r33Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "ORC": segments.orcSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORA_R33",
  version: "2.8",
  description: "HL7 v2.8 ORA_R33 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORA_R33 schema
 */
export type ORA_R33 = z.infer<typeof ora_r33Schema>;

/**
 * Default export for convenience
 */
export default ora_r33Schema;