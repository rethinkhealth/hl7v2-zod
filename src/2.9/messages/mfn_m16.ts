import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 MFN_M16 Message
 * 
 * HL7 v2.9 MFN_M16 message definition
 * Contains segment definitions and constraints for the MFN_M16 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M16.STERILIZATION group schema
 * Defines the structure and validation rules for the MFN_M16.STERILIZATION group
 */
export const mfnM16SterilizationSchema = z.object({
  "STZ": segments.stzSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M16.STERILIZATION",
  version: "2.9",
  description: "HL7 v2.9 MFN_M16.STERILIZATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M16.STERILIZATION schema
 */
export type MFN_M16_STERILIZATION = z.infer<typeof mfnM16SterilizationSchema>;

/**
 * MFN_M16.PACKAGING group schema
 * Defines the structure and validation rules for the MFN_M16.PACKAGING group
 */
export const mfnM16PackagingSchema = z.object({
  "PKG": segments.pkgSchema,
  "PCE": z.array(segments.pceSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M16.PACKAGING",
  version: "2.9",
  description: "HL7 v2.9 MFN_M16.PACKAGING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M16.PACKAGING schema
 */
export type MFN_M16_PACKAGING = z.infer<typeof mfnM16PackagingSchema>;

/**
 * MFN_M16.MATERIAL_LOCATION group schema
 * Defines the structure and validation rules for the MFN_M16.MATERIAL_LOCATION group
 */
export const mfnM16MaterialLocationSchema = z.object({
  "IVT": segments.ivtSchema,
  "ILT": z.array(segments.iltSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M16.MATERIAL_LOCATION",
  version: "2.9",
  description: "HL7 v2.9 MFN_M16.MATERIAL_LOCATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M16.MATERIAL_LOCATION schema
 */
export type MFN_M16_MATERIAL_LOCATION = z.infer<typeof mfnM16MaterialLocationSchema>;

/**
 * MFN_M16.PURCHASING_VENDOR group schema
 * Defines the structure and validation rules for the MFN_M16.PURCHASING_VENDOR group
 */
export const mfnM16PurchasingVendorSchema = z.object({
  "VND": segments.vndSchema,
  "PACKAGING": z.array(mfnM16PackagingSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M16.PURCHASING_VENDOR",
  version: "2.9",
  description: "HL7 v2.9 MFN_M16.PURCHASING_VENDOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M16.PURCHASING_VENDOR schema
 */
export type MFN_M16_PURCHASING_VENDOR = z.infer<typeof mfnM16PurchasingVendorSchema>;

/**
 * MFN_M16.MATERIAL_ITEM_RECORD group schema
 * Defines the structure and validation rules for the MFN_M16.MATERIAL_ITEM_RECORD group
 */
export const mfnM16MaterialItemRecordSchema = z.object({
  "MFE": segments.mfeSchema,
  "ITM": segments.itmSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "STERILIZATION": z.array(mfnM16SterilizationSchema).optional(),
  "PURCHASING_VENDOR": z.array(mfnM16PurchasingVendorSchema).optional(),
  "MATERIAL_LOCATION": z.array(mfnM16MaterialLocationSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M16.MATERIAL_ITEM_RECORD",
  version: "2.9",
  description: "HL7 v2.9 MFN_M16.MATERIAL_ITEM_RECORD group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M16.MATERIAL_ITEM_RECORD schema
 */
export type MFN_M16_MATERIAL_ITEM_RECORD = z.infer<typeof mfnM16MaterialItemRecordSchema>;

/**
 * MFN_M16 message schema
 * Defines the structure and validation rules for the MFN_M16 message
 */
export const mfn_m16Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MFI": segments.mfiSchema,
  "MATERIAL_ITEM_RECORD": z.array(mfnM16MaterialItemRecordSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M16",
  version: "2.9",
  description: "HL7 v2.9 MFN_M16 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M16 schema
 */
export type MFN_M16 = z.infer<typeof mfn_m16Schema>;

/**
 * Default export for convenience
 */
export default mfn_m16Schema;