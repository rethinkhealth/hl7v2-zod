import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 OMD_O03 Message
 * 
 * HL7 v2.5 OMD_O03 message definition
 * Contains segment definitions and constraints for the OMD_O03 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMD_O03.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OMD_O03.PATIENT_VISIT group
 */
export const omdO03PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03.PATIENT_VISIT",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMD_O03.PATIENT_VISIT schema
 */
export type OMD_O03_PATIENT_VISIT = z.infer<typeof omdO03PatientVisitSchema>;

/**
 * OMD_O03.INSURANCE group schema
 * Defines the structure and validation rules for the OMD_O03.INSURANCE group
 */
export const omdO03InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03.INSURANCE",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMD_O03.INSURANCE schema
 */
export type OMD_O03_INSURANCE = z.infer<typeof omdO03InsuranceSchema>;

/**
 * OMD_O03.TIMING_DIET group schema
 * Defines the structure and validation rules for the OMD_O03.TIMING_DIET group
 */
export const omdO03TimingDietSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03.TIMING_DIET",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03.TIMING_DIET group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMD_O03.TIMING_DIET schema
 */
export type OMD_O03_TIMING_DIET = z.infer<typeof omdO03TimingDietSchema>;

/**
 * OMD_O03.OBSERVATION group schema
 * Defines the structure and validation rules for the OMD_O03.OBSERVATION group
 */
export const omdO03ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03.OBSERVATION",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMD_O03.OBSERVATION schema
 */
export type OMD_O03_OBSERVATION = z.infer<typeof omdO03ObservationSchema>;

/**
 * OMD_O03.TIMING_TRAY group schema
 * Defines the structure and validation rules for the OMD_O03.TIMING_TRAY group
 */
export const omdO03TimingTraySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03.TIMING_TRAY",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03.TIMING_TRAY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMD_O03.TIMING_TRAY schema
 */
export type OMD_O03_TIMING_TRAY = z.infer<typeof omdO03TimingTraySchema>;

/**
 * OMD_O03.PATIENT group schema
 * Defines the structure and validation rules for the OMD_O03.PATIENT group
 */
export const omdO03PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT_VISIT": omdO03PatientVisitSchema.optional(),
  "INSURANCE": z.array(omdO03InsuranceSchema).optional(),
  "GT1": segments.gt1Schema.optional(),
  "AL1": z.array(segments.al1Schema).optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03.PATIENT",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMD_O03.PATIENT schema
 */
export type OMD_O03_PATIENT = z.infer<typeof omdO03PatientSchema>;

/**
 * OMD_O03.DIET group schema
 * Defines the structure and validation rules for the OMD_O03.DIET group
 */
export const omdO03DietSchema = z.object({
  "ODS": z.array(segments.odsSchema),
  "NTE": z.array(segments.nteSchema).optional(),
  "OBSERVATION": z.array(omdO03ObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03.DIET",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03.DIET group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMD_O03.DIET schema
 */
export type OMD_O03_DIET = z.infer<typeof omdO03DietSchema>;

/**
 * OMD_O03.ORDER_TRAY group schema
 * Defines the structure and validation rules for the OMD_O03.ORDER_TRAY group
 */
export const omdO03OrderTraySchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING_TRAY": z.array(omdO03TimingTraySchema).optional(),
  "ODT": z.array(segments.odtSchema),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03.ORDER_TRAY",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03.ORDER_TRAY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMD_O03.ORDER_TRAY schema
 */
export type OMD_O03_ORDER_TRAY = z.infer<typeof omdO03OrderTraySchema>;

/**
 * OMD_O03.ORDER_DIET group schema
 * Defines the structure and validation rules for the OMD_O03.ORDER_DIET group
 */
export const omdO03OrderDietSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING_DIET": z.array(omdO03TimingDietSchema).optional(),
  "DIET": omdO03DietSchema.optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03.ORDER_DIET",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03.ORDER_DIET group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMD_O03.ORDER_DIET schema
 */
export type OMD_O03_ORDER_DIET = z.infer<typeof omdO03OrderDietSchema>;

/**
 * OMD_O03 message schema
 * Defines the structure and validation rules for the OMD_O03 message
 */
export const omd_o03Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": omdO03PatientSchema.optional(),
  "ORDER_DIET": z.array(omdO03OrderDietSchema),
  "ORDER_TRAY": z.array(omdO03OrderTraySchema).optional()
}).register(hl7v2Metadata, {
  title: "OMD_O03",
  version: "2.5",
  description: "HL7 v2.5 OMD_O03 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OMD_O03 schema
 */
export type OMD_O03 = z.infer<typeof omd_o03Schema>;

/**
 * Default export for convenience
 */
export default omd_o03Schema;