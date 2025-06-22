import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 CCI_I22 Message
 * 
 * HL7 v2.8 CCI_I22 message definition
 * Contains segment definitions and constraints for the CCI_I22 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CCI_I22.INSURANCE group schema
 * Defines the structure and validation rules for the CCI_I22.INSURANCE group
 */
export const cciI22InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.INSURANCE schema
 */
export type CCI_I22_INSURANCE = z.infer<typeof cciI22InsuranceSchema>;

/**
 * CCI_I22.RESOURCE_OBJECT group schema
 * Defines the structure and validation rules for the CCI_I22.RESOURCE_OBJECT group
 */
export const cciI22ResourceObjectSchema = z.object({
  "AIS": segments.aisSchema,
  "AIG": segments.aigSchema,
  "AIL": segments.ailSchema,
  "AIP": segments.aipSchema
}).register(hl7v2Metadata, {
  title: "CCI_I22.RESOURCE_OBJECT",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.RESOURCE_OBJECT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.RESOURCE_OBJECT schema
 */
export type CCI_I22_RESOURCE_OBJECT = z.infer<typeof cciI22ResourceObjectSchema>;

/**
 * CCI_I22.RESOURCE_OBSERVATION group schema
 * Defines the structure and validation rules for the CCI_I22.RESOURCE_OBSERVATION group
 */
export const cciI22ResourceObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.RESOURCE_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.RESOURCE_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.RESOURCE_OBSERVATION schema
 */
export type CCI_I22_RESOURCE_OBSERVATION = z.infer<typeof cciI22ResourceObservationSchema>;

/**
 * CCI_I22.CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CCI_I22.CLINICAL_HISTORY_OBJECT group
 */
export const cciI22ClinicalHistoryObjectSchema = z.object({
  "OBR": segments.obrSchema,
  "ODS": segments.odsSchema,
  "PR1": segments.pr1Schema,
  "RF1": segments.rf1Schema,
  "AL1": segments.al1Schema,
  "IAM": segments.iamSchema,
  "ACC": segments.accSchema,
  "RMI": segments.rmiSchema,
  "DB1": segments.db1Schema,
  "DG1": segments.dg1Schema,
  "DRG": segments.drgSchema,
  "PDA": segments.pdaSchema
}).register(hl7v2Metadata, {
  title: "CCI_I22.CLINICAL_HISTORY_OBJECT",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.CLINICAL_HISTORY_OBJECT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.CLINICAL_HISTORY_OBJECT schema
 */
export type CCI_I22_CLINICAL_HISTORY_OBJECT = z.infer<typeof cciI22ClinicalHistoryObjectSchema>;

/**
 * CCI_I22.CLINICAL_HISTORY_OBSERVATION group schema
 * Defines the structure and validation rules for the CCI_I22.CLINICAL_HISTORY_OBSERVATION group
 */
export const cciI22ClinicalHistoryObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.CLINICAL_HISTORY_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.CLINICAL_HISTORY_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.CLINICAL_HISTORY_OBSERVATION schema
 */
export type CCI_I22_CLINICAL_HISTORY_OBSERVATION = z.infer<typeof cciI22ClinicalHistoryObservationSchema>;

/**
 * CCI_I22.ROLE_CLINICAL_HISTORY_OBJECT group schema
 * Defines the structure and validation rules for the CCI_I22.ROLE_CLINICAL_HISTORY_OBJECT group
 */
export const cciI22RoleClinicalHistoryObjectSchema = z.object({
  "ROL": segments.rolSchema,
  "PRD": segments.prdSchema
}).register(hl7v2Metadata, {
  title: "CCI_I22.ROLE_CLINICAL_HISTORY_OBJECT",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.ROLE_CLINICAL_HISTORY_OBJECT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.ROLE_CLINICAL_HISTORY_OBJECT schema
 */
export type CCI_I22_ROLE_CLINICAL_HISTORY_OBJECT = z.infer<typeof cciI22RoleClinicalHistoryObjectSchema>;

/**
 * CCI_I22.PATIENT_VISITS group schema
 * Defines the structure and validation rules for the CCI_I22.PATIENT_VISITS group
 */
export const cciI22PatientVisitsSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.PATIENT_VISITS",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.PATIENT_VISITS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.PATIENT_VISITS schema
 */
export type CCI_I22_PATIENT_VISITS = z.infer<typeof cciI22PatientVisitsSchema>;

/**
 * CCI_I22.MEDICATION_ORDER_OBSERVATION group schema
 * Defines the structure and validation rules for the CCI_I22.MEDICATION_ORDER_OBSERVATION group
 */
export const cciI22MedicationOrderObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.MEDICATION_ORDER_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.MEDICATION_ORDER_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.MEDICATION_ORDER_OBSERVATION schema
 */
export type CCI_I22_MEDICATION_ORDER_OBSERVATION = z.infer<typeof cciI22MedicationOrderObservationSchema>;

/**
 * CCI_I22.MEDICATION_ENCODING_OBSERVATION group schema
 * Defines the structure and validation rules for the CCI_I22.MEDICATION_ENCODING_OBSERVATION group
 */
export const cciI22MedicationEncodingObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.MEDICATION_ENCODING_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.MEDICATION_ENCODING_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.MEDICATION_ENCODING_OBSERVATION schema
 */
export type CCI_I22_MEDICATION_ENCODING_OBSERVATION = z.infer<typeof cciI22MedicationEncodingObservationSchema>;

/**
 * CCI_I22.MEDICATION_ADMINISTRATION_OBSERVATION group schema
 * Defines the structure and validation rules for the CCI_I22.MEDICATION_ADMINISTRATION_OBSERVATION group
 */
export const cciI22MedicationAdministrationObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.MEDICATION_ADMINISTRATION_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.MEDICATION_ADMINISTRATION_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.MEDICATION_ADMINISTRATION_OBSERVATION schema
 */
export type CCI_I22_MEDICATION_ADMINISTRATION_OBSERVATION = z.infer<typeof cciI22MedicationAdministrationObservationSchema>;

/**
 * CCI_I22.ROLE_PROBLEM_OBJECT group schema
 * Defines the structure and validation rules for the CCI_I22.ROLE_PROBLEM_OBJECT group
 */
export const cciI22RoleProblemObjectSchema = z.object({
  "ROL": segments.rolSchema,
  "PRD": segments.prdSchema
}).register(hl7v2Metadata, {
  title: "CCI_I22.ROLE_PROBLEM_OBJECT",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.ROLE_PROBLEM_OBJECT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.ROLE_PROBLEM_OBJECT schema
 */
export type CCI_I22_ROLE_PROBLEM_OBJECT = z.infer<typeof cciI22RoleProblemObjectSchema>;

/**
 * CCI_I22.PROBLEM_OBSERVATION group schema
 * Defines the structure and validation rules for the CCI_I22.PROBLEM_OBSERVATION group
 */
export const cciI22ProblemObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.PROBLEM_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.PROBLEM_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.PROBLEM_OBSERVATION schema
 */
export type CCI_I22_PROBLEM_OBSERVATION = z.infer<typeof cciI22ProblemObservationSchema>;

/**
 * CCI_I22.ROLE_GOAL_OBJECT group schema
 * Defines the structure and validation rules for the CCI_I22.ROLE_GOAL_OBJECT group
 */
export const cciI22RoleGoalObjectSchema = z.object({
  "ROL": segments.rolSchema,
  "PRD": segments.prdSchema
}).register(hl7v2Metadata, {
  title: "CCI_I22.ROLE_GOAL_OBJECT",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.ROLE_GOAL_OBJECT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.ROLE_GOAL_OBJECT schema
 */
export type CCI_I22_ROLE_GOAL_OBJECT = z.infer<typeof cciI22RoleGoalObjectSchema>;

/**
 * CCI_I22.GOAL_OBSERVATION group schema
 * Defines the structure and validation rules for the CCI_I22.GOAL_OBSERVATION group
 */
export const cciI22GoalObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.GOAL_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.GOAL_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.GOAL_OBSERVATION schema
 */
export type CCI_I22_GOAL_OBSERVATION = z.infer<typeof cciI22GoalObservationSchema>;

/**
 * CCI_I22.ROLE_PATHWAY_OBJECT group schema
 * Defines the structure and validation rules for the CCI_I22.ROLE_PATHWAY_OBJECT group
 */
export const cciI22RolePathwayObjectSchema = z.object({
  "ROL": segments.rolSchema,
  "PRD": segments.prdSchema
}).register(hl7v2Metadata, {
  title: "CCI_I22.ROLE_PATHWAY_OBJECT",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.ROLE_PATHWAY_OBJECT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.ROLE_PATHWAY_OBJECT schema
 */
export type CCI_I22_ROLE_PATHWAY_OBJECT = z.infer<typeof cciI22RolePathwayObjectSchema>;

/**
 * CCI_I22.PATHWAY_OBSERVATION group schema
 * Defines the structure and validation rules for the CCI_I22.PATHWAY_OBSERVATION group
 */
export const cciI22PathwayObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.PATHWAY_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.PATHWAY_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.PATHWAY_OBSERVATION schema
 */
export type CCI_I22_PATHWAY_OBSERVATION = z.infer<typeof cciI22PathwayObservationSchema>;

/**
 * CCI_I22.RESOURCE_DETAIL group schema
 * Defines the structure and validation rules for the CCI_I22.RESOURCE_DETAIL group
 */
export const cciI22ResourceDetailSchema = z.object({
  "RESOURCE_OBJECT": cciI22ResourceObjectSchema,
  "RESOURCE_OBSERVATION": z.array(cciI22ResourceObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.RESOURCE_DETAIL",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.RESOURCE_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.RESOURCE_DETAIL schema
 */
export type CCI_I22_RESOURCE_DETAIL = z.infer<typeof cciI22ResourceDetailSchema>;

/**
 * CCI_I22.CLINICAL_HISTORY_DETAIL group schema
 * Defines the structure and validation rules for the CCI_I22.CLINICAL_HISTORY_DETAIL group
 */
export const cciI22ClinicalHistoryDetailSchema = z.object({
  "CLINICAL_HISTORY_OBJECT": cciI22ClinicalHistoryObjectSchema,
  "CLINICAL_HISTORY_OBSERVATION": z.array(cciI22ClinicalHistoryObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.CLINICAL_HISTORY_DETAIL",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.CLINICAL_HISTORY_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.CLINICAL_HISTORY_DETAIL schema
 */
export type CCI_I22_CLINICAL_HISTORY_DETAIL = z.infer<typeof cciI22ClinicalHistoryDetailSchema>;

/**
 * CCI_I22.ROLE_CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CCI_I22.ROLE_CLINICAL_HISTORY group
 */
export const cciI22RoleClinicalHistorySchema = z.object({
  "ROLE_CLINICAL_HISTORY_OBJECT": cciI22RoleClinicalHistoryObjectSchema,
  "VAR": z.array(segments.varSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.ROLE_CLINICAL_HISTORY",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.ROLE_CLINICAL_HISTORY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.ROLE_CLINICAL_HISTORY schema
 */
export type CCI_I22_ROLE_CLINICAL_HISTORY = z.infer<typeof cciI22RoleClinicalHistorySchema>;

/**
 * CCI_I22.MEDICATION_ORDER_DETAIL group schema
 * Defines the structure and validation rules for the CCI_I22.MEDICATION_ORDER_DETAIL group
 */
export const cciI22MedicationOrderDetailSchema = z.object({
  "RXO": segments.rxoSchema,
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional(),
  "MEDICATION_ORDER_OBSERVATION": z.array(cciI22MedicationOrderObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.MEDICATION_ORDER_DETAIL",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.MEDICATION_ORDER_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.MEDICATION_ORDER_DETAIL schema
 */
export type CCI_I22_MEDICATION_ORDER_DETAIL = z.infer<typeof cciI22MedicationOrderDetailSchema>;

/**
 * CCI_I22.MEDICATION_ENCODING_DETAIL group schema
 * Defines the structure and validation rules for the CCI_I22.MEDICATION_ENCODING_DETAIL group
 */
export const cciI22MedicationEncodingDetailSchema = z.object({
  "RXE": segments.rxeSchema,
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional(),
  "MEDICATION_ENCODING_OBSERVATION": z.array(cciI22MedicationEncodingObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.MEDICATION_ENCODING_DETAIL",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.MEDICATION_ENCODING_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.MEDICATION_ENCODING_DETAIL schema
 */
export type CCI_I22_MEDICATION_ENCODING_DETAIL = z.infer<typeof cciI22MedicationEncodingDetailSchema>;

/**
 * CCI_I22.MEDICATION_ADMINISTRATION_DETAIL group schema
 * Defines the structure and validation rules for the CCI_I22.MEDICATION_ADMINISTRATION_DETAIL group
 */
export const cciI22MedicationAdministrationDetailSchema = z.object({
  "RXA": z.array(segments.rxaSchema),
  "RXR": segments.rxrSchema,
  "MEDICATION_ADMINISTRATION_OBSERVATION": z.array(cciI22MedicationAdministrationObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.MEDICATION_ADMINISTRATION_DETAIL",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.MEDICATION_ADMINISTRATION_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.MEDICATION_ADMINISTRATION_DETAIL schema
 */
export type CCI_I22_MEDICATION_ADMINISTRATION_DETAIL = z.infer<typeof cciI22MedicationAdministrationDetailSchema>;

/**
 * CCI_I22.ROLE_PROBLEM group schema
 * Defines the structure and validation rules for the CCI_I22.ROLE_PROBLEM group
 */
export const cciI22RoleProblemSchema = z.object({
  "ROLE_PROBLEM_OBJECT": cciI22RoleProblemObjectSchema,
  "VAR": z.array(segments.varSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.ROLE_PROBLEM",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.ROLE_PROBLEM group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.ROLE_PROBLEM schema
 */
export type CCI_I22_ROLE_PROBLEM = z.infer<typeof cciI22RoleProblemSchema>;

/**
 * CCI_I22.ROLE_GOAL group schema
 * Defines the structure and validation rules for the CCI_I22.ROLE_GOAL group
 */
export const cciI22RoleGoalSchema = z.object({
  "ROLE_GOAL_OBJECT": cciI22RoleGoalObjectSchema,
  "VAR": z.array(segments.varSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.ROLE_GOAL",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.ROLE_GOAL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.ROLE_GOAL schema
 */
export type CCI_I22_ROLE_GOAL = z.infer<typeof cciI22RoleGoalSchema>;

/**
 * CCI_I22.ROLE_PATHWAY group schema
 * Defines the structure and validation rules for the CCI_I22.ROLE_PATHWAY group
 */
export const cciI22RolePathwaySchema = z.object({
  "ROLE_PATHWAY_OBJECT": cciI22RolePathwayObjectSchema,
  "VAR": z.array(segments.varSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.ROLE_PATHWAY",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.ROLE_PATHWAY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.ROLE_PATHWAY schema
 */
export type CCI_I22_ROLE_PATHWAY = z.infer<typeof cciI22RolePathwaySchema>;

/**
 * CCI_I22.RESOURCES group schema
 * Defines the structure and validation rules for the CCI_I22.RESOURCES group
 */
export const cciI22ResourcesSchema = z.object({
  "RGS": segments.rgsSchema,
  "RESOURCE_DETAIL": z.array(cciI22ResourceDetailSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.RESOURCES",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.RESOURCES group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.RESOURCES schema
 */
export type CCI_I22_RESOURCES = z.infer<typeof cciI22ResourcesSchema>;

/**
 * CCI_I22.CLINICAL_HISTORY group schema
 * Defines the structure and validation rules for the CCI_I22.CLINICAL_HISTORY group
 */
export const cciI22ClinicalHistorySchema = z.object({
  "ORC": segments.orcSchema,
  "CLINICAL_HISTORY_DETAIL": z.array(cciI22ClinicalHistoryDetailSchema).optional(),
  "ROLE_CLINICAL_HISTORY": z.array(cciI22RoleClinicalHistorySchema).optional(),
  "CTI": z.array(segments.ctiSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.CLINICAL_HISTORY",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.CLINICAL_HISTORY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.CLINICAL_HISTORY schema
 */
export type CCI_I22_CLINICAL_HISTORY = z.infer<typeof cciI22ClinicalHistorySchema>;

/**
 * CCI_I22.MEDICATION_HISTORY group schema
 * Defines the structure and validation rules for the CCI_I22.MEDICATION_HISTORY group
 */
export const cciI22MedicationHistorySchema = z.object({
  "ORC": segments.orcSchema,
  "MEDICATION_ORDER_DETAIL": cciI22MedicationOrderDetailSchema.optional(),
  "MEDICATION_ENCODING_DETAIL": cciI22MedicationEncodingDetailSchema.optional(),
  "MEDICATION_ADMINISTRATION_DETAIL": z.array(cciI22MedicationAdministrationDetailSchema).optional(),
  "CTI": z.array(segments.ctiSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.MEDICATION_HISTORY",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.MEDICATION_HISTORY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.MEDICATION_HISTORY schema
 */
export type CCI_I22_MEDICATION_HISTORY = z.infer<typeof cciI22MedicationHistorySchema>;

/**
 * CCI_I22.PROBLEM group schema
 * Defines the structure and validation rules for the CCI_I22.PROBLEM group
 */
export const cciI22ProblemSchema = z.object({
  "PRB": segments.prbSchema,
  "VAR": z.array(segments.varSchema).optional(),
  "ROLE_PROBLEM": z.array(cciI22RoleProblemSchema).optional(),
  "PROBLEM_OBSERVATION": z.array(cciI22ProblemObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.PROBLEM",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.PROBLEM group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.PROBLEM schema
 */
export type CCI_I22_PROBLEM = z.infer<typeof cciI22ProblemSchema>;

/**
 * CCI_I22.GOAL group schema
 * Defines the structure and validation rules for the CCI_I22.GOAL group
 */
export const cciI22GoalSchema = z.object({
  "GOL": segments.golSchema,
  "VAR": z.array(segments.varSchema).optional(),
  "ROLE_GOAL": z.array(cciI22RoleGoalSchema).optional(),
  "GOAL_OBSERVATION": z.array(cciI22GoalObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.GOAL",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.GOAL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.GOAL schema
 */
export type CCI_I22_GOAL = z.infer<typeof cciI22GoalSchema>;

/**
 * CCI_I22.PATHWAY group schema
 * Defines the structure and validation rules for the CCI_I22.PATHWAY group
 */
export const cciI22PathwaySchema = z.object({
  "PTH": segments.pthSchema,
  "VAR": z.array(segments.varSchema).optional(),
  "ROLE_PATHWAY": z.array(cciI22RolePathwaySchema).optional(),
  "PATHWAY_OBSERVATION": z.array(cciI22PathwayObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.PATHWAY",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.PATHWAY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.PATHWAY schema
 */
export type CCI_I22_PATHWAY = z.infer<typeof cciI22PathwaySchema>;

/**
 * CCI_I22.APPOINTMENT_HISTORY group schema
 * Defines the structure and validation rules for the CCI_I22.APPOINTMENT_HISTORY group
 */
export const cciI22AppointmentHistorySchema = z.object({
  "SCH": segments.schSchema,
  "RESOURCES": z.array(cciI22ResourcesSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22.APPOINTMENT_HISTORY",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22.APPOINTMENT_HISTORY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CCI_I22.APPOINTMENT_HISTORY schema
 */
export type CCI_I22_APPOINTMENT_HISTORY = z.infer<typeof cciI22AppointmentHistorySchema>;

/**
 * CCI_I22 message schema
 * Defines the structure and validation rules for the CCI_I22 message
 */
export const cci_i22Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "INSURANCE": z.array(cciI22InsuranceSchema).optional(),
  "APPOINTMENT_HISTORY": z.array(cciI22AppointmentHistorySchema).optional(),
  "CLINICAL_HISTORY": z.array(cciI22ClinicalHistorySchema).optional(),
  "PATIENT_VISITS": z.array(cciI22PatientVisitsSchema),
  "MEDICATION_HISTORY": z.array(cciI22MedicationHistorySchema).optional(),
  "PROBLEM": z.array(cciI22ProblemSchema).optional(),
  "GOAL": z.array(cciI22GoalSchema).optional(),
  "PATHWAY": z.array(cciI22PathwaySchema).optional(),
  "REL": z.array(segments.relSchema).optional()
}).register(hl7v2Metadata, {
  title: "CCI_I22",
  version: "2.8",
  description: "HL7 v2.8 CCI_I22 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the CCI_I22 schema
 */
export type CCI_I22 = z.infer<typeof cci_i22Schema>;

/**
 * Default export for convenience
 */
export default cci_i22Schema;