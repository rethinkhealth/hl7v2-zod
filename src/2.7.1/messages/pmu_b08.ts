import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 PMU_B08 Message
 *
 * HL7 v2.7 PMU_B08 message definition
 * Contains segment definitions and constraints for the PMU_B08 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PMU_B08 message schema
 * Defines the structure and validation rules for the PMU_B08 message
 */
export const pmu_b08Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    STF: segments.stfSchema,
    PRA: segments.praSchema.optional(),
    CER: z.array(segments.cerSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "PMU_B08",
    version: "2.7",
    description: "HL7 v2.7 PMU_B08 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the PMU_B08 schema
 */
export type PMU_B08 = z.infer<typeof pmu_b08Schema>;

/**
 * Default export for convenience
 */
export default pmu_b08Schema;
