import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 RSP_E22 Message
 *
 * HL7 v2.8 RSP_E22 message definition
 * Contains segment definitions and constraints for the RSP_E22 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_E22.PSL_ITEM_INFO group schema
 * Defines the structure and validation rules for the RSP_E22.PSL_ITEM_INFO group
 */
export const rspE22PslItemInfoSchema = z
  .object({
    PSL: segments.pslSchema
  })
  .register(hl7v2Metadata, {
    title: "RSP_E22.PSL_ITEM_INFO",
    version: "2.8",
    description: "HL7 v2.8 RSP_E22.PSL_ITEM_INFO group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_E22.PSL_ITEM_INFO schema
 */
export type RSP_E22_PSL_ITEM_INFO = z.infer<typeof rspE22PslItemInfoSchema>;

/**
 * RSP_E22.AUTHORIZATION_INFO group schema
 * Defines the structure and validation rules for the RSP_E22.AUTHORIZATION_INFO group
 */
export const rspE22AuthorizationInfoSchema = z
  .object({
    IVC: segments.ivcSchema,
    PSG: segments.psgSchema,
    PSL_ITEM_INFO: z.array(rspE22PslItemInfoSchema)
  })
  .register(hl7v2Metadata, {
    title: "RSP_E22.AUTHORIZATION_INFO",
    version: "2.8",
    description: "HL7 v2.8 RSP_E22.AUTHORIZATION_INFO group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_E22.AUTHORIZATION_INFO schema
 */
export type RSP_E22_AUTHORIZATION_INFO = z.infer<typeof rspE22AuthorizationInfoSchema>;

/**
 * RSP_E22.QUERY_ACK group schema
 * Defines the structure and validation rules for the RSP_E22.QUERY_ACK group
 */
export const rspE22QueryAckSchema = z
  .object({
    QAK: segments.qakSchema,
    QPD: segments.qpdSchema,
    AUTHORIZATION_INFO: rspE22AuthorizationInfoSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_E22.QUERY_ACK",
    version: "2.8",
    description: "HL7 v2.8 RSP_E22.QUERY_ACK group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_E22.QUERY_ACK schema
 */
export type RSP_E22_QUERY_ACK = z.infer<typeof rspE22QueryAckSchema>;

/**
 * RSP_E22 message schema
 * Defines the structure and validation rules for the RSP_E22 message
 */
export const rsp_e22Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: z.array(segments.uacSchema).optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    QUERY_ACK: rspE22QueryAckSchema
  })
  .register(hl7v2Metadata, {
    title: "RSP_E22",
    version: "2.8",
    description: "HL7 v2.8 RSP_E22 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RSP_E22 schema
 */
export type RSP_E22 = z.infer<typeof rsp_e22Schema>;

/**
 * Default export for convenience
 */
export default rsp_e22Schema;
