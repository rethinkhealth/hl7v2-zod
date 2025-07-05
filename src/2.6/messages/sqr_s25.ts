import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 SQR_S25 Message
 *
 * HL7 v2.6 SQR_S25 message definition
 * Contains segment definitions and constraints for the SQR_S25 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SQR_S25.PATIENT group schema
 * Defines the structure and validation rules for the SQR_S25.PATIENT group
 */
export const sqrS25PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PV1: segments.pv1Schema.optional(),
    PV2: segments.pv2Schema.optional(),
    DG1: segments.dg1Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "SQR_S25.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 SQR_S25.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SQR_S25.PATIENT schema
 */
export type SQR_S25_PATIENT = z.infer<typeof sqrS25PatientSchema>;

/**
 * SQR_S25.SERVICE group schema
 * Defines the structure and validation rules for the SQR_S25.SERVICE group
 */
export const sqrS25ServiceSchema = z
  .object({
    AIS: segments.aisSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SQR_S25.SERVICE",
    version: "2.6",
    description: "HL7 v2.6 SQR_S25.SERVICE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SQR_S25.SERVICE schema
 */
export type SQR_S25_SERVICE = z.infer<typeof sqrS25ServiceSchema>;

/**
 * SQR_S25.GENERAL_RESOURCE group schema
 * Defines the structure and validation rules for the SQR_S25.GENERAL_RESOURCE group
 */
export const sqrS25GeneralResourceSchema = z
  .object({
    AIG: segments.aigSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SQR_S25.GENERAL_RESOURCE",
    version: "2.6",
    description: "HL7 v2.6 SQR_S25.GENERAL_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SQR_S25.GENERAL_RESOURCE schema
 */
export type SQR_S25_GENERAL_RESOURCE = z.infer<typeof sqrS25GeneralResourceSchema>;

/**
 * SQR_S25.PERSONNEL_RESOURCE group schema
 * Defines the structure and validation rules for the SQR_S25.PERSONNEL_RESOURCE group
 */
export const sqrS25PersonnelResourceSchema = z
  .object({
    AIP: segments.aipSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SQR_S25.PERSONNEL_RESOURCE",
    version: "2.6",
    description: "HL7 v2.6 SQR_S25.PERSONNEL_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SQR_S25.PERSONNEL_RESOURCE schema
 */
export type SQR_S25_PERSONNEL_RESOURCE = z.infer<typeof sqrS25PersonnelResourceSchema>;

/**
 * SQR_S25.LOCATION_RESOURCE group schema
 * Defines the structure and validation rules for the SQR_S25.LOCATION_RESOURCE group
 */
export const sqrS25LocationResourceSchema = z
  .object({
    AIL: segments.ailSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SQR_S25.LOCATION_RESOURCE",
    version: "2.6",
    description: "HL7 v2.6 SQR_S25.LOCATION_RESOURCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SQR_S25.LOCATION_RESOURCE schema
 */
export type SQR_S25_LOCATION_RESOURCE = z.infer<typeof sqrS25LocationResourceSchema>;

/**
 * SQR_S25.RESOURCES group schema
 * Defines the structure and validation rules for the SQR_S25.RESOURCES group
 */
export const sqrS25ResourcesSchema = z
  .object({
    RGS: segments.rgsSchema,
    SERVICE: z.array(sqrS25ServiceSchema).optional(),
    GENERAL_RESOURCE: z.array(sqrS25GeneralResourceSchema).optional(),
    PERSONNEL_RESOURCE: z.array(sqrS25PersonnelResourceSchema).optional(),
    LOCATION_RESOURCE: z.array(sqrS25LocationResourceSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SQR_S25.RESOURCES",
    version: "2.6",
    description: "HL7 v2.6 SQR_S25.RESOURCES group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SQR_S25.RESOURCES schema
 */
export type SQR_S25_RESOURCES = z.infer<typeof sqrS25ResourcesSchema>;

/**
 * SQR_S25.SCHEDULE group schema
 * Defines the structure and validation rules for the SQR_S25.SCHEDULE group
 */
export const sqrS25ScheduleSchema = z
  .object({
    SCH: segments.schSchema,
    TQ1: z.array(segments.tq1Schema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: sqrS25PatientSchema.optional(),
    RESOURCES: z.array(sqrS25ResourcesSchema)
  })
  .register(hl7v2Metadata, {
    title: "SQR_S25.SCHEDULE",
    version: "2.6",
    description: "HL7 v2.6 SQR_S25.SCHEDULE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SQR_S25.SCHEDULE schema
 */
export type SQR_S25_SCHEDULE = z.infer<typeof sqrS25ScheduleSchema>;

/**
 * SQR_S25 message schema
 * Defines the structure and validation rules for the SQR_S25 message
 */
export const sqr_s25Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    QAK: segments.qakSchema,
    SCHEDULE: z.array(sqrS25ScheduleSchema).optional(),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "SQR_S25",
    version: "2.6",
    description: "HL7 v2.6 SQR_S25 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the SQR_S25 schema
 */
export type SQR_S25 = z.infer<typeof sqr_s25Schema>;

/**
 * Default export for convenience
 */
export default sqr_s25Schema;
