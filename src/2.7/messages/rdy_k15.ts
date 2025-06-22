import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 RDY_K15 Message
 * 
 * HL7 v2.7 RDY_K15 message definition
 * Contains segment definitions and constraints for the RDY_K15 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * RDY_K15 message schema
 * Defines the structure and validation rules for the RDY_K15 message
 */
export const rdy_k15Schema = z.object({
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
  title: "RDY_K15",
  version: "2.7",
  description: "HL7 v2.7 RDY_K15 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RDY_K15 schema
 */
export type RDY_K15 = z.infer<typeof rdy_k15Schema>;

/**
 * Default export for convenience
 */
export default rdy_k15Schema;