import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 ADT_A38 Message
 *
 * HL7 v2.5 ADT_A38 message definition
 * Contains segment definitions and constraints for the ADT_A38 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A38 message schema
 * Defines the structure and validation rules for the ADT_A38 message
 */
export const adt_a38Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
    DB1: z.array(segments.db1Schema).optional(),
    OBX: z.array(segments.obxSchema).optional(),
    DG1: z.array(segments.dg1Schema).optional(),
    DRG: segments.drgSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ADT_A38",
    version: "2.5",
    description: "HL7 v2.5 ADT_A38 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ADT_A38 schema
 */
export type ADT_A38 = z.infer<typeof adt_a38Schema>;

/**
 * Default export for convenience
 */
export default adt_a38Schema;
