import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 RSP_Z86 Message
 *
 * HL7 v2.8 RSP_Z86 message definition
 * Contains segment definitions and constraints for the RSP_Z86 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_Z86.PATIENT group schema
 * Defines the structure and validation rules for the RSP_Z86.PATIENT group
 */
export const rspZ86PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    AL1: z.array(segments.al1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.PATIENT",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.PATIENT schema
 */
export type RSP_Z86_PATIENT = z.infer<typeof rspZ86PatientSchema>;

/**
 * RSP_Z86.TIMING group schema
 * Defines the structure and validation rules for the RSP_Z86.TIMING group
 */
export const rspZ86TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.TIMING",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.TIMING schema
 */
export type RSP_Z86_TIMING = z.infer<typeof rspZ86TimingSchema>;

/**
 * RSP_Z86.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RSP_Z86.ORDER_DETAIL group
 */
export const rspZ86OrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.ORDER_DETAIL",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.ORDER_DETAIL schema
 */
export type RSP_Z86_ORDER_DETAIL = z.infer<typeof rspZ86OrderDetailSchema>;

/**
 * RSP_Z86.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RSP_Z86.TIMING_ENCODED group
 */
export const rspZ86TimingEncodedSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.TIMING_ENCODED",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.TIMING_ENCODED group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.TIMING_ENCODED schema
 */
export type RSP_Z86_TIMING_ENCODED = z.infer<typeof rspZ86TimingEncodedSchema>;

/**
 * RSP_Z86.DISPENSE group schema
 * Defines the structure and validation rules for the RSP_Z86.DISPENSE group
 */
export const rspZ86DispenseSchema = z
  .object({
    RXD: segments.rxdSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.DISPENSE",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.DISPENSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.DISPENSE schema
 */
export type RSP_Z86_DISPENSE = z.infer<typeof rspZ86DispenseSchema>;

/**
 * RSP_Z86.GIVE group schema
 * Defines the structure and validation rules for the RSP_Z86.GIVE group
 */
export const rspZ86GiveSchema = z
  .object({
    RXG: segments.rxgSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.GIVE",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.GIVE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.GIVE schema
 */
export type RSP_Z86_GIVE = z.infer<typeof rspZ86GiveSchema>;

/**
 * RSP_Z86.ADMINISTRATION group schema
 * Defines the structure and validation rules for the RSP_Z86.ADMINISTRATION group
 */
export const rspZ86AdministrationSchema = z
  .object({
    RXA: segments.rxaSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.ADMINISTRATION",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.ADMINISTRATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.ADMINISTRATION schema
 */
export type RSP_Z86_ADMINISTRATION = z.infer<typeof rspZ86AdministrationSchema>;

/**
 * RSP_Z86.OBSERVATION group schema
 * Defines the structure and validation rules for the RSP_Z86.OBSERVATION group
 */
export const rspZ86ObservationSchema = z
  .object({
    OBX: segments.obxSchema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.OBSERVATION schema
 */
export type RSP_Z86_OBSERVATION = z.infer<typeof rspZ86ObservationSchema>;

/**
 * RSP_Z86.ENCODED_ORDER group schema
 * Defines the structure and validation rules for the RSP_Z86.ENCODED_ORDER group
 */
export const rspZ86EncodedOrderSchema = z
  .object({
    RXE: segments.rxeSchema,
    TIMING_ENCODED: z.array(rspZ86TimingEncodedSchema).optional(),
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.ENCODED_ORDER",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.ENCODED_ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.ENCODED_ORDER schema
 */
export type RSP_Z86_ENCODED_ORDER = z.infer<typeof rspZ86EncodedOrderSchema>;

/**
 * RSP_Z86.COMMON_ORDER group schema
 * Defines the structure and validation rules for the RSP_Z86.COMMON_ORDER group
 */
export const rspZ86CommonOrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(rspZ86TimingSchema).optional(),
    ORDER_DETAIL: rspZ86OrderDetailSchema.optional(),
    ENCODED_ORDER: rspZ86EncodedOrderSchema.optional(),
    DISPENSE: rspZ86DispenseSchema.optional(),
    GIVE: rspZ86GiveSchema.optional(),
    ADMINISTRATION: rspZ86AdministrationSchema.optional(),
    OBSERVATION: z.array(rspZ86ObservationSchema)
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.COMMON_ORDER",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.COMMON_ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.COMMON_ORDER schema
 */
export type RSP_Z86_COMMON_ORDER = z.infer<typeof rspZ86CommonOrderSchema>;

/**
 * RSP_Z86.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the RSP_Z86.QUERY_RESPONSE group
 */
export const rspZ86QueryResponseSchema = z
  .object({
    PATIENT: rspZ86PatientSchema.optional(),
    COMMON_ORDER: z.array(rspZ86CommonOrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86.QUERY_RESPONSE",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86.QUERY_RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z86.QUERY_RESPONSE schema
 */
export type RSP_Z86_QUERY_RESPONSE = z.infer<typeof rspZ86QueryResponseSchema>;

/**
 * RSP_Z86 message schema
 * Defines the structure and validation rules for the RSP_Z86 message
 */
export const rsp_z86Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema,
    ERR: segments.errSchema.optional(),
    QAK: segments.qakSchema,
    QPD: segments.qpdSchema,
    QUERY_RESPONSE: z.array(rspZ86QueryResponseSchema),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z86",
    version: "2.8",
    description: "HL7 v2.8 RSP_Z86 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RSP_Z86 schema
 */
export type RSP_Z86 = z.infer<typeof rsp_z86Schema>;

/**
 * Default export for convenience
 */
export default rsp_z86Schema;
