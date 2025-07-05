import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 EHC_E21 Message
 *
 * HL7 v2.8 EHC_E21 message definition
 * Contains segment definitions and constraints for the EHC_E21 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E21.PSL_ITEM_INFO group schema
 * Defines the structure and validation rules for the EHC_E21.PSL_ITEM_INFO group
 */
export const ehcE21PslItemInfoSchema = z
  .object({
    PSL: segments.pslSchema,
    NTE: z.array(segments.nteSchema).optional(),
    AUT: segments.autSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "EHC_E21.PSL_ITEM_INFO",
    version: "2.8",
    description: "HL7 v2.8 EHC_E21.PSL_ITEM_INFO group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E21.PSL_ITEM_INFO schema
 */
export type EHC_E21_PSL_ITEM_INFO = z.infer<typeof ehcE21PslItemInfoSchema>;

/**
 * EHC_E21.AUTHORIZATION_REQUEST group schema
 * Defines the structure and validation rules for the EHC_E21.AUTHORIZATION_REQUEST group
 */
export const ehcE21AuthorizationRequestSchema = z
  .object({
    IVC: segments.ivcSchema,
    PSL_ITEM_INFO: z.array(ehcE21PslItemInfoSchema)
  })
  .register(hl7v2Metadata, {
    title: "EHC_E21.AUTHORIZATION_REQUEST",
    version: "2.8",
    description: "HL7 v2.8 EHC_E21.AUTHORIZATION_REQUEST group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E21.AUTHORIZATION_REQUEST schema
 */
export type EHC_E21_AUTHORIZATION_REQUEST = z.infer<typeof ehcE21AuthorizationRequestSchema>;

/**
 * EHC_E21 message schema
 * Defines the structure and validation rules for the EHC_E21 message
 */
export const ehc_e21Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: z.array(segments.uacSchema).optional(),
    AUTHORIZATION_REQUEST: ehcE21AuthorizationRequestSchema
  })
  .register(hl7v2Metadata, {
    title: "EHC_E21",
    version: "2.8",
    description: "HL7 v2.8 EHC_E21 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the EHC_E21 schema
 */
export type EHC_E21 = z.infer<typeof ehc_e21Schema>;

/**
 * Default export for convenience
 */
export default ehc_e21Schema;
