import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 MFN_M07 Message
 *
 * HL7 v2.6 MFN_M07 message definition
 * Contains segment definitions and constraints for the MFN_M07 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFN_M07.MF_CLIN_STUDY_SCHED group schema
 * Defines the structure and validation rules for the MFN_M07.MF_CLIN_STUDY_SCHED group
 */
export const mfnM07MfClinStudySchedSchema = z
  .object({
    MFE: segments.mfeSchema,
    CM0: segments.cm0Schema,
    CM2: z.array(segments.cm2Schema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'MFN_M07.MF_CLIN_STUDY_SCHED',
    version: '2.6',
    description: 'HL7 v2.6 MFN_M07.MF_CLIN_STUDY_SCHED group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the MFN_M07.MF_CLIN_STUDY_SCHED schema
 */
export type MFN_M07_MF_CLIN_STUDY_SCHED = z.infer<typeof mfnM07MfClinStudySchedSchema>;

/**
 * MFN_M07 message schema
 * Defines the structure and validation rules for the MFN_M07 message
 */
export const mfn_m07Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MFI: segments.mfiSchema,
    MF_CLIN_STUDY_SCHED: z.array(mfnM07MfClinStudySchedSchema),
  })
  .register(hl7v2Metadata, {
    title: 'MFN_M07',
    version: '2.6',
    description: 'HL7 v2.6 MFN_M07 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the MFN_M07 schema
 */
export type MFN_M07 = z.infer<typeof mfn_m07Schema>;

/**
 * Default export for convenience
 */
export default mfn_m07Schema;
