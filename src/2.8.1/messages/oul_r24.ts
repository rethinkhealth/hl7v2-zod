import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 OUL_R24 Message
 * 
 * HL7 v2.8 OUL_R24 message definition
 * Contains segment definitions and constraints for the OUL_R24 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OUL_R24.PATIENT_OBSERVATION group schema
 * Defines the structure and validation rules for the OUL_R24.PATIENT_OBSERVATION group
 */
export const oulR24PatientObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.PATIENT_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.PATIENT_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R24.PATIENT_OBSERVATION schema
 */
export type OUL_R24_PATIENT_OBSERVATION = z.infer<typeof oulR24PatientObservationSchema>;

/**
 * OUL_R24.VISIT group schema
 * Defines the structure and validation rules for the OUL_R24.VISIT group
 */
export const oulR24VisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.VISIT",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R24.VISIT schema
 */
export type OUL_R24_VISIT = z.infer<typeof oulR24VisitSchema>;

/**
 * OUL_R24.ORDER_DOCUMENT group schema
 * Defines the structure and validation rules for the OUL_R24.ORDER_DOCUMENT group
 */
export const oulR24OrderDocumentSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TXA": segments.txaSchema
}).register(hl7v2Metadata, {
  title: "OUL_R24.ORDER_DOCUMENT",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.ORDER_DOCUMENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R24.ORDER_DOCUMENT schema
 */
export type OUL_R24_ORDER_DOCUMENT = z.infer<typeof oulR24OrderDocumentSchema>;

/**
 * OUL_R24.TIMING_QTY group schema
 * Defines the structure and validation rules for the OUL_R24.TIMING_QTY group
 */
export const oulR24TimingQtySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.TIMING_QTY",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.TIMING_QTY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R24.TIMING_QTY schema
 */
export type OUL_R24_TIMING_QTY = z.infer<typeof oulR24TimingQtySchema>;

/**
 * OUL_R24.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OUL_R24.SPECIMEN_OBSERVATION group
 */
export const oulR24SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.SPECIMEN_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R24.SPECIMEN_OBSERVATION schema
 */
export type OUL_R24_SPECIMEN_OBSERVATION = z.infer<typeof oulR24SpecimenObservationSchema>;

/**
 * OUL_R24.CONTAINER group schema
 * Defines the structure and validation rules for the OUL_R24.CONTAINER group
 */
export const oulR24ContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "INV": segments.invSchema.optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.CONTAINER",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.CONTAINER group",
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
export const oulR24ResultSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TCD": segments.tcdSchema.optional(),
  "SID": z.array(segments.sidSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.RESULT",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.RESULT group",
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
export const oulR24PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT_OBSERVATION": z.array(oulR24PatientObservationSchema).optional(),
  "VISIT": oulR24VisitSchema.optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R24.PATIENT schema
 */
export type OUL_R24_PATIENT = z.infer<typeof oulR24PatientSchema>;

/**
 * OUL_R24.COMMON_ORDER group schema
 * Defines the structure and validation rules for the OUL_R24.COMMON_ORDER group
 */
export const oulR24CommonOrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "ORDER_DOCUMENT": oulR24OrderDocumentSchema.optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.COMMON_ORDER",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.COMMON_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OUL_R24.COMMON_ORDER schema
 */
export type OUL_R24_COMMON_ORDER = z.infer<typeof oulR24CommonOrderSchema>;

/**
 * OUL_R24.SPECIMEN group schema
 * Defines the structure and validation rules for the OUL_R24.SPECIMEN group
 */
export const oulR24SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "SPECIMEN_OBSERVATION": z.array(oulR24SpecimenObservationSchema).optional(),
  "CONTAINER": z.array(oulR24ContainerSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.SPECIMEN",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.SPECIMEN group",
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
export const oulR24OrderSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "COMMON_ORDER": oulR24CommonOrderSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "TIMING_QTY": z.array(oulR24TimingQtySchema).optional(),
  "SPECIMEN": z.array(oulR24SpecimenSchema).optional(),
  "RESULT": z.array(oulR24ResultSchema).optional(),
  "CTI": z.array(segments.ctiSchema).optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24.ORDER",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24.ORDER group",
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
export const oul_r24Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": segments.nteSchema.optional(),
  "PATIENT": oulR24PatientSchema.optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "ORDER": z.array(oulR24OrderSchema),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "OUL_R24",
  version: "2.8",
  description: "HL7 v2.8 OUL_R24 message",
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