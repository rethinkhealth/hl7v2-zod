import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 QBP_O33 Message
 * 
 * HL7 v2.8 QBP_O33 message definition
 * Contains segment definitions and constraints for the QBP_O33 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * QBP_O33 message schema
 * Defines the structure and validation rules for the QBP_O33 message
 */
export const qbp_o33Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "QPD": segments.qpdSchema,
  "RCP": segments.rcpSchema
}).register(hl7v2Metadata, {
  title: "QBP_O33",
  version: "2.8",
  description: "HL7 v2.8 QBP_O33 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the QBP_O33 schema
 */
export type QBP_O33 = z.infer<typeof qbp_o33Schema>;

/**
 * Default export for convenience
 */
export default qbp_o33Schema;