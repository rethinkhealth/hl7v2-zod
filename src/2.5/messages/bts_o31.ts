import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 BTS_O31 Message
 *
 * HL7 v2.5 BTS_O31 message definition
 * Contains segment definitions and constraints for the BTS_O31 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BTS_O31.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the BTS_O31.PATIENT_VISIT group
 */
export const btsO31PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "BTS_O31.PATIENT_VISIT",
    version: "2.5",
    description: "HL7 v2.5 BTS_O31.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BTS_O31.PATIENT_VISIT schema
 */
export type BTS_O31_PATIENT_VISIT = z.infer<typeof btsO31PatientVisitSchema>;

/**
 * BTS_O31.TIMING group schema
 * Defines the structure and validation rules for the BTS_O31.TIMING group
 */
export const btsO31TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BTS_O31.TIMING",
    version: "2.5",
    description: "HL7 v2.5 BTS_O31.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BTS_O31.TIMING schema
 */
export type BTS_O31_TIMING = z.infer<typeof btsO31TimingSchema>;

/**
 * BTS_O31.PRODUCT_STATUS group schema
 * Defines the structure and validation rules for the BTS_O31.PRODUCT_STATUS group
 */
export const btsO31ProductStatusSchema = z
  .object({
    BTX: segments.btxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BTS_O31.PRODUCT_STATUS",
    version: "2.5",
    description: "HL7 v2.5 BTS_O31.PRODUCT_STATUS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BTS_O31.PRODUCT_STATUS schema
 */
export type BTS_O31_PRODUCT_STATUS = z.infer<typeof btsO31ProductStatusSchema>;

/**
 * BTS_O31.PATIENT group schema
 * Defines the structure and validation rules for the BTS_O31.PATIENT group
 */
export const btsO31PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT_VISIT: btsO31PatientVisitSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "BTS_O31.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 BTS_O31.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BTS_O31.PATIENT schema
 */
export type BTS_O31_PATIENT = z.infer<typeof btsO31PatientSchema>;

/**
 * BTS_O31.ORDER group schema
 * Defines the structure and validation rules for the BTS_O31.ORDER group
 */
export const btsO31OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(btsO31TimingSchema).optional(),
    BPO: segments.bpoSchema,
    NTE: z.array(segments.nteSchema).optional(),
    PRODUCT_STATUS: z.array(btsO31ProductStatusSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BTS_O31.ORDER",
    version: "2.5",
    description: "HL7 v2.5 BTS_O31.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BTS_O31.ORDER schema
 */
export type BTS_O31_ORDER = z.infer<typeof btsO31OrderSchema>;

/**
 * BTS_O31 message schema
 * Defines the structure and validation rules for the BTS_O31 message
 */
export const bts_o31Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: btsO31PatientSchema.optional(),
    ORDER: z.array(btsO31OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "BTS_O31",
    version: "2.5",
    description: "HL7 v2.5 BTS_O31 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the BTS_O31 schema
 */
export type BTS_O31 = z.infer<typeof bts_o31Schema>;

/**
 * Default export for convenience
 */
export default bts_o31Schema;
