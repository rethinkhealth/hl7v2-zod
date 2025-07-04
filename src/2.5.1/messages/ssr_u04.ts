import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 SSR_U04 Message
 * 
 * HL7 v2.5 SSR_U04 message definition
 * Contains segment definitions and constraints for the SSR_U04 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SSR_U04.SPECIMEN_CONTAINER group schema
 * Defines the structure and validation rules for the SSR_U04.SPECIMEN_CONTAINER group
 */
export const ssrU04SpecimenContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "SPM": z.array(segments.spmSchema).optional()
}).register(hl7v2Metadata, {
  title: "SSR_U04.SPECIMEN_CONTAINER",
  version: "2.5",
  description: "HL7 v2.5 SSR_U04.SPECIMEN_CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the SSR_U04.SPECIMEN_CONTAINER schema
 */
export type SSR_U04_SPECIMEN_CONTAINER = z.infer<typeof ssrU04SpecimenContainerSchema>;

/**
 * SSR_U04 message schema
 * Defines the structure and validation rules for the SSR_U04 message
 */
export const ssr_u04Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "EQU": segments.equSchema,
  "SPECIMEN_CONTAINER": z.array(ssrU04SpecimenContainerSchema),
  "ROL": segments.rolSchema.optional()
}).register(hl7v2Metadata, {
  title: "SSR_U04",
  version: "2.5",
  description: "HL7 v2.5 SSR_U04 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the SSR_U04 schema
 */
export type SSR_U04 = z.infer<typeof ssr_u04Schema>;

/**
 * Default export for convenience
 */
export default ssr_u04Schema;