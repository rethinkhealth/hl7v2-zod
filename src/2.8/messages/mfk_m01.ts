import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 MFK_M01 Message
 *
 * HL7 v2.8 MFK_M01 message definition
 * Contains segment definitions and constraints for the MFK_M01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFK_M01 message schema
 * Defines the structure and validation rules for the MFK_M01 message
 */
export const mfk_m01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    MFI: segments.mfiSchema,
    MFA: z.array(segments.mfaSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "MFK_M01",
    version: "2.8",
    description: "HL7 v2.8 MFK_M01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFK_M01 schema
 */
export type MFK_M01 = z.infer<typeof mfk_m01Schema>;

/**
 * Default export for convenience
 */
export default mfk_m01Schema;
