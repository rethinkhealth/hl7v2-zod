import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 OML_O33 Message
 * 
 * HL7 v2.8 OML_O33 message definition
 * Contains segment definitions and constraints for the OML_O33 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OML_O33.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OML_O33.PATIENT_VISIT group
 */
export const omlO33PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.PATIENT_VISIT",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.PATIENT_VISIT schema
 */
export type OML_O33_PATIENT_VISIT = z.infer<typeof omlO33PatientVisitSchema>;

/**
 * OML_O33.INSURANCE group schema
 * Defines the structure and validation rules for the OML_O33.INSURANCE group
 */
export const omlO33InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.INSURANCE schema
 */
export type OML_O33_INSURANCE = z.infer<typeof omlO33InsuranceSchema>;

/**
 * OML_O33.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O33.SPECIMEN_OBSERVATION group
 */
export const omlO33SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.SPECIMEN_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.SPECIMEN_OBSERVATION schema
 */
export type OML_O33_SPECIMEN_OBSERVATION = z.infer<typeof omlO33SpecimenObservationSchema>;

/**
 * OML_O33.TIMING group schema
 * Defines the structure and validation rules for the OML_O33.TIMING group
 */
export const omlO33TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.TIMING",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.TIMING schema
 */
export type OML_O33_TIMING = z.infer<typeof omlO33TimingSchema>;

/**
 * OML_O33.OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O33.OBSERVATION group
 */
export const omlO33ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TCD": segments.tcdSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.OBSERVATION schema
 */
export type OML_O33_OBSERVATION = z.infer<typeof omlO33ObservationSchema>;

/**
 * OML_O33.PATIENT_PRIOR group schema
 * Defines the structure and validation rules for the OML_O33.PATIENT_PRIOR group
 */
export const omlO33PatientPriorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.PATIENT_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.PATIENT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.PATIENT_PRIOR schema
 */
export type OML_O33_PATIENT_PRIOR = z.infer<typeof omlO33PatientPriorSchema>;

/**
 * OML_O33.PATIENT_VISIT_PRIOR group schema
 * Defines the structure and validation rules for the OML_O33.PATIENT_VISIT_PRIOR group
 */
export const omlO33PatientVisitPriorSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.PATIENT_VISIT_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.PATIENT_VISIT_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.PATIENT_VISIT_PRIOR schema
 */
export type OML_O33_PATIENT_VISIT_PRIOR = z.infer<typeof omlO33PatientVisitPriorSchema>;

/**
 * OML_O33.TIMING_PRIOR group schema
 * Defines the structure and validation rules for the OML_O33.TIMING_PRIOR group
 */
export const omlO33TimingPriorSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.TIMING_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.TIMING_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.TIMING_PRIOR schema
 */
export type OML_O33_TIMING_PRIOR = z.infer<typeof omlO33TimingPriorSchema>;

/**
 * OML_O33.OBSERVATION_PRIOR group schema
 * Defines the structure and validation rules for the OML_O33.OBSERVATION_PRIOR group
 */
export const omlO33ObservationPriorSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.OBSERVATION_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.OBSERVATION_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.OBSERVATION_PRIOR schema
 */
export type OML_O33_OBSERVATION_PRIOR = z.infer<typeof omlO33ObservationPriorSchema>;

/**
 * OML_O33.PATIENT group schema
 * Defines the structure and validation rules for the OML_O33.PATIENT group
 */
export const omlO33PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "PATIENT_VISIT": omlO33PatientVisitSchema.optional(),
  "INSURANCE": z.array(omlO33InsuranceSchema).optional(),
  "GT1": segments.gt1Schema.optional(),
  "AL1": z.array(segments.al1Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.PATIENT schema
 */
export type OML_O33_PATIENT = z.infer<typeof omlO33PatientSchema>;

/**
 * OML_O33.ORDER_PRIOR group schema
 * Defines the structure and validation rules for the OML_O33.ORDER_PRIOR group
 */
export const omlO33OrderPriorSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT_1": z.array(segments.prtSchema).optional(),
  "TIMING_PRIOR": z.array(omlO33TimingPriorSchema).optional(),
  "OBSERVATION_PRIOR": z.array(omlO33ObservationPriorSchema)
}).register(hl7v2Metadata, {
  title: "OML_O33.ORDER_PRIOR",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.ORDER_PRIOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.ORDER_PRIOR schema
 */
export type OML_O33_ORDER_PRIOR = z.infer<typeof omlO33OrderPriorSchema>;

/**
 * OML_O33.PRIOR_RESULT group schema
 * Defines the structure and validation rules for the OML_O33.PRIOR_RESULT group
 */
export const omlO33PriorResultSchema = z.object({
  "PATIENT_PRIOR": omlO33PatientPriorSchema.optional(),
  "PATIENT_VISIT_PRIOR": omlO33PatientVisitPriorSchema.optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "ORDER_PRIOR": z.array(omlO33OrderPriorSchema)
}).register(hl7v2Metadata, {
  title: "OML_O33.PRIOR_RESULT",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.PRIOR_RESULT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.PRIOR_RESULT schema
 */
export type OML_O33_PRIOR_RESULT = z.infer<typeof omlO33PriorResultSchema>;

/**
 * OML_O33.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the OML_O33.OBSERVATION_REQUEST group
 */
export const omlO33ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "TCD": segments.tcdSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "OBSERVATION": z.array(omlO33ObservationSchema).optional(),
  "PRIOR_RESULT": z.array(omlO33PriorResultSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.OBSERVATION_REQUEST",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.OBSERVATION_REQUEST schema
 */
export type OML_O33_OBSERVATION_REQUEST = z.infer<typeof omlO33ObservationRequestSchema>;

/**
 * OML_O33.ORDER group schema
 * Defines the structure and validation rules for the OML_O33.ORDER group
 */
export const omlO33OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(omlO33TimingSchema).optional(),
  "OBSERVATION_REQUEST": omlO33ObservationRequestSchema.optional(),
  "FT1": z.array(segments.ft1Schema).optional(),
  "CTI": z.array(segments.ctiSchema).optional(),
  "BLG": segments.blgSchema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O33.ORDER",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.ORDER schema
 */
export type OML_O33_ORDER = z.infer<typeof omlO33OrderSchema>;

/**
 * OML_O33.SPECIMEN group schema
 * Defines the structure and validation rules for the OML_O33.SPECIMEN group
 */
export const omlO33SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "SPECIMEN_OBSERVATION": z.array(omlO33SpecimenObservationSchema).optional(),
  "SAC": z.array(segments.sacSchema).optional(),
  "ORDER": z.array(omlO33OrderSchema)
}).register(hl7v2Metadata, {
  title: "OML_O33.SPECIMEN",
  version: "2.8",
  description: "HL7 v2.8 OML_O33.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O33.SPECIMEN schema
 */
export type OML_O33_SPECIMEN = z.infer<typeof omlO33SpecimenSchema>;

/**
 * OML_O33 message schema
 * Defines the structure and validation rules for the OML_O33 message
 */
export const oml_o33Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": omlO33PatientSchema.optional(),
  "SPECIMEN": z.array(omlO33SpecimenSchema)
}).register(hl7v2Metadata, {
  title: "OML_O33",
  version: "2.8",
  description: "HL7 v2.8 OML_O33 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OML_O33 schema
 */
export type OML_O33 = z.infer<typeof oml_o33Schema>;

/**
 * Default export for convenience
 */
export default oml_o33Schema;