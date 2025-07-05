import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 ORL_O40 Message
 *
 * HL7 v2.8 ORL_O40 message definition
 * Contains segment definitions and constraints for the ORL_O40 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O40.TIMING group schema
 * Defines the structure and validation rules for the ORL_O40.TIMING group
 */
export const orlO40TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40.TIMING",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O40.TIMING schema
 */
export type ORL_O40_TIMING = z.infer<typeof orlO40TimingSchema>;

/**
 * ORL_O40.SPECIMEN_CONTAINER_IN_PACKAGE group schema
 * Defines the structure and validation rules for the ORL_O40.SPECIMEN_CONTAINER_IN_PACKAGE group
 */
export const orlO40SpecimenContainerInPackageSchema = z
  .object({
    SAC: segments.sacSchema
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40.SPECIMEN_CONTAINER_IN_PACKAGE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40.SPECIMEN_CONTAINER_IN_PACKAGE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O40.SPECIMEN_CONTAINER_IN_PACKAGE schema
 */
export type ORL_O40_SPECIMEN_CONTAINER_IN_PACKAGE = z.infer<
  typeof orlO40SpecimenContainerInPackageSchema
>;

/**
 * ORL_O40.SPECIMEN_IN_PACKAGE group schema
 * Defines the structure and validation rules for the ORL_O40.SPECIMEN_IN_PACKAGE group
 */
export const orlO40SpecimenInPackageSchema = z
  .object({
    SPM: segments.spmSchema,
    SPECIMEN_CONTAINER_IN_PACKAGE: z.array(orlO40SpecimenContainerInPackageSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40.SPECIMEN_IN_PACKAGE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40.SPECIMEN_IN_PACKAGE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O40.SPECIMEN_IN_PACKAGE schema
 */
export type ORL_O40_SPECIMEN_IN_PACKAGE = z.infer<typeof orlO40SpecimenInPackageSchema>;

/**
 * ORL_O40.PACKAGE group schema
 * Defines the structure and validation rules for the ORL_O40.PACKAGE group
 */
export const orlO40PackageSchema = z
  .object({
    PAC: segments.pacSchema,
    SPECIMEN_IN_PACKAGE: z.array(orlO40SpecimenInPackageSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40.PACKAGE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40.PACKAGE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O40.PACKAGE schema
 */
export type ORL_O40_PACKAGE = z.infer<typeof orlO40PackageSchema>;

/**
 * ORL_O40.SPECIMEN_SHIPMENT group schema
 * Defines the structure and validation rules for the ORL_O40.SPECIMEN_SHIPMENT group
 */
export const orlO40SpecimenShipmentSchema = z
  .object({
    SHP: segments.shpSchema,
    PACKAGE: z.array(orlO40PackageSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40.SPECIMEN_SHIPMENT",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40.SPECIMEN_SHIPMENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O40.SPECIMEN_SHIPMENT schema
 */
export type ORL_O40_SPECIMEN_SHIPMENT = z.infer<typeof orlO40SpecimenShipmentSchema>;

/**
 * ORL_O40.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O40.OBSERVATION_REQUEST group
 */
export const orlO40ObservationRequestSchema = z
  .object({
    OBR: segments.obrSchema,
    PRT: z.array(segments.prtSchema).optional(),
    SPECIMEN_SHIPMENT: z.array(orlO40SpecimenShipmentSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40.OBSERVATION_REQUEST",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40.OBSERVATION_REQUEST group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O40.OBSERVATION_REQUEST schema
 */
export type ORL_O40_OBSERVATION_REQUEST = z.infer<typeof orlO40ObservationRequestSchema>;

/**
 * ORL_O40.ORDER group schema
 * Defines the structure and validation rules for the ORL_O40.ORDER group
 */
export const orlO40OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    PRT: z.array(segments.prtSchema).optional(),
    TIMING: z.array(orlO40TimingSchema).optional(),
    OBSERVATION_REQUEST: orlO40ObservationRequestSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40.ORDER",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O40.ORDER schema
 */
export type ORL_O40_ORDER = z.infer<typeof orlO40OrderSchema>;

/**
 * ORL_O40.PATIENT group schema
 * Defines the structure and validation rules for the ORL_O40.PATIENT group
 */
export const orlO40PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PRT: z.array(segments.prtSchema).optional(),
    ARV: z.array(segments.arvSchema).optional(),
    ORDER: z.array(orlO40OrderSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40.PATIENT",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O40.PATIENT schema
 */
export type ORL_O40_PATIENT = z.infer<typeof orlO40PatientSchema>;

/**
 * ORL_O40.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O40.RESPONSE group
 */
export const orlO40ResponseSchema = z
  .object({
    PATIENT: orlO40PatientSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40.RESPONSE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O40.RESPONSE schema
 */
export type ORL_O40_RESPONSE = z.infer<typeof orlO40ResponseSchema>;

/**
 * ORL_O40 message schema
 * Defines the structure and validation rules for the ORL_O40 message
 */
export const orl_o40Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: orlO40ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O40",
    version: "2.8",
    description: "HL7 v2.8 ORL_O40 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORL_O40 schema
 */
export type ORL_O40 = z.infer<typeof orl_o40Schema>;

/**
 * Default export for convenience
 */
export default orl_o40Schema;
