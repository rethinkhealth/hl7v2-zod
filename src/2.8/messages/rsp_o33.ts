import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 RSP_O33 Message
 * 
 * HL7 v2.8 RSP_O33 message definition
 * Contains segment definitions and constraints for the RSP_O33 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_O33.DONOR group schema
 * Defines the structure and validation rules for the RSP_O33.DONOR group
 */
export const rspO33DonorSchema = z.object({
  "PID": segments.pidSchema,
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_O33.DONOR",
  version: "2.8",
  description: "HL7 v2.8 RSP_O33.DONOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_O33.DONOR schema
 */
export type RSP_O33_DONOR = z.infer<typeof rspO33DonorSchema>;

/**
 * RSP_O33 message schema
 * Defines the structure and validation rules for the RSP_O33 message
 */
export const rsp_o33Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "DONOR": rspO33DonorSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_O33",
  version: "2.8",
  description: "HL7 v2.8 RSP_O33 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_O33 schema
 */
export type RSP_O33 = z.infer<typeof rsp_o33Schema>;

/**
 * Default export for convenience
 */
export default rsp_o33Schema;