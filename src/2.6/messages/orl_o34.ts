import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 ORL_O34 Message
 *
 * HL7 v2.6 ORL_O34 message definition
 * Contains segment definitions and constraints for the ORL_O34 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O34.TIMING group schema
 * Defines the structure and validation rules for the ORL_O34.TIMING group
 */
export const orlO34TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O34.TIMING",
    version: "2.6",
    description: "HL7 v2.6 ORL_O34.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O34.TIMING schema
 */
export type ORL_O34_TIMING = z.infer<typeof orlO34TimingSchema>;

/**
 * ORL_O34.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O34.OBSERVATION_REQUEST group
 */
export const orlO34ObservationRequestSchema = z
  .object({
    OBR: segments.obrSchema,
    ROL: z.array(segments.rolSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O34.OBSERVATION_REQUEST",
    version: "2.6",
    description: "HL7 v2.6 ORL_O34.OBSERVATION_REQUEST group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O34.OBSERVATION_REQUEST schema
 */
export type ORL_O34_OBSERVATION_REQUEST = z.infer<typeof orlO34ObservationRequestSchema>;

/**
 * ORL_O34.ORDER group schema
 * Defines the structure and validation rules for the ORL_O34.ORDER group
 */
export const orlO34OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(orlO34TimingSchema).optional(),
    OBSERVATION_REQUEST: orlO34ObservationRequestSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O34.ORDER",
    version: "2.6",
    description: "HL7 v2.6 ORL_O34.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O34.ORDER schema
 */
export type ORL_O34_ORDER = z.infer<typeof orlO34OrderSchema>;

/**
 * ORL_O34.SPECIMEN group schema
 * Defines the structure and validation rules for the ORL_O34.SPECIMEN group
 */
export const orlO34SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    OBX: z.array(segments.obxSchema).optional(),
    SAC: z.array(segments.sacSchema).optional(),
    ORDER: z.array(orlO34OrderSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O34.SPECIMEN",
    version: "2.6",
    description: "HL7 v2.6 ORL_O34.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O34.SPECIMEN schema
 */
export type ORL_O34_SPECIMEN = z.infer<typeof orlO34SpecimenSchema>;

/**
 * ORL_O34.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O34.RESPONSE group
 */
export const orlO34ResponseSchema = z
  .object({
    PID: segments.pidSchema,
    SPECIMEN: z.array(orlO34SpecimenSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORL_O34.RESPONSE",
    version: "2.6",
    description: "HL7 v2.6 ORL_O34.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O34.RESPONSE schema
 */
export type ORL_O34_RESPONSE = z.infer<typeof orlO34ResponseSchema>;

/**
 * ORL_O34 message schema
 * Defines the structure and validation rules for the ORL_O34 message
 */
export const orl_o34Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: orlO34ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O34",
    version: "2.6",
    description: "HL7 v2.6 ORL_O34 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORL_O34 schema
 */
export type ORL_O34 = z.infer<typeof orl_o34Schema>;

/**
 * Default export for convenience
 */
export default orl_o34Schema;
