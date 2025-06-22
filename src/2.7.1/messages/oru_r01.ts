import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 ORU_R01 Message
 * 
 * HL7 v2.7 ORU_R01 message definition
 * Contains segment definitions and constraints for the ORU_R01 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORU_R01.PATIENT_OBSERVATION group schema
 * Defines the structure and validation rules for the ORU_R01.PATIENT_OBSERVATION group
 */
export const oruR01PatientObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORU_R01.PATIENT_OBSERVATION",
  version: "2.7",
  description: "HL7 v2.7 ORU_R01.PATIENT_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORU_R01.PATIENT_OBSERVATION schema
 */
export type ORU_R01_PATIENT_OBSERVATION = z.infer<typeof oruR01PatientObservationSchema>;

/**
 * ORU_R01.VISIT group schema
 * Defines the structure and validation rules for the ORU_R01.VISIT group
 */
export const oruR01VisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORU_R01.VISIT",
  version: "2.7",
  description: "HL7 v2.7 ORU_R01.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORU_R01.VISIT schema
 */
export type ORU_R01_VISIT = z.infer<typeof oruR01VisitSchema>;

/**
 * ORU_R01.TIMING_QTY group schema
 * Defines the structure and validation rules for the ORU_R01.TIMING_QTY group
 */
export const oruR01TimingQtySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORU_R01.TIMING_QTY",
  version: "2.7",
  description: "HL7 v2.7 ORU_R01.TIMING_QTY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORU_R01.TIMING_QTY schema
 */
export type ORU_R01_TIMING_QTY = z.infer<typeof oruR01TimingQtySchema>;

/**
 * ORU_R01.OBSERVATION group schema
 * Defines the structure and validation rules for the ORU_R01.OBSERVATION group
 */
export const oruR01ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORU_R01.OBSERVATION",
  version: "2.7",
  description: "HL7 v2.7 ORU_R01.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORU_R01.OBSERVATION schema
 */
export type ORU_R01_OBSERVATION = z.infer<typeof oruR01ObservationSchema>;

/**
 * ORU_R01.SPECIMEN group schema
 * Defines the structure and validation rules for the ORU_R01.SPECIMEN group
 */
export const oruR01SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "PATIENT_OBSERVATION": z.array(oruR01PatientObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORU_R01.SPECIMEN",
  version: "2.7",
  description: "HL7 v2.7 ORU_R01.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORU_R01.SPECIMEN schema
 */
export type ORU_R01_SPECIMEN = z.infer<typeof oruR01SpecimenSchema>;

/**
 * ORU_R01.PATIENT group schema
 * Defines the structure and validation rules for the ORU_R01.PATIENT group
 */
export const oruR01PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "PATIENT_OBSERVATION": z.array(oruR01PatientObservationSchema).optional(),
  "VISIT": oruR01VisitSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORU_R01.PATIENT",
  version: "2.7",
  description: "HL7 v2.7 ORU_R01.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORU_R01.PATIENT schema
 */
export type ORU_R01_PATIENT = z.infer<typeof oruR01PatientSchema>;

/**
 * ORU_R01.ORDER_OBSERVATION group schema
 * Defines the structure and validation rules for the ORU_R01.ORDER_OBSERVATION group
 */
export const oruR01OrderObservationSchema = z.object({
  "ORC": segments.orcSchema.optional(),
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING_QTY": z.array(oruR01TimingQtySchema).optional(),
  "CTD": segments.ctdSchema.optional(),
  "OBSERVATION": z.array(oruR01ObservationSchema).optional(),
  "FT1": z.array(segments.ft1Schema).optional(),
  "CTI": z.array(segments.ctiSchema).optional(),
  "SPECIMEN": z.array(oruR01SpecimenSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORU_R01.ORDER_OBSERVATION",
  version: "2.7",
  description: "HL7 v2.7 ORU_R01.ORDER_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORU_R01.ORDER_OBSERVATION schema
 */
export type ORU_R01_ORDER_OBSERVATION = z.infer<typeof oruR01OrderObservationSchema>;

/**
 * ORU_R01.PATIENT_RESULT group schema
 * Defines the structure and validation rules for the ORU_R01.PATIENT_RESULT group
 */
export const oruR01PatientResultSchema = z.object({
  "PATIENT": oruR01PatientSchema.optional(),
  "ORDER_OBSERVATION": z.array(oruR01OrderObservationSchema)
}).register(hl7v2Metadata, {
  title: "ORU_R01.PATIENT_RESULT",
  version: "2.7",
  description: "HL7 v2.7 ORU_R01.PATIENT_RESULT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORU_R01.PATIENT_RESULT schema
 */
export type ORU_R01_PATIENT_RESULT = z.infer<typeof oruR01PatientResultSchema>;

/**
 * ORU_R01 message schema
 * Defines the structure and validation rules for the ORU_R01 message
 */
export const oru_r01Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "PATIENT_RESULT": z.array(oruR01PatientResultSchema),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORU_R01",
  version: "2.7",
  description: "HL7 v2.7 ORU_R01 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORU_R01 schema
 */
export type ORU_R01 = z.infer<typeof oru_r01Schema>;

/**
 * Default export for convenience
 */
export default oru_r01Schema;