import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 RPL_I02 Message
 * 
 * HL7 v2.9 RPL_I02 message definition
 * Contains segment definitions and constraints for the RPL_I02 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RPL_I02.PROVIDER group schema
 * Defines the structure and validation rules for the RPL_I02.PROVIDER group
 */
export const rplI02ProviderSchema = z.object({
  "PRD": segments.prdSchema,
  "CTD": z.array(segments.ctdSchema).optional()
}).register(hl7v2Metadata, {
  title: "RPL_I02.PROVIDER",
  version: "2.9",
  description: "HL7 v2.9 RPL_I02.PROVIDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RPL_I02.PROVIDER schema
 */
export type RPL_I02_PROVIDER = z.infer<typeof rplI02ProviderSchema>;

/**
 * RPL_I02 message schema
 * Defines the structure and validation rules for the RPL_I02 message
 */
export const rpl_i02Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "PROVIDER": z.array(rplI02ProviderSchema),
  "NTE": z.array(segments.nteSchema).optional(),
  "DSP": z.array(segments.dspSchema).optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RPL_I02",
  version: "2.9",
  description: "HL7 v2.9 RPL_I02 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RPL_I02 schema
 */
export type RPL_I02 = z.infer<typeof rpl_i02Schema>;

/**
 * Default export for convenience
 */
export default rpl_i02Schema;