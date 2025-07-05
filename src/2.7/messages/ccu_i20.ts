import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 CCU_I20 Message
 *
 * HL7 v2.7 CCU_I20 message definition
 * Contains segment definitions and constraints for the CCU_I20 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CCU_I20.PROVIDER_CONTACT group schema
 * Defines the structure and validation rules for the CCU_I20.PROVIDER_CONTACT group
 */
export const ccuI20ProviderContactSchema = z
  .object({
    PRD: segments.prdSchema,
    CTD: z.array(segments.ctdSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.PROVIDER_CONTACT",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.PROVIDER_CONTACT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.PROVIDER_CONTACT schema
 */
export type CCU_I20_PROVIDER_CONTACT = z.infer<typeof ccuI20ProviderContactSchema>;

/**
 * CCU_I20.PATIENT group schema
 * Defines the structure and validation rules for the CCU_I20.PATIENT group
 */
export const ccuI20PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.PATIENT",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.PATIENT schema
 */
export type CCU_I20_PATIENT = z.infer<typeof ccuI20PatientSchema>;

/**
 * CCU_I20.INSURANCE group schema
 * Defines the structure and validation rules for the CCU_I20.INSURANCE group
 */
export const ccuI20InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.INSURANCE",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.INSURANCE schema
 */
export type CCU_I20_INSURANCE = z.infer<typeof ccuI20InsuranceSchema>;

/**
 * CCU_I20.RESOURCE_OBJECT group schema
 * Defines the structure and validation rules for the CCU_I20.RESOURCE_OBJECT group
 */
export const ccuI20ResourceObjectSchema = z
  .object({
    AIS: segments.aisSchema,
    AIG: segments.aigSchema,
    AIL: segments.ailSchema,
    AIP: segments.aipSchema
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.RESOURCE_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.RESOURCE_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.RESOURCE_OBJECT schema
 */
export type CCU_I20_RESOURCE_OBJECT = z.infer<typeof ccuI20ResourceObjectSchema>;

/**
 * CCU_I20.CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CCU_I20.CLINICAL_HISTORY_OBJECT group
 */
export const ccuI20ClinicalHistoryObjectSchema = z
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
    DRG: segments.drgSchema,
    PDA: segments.pdaSchema
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.CLINICAL_HISTORY_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.CLINICAL_HISTORY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.CLINICAL_HISTORY_OBJECT schema
 */
export type CCU_I20_CLINICAL_HISTORY_OBJECT = z.infer<typeof ccuI20ClinicalHistoryObjectSchema>;

/**
 * CCU_I20.ROLE_CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CCU_I20.ROLE_CLINICAL_HISTORY_OBJECT group
 */
export const ccuI20RoleClinicalHistoryObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.ROLE_CLINICAL_HISTORY_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.ROLE_CLINICAL_HISTORY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.ROLE_CLINICAL_HISTORY_OBJECT schema
 */
export type CCU_I20_ROLE_CLINICAL_HISTORY_OBJECT = z.infer<
  typeof ccuI20RoleClinicalHistoryObjectSchema
>;

/**
 * CCU_I20.PATIENT_VISITS group schema
 * Defines the structure and validation rules for the CCU_I20.PATIENT_VISITS group
 */
export const ccuI20PatientVisitsSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.PATIENT_VISITS",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.PATIENT_VISITS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.PATIENT_VISITS schema
 */
export type CCU_I20_PATIENT_VISITS = z.infer<typeof ccuI20PatientVisitsSchema>;

/**
 * CCU_I20.MEDICATION_ORDER_DETAIL group schema
 * Defines the structure and validation rules for the CCU_I20.MEDICATION_ORDER_DETAIL group
 */
export const ccuI20MedicationOrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.MEDICATION_ORDER_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.MEDICATION_ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.MEDICATION_ORDER_DETAIL schema
 */
export type CCU_I20_MEDICATION_ORDER_DETAIL = z.infer<typeof ccuI20MedicationOrderDetailSchema>;

/**
 * CCU_I20.MEDICATION_ENCODING_DETAIL group schema
 * Defines the structure and validation rules for the CCU_I20.MEDICATION_ENCODING_DETAIL group
 */
export const ccuI20MedicationEncodingDetailSchema = z
  .object({
    RXE: segments.rxeSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.MEDICATION_ENCODING_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.MEDICATION_ENCODING_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.MEDICATION_ENCODING_DETAIL schema
 */
export type CCU_I20_MEDICATION_ENCODING_DETAIL = z.infer<
  typeof ccuI20MedicationEncodingDetailSchema
>;

/**
 * CCU_I20.MEDICATION_ADMINISTRATION_DETAIL group schema
 * Defines the structure and validation rules for the CCU_I20.MEDICATION_ADMINISTRATION_DETAIL group
 */
export const ccuI20MedicationAdministrationDetailSchema = z
  .object({
    RXA: z.array(segments.rxaSchema),
    RXR: segments.rxrSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.MEDICATION_ADMINISTRATION_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.MEDICATION_ADMINISTRATION_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.MEDICATION_ADMINISTRATION_DETAIL schema
 */
export type CCU_I20_MEDICATION_ADMINISTRATION_DETAIL = z.infer<
  typeof ccuI20MedicationAdministrationDetailSchema
>;

/**
 * CCU_I20.ROLE_PROBLEM_OBJECT group schema
 * Defines the structure and validation rules for the CCU_I20.ROLE_PROBLEM_OBJECT group
 */
export const ccuI20RoleProblemObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.ROLE_PROBLEM_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.ROLE_PROBLEM_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.ROLE_PROBLEM_OBJECT schema
 */
export type CCU_I20_ROLE_PROBLEM_OBJECT = z.infer<typeof ccuI20RoleProblemObjectSchema>;

/**
 * CCU_I20.ROLE_GOAL_OBJECT group schema
 * Defines the structure and validation rules for the CCU_I20.ROLE_GOAL_OBJECT group
 */
export const ccuI20RoleGoalObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.ROLE_GOAL_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.ROLE_GOAL_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.ROLE_GOAL_OBJECT schema
 */
export type CCU_I20_ROLE_GOAL_OBJECT = z.infer<typeof ccuI20RoleGoalObjectSchema>;

/**
 * CCU_I20.ROLE_PATHWAY_OBJECT group schema
 * Defines the structure and validation rules for the CCU_I20.ROLE_PATHWAY_OBJECT group
 */
export const ccuI20RolePathwayObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.ROLE_PATHWAY_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.ROLE_PATHWAY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.ROLE_PATHWAY_OBJECT schema
 */
export type CCU_I20_ROLE_PATHWAY_OBJECT = z.infer<typeof ccuI20RolePathwayObjectSchema>;

/**
 * CCU_I20.RESOURCE_DETAIL group schema
 * Defines the structure and validation rules for the CCU_I20.RESOURCE_DETAIL group
 */
export const ccuI20ResourceDetailSchema = z
  .object({
    RESOURCE_OBJECT: ccuI20ResourceObjectSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.RESOURCE_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.RESOURCE_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.RESOURCE_DETAIL schema
 */
export type CCU_I20_RESOURCE_DETAIL = z.infer<typeof ccuI20ResourceDetailSchema>;

/**
 * CCU_I20.CLINICAL_HISTORY_DETAIL group schema
 * Defines the structure and validation rules for the CCU_I20.CLINICAL_HISTORY_DETAIL group
 */
export const ccuI20ClinicalHistoryDetailSchema = z
  .object({
    CLINICAL_HISTORY_OBJECT: ccuI20ClinicalHistoryObjectSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.CLINICAL_HISTORY_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.CLINICAL_HISTORY_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.CLINICAL_HISTORY_DETAIL schema
 */
export type CCU_I20_CLINICAL_HISTORY_DETAIL = z.infer<typeof ccuI20ClinicalHistoryDetailSchema>;

/**
 * CCU_I20.ROLE_CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CCU_I20.ROLE_CLINICAL_HISTORY group
 */
export const ccuI20RoleClinicalHistorySchema = z
  .object({
    ROLE_CLINICAL_HISTORY_OBJECT: ccuI20RoleClinicalHistoryObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.ROLE_CLINICAL_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.ROLE_CLINICAL_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.ROLE_CLINICAL_HISTORY schema
 */
export type CCU_I20_ROLE_CLINICAL_HISTORY = z.infer<typeof ccuI20RoleClinicalHistorySchema>;

/**
 * CCU_I20.MEDICATION_HISTORY group schema
 * Defines the structure and validation rules for the CCU_I20.MEDICATION_HISTORY group
 */
export const ccuI20MedicationHistorySchema = z
  .object({
    ORC: segments.orcSchema,
    MEDICATION_ORDER_DETAIL: ccuI20MedicationOrderDetailSchema.optional(),
    MEDICATION_ENCODING_DETAIL: ccuI20MedicationEncodingDetailSchema.optional(),
    MEDICATION_ADMINISTRATION_DETAIL: z
      .array(ccuI20MedicationAdministrationDetailSchema)
      .optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.MEDICATION_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.MEDICATION_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.MEDICATION_HISTORY schema
 */
export type CCU_I20_MEDICATION_HISTORY = z.infer<typeof ccuI20MedicationHistorySchema>;

/**
 * CCU_I20.ROLE_PROBLEM group schema
 * Defines the structure and validation rules for the CCU_I20.ROLE_PROBLEM group
 */
export const ccuI20RoleProblemSchema = z
  .object({
    ROLE_PROBLEM_OBJECT: ccuI20RoleProblemObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.ROLE_PROBLEM",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.ROLE_PROBLEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.ROLE_PROBLEM schema
 */
export type CCU_I20_ROLE_PROBLEM = z.infer<typeof ccuI20RoleProblemSchema>;

/**
 * CCU_I20.ROLE_GOAL group schema
 * Defines the structure and validation rules for the CCU_I20.ROLE_GOAL group
 */
export const ccuI20RoleGoalSchema = z
  .object({
    ROLE_GOAL_OBJECT: ccuI20RoleGoalObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.ROLE_GOAL",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.ROLE_GOAL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.ROLE_GOAL schema
 */
export type CCU_I20_ROLE_GOAL = z.infer<typeof ccuI20RoleGoalSchema>;

/**
 * CCU_I20.ROLE_PATHWAY group schema
 * Defines the structure and validation rules for the CCU_I20.ROLE_PATHWAY group
 */
export const ccuI20RolePathwaySchema = z
  .object({
    ROLE_PATHWAY_OBJECT: ccuI20RolePathwayObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.ROLE_PATHWAY",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.ROLE_PATHWAY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.ROLE_PATHWAY schema
 */
export type CCU_I20_ROLE_PATHWAY = z.infer<typeof ccuI20RolePathwaySchema>;

/**
 * CCU_I20.RESOURCES group schema
 * Defines the structure and validation rules for the CCU_I20.RESOURCES group
 */
export const ccuI20ResourcesSchema = z
  .object({
    RGS: segments.rgsSchema,
    RESOURCE_DETAIL: z.array(ccuI20ResourceDetailSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.RESOURCES",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.RESOURCES group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.RESOURCES schema
 */
export type CCU_I20_RESOURCES = z.infer<typeof ccuI20ResourcesSchema>;

/**
 * CCU_I20.CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CCU_I20.CLINICAL_HISTORY group
 */
export const ccuI20ClinicalHistorySchema = z
  .object({
    ORC: segments.orcSchema,
    CLINICAL_HISTORY_DETAIL: z.array(ccuI20ClinicalHistoryDetailSchema).optional(),
    ROLE_CLINICAL_HISTORY: z.array(ccuI20RoleClinicalHistorySchema).optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.CLINICAL_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.CLINICAL_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.CLINICAL_HISTORY schema
 */
export type CCU_I20_CLINICAL_HISTORY = z.infer<typeof ccuI20ClinicalHistorySchema>;

/**
 * CCU_I20.PROBLEM group schema
 * Defines the structure and validation rules for the CCU_I20.PROBLEM group
 */
export const ccuI20ProblemSchema = z
  .object({
    PRB: segments.prbSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_PROBLEM: z.array(ccuI20RoleProblemSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.PROBLEM",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.PROBLEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.PROBLEM schema
 */
export type CCU_I20_PROBLEM = z.infer<typeof ccuI20ProblemSchema>;

/**
 * CCU_I20.GOAL group schema
 * Defines the structure and validation rules for the CCU_I20.GOAL group
 */
export const ccuI20GoalSchema = z
  .object({
    GOL: segments.golSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_GOAL: z.array(ccuI20RoleGoalSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.GOAL",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.GOAL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.GOAL schema
 */
export type CCU_I20_GOAL = z.infer<typeof ccuI20GoalSchema>;

/**
 * CCU_I20.PATHWAY group schema
 * Defines the structure and validation rules for the CCU_I20.PATHWAY group
 */
export const ccuI20PathwaySchema = z
  .object({
    PTH: segments.pthSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_PATHWAY: z.array(ccuI20RolePathwaySchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.PATHWAY",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.PATHWAY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.PATHWAY schema
 */
export type CCU_I20_PATHWAY = z.infer<typeof ccuI20PathwaySchema>;

/**
 * CCU_I20.APPOINTMENT_HISTORY group schema
 * Defines the structure and validation rules for the CCU_I20.APPOINTMENT_HISTORY group
 */
export const ccuI20AppointmentHistorySchema = z
  .object({
    SCH: segments.schSchema,
    RESOURCES: z.array(ccuI20ResourcesSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20.APPOINTMENT_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20.APPOINTMENT_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCU_I20.APPOINTMENT_HISTORY schema
 */
export type CCU_I20_APPOINTMENT_HISTORY = z.infer<typeof ccuI20AppointmentHistorySchema>;

/**
 * CCU_I20 message schema
 * Defines the structure and validation rules for the CCU_I20 message
 */
export const ccu_i20Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    RF1: segments.rf1Schema,
    PROVIDER_CONTACT: z.array(ccuI20ProviderContactSchema).optional(),
    PATIENT: z.array(ccuI20PatientSchema).optional(),
    NK1: z.array(segments.nk1Schema).optional(),
    INSURANCE: z.array(ccuI20InsuranceSchema).optional(),
    APPOINTMENT_HISTORY: z.array(ccuI20AppointmentHistorySchema).optional(),
    CLINICAL_HISTORY: z.array(ccuI20ClinicalHistorySchema).optional(),
    PATIENT_VISITS: z.array(ccuI20PatientVisitsSchema),
    MEDICATION_HISTORY: z.array(ccuI20MedicationHistorySchema).optional(),
    PROBLEM: z.array(ccuI20ProblemSchema).optional(),
    GOAL: z.array(ccuI20GoalSchema).optional(),
    PATHWAY: z.array(ccuI20PathwaySchema).optional(),
    REL: z.array(segments.relSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCU_I20",
    version: "2.7",
    description: "HL7 v2.7 CCU_I20 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the CCU_I20 schema
 */
export type CCU_I20 = z.infer<typeof ccu_i20Schema>;

/**
 * Default export for convenience
 */
export default ccu_i20Schema;
