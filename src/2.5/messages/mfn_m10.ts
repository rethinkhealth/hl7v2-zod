import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 MFN_M10 Message
 *
 * HL7 v2.5 MFN_M10 message definition
 * Contains segment definitions and constraints for the MFN_M10 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M10.MF_TEST_BATT_DETAIL group schema
 * Defines the structure and validation rules for the MFN_M10.MF_TEST_BATT_DETAIL group
 */
export const mfnM10MfTestBattDetailSchema = z
  .object({
    OM5: segments.om5Schema,
    OM4: z.array(segments.om4Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "MFN_M10.MF_TEST_BATT_DETAIL",
    version: "2.5",
    description: "HL7 v2.5 MFN_M10.MF_TEST_BATT_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MFN_M10.MF_TEST_BATT_DETAIL schema
 */
export type MFN_M10_MF_TEST_BATT_DETAIL = z.infer<typeof mfnM10MfTestBattDetailSchema>;

/**
 * MFN_M10.MF_TEST_BATTERIES group schema
 * Defines the structure and validation rules for the MFN_M10.MF_TEST_BATTERIES group
 */
export const mfnM10MfTestBatteriesSchema = z
  .object({
    MFE: segments.mfeSchema,
    OM1: segments.om1Schema,
    MF_TEST_BATT_DETAIL: mfnM10MfTestBattDetailSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "MFN_M10.MF_TEST_BATTERIES",
    version: "2.5",
    description: "HL7 v2.5 MFN_M10.MF_TEST_BATTERIES group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MFN_M10.MF_TEST_BATTERIES schema
 */
export type MFN_M10_MF_TEST_BATTERIES = z.infer<typeof mfnM10MfTestBatteriesSchema>;

/**
 * MFN_M10 message schema
 * Defines the structure and validation rules for the MFN_M10 message
 */
export const mfn_m10Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    MFI: segments.mfiSchema,
    MF_TEST_BATTERIES: z.array(mfnM10MfTestBatteriesSchema)
  })
  .register(hl7v2Metadata, {
    title: "MFN_M10",
    version: "2.5",
    description: "HL7 v2.5 MFN_M10 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFN_M10 schema
 */
export type MFN_M10 = z.infer<typeof mfn_m10Schema>;

/**
 * Default export for convenience
 */
export default mfn_m10Schema;
