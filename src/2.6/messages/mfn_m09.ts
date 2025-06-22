import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 MFN_M09 Message
 * 
 * HL7 v2.6 MFN_M09 message definition
 * Contains segment definitions and constraints for the MFN_M09 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M09.MF_TEST_CAT_DETAIL group schema
 * Defines the structure and validation rules for the MFN_M09.MF_TEST_CAT_DETAIL group
 */
export const mfnM09MfTestCatDetailSchema = z.object({
  "OM3": segments.om3Schema,
  "OM4": z.array(segments.om4Schema).optional()
}).register(hl7v2Metadata, {
  title: "MFN_M09.MF_TEST_CAT_DETAIL",
  version: "2.6",
  description: "HL7 v2.6 MFN_M09.MF_TEST_CAT_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M09.MF_TEST_CAT_DETAIL schema
 */
export type MFN_M09_MF_TEST_CAT_DETAIL = z.infer<typeof mfnM09MfTestCatDetailSchema>;

/**
 * MFN_M09.MF_TEST_CATEGORICAL group schema
 * Defines the structure and validation rules for the MFN_M09.MF_TEST_CATEGORICAL group
 */
export const mfnM09MfTestCategoricalSchema = z.object({
  "MFE": segments.mfeSchema,
  "OM1": segments.om1Schema,
  "MF_TEST_CAT_DETAIL": mfnM09MfTestCatDetailSchema.optional()
}).register(hl7v2Metadata, {
  title: "MFN_M09.MF_TEST_CATEGORICAL",
  version: "2.6",
  description: "HL7 v2.6 MFN_M09.MF_TEST_CATEGORICAL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the MFN_M09.MF_TEST_CATEGORICAL schema
 */
export type MFN_M09_MF_TEST_CATEGORICAL = z.infer<typeof mfnM09MfTestCategoricalSchema>;

/**
 * MFN_M09 message schema
 * Defines the structure and validation rules for the MFN_M09 message
 */
export const mfn_m09Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MFI": segments.mfiSchema,
  "MF_TEST_CATEGORICAL": z.array(mfnM09MfTestCategoricalSchema)
}).register(hl7v2Metadata, {
  title: "MFN_M09",
  version: "2.6",
  description: "HL7 v2.6 MFN_M09 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the MFN_M09 schema
 */
export type MFN_M09 = z.infer<typeof mfn_m09Schema>;

/**
 * Default export for convenience
 */
export default mfn_m09Schema;