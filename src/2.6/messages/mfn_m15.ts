import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 MFN_M15 Message
 *
 * HL7 v2.6 MFN_M15 message definition
 * Contains segment definitions and constraints for the MFN_M15 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M15.MF_INV_ITEM group schema
 * Defines the structure and validation rules for the MFN_M15.MF_INV_ITEM group
 */
export const mfnM15MfInvItemSchema = z
  .object({
    MFE: segments.mfeSchema,
    IIM: segments.iimSchema
  })
  .register(hl7v2Metadata, {
    title: "MFN_M15.MF_INV_ITEM",
    version: "2.6",
    description: "HL7 v2.6 MFN_M15.MF_INV_ITEM group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MFN_M15.MF_INV_ITEM schema
 */
export type MFN_M15_MF_INV_ITEM = z.infer<typeof mfnM15MfInvItemSchema>;

/**
 * MFN_M15 message schema
 * Defines the structure and validation rules for the MFN_M15 message
 */
export const mfn_m15Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MFI: segments.mfiSchema,
    MF_INV_ITEM: z.array(mfnM15MfInvItemSchema)
  })
  .register(hl7v2Metadata, {
    title: "MFN_M15",
    version: "2.6",
    description: "HL7 v2.6 MFN_M15 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFN_M15 schema
 */
export type MFN_M15 = z.infer<typeof mfn_m15Schema>;

/**
 * Default export for convenience
 */
export default mfn_m15Schema;
