import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 QSB_Q16 Message
 * 
 * HL7 v2.5 QSB_Q16 message definition
 * Contains segment definitions and constraints for the QSB_Q16 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * QSB_Q16 message schema
 * Defines the structure and validation rules for the QSB_Q16 message
 */
export const qsb_q16Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "QPD": segments.qpdSchema,
  "RCP": segments.rcpSchema,
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "QSB_Q16",
  version: "2.5",
  description: "HL7 v2.5 QSB_Q16 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the QSB_Q16 schema
 */
export type QSB_Q16 = z.infer<typeof qsb_q16Schema>;

/**
 * Default export for convenience
 */
export default qsb_q16Schema;