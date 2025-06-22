import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 MFN_M04 Message
 * 
 * HL7 v2.7 MFN_M04 message definition
 * Contains segment definitions and constraints for the MFN_M04 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M04.MF_CDM group schema
 * Defines the structure and validation rules for the MFN_M04.MF_CDM group
 */
export const mfnM04MfCdmSchema = z.object({
  "MFE": segments.mfeSchema,
  "CDM": segments.cdmSchema,
  "PRC": z.array(segments.prcSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M04.MF_CDM",
  version: "2.7",
  description: "HL7 v2.7 MFN_M04.MF_CDM group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M04.MF_CDM schema
 */
export type MFN_M04_MF_CDM = z.infer<typeof mfnM04MfCdmSchema>;

/**
 * MFN_M04 message schema
 * Defines the structure and validation rules for the MFN_M04 message
 */
export const mfn_m04Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MFI": segments.mfiSchema,
  "MF_CDM": z.array(mfnM04MfCdmSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M04",
  version: "2.7",
  description: "HL7 v2.7 MFN_M04 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M04 schema
 */
export type MFN_M04 = z.infer<typeof mfn_m04Schema>;

/**
 * Default export for convenience
 */
export default mfn_m04Schema;