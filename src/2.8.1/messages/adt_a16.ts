import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 ADT_A16 Message
 *
 * HL7 v2.8 ADT_A16 message definition
 * Contains segment definitions and constraints for the ADT_A16 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A16.PROCEDURE group schema
 * Defines the structure and validation rules for the ADT_A16.PROCEDURE group
 */
export const adtA16ProcedureSchema = z
  .object({
    PR1: segments.pr1Schema,
    ROL: z.array(segments.rolSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ADT_A16.PROCEDURE",
    version: "2.8",
    description: "HL7 v2.8 ADT_A16.PROCEDURE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ADT_A16.PROCEDURE schema
 */
export type ADT_A16_PROCEDURE = z.infer<typeof adtA16ProcedureSchema>;

/**
 * ADT_A16.INSURANCE group schema
 * Defines the structure and validation rules for the ADT_A16.INSURANCE group
 */
export const adtA16InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: z.array(segments.in3Schema).optional(),
    ROL: z.array(segments.rolSchema).optional(),
    AUT: z.array(segments.autSchema).optional(),
    RF1: z.array(segments.rf1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ADT_A16.INSURANCE",
    version: "2.8",
    description: "HL7 v2.8 ADT_A16.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ADT_A16.INSURANCE schema
 */
export type ADT_A16_INSURANCE = z.infer<typeof adtA16InsuranceSchema>;

/**
 * ADT_A16 message schema
 * Defines the structure and validation rules for the ADT_A16 message
 */
export const adt_a16Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    ARV: z.array(segments.arvSchema).optional(),
    ROL: z.array(segments.rolSchema).optional(),
    NK1: z.array(segments.nk1Schema).optional(),
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
    ARV_1: z.array(segments.arvSchema).optional(),
    ROL_1: z.array(segments.rolSchema).optional(),
    DB1: z.array(segments.db1Schema).optional(),
    OBX: z.array(segments.obxSchema).optional(),
    AL1: z.array(segments.al1Schema).optional(),
    DG1: z.array(segments.dg1Schema).optional(),
    DRG: segments.drgSchema.optional(),
    PROCEDURE: z.array(adtA16ProcedureSchema).optional(),
    GT1: z.array(segments.gt1Schema).optional(),
    INSURANCE: z.array(adtA16InsuranceSchema).optional(),
    ACC: segments.accSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ADT_A16",
    version: "2.8",
    description: "HL7 v2.8 ADT_A16 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ADT_A16 schema
 */
export type ADT_A16 = z.infer<typeof adt_a16Schema>;

/**
 * Default export for convenience
 */
export default adt_a16Schema;
