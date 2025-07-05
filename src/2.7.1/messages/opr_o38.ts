import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 OPR_O38 Message
 *
 * HL7 v2.7 OPR_O38 message definition
 * Contains segment definitions and constraints for the OPR_O38 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OPR_O38.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OPR_O38.SPECIMEN_OBSERVATION group
 */
export const oprO38SpecimenObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPR_O38.SPECIMEN_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 OPR_O38.SPECIMEN_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPR_O38.SPECIMEN_OBSERVATION schema
 */
export type OPR_O38_SPECIMEN_OBSERVATION = z.infer<typeof oprO38SpecimenObservationSchema>;

/**
 * OPR_O38.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the OPR_O38.OBSERVATION_REQUEST group
 */
export const oprO38ObservationRequestSchema = z
  .object({
    ORC: segments.orcSchema,
    OBR: segments.obrSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPR_O38.OBSERVATION_REQUEST",
    version: "2.7",
    description: "HL7 v2.7 OPR_O38.OBSERVATION_REQUEST group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPR_O38.OBSERVATION_REQUEST schema
 */
export type OPR_O38_OBSERVATION_REQUEST = z.infer<typeof oprO38ObservationRequestSchema>;

/**
 * OPR_O38.TIMING group schema
 * Defines the structure and validation rules for the OPR_O38.TIMING group
 */
export const oprO38TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPR_O38.TIMING",
    version: "2.7",
    description: "HL7 v2.7 OPR_O38.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPR_O38.TIMING schema
 */
export type OPR_O38_TIMING = z.infer<typeof oprO38TimingSchema>;

/**
 * OPR_O38.SPECIMEN group schema
 * Defines the structure and validation rules for the OPR_O38.SPECIMEN group
 */
export const oprO38SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    SPECIMEN_OBSERVATION: z.array(oprO38SpecimenObservationSchema).optional(),
    SAC: z.array(segments.sacSchema).optional(),
    OBSERVATION_REQUEST: z.array(oprO38ObservationRequestSchema).optional(),
    TIMING: z.array(oprO38TimingSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPR_O38.SPECIMEN",
    version: "2.7",
    description: "HL7 v2.7 OPR_O38.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPR_O38.SPECIMEN schema
 */
export type OPR_O38_SPECIMEN = z.infer<typeof oprO38SpecimenSchema>;

/**
 * OPR_O38.ORDER group schema
 * Defines the structure and validation rules for the OPR_O38.ORDER group
 */
export const oprO38OrderSchema = z
  .object({
    NK1: z.array(segments.nk1Schema),
    PID: segments.pidSchema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    SPECIMEN: z.array(oprO38SpecimenSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OPR_O38.ORDER",
    version: "2.7",
    description: "HL7 v2.7 OPR_O38.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPR_O38.ORDER schema
 */
export type OPR_O38_ORDER = z.infer<typeof oprO38OrderSchema>;

/**
 * OPR_O38.RESPONSE group schema
 * Defines the structure and validation rules for the OPR_O38.RESPONSE group
 */
export const oprO38ResponseSchema = z
  .object({
    ORDER: z.array(oprO38OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "OPR_O38.RESPONSE",
    version: "2.7",
    description: "HL7 v2.7 OPR_O38.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OPR_O38.RESPONSE schema
 */
export type OPR_O38_RESPONSE = z.infer<typeof oprO38ResponseSchema>;

/**
 * OPR_O38 message schema
 * Defines the structure and validation rules for the OPR_O38 message
 */
export const opr_o38Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: oprO38ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OPR_O38",
    version: "2.7",
    description: "HL7 v2.7 OPR_O38 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OPR_O38 schema
 */
export type OPR_O38 = z.infer<typeof opr_o38Schema>;

/**
 * Default export for convenience
 */
export default opr_o38Schema;
