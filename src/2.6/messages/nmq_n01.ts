import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 NMQ_N01 Message
 *
 * HL7 v2.6 NMQ_N01 message definition
 * Contains segment definitions and constraints for the NMQ_N01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NMQ_N01.QRY_WITH_DETAIL group schema
 * Defines the structure and validation rules for the NMQ_N01.QRY_WITH_DETAIL group
 */
export const nmqN01QryWithDetailSchema = z
  .object({
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "NMQ_N01.QRY_WITH_DETAIL",
    version: "2.6",
    description: "HL7 v2.6 NMQ_N01.QRY_WITH_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the NMQ_N01.QRY_WITH_DETAIL schema
 */
export type NMQ_N01_QRY_WITH_DETAIL = z.infer<typeof nmqN01QryWithDetailSchema>;

/**
 * NMQ_N01.CLOCK_AND_STATISTICS group schema
 * Defines the structure and validation rules for the NMQ_N01.CLOCK_AND_STATISTICS group
 */
export const nmqN01ClockAndStatisticsSchema = z
  .object({
    NCK: segments.nckSchema.optional(),
    NST: segments.nstSchema.optional(),
    NSC: segments.nscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "NMQ_N01.CLOCK_AND_STATISTICS",
    version: "2.6",
    description: "HL7 v2.6 NMQ_N01.CLOCK_AND_STATISTICS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the NMQ_N01.CLOCK_AND_STATISTICS schema
 */
export type NMQ_N01_CLOCK_AND_STATISTICS = z.infer<typeof nmqN01ClockAndStatisticsSchema>;

/**
 * NMQ_N01 message schema
 * Defines the structure and validation rules for the NMQ_N01 message
 */
export const nmq_n01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    QRY_WITH_DETAIL: nmqN01QryWithDetailSchema.optional(),
    CLOCK_AND_STATISTICS: z.array(nmqN01ClockAndStatisticsSchema)
  })
  .register(hl7v2Metadata, {
    title: "NMQ_N01",
    version: "2.6",
    description: "HL7 v2.6 NMQ_N01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the NMQ_N01 schema
 */
export type NMQ_N01 = z.infer<typeof nmq_n01Schema>;

/**
 * Default export for convenience
 */
export default nmq_n01Schema;
