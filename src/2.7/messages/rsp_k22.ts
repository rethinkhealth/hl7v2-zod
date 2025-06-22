import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 RSP_K22 Message
 * 
 * HL7 v2.7 RSP_K22 message definition
 * Contains segment definitions and constraints for the RSP_K22 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_K22.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the RSP_K22.QUERY_RESPONSE group
 */
export const rspK22QueryResponseSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "QRI": segments.qriSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K22.QUERY_RESPONSE",
  version: "2.7",
  description: "HL7 v2.7 RSP_K22.QUERY_RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K22.QUERY_RESPONSE schema
 */
export type RSP_K22_QUERY_RESPONSE = z.infer<typeof rspK22QueryResponseSchema>;

/**
 * RSP_K22 message schema
 * Defines the structure and validation rules for the RSP_K22 message
 */
export const rsp_k22Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "QUERY_RESPONSE": z.array(rspK22QueryResponseSchema).optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K22",
  version: "2.7",
  description: "HL7 v2.7 RSP_K22 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_K22 schema
 */
export type RSP_K22 = z.infer<typeof rsp_k22Schema>;

/**
 * Default export for convenience
 */
export default rsp_k22Schema;