import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 DPR_O48 Message
 * 
 * HL7 v2.9 DPR_O48 message definition
 * Contains segment definitions and constraints for the DPR_O48 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DPR_O48.DONOR_OBSERVATIONS group schema
 * Defines the structure and validation rules for the DPR_O48.DONOR_OBSERVATIONS group
 */
export const dprO48DonorObservationsSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "DPR_O48.DONOR_OBSERVATIONS",
  version: "2.9",
  description: "HL7 v2.9 DPR_O48.DONOR_OBSERVATIONS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DPR_O48.DONOR_OBSERVATIONS schema
 */
export type DPR_O48_DONOR_OBSERVATIONS = z.infer<typeof dprO48DonorObservationsSchema>;

/**
 * DPR_O48.DONOR_REGISTRATION group schema
 * Defines the structure and validation rules for the DPR_O48.DONOR_REGISTRATION group
 */
export const dprO48DonorRegistrationSchema = z.object({
  "PV1": segments.pv1Schema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DPR_O48.DONOR_REGISTRATION",
  version: "2.9",
  description: "HL7 v2.9 DPR_O48.DONOR_REGISTRATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DPR_O48.DONOR_REGISTRATION schema
 */
export type DPR_O48_DONOR_REGISTRATION = z.infer<typeof dprO48DonorRegistrationSchema>;

/**
 * DPR_O48.DONATION_ORDER group schema
 * Defines the structure and validation rules for the DPR_O48.DONATION_ORDER group
 */
export const dprO48DonationOrderSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DPR_O48.DONATION_ORDER",
  version: "2.9",
  description: "HL7 v2.9 DPR_O48.DONATION_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DPR_O48.DONATION_ORDER schema
 */
export type DPR_O48_DONATION_ORDER = z.infer<typeof dprO48DonationOrderSchema>;

/**
 * DPR_O48.DONATION_OBSERVATIONS group schema
 * Defines the structure and validation rules for the DPR_O48.DONATION_OBSERVATIONS group
 */
export const dprO48DonationObservationsSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "DPR_O48.DONATION_OBSERVATIONS",
  version: "2.9",
  description: "HL7 v2.9 DPR_O48.DONATION_OBSERVATIONS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DPR_O48.DONATION_OBSERVATIONS schema
 */
export type DPR_O48_DONATION_OBSERVATIONS = z.infer<typeof dprO48DonationObservationsSchema>;

/**
 * DPR_O48.BLOOD_UNIT group schema
 * Defines the structure and validation rules for the DPR_O48.BLOOD_UNIT group
 */
export const dprO48BloodUnitSchema = z.object({
  "BUI": z.array(segments.buiSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DPR_O48.BLOOD_UNIT",
  version: "2.9",
  description: "HL7 v2.9 DPR_O48.BLOOD_UNIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DPR_O48.BLOOD_UNIT schema
 */
export type DPR_O48_BLOOD_UNIT = z.infer<typeof dprO48BloodUnitSchema>;

/**
 * DPR_O48.DONOR group schema
 * Defines the structure and validation rules for the DPR_O48.DONOR group
 */
export const dprO48DonorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "DONOR_OBSERVATIONS": z.array(dprO48DonorObservationsSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "DONOR_REGISTRATION": dprO48DonorRegistrationSchema.optional()
}).register(hl7v2Metadata, {
  title: "DPR_O48.DONOR",
  version: "2.9",
  description: "HL7 v2.9 DPR_O48.DONOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DPR_O48.DONOR schema
 */
export type DPR_O48_DONOR = z.infer<typeof dprO48DonorSchema>;

/**
 * DPR_O48.DONATION group schema
 * Defines the structure and validation rules for the DPR_O48.DONATION group
 */
export const dprO48DonationSchema = z.object({
  "DON": segments.donSchema,
  "DONATION_OBSERVATIONS": z.array(dprO48DonationObservationsSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "BLOOD_UNIT": dprO48BloodUnitSchema.optional()
}).register(hl7v2Metadata, {
  title: "DPR_O48.DONATION",
  version: "2.9",
  description: "HL7 v2.9 DPR_O48.DONATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DPR_O48.DONATION schema
 */
export type DPR_O48_DONATION = z.infer<typeof dprO48DonationSchema>;

/**
 * DPR_O48 message schema
 * Defines the structure and validation rules for the DPR_O48 message
 */
export const dpr_o48Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "DONOR": dprO48DonorSchema.optional(),
  "DONATION_ORDER": z.array(dprO48DonationOrderSchema),
  "DONATION": dprO48DonationSchema.optional()
}).register(hl7v2Metadata, {
  title: "DPR_O48",
  version: "2.9",
  description: "HL7 v2.9 DPR_O48 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the DPR_O48 schema
 */
export type DPR_O48 = z.infer<typeof dpr_o48Schema>;

/**
 * Default export for convenience
 */
export default dpr_o48Schema;