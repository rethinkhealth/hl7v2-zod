import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 EHC_E01 Message
 *
 * HL7 v2.7 EHC_E01 message definition
 * Contains segment definitions and constraints for the EHC_E01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E01.INSURANCE group schema
 * Defines the structure and validation rules for the EHC_E01.INSURANCE group
 */
export const ehcE01InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01.INSURANCE",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E01.INSURANCE schema
 */
export type EHC_E01_INSURANCE = z.infer<typeof ehcE01InsuranceSchema>;

/**
 * EHC_E01.DIAGNOSIS group schema
 * Defines the structure and validation rules for the EHC_E01.DIAGNOSIS group
 */
export const ehcE01DiagnosisSchema = z
  .object({
    DG1: segments.dg1Schema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01.DIAGNOSIS",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01.DIAGNOSIS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E01.DIAGNOSIS schema
 */
export type EHC_E01_DIAGNOSIS = z.infer<typeof ehcE01DiagnosisSchema>;

/**
 * EHC_E01.PRODUCT_SERVICE_LINE_ITEM group schema
 * Defines the structure and validation rules for the EHC_E01.PRODUCT_SERVICE_LINE_ITEM group
 */
export const ehcE01ProductServiceLineItemSchema = z
  .object({
    PSL: segments.pslSchema,
    NTE: z.array(segments.nteSchema).optional(),
    ADJ: z.array(segments.adjSchema).optional(),
    AUT: segments.autSchema.optional(),
    LOC: z.array(segments.locSchema).optional(),
    ROL: z.array(segments.rolSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01.PRODUCT_SERVICE_LINE_ITEM",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01.PRODUCT_SERVICE_LINE_ITEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E01.PRODUCT_SERVICE_LINE_ITEM schema
 */
export type EHC_E01_PRODUCT_SERVICE_LINE_ITEM = z.infer<typeof ehcE01ProductServiceLineItemSchema>;

/**
 * EHC_E01.PROCEDURE group schema
 * Defines the structure and validation rules for the EHC_E01.PROCEDURE group
 */
export const ehcE01ProcedureSchema = z
  .object({
    PR1: segments.pr1Schema,
    NTE: z.array(segments.nteSchema).optional(),
    ROL: z.array(segments.rolSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01.PROCEDURE",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01.PROCEDURE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E01.PROCEDURE schema
 */
export type EHC_E01_PROCEDURE = z.infer<typeof ehcE01ProcedureSchema>;

/**
 * EHC_E01.INVOICE_PROCESSING group schema
 * Defines the structure and validation rules for the EHC_E01.INVOICE_PROCESSING group
 */
export const ehcE01InvoiceProcessingSchema = z
  .object({
    IPR: segments.iprSchema
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01.INVOICE_PROCESSING",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01.INVOICE_PROCESSING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E01.INVOICE_PROCESSING schema
 */
export type EHC_E01_INVOICE_PROCESSING = z.infer<typeof ehcE01InvoiceProcessingSchema>;

/**
 * EHC_E01.PATIENT_INFO group schema
 * Defines the structure and validation rules for the EHC_E01.PATIENT_INFO group
 */
export const ehcE01PatientInfoSchema = z
  .object({
    PID: segments.pidSchema,
    PV1: segments.pv1Schema.optional(),
    PV2: segments.pv2Schema.optional(),
    ACC: z.array(segments.accSchema).optional(),
    INSURANCE: z.array(ehcE01InsuranceSchema),
    DIAGNOSIS: z.array(ehcE01DiagnosisSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01.PATIENT_INFO",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01.PATIENT_INFO group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E01.PATIENT_INFO schema
 */
export type EHC_E01_PATIENT_INFO = z.infer<typeof ehcE01PatientInfoSchema>;

/**
 * EHC_E01.PRODUCT_SERVICE_GROUP group schema
 * Defines the structure and validation rules for the EHC_E01.PRODUCT_SERVICE_GROUP group
 */
export const ehcE01ProductServiceGroupSchema = z
  .object({
    PSG: segments.psgSchema,
    LOC: z.array(segments.locSchema).optional(),
    ROL: z.array(segments.rolSchema).optional(),
    PATIENT_INFO: z.array(ehcE01PatientInfoSchema).optional(),
    PRODUCT_SERVICE_LINE_ITEM: z.array(ehcE01ProductServiceLineItemSchema),
    PROCEDURE: z.array(ehcE01ProcedureSchema).optional(),
    INVOICE_PROCESSING: z.array(ehcE01InvoiceProcessingSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01.PRODUCT_SERVICE_GROUP",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01.PRODUCT_SERVICE_GROUP group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E01.PRODUCT_SERVICE_GROUP schema
 */
export type EHC_E01_PRODUCT_SERVICE_GROUP = z.infer<typeof ehcE01ProductServiceGroupSchema>;

/**
 * EHC_E01.PRODUCT_SERVICE_SECTION group schema
 * Defines the structure and validation rules for the EHC_E01.PRODUCT_SERVICE_SECTION group
 */
export const ehcE01ProductServiceSectionSchema = z
  .object({
    PSS: segments.pssSchema,
    PRODUCT_SERVICE_GROUP: z.array(ehcE01ProductServiceGroupSchema)
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01.PRODUCT_SERVICE_SECTION",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01.PRODUCT_SERVICE_SECTION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E01.PRODUCT_SERVICE_SECTION schema
 */
export type EHC_E01_PRODUCT_SERVICE_SECTION = z.infer<typeof ehcE01ProductServiceSectionSchema>;

/**
 * EHC_E01.INVOICE_INFORMATION group schema
 * Defines the structure and validation rules for the EHC_E01.INVOICE_INFORMATION group
 */
export const ehcE01InvoiceInformationSchema = z
  .object({
    IVC: segments.ivcSchema,
    PYE: segments.pyeSchema.optional(),
    CTD: z.array(segments.ctdSchema).optional(),
    AUT: segments.autSchema.optional(),
    LOC: z.array(segments.locSchema).optional(),
    ROL: z.array(segments.rolSchema).optional(),
    PRODUCT_SERVICE_SECTION: z.array(ehcE01ProductServiceSectionSchema)
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01.INVOICE_INFORMATION",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01.INVOICE_INFORMATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E01.INVOICE_INFORMATION schema
 */
export type EHC_E01_INVOICE_INFORMATION = z.infer<typeof ehcE01InvoiceInformationSchema>;

/**
 * EHC_E01 message schema
 * Defines the structure and validation rules for the EHC_E01 message
 */
export const ehc_e01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: z.array(segments.uacSchema).optional(),
    INVOICE_INFORMATION: ehcE01InvoiceInformationSchema
  })
  .register(hl7v2Metadata, {
    title: "EHC_E01",
    version: "2.7",
    description: "HL7 v2.7 EHC_E01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the EHC_E01 schema
 */
export type EHC_E01 = z.infer<typeof ehc_e01Schema>;

/**
 * Default export for convenience
 */
export default ehc_e01Schema;
