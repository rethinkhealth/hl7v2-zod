import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 SQM_S25 Message
 *
 * HL7 v2.6 SQM_S25 message definition
 * Contains segment definitions and constraints for the SQM_S25 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SQM_S25.SERVICE group schema
 * Defines the structure and validation rules for the SQM_S25.SERVICE group
 */
export const sqmS25ServiceSchema = z
  .object({
    AIS: segments.aisSchema,
    APR: segments.aprSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'SQM_S25.SERVICE',
    version: '2.6',
    description: 'HL7 v2.6 SQM_S25.SERVICE group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the SQM_S25.SERVICE schema
 */
export type SQM_S25_SERVICE = z.infer<typeof sqmS25ServiceSchema>;

/**
 * SQM_S25.GENERAL_RESOURCE group schema
 * Defines the structure and validation rules for the SQM_S25.GENERAL_RESOURCE group
 */
export const sqmS25GeneralResourceSchema = z
  .object({
    AIG: segments.aigSchema,
    APR: segments.aprSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'SQM_S25.GENERAL_RESOURCE',
    version: '2.6',
    description: 'HL7 v2.6 SQM_S25.GENERAL_RESOURCE group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the SQM_S25.GENERAL_RESOURCE schema
 */
export type SQM_S25_GENERAL_RESOURCE = z.infer<typeof sqmS25GeneralResourceSchema>;

/**
 * SQM_S25.PERSONNEL_RESOURCE group schema
 * Defines the structure and validation rules for the SQM_S25.PERSONNEL_RESOURCE group
 */
export const sqmS25PersonnelResourceSchema = z
  .object({
    AIP: segments.aipSchema,
    APR: segments.aprSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'SQM_S25.PERSONNEL_RESOURCE',
    version: '2.6',
    description: 'HL7 v2.6 SQM_S25.PERSONNEL_RESOURCE group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the SQM_S25.PERSONNEL_RESOURCE schema
 */
export type SQM_S25_PERSONNEL_RESOURCE = z.infer<typeof sqmS25PersonnelResourceSchema>;

/**
 * SQM_S25.LOCATION_RESOURCE group schema
 * Defines the structure and validation rules for the SQM_S25.LOCATION_RESOURCE group
 */
export const sqmS25LocationResourceSchema = z
  .object({
    AIL: segments.ailSchema,
    APR: segments.aprSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'SQM_S25.LOCATION_RESOURCE',
    version: '2.6',
    description: 'HL7 v2.6 SQM_S25.LOCATION_RESOURCE group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the SQM_S25.LOCATION_RESOURCE schema
 */
export type SQM_S25_LOCATION_RESOURCE = z.infer<typeof sqmS25LocationResourceSchema>;

/**
 * SQM_S25.RESOURCES group schema
 * Defines the structure and validation rules for the SQM_S25.RESOURCES group
 */
export const sqmS25ResourcesSchema = z
  .object({
    RGS: segments.rgsSchema,
    SERVICE: z.array(sqmS25ServiceSchema).optional(),
    GENERAL_RESOURCE: z.array(sqmS25GeneralResourceSchema).optional(),
    PERSONNEL_RESOURCE: z.array(sqmS25PersonnelResourceSchema).optional(),
    LOCATION_RESOURCE: z.array(sqmS25LocationResourceSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'SQM_S25.RESOURCES',
    version: '2.6',
    description: 'HL7 v2.6 SQM_S25.RESOURCES group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the SQM_S25.RESOURCES schema
 */
export type SQM_S25_RESOURCES = z.infer<typeof sqmS25ResourcesSchema>;

/**
 * SQM_S25.REQUEST group schema
 * Defines the structure and validation rules for the SQM_S25.REQUEST group
 */
export const sqmS25RequestSchema = z
  .object({
    ARQ: segments.arqSchema,
    APR: segments.aprSchema.optional(),
    PID: segments.pidSchema.optional(),
    RESOURCES: z.array(sqmS25ResourcesSchema),
  })
  .register(hl7v2Metadata, {
    title: 'SQM_S25.REQUEST',
    version: '2.6',
    description: 'HL7 v2.6 SQM_S25.REQUEST group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the SQM_S25.REQUEST schema
 */
export type SQM_S25_REQUEST = z.infer<typeof sqmS25RequestSchema>;

/**
 * SQM_S25 message schema
 * Defines the structure and validation rules for the SQM_S25 message
 */
export const sqm_s25Schema = z
  .object({
    MSH: segments.mshSchema,
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    REQUEST: sqmS25RequestSchema.optional(),
    DSC: segments.dscSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'SQM_S25',
    version: '2.6',
    description: 'HL7 v2.6 SQM_S25 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the SQM_S25 schema
 */
export type SQM_S25 = z.infer<typeof sqm_s25Schema>;

/**
 * Default export for convenience
 */
export default sqm_s25Schema;
