import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 EAN_U09 Message
 * 
 * HL7 v2.9 EAN_U09 message definition
 * Contains segment definitions and constraints for the EAN_U09 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EAN_U09.NOTIFICATION group schema
 * Defines the structure and validation rules for the EAN_U09.NOTIFICATION group
 */
export const eanU09NotificationSchema = z.object({
  "NDS": segments.ndsSchema,
  "NTE": segments.nteSchema.optional()
}).register(hl7v2Metadata, {
  title: "EAN_U09.NOTIFICATION",
  version: "2.9",
  description: "HL7 v2.9 EAN_U09.NOTIFICATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EAN_U09.NOTIFICATION schema
 */
export type EAN_U09_NOTIFICATION = z.infer<typeof eanU09NotificationSchema>;

/**
 * EAN_U09 message schema
 * Defines the structure and validation rules for the EAN_U09 message
 */
export const ean_u09Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EQU": segments.equSchema,
  "NOTIFICATION": z.array(eanU09NotificationSchema),
  "ROL": segments.rolSchema.optional()
}).register(hl7v2Metadata, {
  title: "EAN_U09",
  version: "2.9",
  description: "HL7 v2.9 EAN_U09 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the EAN_U09 schema
 */
export type EAN_U09 = z.infer<typeof ean_u09Schema>;

/**
 * Default export for convenience
 */
export default ean_u09Schema;