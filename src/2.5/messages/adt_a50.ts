import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 ADT_A50 Message
 *
 * HL7 v2.5 ADT_A50 message definition
 * Contains segment definitions and constraints for the ADT_A50 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A50 message schema
 * Defines the structure and validation rules for the ADT_A50 message
 */
export const adt_a50Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    MRG: segments.mrgSchema,
    PV1: segments.pv1Schema
  })
  .register(hl7v2Metadata, {
    title: "ADT_A50",
    version: "2.5",
    description: "HL7 v2.5 ADT_A50 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ADT_A50 schema
 */
export type ADT_A50 = z.infer<typeof adt_a50Schema>;

/**
 * Default export for convenience
 */
export default adt_a50Schema;
