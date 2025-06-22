import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 VXU_V04 Message
 * 
 * HL7 v2.9 VXU_V04 message definition
 * Contains segment definitions and constraints for the VXU_V04 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VXU_V04.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the VXU_V04.PATIENT_VISIT group
 */
export const vxuV04PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "VXU_V04.PATIENT_VISIT",
  version: "2.9",
  description: "HL7 v2.9 VXU_V04.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXU_V04.PATIENT_VISIT schema
 */
export type VXU_V04_PATIENT_VISIT = z.infer<typeof vxuV04PatientVisitSchema>;

/**
 * VXU_V04.INSURANCE group schema
 * Defines the structure and validation rules for the VXU_V04.INSURANCE group
 */
export const vxuV04InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "VXU_V04.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 VXU_V04.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXU_V04.INSURANCE schema
 */
export type VXU_V04_INSURANCE = z.infer<typeof vxuV04InsuranceSchema>;

/**
 * VXU_V04.PERSON_OBSERVATION group schema
 * Defines the structure and validation rules for the VXU_V04.PERSON_OBSERVATION group
 */
export const vxuV04PersonObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "VXU_V04.PERSON_OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 VXU_V04.PERSON_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXU_V04.PERSON_OBSERVATION schema
 */
export type VXU_V04_PERSON_OBSERVATION = z.infer<typeof vxuV04PersonObservationSchema>;

/**
 * VXU_V04.TIMING group schema
 * Defines the structure and validation rules for the VXU_V04.TIMING group
 */
export const vxuV04TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "VXU_V04.TIMING",
  version: "2.9",
  description: "HL7 v2.9 VXU_V04.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXU_V04.TIMING schema
 */
export type VXU_V04_TIMING = z.infer<typeof vxuV04TimingSchema>;

/**
 * VXU_V04.OBSERVATION group schema
 * Defines the structure and validation rules for the VXU_V04.OBSERVATION group
 */
export const vxuV04ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "VXU_V04.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 VXU_V04.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXU_V04.OBSERVATION schema
 */
export type VXU_V04_OBSERVATION = z.infer<typeof vxuV04ObservationSchema>;

/**
 * VXU_V04.ORDER group schema
 * Defines the structure and validation rules for the VXU_V04.ORDER group
 */
export const vxuV04OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(vxuV04TimingSchema).optional(),
  "RXA": segments.rxaSchema,
  "PRT_1": z.array(segments.prtSchema).optional(),
  "RXR": segments.rxrSchema.optional(),
  "OBSERVATION": z.array(vxuV04ObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "VXU_V04.ORDER",
  version: "2.9",
  description: "HL7 v2.9 VXU_V04.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXU_V04.ORDER schema
 */
export type VXU_V04_ORDER = z.infer<typeof vxuV04OrderSchema>;

/**
 * VXU_V04 message schema
 * Defines the structure and validation rules for the VXU_V04 message
 */
export const vxu_v04Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "ARV_1": z.array(segments.arvSchema).optional(),
  "PATIENT_VISIT": vxuV04PatientVisitSchema.optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(vxuV04InsuranceSchema).optional(),
  "PERSON_OBSERVATION": z.array(vxuV04PersonObservationSchema).optional(),
  "ORDER": z.array(vxuV04OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "VXU_V04",
  version: "2.9",
  description: "HL7 v2.9 VXU_V04 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the VXU_V04 schema
 */
export type VXU_V04 = z.infer<typeof vxu_v04Schema>;

/**
 * Default export for convenience
 */
export default vxu_v04Schema;