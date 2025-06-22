import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 RSP_K31 Message
 * 
 * HL7 v2.9 RSP_K31 message definition
 * Contains segment definitions and constraints for the RSP_K31 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_K31.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the RSP_K31.PATIENT_VISIT group
 */
export const rspK31PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31.PATIENT_VISIT",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.PATIENT_VISIT schema
 */
export type RSP_K31_PATIENT_VISIT = z.infer<typeof rspK31PatientVisitSchema>;

/**
 * RSP_K31.TIMING group schema
 * Defines the structure and validation rules for the RSP_K31.TIMING group
 */
export const rspK31TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31.TIMING",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.TIMING schema
 */
export type RSP_K31_TIMING = z.infer<typeof rspK31TimingSchema>;

/**
 * RSP_K31.COMPONENTS group schema
 * Defines the structure and validation rules for the RSP_K31.COMPONENTS group
 */
export const rspK31ComponentsSchema = z.object({
  "RXC": segments.rxcSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31.COMPONENTS",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.COMPONENTS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.COMPONENTS schema
 */
export type RSP_K31_COMPONENTS = z.infer<typeof rspK31ComponentsSchema>;

/**
 * RSP_K31.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RSP_K31.TIMING_ENCODED group
 */
export const rspK31TimingEncodedSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31.TIMING_ENCODED",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.TIMING_ENCODED group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.TIMING_ENCODED schema
 */
export type RSP_K31_TIMING_ENCODED = z.infer<typeof rspK31TimingEncodedSchema>;

/**
 * RSP_K31.OBSERVATION group schema
 * Defines the structure and validation rules for the RSP_K31.OBSERVATION group
 */
export const rspK31ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.OBSERVATION schema
 */
export type RSP_K31_OBSERVATION = z.infer<typeof rspK31ObservationSchema>;

/**
 * RSP_K31.PATIENT group schema
 * Defines the structure and validation rules for the RSP_K31.PATIENT group
 */
export const rspK31PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "PATIENT_VISIT": rspK31PatientVisitSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.PATIENT schema
 */
export type RSP_K31_PATIENT = z.infer<typeof rspK31PatientSchema>;

/**
 * RSP_K31.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RSP_K31.ORDER_DETAIL group
 */
export const rspK31OrderDetailSchema = z.object({
  "RXO": segments.rxoSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RXR": z.array(segments.rxrSchema),
  "COMPONENTS": z.array(rspK31ComponentsSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31.ORDER_DETAIL",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.ORDER_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.ORDER_DETAIL schema
 */
export type RSP_K31_ORDER_DETAIL = z.infer<typeof rspK31OrderDetailSchema>;

/**
 * RSP_K31.ENCODING group schema
 * Defines the structure and validation rules for the RSP_K31.ENCODING group
 */
export const rspK31EncodingSchema = z.object({
  "RXE": segments.rxeSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "TIMING_ENCODED": z.array(rspK31TimingEncodedSchema),
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31.ENCODING",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.ENCODING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.ENCODING schema
 */
export type RSP_K31_ENCODING = z.infer<typeof rspK31EncodingSchema>;

/**
 * RSP_K31.ORDER group schema
 * Defines the structure and validation rules for the RSP_K31.ORDER group
 */
export const rspK31OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(rspK31TimingSchema).optional(),
  "ORDER_DETAIL": rspK31OrderDetailSchema.optional(),
  "ENCODING": rspK31EncodingSchema.optional(),
  "RXD": segments.rxdSchema,
  "PRT_1": z.array(segments.prtSchema).optional(),
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional(),
  "CDO": z.array(segments.cdoSchema).optional(),
  "OBSERVATION": z.array(rspK31ObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31.ORDER",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.ORDER schema
 */
export type RSP_K31_ORDER = z.infer<typeof rspK31OrderSchema>;

/**
 * RSP_K31.RESPONSE group schema
 * Defines the structure and validation rules for the RSP_K31.RESPONSE group
 */
export const rspK31ResponseSchema = z.object({
  "PATIENT": rspK31PatientSchema.optional(),
  "ORDER": z.array(rspK31OrderSchema)
}).register(hl7v2Metadata, {
  title: "RSP_K31.RESPONSE",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K31.RESPONSE schema
 */
export type RSP_K31_RESPONSE = z.infer<typeof rspK31ResponseSchema>;

/**
 * RSP_K31 message schema
 * Defines the structure and validation rules for the RSP_K31 message
 */
export const rsp_k31Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "RCP": segments.rcpSchema,
  "RESPONSE": z.array(rspK31ResponseSchema),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K31",
  version: "2.9",
  description: "HL7 v2.9 RSP_K31 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_K31 schema
 */
export type RSP_K31 = z.infer<typeof rsp_k31Schema>;

/**
 * Default export for convenience
 */
export default rsp_k31Schema;