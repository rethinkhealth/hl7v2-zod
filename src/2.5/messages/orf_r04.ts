import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 ORF_R04 Message
 *
 * HL7 v2.5 ORF_R04 message definition
 * Contains segment definitions and constraints for the ORF_R04 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORF_R04.PATIENT group schema
 * Defines the structure and validation rules for the ORF_R04.PATIENT group
 */
export const orfR04PatientSchema = z
  .object({
    PID: segments.pidSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORF_R04.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 ORF_R04.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORF_R04.PATIENT schema
 */
export type ORF_R04_PATIENT = z.infer<typeof orfR04PatientSchema>;

/**
 * ORF_R04.TIMING_QTY group schema
 * Defines the structure and validation rules for the ORF_R04.TIMING_QTY group
 */
export const orfR04TimingQtySchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORF_R04.TIMING_QTY",
    version: "2.5",
    description: "HL7 v2.5 ORF_R04.TIMING_QTY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORF_R04.TIMING_QTY schema
 */
export type ORF_R04_TIMING_QTY = z.infer<typeof orfR04TimingQtySchema>;

/**
 * ORF_R04.OBSERVATION group schema
 * Defines the structure and validation rules for the ORF_R04.OBSERVATION group
 */
export const orfR04ObservationSchema = z
  .object({
    OBX: segments.obxSchema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORF_R04.OBSERVATION",
    version: "2.5",
    description: "HL7 v2.5 ORF_R04.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORF_R04.OBSERVATION schema
 */
export type ORF_R04_OBSERVATION = z.infer<typeof orfR04ObservationSchema>;

/**
 * ORF_R04.ORDER group schema
 * Defines the structure and validation rules for the ORF_R04.ORDER group
 */
export const orfR04OrderSchema = z
  .object({
    ORC: segments.orcSchema.optional(),
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional(),
    TIMING_QTY: z.array(orfR04TimingQtySchema).optional(),
    CTD: segments.ctdSchema.optional(),
    OBSERVATION: z.array(orfR04ObservationSchema),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORF_R04.ORDER",
    version: "2.5",
    description: "HL7 v2.5 ORF_R04.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORF_R04.ORDER schema
 */
export type ORF_R04_ORDER = z.infer<typeof orfR04OrderSchema>;

/**
 * ORF_R04.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the ORF_R04.QUERY_RESPONSE group
 */
export const orfR04QueryResponseSchema = z
  .object({
    PATIENT: orfR04PatientSchema.optional(),
    ORDER: z.array(orfR04OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORF_R04.QUERY_RESPONSE",
    version: "2.5",
    description: "HL7 v2.5 ORF_R04.QUERY_RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORF_R04.QUERY_RESPONSE schema
 */
export type ORF_R04_QUERY_RESPONSE = z.infer<typeof orfR04QueryResponseSchema>;

/**
 * ORF_R04 message schema
 * Defines the structure and validation rules for the ORF_R04 message
 */
export const orf_r04Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    MSA: segments.msaSchema,
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    QUERY_RESPONSE: z.array(orfR04QueryResponseSchema),
    ERR: z.array(segments.errSchema).optional(),
    QAK: segments.qakSchema.optional(),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORF_R04",
    version: "2.5",
    description: "HL7 v2.5 ORF_R04 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORF_R04 schema
 */
export type ORF_R04 = z.infer<typeof orf_r04Schema>;

/**
 * Default export for convenience
 */
export default orf_r04Schema;
