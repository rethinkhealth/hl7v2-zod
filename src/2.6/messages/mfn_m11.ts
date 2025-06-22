import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 MFN_M11 Message
 * 
 * HL7 v2.6 MFN_M11 message definition
 * Contains segment definitions and constraints for the MFN_M11 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M11.MF_TEST_CALC_DETAIL group schema
 * Defines the structure and validation rules for the MFN_M11.MF_TEST_CALC_DETAIL group
 */
export const mfnM11MfTestCalcDetailSchema = z.object({
  "OM6": segments.om6Schema,
  "OM2": segments.om2Schema
}).register(hl7v2Metadata, {
  title: "MFN_M11.MF_TEST_CALC_DETAIL",
  version: "2.6",
  description: "HL7 v2.6 MFN_M11.MF_TEST_CALC_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M11.MF_TEST_CALC_DETAIL schema
 */
export type MFN_M11_MF_TEST_CALC_DETAIL = z.infer<typeof mfnM11MfTestCalcDetailSchema>;

/**
 * MFN_M11.MF_TEST_CALCULATED group schema
 * Defines the structure and validation rules for the MFN_M11.MF_TEST_CALCULATED group
 */
export const mfnM11MfTestCalculatedSchema = z.object({
  "MFE": segments.mfeSchema,
  "OM1": segments.om1Schema,
  "MF_TEST_CALC_DETAIL": mfnM11MfTestCalcDetailSchema.optional()
}).register(hl7v2Metadata, {
  title: "MFN_M11.MF_TEST_CALCULATED",
  version: "2.6",
  description: "HL7 v2.6 MFN_M11.MF_TEST_CALCULATED group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M11.MF_TEST_CALCULATED schema
 */
export type MFN_M11_MF_TEST_CALCULATED = z.infer<typeof mfnM11MfTestCalculatedSchema>;

/**
 * MFN_M11 message schema
 * Defines the structure and validation rules for the MFN_M11 message
 */
export const mfn_m11Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MFI": segments.mfiSchema,
  "MF_TEST_CALCULATED": z.array(mfnM11MfTestCalculatedSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M11",
  version: "2.6",
  description: "HL7 v2.6 MFN_M11 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M11 schema
 */
export type MFN_M11 = z.infer<typeof mfn_m11Schema>;

/**
 * Default export for convenience
 */
export default mfn_m11Schema;