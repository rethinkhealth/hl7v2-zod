import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 OML_O35 Message
 * 
 * HL7 v2.9 OML_O35 message definition
 * Contains segment definitions and constraints for the OML_O35 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OML_O35.OCCUPATIONAL_DATA_FOR_HEALTH group schema
 * Defines the structure and validation rules for the OML_O35.OCCUPATIONAL_DATA_FOR_HEALTH group
 */
export const omlO35OccupationalDataForHealthSchema = z.object({
  "OH1": z.array(segments.oh1Schema).optional(),
  "OH2": z.array(segments.oh2Schema).optional(),
  "OH3": segments.oh3Schema.optional(),
  "OH4": z.array(segments.oh4Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.OCCUPATIONAL_DATA_FOR_HEALTH",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.OCCUPATIONAL_DATA_FOR_HEALTH group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.OCCUPATIONAL_DATA_FOR_HEALTH schema
 */
export type OML_O35_OCCUPATIONAL_DATA_FOR_HEALTH = z.infer<typeof omlO35OccupationalDataForHealthSchema>;

/**
 * OML_O35.NEXT_OF_KIN group schema
 * Defines the structure and validation rules for the OML_O35.NEXT_OF_KIN group
 */
export const omlO35NextOfKinSchema = z.object({
  "NK1": segments.nk1Schema,
  "OH2": z.array(segments.oh2Schema).optional(),
  "OH3": segments.oh3Schema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.NEXT_OF_KIN",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.NEXT_OF_KIN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.NEXT_OF_KIN schema
 */
export type OML_O35_NEXT_OF_KIN = z.infer<typeof omlO35NextOfKinSchema>;

/**
 * OML_O35.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OML_O35.PATIENT_VISIT group
 */
export const omlO35PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.PATIENT_VISIT",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.PATIENT_VISIT schema
 */
export type OML_O35_PATIENT_VISIT = z.infer<typeof omlO35PatientVisitSchema>;

/**
 * OML_O35.INSURANCE group schema
 * Defines the structure and validation rules for the OML_O35.INSURANCE group
 */
export const omlO35InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.INSURANCE schema
 */
export type OML_O35_INSURANCE = z.infer<typeof omlO35InsuranceSchema>;

/**
 * OML_O35.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O35.SPECIMEN_OBSERVATION group
 */
export const omlO35SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.SPECIMEN_OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.SPECIMEN_OBSERVATION schema
 */
export type OML_O35_SPECIMEN_OBSERVATION = z.infer<typeof omlO35SpecimenObservationSchema>;

/**
 * OML_O35.TIMING group schema
 * Defines the structure and validation rules for the OML_O35.TIMING group
 */
export const omlO35TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.TIMING",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.TIMING schema
 */
export type OML_O35_TIMING = z.infer<typeof omlO35TimingSchema>;

/**
 * OML_O35.OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O35.OBSERVATION group
 */
export const omlO35ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TCD": segments.tcdSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.OBSERVATION schema
 */
export type OML_O35_OBSERVATION = z.infer<typeof omlO35ObservationSchema>;

/**
 * OML_O35.PATIENT_PRIOR group schema
 * Defines the structure and validation rules for the OML_O35.PATIENT_PRIOR group
 */
export const omlO35PatientPriorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.PATIENT_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.PATIENT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.PATIENT_PRIOR schema
 */
export type OML_O35_PATIENT_PRIOR = z.infer<typeof omlO35PatientPriorSchema>;

/**
 * OML_O35.PATIENT_VISIT_PRIOR group schema
 * Defines the structure and validation rules for the OML_O35.PATIENT_VISIT_PRIOR group
 */
export const omlO35PatientVisitPriorSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.PATIENT_VISIT_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.PATIENT_VISIT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.PATIENT_VISIT_PRIOR schema
 */
export type OML_O35_PATIENT_VISIT_PRIOR = z.infer<typeof omlO35PatientVisitPriorSchema>;

/**
 * OML_O35.OBSERVATION_PARTICIPATION group schema
 * Defines the structure and validation rules for the OML_O35.OBSERVATION_PARTICIPATION group
 */
export const omlO35ObservationParticipationSchema = z.object({
  "PRT": segments.prtSchema,
  "DEV": z.array(segments.devSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.OBSERVATION_PARTICIPATION",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.OBSERVATION_PARTICIPATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.OBSERVATION_PARTICIPATION schema
 */
export type OML_O35_OBSERVATION_PARTICIPATION = z.infer<typeof omlO35ObservationParticipationSchema>;

/**
 * OML_O35.TIMING_PRIOR group schema
 * Defines the structure and validation rules for the OML_O35.TIMING_PRIOR group
 */
export const omlO35TimingPriorSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.TIMING_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.TIMING_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.TIMING_PRIOR schema
 */
export type OML_O35_TIMING_PRIOR = z.infer<typeof omlO35TimingPriorSchema>;

/**
 * OML_O35.OBSERVATION_PRIOR group schema
 * Defines the structure and validation rules for the OML_O35.OBSERVATION_PRIOR group
 */
export const omlO35ObservationPriorSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.OBSERVATION_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.OBSERVATION_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.OBSERVATION_PRIOR schema
 */
export type OML_O35_OBSERVATION_PRIOR = z.infer<typeof omlO35ObservationPriorSchema>;

/**
 * OML_O35.DEVICE group schema
 * Defines the structure and validation rules for the OML_O35.DEVICE group
 */
export const omlO35DeviceSchema = z.object({
  "DEV": segments.devSchema,
  "OBX": z.array(segments.obxSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.DEVICE",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.DEVICE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.DEVICE schema
 */
export type OML_O35_DEVICE = z.infer<typeof omlO35DeviceSchema>;

/**
 * OML_O35.PATIENT group schema
 * Defines the structure and validation rules for the OML_O35.PATIENT group
 */
export const omlO35PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "OCCUPATIONAL_DATA_FOR_HEALTH": omlO35OccupationalDataForHealthSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "NEXT_OF_KIN": z.array(omlO35NextOfKinSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "PATIENT_VISIT": omlO35PatientVisitSchema.optional(),
  "INSURANCE": z.array(omlO35InsuranceSchema).optional(),
  "GT1": segments.gt1Schema.optional(),
  "AL1": z.array(segments.al1Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.PATIENT schema
 */
export type OML_O35_PATIENT = z.infer<typeof omlO35PatientSchema>;

/**
 * OML_O35.ORDER_PRIOR group schema
 * Defines the structure and validation rules for the OML_O35.ORDER_PRIOR group
 */
export const omlO35OrderPriorSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "OBSERVATION_PARTICIPATION": z.array(omlO35ObservationParticipationSchema).optional(),
  "TIMING_PRIOR": z.array(omlO35TimingPriorSchema).optional(),
  "OBSERVATION_PRIOR": z.array(omlO35ObservationPriorSchema)
}).register(hl7v2Metadata, {
  title: "OML_O35.ORDER_PRIOR",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.ORDER_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.ORDER_PRIOR schema
 */
export type OML_O35_ORDER_PRIOR = z.infer<typeof omlO35OrderPriorSchema>;

/**
 * OML_O35.PRIOR_RESULT group schema
 * Defines the structure and validation rules for the OML_O35.PRIOR_RESULT group
 */
export const omlO35PriorResultSchema = z.object({
  "PATIENT_PRIOR": omlO35PatientPriorSchema.optional(),
  "PATIENT_VISIT_PRIOR": omlO35PatientVisitPriorSchema.optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "ORDER_PRIOR": z.array(omlO35OrderPriorSchema)
}).register(hl7v2Metadata, {
  title: "OML_O35.PRIOR_RESULT",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.PRIOR_RESULT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.PRIOR_RESULT schema
 */
export type OML_O35_PRIOR_RESULT = z.infer<typeof omlO35PriorResultSchema>;

/**
 * OML_O35.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the OML_O35.OBSERVATION_REQUEST group
 */
export const omlO35ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "TCD": segments.tcdSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "REL": segments.relSchema.optional(),
  "OBSERVATION": z.array(omlO35ObservationSchema).optional(),
  "IPC": segments.ipcSchema.optional(),
  "SGH": segments.sghSchema.optional(),
  "PRIOR_RESULT": z.array(omlO35PriorResultSchema).optional(),
  "SGT": segments.sgtSchema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.OBSERVATION_REQUEST",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.OBSERVATION_REQUEST schema
 */
export type OML_O35_OBSERVATION_REQUEST = z.infer<typeof omlO35ObservationRequestSchema>;

/**
 * OML_O35.ORDER group schema
 * Defines the structure and validation rules for the OML_O35.ORDER group
 */
export const omlO35OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(omlO35TimingSchema).optional(),
  "OBSERVATION_REQUEST": omlO35ObservationRequestSchema.optional(),
  "FT1": z.array(segments.ft1Schema).optional(),
  "CTI": z.array(segments.ctiSchema).optional(),
  "BLG": segments.blgSchema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O35.ORDER",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.ORDER schema
 */
export type OML_O35_ORDER = z.infer<typeof omlO35OrderSchema>;

/**
 * OML_O35.SPECIMEN_CONTAINER group schema
 * Defines the structure and validation rules for the OML_O35.SPECIMEN_CONTAINER group
 */
export const omlO35SpecimenContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "ORDER": z.array(omlO35OrderSchema)
}).register(hl7v2Metadata, {
  title: "OML_O35.SPECIMEN_CONTAINER",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.SPECIMEN_CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.SPECIMEN_CONTAINER schema
 */
export type OML_O35_SPECIMEN_CONTAINER = z.infer<typeof omlO35SpecimenContainerSchema>;

/**
 * OML_O35.SPECIMEN group schema
 * Defines the structure and validation rules for the OML_O35.SPECIMEN group
 */
export const omlO35SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "SPECIMEN_OBSERVATION": z.array(omlO35SpecimenObservationSchema).optional(),
  "SPECIMEN_CONTAINER": z.array(omlO35SpecimenContainerSchema)
}).register(hl7v2Metadata, {
  title: "OML_O35.SPECIMEN",
  version: "2.9",
  description: "HL7 v2.9 OML_O35.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O35.SPECIMEN schema
 */
export type OML_O35_SPECIMEN = z.infer<typeof omlO35SpecimenSchema>;

/**
 * OML_O35 message schema
 * Defines the structure and validation rules for the OML_O35 message
 */
export const oml_o35Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": omlO35PatientSchema.optional(),
  "SPECIMEN": z.array(omlO35SpecimenSchema),
  "DEVICE": z.array(omlO35DeviceSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O35",
  version: "2.9",
  description: "HL7 v2.9 OML_O35 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OML_O35 schema
 */
export type OML_O35 = z.infer<typeof oml_o35Schema>;

/**
 * Default export for convenience
 */
export default oml_o35Schema;