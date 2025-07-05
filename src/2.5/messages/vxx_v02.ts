import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 VXX_V02 Message
 *
 * HL7 v2.5 VXX_V02 message definition
 * Contains segment definitions and constraints for the VXX_V02 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VXX_V02.PATIENT group schema
 * Defines the structure and validation rules for the VXX_V02.PATIENT group
 */
export const vxxV02PatientSchema = z
  .object({
    PID: segments.pidSchema,
    NK1: z.array(segments.nk1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "VXX_V02.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 VXX_V02.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the VXX_V02.PATIENT schema
 */
export type VXX_V02_PATIENT = z.infer<typeof vxxV02PatientSchema>;

/**
 * VXX_V02 message schema
 * Defines the structure and validation rules for the VXX_V02 message
 */
export const vxx_v02Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    SFT: z.array(segments.sftSchema).optional(),
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    PATIENT: z.array(vxxV02PatientSchema)
  })
  .register(hl7v2Metadata, {
    title: "VXX_V02",
    version: "2.5",
    description: "HL7 v2.5 VXX_V02 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the VXX_V02 schema
 */
export type VXX_V02 = z.infer<typeof vxx_v02Schema>;

/**
 * Default export for convenience
 */
export default vxx_v02Schema;
