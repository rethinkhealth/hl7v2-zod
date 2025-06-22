import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 EHC_E04 Message
 *
 * HL7 v2.6 EHC_E04 message definition
 * Contains segment definitions and constraints for the EHC_E04 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E04.PRODUCT_SERVICE_GROUP group schema
 * Defines the structure and validation rules for the EHC_E04.PRODUCT_SERVICE_GROUP group
 */
export const ehcE04ProductServiceGroupSchema = z
  .object({
    PSG: segments.psgSchema,
    PSL: z.array(segments.pslSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E04.PRODUCT_SERVICE_GROUP',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E04.PRODUCT_SERVICE_GROUP group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the EHC_E04.PRODUCT_SERVICE_GROUP schema
 */
export type EHC_E04_PRODUCT_SERVICE_GROUP = z.infer<typeof ehcE04ProductServiceGroupSchema>;

/**
 * EHC_E04.PRODUCT_SERVICE_SECTION group schema
 * Defines the structure and validation rules for the EHC_E04.PRODUCT_SERVICE_SECTION group
 */
export const ehcE04ProductServiceSectionSchema = z
  .object({
    PSS: segments.pssSchema,
    PRODUCT_SERVICE_GROUP: z.array(ehcE04ProductServiceGroupSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E04.PRODUCT_SERVICE_SECTION',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E04.PRODUCT_SERVICE_SECTION group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the EHC_E04.PRODUCT_SERVICE_SECTION schema
 */
export type EHC_E04_PRODUCT_SERVICE_SECTION = z.infer<typeof ehcE04ProductServiceSectionSchema>;

/**
 * EHC_E04.REASSESSMENT_REQUEST_INFO group schema
 * Defines the structure and validation rules for the EHC_E04.REASSESSMENT_REQUEST_INFO group
 */
export const ehcE04ReassessmentRequestInfoSchema = z
  .object({
    IVC: segments.ivcSchema,
    NTE: z.array(segments.nteSchema).optional(),
    PRODUCT_SERVICE_SECTION: z.array(ehcE04ProductServiceSectionSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E04.REASSESSMENT_REQUEST_INFO',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E04.REASSESSMENT_REQUEST_INFO group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the EHC_E04.REASSESSMENT_REQUEST_INFO schema
 */
export type EHC_E04_REASSESSMENT_REQUEST_INFO = z.infer<typeof ehcE04ReassessmentRequestInfoSchema>;

/**
 * EHC_E04 message schema
 * Defines the structure and validation rules for the EHC_E04 message
 */
export const ehc_e04Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: z.array(segments.uacSchema).optional(),
    REASSESSMENT_REQUEST_INFO: ehcE04ReassessmentRequestInfoSchema,
  })
  .register(hl7v2Metadata, {
    title: 'EHC_E04',
    version: '2.6',
    description: 'HL7 v2.6 EHC_E04 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the EHC_E04 schema
 */
export type EHC_E04 = z.infer<typeof ehc_e04Schema>;

/**
 * Default export for convenience
 */
export default ehc_e04Schema;
