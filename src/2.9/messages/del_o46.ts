import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 DEL_O46 Message
 * 
 * HL7 v2.9 DEL_O46 message definition
 * Contains segment definitions and constraints for the DEL_O46 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DEL_O46.DONOR_OBSERVATIONS group schema
 * Defines the structure and validation rules for the DEL_O46.DONOR_OBSERVATIONS group
 */
export const delO46DonorObservationsSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "DEL_O46.DONOR_OBSERVATIONS",
  version: "2.9",
  description: "HL7 v2.9 DEL_O46.DONOR_OBSERVATIONS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DEL_O46.DONOR_OBSERVATIONS schema
 */
export type DEL_O46_DONOR_OBSERVATIONS = z.infer<typeof delO46DonorObservationsSchema>;

/**
 * DEL_O46.DONOR_REGISTRATION group schema
 * Defines the structure and validation rules for the DEL_O46.DONOR_REGISTRATION group
 */
export const delO46DonorRegistrationSchema = z.object({
  "PV1": segments.pv1Schema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DEL_O46.DONOR_REGISTRATION",
  version: "2.9",
  description: "HL7 v2.9 DEL_O46.DONOR_REGISTRATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DEL_O46.DONOR_REGISTRATION schema
 */
export type DEL_O46_DONOR_REGISTRATION = z.infer<typeof delO46DonorRegistrationSchema>;

/**
 * DEL_O46.DONOR group schema
 * Defines the structure and validation rules for the DEL_O46.DONOR group
 */
export const delO46DonorSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "DONOR_OBSERVATIONS": z.array(delO46DonorObservationsSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "DONOR_REGISTRATION": delO46DonorRegistrationSchema.optional()
}).register(hl7v2Metadata, {
  title: "DEL_O46.DONOR",
  version: "2.9",
  description: "HL7 v2.9 DEL_O46.DONOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DEL_O46.DONOR schema
 */
export type DEL_O46_DONOR = z.infer<typeof delO46DonorSchema>;

/**
 * DEL_O46 message schema
 * Defines the structure and validation rules for the DEL_O46 message
 */
export const del_o46Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "DONOR": delO46DonorSchema.optional(),
  "DON": segments.donSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DEL_O46",
  version: "2.9",
  description: "HL7 v2.9 DEL_O46 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the DEL_O46 schema
 */
export type DEL_O46 = z.infer<typeof del_o46Schema>;

/**
 * Default export for convenience
 */
export default del_o46Schema;