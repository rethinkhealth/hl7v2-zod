import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 SRM_S01 Message
 *
 * HL7 v2.7 SRM_S01 message definition
 * Contains segment definitions and constraints for the SRM_S01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SRM_S01.PATIENT group schema
 * Defines the structure and validation rules for the SRM_S01.PATIENT group
 */
export const srmS01PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PV1: segments.pv1Schema.optional(),
    PV2: segments.pv2Schema.optional(),
    OBX: z.array(segments.obxSchema).optional(),
    DG1: z.array(segments.dg1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRM_S01.PATIENT",
    version: "2.7",
    description: "HL7 v2.7 SRM_S01.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRM_S01.PATIENT schema
 */
export type SRM_S01_PATIENT = z.infer<typeof srmS01PatientSchema>;

/**
 * SRM_S01.SERVICE group schema
 * Defines the structure and validation rules for the SRM_S01.SERVICE group
 */
export const srmS01ServiceSchema = z
  .object({
    AIS: segments.aisSchema,
    APR: segments.aprSchema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRM_S01.SERVICE",
    version: "2.7",
    description: "HL7 v2.7 SRM_S01.SERVICE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRM_S01.SERVICE schema
 */
export type SRM_S01_SERVICE = z.infer<typeof srmS01ServiceSchema>;

/**
 * SRM_S01.GENERAL_RESOURCE group schema
 * Defines the structure and validation rules for the SRM_S01.GENERAL_RESOURCE group
 */
export const srmS01GeneralResourceSchema = z
  .object({
    AIG: segments.aigSchema,
    APR: segments.aprSchema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRM_S01.GENERAL_RESOURCE",
    version: "2.7",
    description: "HL7 v2.7 SRM_S01.GENERAL_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRM_S01.GENERAL_RESOURCE schema
 */
export type SRM_S01_GENERAL_RESOURCE = z.infer<typeof srmS01GeneralResourceSchema>;

/**
 * SRM_S01.LOCATION_RESOURCE group schema
 * Defines the structure and validation rules for the SRM_S01.LOCATION_RESOURCE group
 */
export const srmS01LocationResourceSchema = z
  .object({
    AIL: segments.ailSchema,
    APR: segments.aprSchema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRM_S01.LOCATION_RESOURCE",
    version: "2.7",
    description: "HL7 v2.7 SRM_S01.LOCATION_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRM_S01.LOCATION_RESOURCE schema
 */
export type SRM_S01_LOCATION_RESOURCE = z.infer<typeof srmS01LocationResourceSchema>;

/**
 * SRM_S01.PERSONNEL_RESOURCE group schema
 * Defines the structure and validation rules for the SRM_S01.PERSONNEL_RESOURCE group
 */
export const srmS01PersonnelResourceSchema = z
  .object({
    AIP: segments.aipSchema,
    APR: segments.aprSchema.optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRM_S01.PERSONNEL_RESOURCE",
    version: "2.7",
    description: "HL7 v2.7 SRM_S01.PERSONNEL_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRM_S01.PERSONNEL_RESOURCE schema
 */
export type SRM_S01_PERSONNEL_RESOURCE = z.infer<typeof srmS01PersonnelResourceSchema>;

/**
 * SRM_S01.RESOURCES group schema
 * Defines the structure and validation rules for the SRM_S01.RESOURCES group
 */
export const srmS01ResourcesSchema = z
  .object({
    RGS: segments.rgsSchema,
    SERVICE: z.array(srmS01ServiceSchema).optional(),
    GENERAL_RESOURCE: z.array(srmS01GeneralResourceSchema).optional(),
    LOCATION_RESOURCE: z.array(srmS01LocationResourceSchema).optional(),
    PERSONNEL_RESOURCE: z.array(srmS01PersonnelResourceSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRM_S01.RESOURCES",
    version: "2.7",
    description: "HL7 v2.7 SRM_S01.RESOURCES group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRM_S01.RESOURCES schema
 */
export type SRM_S01_RESOURCES = z.infer<typeof srmS01ResourcesSchema>;

/**
 * SRM_S01 message schema
 * Defines the structure and validation rules for the SRM_S01 message
 */
export const srm_s01Schema = z
  .object({
    MSH: segments.mshSchema,
    ARQ: segments.arqSchema,
    APR: segments.aprSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: z.array(srmS01PatientSchema).optional(),
    RESOURCES: z.array(srmS01ResourcesSchema)
  })
  .register(hl7v2Metadata, {
    title: "SRM_S01",
    version: "2.7",
    description: "HL7 v2.7 SRM_S01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the SRM_S01 schema
 */
export type SRM_S01 = z.infer<typeof srm_s01Schema>;

/**
 * Default export for convenience
 */
export default srm_s01Schema;
