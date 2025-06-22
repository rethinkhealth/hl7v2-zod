import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 OUL_R23 Message
 * 
 * HL7 v2.8 OUL_R23 message definition
 * Contains segment definitions and constraints for the OUL_R23 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OUL_R23.PATIENT_OBSERVATION group schema
 * Defines the structure and validation rules for the OUL_R23.PATIENT_OBSERVATION group
 */
export const oulR23PatientObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.PATIENT_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.PATIENT_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.PATIENT_OBSERVATION schema
 */
export type OUL_R23_PATIENT_OBSERVATION = z.infer<typeof oulR23PatientObservationSchema>;

/**
 * OUL_R23.VISIT group schema
 * Defines the structure and validation rules for the OUL_R23.VISIT group
 */
export const oulR23VisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.VISIT",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.VISIT schema
 */
export type OUL_R23_VISIT = z.infer<typeof oulR23VisitSchema>;

/**
 * OUL_R23.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OUL_R23.SPECIMEN_OBSERVATION group
 */
export const oulR23SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.SPECIMEN_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.SPECIMEN_OBSERVATION schema
 */
export type OUL_R23_SPECIMEN_OBSERVATION = z.infer<typeof oulR23SpecimenObservationSchema>;

/**
 * OUL_R23.ORDER_DOCUMENT group schema
 * Defines the structure and validation rules for the OUL_R23.ORDER_DOCUMENT group
 */
export const oulR23OrderDocumentSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TXA": segments.txaSchema
}).register(hl7v2Metadata, {
  title: "OUL_R23.ORDER_DOCUMENT",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.ORDER_DOCUMENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.ORDER_DOCUMENT schema
 */
export type OUL_R23_ORDER_DOCUMENT = z.infer<typeof oulR23OrderDocumentSchema>;

/**
 * OUL_R23.TIMING_QTY group schema
 * Defines the structure and validation rules for the OUL_R23.TIMING_QTY group
 */
export const oulR23TimingQtySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.TIMING_QTY",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.TIMING_QTY group",
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
  "PRT": z.array(segments.prtSchema).optional(),
  "TCD": segments.tcdSchema.optional(),
  "SID": z.array(segments.sidSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.RESULT",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.RESULT group",
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
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT_OBSERVATION": z.array(oulR23PatientObservationSchema).optional(),
  "VISIT": oulR23VisitSchema.optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.PATIENT schema
 */
export type OUL_R23_PATIENT = z.infer<typeof oulR23PatientSchema>;

/**
 * OUL_R23.COMMON_ORDER group schema
 * Defines the structure and validation rules for the OUL_R23.COMMON_ORDER group
 */
export const oulR23CommonOrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "ORDER_DOCUMENT": oulR23OrderDocumentSchema.optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.COMMON_ORDER",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.COMMON_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R23.COMMON_ORDER schema
 */
export type OUL_R23_COMMON_ORDER = z.infer<typeof oulR23CommonOrderSchema>;

/**
 * OUL_R23.ORDER group schema
 * Defines the structure and validation rules for the OUL_R23.ORDER group
 */
export const oulR23OrderSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "COMMON_ORDER": oulR23CommonOrderSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "TIMING_QTY": z.array(oulR23TimingQtySchema).optional(),
  "RESULT": z.array(oulR23ResultSchema).optional(),
  "CTI": z.array(segments.ctiSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R23.ORDER",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.ORDER group",
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
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.CONTAINER group",
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
  "SPECIMEN_OBSERVATION": z.array(oulR23SpecimenObservationSchema).optional(),
  "CONTAINER": z.array(oulR23ContainerSchema)
}).register(hl7v2Metadata, {
  title: "OUL_R23.SPECIMEN",
  version: "2.8",
  description: "HL7 v2.8 OUL_R23.SPECIMEN group",
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
  version: "2.8",
  description: "HL7 v2.8 OUL_R23 message",
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