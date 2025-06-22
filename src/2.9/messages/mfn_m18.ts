import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 MFN_M18 Message
 * 
 * HL7 v2.9 MFN_M18 message definition
 * Contains segment definitions and constraints for the MFN_M18 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M18.PAYER_MF_COVERAGE group schema
 * Defines the structure and validation rules for the MFN_M18.PAYER_MF_COVERAGE group
 */
export const mfnM18PayerMfCoverageSchema = z.object({
  "MCP": segments.mcpSchema,
  "DPS": z.array(segments.dpsSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M18.PAYER_MF_COVERAGE",
  version: "2.9",
  description: "HL7 v2.9 MFN_M18.PAYER_MF_COVERAGE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M18.PAYER_MF_COVERAGE schema
 */
export type MFN_M18_PAYER_MF_COVERAGE = z.infer<typeof mfnM18PayerMfCoverageSchema>;

/**
 * MFN_M18.PAYER_MF_ENTRY group schema
 * Defines the structure and validation rules for the MFN_M18.PAYER_MF_ENTRY group
 */
export const mfnM18PayerMfEntrySchema = z.object({
  "PM1": segments.pm1Schema,
  "PAYER_MF_COVERAGE": z.array(mfnM18PayerMfCoverageSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M18.PAYER_MF_ENTRY",
  version: "2.9",
  description: "HL7 v2.9 MFN_M18.PAYER_MF_ENTRY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M18.PAYER_MF_ENTRY schema
 */
export type MFN_M18_PAYER_MF_ENTRY = z.infer<typeof mfnM18PayerMfEntrySchema>;

/**
 * MFN_M18.MF_PAYER group schema
 * Defines the structure and validation rules for the MFN_M18.MF_PAYER group
 */
export const mfnM18MfPayerSchema = z.object({
  "MFE": segments.mfeSchema,
  "PAYER_MF_ENTRY": z.array(mfnM18PayerMfEntrySchema)
}).register(hl7v2Metadata, {
  title: "MFN_M18.MF_PAYER",
  version: "2.9",
  description: "HL7 v2.9 MFN_M18.MF_PAYER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M18.MF_PAYER schema
 */
export type MFN_M18_MF_PAYER = z.infer<typeof mfnM18MfPayerSchema>;

/**
 * MFN_M18 message schema
 * Defines the structure and validation rules for the MFN_M18 message
 */
export const mfn_m18Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MFI": segments.mfiSchema,
  "MF_PAYER": z.array(mfnM18MfPayerSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M18",
  version: "2.9",
  description: "HL7 v2.9 MFN_M18 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M18 schema
 */
export type MFN_M18 = z.infer<typeof mfn_m18Schema>;

/**
 * Default export for convenience
 */
export default mfn_m18Schema;