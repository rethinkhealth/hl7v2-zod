import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 MFN_M05 Message
 * 
 * HL7 v2.7 MFN_M05 message definition
 * Contains segment definitions and constraints for the MFN_M05 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M05.MF_LOC_DEPT group schema
 * Defines the structure and validation rules for the MFN_M05.MF_LOC_DEPT group
 */
export const mfnM05MfLocDeptSchema = z.object({
  "LDP": segments.ldpSchema,
  "LCH": z.array(segments.lchSchema).optional(),
  "LCC": z.array(segments.lccSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M05.MF_LOC_DEPT",
  version: "2.7",
  description: "HL7 v2.7 MFN_M05.MF_LOC_DEPT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M05.MF_LOC_DEPT schema
 */
export type MFN_M05_MF_LOC_DEPT = z.infer<typeof mfnM05MfLocDeptSchema>;

/**
 * MFN_M05.MF_LOCATION group schema
 * Defines the structure and validation rules for the MFN_M05.MF_LOCATION group
 */
export const mfnM05MfLocationSchema = z.object({
  "MFE": segments.mfeSchema,
  "LOC": segments.locSchema,
  "LCH": z.array(segments.lchSchema).optional(),
  "LRL": z.array(segments.lrlSchema).optional(),
  "MF_LOC_DEPT": z.array(mfnM05MfLocDeptSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M05.MF_LOCATION",
  version: "2.7",
  description: "HL7 v2.7 MFN_M05.MF_LOCATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M05.MF_LOCATION schema
 */
export type MFN_M05_MF_LOCATION = z.infer<typeof mfnM05MfLocationSchema>;

/**
 * MFN_M05 message schema
 * Defines the structure and validation rules for the MFN_M05 message
 */
export const mfn_m05Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MFI": segments.mfiSchema,
  "MF_LOCATION": z.array(mfnM05MfLocationSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M05",
  version: "2.7",
  description: "HL7 v2.7 MFN_M05 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M05 schema
 */
export type MFN_M05 = z.infer<typeof mfn_m05Schema>;

/**
 * Default export for convenience
 */
export default mfn_m05Schema;