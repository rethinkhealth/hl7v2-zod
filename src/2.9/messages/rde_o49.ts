import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 RDE_O49 Message
 * 
 * HL7 v2.9 RDE_O49 message definition
 * Contains segment definitions and constraints for the RDE_O49 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RDE_O49.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the RDE_O49.PATIENT_VISIT group
 */
export const rdeO49PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "RDE_O49.PATIENT_VISIT",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RDE_O49.PATIENT_VISIT schema
 */
export type RDE_O49_PATIENT_VISIT = z.infer<typeof rdeO49PatientVisitSchema>;

/**
 * RDE_O49.INSURANCE group schema
 * Defines the structure and validation rules for the RDE_O49.INSURANCE group
 */
export const rdeO49InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "RDE_O49.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RDE_O49.INSURANCE schema
 */
export type RDE_O49_INSURANCE = z.infer<typeof rdeO49InsuranceSchema>;

/**
 * RDE_O49.TIMING group schema
 * Defines the structure and validation rules for the RDE_O49.TIMING group
 */
export const rdeO49TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RDE_O49.TIMING",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RDE_O49.TIMING schema
 */
export type RDE_O49_TIMING = z.infer<typeof rdeO49TimingSchema>;

/**
 * RDE_O49.COMPONENT group schema
 * Defines the structure and validation rules for the RDE_O49.COMPONENT group
 */
export const rdeO49ComponentSchema = z.object({
  "RXC": segments.rxcSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RDE_O49.COMPONENT",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49.COMPONENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RDE_O49.COMPONENT schema
 */
export type RDE_O49_COMPONENT = z.infer<typeof rdeO49ComponentSchema>;

/**
 * RDE_O49.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RDE_O49.TIMING_ENCODED group
 */
export const rdeO49TimingEncodedSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RDE_O49.TIMING_ENCODED",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49.TIMING_ENCODED group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RDE_O49.TIMING_ENCODED schema
 */
export type RDE_O49_TIMING_ENCODED = z.infer<typeof rdeO49TimingEncodedSchema>;

/**
 * RDE_O49.OBSERVATION group schema
 * Defines the structure and validation rules for the RDE_O49.OBSERVATION group
 */
export const rdeO49ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RDE_O49.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RDE_O49.OBSERVATION schema
 */
export type RDE_O49_OBSERVATION = z.infer<typeof rdeO49ObservationSchema>;

/**
 * RDE_O49.PATIENT group schema
 * Defines the structure and validation rules for the RDE_O49.PATIENT group
 */
export const rdeO49PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT_VISIT": rdeO49PatientVisitSchema.optional(),
  "INSURANCE": z.array(rdeO49InsuranceSchema).optional(),
  "GT1": segments.gt1Schema.optional(),
  "AL1": z.array(segments.al1Schema).optional()
}).register(hl7v2Metadata, {
  title: "RDE_O49.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RDE_O49.PATIENT schema
 */
export type RDE_O49_PATIENT = z.infer<typeof rdeO49PatientSchema>;

/**
 * RDE_O49.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RDE_O49.ORDER_DETAIL group
 */
export const rdeO49OrderDetailSchema = z.object({
  "RXO": segments.rxoSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RXR": z.array(segments.rxrSchema),
  "COMPONENT": z.array(rdeO49ComponentSchema).optional()
}).register(hl7v2Metadata, {
  title: "RDE_O49.ORDER_DETAIL",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49.ORDER_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RDE_O49.ORDER_DETAIL schema
 */
export type RDE_O49_ORDER_DETAIL = z.infer<typeof rdeO49OrderDetailSchema>;

/**
 * RDE_O49.ORDER group schema
 * Defines the structure and validation rules for the RDE_O49.ORDER group
 */
export const rdeO49OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(rdeO49TimingSchema).optional(),
  "ORDER_DETAIL": rdeO49OrderDetailSchema.optional(),
  "PRT_1": z.array(segments.prtSchema).optional(),
  "RXE": segments.rxeSchema,
  "PRT_2": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "TIMING_ENCODED": z.array(rdeO49TimingEncodedSchema),
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional(),
  "OBSERVATION": z.array(rdeO49ObservationSchema).optional(),
  "FT1": z.array(segments.ft1Schema).optional(),
  "BLG": segments.blgSchema.optional(),
  "CTI": z.array(segments.ctiSchema).optional()
}).register(hl7v2Metadata, {
  title: "RDE_O49.ORDER",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RDE_O49.ORDER schema
 */
export type RDE_O49_ORDER = z.infer<typeof rdeO49OrderSchema>;

/**
 * RDE_O49 message schema
 * Defines the structure and validation rules for the RDE_O49 message
 */
export const rde_o49Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": rdeO49PatientSchema.optional(),
  "ORDER": z.array(rdeO49OrderSchema)
}).register(hl7v2Metadata, {
  title: "RDE_O49",
  version: "2.9",
  description: "HL7 v2.9 RDE_O49 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RDE_O49 schema
 */
export type RDE_O49 = z.infer<typeof rde_o49Schema>;

/**
 * Default export for convenience
 */
export default rde_o49Schema;