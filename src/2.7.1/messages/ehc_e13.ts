import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 EHC_E13 Message
 *
 * HL7 v2.7 EHC_E13 message definition
 * Contains segment definitions and constraints for the EHC_E13 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E13.RESPONSE group schema
 * Defines the structure and validation rules for the EHC_E13.RESPONSE group
 */
export const ehcE13ResponseSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: segments.nteSchema.optional(),
    TXA: segments.txaSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "EHC_E13.RESPONSE",
    version: "2.7",
    description: "HL7 v2.7 EHC_E13.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E13.RESPONSE schema
 */
export type EHC_E13_RESPONSE = z.infer<typeof ehcE13ResponseSchema>;

/**
 * EHC_E13.REQUEST group schema
 * Defines the structure and validation rules for the EHC_E13.REQUEST group
 */
export const ehcE13RequestSchema = z
  .object({
    CTD: segments.ctdSchema.optional(),
    OBR: segments.obrSchema,
    NTE: segments.nteSchema.optional(),
    RESPONSE: z.array(ehcE13ResponseSchema)
  })
  .register(hl7v2Metadata, {
    title: "EHC_E13.REQUEST",
    version: "2.7",
    description: "HL7 v2.7 EHC_E13.REQUEST group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the EHC_E13.REQUEST schema
 */
export type EHC_E13_REQUEST = z.infer<typeof ehcE13RequestSchema>;

/**
 * EHC_E13 message schema
 * Defines the structure and validation rules for the EHC_E13 message
 */
export const ehc_e13Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: z.array(segments.uacSchema).optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    RFI: segments.rfiSchema,
    CTD: z.array(segments.ctdSchema).optional(),
    IVC: segments.ivcSchema,
    PSS: segments.pssSchema,
    PSG: segments.psgSchema,
    PID: segments.pidSchema.optional(),
    PSL: segments.pslSchema.optional(),
    REQUEST: z.array(ehcE13RequestSchema)
  })
  .register(hl7v2Metadata, {
    title: "EHC_E13",
    version: "2.7",
    description: "HL7 v2.7 EHC_E13 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the EHC_E13 schema
 */
export type EHC_E13 = z.infer<typeof ehc_e13Schema>;

/**
 * Default export for convenience
 */
export default ehc_e13Schema;
