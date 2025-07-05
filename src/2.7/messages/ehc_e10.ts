import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 EHC_E10 Message
 *
 * HL7 v2.7 EHC_E10 message definition
 * Contains segment definitions and constraints for the EHC_E10 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E10.PRODUCT_SERVICE_LINE_INFO group schema
 * Defines the structure and validation rules for the EHC_E10.PRODUCT_SERVICE_LINE_INFO group
 */
export const ehcE10ProductServiceLineInfoSchema = z
  .object({
    PSL: segments.pslSchema,
    ADJ: z.array(segments.adjSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "EHC_E10.PRODUCT_SERVICE_LINE_INFO",
    version: "2.7",
    description: "HL7 v2.7 EHC_E10.PRODUCT_SERVICE_LINE_INFO group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E10.PRODUCT_SERVICE_LINE_INFO schema
 */
export type EHC_E10_PRODUCT_SERVICE_LINE_INFO = z.infer<typeof ehcE10ProductServiceLineInfoSchema>;

/**
 * EHC_E10.PRODUCT_SERVICE_GROUP group schema
 * Defines the structure and validation rules for the EHC_E10.PRODUCT_SERVICE_GROUP group
 */
export const ehcE10ProductServiceGroupSchema = z
  .object({
    PSG: segments.psgSchema,
    PRODUCT_SERVICE_LINE_INFO: z.array(ehcE10ProductServiceLineInfoSchema)
  })
  .register(hl7v2Metadata, {
    title: "EHC_E10.PRODUCT_SERVICE_GROUP",
    version: "2.7",
    description: "HL7 v2.7 EHC_E10.PRODUCT_SERVICE_GROUP group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E10.PRODUCT_SERVICE_GROUP schema
 */
export type EHC_E10_PRODUCT_SERVICE_GROUP = z.infer<typeof ehcE10ProductServiceGroupSchema>;

/**
 * EHC_E10.PRODUCT_SERVICE_SECTION group schema
 * Defines the structure and validation rules for the EHC_E10.PRODUCT_SERVICE_SECTION group
 */
export const ehcE10ProductServiceSectionSchema = z
  .object({
    PSS: segments.pssSchema,
    PRODUCT_SERVICE_GROUP: z.array(ehcE10ProductServiceGroupSchema)
  })
  .register(hl7v2Metadata, {
    title: "EHC_E10.PRODUCT_SERVICE_SECTION",
    version: "2.7",
    description: "HL7 v2.7 EHC_E10.PRODUCT_SERVICE_SECTION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E10.PRODUCT_SERVICE_SECTION schema
 */
export type EHC_E10_PRODUCT_SERVICE_SECTION = z.infer<typeof ehcE10ProductServiceSectionSchema>;

/**
 * EHC_E10.INVOICE_PROCESSING_RESULTS_INFO group schema
 * Defines the structure and validation rules for the EHC_E10.INVOICE_PROCESSING_RESULTS_INFO group
 */
export const ehcE10InvoiceProcessingResultsInfoSchema = z
  .object({
    IPR: segments.iprSchema,
    NTE: z.array(segments.nteSchema).optional(),
    PYE: segments.pyeSchema,
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IVC: segments.ivcSchema,
    PRODUCT_SERVICE_SECTION: z.array(ehcE10ProductServiceSectionSchema)
  })
  .register(hl7v2Metadata, {
    title: "EHC_E10.INVOICE_PROCESSING_RESULTS_INFO",
    version: "2.7",
    description: "HL7 v2.7 EHC_E10.INVOICE_PROCESSING_RESULTS_INFO group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E10.INVOICE_PROCESSING_RESULTS_INFO schema
 */
export type EHC_E10_INVOICE_PROCESSING_RESULTS_INFO = z.infer<
  typeof ehcE10InvoiceProcessingResultsInfoSchema
>;

/**
 * EHC_E10 message schema
 * Defines the structure and validation rules for the EHC_E10 message
 */
export const ehc_e10Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: z.array(segments.uacSchema).optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    INVOICE_PROCESSING_RESULTS_INFO: z.array(ehcE10InvoiceProcessingResultsInfoSchema)
  })
  .register(hl7v2Metadata, {
    title: "EHC_E10",
    version: "2.7",
    description: "HL7 v2.7 EHC_E10 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the EHC_E10 schema
 */
export type EHC_E10 = z.infer<typeof ehc_e10Schema>;

/**
 * Default export for convenience
 */
export default ehc_e10Schema;
