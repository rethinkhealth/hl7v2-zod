import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 SIU_S12 Message
 *
 * HL7 v2.5 SIU_S12 message definition
 * Contains segment definitions and constraints for the SIU_S12 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SIU_S12.PATIENT group schema
 * Defines the structure and validation rules for the SIU_S12.PATIENT group
 */
export const siuS12PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    PV1: segments.pv1Schema.optional(),
    PV2: segments.pv2Schema.optional(),
    OBX: z.array(segments.obxSchema).optional(),
    DG1: z.array(segments.dg1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SIU_S12.PATIENT",
    version: "2.5",
    description: "HL7 v2.5 SIU_S12.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SIU_S12.PATIENT schema
 */
export type SIU_S12_PATIENT = z.infer<typeof siuS12PatientSchema>;

/**
 * SIU_S12.SERVICE group schema
 * Defines the structure and validation rules for the SIU_S12.SERVICE group
 */
export const siuS12ServiceSchema = z
  .object({
    AIS: segments.aisSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SIU_S12.SERVICE",
    version: "2.5",
    description: "HL7 v2.5 SIU_S12.SERVICE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SIU_S12.SERVICE schema
 */
export type SIU_S12_SERVICE = z.infer<typeof siuS12ServiceSchema>;

/**
 * SIU_S12.GENERAL_RESOURCE group schema
 * Defines the structure and validation rules for the SIU_S12.GENERAL_RESOURCE group
 */
export const siuS12GeneralResourceSchema = z
  .object({
    AIG: segments.aigSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SIU_S12.GENERAL_RESOURCE",
    version: "2.5",
    description: "HL7 v2.5 SIU_S12.GENERAL_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SIU_S12.GENERAL_RESOURCE schema
 */
export type SIU_S12_GENERAL_RESOURCE = z.infer<typeof siuS12GeneralResourceSchema>;

/**
 * SIU_S12.LOCATION_RESOURCE group schema
 * Defines the structure and validation rules for the SIU_S12.LOCATION_RESOURCE group
 */
export const siuS12LocationResourceSchema = z
  .object({
    AIL: segments.ailSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SIU_S12.LOCATION_RESOURCE",
    version: "2.5",
    description: "HL7 v2.5 SIU_S12.LOCATION_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SIU_S12.LOCATION_RESOURCE schema
 */
export type SIU_S12_LOCATION_RESOURCE = z.infer<typeof siuS12LocationResourceSchema>;

/**
 * SIU_S12.PERSONNEL_RESOURCE group schema
 * Defines the structure and validation rules for the SIU_S12.PERSONNEL_RESOURCE group
 */
export const siuS12PersonnelResourceSchema = z
  .object({
    AIP: segments.aipSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SIU_S12.PERSONNEL_RESOURCE",
    version: "2.5",
    description: "HL7 v2.5 SIU_S12.PERSONNEL_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SIU_S12.PERSONNEL_RESOURCE schema
 */
export type SIU_S12_PERSONNEL_RESOURCE = z.infer<typeof siuS12PersonnelResourceSchema>;

/**
 * SIU_S12.RESOURCES group schema
 * Defines the structure and validation rules for the SIU_S12.RESOURCES group
 */
export const siuS12ResourcesSchema = z
  .object({
    RGS: segments.rgsSchema,
    SERVICE: z.array(siuS12ServiceSchema).optional(),
    GENERAL_RESOURCE: z.array(siuS12GeneralResourceSchema).optional(),
    LOCATION_RESOURCE: z.array(siuS12LocationResourceSchema).optional(),
    PERSONNEL_RESOURCE: z.array(siuS12PersonnelResourceSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SIU_S12.RESOURCES",
    version: "2.5",
    description: "HL7 v2.5 SIU_S12.RESOURCES group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SIU_S12.RESOURCES schema
 */
export type SIU_S12_RESOURCES = z.infer<typeof siuS12ResourcesSchema>;

/**
 * SIU_S12 message schema
 * Defines the structure and validation rules for the SIU_S12 message
 */
export const siu_s12Schema = z
  .object({
    MSH: segments.mshSchema,
    SCH: segments.schSchema,
    TQ1: z.array(segments.tq1Schema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: z.array(siuS12PatientSchema).optional(),
    RESOURCES: z.array(siuS12ResourcesSchema)
  })
  .register(hl7v2Metadata, {
    title: "SIU_S12",
    version: "2.5",
    description: "HL7 v2.5 SIU_S12 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the SIU_S12 schema
 */
export type SIU_S12 = z.infer<typeof siu_s12Schema>;

/**
 * Default export for convenience
 */
export default siu_s12Schema;
