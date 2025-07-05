import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 SDR_S32 Message
 *
 * HL7 v2.8 SDR_S32 message definition
 * Contains segment definitions and constraints for the SDR_S32 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SDR_S32.ANTI-MICROBIAL_DEVICE_CYCLE_DATA group schema
 * Defines the structure and validation rules for the SDR_S32.ANTI-MICROBIAL_DEVICE_CYCLE_DATA group
 */
export const sdrS32AntiMicrobialDeviceCycleDataSchema = z
  .object({
    SDD: segments.sddSchema,
    SCD: z.array(segments.scdSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SDR_S32.ANTI-MICROBIAL_DEVICE_CYCLE_DATA",
    version: "2.8",
    description: "HL7 v2.8 SDR_S32.ANTI-MICROBIAL_DEVICE_CYCLE_DATA group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SDR_S32.ANTI-MICROBIAL_DEVICE_CYCLE_DATA schema
 */
export type SDR_S32_ANTI_MICROBIAL_DEVICE_CYCLE_DATA = z.infer<
  typeof sdrS32AntiMicrobialDeviceCycleDataSchema
>;

/**
 * SDR_S32 message schema
 * Defines the structure and validation rules for the SDR_S32 message
 */
export const sdr_s32Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    "ANTI-MICROBIAL_DEVICE_CYCLE_DATA": sdrS32AntiMicrobialDeviceCycleDataSchema
  })
  .register(hl7v2Metadata, {
    title: "SDR_S32",
    version: "2.8",
    description: "HL7 v2.8 SDR_S32 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the SDR_S32 schema
 */
export type SDR_S32 = z.infer<typeof sdr_s32Schema>;

/**
 * Default export for convenience
 */
export default sdr_s32Schema;
