import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 MFQ_M01 Message
 *
 * HL7 v2.5 MFQ_M01 message definition
 * Contains segment definitions and constraints for the MFQ_M01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFQ_M01 message schema
 * Defines the structure and validation rules for the MFQ_M01 message
 */
export const mfq_m01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "MFQ_M01",
    version: "2.5",
    description: "HL7 v2.5 MFQ_M01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFQ_M01 schema
 */
export type MFQ_M01 = z.infer<typeof mfq_m01Schema>;

/**
 * Default export for convenience
 */
export default mfq_m01Schema;
