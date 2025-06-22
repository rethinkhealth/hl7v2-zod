import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 MFN_M19 Message
 * 
 * HL7 v2.9 MFN_M19 message definition
 * Contains segment definitions and constraints for the MFN_M19 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M19.PACKAGING group schema
 * Defines the structure and validation rules for the MFN_M19.PACKAGING group
 */
export const mfnM19PackagingSchema = z.object({
  "PKG": segments.pkgSchema
}).register(hl7v2Metadata, {
  title: "MFN_M19.PACKAGING",
  version: "2.9",
  description: "HL7 v2.9 MFN_M19.PACKAGING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M19.PACKAGING schema
 */
export type MFN_M19_PACKAGING = z.infer<typeof mfnM19PackagingSchema>;

/**
 * MFN_M19.PURCHASING_VENDOR group schema
 * Defines the structure and validation rules for the MFN_M19.PURCHASING_VENDOR group
 */
export const mfnM19PurchasingVendorSchema = z.object({
  "VND": segments.vndSchema,
  "PACKAGING": z.array(mfnM19PackagingSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M19.PURCHASING_VENDOR",
  version: "2.9",
  description: "HL7 v2.9 MFN_M19.PURCHASING_VENDOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M19.PURCHASING_VENDOR schema
 */
export type MFN_M19_PURCHASING_VENDOR = z.infer<typeof mfnM19PurchasingVendorSchema>;

/**
 * MFN_M19.MATERIAL_ITEM_RECORD group schema
 * Defines the structure and validation rules for the MFN_M19.MATERIAL_ITEM_RECORD group
 */
export const mfnM19MaterialItemRecordSchema = z.object({
  "ITM": segments.itmSchema,
  "PURCHASING_VENDOR": z.array(mfnM19PurchasingVendorSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M19.MATERIAL_ITEM_RECORD",
  version: "2.9",
  description: "HL7 v2.9 MFN_M19.MATERIAL_ITEM_RECORD group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M19.MATERIAL_ITEM_RECORD schema
 */
export type MFN_M19_MATERIAL_ITEM_RECORD = z.infer<typeof mfnM19MaterialItemRecordSchema>;

/**
 * MFN_M19.CONTRACT_RECORD group schema
 * Defines the structure and validation rules for the MFN_M19.CONTRACT_RECORD group
 */
export const mfnM19ContractRecordSchema = z.object({
  "MFE": segments.mfeSchema,
  "CTR": segments.ctrSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "MATERIAL_ITEM_RECORD": z.array(mfnM19MaterialItemRecordSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M19.CONTRACT_RECORD",
  version: "2.9",
  description: "HL7 v2.9 MFN_M19.CONTRACT_RECORD group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M19.CONTRACT_RECORD schema
 */
export type MFN_M19_CONTRACT_RECORD = z.infer<typeof mfnM19ContractRecordSchema>;

/**
 * MFN_M19 message schema
 * Defines the structure and validation rules for the MFN_M19 message
 */
export const mfn_m19Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MFI": segments.mfiSchema,
  "CONTRACT_RECORD": z.array(mfnM19ContractRecordSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M19",
  version: "2.9",
  description: "HL7 v2.9 MFN_M19 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M19 schema
 */
export type MFN_M19 = z.infer<typeof mfn_m19Schema>;

/**
 * Default export for convenience
 */
export default mfn_m19Schema;