import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 MFR_M06 Message
 *
 * HL7 v2.6 MFR_M06 message definition
 * Contains segment definitions and constraints for the MFR_M06 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFR_M06.MF_PHASE_SCHED_DETAIL group schema
 * Defines the structure and validation rules for the MFR_M06.MF_PHASE_SCHED_DETAIL group
 */
export const mfrM06MfPhaseSchedDetailSchema = z
  .object({
    CM1: segments.cm1Schema,
    CM2: z.array(segments.cm2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "MFR_M06.MF_PHASE_SCHED_DETAIL",
    version: "2.6",
    description: "HL7 v2.6 MFR_M06.MF_PHASE_SCHED_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MFR_M06.MF_PHASE_SCHED_DETAIL schema
 */
export type MFR_M06_MF_PHASE_SCHED_DETAIL = z.infer<typeof mfrM06MfPhaseSchedDetailSchema>;

/**
 * MFR_M06.MF_QUERY group schema
 * Defines the structure and validation rules for the MFR_M06.MF_QUERY group
 */
export const mfrM06MfQuerySchema = z
  .object({
    MFE: segments.mfeSchema,
    CM0: segments.cm0Schema,
    MF_PHASE_SCHED_DETAIL: z.array(mfrM06MfPhaseSchedDetailSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "MFR_M06.MF_QUERY",
    version: "2.6",
    description: "HL7 v2.6 MFR_M06.MF_QUERY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MFR_M06.MF_QUERY schema
 */
export type MFR_M06_MF_QUERY = z.infer<typeof mfrM06MfQuerySchema>;

/**
 * MFR_M06 message schema
 * Defines the structure and validation rules for the MFR_M06 message
 */
export const mfr_m06Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    QAK: segments.qakSchema.optional(),
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    MFI: segments.mfiSchema,
    MF_QUERY: z.array(mfrM06MfQuerySchema),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "MFR_M06",
    version: "2.6",
    description: "HL7 v2.6 MFR_M06 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MFR_M06 schema
 */
export type MFR_M06 = z.infer<typeof mfr_m06Schema>;

/**
 * Default export for convenience
 */
export default mfr_m06Schema;
