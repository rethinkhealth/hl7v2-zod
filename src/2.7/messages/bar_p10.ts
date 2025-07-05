import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 BAR_P10 Message
 *
 * HL7 v2.7 BAR_P10 message definition
 * Contains segment definitions and constraints for the BAR_P10 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BAR_P10.PROCEDURE group schema
 * Defines the structure and validation rules for the BAR_P10.PROCEDURE group
 */
export const barP10ProcedureSchema = z
  .object({
    PR1: segments.pr1Schema,
    GP2: segments.gp2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "BAR_P10.PROCEDURE",
    version: "2.7",
    description: "HL7 v2.7 BAR_P10.PROCEDURE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BAR_P10.PROCEDURE schema
 */
export type BAR_P10_PROCEDURE = z.infer<typeof barP10ProcedureSchema>;

/**
 * BAR_P10 message schema
 * Defines the structure and validation rules for the BAR_P10 message
 */
export const bar_p10Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PV1: segments.pv1Schema,
    DG1: z.array(segments.dg1Schema).optional(),
    GP1: segments.gp1Schema,
    PROCEDURE: z.array(barP10ProcedureSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BAR_P10",
    version: "2.7",
    description: "HL7 v2.7 BAR_P10 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the BAR_P10 schema
 */
export type BAR_P10 = z.infer<typeof bar_p10Schema>;

/**
 * Default export for convenience
 */
export default bar_p10Schema;
