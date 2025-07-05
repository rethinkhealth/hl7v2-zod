import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 MFN_M08 Message
 *
 * HL7 v2.6 MFN_M08 message definition
 * Contains segment definitions and constraints for the MFN_M08 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M08.MF_TEST_NUMERIC group schema
 * Defines the structure and validation rules for the MFN_M08.MF_TEST_NUMERIC group
 */
export const mfnM08MfTestNumericSchema = z
  .object({
    MFE: segments.mfeSchema,
    OM1: segments.om1Schema,
    OM2: segments.om2Schema.optional(),
    OM3: segments.om3Schema.optional(),
    OM4: segments.om4Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "MFN_M08.MF_TEST_NUMERIC",
    version: "2.6",
    description: "HL7 v2.6 MFN_M08.MF_TEST_NUMERIC group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MFN_M08.MF_TEST_NUMERIC schema
 */
export type MFN_M08_MF_TEST_NUMERIC = z.infer<typeof mfnM08MfTestNumericSchema>;

/**
 * MFN_M08 message schema
 * Defines the structure and validation rules for the MFN_M08 message
 */
export const mfn_m08Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MFI: segments.mfiSchema,
    MF_TEST_NUMERIC: z.array(mfnM08MfTestNumericSchema)
  })
  .register(hl7v2Metadata, {
    title: "MFN_M08",
    version: "2.6",
    description: "HL7 v2.6 MFN_M08 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFN_M08 schema
 */
export type MFN_M08 = z.infer<typeof mfn_m08Schema>;

/**
 * Default export for convenience
 */
export default mfn_m08Schema;
