import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 CCM_I21 Message
 *
 * HL7 v2.8 CCM_I21 message definition
 * Contains segment definitions and constraints for the CCM_I21 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CCM_I21.INSURANCE group schema
 * Defines the structure and validation rules for the CCM_I21.INSURANCE group
 */
export const ccmI21InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.INSURANCE",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.INSURANCE schema
 */
export type CCM_I21_INSURANCE = z.infer<typeof ccmI21InsuranceSchema>;

/**
 * CCM_I21.RESOURCE_OBJECT group schema
 * Defines the structure and validation rules for the CCM_I21.RESOURCE_OBJECT group
 */
export const ccmI21ResourceObjectSchema = z
  .object({
    AIS: segments.aisSchema,
    AIG: segments.aigSchema,
    AIL: segments.ailSchema,
    AIP: segments.aipSchema
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.RESOURCE_OBJECT",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.RESOURCE_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.RESOURCE_OBJECT schema
 */
export type CCM_I21_RESOURCE_OBJECT = z.infer<typeof ccmI21ResourceObjectSchema>;

/**
 * CCM_I21.RESOURCE_OBSERVATION group schema
 * Defines the structure and validation rules for the CCM_I21.RESOURCE_OBSERVATION group
 */
export const ccmI21ResourceObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.RESOURCE_OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.RESOURCE_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.RESOURCE_OBSERVATION schema
 */
export type CCM_I21_RESOURCE_OBSERVATION = z.infer<typeof ccmI21ResourceObservationSchema>;

/**
 * CCM_I21.CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CCM_I21.CLINICAL_HISTORY_OBJECT group
 */
export const ccmI21ClinicalHistoryObjectSchema = z
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
    title: "CCM_I21.CLINICAL_HISTORY_OBJECT",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.CLINICAL_HISTORY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.CLINICAL_HISTORY_OBJECT schema
 */
export type CCM_I21_CLINICAL_HISTORY_OBJECT = z.infer<typeof ccmI21ClinicalHistoryObjectSchema>;

/**
 * CCM_I21.CLINICAL_HISTORY_OBSERVATION group schema
 * Defines the structure and validation rules for the CCM_I21.CLINICAL_HISTORY_OBSERVATION group
 */
export const ccmI21ClinicalHistoryObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.CLINICAL_HISTORY_OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.CLINICAL_HISTORY_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.CLINICAL_HISTORY_OBSERVATION schema
 */
export type CCM_I21_CLINICAL_HISTORY_OBSERVATION = z.infer<
  typeof ccmI21ClinicalHistoryObservationSchema
>;

/**
 * CCM_I21.ROLE_CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CCM_I21.ROLE_CLINICAL_HISTORY_OBJECT group
 */
export const ccmI21RoleClinicalHistoryObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.ROLE_CLINICAL_HISTORY_OBJECT",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.ROLE_CLINICAL_HISTORY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.ROLE_CLINICAL_HISTORY_OBJECT schema
 */
export type CCM_I21_ROLE_CLINICAL_HISTORY_OBJECT = z.infer<
  typeof ccmI21RoleClinicalHistoryObjectSchema
>;

/**
 * CCM_I21.PATIENT_VISITS group schema
 * Defines the structure and validation rules for the CCM_I21.PATIENT_VISITS group
 */
export const ccmI21PatientVisitsSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.PATIENT_VISITS",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.PATIENT_VISITS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.PATIENT_VISITS schema
 */
export type CCM_I21_PATIENT_VISITS = z.infer<typeof ccmI21PatientVisitsSchema>;

/**
 * CCM_I21.MEDICATION_ORDER_OBSERVATION group schema
 * Defines the structure and validation rules for the CCM_I21.MEDICATION_ORDER_OBSERVATION group
 */
export const ccmI21MedicationOrderObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.MEDICATION_ORDER_OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.MEDICATION_ORDER_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.MEDICATION_ORDER_OBSERVATION schema
 */
export type CCM_I21_MEDICATION_ORDER_OBSERVATION = z.infer<
  typeof ccmI21MedicationOrderObservationSchema
>;

/**
 * CCM_I21.MEDICATION_ENCODING_OBSERVATION group schema
 * Defines the structure and validation rules for the CCM_I21.MEDICATION_ENCODING_OBSERVATION group
 */
export const ccmI21MedicationEncodingObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.MEDICATION_ENCODING_OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.MEDICATION_ENCODING_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.MEDICATION_ENCODING_OBSERVATION schema
 */
export type CCM_I21_MEDICATION_ENCODING_OBSERVATION = z.infer<
  typeof ccmI21MedicationEncodingObservationSchema
>;

/**
 * CCM_I21.MEDICATION_ADMINISTRATION_OBSERVATION group schema
 * Defines the structure and validation rules for the CCM_I21.MEDICATION_ADMINISTRATION_OBSERVATION group
 */
export const ccmI21MedicationAdministrationObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.MEDICATION_ADMINISTRATION_OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.MEDICATION_ADMINISTRATION_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.MEDICATION_ADMINISTRATION_OBSERVATION schema
 */
export type CCM_I21_MEDICATION_ADMINISTRATION_OBSERVATION = z.infer<
  typeof ccmI21MedicationAdministrationObservationSchema
>;

/**
 * CCM_I21.ROLE_PROBLEM_OBJECT group schema
 * Defines the structure and validation rules for the CCM_I21.ROLE_PROBLEM_OBJECT group
 */
export const ccmI21RoleProblemObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.ROLE_PROBLEM_OBJECT",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.ROLE_PROBLEM_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.ROLE_PROBLEM_OBJECT schema
 */
export type CCM_I21_ROLE_PROBLEM_OBJECT = z.infer<typeof ccmI21RoleProblemObjectSchema>;

/**
 * CCM_I21.PROBLEM_OBSERVATION group schema
 * Defines the structure and validation rules for the CCM_I21.PROBLEM_OBSERVATION group
 */
export const ccmI21ProblemObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.PROBLEM_OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.PROBLEM_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.PROBLEM_OBSERVATION schema
 */
export type CCM_I21_PROBLEM_OBSERVATION = z.infer<typeof ccmI21ProblemObservationSchema>;

/**
 * CCM_I21.ROLE_GOAL_OBJECT group schema
 * Defines the structure and validation rules for the CCM_I21.ROLE_GOAL_OBJECT group
 */
export const ccmI21RoleGoalObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.ROLE_GOAL_OBJECT",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.ROLE_GOAL_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.ROLE_GOAL_OBJECT schema
 */
export type CCM_I21_ROLE_GOAL_OBJECT = z.infer<typeof ccmI21RoleGoalObjectSchema>;

/**
 * CCM_I21.GOAL_OBSERVATION group schema
 * Defines the structure and validation rules for the CCM_I21.GOAL_OBSERVATION group
 */
export const ccmI21GoalObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.GOAL_OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.GOAL_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.GOAL_OBSERVATION schema
 */
export type CCM_I21_GOAL_OBSERVATION = z.infer<typeof ccmI21GoalObservationSchema>;

/**
 * CCM_I21.ROLE_PATHWAY_OBJECT group schema
 * Defines the structure and validation rules for the CCM_I21.ROLE_PATHWAY_OBJECT group
 */
export const ccmI21RolePathwayObjectSchema = z
  .object({
    ROL: segments.rolSchema,
    PRD: segments.prdSchema
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.ROLE_PATHWAY_OBJECT",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.ROLE_PATHWAY_OBJECT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.ROLE_PATHWAY_OBJECT schema
 */
export type CCM_I21_ROLE_PATHWAY_OBJECT = z.infer<typeof ccmI21RolePathwayObjectSchema>;

/**
 * CCM_I21.PATHWAY_OBSERVATION group schema
 * Defines the structure and validation rules for the CCM_I21.PATHWAY_OBSERVATION group
 */
export const ccmI21PathwayObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.PATHWAY_OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.PATHWAY_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.PATHWAY_OBSERVATION schema
 */
export type CCM_I21_PATHWAY_OBSERVATION = z.infer<typeof ccmI21PathwayObservationSchema>;

/**
 * CCM_I21.RESOURCE_DETAIL group schema
 * Defines the structure and validation rules for the CCM_I21.RESOURCE_DETAIL group
 */
export const ccmI21ResourceDetailSchema = z
  .object({
    RESOURCE_OBJECT: ccmI21ResourceObjectSchema,
    RESOURCE_OBSERVATION: z.array(ccmI21ResourceObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.RESOURCE_DETAIL",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.RESOURCE_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.RESOURCE_DETAIL schema
 */
export type CCM_I21_RESOURCE_DETAIL = z.infer<typeof ccmI21ResourceDetailSchema>;

/**
 * CCM_I21.CLINICAL_HISTORY_DETAIL group schema
 * Defines the structure and validation rules for the CCM_I21.CLINICAL_HISTORY_DETAIL group
 */
export const ccmI21ClinicalHistoryDetailSchema = z
  .object({
    CLINICAL_HISTORY_OBJECT: ccmI21ClinicalHistoryObjectSchema,
    CLINICAL_HISTORY_OBSERVATION: z.array(ccmI21ClinicalHistoryObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.CLINICAL_HISTORY_DETAIL",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.CLINICAL_HISTORY_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.CLINICAL_HISTORY_DETAIL schema
 */
export type CCM_I21_CLINICAL_HISTORY_DETAIL = z.infer<typeof ccmI21ClinicalHistoryDetailSchema>;

/**
 * CCM_I21.ROLE_CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CCM_I21.ROLE_CLINICAL_HISTORY group
 */
export const ccmI21RoleClinicalHistorySchema = z
  .object({
    ROLE_CLINICAL_HISTORY_OBJECT: ccmI21RoleClinicalHistoryObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.ROLE_CLINICAL_HISTORY",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.ROLE_CLINICAL_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.ROLE_CLINICAL_HISTORY schema
 */
export type CCM_I21_ROLE_CLINICAL_HISTORY = z.infer<typeof ccmI21RoleClinicalHistorySchema>;

/**
 * CCM_I21.MEDICATION_ORDER_DETAIL group schema
 * Defines the structure and validation rules for the CCM_I21.MEDICATION_ORDER_DETAIL group
 */
export const ccmI21MedicationOrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    MEDICATION_ORDER_OBSERVATION: z.array(ccmI21MedicationOrderObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.MEDICATION_ORDER_DETAIL",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.MEDICATION_ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.MEDICATION_ORDER_DETAIL schema
 */
export type CCM_I21_MEDICATION_ORDER_DETAIL = z.infer<typeof ccmI21MedicationOrderDetailSchema>;

/**
 * CCM_I21.MEDICATION_ENCODING_DETAIL group schema
 * Defines the structure and validation rules for the CCM_I21.MEDICATION_ENCODING_DETAIL group
 */
export const ccmI21MedicationEncodingDetailSchema = z
  .object({
    RXE: segments.rxeSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    MEDICATION_ENCODING_OBSERVATION: z.array(ccmI21MedicationEncodingObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.MEDICATION_ENCODING_DETAIL",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.MEDICATION_ENCODING_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.MEDICATION_ENCODING_DETAIL schema
 */
export type CCM_I21_MEDICATION_ENCODING_DETAIL = z.infer<
  typeof ccmI21MedicationEncodingDetailSchema
>;

/**
 * CCM_I21.MEDICATION_ADMINISTRATION_DETAIL group schema
 * Defines the structure and validation rules for the CCM_I21.MEDICATION_ADMINISTRATION_DETAIL group
 */
export const ccmI21MedicationAdministrationDetailSchema = z
  .object({
    RXA: z.array(segments.rxaSchema),
    RXR: segments.rxrSchema,
    MEDICATION_ADMINISTRATION_OBSERVATION: z
      .array(ccmI21MedicationAdministrationObservationSchema)
      .optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.MEDICATION_ADMINISTRATION_DETAIL",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.MEDICATION_ADMINISTRATION_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.MEDICATION_ADMINISTRATION_DETAIL schema
 */
export type CCM_I21_MEDICATION_ADMINISTRATION_DETAIL = z.infer<
  typeof ccmI21MedicationAdministrationDetailSchema
>;

/**
 * CCM_I21.ROLE_PROBLEM group schema
 * Defines the structure and validation rules for the CCM_I21.ROLE_PROBLEM group
 */
export const ccmI21RoleProblemSchema = z
  .object({
    ROLE_PROBLEM_OBJECT: ccmI21RoleProblemObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.ROLE_PROBLEM",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.ROLE_PROBLEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.ROLE_PROBLEM schema
 */
export type CCM_I21_ROLE_PROBLEM = z.infer<typeof ccmI21RoleProblemSchema>;

/**
 * CCM_I21.ROLE_GOAL group schema
 * Defines the structure and validation rules for the CCM_I21.ROLE_GOAL group
 */
export const ccmI21RoleGoalSchema = z
  .object({
    ROLE_GOAL_OBJECT: ccmI21RoleGoalObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.ROLE_GOAL",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.ROLE_GOAL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.ROLE_GOAL schema
 */
export type CCM_I21_ROLE_GOAL = z.infer<typeof ccmI21RoleGoalSchema>;

/**
 * CCM_I21.ROLE_PATHWAY group schema
 * Defines the structure and validation rules for the CCM_I21.ROLE_PATHWAY group
 */
export const ccmI21RolePathwaySchema = z
  .object({
    ROLE_PATHWAY_OBJECT: ccmI21RolePathwayObjectSchema,
    VAR: z.array(segments.varSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.ROLE_PATHWAY",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.ROLE_PATHWAY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.ROLE_PATHWAY schema
 */
export type CCM_I21_ROLE_PATHWAY = z.infer<typeof ccmI21RolePathwaySchema>;

/**
 * CCM_I21.RESOURCES group schema
 * Defines the structure and validation rules for the CCM_I21.RESOURCES group
 */
export const ccmI21ResourcesSchema = z
  .object({
    RGS: segments.rgsSchema,
    RESOURCE_DETAIL: z.array(ccmI21ResourceDetailSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.RESOURCES",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.RESOURCES group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.RESOURCES schema
 */
export type CCM_I21_RESOURCES = z.infer<typeof ccmI21ResourcesSchema>;

/**
 * CCM_I21.CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CCM_I21.CLINICAL_HISTORY group
 */
export const ccmI21ClinicalHistorySchema = z
  .object({
    ORC: segments.orcSchema,
    CLINICAL_HISTORY_DETAIL: z.array(ccmI21ClinicalHistoryDetailSchema).optional(),
    ROLE_CLINICAL_HISTORY: z.array(ccmI21RoleClinicalHistorySchema).optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.CLINICAL_HISTORY",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.CLINICAL_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.CLINICAL_HISTORY schema
 */
export type CCM_I21_CLINICAL_HISTORY = z.infer<typeof ccmI21ClinicalHistorySchema>;

/**
 * CCM_I21.MEDICATION_HISTORY group schema
 * Defines the structure and validation rules for the CCM_I21.MEDICATION_HISTORY group
 */
export const ccmI21MedicationHistorySchema = z
  .object({
    ORC: segments.orcSchema,
    MEDICATION_ORDER_DETAIL: ccmI21MedicationOrderDetailSchema.optional(),
    MEDICATION_ENCODING_DETAIL: ccmI21MedicationEncodingDetailSchema.optional(),
    MEDICATION_ADMINISTRATION_DETAIL: z
      .array(ccmI21MedicationAdministrationDetailSchema)
      .optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.MEDICATION_HISTORY",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.MEDICATION_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.MEDICATION_HISTORY schema
 */
export type CCM_I21_MEDICATION_HISTORY = z.infer<typeof ccmI21MedicationHistorySchema>;

/**
 * CCM_I21.PROBLEM group schema
 * Defines the structure and validation rules for the CCM_I21.PROBLEM group
 */
export const ccmI21ProblemSchema = z
  .object({
    PRB: segments.prbSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_PROBLEM: z.array(ccmI21RoleProblemSchema).optional(),
    PROBLEM_OBSERVATION: z.array(ccmI21ProblemObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.PROBLEM",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.PROBLEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.PROBLEM schema
 */
export type CCM_I21_PROBLEM = z.infer<typeof ccmI21ProblemSchema>;

/**
 * CCM_I21.GOAL group schema
 * Defines the structure and validation rules for the CCM_I21.GOAL group
 */
export const ccmI21GoalSchema = z
  .object({
    GOL: segments.golSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_GOAL: z.array(ccmI21RoleGoalSchema).optional(),
    GOAL_OBSERVATION: z.array(ccmI21GoalObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.GOAL",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.GOAL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.GOAL schema
 */
export type CCM_I21_GOAL = z.infer<typeof ccmI21GoalSchema>;

/**
 * CCM_I21.PATHWAY group schema
 * Defines the structure and validation rules for the CCM_I21.PATHWAY group
 */
export const ccmI21PathwaySchema = z
  .object({
    PTH: segments.pthSchema,
    VAR: z.array(segments.varSchema).optional(),
    ROLE_PATHWAY: z.array(ccmI21RolePathwaySchema).optional(),
    PATHWAY_OBSERVATION: z.array(ccmI21PathwayObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.PATHWAY",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.PATHWAY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.PATHWAY schema
 */
export type CCM_I21_PATHWAY = z.infer<typeof ccmI21PathwaySchema>;

/**
 * CCM_I21.APPOINTMENT_HISTORY group schema
 * Defines the structure and validation rules for the CCM_I21.APPOINTMENT_HISTORY group
 */
export const ccmI21AppointmentHistorySchema = z
  .object({
    SCH: segments.schSchema,
    RESOURCES: z.array(ccmI21ResourcesSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21.APPOINTMENT_HISTORY",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21.APPOINTMENT_HISTORY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCM_I21.APPOINTMENT_HISTORY schema
 */
export type CCM_I21_APPOINTMENT_HISTORY = z.infer<typeof ccmI21AppointmentHistorySchema>;

/**
 * CCM_I21 message schema
 * Defines the structure and validation rules for the CCM_I21 message
 */
export const ccm_i21Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NK1: z.array(segments.nk1Schema).optional(),
    INSURANCE: z.array(ccmI21InsuranceSchema).optional(),
    APPOINTMENT_HISTORY: z.array(ccmI21AppointmentHistorySchema).optional(),
    CLINICAL_HISTORY: z.array(ccmI21ClinicalHistorySchema).optional(),
    PATIENT_VISITS: z.array(ccmI21PatientVisitsSchema),
    MEDICATION_HISTORY: z.array(ccmI21MedicationHistorySchema).optional(),
    PROBLEM: z.array(ccmI21ProblemSchema).optional(),
    GOAL: z.array(ccmI21GoalSchema).optional(),
    PATHWAY: z.array(ccmI21PathwaySchema).optional(),
    REL: z.array(segments.relSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCM_I21",
    version: "2.8",
    description: "HL7 v2.8 CCM_I21 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the CCM_I21 schema
 */
export type CCM_I21 = z.infer<typeof ccm_i21Schema>;

/**
 * Default export for convenience
 */
export default ccm_i21Schema;
