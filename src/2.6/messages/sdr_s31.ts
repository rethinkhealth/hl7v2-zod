import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 SDR_S31 Message
 * 
 * HL7 v2.6 SDR_S31 message definition
 * Contains segment definitions and constraints for the SDR_S31 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SDR_S31.ANTIMICROBIAL_DEVICE_DATA group schema
 * Defines the structure and validation rules for the SDR_S31.ANTIMICROBIAL_DEVICE_DATA group
 */
export const sdrS31AntimicrobialDeviceDataSchema = z.object({
  "SDD": segments.sddSchema,
  "SCD": z.array(segments.scdSchema).optional()
}).register(hl7v2Metadata, {
  title: "SDR_S31.ANTIMICROBIAL_DEVICE_DATA",
  version: "2.6",
  description: "HL7 v2.6 SDR_S31.ANTIMICROBIAL_DEVICE_DATA group",
  type: "Group"
});

/**
 * TypeScript type inferred from the SDR_S31.ANTIMICROBIAL_DEVICE_DATA schema
 */
export type SDR_S31_ANTIMICROBIAL_DEVICE_DATA = z.infer<typeof sdrS31AntimicrobialDeviceDataSchema>;

/**
 * SDR_S31 message schema
 * Defines the structure and validation rules for the SDR_S31 message
 */
export const sdr_s31Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "ANTIMICROBIAL_DEVICE_DATA": sdrS31AntimicrobialDeviceDataSchema
}).register(hl7v2Metadata, {
  title: "SDR_S31",
  version: "2.6",
  description: "HL7 v2.6 SDR_S31 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the SDR_S31 schema
 */
export type SDR_S31 = z.infer<typeof sdr_s31Schema>;

/**
 * Default export for convenience
 */
export default sdr_s31Schema;