import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 RRE_O12 Message
 *
 * HL7 v2.5 RRE_O12 message definition
 * Contains segment definitions and constraints for the RRE_O12 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RRE_O12.PATIENT group schema
 * Defines the structure and validation rules for the RRE_O12.PATIENT group
 */
export const rreO12PatientSchema = z
  .object({
    PID: segments.pidSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRE_O12.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 RRE_O12.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRE_O12.PATIENT schema
 */
export type RRE_O12_PATIENT = z.infer<typeof rreO12PatientSchema>;

/**
 * RRE_O12.TIMING group schema
 * Defines the structure and validation rules for the RRE_O12.TIMING group
 */
export const rreO12TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRE_O12.TIMING",
    version: "2.5",
    description: "HL7 v2.5 RRE_O12.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRE_O12.TIMING schema
 */
export type RRE_O12_TIMING = z.infer<typeof rreO12TimingSchema>;

/**
 * RRE_O12.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RRE_O12.TIMING_ENCODED group
 */
export const rreO12TimingEncodedSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRE_O12.TIMING_ENCODED",
    version: "2.5",
    description: "HL7 v2.5 RRE_O12.TIMING_ENCODED group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRE_O12.TIMING_ENCODED schema
 */
export type RRE_O12_TIMING_ENCODED = z.infer<typeof rreO12TimingEncodedSchema>;

/**
 * RRE_O12.ENCODING group schema
 * Defines the structure and validation rules for the RRE_O12.ENCODING group
 */
export const rreO12EncodingSchema = z
  .object({
    RXE: segments.rxeSchema,
    NTE: z.array(segments.nteSchema).optional(),
    TIMING_ENCODED: z.array(rreO12TimingEncodedSchema),
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRE_O12.ENCODING",
    version: "2.5",
    description: "HL7 v2.5 RRE_O12.ENCODING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRE_O12.ENCODING schema
 */
export type RRE_O12_ENCODING = z.infer<typeof rreO12EncodingSchema>;

/**
 * RRE_O12.ORDER group schema
 * Defines the structure and validation rules for the RRE_O12.ORDER group
 */
export const rreO12OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(rreO12TimingSchema).optional(),
    ENCODING: rreO12EncodingSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RRE_O12.ORDER",
    version: "2.5",
    description: "HL7 v2.5 RRE_O12.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRE_O12.ORDER schema
 */
export type RRE_O12_ORDER = z.infer<typeof rreO12OrderSchema>;

/**
 * RRE_O12.RESPONSE group schema
 * Defines the structure and validation rules for the RRE_O12.RESPONSE group
 */
export const rreO12ResponseSchema = z
  .object({
    PATIENT: rreO12PatientSchema.optional(),
    ORDER: z.array(rreO12OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "RRE_O12.RESPONSE",
    version: "2.5",
    description: "HL7 v2.5 RRE_O12.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRE_O12.RESPONSE schema
 */
export type RRE_O12_RESPONSE = z.infer<typeof rreO12ResponseSchema>;

/**
 * RRE_O12 message schema
 * Defines the structure and validation rules for the RRE_O12 message
 */
export const rre_o12Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: rreO12ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RRE_O12",
    version: "2.5",
    description: "HL7 v2.5 RRE_O12 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RRE_O12 schema
 */
export type RRE_O12 = z.infer<typeof rre_o12Schema>;

/**
 * Default export for convenience
 */
export default rre_o12Schema;
