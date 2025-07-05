import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 RSP_Z88 Message
 *
 * HL7 v2.6 RSP_Z88 message definition
 * Contains segment definitions and constraints for the RSP_Z88 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_Z88.VISIT group schema
 * Defines the structure and validation rules for the RSP_Z88.VISIT group
 */
export const rspZ88VisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.VISIT",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.VISIT schema
 */
export type RSP_Z88_VISIT = z.infer<typeof rspZ88VisitSchema>;

/**
 * RSP_Z88.TIMING group schema
 * Defines the structure and validation rules for the RSP_Z88.TIMING group
 */
export const rspZ88TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.TIMING",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.TIMING schema
 */
export type RSP_Z88_TIMING = z.infer<typeof rspZ88TimingSchema>;

/**
 * RSP_Z88.COMPONENT group schema
 * Defines the structure and validation rules for the RSP_Z88.COMPONENT group
 */
export const rspZ88ComponentSchema = z
  .object({
    RXC: z.array(segments.rxcSchema),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.COMPONENT",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.COMPONENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.COMPONENT schema
 */
export type RSP_Z88_COMPONENT = z.infer<typeof rspZ88ComponentSchema>;

/**
 * RSP_Z88.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RSP_Z88.TIMING_ENCODED group
 */
export const rspZ88TimingEncodedSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.TIMING_ENCODED",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.TIMING_ENCODED group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.TIMING_ENCODED schema
 */
export type RSP_Z88_TIMING_ENCODED = z.infer<typeof rspZ88TimingEncodedSchema>;

/**
 * RSP_Z88.OBSERVATION group schema
 * Defines the structure and validation rules for the RSP_Z88.OBSERVATION group
 */
export const rspZ88ObservationSchema = z
  .object({
    OBX: segments.obxSchema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.OBSERVATION",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.OBSERVATION schema
 */
export type RSP_Z88_OBSERVATION = z.infer<typeof rspZ88ObservationSchema>;

/**
 * RSP_Z88.ALLERGY group schema
 * Defines the structure and validation rules for the RSP_Z88.ALLERGY group
 */
export const rspZ88AllergySchema = z
  .object({
    AL1: z.array(segments.al1Schema),
    VISIT: rspZ88VisitSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.ALLERGY",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.ALLERGY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.ALLERGY schema
 */
export type RSP_Z88_ALLERGY = z.infer<typeof rspZ88AllergySchema>;

/**
 * RSP_Z88.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RSP_Z88.ORDER_DETAIL group
 */
export const rspZ88OrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    NTE: z.array(segments.nteSchema).optional(),
    RXR: z.array(segments.rxrSchema),
    COMPONENT: rspZ88ComponentSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.ORDER_DETAIL",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.ORDER_DETAIL schema
 */
export type RSP_Z88_ORDER_DETAIL = z.infer<typeof rspZ88OrderDetailSchema>;

/**
 * RSP_Z88.ORDER_ENCODED group schema
 * Defines the structure and validation rules for the RSP_Z88.ORDER_ENCODED group
 */
export const rspZ88OrderEncodedSchema = z
  .object({
    RXE: segments.rxeSchema,
    TIMING_ENCODED: z.array(rspZ88TimingEncodedSchema).optional(),
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.ORDER_ENCODED",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.ORDER_ENCODED group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.ORDER_ENCODED schema
 */
export type RSP_Z88_ORDER_ENCODED = z.infer<typeof rspZ88OrderEncodedSchema>;

/**
 * RSP_Z88.PATIENT group schema
 * Defines the structure and validation rules for the RSP_Z88.PATIENT group
 */
export const rspZ88PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    ALLERGY: rspZ88AllergySchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.PATIENT schema
 */
export type RSP_Z88_PATIENT = z.infer<typeof rspZ88PatientSchema>;

/**
 * RSP_Z88.COMMON_ORDER group schema
 * Defines the structure and validation rules for the RSP_Z88.COMMON_ORDER group
 */
export const rspZ88CommonOrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(rspZ88TimingSchema).optional(),
    ORDER_DETAIL: rspZ88OrderDetailSchema.optional(),
    ORDER_ENCODED: rspZ88OrderEncodedSchema.optional(),
    RXD: segments.rxdSchema,
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    OBSERVATION: z.array(rspZ88ObservationSchema)
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.COMMON_ORDER",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.COMMON_ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.COMMON_ORDER schema
 */
export type RSP_Z88_COMMON_ORDER = z.infer<typeof rspZ88CommonOrderSchema>;

/**
 * RSP_Z88.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the RSP_Z88.QUERY_RESPONSE group
 */
export const rspZ88QueryResponseSchema = z
  .object({
    PATIENT: rspZ88PatientSchema.optional(),
    COMMON_ORDER: z.array(rspZ88CommonOrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88.QUERY_RESPONSE",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88.QUERY_RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Z88.QUERY_RESPONSE schema
 */
export type RSP_Z88_QUERY_RESPONSE = z.infer<typeof rspZ88QueryResponseSchema>;

/**
 * RSP_Z88 message schema
 * Defines the structure and validation rules for the RSP_Z88 message
 */
export const rsp_z88Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema,
    ERR: segments.errSchema.optional(),
    QAK: segments.qakSchema,
    QPD: segments.qpdSchema,
    RCP: segments.rcpSchema,
    QUERY_RESPONSE: z.array(rspZ88QueryResponseSchema),
    DSC: segments.dscSchema
  })
  .register(hl7v2Metadata, {
    title: "RSP_Z88",
    version: "2.6",
    description: "HL7 v2.6 RSP_Z88 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RSP_Z88 schema
 */
export type RSP_Z88 = z.infer<typeof rsp_z88Schema>;

/**
 * Default export for convenience
 */
export default rsp_z88Schema;
