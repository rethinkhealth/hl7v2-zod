import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 EHC_E15 Message
 *
 * HL7 v2.6 EHC_E15 message definition
 * Contains segment definitions and constraints for the EHC_E15 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E15.PAYMENT_REMITTANCE_HEADER_INFO group schema
 * Defines the structure and validation rules for the EHC_E15.PAYMENT_REMITTANCE_HEADER_INFO group
 */
export const ehcE15PaymentRemittanceHeaderInfoSchema = z
  .object({
    PMT: segments.pmtSchema,
    PYE: segments.pyeSchema,
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E15.PAYMENT_REMITTANCE_HEADER_INFO',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E15.PAYMENT_REMITTANCE_HEADER_INFO group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the EHC_E15.PAYMENT_REMITTANCE_HEADER_INFO schema
 */
export type EHC_E15_PAYMENT_REMITTANCE_HEADER_INFO = z.infer<
  typeof ehcE15PaymentRemittanceHeaderInfoSchema
>;

/**
 * EHC_E15.PSL_ITEM_INFO group schema
 * Defines the structure and validation rules for the EHC_E15.PSL_ITEM_INFO group
 */
export const ehcE15PslItemInfoSchema = z
  .object({
    PSL: segments.pslSchema,
    ADJ: z.array(segments.adjSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E15.PSL_ITEM_INFO',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E15.PSL_ITEM_INFO group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the EHC_E15.PSL_ITEM_INFO schema
 */
export type EHC_E15_PSL_ITEM_INFO = z.infer<typeof ehcE15PslItemInfoSchema>;

/**
 * EHC_E15.ADJUSTMENT_PAYEE group schema
 * Defines the structure and validation rules for the EHC_E15.ADJUSTMENT_PAYEE group
 */
export const ehcE15AdjustmentPayeeSchema = z
  .object({
    ADJ: segments.adjSchema,
    ROL: segments.rolSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E15.ADJUSTMENT_PAYEE',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E15.ADJUSTMENT_PAYEE group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the EHC_E15.ADJUSTMENT_PAYEE schema
 */
export type EHC_E15_ADJUSTMENT_PAYEE = z.infer<typeof ehcE15AdjustmentPayeeSchema>;

/**
 * EHC_E15.PRODUCT_SERVICE_GROUP group schema
 * Defines the structure and validation rules for the EHC_E15.PRODUCT_SERVICE_GROUP group
 */
export const ehcE15ProductServiceGroupSchema = z
  .object({
    PSG: segments.psgSchema,
    PSL_ITEM_INFO: z.array(ehcE15PslItemInfoSchema),
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E15.PRODUCT_SERVICE_GROUP',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E15.PRODUCT_SERVICE_GROUP group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the EHC_E15.PRODUCT_SERVICE_GROUP schema
 */
export type EHC_E15_PRODUCT_SERVICE_GROUP = z.infer<typeof ehcE15ProductServiceGroupSchema>;

/**
 * EHC_E15.PRODUCT_SERVICE_SECTION group schema
 * Defines the structure and validation rules for the EHC_E15.PRODUCT_SERVICE_SECTION group
 */
export const ehcE15ProductServiceSectionSchema = z
  .object({
    PSS: segments.pssSchema,
    PRODUCT_SERVICE_GROUP: z.array(ehcE15ProductServiceGroupSchema),
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E15.PRODUCT_SERVICE_SECTION',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E15.PRODUCT_SERVICE_SECTION group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the EHC_E15.PRODUCT_SERVICE_SECTION schema
 */
export type EHC_E15_PRODUCT_SERVICE_SECTION = z.infer<typeof ehcE15ProductServiceSectionSchema>;

/**
 * EHC_E15.PAYMENT_REMITTANCE_DETAIL_INFO group schema
 * Defines the structure and validation rules for the EHC_E15.PAYMENT_REMITTANCE_DETAIL_INFO group
 */
export const ehcE15PaymentRemittanceDetailInfoSchema = z
  .object({
    IPR: segments.iprSchema,
    IVC: segments.ivcSchema,
    PRODUCT_SERVICE_SECTION: z.array(ehcE15ProductServiceSectionSchema),
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E15.PAYMENT_REMITTANCE_DETAIL_INFO',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E15.PAYMENT_REMITTANCE_DETAIL_INFO group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the EHC_E15.PAYMENT_REMITTANCE_DETAIL_INFO schema
 */
export type EHC_E15_PAYMENT_REMITTANCE_DETAIL_INFO = z.infer<
  typeof ehcE15PaymentRemittanceDetailInfoSchema
>;

/**
 * EHC_E15 message schema
 * Defines the structure and validation rules for the EHC_E15 message
 */
export const ehc_e15Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: z.array(segments.uacSchema).optional(),
    PAYMENT_REMITTANCE_HEADER_INFO: ehcE15PaymentRemittanceHeaderInfoSchema,
    PAYMENT_REMITTANCE_DETAIL_INFO: z.array(ehcE15PaymentRemittanceDetailInfoSchema).optional(),
    ADJUSTMENT_PAYEE: z.array(ehcE15AdjustmentPayeeSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E15',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E15 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the EHC_E15 schema
 */
export type EHC_E15 = z.infer<typeof ehc_e15Schema>;

/**
 * Default export for convenience
 */
export default ehc_e15Schema;
