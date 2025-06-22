import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 DFT_P11 Message
 * 
 * HL7 v2.8 DFT_P11 message definition
 * Contains segment definitions and constraints for the DFT_P11 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DFT_P11.VISIT group schema
 * Defines the structure and validation rules for the DFT_P11.VISIT group
 */
export const dftP11VisitSchema = z.object({
  "PV2": segments.pv2Schema,
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.VISIT",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.VISIT schema
 */
export type DFT_P11_VISIT = z.infer<typeof dftP11VisitSchema>;

/**
 * DFT_P11.TIMING_QUANTITY group schema
 * Defines the structure and validation rules for the DFT_P11.TIMING_QUANTITY group
 */
export const dftP11TimingQuantitySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.TIMING_QUANTITY",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.TIMING_QUANTITY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.TIMING_QUANTITY schema
 */
export type DFT_P11_TIMING_QUANTITY = z.infer<typeof dftP11TimingQuantitySchema>;

/**
 * DFT_P11.ORDER group schema
 * Defines the structure and validation rules for the DFT_P11.ORDER group
 */
export const dftP11OrderSchema = z.object({
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.ORDER",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.ORDER schema
 */
export type DFT_P11_ORDER = z.infer<typeof dftP11OrderSchema>;

/**
 * DFT_P11.OBSERVATION group schema
 * Defines the structure and validation rules for the DFT_P11.OBSERVATION group
 */
export const dftP11ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.OBSERVATION schema
 */
export type DFT_P11_OBSERVATION = z.infer<typeof dftP11ObservationSchema>;

/**
 * DFT_P11.INSURANCE group schema
 * Defines the structure and validation rules for the DFT_P11.INSURANCE group
 */
export const dftP11InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": z.array(segments.in3Schema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.INSURANCE schema
 */
export type DFT_P11_INSURANCE = z.infer<typeof dftP11InsuranceSchema>;

/**
 * DFT_P11.FINANCIAL_PROCEDURE group schema
 * Defines the structure and validation rules for the DFT_P11.FINANCIAL_PROCEDURE group
 */
export const dftP11FinancialProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.FINANCIAL_PROCEDURE",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.FINANCIAL_PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.FINANCIAL_PROCEDURE schema
 */
export type DFT_P11_FINANCIAL_PROCEDURE = z.infer<typeof dftP11FinancialProcedureSchema>;

/**
 * DFT_P11.FINANCIAL_TIMING_QUANTITY group schema
 * Defines the structure and validation rules for the DFT_P11.FINANCIAL_TIMING_QUANTITY group
 */
export const dftP11FinancialTimingQuantitySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.FINANCIAL_TIMING_QUANTITY",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.FINANCIAL_TIMING_QUANTITY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.FINANCIAL_TIMING_QUANTITY schema
 */
export type DFT_P11_FINANCIAL_TIMING_QUANTITY = z.infer<typeof dftP11FinancialTimingQuantitySchema>;

/**
 * DFT_P11.FINANCIAL_ORDER group schema
 * Defines the structure and validation rules for the DFT_P11.FINANCIAL_ORDER group
 */
export const dftP11FinancialOrderSchema = z.object({
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.FINANCIAL_ORDER",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.FINANCIAL_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.FINANCIAL_ORDER schema
 */
export type DFT_P11_FINANCIAL_ORDER = z.infer<typeof dftP11FinancialOrderSchema>;

/**
 * DFT_P11.FINANCIAL_OBSERVATION group schema
 * Defines the structure and validation rules for the DFT_P11.FINANCIAL_OBSERVATION group
 */
export const dftP11FinancialObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.FINANCIAL_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.FINANCIAL_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.FINANCIAL_OBSERVATION schema
 */
export type DFT_P11_FINANCIAL_OBSERVATION = z.infer<typeof dftP11FinancialObservationSchema>;

/**
 * DFT_P11.FINANCIAL_INSURANCE group schema
 * Defines the structure and validation rules for the DFT_P11.FINANCIAL_INSURANCE group
 */
export const dftP11FinancialInsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": z.array(segments.in3Schema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.FINANCIAL_INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.FINANCIAL_INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.FINANCIAL_INSURANCE schema
 */
export type DFT_P11_FINANCIAL_INSURANCE = z.infer<typeof dftP11FinancialInsuranceSchema>;

/**
 * DFT_P11.COMMON_ORDER group schema
 * Defines the structure and validation rules for the DFT_P11.COMMON_ORDER group
 */
export const dftP11CommonOrderSchema = z.object({
  "ORC": segments.orcSchema.optional(),
  "TIMING_QUANTITY": z.array(dftP11TimingQuantitySchema).optional(),
  "ORDER": dftP11OrderSchema.optional(),
  "OBSERVATION": z.array(dftP11ObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.COMMON_ORDER",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.COMMON_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.COMMON_ORDER schema
 */
export type DFT_P11_COMMON_ORDER = z.infer<typeof dftP11CommonOrderSchema>;

/**
 * DFT_P11.FINANCIAL_COMMON_ORDER group schema
 * Defines the structure and validation rules for the DFT_P11.FINANCIAL_COMMON_ORDER group
 */
export const dftP11FinancialCommonOrderSchema = z.object({
  "ORC": segments.orcSchema.optional(),
  "FINANCIAL_TIMING_QUANTITY": z.array(dftP11FinancialTimingQuantitySchema).optional(),
  "FINANCIAL_ORDER": dftP11FinancialOrderSchema.optional(),
  "FINANCIAL_OBSERVATION": z.array(dftP11FinancialObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.FINANCIAL_COMMON_ORDER",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.FINANCIAL_COMMON_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.FINANCIAL_COMMON_ORDER schema
 */
export type DFT_P11_FINANCIAL_COMMON_ORDER = z.infer<typeof dftP11FinancialCommonOrderSchema>;

/**
 * DFT_P11.FINANCIAL group schema
 * Defines the structure and validation rules for the DFT_P11.FINANCIAL group
 */
export const dftP11FinancialSchema = z.object({
  "FT1": segments.ft1Schema,
  "FINANCIAL_PROCEDURE": z.array(dftP11FinancialProcedureSchema).optional(),
  "FINANCIAL_COMMON_ORDER": z.array(dftP11FinancialCommonOrderSchema).optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": segments.drgSchema.optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "FINANCIAL_INSURANCE": z.array(dftP11FinancialInsuranceSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P11.FINANCIAL",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11.FINANCIAL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P11.FINANCIAL schema
 */
export type DFT_P11_FINANCIAL = z.infer<typeof dftP11FinancialSchema>;

/**
 * DFT_P11 message schema
 * Defines the structure and validation rules for the DFT_P11 message
 */
export const dft_p11Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "PV1": segments.pv1Schema.optional(),
  "VISIT": dftP11VisitSchema.optional(),
  "DB1": z.array(segments.db1Schema).optional(),
  "COMMON_ORDER": z.array(dftP11CommonOrderSchema).optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": segments.drgSchema.optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(dftP11InsuranceSchema).optional(),
  "ACC": segments.accSchema.optional(),
  "FINANCIAL": z.array(dftP11FinancialSchema)
}).register(hl7v2Metadata, {
  title: "DFT_P11",
  version: "2.8",
  description: "HL7 v2.8 DFT_P11 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the DFT_P11 schema
 */
export type DFT_P11 = z.infer<typeof dft_p11Schema>;

/**
 * Default export for convenience
 */
export default dft_p11Schema;