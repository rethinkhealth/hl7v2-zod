import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 DFT_P03 Message
 * 
 * HL7 v2.9 DFT_P03 message definition
 * Contains segment definitions and constraints for the DFT_P03 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DFT_P03.VISIT group schema
 * Defines the structure and validation rules for the DFT_P03.VISIT group
 */
export const dftP03VisitSchema = z.object({
  "PV1": segments.pv1Schema.optional(),
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.VISIT",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.VISIT schema
 */
export type DFT_P03_VISIT = z.infer<typeof dftP03VisitSchema>;

/**
 * DFT_P03.TIMING_QUANTITY group schema
 * Defines the structure and validation rules for the DFT_P03.TIMING_QUANTITY group
 */
export const dftP03TimingQuantitySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.TIMING_QUANTITY",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.TIMING_QUANTITY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.TIMING_QUANTITY schema
 */
export type DFT_P03_TIMING_QUANTITY = z.infer<typeof dftP03TimingQuantitySchema>;

/**
 * DFT_P03.ORDER group schema
 * Defines the structure and validation rules for the DFT_P03.ORDER group
 */
export const dftP03OrderSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.ORDER",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.ORDER schema
 */
export type DFT_P03_ORDER = z.infer<typeof dftP03OrderSchema>;

/**
 * DFT_P03.OBSERVATION group schema
 * Defines the structure and validation rules for the DFT_P03.OBSERVATION group
 */
export const dftP03ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.OBSERVATION schema
 */
export type DFT_P03_OBSERVATION = z.infer<typeof dftP03ObservationSchema>;

/**
 * DFT_P03.FINANCIAL_PROCEDURE group schema
 * Defines the structure and validation rules for the DFT_P03.FINANCIAL_PROCEDURE group
 */
export const dftP03FinancialProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.FINANCIAL_PROCEDURE",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.FINANCIAL_PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.FINANCIAL_PROCEDURE schema
 */
export type DFT_P03_FINANCIAL_PROCEDURE = z.infer<typeof dftP03FinancialProcedureSchema>;

/**
 * DFT_P03.FINANCIAL_OBSERVATION_STANDALONE group schema
 * Defines the structure and validation rules for the DFT_P03.FINANCIAL_OBSERVATION_STANDALONE group
 */
export const dftP03FinancialObservationStandaloneSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema)
}).register(hl7v2Metadata, {
  title: "DFT_P03.FINANCIAL_OBSERVATION_STANDALONE",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.FINANCIAL_OBSERVATION_STANDALONE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.FINANCIAL_OBSERVATION_STANDALONE schema
 */
export type DFT_P03_FINANCIAL_OBSERVATION_STANDALONE = z.infer<typeof dftP03FinancialObservationStandaloneSchema>;

/**
 * DFT_P03.FINANCIAL_OBSERVATION_2 group schema
 * Defines the structure and validation rules for the DFT_P03.FINANCIAL_OBSERVATION_2 group
 */
export const dftP03FinancialObservation_2Schema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.FINANCIAL_OBSERVATION_2",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.FINANCIAL_OBSERVATION_2 group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.FINANCIAL_OBSERVATION_2 schema
 */
export type DFT_P03_FINANCIAL_OBSERVATION_2 = z.infer<typeof dftP03FinancialObservation_2Schema>;

/**
 * DFT_P03.FINANCIAL_TIMING_QUANTITY group schema
 * Defines the structure and validation rules for the DFT_P03.FINANCIAL_TIMING_QUANTITY group
 */
export const dftP03FinancialTimingQuantitySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.FINANCIAL_TIMING_QUANTITY",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.FINANCIAL_TIMING_QUANTITY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.FINANCIAL_TIMING_QUANTITY schema
 */
export type DFT_P03_FINANCIAL_TIMING_QUANTITY = z.infer<typeof dftP03FinancialTimingQuantitySchema>;

/**
 * DFT_P03.FINANCIAL_ORDER group schema
 * Defines the structure and validation rules for the DFT_P03.FINANCIAL_ORDER group
 */
export const dftP03FinancialOrderSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.FINANCIAL_ORDER",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.FINANCIAL_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.FINANCIAL_ORDER schema
 */
export type DFT_P03_FINANCIAL_ORDER = z.infer<typeof dftP03FinancialOrderSchema>;

/**
 * DFT_P03.FINANCIAL_OBSERVATION group schema
 * Defines the structure and validation rules for the DFT_P03.FINANCIAL_OBSERVATION group
 */
export const dftP03FinancialObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.FINANCIAL_OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.FINANCIAL_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.FINANCIAL_OBSERVATION schema
 */
export type DFT_P03_FINANCIAL_OBSERVATION = z.infer<typeof dftP03FinancialObservationSchema>;

/**
 * DFT_P03.DIAGNOSIS group schema
 * Defines the structure and validation rules for the DFT_P03.DIAGNOSIS group
 */
export const dftP03DiagnosisSchema = z.object({
  "DG1": segments.dg1Schema
}).register(hl7v2Metadata, {
  title: "DFT_P03.DIAGNOSIS",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.DIAGNOSIS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.DIAGNOSIS schema
 */
export type DFT_P03_DIAGNOSIS = z.infer<typeof dftP03DiagnosisSchema>;

/**
 * DFT_P03.INSURANCE group schema
 * Defines the structure and validation rules for the DFT_P03.INSURANCE group
 */
export const dftP03InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": z.array(segments.in3Schema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.INSURANCE schema
 */
export type DFT_P03_INSURANCE = z.infer<typeof dftP03InsuranceSchema>;

/**
 * DFT_P03.COMMON_ORDER group schema
 * Defines the structure and validation rules for the DFT_P03.COMMON_ORDER group
 */
export const dftP03CommonOrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING_QUANTITY": z.array(dftP03TimingQuantitySchema).optional(),
  "ORDER": dftP03OrderSchema.optional(),
  "OBSERVATION": z.array(dftP03ObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.COMMON_ORDER",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.COMMON_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.COMMON_ORDER schema
 */
export type DFT_P03_COMMON_ORDER = z.infer<typeof dftP03CommonOrderSchema>;

/**
 * DFT_P03.FINANCIAL_ORDER_STANDALONE group schema
 * Defines the structure and validation rules for the DFT_P03.FINANCIAL_ORDER_STANDALONE group
 */
export const dftP03FinancialOrderStandaloneSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "FINANCIAL_OBSERVATION_2": z.array(dftP03FinancialObservation_2Schema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.FINANCIAL_ORDER_STANDALONE",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.FINANCIAL_ORDER_STANDALONE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.FINANCIAL_ORDER_STANDALONE schema
 */
export type DFT_P03_FINANCIAL_ORDER_STANDALONE = z.infer<typeof dftP03FinancialOrderStandaloneSchema>;

/**
 * DFT_P03.FINANCIAL_COMMON_ORDER group schema
 * Defines the structure and validation rules for the DFT_P03.FINANCIAL_COMMON_ORDER group
 */
export const dftP03FinancialCommonOrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "FINANCIAL_TIMING_QUANTITY": z.array(dftP03FinancialTimingQuantitySchema).optional(),
  "FINANCIAL_ORDER": dftP03FinancialOrderSchema.optional(),
  "FINANCIAL_OBSERVATION": z.array(dftP03FinancialObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.FINANCIAL_COMMON_ORDER",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.FINANCIAL_COMMON_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.FINANCIAL_COMMON_ORDER schema
 */
export type DFT_P03_FINANCIAL_COMMON_ORDER = z.infer<typeof dftP03FinancialCommonOrderSchema>;

/**
 * DFT_P03.FINANCIAL group schema
 * Defines the structure and validation rules for the DFT_P03.FINANCIAL group
 */
export const dftP03FinancialSchema = z.object({
  "FT1": segments.ft1Schema,
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "FINANCIAL_PROCEDURE": z.array(dftP03FinancialProcedureSchema).optional(),
  "FINANCIAL_OBSERVATION_STANDALONE": z.array(dftP03FinancialObservationStandaloneSchema).optional(),
  "FINANCIAL_ORDER_STANDALONE": z.array(dftP03FinancialOrderStandaloneSchema).optional(),
  "FINANCIAL_COMMON_ORDER": z.array(dftP03FinancialCommonOrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03.FINANCIAL",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03.FINANCIAL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DFT_P03.FINANCIAL schema
 */
export type DFT_P03_FINANCIAL = z.infer<typeof dftP03FinancialSchema>;

/**
 * DFT_P03 message schema
 * Defines the structure and validation rules for the DFT_P03 message
 */
export const dft_p03Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "VISIT": dftP03VisitSchema.optional(),
  "DB1": z.array(segments.db1Schema).optional(),
  "COMMON_ORDER": z.array(dftP03CommonOrderSchema).optional(),
  "FINANCIAL": z.array(dftP03FinancialSchema),
  "DIAGNOSIS": z.array(dftP03DiagnosisSchema).optional(),
  "DRG": segments.drgSchema.optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(dftP03InsuranceSchema).optional(),
  "ACC": segments.accSchema.optional()
}).register(hl7v2Metadata, {
  title: "DFT_P03",
  version: "2.9",
  description: "HL7 v2.9 DFT_P03 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the DFT_P03 schema
 */
export type DFT_P03 = z.infer<typeof dft_p03Schema>;

/**
 * Default export for convenience
 */
export default dft_p03Schema;