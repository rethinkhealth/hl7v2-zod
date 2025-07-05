import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 ADT_A61 Message
 *
 * HL7 v2.8 ADT_A61 message definition
 * Contains segment definitions and constraints for the ADT_A61 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A61 message schema
 * Defines the structure and validation rules for the ADT_A61 message
 */
export const adt_a61Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    ROL: z.array(segments.rolSchema).optional(),
    PV1: segments.pv1Schema,
    ROL_1: z.array(segments.rolSchema).optional(),
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ADT_A61",
    version: "2.8",
    description: "HL7 v2.8 ADT_A61 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ADT_A61 schema
 */
export type ADT_A61 = z.infer<typeof adt_a61Schema>;

/**
 * Default export for convenience
 */
export default adt_a61Schema;
