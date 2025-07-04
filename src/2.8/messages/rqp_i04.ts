import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 RQP_I04 Message
 * 
 * HL7 v2.8 RQP_I04 message definition
 * Contains segment definitions and constraints for the RQP_I04 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RQP_I04.PROVIDER group schema
 * Defines the structure and validation rules for the RQP_I04.PROVIDER group
 */
export const rqpI04ProviderSchema = z.object({
  "PRD": segments.prdSchema,
  "CTD": z.array(segments.ctdSchema).optional()
}).register(hl7v2Metadata, {
  title: "RQP_I04.PROVIDER",
  version: "2.8",
  description: "HL7 v2.8 RQP_I04.PROVIDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RQP_I04.PROVIDER schema
 */
export type RQP_I04_PROVIDER = z.infer<typeof rqpI04ProviderSchema>;

/**
 * RQP_I04 message schema
 * Defines the structure and validation rules for the RQP_I04 message
 */
export const rqp_i04Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "PROVIDER": z.array(rqpI04ProviderSchema),
  "PID": segments.pidSchema,
  "NK1": z.array(segments.nk1Schema).optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RQP_I04",
  version: "2.8",
  description: "HL7 v2.8 RQP_I04 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RQP_I04 schema
 */
export type RQP_I04 = z.infer<typeof rqp_i04Schema>;

/**
 * Default export for convenience
 */
export default rqp_i04Schema;