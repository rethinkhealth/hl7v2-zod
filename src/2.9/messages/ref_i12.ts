import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 REF_I12 Message
 * 
 * HL7 v2.9 REF_I12 message definition
 * Contains segment definitions and constraints for the REF_I12 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * REF_I12.AUTHORIZATION_CONTACT2 group schema
 * Defines the structure and validation rules for the REF_I12.AUTHORIZATION_CONTACT2 group
 */
export const refI12AuthorizationContact2Schema = z.object({
  "AUT": segments.autSchema,
  "CTD": segments.ctdSchema.optional()
}).register(hl7v2Metadata, {
  title: "REF_I12.AUTHORIZATION_CONTACT2",
  version: "2.9",
  description: "HL7 v2.9 REF_I12.AUTHORIZATION_CONTACT2 group",
  type: "Group"
});

/**
 * TypeScript type inferred from the REF_I12.AUTHORIZATION_CONTACT2 schema
 */
export type REF_I12_AUTHORIZATION_CONTACT2 = z.infer<typeof refI12AuthorizationContact2Schema>;

/**
 * REF_I12.PROVIDER_CONTACT group schema
 * Defines the structure and validation rules for the REF_I12.PROVIDER_CONTACT group
 */
export const refI12ProviderContactSchema = z.object({
  "PRD": segments.prdSchema,
  "CTD": z.array(segments.ctdSchema).optional()
}).register(hl7v2Metadata, {
  title: "REF_I12.PROVIDER_CONTACT",
  version: "2.9",
  description: "HL7 v2.9 REF_I12.PROVIDER_CONTACT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the REF_I12.PROVIDER_CONTACT schema
 */
export type REF_I12_PROVIDER_CONTACT = z.infer<typeof refI12ProviderContactSchema>;

/**
 * REF_I12.INSURANCE group schema
 * Defines the structure and validation rules for the REF_I12.INSURANCE group
 */
export const refI12InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "REF_I12.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 REF_I12.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the REF_I12.INSURANCE schema
 */
export type REF_I12_INSURANCE = z.infer<typeof refI12InsuranceSchema>;

/**
 * REF_I12.RESULTS_NOTES group schema
 * Defines the structure and validation rules for the REF_I12.RESULTS_NOTES group
 */
export const refI12ResultsNotesSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "REF_I12.RESULTS_NOTES",
  version: "2.9",
  description: "HL7 v2.9 REF_I12.RESULTS_NOTES group",
  type: "Group"
});

/**
 * TypeScript type inferred from the REF_I12.RESULTS_NOTES schema
 */
export type REF_I12_RESULTS_NOTES = z.infer<typeof refI12ResultsNotesSchema>;

/**
 * REF_I12.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the REF_I12.PATIENT_VISIT group
 */
export const refI12PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "REF_I12.PATIENT_VISIT",
  version: "2.9",
  description: "HL7 v2.9 REF_I12.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the REF_I12.PATIENT_VISIT schema
 */
export type REF_I12_PATIENT_VISIT = z.infer<typeof refI12PatientVisitSchema>;

/**
 * REF_I12.PROCEDURE group schema
 * Defines the structure and validation rules for the REF_I12.PROCEDURE group
 */
export const refI12ProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "AUTHORIZATION_CONTACT2": refI12AuthorizationContact2Schema.optional()
}).register(hl7v2Metadata, {
  title: "REF_I12.PROCEDURE",
  version: "2.9",
  description: "HL7 v2.9 REF_I12.PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the REF_I12.PROCEDURE schema
 */
export type REF_I12_PROCEDURE = z.infer<typeof refI12ProcedureSchema>;

/**
 * REF_I12.OBSERVATION group schema
 * Defines the structure and validation rules for the REF_I12.OBSERVATION group
 */
export const refI12ObservationSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESULTS_NOTES": z.array(refI12ResultsNotesSchema).optional()
}).register(hl7v2Metadata, {
  title: "REF_I12.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 REF_I12.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the REF_I12.OBSERVATION schema
 */
export type REF_I12_OBSERVATION = z.infer<typeof refI12ObservationSchema>;

/**
 * REF_I12 message schema
 * Defines the structure and validation rules for the REF_I12 message
 */
export const ref_i12Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "RF1": segments.rf1Schema.optional(),
  "AUTHORIZATION_CONTACT2": refI12AuthorizationContact2Schema.optional(),
  "PROVIDER_CONTACT": z.array(refI12ProviderContactSchema),
  "PID": segments.pidSchema,
  "NK1": z.array(segments.nk1Schema).optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(refI12InsuranceSchema).optional(),
  "ACC": segments.accSchema.optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": z.array(segments.drgSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "PROCEDURE": z.array(refI12ProcedureSchema).optional(),
  "OBSERVATION": z.array(refI12ObservationSchema).optional(),
  "PATIENT_VISIT": refI12PatientVisitSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "REF_I12",
  version: "2.9",
  description: "HL7 v2.9 REF_I12 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the REF_I12 schema
 */
export type REF_I12 = z.infer<typeof ref_i12Schema>;

/**
 * Default export for convenience
 */
export default ref_i12Schema;