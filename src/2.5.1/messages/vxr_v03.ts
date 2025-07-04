import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 VXR_V03 Message
 * 
 * HL7 v2.5 VXR_V03 message definition
 * Contains segment definitions and constraints for the VXR_V03 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * VXR_V03.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the VXR_V03.PATIENT_VISIT group
 */
export const vxrV03PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "VXR_V03.PATIENT_VISIT",
  version: "2.5",
  description: "HL7 v2.5 VXR_V03.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXR_V03.PATIENT_VISIT schema
 */
export type VXR_V03_PATIENT_VISIT = z.infer<typeof vxrV03PatientVisitSchema>;

/**
 * VXR_V03.INSURANCE group schema
 * Defines the structure and validation rules for the VXR_V03.INSURANCE group
 */
export const vxrV03InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "VXR_V03.INSURANCE",
  version: "2.5",
  description: "HL7 v2.5 VXR_V03.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXR_V03.INSURANCE schema
 */
export type VXR_V03_INSURANCE = z.infer<typeof vxrV03InsuranceSchema>;

/**
 * VXR_V03.TIMING group schema
 * Defines the structure and validation rules for the VXR_V03.TIMING group
 */
export const vxrV03TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "VXR_V03.TIMING",
  version: "2.5",
  description: "HL7 v2.5 VXR_V03.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXR_V03.TIMING schema
 */
export type VXR_V03_TIMING = z.infer<typeof vxrV03TimingSchema>;

/**
 * VXR_V03.OBSERVATION group schema
 * Defines the structure and validation rules for the VXR_V03.OBSERVATION group
 */
export const vxrV03ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "VXR_V03.OBSERVATION",
  version: "2.5",
  description: "HL7 v2.5 VXR_V03.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXR_V03.OBSERVATION schema
 */
export type VXR_V03_OBSERVATION = z.infer<typeof vxrV03ObservationSchema>;

/**
 * VXR_V03.ORDER group schema
 * Defines the structure and validation rules for the VXR_V03.ORDER group
 */
export const vxrV03OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(vxrV03TimingSchema).optional(),
  "RXA": segments.rxaSchema,
  "RXR": segments.rxrSchema.optional(),
  "OBSERVATION": z.array(vxrV03ObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "VXR_V03.ORDER",
  version: "2.5",
  description: "HL7 v2.5 VXR_V03.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the VXR_V03.ORDER schema
 */
export type VXR_V03_ORDER = z.infer<typeof vxrV03OrderSchema>;

/**
 * VXR_V03 message schema
 * Defines the structure and validation rules for the VXR_V03 message
 */
export const vxr_v03Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "QRD": segments.qrdSchema,
  "QRF": segments.qrfSchema.optional(),
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "PATIENT_VISIT": vxrV03PatientVisitSchema.optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(vxrV03InsuranceSchema).optional(),
  "ORDER": z.array(vxrV03OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "VXR_V03",
  version: "2.5",
  description: "HL7 v2.5 VXR_V03 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the VXR_V03 schema
 */
export type VXR_V03 = z.infer<typeof vxr_v03Schema>;

/**
 * Default export for convenience
 */
export default vxr_v03Schema;