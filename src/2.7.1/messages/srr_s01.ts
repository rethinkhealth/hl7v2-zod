import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 SRR_S01 Message
 *
 * HL7 v2.7 SRR_S01 message definition
 * Contains segment definitions and constraints for the SRR_S01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SRR_S01.PATIENT group schema
 * Defines the structure and validation rules for the SRR_S01.PATIENT group
 */
export const srrS01PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PV1: segments.pv1Schema.optional(),
    PV2: segments.pv2Schema.optional(),
    DG1: z.array(segments.dg1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRR_S01.PATIENT",
    version: "2.7",
    description: "HL7 v2.7 SRR_S01.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRR_S01.PATIENT schema
 */
export type SRR_S01_PATIENT = z.infer<typeof srrS01PatientSchema>;

/**
 * SRR_S01.SERVICE group schema
 * Defines the structure and validation rules for the SRR_S01.SERVICE group
 */
export const srrS01ServiceSchema = z
  .object({
    AIS: segments.aisSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRR_S01.SERVICE",
    version: "2.7",
    description: "HL7 v2.7 SRR_S01.SERVICE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRR_S01.SERVICE schema
 */
export type SRR_S01_SERVICE = z.infer<typeof srrS01ServiceSchema>;

/**
 * SRR_S01.GENERAL_RESOURCE group schema
 * Defines the structure and validation rules for the SRR_S01.GENERAL_RESOURCE group
 */
export const srrS01GeneralResourceSchema = z
  .object({
    AIG: segments.aigSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRR_S01.GENERAL_RESOURCE",
    version: "2.7",
    description: "HL7 v2.7 SRR_S01.GENERAL_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRR_S01.GENERAL_RESOURCE schema
 */
export type SRR_S01_GENERAL_RESOURCE = z.infer<typeof srrS01GeneralResourceSchema>;

/**
 * SRR_S01.LOCATION_RESOURCE group schema
 * Defines the structure and validation rules for the SRR_S01.LOCATION_RESOURCE group
 */
export const srrS01LocationResourceSchema = z
  .object({
    AIL: segments.ailSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRR_S01.LOCATION_RESOURCE",
    version: "2.7",
    description: "HL7 v2.7 SRR_S01.LOCATION_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRR_S01.LOCATION_RESOURCE schema
 */
export type SRR_S01_LOCATION_RESOURCE = z.infer<typeof srrS01LocationResourceSchema>;

/**
 * SRR_S01.PERSONNEL_RESOURCE group schema
 * Defines the structure and validation rules for the SRR_S01.PERSONNEL_RESOURCE group
 */
export const srrS01PersonnelResourceSchema = z
  .object({
    AIP: segments.aipSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRR_S01.PERSONNEL_RESOURCE",
    version: "2.7",
    description: "HL7 v2.7 SRR_S01.PERSONNEL_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRR_S01.PERSONNEL_RESOURCE schema
 */
export type SRR_S01_PERSONNEL_RESOURCE = z.infer<typeof srrS01PersonnelResourceSchema>;

/**
 * SRR_S01.RESOURCE group schema
 * Defines the structure and validation rules for the SRR_S01.RESOURCE group
 */
export const srrS01ResourceSchema = z
  .object({
    RGS: segments.rgsSchema,
    SERVICE: z.array(srrS01ServiceSchema).optional(),
    GENERAL_RESOURCE: z.array(srrS01GeneralResourceSchema).optional(),
    LOCATION_RESOURCE: z.array(srrS01LocationResourceSchema).optional(),
    PERSONNEL_RESOURCE: z.array(srrS01PersonnelResourceSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SRR_S01.RESOURCE",
    version: "2.7",
    description: "HL7 v2.7 SRR_S01.RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRR_S01.RESOURCE schema
 */
export type SRR_S01_RESOURCE = z.infer<typeof srrS01ResourceSchema>;

/**
 * SRR_S01.SCHEDULE group schema
 * Defines the structure and validation rules for the SRR_S01.SCHEDULE group
 */
export const srrS01ScheduleSchema = z
  .object({
    SCH: segments.schSchema,
    TQ1: z.array(segments.tq1Schema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: z.array(srrS01PatientSchema).optional(),
    RESOURCE: z.array(srrS01ResourceSchema)
  })
  .register(hl7v2Metadata, {
    title: "SRR_S01.SCHEDULE",
    version: "2.7",
    description: "HL7 v2.7 SRR_S01.SCHEDULE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SRR_S01.SCHEDULE schema
 */
export type SRR_S01_SCHEDULE = z.infer<typeof srrS01ScheduleSchema>;

/**
 * SRR_S01 message schema
 * Defines the structure and validation rules for the SRR_S01 message
 */
export const srr_s01Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SCHEDULE: srrS01ScheduleSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "SRR_S01",
    version: "2.7",
    description: "HL7 v2.7 SRR_S01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the SRR_S01 schema
 */
export type SRR_S01 = z.infer<typeof srr_s01Schema>;

/**
 * Default export for convenience
 */
export default srr_s01Schema;
