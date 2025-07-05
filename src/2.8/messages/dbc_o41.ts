import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 DBC_O41 Message
 *
 * HL7 v2.8 DBC_O41 message definition
 * Contains segment definitions and constraints for the DBC_O41 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DBC_O41.DONOR group schema
 * Defines the structure and validation rules for the DBC_O41.DONOR group
 */
export const dbcO41DonorSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    OBX: z.array(segments.obxSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    ARV: z.array(segments.arvSchema).optional(),
    AL1: z.array(segments.al1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "DBC_O41.DONOR",
    version: "2.8",
    description: "HL7 v2.8 DBC_O41.DONOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the DBC_O41.DONOR schema
 */
export type DBC_O41_DONOR = z.infer<typeof dbcO41DonorSchema>;

/**
 * DBC_O41 message schema
 * Defines the structure and validation rules for the DBC_O41 message
 */
export const dbc_o41Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    DONOR: dbcO41DonorSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "DBC_O41",
    version: "2.8",
    description: "HL7 v2.8 DBC_O41 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the DBC_O41 schema
 */
export type DBC_O41 = z.infer<typeof dbc_o41Schema>;

/**
 * Default export for convenience
 */
export default dbc_o41Schema;
