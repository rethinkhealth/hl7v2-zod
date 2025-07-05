import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 CCR_I16 Message
 *
 * HL7 v2.7 CCR_I16 message definition
 * Contains segment definitions and constraints for the CCR_I16 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CCR_I16.PROVIDER_CONTACT group schema
 * Defines the structure and validation rules for the CCR_I16.PROVIDER_CONTACT group
 */
export const ccrI16ProviderContactSchema = z
  .object({
    PRD: segments.prdSchema,
    CTD: z.array(segments.ctdSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.PROVIDER_CONTACT",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.PROVIDER_CONTACT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.PROVIDER_CONTACT schema
 */
export type CCR_I16_PROVIDER_CONTACT = z.infer<typeof ccrI16ProviderContactSchema>;

/**
 * CCR_I16.CLINICAL_ORDER_TIMING group schema
 * Defines the structure and validation rules for the CCR_I16.CLINICAL_ORDER_TIMING group
 */
export const ccrI16ClinicalOrderTimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.CLINICAL_ORDER_TIMING",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.CLINICAL_ORDER_TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.CLINICAL_ORDER_TIMING schema
 */
export type CCR_I16_CLINICAL_ORDER_TIMING = z.infer<typeof ccrI16ClinicalOrderTimingSchema>;

/**
 * CCR_I16.CLINICAL_ORDER_OBJECT group schema
 * Defines the structure and validation rules for the CCR_I16.CLINICAL_ORDER_OBJECT group
 */
export const ccrI16ClinicalOrderObjectSchema = z
  .object({
    OBR: segments.obrSchema,
    RXO: segments.rxoSchema,
    ODS: segments.odsSchema,
    PR1: segments.pr1Schema
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.CLINICAL_ORDER_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.CLINICAL_ORDER_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.CLINICAL_ORDER_OBJECT schema
 */
export type CCR_I16_CLINICAL_ORDER_OBJECT = z.infer<typeof ccrI16ClinicalOrderObjectSchema>;

/**
 * CCR_I16.PATIENT group schema
 * Defines the structure and validation rules for the CCR_I16.PATIENT group
 */
export const ccrI16PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.PATIENT",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.PATIENT schema
 */
export type CCR_I16_PATIENT = z.infer<typeof ccrI16PatientSchema>;

/**
 * CCR_I16.INSURANCE group schema
 * Defines the structure and validation rules for the CCR_I16.INSURANCE group
 */
export const ccrI16InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.INSURANCE",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.INSURANCE schema
 */
export type CCR_I16_INSURANCE = z.infer<typeof ccrI16InsuranceSchema>;

/**
 * CCR_I16.RESOURCE_OBJECT group schema
 * Defines the structure and validation rules for the CCR_I16.RESOURCE_OBJECT group
 */
export const ccrI16ResourceObjectSchema = z
  .object({
    AIS: segments.aisSchema,
    AIG: segments.aigSchema,
    AIL: segments.ailSchema,
    AIP: segments.aipSchema
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.RESOURCE_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.RESOURCE_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.RESOURCE_OBJECT schema
 */
export type CCR_I16_RESOURCE_OBJECT = z.infer<typeof ccrI16ResourceObjectSchema>;

/**
 * CCR_I16.CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CCR_I16.CLINICAL_HISTORY_OBJECT group
 */
export const ccrI16ClinicalHistoryObjectSchema = z
  .object({
    OBR: segments.obrSchema,
    ODS: segments.odsSchema,
    PR1: segments.pr1Schema,
    RF1: segments.rf1Schema,
    AL1: segments.al1Schema,
    IAM: segments.iamSchema,
    ACC: segments.accSchema,
    RMI: segments.rmiSchema,
    DB1: segments.db1Schema,
    DG1: segments.dg1Schema,
    DRG: segments.drgSchema
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.CLINICAL_HISTORY_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.CLINICAL_HISTORY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.CLINICAL_HISTORY_OBJECT schema
 */
export type CCR_I16_CLINICAL_HISTORY_OBJECT = z.infer<typeof ccrI16ClinicalHistoryObjectSchema>;

/**
 * CCR_I16.ROLE_CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CCR_I16.ROLE_CLINICAL_HISTORY_OBJECT group
 */
export const ccrI16RoleClinicalHistoryObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.ROLE_CLINICAL_HISTORY_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.ROLE_CLINICAL_HISTORY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.ROLE_CLINICAL_HISTORY_OBJECT schema
 */
export type CCR_I16_ROLE_CLINICAL_HISTORY_OBJECT = z.infer<
  typeof ccrI16RoleClinicalHistoryObjectSchema
>;

/**
 * CCR_I16.PATIENT_VISITS group schema
 * Defines the structure and validation rules for the CCR_I16.PATIENT_VISITS group
 */
export const ccrI16PatientVisitsSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.PATIENT_VISITS",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.PATIENT_VISITS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.PATIENT_VISITS schema
 */
export type CCR_I16_PATIENT_VISITS = z.infer<typeof ccrI16PatientVisitsSchema>;

/**
 * CCR_I16.MEDICATION_ORDER_DETAIL group schema
 * Defines the structure and validation rules for the CCR_I16.MEDICATION_ORDER_DETAIL group
 */
export const ccrI16MedicationOrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.MEDICATION_ORDER_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.MEDICATION_ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.MEDICATION_ORDER_DETAIL schema
 */
export type CCR_I16_MEDICATION_ORDER_DETAIL = z.infer<typeof ccrI16MedicationOrderDetailSchema>;

/**
 * CCR_I16.MEDICATION_ENCODING_DETAIL group schema
 * Defines the structure and validation rules for the CCR_I16.MEDICATION_ENCODING_DETAIL group
 */
export const ccrI16MedicationEncodingDetailSchema = z
  .object({
    RXE: segments.rxeSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.MEDICATION_ENCODING_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.MEDICATION_ENCODING_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.MEDICATION_ENCODING_DETAIL schema
 */
export type CCR_I16_MEDICATION_ENCODING_DETAIL = z.infer<
  typeof ccrI16MedicationEncodingDetailSchema
>;

/**
 * CCR_I16.MEDICATION_ADMINISTRATION_DETAIL group schema
 * Defines the structure and validation rules for the CCR_I16.MEDICATION_ADMINISTRATION_DETAIL group
 */
export const ccrI16MedicationAdministrationDetailSchema = z
  .object({
    RXA: z.array(segments.rxaSchema),
    RXR: segments.rxrSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.MEDICATION_ADMINISTRATION_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.MEDICATION_ADMINISTRATION_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.MEDICATION_ADMINISTRATION_DETAIL schema
 */
export type CCR_I16_MEDICATION_ADMINISTRATION_DETAIL = z.infer<
  typeof ccrI16MedicationAdministrationDetailSchema
>;

/**
 * CCR_I16.ROLE_PROBLEM_OBJECT group schema
 * Defines the structure and validation rules for the CCR_I16.ROLE_PROBLEM_OBJECT group
 */
export const ccrI16RoleProblemObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.ROLE_PROBLEM_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.ROLE_PROBLEM_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.ROLE_PROBLEM_OBJECT schema
 */
export type CCR_I16_ROLE_PROBLEM_OBJECT = z.infer<typeof ccrI16RoleProblemObjectSchema>;

/**
 * CCR_I16.ROLE_GOAL_OBJECT group schema
 * Defines the structure and validation rules for the CCR_I16.ROLE_GOAL_OBJECT group
 */
export const ccrI16RoleGoalObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.ROLE_GOAL_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.ROLE_GOAL_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.ROLE_GOAL_OBJECT schema
 */
export type CCR_I16_ROLE_GOAL_OBJECT = z.infer<typeof ccrI16RoleGoalObjectSchema>;

/**
 * CCR_I16.ROLE_PATHWAY_OBJECT group schema
 * Defines the structure and validation rules for the CCR_I16.ROLE_PATHWAY_OBJECT group
 */
export const ccrI16RolePathwayObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.ROLE_PATHWAY_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.ROLE_PATHWAY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.ROLE_PATHWAY_OBJECT schema
 */
export type CCR_I16_ROLE_PATHWAY_OBJECT = z.infer<typeof ccrI16RolePathwayObjectSchema>;

/**
 * CCR_I16.CLINICAL_ORDER_DETAIL group schema
 * Defines the structure and validation rules for the CCR_I16.CLINICAL_ORDER_DETAIL group
 */
export const ccrI16ClinicalOrderDetailSchema = z
  .object({
    CLINICAL_ORDER_OBJECT: ccrI16ClinicalOrderObjectSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.CLINICAL_ORDER_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.CLINICAL_ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.CLINICAL_ORDER_DETAIL schema
 */
export type CCR_I16_CLINICAL_ORDER_DETAIL = z.infer<typeof ccrI16ClinicalOrderDetailSchema>;

/**
 * CCR_I16.RESOURCE_DETAIL group schema
 * Defines the structure and validation rules for the CCR_I16.RESOURCE_DETAIL group
 */
export const ccrI16ResourceDetailSchema = z
  .object({
    RESOURCE_OBJECT: ccrI16ResourceObjectSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.RESOURCE_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.RESOURCE_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.RESOURCE_DETAIL schema
 */
export type CCR_I16_RESOURCE_DETAIL = z.infer<typeof ccrI16ResourceDetailSchema>;

/**
 * CCR_I16.CLINICAL_HISTORY_DETAIL group schema
 * Defines the structure and validation rules for the CCR_I16.CLINICAL_HISTORY_DETAIL group
 */
export const ccrI16ClinicalHistoryDetailSchema = z
  .object({
    CLINICAL_HISTORY_OBJECT: ccrI16ClinicalHistoryObjectSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.CLINICAL_HISTORY_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.CLINICAL_HISTORY_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.CLINICAL_HISTORY_DETAIL schema
 */
export type CCR_I16_CLINICAL_HISTORY_DETAIL = z.infer<typeof ccrI16ClinicalHistoryDetailSchema>;

/**
 * CCR_I16.ROLE_CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CCR_I16.ROLE_CLINICAL_HISTORY group
 */
export const ccrI16RoleClinicalHistorySchema = z
  .object({
    ROLE_CLINICAL_HISTORY_OBJECT: ccrI16RoleClinicalHistoryObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.ROLE_CLINICAL_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.ROLE_CLINICAL_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.ROLE_CLINICAL_HISTORY schema
 */
export type CCR_I16_ROLE_CLINICAL_HISTORY = z.infer<typeof ccrI16RoleClinicalHistorySchema>;

/**
 * CCR_I16.MEDICATION_HISTORY group schema
 * Defines the structure and validation rules for the CCR_I16.MEDICATION_HISTORY group
 */
export const ccrI16MedicationHistorySchema = z
  .object({
    ORC: segments.orcSchema,
    MEDICATION_ORDER_DETAIL: ccrI16MedicationOrderDetailSchema.optional(),
    MEDICATION_ENCODING_DETAIL: ccrI16MedicationEncodingDetailSchema.optional(),
    MEDICATION_ADMINISTRATION_DETAIL: z
      .array(ccrI16MedicationAdministrationDetailSchema)
      .optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.MEDICATION_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.MEDICATION_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.MEDICATION_HISTORY schema
 */
export type CCR_I16_MEDICATION_HISTORY = z.infer<typeof ccrI16MedicationHistorySchema>;

/**
 * CCR_I16.ROLE_PROBLEM group schema
 * Defines the structure and validation rules for the CCR_I16.ROLE_PROBLEM group
 */
export const ccrI16RoleProblemSchema = z
  .object({
    ROLE_PROBLEM_OBJECT: ccrI16RoleProblemObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.ROLE_PROBLEM",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.ROLE_PROBLEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.ROLE_PROBLEM schema
 */
export type CCR_I16_ROLE_PROBLEM = z.infer<typeof ccrI16RoleProblemSchema>;

/**
 * CCR_I16.ROLE_GOAL group schema
 * Defines the structure and validation rules for the CCR_I16.ROLE_GOAL group
 */
export const ccrI16RoleGoalSchema = z
  .object({
    ROLE_GOAL_OBJECT: ccrI16RoleGoalObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.ROLE_GOAL",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.ROLE_GOAL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.ROLE_GOAL schema
 */
export type CCR_I16_ROLE_GOAL = z.infer<typeof ccrI16RoleGoalSchema>;

/**
 * CCR_I16.ROLE_PATHWAY group schema
 * Defines the structure and validation rules for the CCR_I16.ROLE_PATHWAY group
 */
export const ccrI16RolePathwaySchema = z
  .object({
    ROLE_PATHWAY_OBJECT: ccrI16RolePathwayObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.ROLE_PATHWAY",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.ROLE_PATHWAY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.ROLE_PATHWAY schema
 */
export type CCR_I16_ROLE_PATHWAY = z.infer<typeof ccrI16RolePathwaySchema>;

/**
 * CCR_I16.CLINICAL_ORDER group schema
 * Defines the structure and validation rules for the CCR_I16.CLINICAL_ORDER group
 */
export const ccrI16ClinicalOrderSchema = z
  .object({
    ORC: segments.orcSchema,
    CLINICAL_ORDER_TIMING: z.array(ccrI16ClinicalOrderTimingSchema).optional(),
    CLINICAL_ORDER_DETAIL: z.array(ccrI16ClinicalOrderDetailSchema),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.CLINICAL_ORDER",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.CLINICAL_ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.CLINICAL_ORDER schema
 */
export type CCR_I16_CLINICAL_ORDER = z.infer<typeof ccrI16ClinicalOrderSchema>;

/**
 * CCR_I16.RESOURCES group schema
 * Defines the structure and validation rules for the CCR_I16.RESOURCES group
 */
export const ccrI16ResourcesSchema = z
  .object({
    RGS: segments.rgsSchema,
    RESOURCE_DETAIL: z.array(ccrI16ResourceDetailSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.RESOURCES",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.RESOURCES group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.RESOURCES schema
 */
export type CCR_I16_RESOURCES = z.infer<typeof ccrI16ResourcesSchema>;

/**
 * CCR_I16.CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CCR_I16.CLINICAL_HISTORY group
 */
export const ccrI16ClinicalHistorySchema = z
  .object({
    ORC: segments.orcSchema,
    CLINICAL_HISTORY_DETAIL: z.array(ccrI16ClinicalHistoryDetailSchema).optional(),
    ROLE_CLINICAL_HISTORY: z.array(ccrI16RoleClinicalHistorySchema).optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.CLINICAL_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.CLINICAL_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.CLINICAL_HISTORY schema
 */
export type CCR_I16_CLINICAL_HISTORY = z.infer<typeof ccrI16ClinicalHistorySchema>;

/**
 * CCR_I16.PROBLEM group schema
 * Defines the structure and validation rules for the CCR_I16.PROBLEM group
 */
export const ccrI16ProblemSchema = z
  .object({
    PRB: segments.prbSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_PROBLEM: z.array(ccrI16RoleProblemSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.PROBLEM",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.PROBLEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.PROBLEM schema
 */
export type CCR_I16_PROBLEM = z.infer<typeof ccrI16ProblemSchema>;

/**
 * CCR_I16.GOAL group schema
 * Defines the structure and validation rules for the CCR_I16.GOAL group
 */
export const ccrI16GoalSchema = z
  .object({
    GOL: segments.golSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_GOAL: z.array(ccrI16RoleGoalSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.GOAL",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.GOAL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.GOAL schema
 */
export type CCR_I16_GOAL = z.infer<typeof ccrI16GoalSchema>;

/**
 * CCR_I16.PATHWAY group schema
 * Defines the structure and validation rules for the CCR_I16.PATHWAY group
 */
export const ccrI16PathwaySchema = z
  .object({
    PTH: segments.pthSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_PATHWAY: z.array(ccrI16RolePathwaySchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.PATHWAY",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.PATHWAY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.PATHWAY schema
 */
export type CCR_I16_PATHWAY = z.infer<typeof ccrI16PathwaySchema>;

/**
 * CCR_I16.APPOINTMENT_HISTORY group schema
 * Defines the structure and validation rules for the CCR_I16.APPOINTMENT_HISTORY group
 */
export const ccrI16AppointmentHistorySchema = z
  .object({
    SCH: segments.schSchema,
    RESOURCES: z.array(ccrI16ResourcesSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16.APPOINTMENT_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16.APPOINTMENT_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCR_I16.APPOINTMENT_HISTORY schema
 */
export type CCR_I16_APPOINTMENT_HISTORY = z.infer<typeof ccrI16AppointmentHistorySchema>;

/**
 * CCR_I16 message schema
 * Defines the structure and validation rules for the CCR_I16 message
 */
export const ccr_i16Schema: z.ZodTypeAny = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    RF1: z.array(segments.rf1Schema),
    PROVIDER_CONTACT: z.array(ccrI16ProviderContactSchema),
    CLINICAL_ORDER: z.array(ccrI16ClinicalOrderSchema).optional(),
    PATIENT: z.array(ccrI16PatientSchema),
    NK1: z.array(segments.nk1Schema).optional(),
    INSURANCE: z.array(ccrI16InsuranceSchema).optional(),
    APPOINTMENT_HISTORY: z.array(ccrI16AppointmentHistorySchema).optional(),
    CLINICAL_HISTORY: z.array(ccrI16ClinicalHistorySchema).optional(),
    PATIENT_VISITS: z.array(ccrI16PatientVisitsSchema),
    MEDICATION_HISTORY: z.array(ccrI16MedicationHistorySchema).optional(),
    PROBLEM: z.array(ccrI16ProblemSchema).optional(),
    GOAL: z.array(ccrI16GoalSchema).optional(),
    PATHWAY: z.array(ccrI16PathwaySchema).optional(),
    REL: z.array(segments.relSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCR_I16",
    version: "2.7",
    description: "HL7 v2.7 CCR_I16 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the CCR_I16 schema
 */
export type CCR_I16 = z.infer<typeof ccr_i16Schema>;

/**
 * Default export for convenience
 */
export default ccr_i16Schema;
