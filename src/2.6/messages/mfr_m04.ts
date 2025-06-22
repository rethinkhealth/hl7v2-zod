import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 MFR_M04 Message
 * 
 * HL7 v2.6 MFR_M04 message definition
 * Contains segment definitions and constraints for the MFR_M04 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFR_M04.MF_QUERY group schema
 * Defines the structure and validation rules for the MFR_M04.MF_QUERY group
 */
export const mfrM04MfQuerySchema = z.object({
  "MFE": segments.mfeSchema,
  "CDM": segments.cdmSchema,
  "PRC": z.array(segments.prcSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFR_M04.MF_QUERY",
  version: "2.6",
  description: "HL7 v2.6 MFR_M04.MF_QUERY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFR_M04.MF_QUERY schema
 */
export type MFR_M04_MF_QUERY = z.infer<typeof mfrM04MfQuerySchema>;

/**
 * MFR_M04 message schema
 * Defines the structure and validation rules for the MFR_M04 message
 */
export const mfr_m04Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "QAK": segments.qakSchema.optional(),
  "QRD": segments.qrdSchema,
  "QRF": segments.qrfSchema.optional(),
  "MFI": segments.mfiSchema,
  "MF_QUERY": z.array(mfrM04MfQuerySchema),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "MFR_M04",
  version: "2.6",
  description: "HL7 v2.6 MFR_M04 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFR_M04 schema
 */
export type MFR_M04 = z.infer<typeof mfr_m04Schema>;

/**
 * Default export for convenience
 */
export default mfr_m04Schema;