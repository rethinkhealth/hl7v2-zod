import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 MFN_M12 Message
 * 
 * HL7 v2.5 MFN_M12 message definition
 * Contains segment definitions and constraints for the MFN_M12 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M12.MF_OBS_ATTRIBUTES group schema
 * Defines the structure and validation rules for the MFN_M12.MF_OBS_ATTRIBUTES group
 */
export const mfnM12MfObsAttributesSchema = z.object({
  "MFE": segments.mfeSchema,
  "OM1": segments.om1Schema,
  "OM7": segments.om7Schema.optional()
}).register(hl7v2Metadata, {
  title: "MFN_M12.MF_OBS_ATTRIBUTES",
  version: "2.5",
  description: "HL7 v2.5 MFN_M12.MF_OBS_ATTRIBUTES group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M12.MF_OBS_ATTRIBUTES schema
 */
export type MFN_M12_MF_OBS_ATTRIBUTES = z.infer<typeof mfnM12MfObsAttributesSchema>;

/**
 * MFN_M12 message schema
 * Defines the structure and validation rules for the MFN_M12 message
 */
export const mfn_m12Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "MFI": segments.mfiSchema,
  "MF_OBS_ATTRIBUTES": z.array(mfnM12MfObsAttributesSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M12",
  version: "2.5",
  description: "HL7 v2.5 MFN_M12 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M12 schema
 */
export type MFN_M12 = z.infer<typeof mfn_m12Schema>;

/**
 * Default export for convenience
 */
export default mfn_m12Schema;