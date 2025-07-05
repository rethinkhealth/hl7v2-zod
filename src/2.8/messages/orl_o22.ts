import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 ORL_O22 Message
 *
 * HL7 v2.8 ORL_O22 message definition
 * Contains segment definitions and constraints for the ORL_O22 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O22.TIMING group schema
 * Defines the structure and validation rules for the ORL_O22.TIMING group
 */
export const orlO22TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O22.TIMING",
    version: "2.8",
    description: "HL7 v2.8 ORL_O22.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O22.TIMING schema
 */
export type ORL_O22_TIMING = z.infer<typeof orlO22TimingSchema>;

/**
 * ORL_O22.SPECIMEN group schema
 * Defines the structure and validation rules for the ORL_O22.SPECIMEN group
 */
export const orlO22SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    SAC: z.array(segments.sacSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O22.SPECIMEN",
    version: "2.8",
    description: "HL7 v2.8 ORL_O22.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O22.SPECIMEN schema
 */
export type ORL_O22_SPECIMEN = z.infer<typeof orlO22SpecimenSchema>;

/**
 * ORL_O22.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O22.OBSERVATION_REQUEST group
 */
export const orlO22ObservationRequestSchema = z
  .object({
    OBR: segments.obrSchema,
    PRT: z.array(segments.prtSchema).optional(),
    SPECIMEN: z.array(orlO22SpecimenSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O22.OBSERVATION_REQUEST",
    version: "2.8",
    description: "HL7 v2.8 ORL_O22.OBSERVATION_REQUEST group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O22.OBSERVATION_REQUEST schema
 */
export type ORL_O22_OBSERVATION_REQUEST = z.infer<typeof orlO22ObservationRequestSchema>;

/**
 * ORL_O22.ORDER group schema
 * Defines the structure and validation rules for the ORL_O22.ORDER group
 */
export const orlO22OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    PRT: z.array(segments.prtSchema).optional(),
    TIMING: z.array(orlO22TimingSchema).optional(),
    OBSERVATION_REQUEST: orlO22ObservationRequestSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O22.ORDER",
    version: "2.8",
    description: "HL7 v2.8 ORL_O22.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O22.ORDER schema
 */
export type ORL_O22_ORDER = z.infer<typeof orlO22OrderSchema>;

/**
 * ORL_O22.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O22.RESPONSE group
 */
export const orlO22ResponseSchema = z
  .object({
    PID: segments.pidSchema,
    PRT: z.array(segments.prtSchema).optional(),
    ARV: z.array(segments.arvSchema).optional(),
    ORDER: z.array(orlO22OrderSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O22.RESPONSE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O22.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O22.RESPONSE schema
 */
export type ORL_O22_RESPONSE = z.infer<typeof orlO22ResponseSchema>;

/**
 * ORL_O22 message schema
 * Defines the structure and validation rules for the ORL_O22 message
 */
export const orl_o22Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: orlO22ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O22",
    version: "2.8",
    description: "HL7 v2.8 ORL_O22 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORL_O22 schema
 */
export type ORL_O22 = z.infer<typeof orl_o22Schema>;

/**
 * Default export for convenience
 */
export default orl_o22Schema;
