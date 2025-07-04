import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 RSP_K21 Message
 * 
 * HL7 v2.8 RSP_K21 message definition
 * Contains segment definitions and constraints for the RSP_K21 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_K21.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the RSP_K21.QUERY_RESPONSE group
 */
export const rspK21QueryResponseSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "QRI": segments.qriSchema
}).register(hl7v2Metadata, {
  title: "RSP_K21.QUERY_RESPONSE",
  version: "2.8",
  description: "HL7 v2.8 RSP_K21.QUERY_RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K21.QUERY_RESPONSE schema
 */
export type RSP_K21_QUERY_RESPONSE = z.infer<typeof rspK21QueryResponseSchema>;

/**
 * RSP_K21 message schema
 * Defines the structure and validation rules for the RSP_K21 message
 */
export const rsp_k21Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "QUERY_RESPONSE": rspK21QueryResponseSchema.optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K21",
  version: "2.8",
  description: "HL7 v2.8 RSP_K21 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_K21 schema
 */
export type RSP_K21 = z.infer<typeof rsp_k21Schema>;

/**
 * Default export for convenience
 */
export default rsp_k21Schema;