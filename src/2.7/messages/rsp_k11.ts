import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 RSP_K11 Message
 *
 * HL7 v2.7 RSP_K11 message definition
 * Contains segment definitions and constraints for the RSP_K11 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_K11.SEGMENT_PATTERN group schema
 * Defines the structure and validation rules for the RSP_K11.SEGMENT_PATTERN group
 */
export const rspK11SegmentPatternSchema = z.object({}).register(hl7v2Metadata, {
  title: "RSP_K11.SEGMENT_PATTERN",
  version: "2.7",
  description: "HL7 v2.7 RSP_K11.SEGMENT_PATTERN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K11.SEGMENT_PATTERN schema
 */
export type RSP_K11_SEGMENT_PATTERN = z.infer<typeof rspK11SegmentPatternSchema>;

/**
 * RSP_K11 message schema
 * Defines the structure and validation rules for the RSP_K11 message
 */
export const rsp_k11Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema,
    ERR: segments.errSchema.optional(),
    QAK: segments.qakSchema,
    QPD: segments.qpdSchema,
    SEGMENT_PATTERN: rspK11SegmentPatternSchema.optional(),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_K11",
    version: "2.7",
    description: "HL7 v2.7 RSP_K11 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RSP_K11 schema
 */
export type RSP_K11 = z.infer<typeof rsp_k11Schema>;

/**
 * Default export for convenience
 */
export default rsp_k11Schema;
