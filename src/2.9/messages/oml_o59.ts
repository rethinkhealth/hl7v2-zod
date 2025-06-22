import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 OML_O59 Message
 * 
 * HL7 v2.9 OML_O59 message definition
 * Contains segment definitions and constraints for the OML_O59 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OML_O59.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OML_O59.PATIENT_VISIT group
 */
export const omlO59PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.PATIENT_VISIT",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.PATIENT_VISIT schema
 */
export type OML_O59_PATIENT_VISIT = z.infer<typeof omlO59PatientVisitSchema>;

/**
 * OML_O59.INSURANCE group schema
 * Defines the structure and validation rules for the OML_O59.INSURANCE group
 */
export const omlO59InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.INSURANCE schema
 */
export type OML_O59_INSURANCE = z.infer<typeof omlO59InsuranceSchema>;

/**
 * OML_O59.TIMING group schema
 * Defines the structure and validation rules for the OML_O59.TIMING group
 */
export const omlO59TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.TIMING",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.TIMING schema
 */
export type OML_O59_TIMING = z.infer<typeof omlO59TimingSchema>;

/**
 * OML_O59.OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O59.OBSERVATION group
 */
export const omlO59ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TCD": segments.tcdSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.OBSERVATION schema
 */
export type OML_O59_OBSERVATION = z.infer<typeof omlO59ObservationSchema>;

/**
 * OML_O59.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O59.SPECIMEN_OBSERVATION group
 */
export const omlO59SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.SPECIMEN_OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.SPECIMEN_OBSERVATION schema
 */
export type OML_O59_SPECIMEN_OBSERVATION = z.infer<typeof omlO59SpecimenObservationSchema>;

/**
 * OML_O59.CONTAINER_OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O59.CONTAINER_OBSERVATION group
 */
export const omlO59ContainerObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.CONTAINER_OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.CONTAINER_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.CONTAINER_OBSERVATION schema
 */
export type OML_O59_CONTAINER_OBSERVATION = z.infer<typeof omlO59ContainerObservationSchema>;

/**
 * OML_O59.PATIENT_PRIOR group schema
 * Defines the structure and validation rules for the OML_O59.PATIENT_PRIOR group
 */
export const omlO59PatientPriorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.PATIENT_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.PATIENT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.PATIENT_PRIOR schema
 */
export type OML_O59_PATIENT_PRIOR = z.infer<typeof omlO59PatientPriorSchema>;

/**
 * OML_O59.PATIENT_VISIT_PRIOR group schema
 * Defines the structure and validation rules for the OML_O59.PATIENT_VISIT_PRIOR group
 */
export const omlO59PatientVisitPriorSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.PATIENT_VISIT_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.PATIENT_VISIT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.PATIENT_VISIT_PRIOR schema
 */
export type OML_O59_PATIENT_VISIT_PRIOR = z.infer<typeof omlO59PatientVisitPriorSchema>;

/**
 * OML_O59.OBSERVATION_PARTICIPATION_PRIOR group schema
 * Defines the structure and validation rules for the OML_O59.OBSERVATION_PARTICIPATION_PRIOR group
 */
export const omlO59ObservationParticipationPriorSchema = z.object({
  "PRT": segments.prtSchema,
  "DEV": z.array(segments.devSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.OBSERVATION_PARTICIPATION_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.OBSERVATION_PARTICIPATION_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.OBSERVATION_PARTICIPATION_PRIOR schema
 */
export type OML_O59_OBSERVATION_PARTICIPATION_PRIOR = z.infer<typeof omlO59ObservationParticipationPriorSchema>;

/**
 * OML_O59.TIMING_PRIOR group schema
 * Defines the structure and validation rules for the OML_O59.TIMING_PRIOR group
 */
export const omlO59TimingPriorSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.TIMING_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.TIMING_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.TIMING_PRIOR schema
 */
export type OML_O59_TIMING_PRIOR = z.infer<typeof omlO59TimingPriorSchema>;

/**
 * OML_O59.OBSERVATION_PRIOR group schema
 * Defines the structure and validation rules for the OML_O59.OBSERVATION_PRIOR group
 */
export const omlO59ObservationPriorSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.OBSERVATION_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.OBSERVATION_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.OBSERVATION_PRIOR schema
 */
export type OML_O59_OBSERVATION_PRIOR = z.infer<typeof omlO59ObservationPriorSchema>;

/**
 * OML_O59.PATIENT group schema
 * Defines the structure and validation rules for the OML_O59.PATIENT group
 */
export const omlO59PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "PATIENT_VISIT": omlO59PatientVisitSchema.optional(),
  "INSURANCE": z.array(omlO59InsuranceSchema).optional(),
  "GT1": segments.gt1Schema.optional(),
  "AL1": z.array(segments.al1Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.PATIENT schema
 */
export type OML_O59_PATIENT = z.infer<typeof omlO59PatientSchema>;

/**
 * OML_O59.CONTAINER group schema
 * Defines the structure and validation rules for the OML_O59.CONTAINER group
 */
export const omlO59ContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "CONTAINER_OBSERVATION": z.array(omlO59ContainerObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.CONTAINER",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.CONTAINER schema
 */
export type OML_O59_CONTAINER = z.infer<typeof omlO59ContainerSchema>;

/**
 * OML_O59.ORDER_PRIOR group schema
 * Defines the structure and validation rules for the OML_O59.ORDER_PRIOR group
 */
export const omlO59OrderPriorSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "OBSERVATION_PARTICIPATION_PRIOR": z.array(omlO59ObservationParticipationPriorSchema).optional(),
  "TIMING_PRIOR": z.array(omlO59TimingPriorSchema).optional(),
  "OBSERVATION_PRIOR": z.array(omlO59ObservationPriorSchema)
}).register(hl7v2Metadata, {
  title: "OML_O59.ORDER_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.ORDER_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.ORDER_PRIOR schema
 */
export type OML_O59_ORDER_PRIOR = z.infer<typeof omlO59OrderPriorSchema>;

/**
 * OML_O59.SPECIMEN group schema
 * Defines the structure and validation rules for the OML_O59.SPECIMEN group
 */
export const omlO59SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "SPECIMEN_OBSERVATION": z.array(omlO59SpecimenObservationSchema).optional(),
  "CONTAINER": z.array(omlO59ContainerSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.SPECIMEN",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.SPECIMEN schema
 */
export type OML_O59_SPECIMEN = z.infer<typeof omlO59SpecimenSchema>;

/**
 * OML_O59.PRIOR_RESULT group schema
 * Defines the structure and validation rules for the OML_O59.PRIOR_RESULT group
 */
export const omlO59PriorResultSchema = z.object({
  "PATIENT_PRIOR": omlO59PatientPriorSchema.optional(),
  "PATIENT_VISIT_PRIOR": omlO59PatientVisitPriorSchema.optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "ORDER_PRIOR": z.array(omlO59OrderPriorSchema)
}).register(hl7v2Metadata, {
  title: "OML_O59.PRIOR_RESULT",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.PRIOR_RESULT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.PRIOR_RESULT schema
 */
export type OML_O59_PRIOR_RESULT = z.infer<typeof omlO59PriorResultSchema>;

/**
 * OML_O59.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the OML_O59.OBSERVATION_REQUEST group
 */
export const omlO59ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "TCD": segments.tcdSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "CTD": segments.ctdSchema.optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "REL": segments.relSchema.optional(),
  "OBSERVATION": z.array(omlO59ObservationSchema).optional(),
  "SPECIMEN": z.array(omlO59SpecimenSchema).optional(),
  "IPC": segments.ipcSchema.optional(),
  "SGH": segments.sghSchema.optional(),
  "PRIOR_RESULT": z.array(omlO59PriorResultSchema).optional(),
  "SGT": segments.sgtSchema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.OBSERVATION_REQUEST",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.OBSERVATION_REQUEST schema
 */
export type OML_O59_OBSERVATION_REQUEST = z.infer<typeof omlO59ObservationRequestSchema>;

/**
 * OML_O59.ORDER group schema
 * Defines the structure and validation rules for the OML_O59.ORDER group
 */
export const omlO59OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(omlO59TimingSchema).optional(),
  "OBSERVATION_REQUEST": omlO59ObservationRequestSchema.optional(),
  "FT1": z.array(segments.ft1Schema).optional(),
  "CTI": z.array(segments.ctiSchema).optional(),
  "BLG": segments.blgSchema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O59.ORDER",
  version: "2.9",
  description: "HL7 v2.9 OML_O59.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O59.ORDER schema
 */
export type OML_O59_ORDER = z.infer<typeof omlO59OrderSchema>;

/**
 * OML_O59 message schema
 * Defines the structure and validation rules for the OML_O59 message
 */
export const oml_o59Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": omlO59PatientSchema.optional(),
  "ORDER": z.array(omlO59OrderSchema)
}).register(hl7v2Metadata, {
  title: "OML_O59",
  version: "2.9",
  description: "HL7 v2.9 OML_O59 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OML_O59 schema
 */
export type OML_O59 = z.infer<typeof oml_o59Schema>;

/**
 * Default export for convenience
 */
export default oml_o59Schema;