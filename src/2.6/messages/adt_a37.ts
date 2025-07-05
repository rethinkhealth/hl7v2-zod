import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 ADT_A37 Message
 *
 * HL7 v2.6 ADT_A37 message definition
 * Contains segment definitions and constraints for the ADT_A37 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A37 message schema
 * Defines the structure and validation rules for the ADT_A37 message
 */
export const adt_a37Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PV1: segments.pv1Schema.optional(),
    DB1: z.array(segments.db1Schema).optional(),
    PID_1: segments.pidSchema,
    PD1_1: segments.pd1Schema.optional(),
    PV1_1: segments.pv1Schema.optional(),
    DB1_1: z.array(segments.db1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ADT_A37",
    version: "2.6",
    description: "HL7 v2.6 ADT_A37 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ADT_A37 schema
 */
export type ADT_A37 = z.infer<typeof adt_a37Schema>;

/**
 * Default export for convenience
 */
export default adt_a37Schema;
