import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 RRI_I12 Message
 *
 * HL7 v2.7 RRI_I12 message definition
 * Contains segment definitions and constraints for the RRI_I12 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RRI_I12.AUTHORIZATION_CONTACT group schema
 * Defines the structure and validation rules for the RRI_I12.AUTHORIZATION_CONTACT group
 */
export const rriI12AuthorizationContactSchema = z
  .object({
    AUT: segments.autSchema,
    CTD: segments.ctdSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RRI_I12.AUTHORIZATION_CONTACT",
    version: "2.7",
    description: "HL7 v2.7 RRI_I12.AUTHORIZATION_CONTACT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRI_I12.AUTHORIZATION_CONTACT schema
 */
export type RRI_I12_AUTHORIZATION_CONTACT = z.infer<typeof rriI12AuthorizationContactSchema>;

/**
 * RRI_I12.PROVIDER_CONTACT group schema
 * Defines the structure and validation rules for the RRI_I12.PROVIDER_CONTACT group
 */
export const rriI12ProviderContactSchema = z
  .object({
    PRD: segments.prdSchema,
    CTD: z.array(segments.ctdSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRI_I12.PROVIDER_CONTACT",
    version: "2.7",
    description: "HL7 v2.7 RRI_I12.PROVIDER_CONTACT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRI_I12.PROVIDER_CONTACT schema
 */
export type RRI_I12_PROVIDER_CONTACT = z.infer<typeof rriI12ProviderContactSchema>;

/**
 * RRI_I12.RESULTS_NOTES group schema
 * Defines the structure and validation rules for the RRI_I12.RESULTS_NOTES group
 */
export const rriI12ResultsNotesSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRI_I12.RESULTS_NOTES",
    version: "2.7",
    description: "HL7 v2.7 RRI_I12.RESULTS_NOTES group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRI_I12.RESULTS_NOTES schema
 */
export type RRI_I12_RESULTS_NOTES = z.infer<typeof rriI12ResultsNotesSchema>;

/**
 * RRI_I12.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the RRI_I12.PATIENT_VISIT group
 */
export const rriI12PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RRI_I12.PATIENT_VISIT",
    version: "2.7",
    description: "HL7 v2.7 RRI_I12.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRI_I12.PATIENT_VISIT schema
 */
export type RRI_I12_PATIENT_VISIT = z.infer<typeof rriI12PatientVisitSchema>;

/**
 * RRI_I12.PROCEDURE group schema
 * Defines the structure and validation rules for the RRI_I12.PROCEDURE group
 */
export const rriI12ProcedureSchema = z
  .object({
    PR1: segments.pr1Schema,
    AUTHORIZATION_CONTACT: rriI12AuthorizationContactSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RRI_I12.PROCEDURE",
    version: "2.7",
    description: "HL7 v2.7 RRI_I12.PROCEDURE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRI_I12.PROCEDURE schema
 */
export type RRI_I12_PROCEDURE = z.infer<typeof rriI12ProcedureSchema>;

/**
 * RRI_I12.OBSERVATION group schema
 * Defines the structure and validation rules for the RRI_I12.OBSERVATION group
 */
export const rriI12ObservationSchema = z
  .object({
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional(),
    RESULTS_NOTES: z.array(rriI12ResultsNotesSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRI_I12.OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 RRI_I12.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRI_I12.OBSERVATION schema
 */
export type RRI_I12_OBSERVATION = z.infer<typeof rriI12ObservationSchema>;

/**
 * RRI_I12 message schema
 * Defines the structure and validation rules for the RRI_I12 message
 */
export const rri_i12Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema.optional(),
    RF1: segments.rf1Schema.optional(),
    AUTHORIZATION_CONTACT: rriI12AuthorizationContactSchema.optional(),
    PROVIDER_CONTACT: z.array(rriI12ProviderContactSchema),
    PID: segments.pidSchema,
    ACC: segments.accSchema.optional(),
    DG1: z.array(segments.dg1Schema).optional(),
    DRG: z.array(segments.drgSchema).optional(),
    AL1: z.array(segments.al1Schema).optional(),
    PROCEDURE: z.array(rriI12ProcedureSchema).optional(),
    OBSERVATION: z.array(rriI12ObservationSchema).optional(),
    PATIENT_VISIT: rriI12PatientVisitSchema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRI_I12",
    version: "2.7",
    description: "HL7 v2.7 RRI_I12 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RRI_I12 schema
 */
export type RRI_I12 = z.infer<typeof rri_i12Schema>;

/**
 * Default export for convenience
 */
export default rri_i12Schema;
