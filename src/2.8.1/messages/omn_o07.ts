import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 OMN_O07 Message
 *
 * HL7 v2.8 OMN_O07 message definition
 * Contains segment definitions and constraints for the OMN_O07 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMN_O07.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OMN_O07.PATIENT_VISIT group
 */
export const omnO07PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMN_O07.PATIENT_VISIT",
    version: "2.8",
    description: "HL7 v2.8 OMN_O07.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMN_O07.PATIENT_VISIT schema
 */
export type OMN_O07_PATIENT_VISIT = z.infer<typeof omnO07PatientVisitSchema>;

/**
 * OMN_O07.INSURANCE group schema
 * Defines the structure and validation rules for the OMN_O07.INSURANCE group
 */
export const omnO07InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMN_O07.INSURANCE",
    version: "2.8",
    description: "HL7 v2.8 OMN_O07.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMN_O07.INSURANCE schema
 */
export type OMN_O07_INSURANCE = z.infer<typeof omnO07InsuranceSchema>;

/**
 * OMN_O07.TIMING group schema
 * Defines the structure and validation rules for the OMN_O07.TIMING group
 */
export const omnO07TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMN_O07.TIMING",
    version: "2.8",
    description: "HL7 v2.8 OMN_O07.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMN_O07.TIMING schema
 */
export type OMN_O07_TIMING = z.infer<typeof omnO07TimingSchema>;

/**
 * OMN_O07.OBSERVATION group schema
 * Defines the structure and validation rules for the OMN_O07.OBSERVATION group
 */
export const omnO07ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMN_O07.OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 OMN_O07.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMN_O07.OBSERVATION schema
 */
export type OMN_O07_OBSERVATION = z.infer<typeof omnO07ObservationSchema>;

/**
 * OMN_O07.PATIENT group schema
 * Defines the structure and validation rules for the OMN_O07.PATIENT group
 */
export const omnO07PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    ARV: z.array(segments.arvSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT_VISIT: omnO07PatientVisitSchema.optional(),
    INSURANCE: z.array(omnO07InsuranceSchema).optional(),
    GT1: segments.gt1Schema.optional(),
    AL1: z.array(segments.al1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMN_O07.PATIENT",
    version: "2.8",
    description: "HL7 v2.8 OMN_O07.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMN_O07.PATIENT schema
 */
export type OMN_O07_PATIENT = z.infer<typeof omnO07PatientSchema>;

/**
 * OMN_O07.ORDER group schema
 * Defines the structure and validation rules for the OMN_O07.ORDER group
 */
export const omnO07OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    PRT: z.array(segments.prtSchema).optional(),
    TIMING: z.array(omnO07TimingSchema).optional(),
    RQD: segments.rqdSchema,
    RQ1: segments.rq1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    OBSERVATION: z.array(omnO07ObservationSchema).optional(),
    BLG: segments.blgSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMN_O07.ORDER",
    version: "2.8",
    description: "HL7 v2.8 OMN_O07.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMN_O07.ORDER schema
 */
export type OMN_O07_ORDER = z.infer<typeof omnO07OrderSchema>;

/**
 * OMN_O07 message schema
 * Defines the structure and validation rules for the OMN_O07 message
 */
export const omn_o07Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: omnO07PatientSchema.optional(),
    ORDER: z.array(omnO07OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "OMN_O07",
    version: "2.8",
    description: "HL7 v2.8 OMN_O07 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OMN_O07 schema
 */
export type OMN_O07 = z.infer<typeof omn_o07Schema>;

/**
 * Default export for convenience
 */
export default omn_o07Schema;
