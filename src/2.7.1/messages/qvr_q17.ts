import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 QVR_Q17 Message
 *
 * HL7 v2.7 QVR_Q17 message definition
 * Contains segment definitions and constraints for the QVR_Q17 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QVR_Q17.QBP group schema
 * Defines the structure and validation rules for the QVR_Q17.QBP group
 */
export const qvrQ17QbpSchema = z.object({}).register(hl7v2Metadata, {
  title: "QVR_Q17.QBP",
  version: "2.7",
  description: "HL7 v2.7 QVR_Q17.QBP group",
  type: "Group"
});

/**
 * TypeScript type inferred from the QVR_Q17.QBP schema
 */
export type QVR_Q17_QBP = z.infer<typeof qvrQ17QbpSchema>;

/**
 * QVR_Q17 message schema
 * Defines the structure and validation rules for the QVR_Q17 message
 */
export const qvr_q17Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    QPD: segments.qpdSchema,
    QBP: qvrQ17QbpSchema.optional(),
    RCP: segments.rcpSchema,
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "QVR_Q17",
    version: "2.7",
    description: "HL7 v2.7 QVR_Q17 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the QVR_Q17 schema
 */
export type QVR_Q17 = z.infer<typeof qvr_q17Schema>;

/**
 * Default export for convenience
 */
export default qvr_q17Schema;
