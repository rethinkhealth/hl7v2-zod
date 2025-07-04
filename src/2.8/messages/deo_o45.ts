import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 DEO_O45 Message
 * 
 * HL7 v2.8 DEO_O45 message definition
 * Contains segment definitions and constraints for the DEO_O45 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DEO_O45.DONOR_REGISTRATION group schema
 * Defines the structure and validation rules for the DEO_O45.DONOR_REGISTRATION group
 */
export const deoO45DonorRegistrationSchema = z.object({
  "PV1": segments.pv1Schema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DEO_O45.DONOR_REGISTRATION",
  version: "2.8",
  description: "HL7 v2.8 DEO_O45.DONOR_REGISTRATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DEO_O45.DONOR_REGISTRATION schema
 */
export type DEO_O45_DONOR_REGISTRATION = z.infer<typeof deoO45DonorRegistrationSchema>;

/**
 * DEO_O45.DONOR_OBSERVATION group schema
 * Defines the structure and validation rules for the DEO_O45.DONOR_OBSERVATION group
 */
export const deoO45DonorObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "DEO_O45.DONOR_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 DEO_O45.DONOR_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DEO_O45.DONOR_OBSERVATION schema
 */
export type DEO_O45_DONOR_OBSERVATION = z.infer<typeof deoO45DonorObservationSchema>;

/**
 * DEO_O45.DONOR group schema
 * Defines the structure and validation rules for the DEO_O45.DONOR group
 */
export const deoO45DonorSchema = z.object({
  "PID": segments.pidSchema,
  "OBX": z.array(segments.obxSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "DONOR_REGISTRATION": deoO45DonorRegistrationSchema.optional()
}).register(hl7v2Metadata, {
  title: "DEO_O45.DONOR",
  version: "2.8",
  description: "HL7 v2.8 DEO_O45.DONOR group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DEO_O45.DONOR schema
 */
export type DEO_O45_DONOR = z.infer<typeof deoO45DonorSchema>;

/**
 * DEO_O45.DONOR_ORDER group schema
 * Defines the structure and validation rules for the DEO_O45.DONOR_ORDER group
 */
export const deoO45DonorOrderSchema = z.object({
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "DONOR_OBSERVATION": z.array(deoO45DonorObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "DEO_O45.DONOR_ORDER",
  version: "2.8",
  description: "HL7 v2.8 DEO_O45.DONOR_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DEO_O45.DONOR_ORDER schema
 */
export type DEO_O45_DONOR_ORDER = z.infer<typeof deoO45DonorOrderSchema>;

/**
 * DEO_O45 message schema
 * Defines the structure and validation rules for the DEO_O45 message
 */
export const deo_o45Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "DONOR": deoO45DonorSchema.optional(),
  "DONOR_ORDER": z.array(deoO45DonorOrderSchema)
}).register(hl7v2Metadata, {
  title: "DEO_O45",
  version: "2.8",
  description: "HL7 v2.8 DEO_O45 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the DEO_O45 schema
 */
export type DEO_O45 = z.infer<typeof deo_o45Schema>;

/**
 * Default export for convenience
 */
export default deo_o45Schema;