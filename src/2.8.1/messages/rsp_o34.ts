import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 RSP_O34 Message
 *
 * HL7 v2.8 RSP_O34 message definition
 * Contains segment definitions and constraints for the RSP_O34 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_O34.DONOR_REGISTRATION group schema
 * Defines the structure and validation rules for the RSP_O34.DONOR_REGISTRATION group
 */
export const rspO34DonorRegistrationSchema = z
  .object({
    PV1: segments.pv1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_O34.DONOR_REGISTRATION",
    version: "2.8",
    description: "HL7 v2.8 RSP_O34.DONOR_REGISTRATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_O34.DONOR_REGISTRATION schema
 */
export type RSP_O34_DONOR_REGISTRATION = z.infer<typeof rspO34DonorRegistrationSchema>;

/**
 * RSP_O34.DONATION group schema
 * Defines the structure and validation rules for the RSP_O34.DONATION group
 */
export const rspO34DonationSchema = z
  .object({
    DON: segments.donSchema,
    OBX: z.array(segments.obxSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_O34.DONATION",
    version: "2.8",
    description: "HL7 v2.8 RSP_O34.DONATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_O34.DONATION schema
 */
export type RSP_O34_DONATION = z.infer<typeof rspO34DonationSchema>;

/**
 * RSP_O34.DONOR group schema
 * Defines the structure and validation rules for the RSP_O34.DONOR group
 */
export const rspO34DonorSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    OBX: z.array(segments.obxSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    AL1: z.array(segments.al1Schema).optional(),
    ARV: z.array(segments.arvSchema).optional(),
    DONOR_REGISTRATION: rspO34DonorRegistrationSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_O34.DONOR",
    version: "2.8",
    description: "HL7 v2.8 RSP_O34.DONOR group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_O34.DONOR schema
 */
export type RSP_O34_DONOR = z.infer<typeof rspO34DonorSchema>;

/**
 * RSP_O34 message schema
 * Defines the structure and validation rules for the RSP_O34 message
 */
export const rsp_o34Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema,
    ERR: segments.errSchema.optional(),
    QAK: segments.qakSchema,
    QPD: segments.qpdSchema,
    DONOR: rspO34DonorSchema.optional(),
    DONATION: rspO34DonationSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_O34",
    version: "2.8",
    description: "HL7 v2.8 RSP_O34 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RSP_O34 schema
 */
export type RSP_O34 = z.infer<typeof rsp_o34Schema>;

/**
 * Default export for convenience
 */
export default rsp_o34Schema;
