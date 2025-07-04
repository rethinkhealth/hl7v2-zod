import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 DBC_O42 Message
 * 
 * HL7 v2.8 DBC_O42 message definition
 * Contains segment definitions and constraints for the DBC_O42 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DBC_O42.DONOR group schema
 * Defines the structure and validation rules for the DBC_O42.DONOR group
 */
export const dbcO42DonorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "OBX": z.array(segments.obxSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "DBC_O42.DONOR",
  version: "2.8",
  description: "HL7 v2.8 DBC_O42.DONOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DBC_O42.DONOR schema
 */
export type DBC_O42_DONOR = z.infer<typeof dbcO42DonorSchema>;

/**
 * DBC_O42 message schema
 * Defines the structure and validation rules for the DBC_O42 message
 */
export const dbc_o42Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "DONOR": dbcO42DonorSchema.optional()
}).register(hl7v2Metadata, {
  title: "DBC_O42",
  version: "2.8",
  description: "HL7 v2.8 DBC_O42 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the DBC_O42 schema
 */
export type DBC_O42 = z.infer<typeof dbc_o42Schema>;

/**
 * Default export for convenience
 */
export default dbc_o42Schema;