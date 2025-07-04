import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 QRY_R02 Message
 * 
 * HL7 v2.5 QRY_R02 message definition
 * Contains segment definitions and constraints for the QRY_R02 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * QRY_R02 message schema
 * Defines the structure and validation rules for the QRY_R02 message
 */
export const qry_r02Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "QRD": segments.qrdSchema,
  "QRF": segments.qrfSchema
}).register(hl7v2Metadata, {
  title: "QRY_R02",
  version: "2.5",
  description: "HL7 v2.5 QRY_R02 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the QRY_R02 schema
 */
export type QRY_R02 = z.infer<typeof qry_r02Schema>;

/**
 * Default export for convenience
 */
export default qry_r02Schema;