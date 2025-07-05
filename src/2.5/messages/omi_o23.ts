import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 OMI_O23 Message
 *
 * HL7 v2.5 OMI_O23 message definition
 * Contains segment definitions and constraints for the OMI_O23 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMI_O23.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OMI_O23.PATIENT_VISIT group
 */
export const omiO23PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMI_O23.PATIENT_VISIT",
    version: "2.5",
    description: "HL7 v2.5 OMI_O23.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMI_O23.PATIENT_VISIT schema
 */
export type OMI_O23_PATIENT_VISIT = z.infer<typeof omiO23PatientVisitSchema>;

/**
 * OMI_O23.INSURANCE group schema
 * Defines the structure and validation rules for the OMI_O23.INSURANCE group
 */
export const omiO23InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OMI_O23.INSURANCE",
    version: "2.5",
    description: "HL7 v2.5 OMI_O23.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMI_O23.INSURANCE schema
 */
export type OMI_O23_INSURANCE = z.infer<typeof omiO23InsuranceSchema>;

/**
 * OMI_O23.TIMING group schema
 * Defines the structure and validation rules for the OMI_O23.TIMING group
 */
export const omiO23TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMI_O23.TIMING",
    version: "2.5",
    description: "HL7 v2.5 OMI_O23.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMI_O23.TIMING schema
 */
export type OMI_O23_TIMING = z.infer<typeof omiO23TimingSchema>;

/**
 * OMI_O23.OBSERVATION group schema
 * Defines the structure and validation rules for the OMI_O23.OBSERVATION group
 */
export const omiO23ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMI_O23.OBSERVATION",
    version: "2.5",
    description: "HL7 v2.5 OMI_O23.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMI_O23.OBSERVATION schema
 */
export type OMI_O23_OBSERVATION = z.infer<typeof omiO23ObservationSchema>;

/**
 * OMI_O23.PATIENT group schema
 * Defines the structure and validation rules for the OMI_O23.PATIENT group
 */
export const omiO23PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT_VISIT: omiO23PatientVisitSchema.optional(),
    INSURANCE: z.array(omiO23InsuranceSchema).optional(),
    GT1: segments.gt1Schema.optional(),
    AL1: z.array(segments.al1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OMI_O23.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 OMI_O23.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMI_O23.PATIENT schema
 */
export type OMI_O23_PATIENT = z.infer<typeof omiO23PatientSchema>;

/**
 * OMI_O23.ORDER group schema
 * Defines the structure and validation rules for the OMI_O23.ORDER group
 */
export const omiO23OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(omiO23TimingSchema).optional(),
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional(),
    CTD: segments.ctdSchema.optional(),
    DG1: z.array(segments.dg1Schema).optional(),
    OBSERVATION: z.array(omiO23ObservationSchema).optional(),
    IPC: z.array(segments.ipcSchema)
  })
  .register(hl7v2Metadata, {
    title: "OMI_O23.ORDER",
    version: "2.5",
    description: "HL7 v2.5 OMI_O23.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OMI_O23.ORDER schema
 */
export type OMI_O23_ORDER = z.infer<typeof omiO23OrderSchema>;

/**
 * OMI_O23 message schema
 * Defines the structure and validation rules for the OMI_O23 message
 */
export const omi_o23Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: omiO23PatientSchema.optional(),
    ORDER: z.array(omiO23OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "OMI_O23",
    version: "2.5",
    description: "HL7 v2.5 OMI_O23 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OMI_O23 schema
 */
export type OMI_O23 = z.infer<typeof omi_o23Schema>;

/**
 * Default export for convenience
 */
export default omi_o23Schema;
