import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 ORB_O28 Message
 *
 * HL7 v2.5 ORB_O28 message definition
 * Contains segment definitions and constraints for the ORB_O28 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORB_O28.TIMING group schema
 * Defines the structure and validation rules for the ORB_O28.TIMING group
 */
export const orbO28TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORB_O28.TIMING",
    version: "2.5",
    description: "HL7 v2.5 ORB_O28.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORB_O28.TIMING schema
 */
export type ORB_O28_TIMING = z.infer<typeof orbO28TimingSchema>;

/**
 * ORB_O28.ORDER group schema
 * Defines the structure and validation rules for the ORB_O28.ORDER group
 */
export const orbO28OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(orbO28TimingSchema).optional(),
    BPO: segments.bpoSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORB_O28.ORDER",
    version: "2.5",
    description: "HL7 v2.5 ORB_O28.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORB_O28.ORDER schema
 */
export type ORB_O28_ORDER = z.infer<typeof orbO28OrderSchema>;

/**
 * ORB_O28.PATIENT group schema
 * Defines the structure and validation rules for the ORB_O28.PATIENT group
 */
export const orbO28PatientSchema = z
  .object({
    PID: segments.pidSchema,
    ORDER: z.array(orbO28OrderSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORB_O28.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 ORB_O28.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORB_O28.PATIENT schema
 */
export type ORB_O28_PATIENT = z.infer<typeof orbO28PatientSchema>;

/**
 * ORB_O28.RESPONSE group schema
 * Defines the structure and validation rules for the ORB_O28.RESPONSE group
 */
export const orbO28ResponseSchema = z
  .object({
    PATIENT: orbO28PatientSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORB_O28.RESPONSE",
    version: "2.5",
    description: "HL7 v2.5 ORB_O28.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORB_O28.RESPONSE schema
 */
export type ORB_O28_RESPONSE = z.infer<typeof orbO28ResponseSchema>;

/**
 * ORB_O28 message schema
 * Defines the structure and validation rules for the ORB_O28 message
 */
export const orb_o28Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: orbO28ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORB_O28",
    version: "2.5",
    description: "HL7 v2.5 ORB_O28 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORB_O28 schema
 */
export type ORB_O28 = z.infer<typeof orb_o28Schema>;

/**
 * Default export for convenience
 */
export default orb_o28Schema;
