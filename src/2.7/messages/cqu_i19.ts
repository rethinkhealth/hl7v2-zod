import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 CQU_I19 Message
 *
 * HL7 v2.7 CQU_I19 message definition
 * Contains segment definitions and constraints for the CQU_I19 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CQU_I19.PROVIDER_CONTACT group schema
 * Defines the structure and validation rules for the CQU_I19.PROVIDER_CONTACT group
 */
export const cquI19ProviderContactSchema = z
  .object({
    PRD: segments.prdSchema,
    CTD: z.array(segments.ctdSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.PROVIDER_CONTACT",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.PROVIDER_CONTACT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.PROVIDER_CONTACT schema
 */
export type CQU_I19_PROVIDER_CONTACT = z.infer<typeof cquI19ProviderContactSchema>;

/**
 * CQU_I19.PATIENT group schema
 * Defines the structure and validation rules for the CQU_I19.PATIENT group
 */
export const cquI19PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.PATIENT",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.PATIENT schema
 */
export type CQU_I19_PATIENT = z.infer<typeof cquI19PatientSchema>;

/**
 * CQU_I19.INSURANCE group schema
 * Defines the structure and validation rules for the CQU_I19.INSURANCE group
 */
export const cquI19InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.INSURANCE",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.INSURANCE schema
 */
export type CQU_I19_INSURANCE = z.infer<typeof cquI19InsuranceSchema>;

/**
 * CQU_I19.RESOURCE_OBJECT group schema
 * Defines the structure and validation rules for the CQU_I19.RESOURCE_OBJECT group
 */
export const cquI19ResourceObjectSchema = z
  .object({
    AIS: segments.aisSchema,
    AIG: segments.aigSchema,
    AIL: segments.ailSchema,
    AIP: segments.aipSchema
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.RESOURCE_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.RESOURCE_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.RESOURCE_OBJECT schema
 */
export type CQU_I19_RESOURCE_OBJECT = z.infer<typeof cquI19ResourceObjectSchema>;

/**
 * CQU_I19.CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CQU_I19.CLINICAL_HISTORY_OBJECT group
 */
export const cquI19ClinicalHistoryObjectSchema = z
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
    title: "CQU_I19.CLINICAL_HISTORY_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.CLINICAL_HISTORY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.CLINICAL_HISTORY_OBJECT schema
 */
export type CQU_I19_CLINICAL_HISTORY_OBJECT = z.infer<typeof cquI19ClinicalHistoryObjectSchema>;

/**
 * CQU_I19.ROLE_CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CQU_I19.ROLE_CLINICAL_HISTORY_OBJECT group
 */
export const cquI19RoleClinicalHistoryObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.ROLE_CLINICAL_HISTORY_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.ROLE_CLINICAL_HISTORY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.ROLE_CLINICAL_HISTORY_OBJECT schema
 */
export type CQU_I19_ROLE_CLINICAL_HISTORY_OBJECT = z.infer<
  typeof cquI19RoleClinicalHistoryObjectSchema
>;

/**
 * CQU_I19.PATIENT_VISITS group schema
 * Defines the structure and validation rules for the CQU_I19.PATIENT_VISITS group
 */
export const cquI19PatientVisitsSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.PATIENT_VISITS",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.PATIENT_VISITS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.PATIENT_VISITS schema
 */
export type CQU_I19_PATIENT_VISITS = z.infer<typeof cquI19PatientVisitsSchema>;

/**
 * CQU_I19.MEDICATION_ORDER_DETAIL group schema
 * Defines the structure and validation rules for the CQU_I19.MEDICATION_ORDER_DETAIL group
 */
export const cquI19MedicationOrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.MEDICATION_ORDER_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.MEDICATION_ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.MEDICATION_ORDER_DETAIL schema
 */
export type CQU_I19_MEDICATION_ORDER_DETAIL = z.infer<typeof cquI19MedicationOrderDetailSchema>;

/**
 * CQU_I19.MEDICATION_ENCODING_DETAIL group schema
 * Defines the structure and validation rules for the CQU_I19.MEDICATION_ENCODING_DETAIL group
 */
export const cquI19MedicationEncodingDetailSchema = z
  .object({
    RXE: segments.rxeSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.MEDICATION_ENCODING_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.MEDICATION_ENCODING_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.MEDICATION_ENCODING_DETAIL schema
 */
export type CQU_I19_MEDICATION_ENCODING_DETAIL = z.infer<
  typeof cquI19MedicationEncodingDetailSchema
>;

/**
 * CQU_I19.MEDICATION_ADMINISTRATION_DETAIL group schema
 * Defines the structure and validation rules for the CQU_I19.MEDICATION_ADMINISTRATION_DETAIL group
 */
export const cquI19MedicationAdministrationDetailSchema = z
  .object({
    RXA: z.array(segments.rxaSchema),
    RXR: segments.rxrSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.MEDICATION_ADMINISTRATION_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.MEDICATION_ADMINISTRATION_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.MEDICATION_ADMINISTRATION_DETAIL schema
 */
export type CQU_I19_MEDICATION_ADMINISTRATION_DETAIL = z.infer<
  typeof cquI19MedicationAdministrationDetailSchema
>;

/**
 * CQU_I19.ROLE_PROBLEM_OBJECT group schema
 * Defines the structure and validation rules for the CQU_I19.ROLE_PROBLEM_OBJECT group
 */
export const cquI19RoleProblemObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.ROLE_PROBLEM_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.ROLE_PROBLEM_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.ROLE_PROBLEM_OBJECT schema
 */
export type CQU_I19_ROLE_PROBLEM_OBJECT = z.infer<typeof cquI19RoleProblemObjectSchema>;

/**
 * CQU_I19.ROLE_GOAL_OBJECT group schema
 * Defines the structure and validation rules for the CQU_I19.ROLE_GOAL_OBJECT group
 */
export const cquI19RoleGoalObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.ROLE_GOAL_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.ROLE_GOAL_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.ROLE_GOAL_OBJECT schema
 */
export type CQU_I19_ROLE_GOAL_OBJECT = z.infer<typeof cquI19RoleGoalObjectSchema>;

/**
 * CQU_I19.ROLE_PATHWAY_OBJECT group schema
 * Defines the structure and validation rules for the CQU_I19.ROLE_PATHWAY_OBJECT group
 */
export const cquI19RolePathwayObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.ROLE_PATHWAY_OBJECT",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.ROLE_PATHWAY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.ROLE_PATHWAY_OBJECT schema
 */
export type CQU_I19_ROLE_PATHWAY_OBJECT = z.infer<typeof cquI19RolePathwayObjectSchema>;

/**
 * CQU_I19.RESOURCE_DETAIL group schema
 * Defines the structure and validation rules for the CQU_I19.RESOURCE_DETAIL group
 */
export const cquI19ResourceDetailSchema = z
  .object({
    RESOURCE_OBJECT: cquI19ResourceObjectSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.RESOURCE_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.RESOURCE_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.RESOURCE_DETAIL schema
 */
export type CQU_I19_RESOURCE_DETAIL = z.infer<typeof cquI19ResourceDetailSchema>;

/**
 * CQU_I19.CLINICAL_HISTORY_DETAIL group schema
 * Defines the structure and validation rules for the CQU_I19.CLINICAL_HISTORY_DETAIL group
 */
export const cquI19ClinicalHistoryDetailSchema = z
  .object({
    CLINICAL_HISTORY_OBJECT: cquI19ClinicalHistoryObjectSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.CLINICAL_HISTORY_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.CLINICAL_HISTORY_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.CLINICAL_HISTORY_DETAIL schema
 */
export type CQU_I19_CLINICAL_HISTORY_DETAIL = z.infer<typeof cquI19ClinicalHistoryDetailSchema>;

/**
 * CQU_I19.ROLE_CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CQU_I19.ROLE_CLINICAL_HISTORY group
 */
export const cquI19RoleClinicalHistorySchema = z
  .object({
    ROLE_CLINICAL_HISTORY_OBJECT: cquI19RoleClinicalHistoryObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.ROLE_CLINICAL_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.ROLE_CLINICAL_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.ROLE_CLINICAL_HISTORY schema
 */
export type CQU_I19_ROLE_CLINICAL_HISTORY = z.infer<typeof cquI19RoleClinicalHistorySchema>;

/**
 * CQU_I19.MEDICATION_HISTORY group schema
 * Defines the structure and validation rules for the CQU_I19.MEDICATION_HISTORY group
 */
export const cquI19MedicationHistorySchema = z
  .object({
    ORC: segments.orcSchema,
    MEDICATION_ORDER_DETAIL: cquI19MedicationOrderDetailSchema.optional(),
    MEDICATION_ENCODING_DETAIL: cquI19MedicationEncodingDetailSchema.optional(),
    MEDICATION_ADMINISTRATION_DETAIL: z
      .array(cquI19MedicationAdministrationDetailSchema)
      .optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.MEDICATION_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.MEDICATION_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.MEDICATION_HISTORY schema
 */
export type CQU_I19_MEDICATION_HISTORY = z.infer<typeof cquI19MedicationHistorySchema>;

/**
 * CQU_I19.ROLE_PROBLEM group schema
 * Defines the structure and validation rules for the CQU_I19.ROLE_PROBLEM group
 */
export const cquI19RoleProblemSchema = z
  .object({
    ROLE_PROBLEM_OBJECT: cquI19RoleProblemObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.ROLE_PROBLEM",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.ROLE_PROBLEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.ROLE_PROBLEM schema
 */
export type CQU_I19_ROLE_PROBLEM = z.infer<typeof cquI19RoleProblemSchema>;

/**
 * CQU_I19.ROLE_GOAL group schema
 * Defines the structure and validation rules for the CQU_I19.ROLE_GOAL group
 */
export const cquI19RoleGoalSchema = z
  .object({
    ROLE_GOAL_OBJECT: cquI19RoleGoalObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.ROLE_GOAL",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.ROLE_GOAL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.ROLE_GOAL schema
 */
export type CQU_I19_ROLE_GOAL = z.infer<typeof cquI19RoleGoalSchema>;

/**
 * CQU_I19.ROLE_PATHWAY group schema
 * Defines the structure and validation rules for the CQU_I19.ROLE_PATHWAY group
 */
export const cquI19RolePathwaySchema = z
  .object({
    ROLE_PATHWAY_OBJECT: cquI19RolePathwayObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.ROLE_PATHWAY",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.ROLE_PATHWAY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.ROLE_PATHWAY schema
 */
export type CQU_I19_ROLE_PATHWAY = z.infer<typeof cquI19RolePathwaySchema>;

/**
 * CQU_I19.RESOURCES group schema
 * Defines the structure and validation rules for the CQU_I19.RESOURCES group
 */
export const cquI19ResourcesSchema = z
  .object({
    RGS: segments.rgsSchema,
    RESOURCE_DETAIL: z.array(cquI19ResourceDetailSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.RESOURCES",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.RESOURCES group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.RESOURCES schema
 */
export type CQU_I19_RESOURCES = z.infer<typeof cquI19ResourcesSchema>;

/**
 * CQU_I19.CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CQU_I19.CLINICAL_HISTORY group
 */
export const cquI19ClinicalHistorySchema = z
  .object({
    ORC: segments.orcSchema,
    CLINICAL_HISTORY_DETAIL: z.array(cquI19ClinicalHistoryDetailSchema).optional(),
    ROLE_CLINICAL_HISTORY: z.array(cquI19RoleClinicalHistorySchema).optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.CLINICAL_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.CLINICAL_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.CLINICAL_HISTORY schema
 */
export type CQU_I19_CLINICAL_HISTORY = z.infer<typeof cquI19ClinicalHistorySchema>;

/**
 * CQU_I19.PROBLEM group schema
 * Defines the structure and validation rules for the CQU_I19.PROBLEM group
 */
export const cquI19ProblemSchema = z
  .object({
    PRB: segments.prbSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_PROBLEM: z.array(cquI19RoleProblemSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.PROBLEM",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.PROBLEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.PROBLEM schema
 */
export type CQU_I19_PROBLEM = z.infer<typeof cquI19ProblemSchema>;

/**
 * CQU_I19.GOAL group schema
 * Defines the structure and validation rules for the CQU_I19.GOAL group
 */
export const cquI19GoalSchema = z
  .object({
    GOL: segments.golSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_GOAL: z.array(cquI19RoleGoalSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.GOAL",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.GOAL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.GOAL schema
 */
export type CQU_I19_GOAL = z.infer<typeof cquI19GoalSchema>;

/**
 * CQU_I19.PATHWAY group schema
 * Defines the structure and validation rules for the CQU_I19.PATHWAY group
 */
export const cquI19PathwaySchema = z
  .object({
    PTH: segments.pthSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_PATHWAY: z.array(cquI19RolePathwaySchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.PATHWAY",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.PATHWAY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.PATHWAY schema
 */
export type CQU_I19_PATHWAY = z.infer<typeof cquI19PathwaySchema>;

/**
 * CQU_I19.APPOINTMENT_HISTORY group schema
 * Defines the structure and validation rules for the CQU_I19.APPOINTMENT_HISTORY group
 */
export const cquI19AppointmentHistorySchema = z
  .object({
    SCH: segments.schSchema,
    RESOURCES: z.array(cquI19ResourcesSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19.APPOINTMENT_HISTORY",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19.APPOINTMENT_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CQU_I19.APPOINTMENT_HISTORY schema
 */
export type CQU_I19_APPOINTMENT_HISTORY = z.infer<typeof cquI19AppointmentHistorySchema>;

/**
 * CQU_I19 message schema
 * Defines the structure and validation rules for the CQU_I19 message
 */
export const cqu_i19Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    RF1: segments.rf1Schema,
    PROVIDER_CONTACT: z.array(cquI19ProviderContactSchema).optional(),
    PATIENT: z.array(cquI19PatientSchema).optional(),
    NK1: z.array(segments.nk1Schema).optional(),
    INSURANCE: z.array(cquI19InsuranceSchema).optional(),
    APPOINTMENT_HISTORY: z.array(cquI19AppointmentHistorySchema).optional(),
    CLINICAL_HISTORY: z.array(cquI19ClinicalHistorySchema).optional(),
    PATIENT_VISITS: z.array(cquI19PatientVisitsSchema),
    MEDICATION_HISTORY: z.array(cquI19MedicationHistorySchema).optional(),
    PROBLEM: z.array(cquI19ProblemSchema).optional(),
    GOAL: z.array(cquI19GoalSchema).optional(),
    PATHWAY: z.array(cquI19PathwaySchema).optional(),
    REL: z.array(segments.relSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CQU_I19",
    version: "2.7",
    description: "HL7 v2.7 CQU_I19 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the CQU_I19 schema
 */
export type CQU_I19 = z.infer<typeof cqu_i19Schema>;

/**
 * Default export for convenience
 */
export default cqu_i19Schema;
