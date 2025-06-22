import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 NMR_N01 Message
 * 
 * HL7 v2.6 NMR_N01 message definition
 * Contains segment definitions and constraints for the NMR_N01 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NMR_N01.CLOCK group schema
 * Defines the structure and validation rules for the NMR_N01.CLOCK group
 */
export const nmrN01ClockSchema = z.object({
  "NCK": segments.nckSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "NMR_N01.CLOCK",
  version: "2.6",
  description: "HL7 v2.6 NMR_N01.CLOCK group",
  type: "Group"
});

/**
 * TypeScript type inferred from the NMR_N01.CLOCK schema
 */
export type NMR_N01_CLOCK = z.infer<typeof nmrN01ClockSchema>;

/**
 * NMR_N01.APP_STATS group schema
 * Defines the structure and validation rules for the NMR_N01.APP_STATS group
 */
export const nmrN01AppStatsSchema = z.object({
  "NST": segments.nstSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "NMR_N01.APP_STATS",
  version: "2.6",
  description: "HL7 v2.6 NMR_N01.APP_STATS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the NMR_N01.APP_STATS schema
 */
export type NMR_N01_APP_STATS = z.infer<typeof nmrN01AppStatsSchema>;

/**
 * NMR_N01.APP_STATUS group schema
 * Defines the structure and validation rules for the NMR_N01.APP_STATUS group
 */
export const nmrN01AppStatusSchema = z.object({
  "NSC": segments.nscSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "NMR_N01.APP_STATUS",
  version: "2.6",
  description: "HL7 v2.6 NMR_N01.APP_STATUS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the NMR_N01.APP_STATUS schema
 */
export type NMR_N01_APP_STATUS = z.infer<typeof nmrN01AppStatusSchema>;

/**
 * NMR_N01.CLOCK_AND_STATS_WITH_NOTES_ALT group schema
 * Defines the structure and validation rules for the NMR_N01.CLOCK_AND_STATS_WITH_NOTES_ALT group
 */
export const nmrN01ClockAndStatsWithNotesAltSchema = z.object({
  "CLOCK": nmrN01ClockSchema.optional(),
  "APP_STATS": nmrN01AppStatsSchema.optional(),
  "APP_STATUS": nmrN01AppStatusSchema.optional()
}).register(hl7v2Metadata, {
  title: "NMR_N01.CLOCK_AND_STATS_WITH_NOTES_ALT",
  version: "2.6",
  description: "HL7 v2.6 NMR_N01.CLOCK_AND_STATS_WITH_NOTES_ALT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the NMR_N01.CLOCK_AND_STATS_WITH_NOTES_ALT schema
 */
export type NMR_N01_CLOCK_AND_STATS_WITH_NOTES_ALT = z.infer<typeof nmrN01ClockAndStatsWithNotesAltSchema>;

/**
 * NMR_N01 message schema
 * Defines the structure and validation rules for the NMR_N01 message
 */
export const nmr_n01Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "QRD": segments.qrdSchema.optional(),
  "CLOCK_AND_STATS_WITH_NOTES_ALT": z.array(nmrN01ClockAndStatsWithNotesAltSchema)
}).register(hl7v2Metadata, {
  title: "NMR_N01",
  version: "2.6",
  description: "HL7 v2.6 NMR_N01 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the NMR_N01 schema
 */
export type NMR_N01 = z.infer<typeof nmr_n01Schema>;

/**
 * Default export for convenience
 */
export default nmr_n01Schema;