import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 RSP_E03 Message
 *
 * HL7 v2.8 RSP_E03 message definition
 * Contains segment definitions and constraints for the RSP_E03 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_E03.QUERY_ACK_IPR group schema
 * Defines the structure and validation rules for the RSP_E03.QUERY_ACK_IPR group
 */
export const rspE03QueryAckIprSchema = z
  .object({
    QAK: segments.qakSchema,
    QPD: segments.qpdSchema,
    IPR: z.array(segments.iprSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_E03.QUERY_ACK_IPR",
    version: "2.8",
    description: "HL7 v2.8 RSP_E03.QUERY_ACK_IPR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_E03.QUERY_ACK_IPR schema
 */
export type RSP_E03_QUERY_ACK_IPR = z.infer<typeof rspE03QueryAckIprSchema>;

/**
 * RSP_E03 message schema
 * Defines the structure and validation rules for the RSP_E03 message
 */
export const rsp_e03Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: z.array(segments.uacSchema).optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    QUERY_ACK_IPR: rspE03QueryAckIprSchema
  })
  .register(hl7v2Metadata, {
    title: "RSP_E03",
    version: "2.8",
    description: "HL7 v2.8 RSP_E03 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RSP_E03 schema
 */
export type RSP_E03 = z.infer<typeof rsp_e03Schema>;

/**
 * Default export for convenience
 */
export default rsp_e03Schema;
