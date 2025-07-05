import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 RRA_O18 Message
 *
 * HL7 v2.6 RRA_O18 message definition
 * Contains segment definitions and constraints for the RRA_O18 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RRA_O18.PATIENT group schema
 * Defines the structure and validation rules for the RRA_O18.PATIENT group
 */
export const rraO18PatientSchema = z
  .object({
    PID: segments.pidSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRA_O18.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 RRA_O18.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRA_O18.PATIENT schema
 */
export type RRA_O18_PATIENT = z.infer<typeof rraO18PatientSchema>;

/**
 * RRA_O18.TIMING group schema
 * Defines the structure and validation rules for the RRA_O18.TIMING group
 */
export const rraO18TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RRA_O18.TIMING",
    version: "2.6",
    description: "HL7 v2.6 RRA_O18.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRA_O18.TIMING schema
 */
export type RRA_O18_TIMING = z.infer<typeof rraO18TimingSchema>;

/**
 * RRA_O18.ADMINISTRATION group schema
 * Defines the structure and validation rules for the RRA_O18.ADMINISTRATION group
 */
export const rraO18AdministrationSchema = z
  .object({
    RXA: z.array(segments.rxaSchema),
    RXR: segments.rxrSchema
  })
  .register(hl7v2Metadata, {
    title: "RRA_O18.ADMINISTRATION",
    version: "2.6",
    description: "HL7 v2.6 RRA_O18.ADMINISTRATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRA_O18.ADMINISTRATION schema
 */
export type RRA_O18_ADMINISTRATION = z.infer<typeof rraO18AdministrationSchema>;

/**
 * RRA_O18.ORDER group schema
 * Defines the structure and validation rules for the RRA_O18.ORDER group
 */
export const rraO18OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(rraO18TimingSchema).optional(),
    ADMINISTRATION: rraO18AdministrationSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RRA_O18.ORDER",
    version: "2.6",
    description: "HL7 v2.6 RRA_O18.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRA_O18.ORDER schema
 */
export type RRA_O18_ORDER = z.infer<typeof rraO18OrderSchema>;

/**
 * RRA_O18.RESPONSE group schema
 * Defines the structure and validation rules for the RRA_O18.RESPONSE group
 */
export const rraO18ResponseSchema = z
  .object({
    PATIENT: rraO18PatientSchema.optional(),
    ORDER: z.array(rraO18OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "RRA_O18.RESPONSE",
    version: "2.6",
    description: "HL7 v2.6 RRA_O18.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RRA_O18.RESPONSE schema
 */
export type RRA_O18_RESPONSE = z.infer<typeof rraO18ResponseSchema>;

/**
 * RRA_O18 message schema
 * Defines the structure and validation rules for the RRA_O18 message
 */
export const rra_o18Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: rraO18ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RRA_O18",
    version: "2.6",
    description: "HL7 v2.6 RRA_O18 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RRA_O18 schema
 */
export type RRA_O18 = z.infer<typeof rra_o18Schema>;

/**
 * Default export for convenience
 */
export default rra_o18Schema;
