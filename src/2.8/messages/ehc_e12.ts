import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 EHC_E12 Message
 * 
 * HL7 v2.8 EHC_E12 message definition
 * Contains segment definitions and constraints for the EHC_E12 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E12.REQUEST group schema
 * Defines the structure and validation rules for the EHC_E12.REQUEST group
 */
export const ehcE12RequestSchema = z.object({
  "CTD": segments.ctdSchema.optional(),
  "OBR": segments.obrSchema,
  "NTE": segments.nteSchema.optional(),
  "OBX": z.array(segments.obxSchema).optional()
}).register(hl7v2Metadata, {
  title: "EHC_E12.REQUEST",
  version: "2.8",
  description: "HL7 v2.8 EHC_E12.REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E12.REQUEST schema
 */
export type EHC_E12_REQUEST = z.infer<typeof ehcE12RequestSchema>;

/**
 * EHC_E12 message schema
 * Defines the structure and validation rules for the EHC_E12 message
 */
export const ehc_e12Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": z.array(segments.uacSchema).optional(),
  "RFI": segments.rfiSchema,
  "CTD": z.array(segments.ctdSchema).optional(),
  "IVC": segments.ivcSchema,
  "PSS": segments.pssSchema,
  "PSG": segments.psgSchema,
  "PID": segments.pidSchema.optional(),
  "PSL": z.array(segments.pslSchema).optional(),
  "REQUEST": z.array(ehcE12RequestSchema)
}).register(hl7v2Metadata, {
  title: "EHC_E12",
  version: "2.8",
  description: "HL7 v2.8 EHC_E12 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the EHC_E12 schema
 */
export type EHC_E12 = z.infer<typeof ehc_e12Schema>;

/**
 * Default export for convenience
 */
export default ehc_e12Schema;