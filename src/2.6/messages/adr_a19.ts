import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 ADR_A19 Message
 *
 * HL7 v2.6 ADR_A19 message definition
 * Contains segment definitions and constraints for the ADR_A19 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADR_A19.PROCEDURE group schema
 * Defines the structure and validation rules for the ADR_A19.PROCEDURE group
 */
export const adrA19ProcedureSchema = z
  .object({
    PR1: segments.pr1Schema,
    ROL: z.array(segments.rolSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ADR_A19.PROCEDURE",
    version: "2.6",
    description: "HL7 v2.6 ADR_A19.PROCEDURE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ADR_A19.PROCEDURE schema
 */
export type ADR_A19_PROCEDURE = z.infer<typeof adrA19ProcedureSchema>;

/**
 * ADR_A19.INSURANCE group schema
 * Defines the structure and validation rules for the ADR_A19.INSURANCE group
 */
export const adrA19InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: z.array(segments.in3Schema).optional(),
    ROL: z.array(segments.rolSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ADR_A19.INSURANCE",
    version: "2.6",
    description: "HL7 v2.6 ADR_A19.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ADR_A19.INSURANCE schema
 */
export type ADR_A19_INSURANCE = z.infer<typeof adrA19InsuranceSchema>;

/**
 * ADR_A19.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the ADR_A19.QUERY_RESPONSE group
 */
export const adrA19QueryResponseSchema = z
  .object({
    EVN: segments.evnSchema.optional(),
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
    PROCEDURE: z.array(adrA19ProcedureSchema).optional(),
    GT1: z.array(segments.gt1Schema).optional(),
    INSURANCE: z.array(adrA19InsuranceSchema).optional(),
    ACC: segments.accSchema.optional(),
    UB1: segments.ub1Schema.optional(),
    UB2: segments.ub2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ADR_A19.QUERY_RESPONSE",
    version: "2.6",
    description: "HL7 v2.6 ADR_A19.QUERY_RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ADR_A19.QUERY_RESPONSE schema
 */
export type ADR_A19_QUERY_RESPONSE = z.infer<typeof adrA19QueryResponseSchema>;

/**
 * ADR_A19 message schema
 * Defines the structure and validation rules for the ADR_A19 message
 */
export const adr_a19Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema,
    ERR: segments.errSchema.optional(),
    QAK: segments.qakSchema.optional(),
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    QUERY_RESPONSE: z.array(adrA19QueryResponseSchema),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ADR_A19",
    version: "2.6",
    description: "HL7 v2.6 ADR_A19 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ADR_A19 schema
 */
export type ADR_A19 = z.infer<typeof adr_a19Schema>;

/**
 * Default export for convenience
 */
export default adr_a19Schema;
