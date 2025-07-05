import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 OMB_O27 Message
 *
 * HL7 v2.8 OMB_O27 message definition
 * Contains segment definitions and constraints for the OMB_O27 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMB_O27.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OMB_O27.PATIENT_VISIT group
 */
export const ombO27PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMB_O27.PATIENT_VISIT",
    version: "2.8",
    description: "HL7 v2.8 OMB_O27.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMB_O27.PATIENT_VISIT schema
 */
export type OMB_O27_PATIENT_VISIT = z.infer<typeof ombO27PatientVisitSchema>;

/**
 * OMB_O27.INSURANCE group schema
 * Defines the structure and validation rules for the OMB_O27.INSURANCE group
 */
export const ombO27InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMB_O27.INSURANCE",
    version: "2.8",
    description: "HL7 v2.8 OMB_O27.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMB_O27.INSURANCE schema
 */
export type OMB_O27_INSURANCE = z.infer<typeof ombO27InsuranceSchema>;

/**
 * OMB_O27.TIMING group schema
 * Defines the structure and validation rules for the OMB_O27.TIMING group
 */
export const ombO27TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMB_O27.TIMING",
    version: "2.8",
    description: "HL7 v2.8 OMB_O27.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMB_O27.TIMING schema
 */
export type OMB_O27_TIMING = z.infer<typeof ombO27TimingSchema>;

/**
 * OMB_O27.OBSERVATION group schema
 * Defines the structure and validation rules for the OMB_O27.OBSERVATION group
 */
export const ombO27ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMB_O27.OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 OMB_O27.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMB_O27.OBSERVATION schema
 */
export type OMB_O27_OBSERVATION = z.infer<typeof ombO27ObservationSchema>;

/**
 * OMB_O27.PATIENT group schema
 * Defines the structure and validation rules for the OMB_O27.PATIENT group
 */
export const ombO27PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    ARV: z.array(segments.arvSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT_VISIT: ombO27PatientVisitSchema.optional(),
    INSURANCE: z.array(ombO27InsuranceSchema).optional(),
    GT1: segments.gt1Schema.optional(),
    AL1: z.array(segments.al1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMB_O27.PATIENT",
    version: "2.8",
    description: "HL7 v2.8 OMB_O27.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMB_O27.PATIENT schema
 */
export type OMB_O27_PATIENT = z.infer<typeof ombO27PatientSchema>;

/**
 * OMB_O27.ORDER group schema
 * Defines the structure and validation rules for the OMB_O27.ORDER group
 */
export const ombO27OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    PRT: z.array(segments.prtSchema).optional(),
    TIMING: z.array(ombO27TimingSchema).optional(),
    BPO: segments.bpoSchema,
    SPM: segments.spmSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    DG1: z.array(segments.dg1Schema).optional(),
    OBSERVATION: z.array(ombO27ObservationSchema).optional(),
    FT1: z.array(segments.ft1Schema).optional(),
    BLG: segments.blgSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMB_O27.ORDER",
    version: "2.8",
    description: "HL7 v2.8 OMB_O27.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMB_O27.ORDER schema
 */
export type OMB_O27_ORDER = z.infer<typeof ombO27OrderSchema>;

/**
 * OMB_O27 message schema
 * Defines the structure and validation rules for the OMB_O27 message
 */
export const omb_o27Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: ombO27PatientSchema.optional(),
    ORDER: z.array(ombO27OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "OMB_O27",
    version: "2.8",
    description: "HL7 v2.8 OMB_O27 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OMB_O27 schema
 */
export type OMB_O27 = z.infer<typeof omb_o27Schema>;

/**
 * Default export for convenience
 */
export default omb_o27Schema;
