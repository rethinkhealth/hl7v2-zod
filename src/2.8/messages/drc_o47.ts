import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 DRC_O47 Message
 *
 * HL7 v2.8 DRC_O47 message definition
 * Contains segment definitions and constraints for the DRC_O47 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DRC_O47.DONOR_REGISTRATION group schema
 * Defines the structure and validation rules for the DRC_O47.DONOR_REGISTRATION group
 */
export const drcO47DonorRegistrationSchema = z
  .object({
    PV1: segments.pv1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "DRC_O47.DONOR_REGISTRATION",
    version: "2.8",
    description: "HL7 v2.8 DRC_O47.DONOR_REGISTRATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the DRC_O47.DONOR_REGISTRATION schema
 */
export type DRC_O47_DONOR_REGISTRATION = z.infer<typeof drcO47DonorRegistrationSchema>;

/**
 * DRC_O47.DONATION_ORDER group schema
 * Defines the structure and validation rules for the DRC_O47.DONATION_ORDER group
 */
export const drcO47DonationOrderSchema = z
  .object({
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "DRC_O47.DONATION_ORDER",
    version: "2.8",
    description: "HL7 v2.8 DRC_O47.DONATION_ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the DRC_O47.DONATION_ORDER schema
 */
export type DRC_O47_DONATION_ORDER = z.infer<typeof drcO47DonationOrderSchema>;

/**
 * DRC_O47.DONOR group schema
 * Defines the structure and validation rules for the DRC_O47.DONOR group
 */
export const drcO47DonorSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    OBX: z.array(segments.obxSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    AL1: z.array(segments.al1Schema).optional(),
    ARV: z.array(segments.arvSchema).optional(),
    DONOR_REGISTRATION: drcO47DonorRegistrationSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "DRC_O47.DONOR",
    version: "2.8",
    description: "HL7 v2.8 DRC_O47.DONOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the DRC_O47.DONOR schema
 */
export type DRC_O47_DONOR = z.infer<typeof drcO47DonorSchema>;

/**
 * DRC_O47 message schema
 * Defines the structure and validation rules for the DRC_O47 message
 */
export const drc_o47Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    DONOR: drcO47DonorSchema.optional(),
    DONATION_ORDER: z.array(drcO47DonationOrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "DRC_O47",
    version: "2.8",
    description: "HL7 v2.8 DRC_O47 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the DRC_O47 schema
 */
export type DRC_O47 = z.infer<typeof drc_o47Schema>;

/**
 * Default export for convenience
 */
export default drc_o47Schema;
