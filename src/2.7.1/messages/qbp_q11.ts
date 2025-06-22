import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 QBP_Q11 Message
 * 
 * HL7 v2.7 QBP_Q11 message definition
 * Contains segment definitions and constraints for the QBP_Q11 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * QBP_Q11 message schema
 * Defines the structure and validation rules for the QBP_Q11 message
 */
export const qbp_q11Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "QPD": segments.qpdSchema,
  "RCP": segments.rcpSchema,
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "QBP_Q11",
  version: "2.7",
  description: "HL7 v2.7 QBP_Q11 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the QBP_Q11 schema
 */
export type QBP_Q11 = z.infer<typeof qbp_q11Schema>;

/**
 * Default export for convenience
 */
export default qbp_q11Schema;