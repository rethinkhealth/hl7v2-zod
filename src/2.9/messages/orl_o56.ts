import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ORL_O56 Message
 * 
 * HL7 v2.9 ORL_O56 message definition
 * Contains segment definitions and constraints for the ORL_O56 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O56.PATIENT group schema
 * Defines the structure and validation rules for the ORL_O56.PATIENT group
 */
export const orlO56PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O56.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O56.PATIENT schema
 */
export type ORL_O56_PATIENT = z.infer<typeof orlO56PatientSchema>;

/**
 * ORL_O56.TIMING group schema
 * Defines the structure and validation rules for the ORL_O56.TIMING group
 */
export const orlO56TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O56.TIMING",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O56.TIMING schema
 */
export type ORL_O56_TIMING = z.infer<typeof orlO56TimingSchema>;

/**
 * ORL_O56.SPECIMEN_CONTAINER_IN_PACKAGE group schema
 * Defines the structure and validation rules for the ORL_O56.SPECIMEN_CONTAINER_IN_PACKAGE group
 */
export const orlO56SpecimenContainerInPackageSchema = z.object({
  "SAC": segments.sacSchema
}).register(hl7v2Metadata, {
  title: "ORL_O56.SPECIMEN_CONTAINER_IN_PACKAGE",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56.SPECIMEN_CONTAINER_IN_PACKAGE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O56.SPECIMEN_CONTAINER_IN_PACKAGE schema
 */
export type ORL_O56_SPECIMEN_CONTAINER_IN_PACKAGE = z.infer<typeof orlO56SpecimenContainerInPackageSchema>;

/**
 * ORL_O56.SPECIMEN_IN_PACKAGE group schema
 * Defines the structure and validation rules for the ORL_O56.SPECIMEN_IN_PACKAGE group
 */
export const orlO56SpecimenInPackageSchema = z.object({
  "SPM": segments.spmSchema,
  "SPECIMEN_CONTAINER_IN_PACKAGE": z.array(orlO56SpecimenContainerInPackageSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O56.SPECIMEN_IN_PACKAGE",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56.SPECIMEN_IN_PACKAGE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O56.SPECIMEN_IN_PACKAGE schema
 */
export type ORL_O56_SPECIMEN_IN_PACKAGE = z.infer<typeof orlO56SpecimenInPackageSchema>;

/**
 * ORL_O56.PACKAGE group schema
 * Defines the structure and validation rules for the ORL_O56.PACKAGE group
 */
export const orlO56PackageSchema = z.object({
  "PAC": segments.pacSchema,
  "SPECIMEN_IN_PACKAGE": z.array(orlO56SpecimenInPackageSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O56.PACKAGE",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56.PACKAGE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O56.PACKAGE schema
 */
export type ORL_O56_PACKAGE = z.infer<typeof orlO56PackageSchema>;

/**
 * ORL_O56.SPECIMEN_SHIPMENT group schema
 * Defines the structure and validation rules for the ORL_O56.SPECIMEN_SHIPMENT group
 */
export const orlO56SpecimenShipmentSchema = z.object({
  "SHP": segments.shpSchema,
  "PACKAGE": z.array(orlO56PackageSchema)
}).register(hl7v2Metadata, {
  title: "ORL_O56.SPECIMEN_SHIPMENT",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56.SPECIMEN_SHIPMENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O56.SPECIMEN_SHIPMENT schema
 */
export type ORL_O56_SPECIMEN_SHIPMENT = z.infer<typeof orlO56SpecimenShipmentSchema>;

/**
 * ORL_O56.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O56.OBSERVATION_REQUEST group
 */
export const orlO56ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "SPECIMEN_SHIPMENT": z.array(orlO56SpecimenShipmentSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O56.OBSERVATION_REQUEST",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O56.OBSERVATION_REQUEST schema
 */
export type ORL_O56_OBSERVATION_REQUEST = z.infer<typeof orlO56ObservationRequestSchema>;

/**
 * ORL_O56.ORDER group schema
 * Defines the structure and validation rules for the ORL_O56.ORDER group
 */
export const orlO56OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(orlO56TimingSchema).optional(),
  "OBSERVATION_REQUEST": orlO56ObservationRequestSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O56.ORDER",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O56.ORDER schema
 */
export type ORL_O56_ORDER = z.infer<typeof orlO56OrderSchema>;

/**
 * ORL_O56.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O56.RESPONSE group
 */
export const orlO56ResponseSchema = z.object({
  "PATIENT": orlO56PatientSchema.optional(),
  "ORDER": z.array(orlO56OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O56.RESPONSE",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O56.RESPONSE schema
 */
export type ORL_O56_RESPONSE = z.infer<typeof orlO56ResponseSchema>;

/**
 * ORL_O56 message schema
 * Defines the structure and validation rules for the ORL_O56 message
 */
export const orl_o56Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orlO56ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O56",
  version: "2.9",
  description: "HL7 v2.9 ORL_O56 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORL_O56 schema
 */
export type ORL_O56 = z.infer<typeof orl_o56Schema>;

/**
 * Default export for convenience
 */
export default orl_o56Schema;