import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 RSP_K32 Message
 * 
 * HL7 v2.7 RSP_K32 message definition
 * Contains segment definitions and constraints for the RSP_K32 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_K32.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the RSP_K32.QUERY_RESPONSE group
 */
export const rspK32QueryResponseSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "QRI": segments.qriSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K32.QUERY_RESPONSE",
  version: "2.7",
  description: "HL7 v2.7 RSP_K32.QUERY_RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K32.QUERY_RESPONSE schema
 */
export type RSP_K32_QUERY_RESPONSE = z.infer<typeof rspK32QueryResponseSchema>;

/**
 * RSP_K32 message schema
 * Defines the structure and validation rules for the RSP_K32 message
 */
export const rsp_k32Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "QUERY_RESPONSE": z.array(rspK32QueryResponseSchema).optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K32",
  version: "2.7",
  description: "HL7 v2.7 RSP_K32 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_K32 schema
 */
export type RSP_K32 = z.infer<typeof rsp_k32Schema>;

/**
 * Default export for convenience
 */
export default rsp_k32Schema;