import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 QRY_Q01 Message
 * 
 * HL7 v2.6 QRY_Q01 message definition
 * Contains segment definitions and constraints for the QRY_Q01 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * QRY_Q01 message schema
 * Defines the structure and validation rules for the QRY_Q01 message
 */
export const qry_q01Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "QRD": segments.qrdSchema,
  "QRF": segments.qrfSchema.optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "QRY_Q01",
  version: "2.6",
  description: "HL7 v2.6 QRY_Q01 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the QRY_Q01 schema
 */
export type QRY_Q01 = z.infer<typeof qry_q01Schema>;

/**
 * Default export for convenience
 */
export default qry_q01Schema;