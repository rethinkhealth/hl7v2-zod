import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 SLR_S28 Message
 *
 * HL7 v2.6 SLR_S28 message definition
 * Contains segment definitions and constraints for the SLR_S28 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SLR_S28 message schema
 * Defines the structure and validation rules for the SLR_S28 message
 */
export const slr_s28Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    SLT: z.array(segments.sltSchema)
  })
  .register(hl7v2Metadata, {
    title: "SLR_S28",
    version: "2.6",
    description: "HL7 v2.6 SLR_S28 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the SLR_S28 schema
 */
export type SLR_S28 = z.infer<typeof slr_s28Schema>;

/**
 * Default export for convenience
 */
export default slr_s28Schema;
