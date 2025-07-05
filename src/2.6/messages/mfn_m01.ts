import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 MFN_M01 Message
 *
 * HL7 v2.6 MFN_M01 message definition
 * Contains segment definitions and constraints for the MFN_M01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M01.MF group schema
 * Defines the structure and validation rules for the MFN_M01.MF group
 */
export const mfnM01MfSchema = z
  .object({
    MFE: segments.mfeSchema
  })
  .register(hl7v2Metadata, {
    title: "MFN_M01.MF",
    version: "2.6",
    description: "HL7 v2.6 MFN_M01.MF group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MFN_M01.MF schema
 */
export type MFN_M01_MF = z.infer<typeof mfnM01MfSchema>;

/**
 * MFN_M01 message schema
 * Defines the structure and validation rules for the MFN_M01 message
 */
export const mfn_m01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    MFI: segments.mfiSchema,
    MF: z.array(mfnM01MfSchema)
  })
  .register(hl7v2Metadata, {
    title: "MFN_M01",
    version: "2.6",
    description: "HL7 v2.6 MFN_M01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFN_M01 schema
 */
export type MFN_M01 = z.infer<typeof mfn_m01Schema>;

/**
 * Default export for convenience
 */
export default mfn_m01Schema;
