import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 OML_O21 Message
 *
 * HL7 v2.6 OML_O21 message definition
 * Contains segment definitions and constraints for the OML_O21 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OML_O21.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OML_O21.PATIENT_VISIT group
 */
export const omlO21PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.PATIENT_VISIT",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.PATIENT_VISIT schema
 */
export type OML_O21_PATIENT_VISIT = z.infer<typeof omlO21PatientVisitSchema>;

/**
 * OML_O21.INSURANCE group schema
 * Defines the structure and validation rules for the OML_O21.INSURANCE group
 */
export const omlO21InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.INSURANCE",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.INSURANCE schema
 */
export type OML_O21_INSURANCE = z.infer<typeof omlO21InsuranceSchema>;

/**
 * OML_O21.TIMING group schema
 * Defines the structure and validation rules for the OML_O21.TIMING group
 */
export const omlO21TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.TIMING",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.TIMING schema
 */
export type OML_O21_TIMING = z.infer<typeof omlO21TimingSchema>;

/**
 * OML_O21.OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O21.OBSERVATION group
 */
export const omlO21ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    TCD: segments.tcdSchema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.OBSERVATION",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.OBSERVATION schema
 */
export type OML_O21_OBSERVATION = z.infer<typeof omlO21ObservationSchema>;

/**
 * OML_O21.CONTAINER group schema
 * Defines the structure and validation rules for the OML_O21.CONTAINER group
 */
export const omlO21ContainerSchema = z
  .object({
    SAC: segments.sacSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.CONTAINER",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.CONTAINER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.CONTAINER schema
 */
export type OML_O21_CONTAINER = z.infer<typeof omlO21ContainerSchema>;

/**
 * OML_O21.PATIENT_PRIOR group schema
 * Defines the structure and validation rules for the OML_O21.PATIENT_PRIOR group
 */
export const omlO21PatientPriorSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.PATIENT_PRIOR",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.PATIENT_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.PATIENT_PRIOR schema
 */
export type OML_O21_PATIENT_PRIOR = z.infer<typeof omlO21PatientPriorSchema>;

/**
 * OML_O21.PATIENT_VISIT_PRIOR group schema
 * Defines the structure and validation rules for the OML_O21.PATIENT_VISIT_PRIOR group
 */
export const omlO21PatientVisitPriorSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.PATIENT_VISIT_PRIOR",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.PATIENT_VISIT_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.PATIENT_VISIT_PRIOR schema
 */
export type OML_O21_PATIENT_VISIT_PRIOR = z.infer<typeof omlO21PatientVisitPriorSchema>;

/**
 * OML_O21.TIMING_PRIOR group schema
 * Defines the structure and validation rules for the OML_O21.TIMING_PRIOR group
 */
export const omlO21TimingPriorSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.TIMING_PRIOR",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.TIMING_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.TIMING_PRIOR schema
 */
export type OML_O21_TIMING_PRIOR = z.infer<typeof omlO21TimingPriorSchema>;

/**
 * OML_O21.OBSERVATION_PRIOR group schema
 * Defines the structure and validation rules for the OML_O21.OBSERVATION_PRIOR group
 */
export const omlO21ObservationPriorSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.OBSERVATION_PRIOR",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.OBSERVATION_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.OBSERVATION_PRIOR schema
 */
export type OML_O21_OBSERVATION_PRIOR = z.infer<typeof omlO21ObservationPriorSchema>;

/**
 * OML_O21.PATIENT group schema
 * Defines the structure and validation rules for the OML_O21.PATIENT group
 */
export const omlO21PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    NK1: z.array(segments.nk1Schema).optional(),
    PATIENT_VISIT: omlO21PatientVisitSchema.optional(),
    INSURANCE: z.array(omlO21InsuranceSchema).optional(),
    GT1: segments.gt1Schema.optional(),
    AL1: z.array(segments.al1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.PATIENT schema
 */
export type OML_O21_PATIENT = z.infer<typeof omlO21PatientSchema>;

/**
 * OML_O21.SPECIMEN group schema
 * Defines the structure and validation rules for the OML_O21.SPECIMEN group
 */
export const omlO21SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    OBX: z.array(segments.obxSchema).optional(),
    CONTAINER: z.array(omlO21ContainerSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.SPECIMEN",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.SPECIMEN schema
 */
export type OML_O21_SPECIMEN = z.infer<typeof omlO21SpecimenSchema>;

/**
 * OML_O21.ORDER_PRIOR group schema
 * Defines the structure and validation rules for the OML_O21.ORDER_PRIOR group
 */
export const omlO21OrderPriorSchema = z
  .object({
    ORC: segments.orcSchema.optional(),
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional(),
    ROL: z.array(segments.rolSchema).optional(),
    TIMING_PRIOR: z.array(omlO21TimingPriorSchema).optional(),
    OBSERVATION_PRIOR: z.array(omlO21ObservationPriorSchema)
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.ORDER_PRIOR",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.ORDER_PRIOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.ORDER_PRIOR schema
 */
export type OML_O21_ORDER_PRIOR = z.infer<typeof omlO21OrderPriorSchema>;

/**
 * OML_O21.PRIOR_RESULT group schema
 * Defines the structure and validation rules for the OML_O21.PRIOR_RESULT group
 */
export const omlO21PriorResultSchema = z
  .object({
    PATIENT_PRIOR: omlO21PatientPriorSchema.optional(),
    PATIENT_VISIT_PRIOR: omlO21PatientVisitPriorSchema.optional(),
    AL1: z.array(segments.al1Schema).optional(),
    ORDER_PRIOR: z.array(omlO21OrderPriorSchema)
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.PRIOR_RESULT",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.PRIOR_RESULT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.PRIOR_RESULT schema
 */
export type OML_O21_PRIOR_RESULT = z.infer<typeof omlO21PriorResultSchema>;

/**
 * OML_O21.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the OML_O21.OBSERVATION_REQUEST group
 */
export const omlO21ObservationRequestSchema = z
  .object({
    OBR: segments.obrSchema,
    TCD: segments.tcdSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    ROL: z.array(segments.rolSchema).optional(),
    CTD: segments.ctdSchema.optional(),
    DG1: z.array(segments.dg1Schema).optional(),
    OBSERVATION: z.array(omlO21ObservationSchema).optional(),
    SPECIMEN: z.array(omlO21SpecimenSchema).optional(),
    PRIOR_RESULT: z.array(omlO21PriorResultSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.OBSERVATION_REQUEST",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.OBSERVATION_REQUEST group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.OBSERVATION_REQUEST schema
 */
export type OML_O21_OBSERVATION_REQUEST = z.infer<typeof omlO21ObservationRequestSchema>;

/**
 * OML_O21.ORDER group schema
 * Defines the structure and validation rules for the OML_O21.ORDER group
 */
export const omlO21OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(omlO21TimingSchema).optional(),
    OBSERVATION_REQUEST: omlO21ObservationRequestSchema.optional(),
    FT1: z.array(segments.ft1Schema).optional(),
    CTI: z.array(segments.ctiSchema).optional(),
    BLG: segments.blgSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OML_O21.ORDER",
    version: "2.6",
    description: "HL7 v2.6 OML_O21.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OML_O21.ORDER schema
 */
export type OML_O21_ORDER = z.infer<typeof omlO21OrderSchema>;

/**
 * OML_O21 message schema
 * Defines the structure and validation rules for the OML_O21 message
 */
export const oml_o21Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: omlO21PatientSchema.optional(),
    ORDER: z.array(omlO21OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "OML_O21",
    version: "2.6",
    description: "HL7 v2.6 OML_O21 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OML_O21 schema
 */
export type OML_O21 = z.infer<typeof oml_o21Schema>;

/**
 * Default export for convenience
 */
export default oml_o21Schema;
