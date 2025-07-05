import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 MFN_M13 Message
 *
 * HL7 v2.8 MFN_M13 message definition
 * Contains segment definitions and constraints for the MFN_M13 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M13 message schema
 * Defines the structure and validation rules for the MFN_M13 message
 */
export const mfn_m13Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MFI: segments.mfiSchema,
    MFE: z.array(segments.mfeSchema)
  })
  .register(hl7v2Metadata, {
    title: "MFN_M13",
    version: "2.8",
    description: "HL7 v2.8 MFN_M13 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFN_M13 schema
 */
export type MFN_M13 = z.infer<typeof mfn_m13Schema>;

/**
 * Default export for convenience
 */
export default mfn_m13Schema;
