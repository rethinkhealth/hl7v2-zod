import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 RSP_E03 Message
 * 
 * HL7 v2.6 RSP_E03 message definition
 * Contains segment definitions and constraints for the RSP_E03 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_E03.INVOICE_PROCESSING_RESULTS_INFO group schema
 * Defines the structure and validation rules for the RSP_E03.INVOICE_PROCESSING_RESULTS_INFO group
 */
export const rspE03InvoiceProcessingResultsInfoSchema = z.object({
  "IPR": segments.iprSchema
}).register(hl7v2Metadata, {
  title: "RSP_E03.INVOICE_PROCESSING_RESULTS_INFO",
  version: "2.6",
  description: "HL7 v2.6 RSP_E03.INVOICE_PROCESSING_RESULTS_INFO group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_E03.INVOICE_PROCESSING_RESULTS_INFO schema
 */
export type RSP_E03_INVOICE_PROCESSING_RESULTS_INFO = z.infer<typeof rspE03InvoiceProcessingResultsInfoSchema>;

/**
 * RSP_E03.QUERY_ACK group schema
 * Defines the structure and validation rules for the RSP_E03.QUERY_ACK group
 */
export const rspE03QueryAckSchema = z.object({
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "INVOICE_PROCESSING_RESULTS_INFO": z.array(rspE03InvoiceProcessingResultsInfoSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_E03.QUERY_ACK",
  version: "2.6",
  description: "HL7 v2.6 RSP_E03.QUERY_ACK group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_E03.QUERY_ACK schema
 */
export type RSP_E03_QUERY_ACK = z.infer<typeof rspE03QueryAckSchema>;

/**
 * RSP_E03 message schema
 * Defines the structure and validation rules for the RSP_E03 message
 */
export const rsp_e03Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": z.array(segments.uacSchema).optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "QUERY_ACK": rspE03QueryAckSchema
}).register(hl7v2Metadata, {
  title: "RSP_E03",
  version: "2.6",
  description: "HL7 v2.6 RSP_E03 message",
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