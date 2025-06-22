import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 OPL_O37 Message
 * 
 * HL7 v2.7 OPL_O37 message definition
 * Contains segment definitions and constraints for the OPL_O37 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OPL_O37.GUARANTOR group schema
 * Defines the structure and validation rules for the OPL_O37.GUARANTOR group
 */
export const oplO37GuarantorSchema = z.object({
  "GT1": segments.gt1Schema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.GUARANTOR",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.GUARANTOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.GUARANTOR schema
 */
export type OPL_O37_GUARANTOR = z.infer<typeof oplO37GuarantorSchema>;

/**
 * OPL_O37.OBSERVATIONS_ON_PATIENT group schema
 * Defines the structure and validation rules for the OPL_O37.OBSERVATIONS_ON_PATIENT group
 */
export const oplO37ObservationsOnPatientSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.OBSERVATIONS_ON_PATIENT",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.OBSERVATIONS_ON_PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.OBSERVATIONS_ON_PATIENT schema
 */
export type OPL_O37_OBSERVATIONS_ON_PATIENT = z.infer<typeof oplO37ObservationsOnPatientSchema>;

/**
 * OPL_O37.INSURANCE group schema
 * Defines the structure and validation rules for the OPL_O37.INSURANCE group
 */
export const oplO37InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.INSURANCE",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.INSURANCE schema
 */
export type OPL_O37_INSURANCE = z.infer<typeof oplO37InsuranceSchema>;

/**
 * OPL_O37.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OPL_O37.SPECIMEN_OBSERVATION group
 */
export const oplO37SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.SPECIMEN_OBSERVATION",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.SPECIMEN_OBSERVATION schema
 */
export type OPL_O37_SPECIMEN_OBSERVATION = z.infer<typeof oplO37SpecimenObservationSchema>;

/**
 * OPL_O37.CONTAINER_OBSERVATION group schema
 * Defines the structure and validation rules for the OPL_O37.CONTAINER_OBSERVATION group
 */
export const oplO37ContainerObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.CONTAINER_OBSERVATION",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.CONTAINER_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.CONTAINER_OBSERVATION schema
 */
export type OPL_O37_CONTAINER_OBSERVATION = z.infer<typeof oplO37ContainerObservationSchema>;

/**
 * OPL_O37.TIMING group schema
 * Defines the structure and validation rules for the OPL_O37.TIMING group
 */
export const oplO37TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.TIMING",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.TIMING schema
 */
export type OPL_O37_TIMING = z.infer<typeof oplO37TimingSchema>;

/**
 * OPL_O37.ORDER_RELATED_OBSERVATION group schema
 * Defines the structure and validation rules for the OPL_O37.ORDER_RELATED_OBSERVATION group
 */
export const oplO37OrderRelatedObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.ORDER_RELATED_OBSERVATION",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.ORDER_RELATED_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.ORDER_RELATED_OBSERVATION schema
 */
export type OPL_O37_ORDER_RELATED_OBSERVATION = z.infer<typeof oplO37OrderRelatedObservationSchema>;

/**
 * OPL_O37.PATIENT_PRIOR group schema
 * Defines the structure and validation rules for the OPL_O37.PATIENT_PRIOR group
 */
export const oplO37PatientPriorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.PATIENT_PRIOR",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.PATIENT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.PATIENT_PRIOR schema
 */
export type OPL_O37_PATIENT_PRIOR = z.infer<typeof oplO37PatientPriorSchema>;

/**
 * OPL_O37.PATIENT_VISIT_PRIOR group schema
 * Defines the structure and validation rules for the OPL_O37.PATIENT_VISIT_PRIOR group
 */
export const oplO37PatientVisitPriorSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.PATIENT_VISIT_PRIOR",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.PATIENT_VISIT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.PATIENT_VISIT_PRIOR schema
 */
export type OPL_O37_PATIENT_VISIT_PRIOR = z.infer<typeof oplO37PatientVisitPriorSchema>;

/**
 * OPL_O37.TIMING2 group schema
 * Defines the structure and validation rules for the OPL_O37.TIMING2 group
 */
export const oplO37Timing2Schema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.TIMING2",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.TIMING2 group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.TIMING2 schema
 */
export type OPL_O37_TIMING2 = z.infer<typeof oplO37Timing2Schema>;

/**
 * OPL_O37.OBSERVATION_RESULT_GROUP group schema
 * Defines the structure and validation rules for the OPL_O37.OBSERVATION_RESULT_GROUP group
 */
export const oplO37ObservationResultGroupSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.OBSERVATION_RESULT_GROUP",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.OBSERVATION_RESULT_GROUP group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.OBSERVATION_RESULT_GROUP schema
 */
export type OPL_O37_OBSERVATION_RESULT_GROUP = z.infer<typeof oplO37ObservationResultGroupSchema>;

/**
 * OPL_O37.PATIENT group schema
 * Defines the structure and validation rules for the OPL_O37.PATIENT group
 */
export const oplO37PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "OBSERVATIONS_ON_PATIENT": z.array(oplO37ObservationsOnPatientSchema).optional(),
  "INSURANCE": z.array(oplO37InsuranceSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.PATIENT",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.PATIENT schema
 */
export type OPL_O37_PATIENT = z.infer<typeof oplO37PatientSchema>;

/**
 * OPL_O37.CONTAINER group schema
 * Defines the structure and validation rules for the OPL_O37.CONTAINER group
 */
export const oplO37ContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "CONTAINER_OBSERVATION": z.array(oplO37ContainerObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.CONTAINER",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.CONTAINER schema
 */
export type OPL_O37_CONTAINER = z.infer<typeof oplO37ContainerSchema>;

/**
 * OPL_O37.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the OPL_O37.OBSERVATION_REQUEST group
 */
export const oplO37ObservationRequestSchema = z.object({
  "ORC": segments.orcSchema,
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(oplO37TimingSchema).optional(),
  "TCD": segments.tcdSchema.optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "ORDER_RELATED_OBSERVATION": z.array(oplO37OrderRelatedObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.OBSERVATION_REQUEST",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.OBSERVATION_REQUEST schema
 */
export type OPL_O37_OBSERVATION_REQUEST = z.infer<typeof oplO37ObservationRequestSchema>;

/**
 * OPL_O37.ORDER_PRIOR group schema
 * Defines the structure and validation rules for the OPL_O37.ORDER_PRIOR group
 */
export const oplO37OrderPriorSchema = z.object({
  "OBR": segments.obrSchema,
  "ORC": segments.orcSchema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING2": oplO37Timing2Schema.optional(),
  "OBSERVATION_RESULT_GROUP": z.array(oplO37ObservationResultGroupSchema)
}).register(hl7v2Metadata, {
  title: "OPL_O37.ORDER_PRIOR",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.ORDER_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.ORDER_PRIOR schema
 */
export type OPL_O37_ORDER_PRIOR = z.infer<typeof oplO37OrderPriorSchema>;

/**
 * OPL_O37.SPECIMEN group schema
 * Defines the structure and validation rules for the OPL_O37.SPECIMEN group
 */
export const oplO37SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "SPECIMEN_OBSERVATION": z.array(oplO37SpecimenObservationSchema).optional(),
  "CONTAINER": z.array(oplO37ContainerSchema).optional(),
  "OBSERVATION_REQUEST": z.array(oplO37ObservationRequestSchema)
}).register(hl7v2Metadata, {
  title: "OPL_O37.SPECIMEN",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.SPECIMEN schema
 */
export type OPL_O37_SPECIMEN = z.infer<typeof oplO37SpecimenSchema>;

/**
 * OPL_O37.PRIOR_RESULT group schema
 * Defines the structure and validation rules for the OPL_O37.PRIOR_RESULT group
 */
export const oplO37PriorResultSchema = z.object({
  "NK1": z.array(segments.nk1Schema),
  "PATIENT_PRIOR": oplO37PatientPriorSchema.optional(),
  "PATIENT_VISIT_PRIOR": oplO37PatientVisitPriorSchema.optional(),
  "AL1": segments.al1Schema.optional(),
  "ORDER_PRIOR": z.array(oplO37OrderPriorSchema)
}).register(hl7v2Metadata, {
  title: "OPL_O37.PRIOR_RESULT",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.PRIOR_RESULT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.PRIOR_RESULT schema
 */
export type OPL_O37_PRIOR_RESULT = z.infer<typeof oplO37PriorResultSchema>;

/**
 * OPL_O37.ORDER group schema
 * Defines the structure and validation rules for the OPL_O37.ORDER group
 */
export const oplO37OrderSchema = z.object({
  "NK1": z.array(segments.nk1Schema),
  "PATIENT": oplO37PatientSchema.optional(),
  "SPECIMEN": z.array(oplO37SpecimenSchema),
  "PRIOR_RESULT": oplO37PriorResultSchema.optional(),
  "FT1": z.array(segments.ft1Schema).optional(),
  "CTI": z.array(segments.ctiSchema).optional(),
  "BLG": segments.blgSchema.optional()
}).register(hl7v2Metadata, {
  title: "OPL_O37.ORDER",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OPL_O37.ORDER schema
 */
export type OPL_O37_ORDER = z.infer<typeof oplO37OrderSchema>;

/**
 * OPL_O37 message schema
 * Defines the structure and validation rules for the OPL_O37 message
 */
export const opl_o37Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema),
  "GUARANTOR": oplO37GuarantorSchema.optional(),
  "ORDER": z.array(oplO37OrderSchema)
}).register(hl7v2Metadata, {
  title: "OPL_O37",
  version: "2.7",
  description: "HL7 v2.7 OPL_O37 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OPL_O37 schema
 */
export type OPL_O37 = z.infer<typeof opl_o37Schema>;

/**
 * Default export for convenience
 */
export default opl_o37Schema;