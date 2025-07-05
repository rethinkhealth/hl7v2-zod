import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 LSU_U12 Message
 *
 * HL7 v2.7 LSU_U12 message definition
 * Contains segment definitions and constraints for the LSU_U12 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * LSU_U12 message schema
 * Defines the structure and validation rules for the LSU_U12 message
 */
export const lsu_u12Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EQU: segments.equSchema,
    EQP: z.array(segments.eqpSchema),
    ROL: segments.rolSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "LSU_U12",
    version: "2.7",
    description: "HL7 v2.7 LSU_U12 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the LSU_U12 schema
 */
export type LSU_U12 = z.infer<typeof lsu_u12Schema>;

/**
 * Default export for convenience
 */
export default lsu_u12Schema;
