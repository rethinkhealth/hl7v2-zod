import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 BRP_O30 Message
 *
 * HL7 v2.6 BRP_O30 message definition
 * Contains segment definitions and constraints for the BRP_O30 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BRP_O30.TIMING group schema
 * Defines the structure and validation rules for the BRP_O30.TIMING group
 */
export const brpO30TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BRP_O30.TIMING",
    version: "2.6",
    description: "HL7 v2.6 BRP_O30.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BRP_O30.TIMING schema
 */
export type BRP_O30_TIMING = z.infer<typeof brpO30TimingSchema>;

/**
 * BRP_O30.ORDER group schema
 * Defines the structure and validation rules for the BRP_O30.ORDER group
 */
export const brpO30OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(brpO30TimingSchema).optional(),
    BPO: segments.bpoSchema.optional(),
    BPX: z.array(segments.bpxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BRP_O30.ORDER",
    version: "2.6",
    description: "HL7 v2.6 BRP_O30.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BRP_O30.ORDER schema
 */
export type BRP_O30_ORDER = z.infer<typeof brpO30OrderSchema>;

/**
 * BRP_O30.PATIENT group schema
 * Defines the structure and validation rules for the BRP_O30.PATIENT group
 */
export const brpO30PatientSchema = z
  .object({
    PID: segments.pidSchema,
    ORDER: z.array(brpO30OrderSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BRP_O30.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 BRP_O30.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BRP_O30.PATIENT schema
 */
export type BRP_O30_PATIENT = z.infer<typeof brpO30PatientSchema>;

/**
 * BRP_O30.RESPONSE group schema
 * Defines the structure and validation rules for the BRP_O30.RESPONSE group
 */
export const brpO30ResponseSchema = z
  .object({
    PATIENT: brpO30PatientSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "BRP_O30.RESPONSE",
    version: "2.6",
    description: "HL7 v2.6 BRP_O30.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BRP_O30.RESPONSE schema
 */
export type BRP_O30_RESPONSE = z.infer<typeof brpO30ResponseSchema>;

/**
 * BRP_O30 message schema
 * Defines the structure and validation rules for the BRP_O30 message
 */
export const brp_o30Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: brpO30ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "BRP_O30",
    version: "2.6",
    description: "HL7 v2.6 BRP_O30 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the BRP_O30 schema
 */
export type BRP_O30 = z.infer<typeof brp_o30Schema>;

/**
 * Default export for convenience
 */
export default brp_o30Schema;
