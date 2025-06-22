import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 MFR_M05 Message
 *
 * HL7 v2.6 MFR_M05 message definition
 * Contains segment definitions and constraints for the MFR_M05 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFR_M05.MF_LOC_DEPT group schema
 * Defines the structure and validation rules for the MFR_M05.MF_LOC_DEPT group
 */
export const mfrM05MfLocDeptSchema = z
  .object({
    LDP: segments.ldpSchema,
    LCH: z.array(segments.lchSchema).optional(),
    LCC: z.array(segments.lccSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'MFR_M05.MF_LOC_DEPT',
    version: '2.6',
    description: 'HL7 v2.6 MFR_M05.MF_LOC_DEPT group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the MFR_M05.MF_LOC_DEPT schema
 */
export type MFR_M05_MF_LOC_DEPT = z.infer<typeof mfrM05MfLocDeptSchema>;

/**
 * MFR_M05.MF_QUERY group schema
 * Defines the structure and validation rules for the MFR_M05.MF_QUERY group
 */
export const mfrM05MfQuerySchema = z
  .object({
    MFE: segments.mfeSchema,
    LOC: segments.locSchema,
    LCH: z.array(segments.lchSchema).optional(),
    LRL: z.array(segments.lrlSchema).optional(),
    MF_LOC_DEPT: z.array(mfrM05MfLocDeptSchema),
  })
  .register(hl7v2Metadata, {
    title: 'MFR_M05.MF_QUERY',
    version: '2.6',
    description: 'HL7 v2.6 MFR_M05.MF_QUERY group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the MFR_M05.MF_QUERY schema
 */
export type MFR_M05_MF_QUERY = z.infer<typeof mfrM05MfQuerySchema>;

/**
 * MFR_M05 message schema
 * Defines the structure and validation rules for the MFR_M05 message
 */
export const mfr_m05Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    QAK: segments.qakSchema.optional(),
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    MFI: segments.mfiSchema,
    MF_QUERY: z.array(mfrM05MfQuerySchema),
    DSC: segments.dscSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'MFR_M05',
    version: '2.6',
    description: 'HL7 v2.6 MFR_M05 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the MFR_M05 schema
 */
export type MFR_M05 = z.infer<typeof mfr_m05Schema>;

/**
 * Default export for convenience
 */
export default mfr_m05Schema;
