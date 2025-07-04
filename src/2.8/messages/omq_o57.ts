import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 OMQ_O57 Message
 * 
 * HL7 v2.8 OMQ_O57 message definition
 * Contains segment definitions and constraints for the OMQ_O57 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMQ_O57.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OMQ_O57.PATIENT_VISIT group
 */
export const omqO57PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMQ_O57.PATIENT_VISIT",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.PATIENT_VISIT schema
 */
export type OMQ_O57_PATIENT_VISIT = z.infer<typeof omqO57PatientVisitSchema>;

/**
 * OMQ_O57.INSURANCE group schema
 * Defines the structure and validation rules for the OMQ_O57.INSURANCE group
 */
export const omqO57InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "OMQ_O57.INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.INSURANCE schema
 */
export type OMQ_O57_INSURANCE = z.infer<typeof omqO57InsuranceSchema>;

/**
 * OMQ_O57.OBSERVATION group schema
 * Defines the structure and validation rules for the OMQ_O57.OBSERVATION group
 */
export const omqO57ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMQ_O57.OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.OBSERVATION schema
 */
export type OMQ_O57_OBSERVATION = z.infer<typeof omqO57ObservationSchema>;

/**
 * OMQ_O57.PATIENT_PRIOR group schema
 * Defines the structure and validation rules for the OMQ_O57.PATIENT_PRIOR group
 */
export const omqO57PatientPriorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMQ_O57.PATIENT_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.PATIENT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.PATIENT_PRIOR schema
 */
export type OMQ_O57_PATIENT_PRIOR = z.infer<typeof omqO57PatientPriorSchema>;

/**
 * OMQ_O57.PATIENT_VISIT_PRIOR group schema
 * Defines the structure and validation rules for the OMQ_O57.PATIENT_VISIT_PRIOR group
 */
export const omqO57PatientVisitPriorSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMQ_O57.PATIENT_VISIT_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.PATIENT_VISIT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.PATIENT_VISIT_PRIOR schema
 */
export type OMQ_O57_PATIENT_VISIT_PRIOR = z.infer<typeof omqO57PatientVisitPriorSchema>;

/**
 * OMQ_O57.TIMING_PRIOR group schema
 * Defines the structure and validation rules for the OMQ_O57.TIMING_PRIOR group
 */
export const omqO57TimingPriorSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OMQ_O57.TIMING_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.TIMING_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.TIMING_PRIOR schema
 */
export type OMQ_O57_TIMING_PRIOR = z.infer<typeof omqO57TimingPriorSchema>;

/**
 * OMQ_O57.OBSERVATION_PRIOR group schema
 * Defines the structure and validation rules for the OMQ_O57.OBSERVATION_PRIOR group
 */
export const omqO57ObservationPriorSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMQ_O57.OBSERVATION_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.OBSERVATION_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.OBSERVATION_PRIOR schema
 */
export type OMQ_O57_OBSERVATION_PRIOR = z.infer<typeof omqO57ObservationPriorSchema>;

/**
 * OMQ_O57.PATIENT group schema
 * Defines the structure and validation rules for the OMQ_O57.PATIENT group
 */
export const omqO57PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "PATIENT_VISIT": omqO57PatientVisitSchema.optional(),
  "INSURANCE": z.array(omqO57InsuranceSchema).optional(),
  "GT1": segments.gt1Schema.optional(),
  "AL1": z.array(segments.al1Schema).optional()
}).register(hl7v2Metadata, {
  title: "OMQ_O57.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.PATIENT schema
 */
export type OMQ_O57_PATIENT = z.infer<typeof omqO57PatientSchema>;

/**
 * OMQ_O57.ORDER_PRIOR group schema
 * Defines the structure and validation rules for the OMQ_O57.ORDER_PRIOR group
 */
export const omqO57OrderPriorSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "OBR": segments.obrSchema,
  "TIMING_PRIOR": z.array(omqO57TimingPriorSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT_1": z.array(segments.prtSchema).optional(),
  "CTD": segments.ctdSchema.optional(),
  "OBSERVATION_PRIOR": z.array(omqO57ObservationPriorSchema)
}).register(hl7v2Metadata, {
  title: "OMQ_O57.ORDER_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.ORDER_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.ORDER_PRIOR schema
 */
export type OMQ_O57_ORDER_PRIOR = z.infer<typeof omqO57OrderPriorSchema>;

/**
 * OMQ_O57.PRIOR_RESULT group schema
 * Defines the structure and validation rules for the OMQ_O57.PRIOR_RESULT group
 */
export const omqO57PriorResultSchema = z.object({
  "PATIENT_PRIOR": omqO57PatientPriorSchema.optional(),
  "PATIENT_VISIT_PRIOR": omqO57PatientVisitPriorSchema.optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "ORDER_PRIOR": z.array(omqO57OrderPriorSchema)
}).register(hl7v2Metadata, {
  title: "OMQ_O57.PRIOR_RESULT",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.PRIOR_RESULT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.PRIOR_RESULT schema
 */
export type OMQ_O57_PRIOR_RESULT = z.infer<typeof omqO57PriorResultSchema>;

/**
 * OMQ_O57.ORDER group schema
 * Defines the structure and validation rules for the OMQ_O57.ORDER group
 */
export const omqO57OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "OBX": segments.obxSchema,
  "PRT_1": z.array(segments.prtSchema).optional(),
  "TXA": segments.txaSchema,
  "CTD": segments.ctdSchema.optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "OBSERVATION": z.array(omqO57ObservationSchema).optional(),
  "PRIOR_RESULT": z.array(omqO57PriorResultSchema).optional(),
  "FT1": z.array(segments.ft1Schema).optional(),
  "CTI": z.array(segments.ctiSchema).optional(),
  "BLG": segments.blgSchema.optional()
}).register(hl7v2Metadata, {
  title: "OMQ_O57.ORDER",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMQ_O57.ORDER schema
 */
export type OMQ_O57_ORDER = z.infer<typeof omqO57OrderSchema>;

/**
 * OMQ_O57 message schema
 * Defines the structure and validation rules for the OMQ_O57 message
 */
export const omq_o57Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": omqO57PatientSchema.optional(),
  "ORDER": z.array(omqO57OrderSchema)
}).register(hl7v2Metadata, {
  title: "OMQ_O57",
  version: "2.8",
  description: "HL7 v2.8 OMQ_O57 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OMQ_O57 schema
 */
export type OMQ_O57 = z.infer<typeof omq_o57Schema>;

/**
 * Default export for convenience
 */
export default omq_o57Schema;