import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 MFR_M01 Message
 *
 * HL7 v2.5 MFR_M01 message definition
 * Contains segment definitions and constraints for the MFR_M01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFR_M01.MF_QUERY group schema
 * Defines the structure and validation rules for the MFR_M01.MF_QUERY group
 */
export const mfrM01MfQuerySchema = z
  .object({
    MFE: segments.mfeSchema
  })
  .register(hl7v2Metadata, {
    title: "MFR_M01.MF_QUERY",
    version: "2.5",
    description: "HL7 v2.5 MFR_M01.MF_QUERY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MFR_M01.MF_QUERY schema
 */
export type MFR_M01_MF_QUERY = z.infer<typeof mfrM01MfQuerySchema>;

/**
 * MFR_M01 message schema
 * Defines the structure and validation rules for the MFR_M01 message
 */
export const mfr_m01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    QAK: segments.qakSchema.optional(),
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    MFI: segments.mfiSchema,
    MF_QUERY: z.array(mfrM01MfQuerySchema),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "MFR_M01",
    version: "2.5",
    description: "HL7 v2.5 MFR_M01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFR_M01 schema
 */
export type MFR_M01 = z.infer<typeof mfr_m01Schema>;

/**
 * Default export for convenience
 */
export default mfr_m01Schema;
