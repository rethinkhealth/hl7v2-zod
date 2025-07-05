import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 OUL_R23 Message
 * 
 * HL7 v2.6 OUL_R23 message definition
 * Contains segment definitions and constraints for the OUL_R23 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OUL_R23.VISIT group schema
 * Defines the structure and validation rules for the OUL_R23.VISIT group
 */
export const oulR23VisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.VISIT",
  version: "2.6",
  description: "HL7 v2.6 OUL_R23.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.VISIT schema
 */
export type OUL_R23_VISIT = z.infer<typeof oulR23VisitSchema>;

/**
 * OUL_R23.TIMING_QTY group schema
 * Defines the structure and validation rules for the OUL_R23.TIMING_QTY group
 */
export const oulR23TimingQtySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.TIMING_QTY",
  version: "2.6",
  description: "HL7 v2.6 OUL_R23.TIMING_QTY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.TIMING_QTY schema
 */
export type OUL_R23_TIMING_QTY = z.infer<typeof oulR23TimingQtySchema>;

/**
 * OUL_R23.RESULT group schema
 * Defines the structure and validation rules for the OUL_R23.RESULT group
 */
export const oulR23ResultSchema = z.object({
  "OBX": segments.obxSchema,
  "TCD": segments.tcdSchema.optional(),
  "SID": z.array(segments.sidSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.RESULT",
  version: "2.6",
  description: "HL7 v2.6 OUL_R23.RESULT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.RESULT schema
 */
export type OUL_R23_RESULT = z.infer<typeof oulR23ResultSchema>;

/**
 * OUL_R23.PATIENT group schema
 * Defines the structure and validation rules for the OUL_R23.PATIENT group
 */
export const oulR23PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "OBX": z.array(segments.obxSchema).optional(),
  "VISIT": oulR23VisitSchema.optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.PATIENT",
  version: "2.6",
  description: "HL7 v2.6 OUL_R23.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.PATIENT schema
 */
export type OUL_R23_PATIENT = z.infer<typeof oulR23PatientSchema>;

/**
 * OUL_R23.ORDER group schema
 * Defines the structure and validation rules for the OUL_R23.ORDER group
 */
export const oulR23OrderSchema = z.object({
  "OBR": segments.obrSchema,
  "ORC": segments.orcSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "TIMING_QTY": z.array(oulR23TimingQtySchema).optional(),
  "RESULT": z.array(oulR23ResultSchema).optional(),
  "CTI": z.array(segments.ctiSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.ORDER",
  version: "2.6",
  description: "HL7 v2.6 OUL_R23.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.ORDER schema
 */
export type OUL_R23_ORDER = z.infer<typeof oulR23OrderSchema>;

/**
 * OUL_R23.CONTAINER group schema
 * Defines the structure and validation rules for the OUL_R23.CONTAINER group
 */
export const oulR23ContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "INV": segments.invSchema.optional(),
  "ORDER": z.array(oulR23OrderSchema)
}).register(hl7v2Metadata, {
  title: "OUL_R23.CONTAINER",
  version: "2.6",
  description: "HL7 v2.6 OUL_R23.CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.CONTAINER schema
 */
export type OUL_R23_CONTAINER = z.infer<typeof oulR23ContainerSchema>;

/**
 * OUL_R23.SPECIMEN group schema
 * Defines the structure and validation rules for the OUL_R23.SPECIMEN group
 */
export const oulR23SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "OBX": z.array(segments.obxSchema).optional(),
  "CONTAINER": z.array(oulR23ContainerSchema)
}).register(hl7v2Metadata, {
  title: "OUL_R23.SPECIMEN",
  version: "2.6",
  description: "HL7 v2.6 OUL_R23.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.SPECIMEN schema
 */
export type OUL_R23_SPECIMEN = z.infer<typeof oulR23SpecimenSchema>;

/**
 * OUL_R23 message schema
 * Defines the structure and validation rules for the OUL_R23 message
 */
export const oul_r23Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": segments.nteSchema.optional(),
  "PATIENT": oulR23PatientSchema.optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "SPECIMEN": z.array(oulR23SpecimenSchema),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23",
  version: "2.6",
  description: "HL7 v2.6 OUL_R23 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OUL_R23 schema
 */
export type OUL_R23 = z.infer<typeof oul_r23Schema>;

/**
 * Default export for convenience
 */
export default oul_r23Schema;