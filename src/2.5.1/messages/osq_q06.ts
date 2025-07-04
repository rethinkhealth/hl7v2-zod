import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 OSQ_Q06 Message
 * 
 * HL7 v2.5 OSQ_Q06 message definition
 * Contains segment definitions and constraints for the OSQ_Q06 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * OSQ_Q06 message schema
 * Defines the structure and validation rules for the OSQ_Q06 message
 */
export const osq_q06Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "QRD": segments.qrdSchema,
  "QRF": segments.qrfSchema.optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "OSQ_Q06",
  version: "2.5",
  description: "HL7 v2.5 OSQ_Q06 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OSQ_Q06 schema
 */
export type OSQ_Q06 = z.infer<typeof osq_q06Schema>;

/**
 * Default export for convenience
 */
export default osq_q06Schema;