import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 MFN_M02 Message
 * 
 * HL7 v2.7 MFN_M02 message definition
 * Contains segment definitions and constraints for the MFN_M02 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M02.MF_STAFF group schema
 * Defines the structure and validation rules for the MFN_M02.MF_STAFF group
 */
export const mfnM02MfStaffSchema = z.object({
  "MFE": segments.mfeSchema,
  "STF": segments.stfSchema,
  "PRA": z.array(segments.praSchema).optional(),
  "ORG": z.array(segments.orgSchema).optional(),
  "AFF": z.array(segments.affSchema).optional(),
  "LAN": z.array(segments.lanSchema).optional(),
  "EDU": z.array(segments.eduSchema).optional(),
  "CER": z.array(segments.cerSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M02.MF_STAFF",
  version: "2.7",
  description: "HL7 v2.7 MFN_M02.MF_STAFF group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M02.MF_STAFF schema
 */
export type MFN_M02_MF_STAFF = z.infer<typeof mfnM02MfStaffSchema>;

/**
 * MFN_M02 message schema
 * Defines the structure and validation rules for the MFN_M02 message
 */
export const mfn_m02Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MFI": segments.mfiSchema,
  "MF_STAFF": z.array(mfnM02MfStaffSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M02",
  version: "2.7",
  description: "HL7 v2.7 MFN_M02 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M02 schema
 */
export type MFN_M02 = z.infer<typeof mfn_m02Schema>;

/**
 * Default export for convenience
 */
export default mfn_m02Schema;