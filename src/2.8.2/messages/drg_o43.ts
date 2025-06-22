import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 DRG_O43 Message
 * 
 * HL7 v2.8 DRG_O43 message definition
 * Contains segment definitions and constraints for the DRG_O43 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DRG_O43.DONOR_REGISTRATION group schema
 * Defines the structure and validation rules for the DRG_O43.DONOR_REGISTRATION group
 */
export const drgO43DonorRegistrationSchema = z.object({
  "PV1": segments.pv1Schema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DRG_O43.DONOR_REGISTRATION",
  version: "2.8",
  description: "HL7 v2.8 DRG_O43.DONOR_REGISTRATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DRG_O43.DONOR_REGISTRATION schema
 */
export type DRG_O43_DONOR_REGISTRATION = z.infer<typeof drgO43DonorRegistrationSchema>;

/**
 * DRG_O43.DONOR group schema
 * Defines the structure and validation rules for the DRG_O43.DONOR group
 */
export const drgO43DonorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "OBX": z.array(segments.obxSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "DONOR_REGISTRATION": drgO43DonorRegistrationSchema.optional()
}).register(hl7v2Metadata, {
  title: "DRG_O43.DONOR",
  version: "2.8",
  description: "HL7 v2.8 DRG_O43.DONOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DRG_O43.DONOR schema
 */
export type DRG_O43_DONOR = z.infer<typeof drgO43DonorSchema>;

/**
 * DRG_O43 message schema
 * Defines the structure and validation rules for the DRG_O43 message
 */
export const drg_o43Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "DONOR": drgO43DonorSchema.optional()
}).register(hl7v2Metadata, {
  title: "DRG_O43",
  version: "2.8",
  description: "HL7 v2.8 DRG_O43 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the DRG_O43 schema
 */
export type DRG_O43 = z.infer<typeof drg_o43Schema>;

/**
 * Default export for convenience
 */
export default drg_o43Schema;