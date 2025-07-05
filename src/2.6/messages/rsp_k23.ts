import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 RSP_K23 Message
 * 
 * HL7 v2.6 RSP_K23 message definition
 * Contains segment definitions and constraints for the RSP_K23 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_K23.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the RSP_K23.QUERY_RESPONSE group
 */
export const rspK23QueryResponseSchema = z.object({
  "PID": segments.pidSchema
}).register(hl7v2Metadata, {
  title: "RSP_K23.QUERY_RESPONSE",
  version: "2.6",
  description: "HL7 v2.6 RSP_K23.QUERY_RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K23.QUERY_RESPONSE schema
 */
export type RSP_K23_QUERY_RESPONSE = z.infer<typeof rspK23QueryResponseSchema>;

/**
 * RSP_K23 message schema
 * Defines the structure and validation rules for the RSP_K23 message
 */
export const rsp_k23Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "QUERY_RESPONSE": rspK23QueryResponseSchema.optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K23",
  version: "2.6",
  description: "HL7 v2.6 RSP_K23 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_K23 schema
 */
export type RSP_K23 = z.infer<typeof rsp_k23Schema>;

/**
 * Default export for convenience
 */
export default rsp_k23Schema;