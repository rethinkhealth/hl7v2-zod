import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 BAR_P01 Message
 *
 * HL7 v2.7 BAR_P01 message definition
 * Contains segment definitions and constraints for the BAR_P01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BAR_P01.PROCEDURE group schema
 * Defines the structure and validation rules for the BAR_P01.PROCEDURE group
 */
export const barP01ProcedureSchema = z
  .object({
    PR1: segments.pr1Schema,
    ROL: z.array(segments.rolSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BAR_P01.PROCEDURE",
    version: "2.7",
    description: "HL7 v2.7 BAR_P01.PROCEDURE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BAR_P01.PROCEDURE schema
 */
export type BAR_P01_PROCEDURE = z.infer<typeof barP01ProcedureSchema>;

/**
 * BAR_P01.INSURANCE group schema
 * Defines the structure and validation rules for the BAR_P01.INSURANCE group
 */
export const barP01InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: z.array(segments.in3Schema).optional(),
    ROL: z.array(segments.rolSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BAR_P01.INSURANCE",
    version: "2.7",
    description: "HL7 v2.7 BAR_P01.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BAR_P01.INSURANCE schema
 */
export type BAR_P01_INSURANCE = z.infer<typeof barP01InsuranceSchema>;

/**
 * BAR_P01.VISIT group schema
 * Defines the structure and validation rules for the BAR_P01.VISIT group
 */
export const barP01VisitSchema = z
  .object({
    PV1: segments.pv1Schema.optional(),
    PV2: segments.pv2Schema.optional(),
    ROL: z.array(segments.rolSchema).optional(),
    DB1: z.array(segments.db1Schema).optional(),
    OBX: z.array(segments.obxSchema).optional(),
    AL1: z.array(segments.al1Schema).optional(),
    DG1: z.array(segments.dg1Schema).optional(),
    DRG: segments.drgSchema.optional(),
    PROCEDURE: z.array(barP01ProcedureSchema).optional(),
    GT1: z.array(segments.gt1Schema).optional(),
    NK1: z.array(segments.nk1Schema).optional(),
    INSURANCE: z.array(barP01InsuranceSchema).optional(),
    ACC: segments.accSchema.optional(),
    UB1: segments.ub1Schema.optional(),
    UB2: segments.ub2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "BAR_P01.VISIT",
    version: "2.7",
    description: "HL7 v2.7 BAR_P01.VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BAR_P01.VISIT schema
 */
export type BAR_P01_VISIT = z.infer<typeof barP01VisitSchema>;

/**
 * BAR_P01 message schema
 * Defines the structure and validation rules for the BAR_P01 message
 */
export const bar_p01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    ROL: z.array(segments.rolSchema).optional(),
    VISIT: z.array(barP01VisitSchema)
  })
  .register(hl7v2Metadata, {
    title: "BAR_P01",
    version: "2.7",
    description: "HL7 v2.7 BAR_P01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the BAR_P01 schema
 */
export type BAR_P01 = z.infer<typeof bar_p01Schema>;

/**
 * Default export for convenience
 */
export default bar_p01Schema;
