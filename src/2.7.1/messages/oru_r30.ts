import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 ORU_R30 Message
 *
 * HL7 v2.7 ORU_R30 message definition
 * Contains segment definitions and constraints for the ORU_R30 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORU_R30.PATIENT_OBSERVATION group schema
 * Defines the structure and validation rules for the ORU_R30.PATIENT_OBSERVATION group
 */
export const oruR30PatientObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORU_R30.PATIENT_OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 ORU_R30.PATIENT_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORU_R30.PATIENT_OBSERVATION schema
 */
export type ORU_R30_PATIENT_OBSERVATION = z.infer<typeof oruR30PatientObservationSchema>;

/**
 * ORU_R30.VISIT group schema
 * Defines the structure and validation rules for the ORU_R30.VISIT group
 */
export const oruR30VisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORU_R30.VISIT",
    version: "2.7",
    description: "HL7 v2.7 ORU_R30.VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORU_R30.VISIT schema
 */
export type ORU_R30_VISIT = z.infer<typeof oruR30VisitSchema>;

/**
 * ORU_R30.TIMING_QTY group schema
 * Defines the structure and validation rules for the ORU_R30.TIMING_QTY group
 */
export const oruR30TimingQtySchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORU_R30.TIMING_QTY",
    version: "2.7",
    description: "HL7 v2.7 ORU_R30.TIMING_QTY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORU_R30.TIMING_QTY schema
 */
export type ORU_R30_TIMING_QTY = z.infer<typeof oruR30TimingQtySchema>;

/**
 * ORU_R30.OBSERVATION group schema
 * Defines the structure and validation rules for the ORU_R30.OBSERVATION group
 */
export const oruR30ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    PRT: z.array(segments.prtSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORU_R30.OBSERVATION",
    version: "2.7",
    description: "HL7 v2.7 ORU_R30.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORU_R30.OBSERVATION schema
 */
export type ORU_R30_OBSERVATION = z.infer<typeof oruR30ObservationSchema>;

/**
 * ORU_R30 message schema
 * Defines the structure and validation rules for the ORU_R30 message
 */
export const oru_r30Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PRT: z.array(segments.prtSchema).optional(),
    PATIENT_OBSERVATION: z.array(oruR30PatientObservationSchema).optional(),
    VISIT: oruR30VisitSchema.optional(),
    ORC: segments.orcSchema,
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional(),
    PRT_1: z.array(segments.prtSchema).optional(),
    TIMING_QTY: z.array(oruR30TimingQtySchema).optional(),
    OBSERVATION: z.array(oruR30ObservationSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORU_R30",
    version: "2.7",
    description: "HL7 v2.7 ORU_R30 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORU_R30 schema
 */
export type ORU_R30 = z.infer<typeof oru_r30Schema>;

/**
 * Default export for convenience
 */
export default oru_r30Schema;
