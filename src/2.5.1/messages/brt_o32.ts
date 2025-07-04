import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 BRT_O32 Message
 * 
 * HL7 v2.5 BRT_O32 message definition
 * Contains segment definitions and constraints for the BRT_O32 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BRT_O32.TIMING group schema
 * Defines the structure and validation rules for the BRT_O32.TIMING group
 */
export const brtO32TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "BRT_O32.TIMING",
  version: "2.5",
  description: "HL7 v2.5 BRT_O32.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the BRT_O32.TIMING schema
 */
export type BRT_O32_TIMING = z.infer<typeof brtO32TimingSchema>;

/**
 * BRT_O32.ORDER group schema
 * Defines the structure and validation rules for the BRT_O32.ORDER group
 */
export const brtO32OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(brtO32TimingSchema).optional(),
  "BPO": segments.bpoSchema.optional(),
  "BTX": z.array(segments.btxSchema).optional()
}).register(hl7v2Metadata, {
  title: "BRT_O32.ORDER",
  version: "2.5",
  description: "HL7 v2.5 BRT_O32.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the BRT_O32.ORDER schema
 */
export type BRT_O32_ORDER = z.infer<typeof brtO32OrderSchema>;

/**
 * BRT_O32.RESPONSE group schema
 * Defines the structure and validation rules for the BRT_O32.RESPONSE group
 */
export const brtO32ResponseSchema = z.object({
  "PID": segments.pidSchema.optional(),
  "ORDER": z.array(brtO32OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "BRT_O32.RESPONSE",
  version: "2.5",
  description: "HL7 v2.5 BRT_O32.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the BRT_O32.RESPONSE schema
 */
export type BRT_O32_RESPONSE = z.infer<typeof brtO32ResponseSchema>;

/**
 * BRT_O32 message schema
 * Defines the structure and validation rules for the BRT_O32 message
 */
export const brt_o32Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": brtO32ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "BRT_O32",
  version: "2.5",
  description: "HL7 v2.5 BRT_O32 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the BRT_O32 schema
 */
export type BRT_O32 = z.infer<typeof brt_o32Schema>;

/**
 * Default export for convenience
 */
export default brt_o32Schema;