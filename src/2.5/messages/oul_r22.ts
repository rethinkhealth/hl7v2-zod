import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 OUL_R22 Message
 *
 * HL7 v2.5 OUL_R22 message definition
 * Contains segment definitions and constraints for the OUL_R22 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OUL_R22.PATIENT group schema
 * Defines the structure and validation rules for the OUL_R22.PATIENT group
 */
export const oulR22PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R22.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 OUL_R22.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R22.PATIENT schema
 */
export type OUL_R22_PATIENT = z.infer<typeof oulR22PatientSchema>;

/**
 * OUL_R22.VISIT group schema
 * Defines the structure and validation rules for the OUL_R22.VISIT group
 */
export const oulR22VisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R22.VISIT",
    version: "2.5",
    description: "HL7 v2.5 OUL_R22.VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R22.VISIT schema
 */
export type OUL_R22_VISIT = z.infer<typeof oulR22VisitSchema>;

/**
 * OUL_R22.CONTAINER group schema
 * Defines the structure and validation rules for the OUL_R22.CONTAINER group
 */
export const oulR22ContainerSchema = z
  .object({
    SAC: segments.sacSchema,
    INV: segments.invSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R22.CONTAINER",
    version: "2.5",
    description: "HL7 v2.5 OUL_R22.CONTAINER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R22.CONTAINER schema
 */
export type OUL_R22_CONTAINER = z.infer<typeof oulR22ContainerSchema>;

/**
 * OUL_R22.TIMING_QTY group schema
 * Defines the structure and validation rules for the OUL_R22.TIMING_QTY group
 */
export const oulR22TimingQtySchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R22.TIMING_QTY",
    version: "2.5",
    description: "HL7 v2.5 OUL_R22.TIMING_QTY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R22.TIMING_QTY schema
 */
export type OUL_R22_TIMING_QTY = z.infer<typeof oulR22TimingQtySchema>;

/**
 * OUL_R22.RESULT group schema
 * Defines the structure and validation rules for the OUL_R22.RESULT group
 */
export const oulR22ResultSchema = z
  .object({
    OBX: segments.obxSchema,
    TCD: segments.tcdSchema.optional(),
    SID: z.array(segments.sidSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R22.RESULT",
    version: "2.5",
    description: "HL7 v2.5 OUL_R22.RESULT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R22.RESULT schema
 */
export type OUL_R22_RESULT = z.infer<typeof oulR22ResultSchema>;

/**
 * OUL_R22.ORDER group schema
 * Defines the structure and validation rules for the OUL_R22.ORDER group
 */
export const oulR22OrderSchema = z
  .object({
    OBR: segments.obrSchema,
    ORC: segments.orcSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    TIMING_QTY: z.array(oulR22TimingQtySchema).optional(),
    RESULT: z.array(oulR22ResultSchema).optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R22.ORDER",
    version: "2.5",
    description: "HL7 v2.5 OUL_R22.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R22.ORDER schema
 */
export type OUL_R22_ORDER = z.infer<typeof oulR22OrderSchema>;

/**
 * OUL_R22.SPECIMEN group schema
 * Defines the structure and validation rules for the OUL_R22.SPECIMEN group
 */
export const oulR22SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    OBX: z.array(segments.obxSchema).optional(),
    CONTAINER: z.array(oulR22ContainerSchema).optional(),
    ORDER: z.array(oulR22OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "OUL_R22.SPECIMEN",
    version: "2.5",
    description: "HL7 v2.5 OUL_R22.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the OUL_R22.SPECIMEN schema
 */
export type OUL_R22_SPECIMEN = z.infer<typeof oulR22SpecimenSchema>;

/**
 * OUL_R22 message schema
 * Defines the structure and validation rules for the OUL_R22 message
 */
export const oul_r22Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    NTE: segments.nteSchema.optional(),
    PATIENT: oulR22PatientSchema.optional(),
    VISIT: oulR22VisitSchema.optional(),
    SPECIMEN: z.array(oulR22SpecimenSchema),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "OUL_R22",
    version: "2.5",
    description: "HL7 v2.5 OUL_R22 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the OUL_R22 schema
 */
export type OUL_R22 = z.infer<typeof oul_r22Schema>;

/**
 * Default export for convenience
 */
export default oul_r22Schema;
