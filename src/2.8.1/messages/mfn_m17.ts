import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 MFN_M17 Message
 *
 * HL7 v2.8 MFN_M17 message definition
 * Contains segment definitions and constraints for the MFN_M17 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M17.MF_DRG group schema
 * Defines the structure and validation rules for the MFN_M17.MF_DRG group
 */
export const mfnM17MfDrgSchema = z
  .object({
    MFE: segments.mfeSchema,
    DMI: segments.dmiSchema
  })
  .register(hl7v2Metadata, {
    title: "MFN_M17.MF_DRG",
    version: "2.8",
    description: "HL7 v2.8 MFN_M17.MF_DRG group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MFN_M17.MF_DRG schema
 */
export type MFN_M17_MF_DRG = z.infer<typeof mfnM17MfDrgSchema>;

/**
 * MFN_M17 message schema
 * Defines the structure and validation rules for the MFN_M17 message
 */
export const mfn_m17Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MFI: segments.mfiSchema,
    MF_DRG: z.array(mfnM17MfDrgSchema)
  })
  .register(hl7v2Metadata, {
    title: "MFN_M17",
    version: "2.8",
    description: "HL7 v2.8 MFN_M17 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFN_M17 schema
 */
export type MFN_M17 = z.infer<typeof mfn_m17Schema>;

/**
 * Default export for convenience
 */
export default mfn_m17Schema;
