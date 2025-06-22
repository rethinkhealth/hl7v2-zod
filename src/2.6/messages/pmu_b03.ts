import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 PMU_B03 Message
 *
 * HL7 v2.6 PMU_B03 message definition
 * Contains segment definitions and constraints for the PMU_B03 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PMU_B03 message schema
 * Defines the structure and validation rules for the PMU_B03 message
 */
export const pmu_b03Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    STF: segments.stfSchema,
  })
  .register(hl7v2Metadata, {
    title: 'PMU_B03',
    version: '2.6',
    description: 'HL7 v2.6 PMU_B03 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the PMU_B03 schema
 */
export type PMU_B03 = z.infer<typeof pmu_b03Schema>;

/**
 * Default export for convenience
 */
export default pmu_b03Schema;
