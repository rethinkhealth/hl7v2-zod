import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 MFN_M03 Message
 * 
 * HL7 v2.6 MFN_M03 message definition
 * Contains segment definitions and constraints for the MFN_M03 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M03.MF_TEST group schema
 * Defines the structure and validation rules for the MFN_M03.MF_TEST group
 */
export const mfnM03MfTestSchema = z.object({
  "MFE": segments.mfeSchema,
  "OM1": segments.om1Schema
}).register(hl7v2Metadata, {
  title: "MFN_M03.MF_TEST",
  version: "2.6",
  description: "HL7 v2.6 MFN_M03.MF_TEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M03.MF_TEST schema
 */
export type MFN_M03_MF_TEST = z.infer<typeof mfnM03MfTestSchema>;

/**
 * MFN_M03 message schema
 * Defines the structure and validation rules for the MFN_M03 message
 */
export const mfn_m03Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "MFI": segments.mfiSchema,
  "MF_TEST": z.array(mfnM03MfTestSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M03",
  version: "2.6",
  description: "HL7 v2.6 MFN_M03 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M03 schema
 */
export type MFN_M03 = z.infer<typeof mfn_m03Schema>;

/**
 * Default export for convenience
 */
export default mfn_m03Schema;