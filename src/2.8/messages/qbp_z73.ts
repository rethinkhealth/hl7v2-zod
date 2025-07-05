import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 QBP_Z73 Message
 *
 * HL7 v2.8 QBP_Z73 message definition
 * Contains segment definitions and constraints for the QBP_Z73 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QBP_Z73 message schema
 * Defines the structure and validation rules for the QBP_Z73 message
 */
export const qbp_z73Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    QPD: segments.qpdSchema,
    RCP: segments.rcpSchema
  })
  .register(hl7v2Metadata, {
    title: "QBP_Z73",
    version: "2.8",
    description: "HL7 v2.8 QBP_Z73 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the QBP_Z73 schema
 */
export type QBP_Z73 = z.infer<typeof qbp_z73Schema>;

/**
 * Default export for convenience
 */
export default qbp_z73Schema;
