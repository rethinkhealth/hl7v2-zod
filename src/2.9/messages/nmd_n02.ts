import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 NMD_N02 Message
 * 
 * HL7 v2.9 NMD_N02 message definition
 * Contains segment definitions and constraints for the NMD_N02 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NMD_N02.CLOCK group schema
 * Defines the structure and validation rules for the NMD_N02.CLOCK group
 */
export const nmdN02ClockSchema = z.object({
  "NCK": segments.nckSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "NMD_N02.CLOCK",
  version: "2.9",
  description: "HL7 v2.9 NMD_N02.CLOCK group",
  type: "Group"
});

/**
 * TypeScript type inferred from the NMD_N02.CLOCK schema
 */
export type NMD_N02_CLOCK = z.infer<typeof nmdN02ClockSchema>;

/**
 * NMD_N02.APP_STATS group schema
 * Defines the structure and validation rules for the NMD_N02.APP_STATS group
 */
export const nmdN02AppStatsSchema = z.object({
  "NST": segments.nstSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "NMD_N02.APP_STATS",
  version: "2.9",
  description: "HL7 v2.9 NMD_N02.APP_STATS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the NMD_N02.APP_STATS schema
 */
export type NMD_N02_APP_STATS = z.infer<typeof nmdN02AppStatsSchema>;

/**
 * NMD_N02.APP_STATUS group schema
 * Defines the structure and validation rules for the NMD_N02.APP_STATUS group
 */
export const nmdN02AppStatusSchema = z.object({
  "NSC": segments.nscSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "NMD_N02.APP_STATUS",
  version: "2.9",
  description: "HL7 v2.9 NMD_N02.APP_STATUS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the NMD_N02.APP_STATUS schema
 */
export type NMD_N02_APP_STATUS = z.infer<typeof nmdN02AppStatusSchema>;

/**
 * NMD_N02.CLOCK_AND_STATS_WITH_NOTES group schema
 * Defines the structure and validation rules for the NMD_N02.CLOCK_AND_STATS_WITH_NOTES group
 */
export const nmdN02ClockAndStatsWithNotesSchema = z.object({
  "CLOCK": nmdN02ClockSchema.optional(),
  "APP_STATS": nmdN02AppStatsSchema.optional(),
  "APP_STATUS": nmdN02AppStatusSchema.optional()
}).register(hl7v2Metadata, {
  title: "NMD_N02.CLOCK_AND_STATS_WITH_NOTES",
  version: "2.9",
  description: "HL7 v2.9 NMD_N02.CLOCK_AND_STATS_WITH_NOTES group",
  type: "Group"
});

/**
 * TypeScript type inferred from the NMD_N02.CLOCK_AND_STATS_WITH_NOTES schema
 */
export type NMD_N02_CLOCK_AND_STATS_WITH_NOTES = z.infer<typeof nmdN02ClockAndStatsWithNotesSchema>;

/**
 * NMD_N02 message schema
 * Defines the structure and validation rules for the NMD_N02 message
 */
export const nmd_n02Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "CLOCK_AND_STATS_WITH_NOTES": z.array(nmdN02ClockAndStatsWithNotesSchema)
}).register(hl7v2Metadata, {
  title: "NMD_N02",
  version: "2.9",
  description: "HL7 v2.9 NMD_N02 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the NMD_N02 schema
 */
export type NMD_N02 = z.infer<typeof nmd_n02Schema>;

/**
 * Default export for convenience
 */
export default nmd_n02Schema;