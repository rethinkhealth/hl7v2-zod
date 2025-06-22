import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 DER_O44 Message
 * 
 * HL7 v2.8 DER_O44 message definition
 * Contains segment definitions and constraints for the DER_O44 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DER_O44.DONOR_REGISTRATION group schema
 * Defines the structure and validation rules for the DER_O44.DONOR_REGISTRATION group
 */
export const derO44DonorRegistrationSchema = z.object({
  "PV1": segments.pv1Schema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DER_O44.DONOR_REGISTRATION",
  version: "2.8",
  description: "HL7 v2.8 DER_O44.DONOR_REGISTRATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DER_O44.DONOR_REGISTRATION schema
 */
export type DER_O44_DONOR_REGISTRATION = z.infer<typeof derO44DonorRegistrationSchema>;

/**
 * DER_O44.DONATION_ORDER group schema
 * Defines the structure and validation rules for the DER_O44.DONATION_ORDER group
 */
export const derO44DonationOrderSchema = z.object({
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DER_O44.DONATION_ORDER",
  version: "2.8",
  description: "HL7 v2.8 DER_O44.DONATION_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DER_O44.DONATION_ORDER schema
 */
export type DER_O44_DONATION_ORDER = z.infer<typeof derO44DonationOrderSchema>;

/**
 * DER_O44.DONOR group schema
 * Defines the structure and validation rules for the DER_O44.DONOR group
 */
export const derO44DonorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "OBX": z.array(segments.obxSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "DONOR_REGISTRATION": derO44DonorRegistrationSchema.optional()
}).register(hl7v2Metadata, {
  title: "DER_O44.DONOR",
  version: "2.8",
  description: "HL7 v2.8 DER_O44.DONOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DER_O44.DONOR schema
 */
export type DER_O44_DONOR = z.infer<typeof derO44DonorSchema>;

/**
 * DER_O44 message schema
 * Defines the structure and validation rules for the DER_O44 message
 */
export const der_o44Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "DONOR": derO44DonorSchema.optional(),
  "DONATION_ORDER": z.array(derO44DonationOrderSchema)
}).register(hl7v2Metadata, {
  title: "DER_O44",
  version: "2.8",
  description: "HL7 v2.8 DER_O44 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the DER_O44 schema
 */
export type DER_O44 = z.infer<typeof der_o44Schema>;

/**
 * Default export for convenience
 */
export default der_o44Schema;