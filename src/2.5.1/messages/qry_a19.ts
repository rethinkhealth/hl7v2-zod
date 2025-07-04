import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 QRY_A19 Message
 * 
 * HL7 v2.5 QRY_A19 message definition
 * Contains segment definitions and constraints for the QRY_A19 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * QRY_A19 message schema
 * Defines the structure and validation rules for the QRY_A19 message
 */
export const qry_a19Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "QRD": segments.qrdSchema,
  "QRF": segments.qrfSchema.optional()
}).register(hl7v2Metadata, {
  title: "QRY_A19",
  version: "2.5",
  description: "HL7 v2.5 QRY_A19 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the QRY_A19 schema
 */
export type QRY_A19 = z.infer<typeof qry_a19Schema>;

/**
 * Default export for convenience
 */
export default qry_a19Schema;