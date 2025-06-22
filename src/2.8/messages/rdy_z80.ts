import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 RDY_Z80 Message
 * 
 * HL7 v2.8 RDY_Z80 message definition
 * Contains segment definitions and constraints for the RDY_Z80 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * RDY_Z80 message schema
 * Defines the structure and validation rules for the RDY_Z80 message
 */
export const rdy_z80Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "DSP": z.array(segments.dspSchema).optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RDY_Z80",
  version: "2.8",
  description: "HL7 v2.8 RDY_Z80 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RDY_Z80 schema
 */
export type RDY_Z80 = z.infer<typeof rdy_z80Schema>;

/**
 * Default export for convenience
 */
export default rdy_z80Schema;