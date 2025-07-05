import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 OUL_R24 Message
 *
 * HL7 v2.6 OUL_R24 message definition
 * Contains segment definitions and constraints for the OUL_R24 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OUL_R24.VISIT group schema
 * Defines the structure and validation rules for the OUL_R24.VISIT group
 */
export const oulR24VisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R24.VISIT",
    version: "2.6",
    description: "HL7 v2.6 OUL_R24.VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R24.VISIT schema
 */
export type OUL_R24_VISIT = z.infer<typeof oulR24VisitSchema>;

/**
 * OUL_R24.TIMING_QTY group schema
 * Defines the structure and validation rules for the OUL_R24.TIMING_QTY group
 */
export const oulR24TimingQtySchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R24.TIMING_QTY",
    version: "2.6",
    description: "HL7 v2.6 OUL_R24.TIMING_QTY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R24.TIMING_QTY schema
 */
export type OUL_R24_TIMING_QTY = z.infer<typeof oulR24TimingQtySchema>;

/**
 * OUL_R24.CONTAINER group schema
 * Defines the structure and validation rules for the OUL_R24.CONTAINER group
 */
export const oulR24ContainerSchema = z
  .object({
    SAC: segments.sacSchema,
    INV: segments.invSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R24.CONTAINER",
    version: "2.6",
    description: "HL7 v2.6 OUL_R24.CONTAINER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R24.CONTAINER schema
 */
export type OUL_R24_CONTAINER = z.infer<typeof oulR24ContainerSchema>;

/**
 * OUL_R24.RESULT group schema
 * Defines the structure and validation rules for the OUL_R24.RESULT group
 */
export const oulR24ResultSchema = z
  .object({
    OBX: segments.obxSchema,
    TCD: segments.tcdSchema.optional(),
    SID: z.array(segments.sidSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R24.RESULT",
    version: "2.6",
    description: "HL7 v2.6 OUL_R24.RESULT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R24.RESULT schema
 */
export type OUL_R24_RESULT = z.infer<typeof oulR24ResultSchema>;

/**
 * OUL_R24.PATIENT group schema
 * Defines the structure and validation rules for the OUL_R24.PATIENT group
 */
export const oulR24PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    OBX: z.array(segments.obxSchema).optional(),
    VISIT: oulR24VisitSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R24.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 OUL_R24.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R24.PATIENT schema
 */
export type OUL_R24_PATIENT = z.infer<typeof oulR24PatientSchema>;

/**
 * OUL_R24.SPECIMEN group schema
 * Defines the structure and validation rules for the OUL_R24.SPECIMEN group
 */
export const oulR24SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    OBX: z.array(segments.obxSchema).optional(),
    CONTAINER: z.array(oulR24ContainerSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R24.SPECIMEN",
    version: "2.6",
    description: "HL7 v2.6 OUL_R24.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R24.SPECIMEN schema
 */
export type OUL_R24_SPECIMEN = z.infer<typeof oulR24SpecimenSchema>;

/**
 * OUL_R24.ORDER group schema
 * Defines the structure and validation rules for the OUL_R24.ORDER group
 */
export const oulR24OrderSchema = z
  .object({
    OBR: segments.obrSchema,
    ORC: segments.orcSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    ROL: z.array(segments.rolSchema).optional(),
    TIMING_QTY: z.array(oulR24TimingQtySchema).optional(),
    SPECIMEN: z.array(oulR24SpecimenSchema).optional(),
    RESULT: z.array(oulR24ResultSchema).optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R24.ORDER",
    version: "2.6",
    description: "HL7 v2.6 OUL_R24.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R24.ORDER schema
 */
export type OUL_R24_ORDER = z.infer<typeof oulR24OrderSchema>;

/**
 * OUL_R24 message schema
 * Defines the structure and validation rules for the OUL_R24 message
 */
export const oul_r24Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: segments.nteSchema.optional(),
    PATIENT: oulR24PatientSchema.optional(),
    NK1: z.array(segments.nk1Schema).optional(),
    ORDER: z.array(oulR24OrderSchema),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R24",
    version: "2.6",
    description: "HL7 v2.6 OUL_R24 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OUL_R24 schema
 */
export type OUL_R24 = z.infer<typeof oul_r24Schema>;

/**
 * Default export for convenience
 */
export default oul_r24Schema;
