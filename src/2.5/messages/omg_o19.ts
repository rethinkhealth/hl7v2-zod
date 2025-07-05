import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 OMG_O19 Message
 *
 * HL7 v2.5 OMG_O19 message definition
 * Contains segment definitions and constraints for the OMG_O19 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMG_O19.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OMG_O19.PATIENT_VISIT group
 */
export const omgO19PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.PATIENT_VISIT",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.PATIENT_VISIT schema
 */
export type OMG_O19_PATIENT_VISIT = z.infer<typeof omgO19PatientVisitSchema>;

/**
 * OMG_O19.INSURANCE group schema
 * Defines the structure and validation rules for the OMG_O19.INSURANCE group
 */
export const omgO19InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.INSURANCE",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.INSURANCE schema
 */
export type OMG_O19_INSURANCE = z.infer<typeof omgO19InsuranceSchema>;

/**
 * OMG_O19.TIMING group schema
 * Defines the structure and validation rules for the OMG_O19.TIMING group
 */
export const omgO19TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.TIMING",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.TIMING schema
 */
export type OMG_O19_TIMING = z.infer<typeof omgO19TimingSchema>;

/**
 * OMG_O19.OBSERVATION group schema
 * Defines the structure and validation rules for the OMG_O19.OBSERVATION group
 */
export const omgO19ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.OBSERVATION",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.OBSERVATION schema
 */
export type OMG_O19_OBSERVATION = z.infer<typeof omgO19ObservationSchema>;

/**
 * OMG_O19.CONTAINER group schema
 * Defines the structure and validation rules for the OMG_O19.CONTAINER group
 */
export const omgO19ContainerSchema = z
  .object({
    SAC: segments.sacSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.CONTAINER",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.CONTAINER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.CONTAINER schema
 */
export type OMG_O19_CONTAINER = z.infer<typeof omgO19ContainerSchema>;

/**
 * OMG_O19.PATIENT_PRIOR group schema
 * Defines the structure and validation rules for the OMG_O19.PATIENT_PRIOR group
 */
export const omgO19PatientPriorSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.PATIENT_PRIOR",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.PATIENT_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.PATIENT_PRIOR schema
 */
export type OMG_O19_PATIENT_PRIOR = z.infer<typeof omgO19PatientPriorSchema>;

/**
 * OMG_O19.PATIENT_VISIT_PRIOR group schema
 * Defines the structure and validation rules for the OMG_O19.PATIENT_VISIT_PRIOR group
 */
export const omgO19PatientVisitPriorSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.PATIENT_VISIT_PRIOR",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.PATIENT_VISIT_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.PATIENT_VISIT_PRIOR schema
 */
export type OMG_O19_PATIENT_VISIT_PRIOR = z.infer<typeof omgO19PatientVisitPriorSchema>;

/**
 * OMG_O19.TIMING_PRIOR group schema
 * Defines the structure and validation rules for the OMG_O19.TIMING_PRIOR group
 */
export const omgO19TimingPriorSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.TIMING_PRIOR",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.TIMING_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.TIMING_PRIOR schema
 */
export type OMG_O19_TIMING_PRIOR = z.infer<typeof omgO19TimingPriorSchema>;

/**
 * OMG_O19.OBSERVATION_PRIOR group schema
 * Defines the structure and validation rules for the OMG_O19.OBSERVATION_PRIOR group
 */
export const omgO19ObservationPriorSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.OBSERVATION_PRIOR",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.OBSERVATION_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.OBSERVATION_PRIOR schema
 */
export type OMG_O19_OBSERVATION_PRIOR = z.infer<typeof omgO19ObservationPriorSchema>;

/**
 * OMG_O19.PATIENT group schema
 * Defines the structure and validation rules for the OMG_O19.PATIENT group
 */
export const omgO19PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    NK1: z.array(segments.nk1Schema).optional(),
    PATIENT_VISIT: omgO19PatientVisitSchema.optional(),
    INSURANCE: z.array(omgO19InsuranceSchema).optional(),
    GT1: segments.gt1Schema.optional(),
    AL1: z.array(segments.al1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.PATIENT schema
 */
export type OMG_O19_PATIENT = z.infer<typeof omgO19PatientSchema>;

/**
 * OMG_O19.SPECIMEN group schema
 * Defines the structure and validation rules for the OMG_O19.SPECIMEN group
 */
export const omgO19SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    OBX: z.array(segments.obxSchema).optional(),
    CONTAINER: z.array(omgO19ContainerSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.SPECIMEN",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.SPECIMEN schema
 */
export type OMG_O19_SPECIMEN = z.infer<typeof omgO19SpecimenSchema>;

/**
 * OMG_O19.ORDER_PRIOR group schema
 * Defines the structure and validation rules for the OMG_O19.ORDER_PRIOR group
 */
export const omgO19OrderPriorSchema = z
  .object({
    ORC: segments.orcSchema.optional(),
    OBR: segments.obrSchema,
    TIMING_PRIOR: z.array(omgO19TimingPriorSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    CTD: segments.ctdSchema.optional(),
    OBSERVATION_PRIOR: z.array(omgO19ObservationPriorSchema)
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.ORDER_PRIOR",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.ORDER_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.ORDER_PRIOR schema
 */
export type OMG_O19_ORDER_PRIOR = z.infer<typeof omgO19OrderPriorSchema>;

/**
 * OMG_O19.PRIOR_RESULT group schema
 * Defines the structure and validation rules for the OMG_O19.PRIOR_RESULT group
 */
export const omgO19PriorResultSchema = z
  .object({
    PATIENT_PRIOR: omgO19PatientPriorSchema.optional(),
    PATIENT_VISIT_PRIOR: omgO19PatientVisitPriorSchema.optional(),
    AL1: z.array(segments.al1Schema).optional(),
    ORDER_PRIOR: z.array(omgO19OrderPriorSchema)
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.PRIOR_RESULT",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.PRIOR_RESULT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.PRIOR_RESULT schema
 */
export type OMG_O19_PRIOR_RESULT = z.infer<typeof omgO19PriorResultSchema>;

/**
 * OMG_O19.ORDER group schema
 * Defines the structure and validation rules for the OMG_O19.ORDER group
 */
export const omgO19OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(omgO19TimingSchema).optional(),
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional(),
    CTD: segments.ctdSchema.optional(),
    DG1: z.array(segments.dg1Schema).optional(),
    OBSERVATION: z.array(omgO19ObservationSchema).optional(),
    SPECIMEN: z.array(omgO19SpecimenSchema).optional(),
    PRIOR_RESULT: z.array(omgO19PriorResultSchema).optional(),
    FT1: z.array(segments.ft1Schema).optional(),
    CTI: z.array(segments.ctiSchema).optional(),
    BLG: segments.blgSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19.ORDER",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMG_O19.ORDER schema
 */
export type OMG_O19_ORDER = z.infer<typeof omgO19OrderSchema>;

/**
 * OMG_O19 message schema
 * Defines the structure and validation rules for the OMG_O19 message
 */
export const omg_o19Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: omgO19PatientSchema.optional(),
    ORDER: z.array(omgO19OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "OMG_O19",
    version: "2.5",
    description: "HL7 v2.5 OMG_O19 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OMG_O19 schema
 */
export type OMG_O19 = z.infer<typeof omg_o19Schema>;

/**
 * Default export for convenience
 */
export default omg_o19Schema;
