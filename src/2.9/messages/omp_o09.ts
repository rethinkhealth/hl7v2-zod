import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 OMP_O09 Message
 * 
 * HL7 v2.9 OMP_O09 message definition
 * Contains segment definitions and constraints for the OMP_O09 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMP_O09.ADDITIONAL_DEMOGRAPHICS group schema
 * Defines the structure and validation rules for the OMP_O09.ADDITIONAL_DEMOGRAPHICS group
 */
export const ompO09AdditionalDemographicsSchema = z.object({
  "PD1": segments.pd1Schema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMP_O09.ADDITIONAL_DEMOGRAPHICS",
  version: "2.9",
  description: "HL7 v2.9 OMP_O09.ADDITIONAL_DEMOGRAPHICS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMP_O09.ADDITIONAL_DEMOGRAPHICS schema
 */
export type OMP_O09_ADDITIONAL_DEMOGRAPHICS = z.infer<typeof ompO09AdditionalDemographicsSchema>;

/**
 * OMP_O09.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OMP_O09.PATIENT_VISIT group
 */
export const ompO09PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMP_O09.PATIENT_VISIT",
  version: "2.9",
  description: "HL7 v2.9 OMP_O09.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMP_O09.PATIENT_VISIT schema
 */
export type OMP_O09_PATIENT_VISIT = z.infer<typeof ompO09PatientVisitSchema>;

/**
 * OMP_O09.INSURANCE group schema
 * Defines the structure and validation rules for the OMP_O09.INSURANCE group
 */
export const ompO09InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "OMP_O09.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 OMP_O09.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMP_O09.INSURANCE schema
 */
export type OMP_O09_INSURANCE = z.infer<typeof ompO09InsuranceSchema>;

/**
 * OMP_O09.TIMING group schema
 * Defines the structure and validation rules for the OMP_O09.TIMING group
 */
export const ompO09TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OMP_O09.TIMING",
  version: "2.9",
  description: "HL7 v2.9 OMP_O09.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMP_O09.TIMING schema
 */
export type OMP_O09_TIMING = z.infer<typeof ompO09TimingSchema>;

/**
 * OMP_O09.COMPONENT group schema
 * Defines the structure and validation rules for the OMP_O09.COMPONENT group
 */
export const ompO09ComponentSchema = z.object({
  "RXC": segments.rxcSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMP_O09.COMPONENT",
  version: "2.9",
  description: "HL7 v2.9 OMP_O09.COMPONENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMP_O09.COMPONENT schema
 */
export type OMP_O09_COMPONENT = z.infer<typeof ompO09ComponentSchema>;

/**
 * OMP_O09.OBSERVATION group schema
 * Defines the structure and validation rules for the OMP_O09.OBSERVATION group
 */
export const ompO09ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OMP_O09.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 OMP_O09.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMP_O09.OBSERVATION schema
 */
export type OMP_O09_OBSERVATION = z.infer<typeof ompO09ObservationSchema>;

/**
 * OMP_O09.PATIENT group schema
 * Defines the structure and validation rules for the OMP_O09.PATIENT group
 */
export const ompO09PatientSchema = z.object({
  "PID": segments.pidSchema,
  "ADDITIONAL_DEMOGRAPHICS": ompO09AdditionalDemographicsSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "PATIENT_VISIT": ompO09PatientVisitSchema.optional(),
  "INSURANCE": z.array(ompO09InsuranceSchema).optional(),
  "GT1": segments.gt1Schema.optional(),
  "AL1": z.array(segments.al1Schema).optional()
}).register(hl7v2Metadata, {
  title: "OMP_O09.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 OMP_O09.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMP_O09.PATIENT schema
 */
export type OMP_O09_PATIENT = z.infer<typeof ompO09PatientSchema>;

/**
 * OMP_O09.ORDER group schema
 * Defines the structure and validation rules for the OMP_O09.ORDER group
 */
export const ompO09OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(ompO09TimingSchema).optional(),
  "RXO": segments.rxoSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RXR": z.array(segments.rxrSchema),
  "COMPONENT": z.array(ompO09ComponentSchema).optional(),
  "CDO": z.array(segments.cdoSchema).optional(),
  "OBSERVATION": z.array(ompO09ObservationSchema).optional(),
  "FT1": z.array(segments.ft1Schema).optional(),
  "BLG": segments.blgSchema.optional()
}).register(hl7v2Metadata, {
  title: "OMP_O09.ORDER",
  version: "2.9",
  description: "HL7 v2.9 OMP_O09.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OMP_O09.ORDER schema
 */
export type OMP_O09_ORDER = z.infer<typeof ompO09OrderSchema>;

/**
 * OMP_O09 message schema
 * Defines the structure and validation rules for the OMP_O09 message
 */
export const omp_o09Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": ompO09PatientSchema.optional(),
  "ORDER": z.array(ompO09OrderSchema)
}).register(hl7v2Metadata, {
  title: "OMP_O09",
  version: "2.9",
  description: "HL7 v2.9 OMP_O09 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OMP_O09 schema
 */
export type OMP_O09 = z.infer<typeof omp_o09Schema>;

/**
 * Default export for convenience
 */
export default omp_o09Schema;