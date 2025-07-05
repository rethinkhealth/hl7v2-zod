import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 RDS_O13 Message
 *
 * HL7 v2.8 RDS_O13 message definition
 * Contains segment definitions and constraints for the RDS_O13 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RDS_O13.ADDITIONAL_DEMOGRAPHICS group schema
 * Defines the structure and validation rules for the RDS_O13.ADDITIONAL_DEMOGRAPHICS group
 */
export const rdsO13AdditionalDemographicsSchema = z
  .object({
    PD1: segments.pd1Schema,
    PRT: z.array(segments.prtSchema).optional(),
    ARV: z.array(segments.arvSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.ADDITIONAL_DEMOGRAPHICS",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.ADDITIONAL_DEMOGRAPHICS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.ADDITIONAL_DEMOGRAPHICS schema
 */
export type RDS_O13_ADDITIONAL_DEMOGRAPHICS = z.infer<typeof rdsO13AdditionalDemographicsSchema>;

/**
 * RDS_O13.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the RDS_O13.PATIENT_VISIT group
 */
export const rdsO13PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    ARV: z.array(segments.arvSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.PATIENT_VISIT",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.PATIENT_VISIT schema
 */
export type RDS_O13_PATIENT_VISIT = z.infer<typeof rdsO13PatientVisitSchema>;

/**
 * RDS_O13.TIMING group schema
 * Defines the structure and validation rules for the RDS_O13.TIMING group
 */
export const rdsO13TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.TIMING",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.TIMING schema
 */
export type RDS_O13_TIMING = z.infer<typeof rdsO13TimingSchema>;

/**
 * RDS_O13.COMPONENT group schema
 * Defines the structure and validation rules for the RDS_O13.COMPONENT group
 */
export const rdsO13ComponentSchema = z
  .object({
    RXC: segments.rxcSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.COMPONENT",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.COMPONENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.COMPONENT schema
 */
export type RDS_O13_COMPONENT = z.infer<typeof rdsO13ComponentSchema>;

/**
 * RDS_O13.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RDS_O13.TIMING_ENCODED group
 */
export const rdsO13TimingEncodedSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.TIMING_ENCODED",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.TIMING_ENCODED group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.TIMING_ENCODED schema
 */
export type RDS_O13_TIMING_ENCODED = z.infer<typeof rdsO13TimingEncodedSchema>;

/**
 * RDS_O13.OBSERVATION group schema
 * Defines the structure and validation rules for the RDS_O13.OBSERVATION group
 */
export const rdsO13ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.OBSERVATION schema
 */
export type RDS_O13_OBSERVATION = z.infer<typeof rdsO13ObservationSchema>;

/**
 * RDS_O13.PATIENT group schema
 * Defines the structure and validation rules for the RDS_O13.PATIENT group
 */
export const rdsO13PatientSchema = z
  .object({
    PID: segments.pidSchema,
    ADDITIONAL_DEMOGRAPHICS: rdsO13AdditionalDemographicsSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    AL1: z.array(segments.al1Schema).optional(),
    PATIENT_VISIT: rdsO13PatientVisitSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.PATIENT",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.PATIENT schema
 */
export type RDS_O13_PATIENT = z.infer<typeof rdsO13PatientSchema>;

/**
 * RDS_O13.ORDER_DETAIL_SUPPLEMENT group schema
 * Defines the structure and validation rules for the RDS_O13.ORDER_DETAIL_SUPPLEMENT group
 */
export const rdsO13OrderDetailSupplementSchema = z
  .object({
    NTE: z.array(segments.nteSchema),
    RXR: z.array(segments.rxrSchema),
    COMPONENT: z.array(rdsO13ComponentSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.ORDER_DETAIL_SUPPLEMENT",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.ORDER_DETAIL_SUPPLEMENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.ORDER_DETAIL_SUPPLEMENT schema
 */
export type RDS_O13_ORDER_DETAIL_SUPPLEMENT = z.infer<typeof rdsO13OrderDetailSupplementSchema>;

/**
 * RDS_O13.ENCODING group schema
 * Defines the structure and validation rules for the RDS_O13.ENCODING group
 */
export const rdsO13EncodingSchema = z
  .object({
    RXE: segments.rxeSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    TIMING_ENCODED: z.array(rdsO13TimingEncodedSchema),
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.ENCODING",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.ENCODING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.ENCODING schema
 */
export type RDS_O13_ENCODING = z.infer<typeof rdsO13EncodingSchema>;

/**
 * RDS_O13.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RDS_O13.ORDER_DETAIL group
 */
export const rdsO13OrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    PRT: z.array(segments.prtSchema).optional(),
    ORDER_DETAIL_SUPPLEMENT: rdsO13OrderDetailSupplementSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.ORDER_DETAIL",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.ORDER_DETAIL schema
 */
export type RDS_O13_ORDER_DETAIL = z.infer<typeof rdsO13OrderDetailSchema>;

/**
 * RDS_O13.ORDER group schema
 * Defines the structure and validation rules for the RDS_O13.ORDER group
 */
export const rdsO13OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    PRT: z.array(segments.prtSchema).optional(),
    TIMING: z.array(rdsO13TimingSchema).optional(),
    ORDER_DETAIL: rdsO13OrderDetailSchema.optional(),
    ENCODING: rdsO13EncodingSchema.optional(),
    RXD: segments.rxdSchema,
    PRT_1: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    CDO: z.array(segments.cdoSchema).optional(),
    OBSERVATION: z.array(rdsO13ObservationSchema).optional(),
    FT1: z.array(segments.ft1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13.ORDER",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDS_O13.ORDER schema
 */
export type RDS_O13_ORDER = z.infer<typeof rdsO13OrderSchema>;

/**
 * RDS_O13 message schema
 * Defines the structure and validation rules for the RDS_O13 message
 */
export const rds_o13Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: rdsO13PatientSchema.optional(),
    ORDER: z.array(rdsO13OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "RDS_O13",
    version: "2.8",
    description: "HL7 v2.8 RDS_O13 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RDS_O13 schema
 */
export type RDS_O13 = z.infer<typeof rds_o13Schema>;

/**
 * Default export for convenience
 */
export default rds_o13Schema;
