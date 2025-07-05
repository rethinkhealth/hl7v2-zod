import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 PMU_B01 Message
 *
 * HL7 v2.7 PMU_B01 message definition
 * Contains segment definitions and constraints for the PMU_B01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PMU_B01 message schema
 * Defines the structure and validation rules for the PMU_B01 message
 */
export const pmu_b01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    STF: segments.stfSchema,
    PRA: z.array(segments.praSchema).optional(),
    ORG: z.array(segments.orgSchema).optional(),
    AFF: z.array(segments.affSchema).optional(),
    LAN: z.array(segments.lanSchema).optional(),
    EDU: z.array(segments.eduSchema).optional(),
    CER: z.array(segments.cerSchema).optional(),
    NK1: z.array(segments.nk1Schema).optional(),
    ROL: z.array(segments.rolSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "PMU_B01",
    version: "2.7",
    description: "HL7 v2.7 PMU_B01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the PMU_B01 schema
 */
export type PMU_B01 = z.infer<typeof pmu_b01Schema>;

/**
 * Default export for convenience
 */
export default pmu_b01Schema;
