import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 RDE_O11 Message
 *
 * HL7 v2.8 RDE_O11 message definition
 * Contains segment definitions and constraints for the RDE_O11 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RDE_O11.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the RDE_O11.PATIENT_VISIT group
 */
export const rdeO11PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    ARV: z.array(segments.arvSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.PATIENT_VISIT",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.PATIENT_VISIT schema
 */
export type RDE_O11_PATIENT_VISIT = z.infer<typeof rdeO11PatientVisitSchema>;

/**
 * RDE_O11.INSURANCE group schema
 * Defines the structure and validation rules for the RDE_O11.INSURANCE group
 */
export const rdeO11InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.INSURANCE",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.INSURANCE schema
 */
export type RDE_O11_INSURANCE = z.infer<typeof rdeO11InsuranceSchema>;

/**
 * RDE_O11.TIMING group schema
 * Defines the structure and validation rules for the RDE_O11.TIMING group
 */
export const rdeO11TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.TIMING",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.TIMING schema
 */
export type RDE_O11_TIMING = z.infer<typeof rdeO11TimingSchema>;

/**
 * RDE_O11.COMPONENT group schema
 * Defines the structure and validation rules for the RDE_O11.COMPONENT group
 */
export const rdeO11ComponentSchema = z
  .object({
    RXC: segments.rxcSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.COMPONENT",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.COMPONENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.COMPONENT schema
 */
export type RDE_O11_COMPONENT = z.infer<typeof rdeO11ComponentSchema>;

/**
 * RDE_O11.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RDE_O11.TIMING_ENCODED group
 */
export const rdeO11TimingEncodedSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.TIMING_ENCODED",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.TIMING_ENCODED group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.TIMING_ENCODED schema
 */
export type RDE_O11_TIMING_ENCODED = z.infer<typeof rdeO11TimingEncodedSchema>;

/**
 * RDE_O11.OBSERVATION group schema
 * Defines the structure and validation rules for the RDE_O11.OBSERVATION group
 */
export const rdeO11ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.OBSERVATION",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.OBSERVATION schema
 */
export type RDE_O11_OBSERVATION = z.infer<typeof rdeO11ObservationSchema>;

/**
 * RDE_O11.PATIENT group schema
 * Defines the structure and validation rules for the RDE_O11.PATIENT group
 */
export const rdeO11PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    ARV: z.array(segments.arvSchema).optional(),
    PATIENT_VISIT: rdeO11PatientVisitSchema.optional(),
    INSURANCE: z.array(rdeO11InsuranceSchema).optional(),
    GT1: segments.gt1Schema.optional(),
    AL1: z.array(segments.al1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.PATIENT",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.PATIENT schema
 */
export type RDE_O11_PATIENT = z.infer<typeof rdeO11PatientSchema>;

/**
 * RDE_O11.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RDE_O11.ORDER_DETAIL group
 */
export const rdeO11OrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RXR: z.array(segments.rxrSchema),
    COMPONENT: z.array(rdeO11ComponentSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.ORDER_DETAIL",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.ORDER_DETAIL schema
 */
export type RDE_O11_ORDER_DETAIL = z.infer<typeof rdeO11OrderDetailSchema>;

/**
 * RDE_O11.PHARMACY_TREATMENT_INFUSION_ORDER group schema
 * Defines the structure and validation rules for the RDE_O11.PHARMACY_TREATMENT_INFUSION_ORDER group
 */
export const rdeO11PharmacyTreatmentInfusionOrderSchema = z
  .object({
    RXV: segments.rxvSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    TIMING_ENCODED: z.array(rdeO11TimingEncodedSchema)
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.PHARMACY_TREATMENT_INFUSION_ORDER",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.PHARMACY_TREATMENT_INFUSION_ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.PHARMACY_TREATMENT_INFUSION_ORDER schema
 */
export type RDE_O11_PHARMACY_TREATMENT_INFUSION_ORDER = z.infer<
  typeof rdeO11PharmacyTreatmentInfusionOrderSchema
>;

/**
 * RDE_O11.ORDER group schema
 * Defines the structure and validation rules for the RDE_O11.ORDER group
 */
export const rdeO11OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    PRT: z.array(segments.prtSchema).optional(),
    TIMING: z.array(rdeO11TimingSchema).optional(),
    ORDER_DETAIL: rdeO11OrderDetailSchema.optional(),
    RXE: segments.rxeSchema,
    PRT_1: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    TIMING_ENCODED: z.array(rdeO11TimingEncodedSchema),
    PHARMACY_TREATMENT_INFUSION_ORDER: z
      .array(rdeO11PharmacyTreatmentInfusionOrderSchema)
      .optional(),
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    CDO: z.array(segments.cdoSchema).optional(),
    OBSERVATION: z.array(rdeO11ObservationSchema).optional(),
    FT1: z.array(segments.ft1Schema).optional(),
    BLG: segments.blgSchema.optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11.ORDER",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RDE_O11.ORDER schema
 */
export type RDE_O11_ORDER = z.infer<typeof rdeO11OrderSchema>;

/**
 * RDE_O11 message schema
 * Defines the structure and validation rules for the RDE_O11 message
 */
export const rde_o11Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: rdeO11PatientSchema.optional(),
    ORDER: z.array(rdeO11OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "RDE_O11",
    version: "2.8",
    description: "HL7 v2.8 RDE_O11 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RDE_O11 schema
 */
export type RDE_O11 = z.infer<typeof rde_o11Schema>;

/**
 * Default export for convenience
 */
export default rde_o11Schema;
