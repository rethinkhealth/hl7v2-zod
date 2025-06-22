import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 EHC_E02 Message
 * 
 * HL7 v2.9 EHC_E02 message definition
 * Contains segment definitions and constraints for the EHC_E02 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E02.PSG group schema
 * Defines the structure and validation rules for the EHC_E02.PSG group
 */
export const ehcE02PsgSchema = z.object({
  "PSG": segments.psgSchema,
  "PSL": z.array(segments.pslSchema).optional()
}).register(hl7v2Metadata, {
  title: "EHC_E02.PSG",
  version: "2.9",
  description: "HL7 v2.9 EHC_E02.PSG group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E02.PSG schema
 */
export type EHC_E02_PSG = z.infer<typeof ehcE02PsgSchema>;

/**
 * EHC_E02.PRODUCT_SERVICE_SECTION group schema
 * Defines the structure and validation rules for the EHC_E02.PRODUCT_SERVICE_SECTION group
 */
export const ehcE02ProductServiceSectionSchema = z.object({
  "PSS": segments.pssSchema,
  "PSG": z.array(ehcE02PsgSchema).optional()
}).register(hl7v2Metadata, {
  title: "EHC_E02.PRODUCT_SERVICE_SECTION",
  version: "2.9",
  description: "HL7 v2.9 EHC_E02.PRODUCT_SERVICE_SECTION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E02.PRODUCT_SERVICE_SECTION schema
 */
export type EHC_E02_PRODUCT_SERVICE_SECTION = z.infer<typeof ehcE02ProductServiceSectionSchema>;

/**
 * EHC_E02.INVOICE_INFORMATION_CANCEL group schema
 * Defines the structure and validation rules for the EHC_E02.INVOICE_INFORMATION_CANCEL group
 */
export const ehcE02InvoiceInformationCancelSchema = z.object({
  "IVC": segments.ivcSchema,
  "PYE": segments.pyeSchema,
  "CTD": z.array(segments.ctdSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PRODUCT_SERVICE_SECTION": z.array(ehcE02ProductServiceSectionSchema).optional()
}).register(hl7v2Metadata, {
  title: "EHC_E02.INVOICE_INFORMATION_CANCEL",
  version: "2.9",
  description: "HL7 v2.9 EHC_E02.INVOICE_INFORMATION_CANCEL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E02.INVOICE_INFORMATION_CANCEL schema
 */
export type EHC_E02_INVOICE_INFORMATION_CANCEL = z.infer<typeof ehcE02InvoiceInformationCancelSchema>;

/**
 * EHC_E02 message schema
 * Defines the structure and validation rules for the EHC_E02 message
 */
export const ehc_e02Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": z.array(segments.uacSchema).optional(),
  "INVOICE_INFORMATION_CANCEL": ehcE02InvoiceInformationCancelSchema
}).register(hl7v2Metadata, {
  title: "EHC_E02",
  version: "2.9",
  description: "HL7 v2.9 EHC_E02 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the EHC_E02 schema
 */
export type EHC_E02 = z.infer<typeof ehc_e02Schema>;

/**
 * Default export for convenience
 */
export default ehc_e02Schema;