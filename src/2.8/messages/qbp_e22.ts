import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 QBP_E22 Message
 * 
 * HL7 v2.8 QBP_E22 message definition
 * Contains segment definitions and constraints for the QBP_E22 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QBP_E22.QUERY group schema
 * Defines the structure and validation rules for the QBP_E22.QUERY group
 */
export const qbpE22QuerySchema = z.object({
  "QPD": segments.qpdSchema,
  "RCP": segments.rcpSchema
}).register(hl7v2Metadata, {
  title: "QBP_E22.QUERY",
  version: "2.8",
  description: "HL7 v2.8 QBP_E22.QUERY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the QBP_E22.QUERY schema
 */
export type QBP_E22_QUERY = z.infer<typeof qbpE22QuerySchema>;

/**
 * QBP_E22 message schema
 * Defines the structure and validation rules for the QBP_E22 message
 */
export const qbp_e22Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": z.array(segments.uacSchema).optional(),
  "QUERY": qbpE22QuerySchema
}).register(hl7v2Metadata, {
  title: "QBP_E22",
  version: "2.8",
  description: "HL7 v2.8 QBP_E22 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the QBP_E22 schema
 */
export type QBP_E22 = z.infer<typeof qbp_e22Schema>;

/**
 * Default export for convenience
 */
export default qbp_e22Schema;