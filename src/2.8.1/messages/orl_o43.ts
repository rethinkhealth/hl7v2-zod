import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 ORL_O43 Message
 *
 * HL7 v2.8 ORL_O43 message definition
 * Contains segment definitions and constraints for the ORL_O43 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O43.PATIENT group schema
 * Defines the structure and validation rules for the ORL_O43.PATIENT group
 */
export const orlO43PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O43.PATIENT",
    version: "2.8",
    description: "HL7 v2.8 ORL_O43.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O43.PATIENT schema
 */
export type ORL_O43_PATIENT = z.infer<typeof orlO43PatientSchema>;

/**
 * ORL_O43.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the ORL_O43.SPECIMEN_OBSERVATION group
 */
export const orlO43SpecimenObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O43.SPECIMEN_OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 ORL_O43.SPECIMEN_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O43.SPECIMEN_OBSERVATION schema
 */
export type ORL_O43_SPECIMEN_OBSERVATION = z.infer<typeof orlO43SpecimenObservationSchema>;

/**
 * ORL_O43.TIMING group schema
 * Defines the structure and validation rules for the ORL_O43.TIMING group
 */
export const orlO43TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O43.TIMING",
    version: "2.8",
    description: "HL7 v2.8 ORL_O43.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O43.TIMING schema
 */
export type ORL_O43_TIMING = z.infer<typeof orlO43TimingSchema>;

/**
 * ORL_O43.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O43.OBSERVATION_REQUEST group
 */
export const orlO43ObservationRequestSchema = z
  .object({
    OBR: segments.obrSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O43.OBSERVATION_REQUEST",
    version: "2.8",
    description: "HL7 v2.8 ORL_O43.OBSERVATION_REQUEST group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O43.OBSERVATION_REQUEST schema
 */
export type ORL_O43_OBSERVATION_REQUEST = z.infer<typeof orlO43ObservationRequestSchema>;

/**
 * ORL_O43.ORDER group schema
 * Defines the structure and validation rules for the ORL_O43.ORDER group
 */
export const orlO43OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    PRT: z.array(segments.prtSchema).optional(),
    TIMING: z.array(orlO43TimingSchema).optional(),
    OBSERVATION_REQUEST: orlO43ObservationRequestSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O43.ORDER",
    version: "2.8",
    description: "HL7 v2.8 ORL_O43.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O43.ORDER schema
 */
export type ORL_O43_ORDER = z.infer<typeof orlO43OrderSchema>;

/**
 * ORL_O43.SPECIMEN_CONTAINER group schema
 * Defines the structure and validation rules for the ORL_O43.SPECIMEN_CONTAINER group
 */
export const orlO43SpecimenContainerSchema = z
  .object({
    SAC: segments.sacSchema,
    ORDER: z.array(orlO43OrderSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O43.SPECIMEN_CONTAINER",
    version: "2.8",
    description: "HL7 v2.8 ORL_O43.SPECIMEN_CONTAINER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O43.SPECIMEN_CONTAINER schema
 */
export type ORL_O43_SPECIMEN_CONTAINER = z.infer<typeof orlO43SpecimenContainerSchema>;

/**
 * ORL_O43.SPECIMEN group schema
 * Defines the structure and validation rules for the ORL_O43.SPECIMEN group
 */
export const orlO43SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    SPECIMEN_OBSERVATION: z.array(orlO43SpecimenObservationSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    SPECIMEN_CONTAINER: z.array(orlO43SpecimenContainerSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORL_O43.SPECIMEN",
    version: "2.8",
    description: "HL7 v2.8 ORL_O43.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O43.SPECIMEN schema
 */
export type ORL_O43_SPECIMEN = z.infer<typeof orlO43SpecimenSchema>;

/**
 * ORL_O43.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O43.RESPONSE group
 */
export const orlO43ResponseSchema = z
  .object({
    PATIENT: orlO43PatientSchema.optional(),
    SPECIMEN: z.array(orlO43SpecimenSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORL_O43.RESPONSE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O43.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O43.RESPONSE schema
 */
export type ORL_O43_RESPONSE = z.infer<typeof orlO43ResponseSchema>;

/**
 * ORL_O43 message schema
 * Defines the structure and validation rules for the ORL_O43 message
 */
export const orl_o43Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: orlO43ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O43",
    version: "2.8",
    description: "HL7 v2.8 ORL_O43 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORL_O43 schema
 */
export type ORL_O43 = z.infer<typeof orl_o43Schema>;

/**
 * Default export for convenience
 */
export default orl_o43Schema;
