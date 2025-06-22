import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 EHC_E24 Message
 * 
 * HL7 v2.8 EHC_E24 message definition
 * Contains segment definitions and constraints for the EHC_E24 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E24.PSL_ITEM_INFO group schema
 * Defines the structure and validation rules for the EHC_E24.PSL_ITEM_INFO group
 */
export const ehcE24PslItemInfoSchema = z.object({
  "PSL": segments.pslSchema,
  "AUT": segments.autSchema.optional(),
  "ADJ": z.array(segments.adjSchema).optional()
}).register(hl7v2Metadata, {
  title: "EHC_E24.PSL_ITEM_INFO",
  version: "2.8",
  description: "HL7 v2.8 EHC_E24.PSL_ITEM_INFO group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E24.PSL_ITEM_INFO schema
 */
export type EHC_E24_PSL_ITEM_INFO = z.infer<typeof ehcE24PslItemInfoSchema>;

/**
 * EHC_E24.AUTHORIZATION_RESPONSE_INFO group schema
 * Defines the structure and validation rules for the EHC_E24.AUTHORIZATION_RESPONSE_INFO group
 */
export const ehcE24AuthorizationResponseInfoSchema = z.object({
  "IVC": segments.ivcSchema,
  "PSL_ITEM_INFO": z.array(ehcE24PslItemInfoSchema)
}).register(hl7v2Metadata, {
  title: "EHC_E24.AUTHORIZATION_RESPONSE_INFO",
  version: "2.8",
  description: "HL7 v2.8 EHC_E24.AUTHORIZATION_RESPONSE_INFO group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E24.AUTHORIZATION_RESPONSE_INFO schema
 */
export type EHC_E24_AUTHORIZATION_RESPONSE_INFO = z.infer<typeof ehcE24AuthorizationResponseInfoSchema>;

/**
 * EHC_E24 message schema
 * Defines the structure and validation rules for the EHC_E24 message
 */
export const ehc_e24Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": z.array(segments.uacSchema).optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "AUTHORIZATION_RESPONSE_INFO": ehcE24AuthorizationResponseInfoSchema
}).register(hl7v2Metadata, {
  title: "EHC_E24",
  version: "2.8",
  description: "HL7 v2.8 EHC_E24 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the EHC_E24 schema
 */
export type EHC_E24 = z.infer<typeof ehc_e24Schema>;

/**
 * Default export for convenience
 */
export default ehc_e24Schema;