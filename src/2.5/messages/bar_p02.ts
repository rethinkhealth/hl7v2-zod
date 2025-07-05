import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 BAR_P02 Message
 *
 * HL7 v2.5 BAR_P02 message definition
 * Contains segment definitions and constraints for the BAR_P02 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BAR_P02.PATIENT group schema
 * Defines the structure and validation rules for the BAR_P02.PATIENT group
 */
export const barP02PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PV1: segments.pv1Schema.optional(),
    DB1: z.array(segments.db1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BAR_P02.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 BAR_P02.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BAR_P02.PATIENT schema
 */
export type BAR_P02_PATIENT = z.infer<typeof barP02PatientSchema>;

/**
 * BAR_P02 message schema
 * Defines the structure and validation rules for the BAR_P02 message
 */
export const bar_p02Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    EVN: segments.evnSchema,
    PATIENT: z.array(barP02PatientSchema)
  })
  .register(hl7v2Metadata, {
    title: "BAR_P02",
    version: "2.5",
    description: "HL7 v2.5 BAR_P02 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the BAR_P02 schema
 */
export type BAR_P02 = z.infer<typeof bar_p02Schema>;

/**
 * Default export for convenience
 */
export default bar_p02Schema;
