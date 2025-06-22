import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 PMU_B04 Message
 * 
 * HL7 v2.7 PMU_B04 message definition
 * Contains segment definitions and constraints for the PMU_B04 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * PMU_B04 message schema
 * Defines the structure and validation rules for the PMU_B04 message
 */
export const pmu_b04Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "STF": segments.stfSchema,
  "PRA": z.array(segments.praSchema).optional(),
  "ORG": z.array(segments.orgSchema).optional()
}).register(hl7v2Metadata, {
  title: "PMU_B04",
  version: "2.7",
  description: "HL7 v2.7 PMU_B04 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the PMU_B04 schema
 */
export type PMU_B04 = z.infer<typeof pmu_b04Schema>;

/**
 * Default export for convenience
 */
export default pmu_b04Schema;