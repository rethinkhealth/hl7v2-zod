import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 RAS_O17 Message
 *
 * HL7 v2.6 RAS_O17 message definition
 * Contains segment definitions and constraints for the RAS_O17 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RAS_O17.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the RAS_O17.PATIENT_VISIT group
 */
export const rasO17PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.PATIENT_VISIT",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.PATIENT_VISIT schema
 */
export type RAS_O17_PATIENT_VISIT = z.infer<typeof rasO17PatientVisitSchema>;

/**
 * RAS_O17.TIMING group schema
 * Defines the structure and validation rules for the RAS_O17.TIMING group
 */
export const rasO17TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.TIMING",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.TIMING schema
 */
export type RAS_O17_TIMING = z.infer<typeof rasO17TimingSchema>;

/**
 * RAS_O17.COMPONENTS group schema
 * Defines the structure and validation rules for the RAS_O17.COMPONENTS group
 */
export const rasO17ComponentsSchema = z
  .object({
    RXC: segments.rxcSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.COMPONENTS",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.COMPONENTS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.COMPONENTS schema
 */
export type RAS_O17_COMPONENTS = z.infer<typeof rasO17ComponentsSchema>;

/**
 * RAS_O17.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RAS_O17.TIMING_ENCODED group
 */
export const rasO17TimingEncodedSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.TIMING_ENCODED",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.TIMING_ENCODED group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.TIMING_ENCODED schema
 */
export type RAS_O17_TIMING_ENCODED = z.infer<typeof rasO17TimingEncodedSchema>;

/**
 * RAS_O17.OBSERVATION group schema
 * Defines the structure and validation rules for the RAS_O17.OBSERVATION group
 */
export const rasO17ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.OBSERVATION",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.OBSERVATION schema
 */
export type RAS_O17_OBSERVATION = z.infer<typeof rasO17ObservationSchema>;

/**
 * RAS_O17.PATIENT group schema
 * Defines the structure and validation rules for the RAS_O17.PATIENT group
 */
export const rasO17PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    AL1: z.array(segments.al1Schema).optional(),
    PATIENT_VISIT: rasO17PatientVisitSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.PATIENT schema
 */
export type RAS_O17_PATIENT = z.infer<typeof rasO17PatientSchema>;

/**
 * RAS_O17.ORDER_DETAIL_SUPPLEMENT group schema
 * Defines the structure and validation rules for the RAS_O17.ORDER_DETAIL_SUPPLEMENT group
 */
export const rasO17OrderDetailSupplementSchema = z
  .object({
    NTE: z.array(segments.nteSchema),
    RXR: z.array(segments.rxrSchema),
    COMPONENTS: z.array(rasO17ComponentsSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.ORDER_DETAIL_SUPPLEMENT",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.ORDER_DETAIL_SUPPLEMENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.ORDER_DETAIL_SUPPLEMENT schema
 */
export type RAS_O17_ORDER_DETAIL_SUPPLEMENT = z.infer<typeof rasO17OrderDetailSupplementSchema>;

/**
 * RAS_O17.ENCODING group schema
 * Defines the structure and validation rules for the RAS_O17.ENCODING group
 */
export const rasO17EncodingSchema = z
  .object({
    RXE: segments.rxeSchema,
    TIMING_ENCODED: z.array(rasO17TimingEncodedSchema),
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.ENCODING",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.ENCODING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.ENCODING schema
 */
export type RAS_O17_ENCODING = z.infer<typeof rasO17EncodingSchema>;

/**
 * RAS_O17.ADMINISTRATION group schema
 * Defines the structure and validation rules for the RAS_O17.ADMINISTRATION group
 */
export const rasO17AdministrationSchema = z
  .object({
    RXA: z.array(segments.rxaSchema),
    RXR: segments.rxrSchema,
    OBSERVATION: z.array(rasO17ObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.ADMINISTRATION",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.ADMINISTRATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.ADMINISTRATION schema
 */
export type RAS_O17_ADMINISTRATION = z.infer<typeof rasO17AdministrationSchema>;

/**
 * RAS_O17.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RAS_O17.ORDER_DETAIL group
 */
export const rasO17OrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    ORDER_DETAIL_SUPPLEMENT: rasO17OrderDetailSupplementSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.ORDER_DETAIL",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.ORDER_DETAIL schema
 */
export type RAS_O17_ORDER_DETAIL = z.infer<typeof rasO17OrderDetailSchema>;

/**
 * RAS_O17.ORDER group schema
 * Defines the structure and validation rules for the RAS_O17.ORDER group
 */
export const rasO17OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(rasO17TimingSchema).optional(),
    ORDER_DETAIL: rasO17OrderDetailSchema.optional(),
    ENCODING: rasO17EncodingSchema.optional(),
    ADMINISTRATION: z.array(rasO17AdministrationSchema),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17.ORDER",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RAS_O17.ORDER schema
 */
export type RAS_O17_ORDER = z.infer<typeof rasO17OrderSchema>;

/**
 * RAS_O17 message schema
 * Defines the structure and validation rules for the RAS_O17 message
 */
export const ras_o17Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: rasO17PatientSchema.optional(),
    ORDER: z.array(rasO17OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "RAS_O17",
    version: "2.6",
    description: "HL7 v2.6 RAS_O17 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RAS_O17 schema
 */
export type RAS_O17 = z.infer<typeof ras_o17Schema>;

/**
 * Default export for convenience
 */
export default ras_o17Schema;
