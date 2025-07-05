import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 OUL_R21 Message
 *
 * HL7 v2.6 OUL_R21 message definition
 * Contains segment definitions and constraints for the OUL_R21 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OUL_R21.VISIT group schema
 * Defines the structure and validation rules for the OUL_R21.VISIT group
 */
export const oulR21VisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R21.VISIT",
    version: "2.6",
    description: "HL7 v2.6 OUL_R21.VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R21.VISIT schema
 */
export type OUL_R21_VISIT = z.infer<typeof oulR21VisitSchema>;

/**
 * OUL_R21.CONTAINER group schema
 * Defines the structure and validation rules for the OUL_R21.CONTAINER group
 */
export const oulR21ContainerSchema = z
  .object({
    SAC: segments.sacSchema,
    SID: segments.sidSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R21.CONTAINER",
    version: "2.6",
    description: "HL7 v2.6 OUL_R21.CONTAINER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R21.CONTAINER schema
 */
export type OUL_R21_CONTAINER = z.infer<typeof oulR21ContainerSchema>;

/**
 * OUL_R21.TIMING_QTY group schema
 * Defines the structure and validation rules for the OUL_R21.TIMING_QTY group
 */
export const oulR21TimingQtySchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R21.TIMING_QTY",
    version: "2.6",
    description: "HL7 v2.6 OUL_R21.TIMING_QTY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R21.TIMING_QTY schema
 */
export type OUL_R21_TIMING_QTY = z.infer<typeof oulR21TimingQtySchema>;

/**
 * OUL_R21.OBSERVATION group schema
 * Defines the structure and validation rules for the OUL_R21.OBSERVATION group
 */
export const oulR21ObservationSchema = z
  .object({
    OBX: segments.obxSchema.optional(),
    TCD: segments.tcdSchema.optional(),
    SID: z.array(segments.sidSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R21.OBSERVATION",
    version: "2.6",
    description: "HL7 v2.6 OUL_R21.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R21.OBSERVATION schema
 */
export type OUL_R21_OBSERVATION = z.infer<typeof oulR21ObservationSchema>;

/**
 * OUL_R21.PATIENT group schema
 * Defines the structure and validation rules for the OUL_R21.PATIENT group
 */
export const oulR21PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    VISIT: oulR21VisitSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R21.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 OUL_R21.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R21.PATIENT schema
 */
export type OUL_R21_PATIENT = z.infer<typeof oulR21PatientSchema>;

/**
 * OUL_R21.ORDER_OBSERVATION group schema
 * Defines the structure and validation rules for the OUL_R21.ORDER_OBSERVATION group
 */
export const oulR21OrderObservationSchema = z
  .object({
    CONTAINER: oulR21ContainerSchema.optional(),
    ORC: segments.orcSchema.optional(),
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional(),
    TIMING_QTY: z.array(oulR21TimingQtySchema).optional(),
    OBSERVATION: z.array(oulR21ObservationSchema),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R21.ORDER_OBSERVATION",
    version: "2.6",
    description: "HL7 v2.6 OUL_R21.ORDER_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R21.ORDER_OBSERVATION schema
 */
export type OUL_R21_ORDER_OBSERVATION = z.infer<typeof oulR21OrderObservationSchema>;

/**
 * OUL_R21 message schema
 * Defines the structure and validation rules for the OUL_R21 message
 */
export const oul_r21Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    NTE: segments.nteSchema.optional(),
    PATIENT: oulR21PatientSchema.optional(),
    ORDER_OBSERVATION: z.array(oulR21OrderObservationSchema),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R21",
    version: "2.6",
    description: "HL7 v2.6 OUL_R21 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OUL_R21 schema
 */
export type OUL_R21 = z.infer<typeof oul_r21Schema>;

/**
 * Default export for convenience
 */
export default oul_r21Schema;
