import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 VXQ_V01 Message
 *
 * HL7 v2.6 VXQ_V01 message definition
 * Contains segment definitions and constraints for the VXQ_V01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VXQ_V01 message schema
 * Defines the structure and validation rules for the VXQ_V01 message
 */
export const vxq_v01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "VXQ_V01",
    version: "2.6",
    description: "HL7 v2.6 VXQ_V01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the VXQ_V01 schema
 */
export type VXQ_V01 = z.infer<typeof vxq_v01Schema>;

/**
 * Default export for convenience
 */
export default vxq_v01Schema;
