import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 OML_O39 Message
 * 
 * HL7 v2.8 OML_O39 message definition
 * Contains segment definitions and constraints for the OML_O39 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OML_O39.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OML_O39.PATIENT_VISIT group
 */
export const omlO39PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.PATIENT_VISIT",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.PATIENT_VISIT schema
 */
export type OML_O39_PATIENT_VISIT = z.infer<typeof omlO39PatientVisitSchema>;

/**
 * OML_O39.INSURANCE group schema
 * Defines the structure and validation rules for the OML_O39.INSURANCE group
 */
export const omlO39InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.INSURANCE schema
 */
export type OML_O39_INSURANCE = z.infer<typeof omlO39InsuranceSchema>;

/**
 * OML_O39.TIMING group schema
 * Defines the structure and validation rules for the OML_O39.TIMING group
 */
export const omlO39TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.TIMING",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.TIMING schema
 */
export type OML_O39_TIMING = z.infer<typeof omlO39TimingSchema>;

/**
 * OML_O39.OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O39.OBSERVATION group
 */
export const omlO39ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TCD": segments.tcdSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.OBSERVATION schema
 */
export type OML_O39_OBSERVATION = z.infer<typeof omlO39ObservationSchema>;

/**
 * OML_O39.SHIPMENT_OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O39.SHIPMENT_OBSERVATION group
 */
export const omlO39ShipmentObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.SHIPMENT_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.SHIPMENT_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.SHIPMENT_OBSERVATION schema
 */
export type OML_O39_SHIPMENT_OBSERVATION = z.infer<typeof omlO39ShipmentObservationSchema>;

/**
 * OML_O39.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O39.SPECIMEN_OBSERVATION group
 */
export const omlO39SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.SPECIMEN_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.SPECIMEN_OBSERVATION schema
 */
export type OML_O39_SPECIMEN_OBSERVATION = z.infer<typeof omlO39SpecimenObservationSchema>;

/**
 * OML_O39.CONTAINER_OBSERVATION group schema
 * Defines the structure and validation rules for the OML_O39.CONTAINER_OBSERVATION group
 */
export const omlO39ContainerObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.CONTAINER_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.CONTAINER_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.CONTAINER_OBSERVATION schema
 */
export type OML_O39_CONTAINER_OBSERVATION = z.infer<typeof omlO39ContainerObservationSchema>;

/**
 * OML_O39.PATIENT group schema
 * Defines the structure and validation rules for the OML_O39.PATIENT group
 */
export const omlO39PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "PATIENT_VISIT": omlO39PatientVisitSchema.optional(),
  "INSURANCE": z.array(omlO39InsuranceSchema).optional(),
  "GT1": segments.gt1Schema.optional(),
  "AL1": z.array(segments.al1Schema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.PATIENT schema
 */
export type OML_O39_PATIENT = z.infer<typeof omlO39PatientSchema>;

/**
 * OML_O39.SPECIMEN_CONTAINER_IN_PACKAGE group schema
 * Defines the structure and validation rules for the OML_O39.SPECIMEN_CONTAINER_IN_PACKAGE group
 */
export const omlO39SpecimenContainerInPackageSchema = z.object({
  "SAC": segments.sacSchema,
  "CONTAINER_OBSERVATION": z.array(omlO39ContainerObservationSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.SPECIMEN_CONTAINER_IN_PACKAGE",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.SPECIMEN_CONTAINER_IN_PACKAGE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.SPECIMEN_CONTAINER_IN_PACKAGE schema
 */
export type OML_O39_SPECIMEN_CONTAINER_IN_PACKAGE = z.infer<typeof omlO39SpecimenContainerInPackageSchema>;

/**
 * OML_O39.SPECIMEN_IN_PACKAGE group schema
 * Defines the structure and validation rules for the OML_O39.SPECIMEN_IN_PACKAGE group
 */
export const omlO39SpecimenInPackageSchema = z.object({
  "SPM": segments.spmSchema,
  "SPECIMEN_OBSERVATION": z.array(omlO39SpecimenObservationSchema).optional(),
  "SPECIMEN_CONTAINER_IN_PACKAGE": z.array(omlO39SpecimenContainerInPackageSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.SPECIMEN_IN_PACKAGE",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.SPECIMEN_IN_PACKAGE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.SPECIMEN_IN_PACKAGE schema
 */
export type OML_O39_SPECIMEN_IN_PACKAGE = z.infer<typeof omlO39SpecimenInPackageSchema>;

/**
 * OML_O39.PACKAGE group schema
 * Defines the structure and validation rules for the OML_O39.PACKAGE group
 */
export const omlO39PackageSchema = z.object({
  "PAC": segments.pacSchema,
  "SPECIMEN_IN_PACKAGE": z.array(omlO39SpecimenInPackageSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.PACKAGE",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.PACKAGE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.PACKAGE schema
 */
export type OML_O39_PACKAGE = z.infer<typeof omlO39PackageSchema>;

/**
 * OML_O39.SPECIMEN_SHIPMENT group schema
 * Defines the structure and validation rules for the OML_O39.SPECIMEN_SHIPMENT group
 */
export const omlO39SpecimenShipmentSchema = z.object({
  "SHP": segments.shpSchema,
  "SHIPMENT_OBSERVATION": z.array(omlO39ShipmentObservationSchema).optional(),
  "PACKAGE": z.array(omlO39PackageSchema)
}).register(hl7v2Metadata, {
  title: "OML_O39.SPECIMEN_SHIPMENT",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.SPECIMEN_SHIPMENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.SPECIMEN_SHIPMENT schema
 */
export type OML_O39_SPECIMEN_SHIPMENT = z.infer<typeof omlO39SpecimenShipmentSchema>;

/**
 * OML_O39.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the OML_O39.OBSERVATION_REQUEST group
 */
export const omlO39ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "TCD": segments.tcdSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "CTD": segments.ctdSchema.optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "OBSERVATION": z.array(omlO39ObservationSchema).optional(),
  "SPECIMEN_SHIPMENT": z.array(omlO39SpecimenShipmentSchema).optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.OBSERVATION_REQUEST",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.OBSERVATION_REQUEST schema
 */
export type OML_O39_OBSERVATION_REQUEST = z.infer<typeof omlO39ObservationRequestSchema>;

/**
 * OML_O39.ORDER group schema
 * Defines the structure and validation rules for the OML_O39.ORDER group
 */
export const omlO39OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(omlO39TimingSchema).optional(),
  "OBSERVATION_REQUEST": omlO39ObservationRequestSchema.optional(),
  "FT1": z.array(segments.ft1Schema).optional(),
  "CTI": z.array(segments.ctiSchema).optional(),
  "BLG": segments.blgSchema.optional()
}).register(hl7v2Metadata, {
  title: "OML_O39.ORDER",
  version: "2.8",
  description: "HL7 v2.8 OML_O39.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OML_O39.ORDER schema
 */
export type OML_O39_ORDER = z.infer<typeof omlO39OrderSchema>;

/**
 * OML_O39 message schema
 * Defines the structure and validation rules for the OML_O39 message
 */
export const oml_o39Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": omlO39PatientSchema.optional(),
  "ORDER": z.array(omlO39OrderSchema)
}).register(hl7v2Metadata, {
  title: "OML_O39",
  version: "2.8",
  description: "HL7 v2.8 OML_O39 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OML_O39 schema
 */
export type OML_O39 = z.infer<typeof oml_o39Schema>;

/**
 * Default export for convenience
 */
export default oml_o39Schema;