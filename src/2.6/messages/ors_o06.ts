import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 ORS_O06 Message
 *
 * HL7 v2.6 ORS_O06 message definition
 * Contains segment definitions and constraints for the ORS_O06 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORS_O06.PATIENT group schema
 * Defines the structure and validation rules for the ORS_O06.PATIENT group
 */
export const orsO06PatientSchema = z
  .object({
    PID: segments.pidSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORS_O06.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 ORS_O06.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORS_O06.PATIENT schema
 */
export type ORS_O06_PATIENT = z.infer<typeof orsO06PatientSchema>;

/**
 * ORS_O06.TIMING group schema
 * Defines the structure and validation rules for the ORS_O06.TIMING group
 */
export const orsO06TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORS_O06.TIMING",
    version: "2.6",
    description: "HL7 v2.6 ORS_O06.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORS_O06.TIMING schema
 */
export type ORS_O06_TIMING = z.infer<typeof orsO06TimingSchema>;

/**
 * ORS_O06.ORDER group schema
 * Defines the structure and validation rules for the ORS_O06.ORDER group
 */
export const orsO06OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(orsO06TimingSchema).optional(),
    RQD: segments.rqdSchema,
    RQ1: segments.rq1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORS_O06.ORDER",
    version: "2.6",
    description: "HL7 v2.6 ORS_O06.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORS_O06.ORDER schema
 */
export type ORS_O06_ORDER = z.infer<typeof orsO06OrderSchema>;

/**
 * ORS_O06.RESPONSE group schema
 * Defines the structure and validation rules for the ORS_O06.RESPONSE group
 */
export const orsO06ResponseSchema = z
  .object({
    PATIENT: orsO06PatientSchema.optional(),
    ORDER: z.array(orsO06OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORS_O06.RESPONSE",
    version: "2.6",
    description: "HL7 v2.6 ORS_O06.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORS_O06.RESPONSE schema
 */
export type ORS_O06_RESPONSE = z.infer<typeof orsO06ResponseSchema>;

/**
 * ORS_O06 message schema
 * Defines the structure and validation rules for the ORS_O06 message
 */
export const ors_o06Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: orsO06ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORS_O06",
    version: "2.6",
    description: "HL7 v2.6 ORS_O06 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORS_O06 schema
 */
export type ORS_O06 = z.infer<typeof ors_o06Schema>;

/**
 * Default export for convenience
 */
export default ors_o06Schema;
