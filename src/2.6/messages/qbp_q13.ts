import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 QBP_Q13 Message
 *
 * HL7 v2.6 QBP_Q13 message definition
 * Contains segment definitions and constraints for the QBP_Q13 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QBP_Q13 message schema
 * Defines the structure and validation rules for the QBP_Q13 message
 */
export const qbp_q13Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    QPD: segments.qpdSchema,
    RDF: segments.rdfSchema.optional(),
    RCP: segments.rcpSchema,
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "QBP_Q13",
    version: "2.6",
    description: "HL7 v2.6 QBP_Q13 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the QBP_Q13 schema
 */
export type QBP_Q13 = z.infer<typeof qbp_q13Schema>;

/**
 * Default export for convenience
 */
export default qbp_q13Schema;
