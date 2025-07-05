import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 OPU_R25 Message
 *
 * HL7 v2.7 OPU_R25 message definition
 * Contains segment definitions and constraints for the OPU_R25 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OPU_R25.PATIENT_VISIT_OBSERVATION group schema
 * Defines the structure and validation rules for the OPU_R25.PATIENT_VISIT_OBSERVATION group
 */
export const opuR25PatientVisitObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional(),
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.PATIENT_VISIT_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.PATIENT_VISIT_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.PATIENT_VISIT_OBSERVATION schema
 */
export type OPU_R25_PATIENT_VISIT_OBSERVATION = z.infer<typeof opuR25PatientVisitObservationSchema>;

/**
 * OPU_R25.PATIENT_OBSERVATION group schema
 * Defines the structure and validation rules for the OPU_R25.PATIENT_OBSERVATION group
 */
export const opuR25PatientObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.PATIENT_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.PATIENT_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.PATIENT_OBSERVATION schema
 */
export type OPU_R25_PATIENT_OBSERVATION = z.infer<typeof opuR25PatientObservationSchema>;

/**
 * OPU_R25.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OPU_R25.SPECIMEN_OBSERVATION group
 */
export const opuR25SpecimenObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.SPECIMEN_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.SPECIMEN_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.SPECIMEN_OBSERVATION schema
 */
export type OPU_R25_SPECIMEN_OBSERVATION = z.infer<typeof opuR25SpecimenObservationSchema>;

/**
 * OPU_R25.CONTAINER group schema
 * Defines the structure and validation rules for the OPU_R25.CONTAINER group
 */
export const opuR25ContainerSchema = z
  .object({
    SAC: segments.sacSchema,
    INV: segments.invSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.CONTAINER",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.CONTAINER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.CONTAINER schema
 */
export type OPU_R25_CONTAINER = z.infer<typeof opuR25ContainerSchema>;

/**
 * OPU_R25.TIMING_QTY group schema
 * Defines the structure and validation rules for the OPU_R25.TIMING_QTY group
 */
export const opuR25TimingQtySchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.TIMING_QTY",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.TIMING_QTY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.TIMING_QTY schema
 */
export type OPU_R25_TIMING_QTY = z.infer<typeof opuR25TimingQtySchema>;

/**
 * OPU_R25.RESULT group schema
 * Defines the structure and validation rules for the OPU_R25.RESULT group
 */
export const opuR25ResultSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.RESULT",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.RESULT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.RESULT schema
 */
export type OPU_R25_RESULT = z.infer<typeof opuR25ResultSchema>;

/**
 * OPU_R25.PATIENT group schema
 * Defines the structure and validation rules for the OPU_R25.PATIENT group
 */
export const opuR25PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    PATIENT_OBSERVATION: z.array(opuR25PatientObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.PATIENT",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.PATIENT schema
 */
export type OPU_R25_PATIENT = z.infer<typeof opuR25PatientSchema>;

/**
 * OPU_R25.ORDER group schema
 * Defines the structure and validation rules for the OPU_R25.ORDER group
 */
export const opuR25OrderSchema = z
  .object({
    OBR: segments.obrSchema,
    ORC: segments.orcSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PRT: z.array(segments.prtSchema).optional(),
    TIMING_QTY: z.array(opuR25TimingQtySchema).optional(),
    RESULT: z.array(opuR25ResultSchema)
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.ORDER",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.ORDER schema
 */
export type OPU_R25_ORDER = z.infer<typeof opuR25OrderSchema>;

/**
 * OPU_R25.SPECIMEN group schema
 * Defines the structure and validation rules for the OPU_R25.SPECIMEN group
 */
export const opuR25SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    SPECIMEN_OBSERVATION: z.array(opuR25SpecimenObservationSchema).optional(),
    CONTAINER: z.array(opuR25ContainerSchema).optional(),
    ORDER: z.array(opuR25OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.SPECIMEN",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.SPECIMEN schema
 */
export type OPU_R25_SPECIMEN = z.infer<typeof opuR25SpecimenSchema>;

/**
 * OPU_R25.ACCESSION_DETAIL group schema
 * Defines the structure and validation rules for the OPU_R25.ACCESSION_DETAIL group
 */
export const opuR25AccessionDetailSchema = z
  .object({
    NK1: z.array(segments.nk1Schema),
    PATIENT: opuR25PatientSchema.optional(),
    SPECIMEN: z.array(opuR25SpecimenSchema)
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25.ACCESSION_DETAIL",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25.ACCESSION_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPU_R25.ACCESSION_DETAIL schema
 */
export type OPU_R25_ACCESSION_DETAIL = z.infer<typeof opuR25AccessionDetailSchema>;

/**
 * OPU_R25 message schema
 * Defines the structure and validation rules for the OPU_R25 message
 */
export const opu_r25Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: segments.nteSchema.optional(),
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    PATIENT_VISIT_OBSERVATION: z.array(opuR25PatientVisitObservationSchema).optional(),
    ACCESSION_DETAIL: z.array(opuR25AccessionDetailSchema)
  })
  .register(hl7v2Metadata, {
    title: "OPU_R25",
    version: "2.7",
    description: "HL7 v2.7 OPU_R25 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OPU_R25 schema
 */
export type OPU_R25 = z.infer<typeof opu_r25Schema>;

/**
 * Default export for convenience
 */
export default opu_r25Schema;
