import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 BPS_O29 Message
 *
 * HL7 v2.7 BPS_O29 message definition
 * Contains segment definitions and constraints for the BPS_O29 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BPS_O29.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the BPS_O29.PATIENT_VISIT group
 */
export const bpsO29PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "BPS_O29.PATIENT_VISIT",
    version: "2.7",
    description: "HL7 v2.7 BPS_O29.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BPS_O29.PATIENT_VISIT schema
 */
export type BPS_O29_PATIENT_VISIT = z.infer<typeof bpsO29PatientVisitSchema>;

/**
 * BPS_O29.TIMING group schema
 * Defines the structure and validation rules for the BPS_O29.TIMING group
 */
export const bpsO29TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BPS_O29.TIMING",
    version: "2.7",
    description: "HL7 v2.7 BPS_O29.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BPS_O29.TIMING schema
 */
export type BPS_O29_TIMING = z.infer<typeof bpsO29TimingSchema>;

/**
 * BPS_O29.PRODUCT group schema
 * Defines the structure and validation rules for the BPS_O29.PRODUCT group
 */
export const bpsO29ProductSchema = z
  .object({
    BPX: segments.bpxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BPS_O29.PRODUCT",
    version: "2.7",
    description: "HL7 v2.7 BPS_O29.PRODUCT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BPS_O29.PRODUCT schema
 */
export type BPS_O29_PRODUCT = z.infer<typeof bpsO29ProductSchema>;

/**
 * BPS_O29.PATIENT group schema
 * Defines the structure and validation rules for the BPS_O29.PATIENT group
 */
export const bpsO29PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT_VISIT: bpsO29PatientVisitSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "BPS_O29.PATIENT",
    version: "2.7",
    description: "HL7 v2.7 BPS_O29.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BPS_O29.PATIENT schema
 */
export type BPS_O29_PATIENT = z.infer<typeof bpsO29PatientSchema>;

/**
 * BPS_O29.ORDER group schema
 * Defines the structure and validation rules for the BPS_O29.ORDER group
 */
export const bpsO29OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(bpsO29TimingSchema).optional(),
    BPO: segments.bpoSchema,
    NTE: z.array(segments.nteSchema).optional(),
    PRODUCT: z.array(bpsO29ProductSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "BPS_O29.ORDER",
    version: "2.7",
    description: "HL7 v2.7 BPS_O29.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the BPS_O29.ORDER schema
 */
export type BPS_O29_ORDER = z.infer<typeof bpsO29OrderSchema>;

/**
 * BPS_O29 message schema
 * Defines the structure and validation rules for the BPS_O29 message
 */
export const bps_o29Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: bpsO29PatientSchema.optional(),
    ORDER: z.array(bpsO29OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "BPS_O29",
    version: "2.7",
    description: "HL7 v2.7 BPS_O29 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the BPS_O29 schema
 */
export type BPS_O29 = z.infer<typeof bps_o29Schema>;

/**
 * Default export for convenience
 */
export default bps_o29Schema;
