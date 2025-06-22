import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 MFN_M06 Message
 *
 * HL7 v2.6 MFN_M06 message definition
 * Contains segment definitions and constraints for the MFN_M06 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M06.MF_PHASE_SCHED_DETAIL group schema
 * Defines the structure and validation rules for the MFN_M06.MF_PHASE_SCHED_DETAIL group
 */
export const mfnM06MfPhaseSchedDetailSchema = z
  .object({
    CM1: segments.cm1Schema,
    CM2: z.array(segments.cm2Schema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'MFN_M06.MF_PHASE_SCHED_DETAIL',
    version: '2.6',
    description: 'HL7 v2.6 MFN_M06.MF_PHASE_SCHED_DETAIL group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the MFN_M06.MF_PHASE_SCHED_DETAIL schema
 */
export type MFN_M06_MF_PHASE_SCHED_DETAIL = z.infer<typeof mfnM06MfPhaseSchedDetailSchema>;

/**
 * MFN_M06.MF_CLIN_STUDY group schema
 * Defines the structure and validation rules for the MFN_M06.MF_CLIN_STUDY group
 */
export const mfnM06MfClinStudySchema = z
  .object({
    MFE: segments.mfeSchema,
    CM0: segments.cm0Schema,
    MF_PHASE_SCHED_DETAIL: z.array(mfnM06MfPhaseSchedDetailSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'MFN_M06.MF_CLIN_STUDY',
    version: '2.6',
    description: 'HL7 v2.6 MFN_M06.MF_CLIN_STUDY group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the MFN_M06.MF_CLIN_STUDY schema
 */
export type MFN_M06_MF_CLIN_STUDY = z.infer<typeof mfnM06MfClinStudySchema>;

/**
 * MFN_M06 message schema
 * Defines the structure and validation rules for the MFN_M06 message
 */
export const mfn_m06Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MFI: segments.mfiSchema,
    MF_CLIN_STUDY: z.array(mfnM06MfClinStudySchema),
  })
  .register(hl7v2Metadata, {
    title: 'MFN_M06',
    version: '2.6',
    description: 'HL7 v2.6 MFN_M06 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the MFN_M06 schema
 */
export type MFN_M06 = z.infer<typeof mfn_m06Schema>;

/**
 * Default export for convenience
 */
export default mfn_m06Schema;
