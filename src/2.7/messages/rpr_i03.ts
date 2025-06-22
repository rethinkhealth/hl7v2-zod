import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 RPR_I03 Message
 * 
 * HL7 v2.7 RPR_I03 message definition
 * Contains segment definitions and constraints for the RPR_I03 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RPR_I03.PROVIDER group schema
 * Defines the structure and validation rules for the RPR_I03.PROVIDER group
 */
export const rprI03ProviderSchema = z.object({
  "PRD": segments.prdSchema,
  "CTD": z.array(segments.ctdSchema).optional()
}).register(hl7v2Metadata, {
  title: "RPR_I03.PROVIDER",
  version: "2.7",
  description: "HL7 v2.7 RPR_I03.PROVIDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RPR_I03.PROVIDER schema
 */
export type RPR_I03_PROVIDER = z.infer<typeof rprI03ProviderSchema>;

/**
 * RPR_I03 message schema
 * Defines the structure and validation rules for the RPR_I03 message
 */
export const rpr_i03Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "PROVIDER": z.array(rprI03ProviderSchema),
  "PID": z.array(segments.pidSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RPR_I03",
  version: "2.7",
  description: "HL7 v2.7 RPR_I03 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RPR_I03 schema
 */
export type RPR_I03 = z.infer<typeof rpr_i03Schema>;

/**
 * Default export for convenience
 */
export default rpr_i03Schema;