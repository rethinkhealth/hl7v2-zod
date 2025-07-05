import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 ORL_O44 Message
 *
 * HL7 v2.8 ORL_O44 message definition
 * Contains segment definitions and constraints for the ORL_O44 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O44.PATIENT group schema
 * Defines the structure and validation rules for the ORL_O44.PATIENT group
 */
export const orlO44PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PRT: z.array(segments.prtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44.PATIENT",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O44.PATIENT schema
 */
export type ORL_O44_PATIENT = z.infer<typeof orlO44PatientSchema>;

/**
 * ORL_O44.TIMING group schema
 * Defines the structure and validation rules for the ORL_O44.TIMING group
 */
export const orlO44TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44.TIMING",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O44.TIMING schema
 */
export type ORL_O44_TIMING = z.infer<typeof orlO44TimingSchema>;

/**
 * ORL_O44.SPECIMEN_CONTAINER_IN_PACKAGE group schema
 * Defines the structure and validation rules for the ORL_O44.SPECIMEN_CONTAINER_IN_PACKAGE group
 */
export const orlO44SpecimenContainerInPackageSchema = z
  .object({
    SAC: segments.sacSchema
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44.SPECIMEN_CONTAINER_IN_PACKAGE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44.SPECIMEN_CONTAINER_IN_PACKAGE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O44.SPECIMEN_CONTAINER_IN_PACKAGE schema
 */
export type ORL_O44_SPECIMEN_CONTAINER_IN_PACKAGE = z.infer<
  typeof orlO44SpecimenContainerInPackageSchema
>;

/**
 * ORL_O44.SPECIMEN_IN_PACKAGE group schema
 * Defines the structure and validation rules for the ORL_O44.SPECIMEN_IN_PACKAGE group
 */
export const orlO44SpecimenInPackageSchema = z
  .object({
    SPM: segments.spmSchema,
    SPECIMEN_CONTAINER_IN_PACKAGE: z.array(orlO44SpecimenContainerInPackageSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44.SPECIMEN_IN_PACKAGE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44.SPECIMEN_IN_PACKAGE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O44.SPECIMEN_IN_PACKAGE schema
 */
export type ORL_O44_SPECIMEN_IN_PACKAGE = z.infer<typeof orlO44SpecimenInPackageSchema>;

/**
 * ORL_O44.PACKAGE group schema
 * Defines the structure and validation rules for the ORL_O44.PACKAGE group
 */
export const orlO44PackageSchema = z
  .object({
    PAC: segments.pacSchema,
    SPECIMEN_IN_PACKAGE: z.array(orlO44SpecimenInPackageSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44.PACKAGE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44.PACKAGE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O44.PACKAGE schema
 */
export type ORL_O44_PACKAGE = z.infer<typeof orlO44PackageSchema>;

/**
 * ORL_O44.SPECIMEN_SHIPMENT group schema
 * Defines the structure and validation rules for the ORL_O44.SPECIMEN_SHIPMENT group
 */
export const orlO44SpecimenShipmentSchema = z
  .object({
    SHP: segments.shpSchema,
    PACKAGE: z.array(orlO44PackageSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44.SPECIMEN_SHIPMENT",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44.SPECIMEN_SHIPMENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O44.SPECIMEN_SHIPMENT schema
 */
export type ORL_O44_SPECIMEN_SHIPMENT = z.infer<typeof orlO44SpecimenShipmentSchema>;

/**
 * ORL_O44.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O44.OBSERVATION_REQUEST group
 */
export const orlO44ObservationRequestSchema = z
  .object({
    OBR: segments.obrSchema,
    PRT: z.array(segments.prtSchema).optional(),
    SPECIMEN_SHIPMENT: z.array(orlO44SpecimenShipmentSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44.OBSERVATION_REQUEST",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44.OBSERVATION_REQUEST group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O44.OBSERVATION_REQUEST schema
 */
export type ORL_O44_OBSERVATION_REQUEST = z.infer<typeof orlO44ObservationRequestSchema>;

/**
 * ORL_O44.ORDER group schema
 * Defines the structure and validation rules for the ORL_O44.ORDER group
 */
export const orlO44OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    PRT: z.array(segments.prtSchema).optional(),
    TIMING: z.array(orlO44TimingSchema).optional(),
    OBSERVATION_REQUEST: orlO44ObservationRequestSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44.ORDER",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O44.ORDER schema
 */
export type ORL_O44_ORDER = z.infer<typeof orlO44OrderSchema>;

/**
 * ORL_O44.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O44.RESPONSE group
 */
export const orlO44ResponseSchema = z
  .object({
    PATIENT: orlO44PatientSchema.optional(),
    ORDER: z.array(orlO44OrderSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44.RESPONSE",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORL_O44.RESPONSE schema
 */
export type ORL_O44_RESPONSE = z.infer<typeof orlO44ResponseSchema>;

/**
 * ORL_O44 message schema
 * Defines the structure and validation rules for the ORL_O44 message
 */
export const orl_o44Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: orlO44ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORL_O44",
    version: "2.8",
    description: "HL7 v2.8 ORL_O44 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORL_O44 schema
 */
export type ORL_O44 = z.infer<typeof orl_o44Schema>;

/**
 * Default export for convenience
 */
export default orl_o44Schema;
