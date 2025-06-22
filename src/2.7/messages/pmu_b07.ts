import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 PMU_B07 Message
 * 
 * HL7 v2.7 PMU_B07 message definition
 * Contains segment definitions and constraints for the PMU_B07 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PMU_B07.CERTIFICATE group schema
 * Defines the structure and validation rules for the PMU_B07.CERTIFICATE group
 */
export const pmuB07CertificateSchema = z.object({
  "CER": segments.cerSchema,
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "PMU_B07.CERTIFICATE",
  version: "2.7",
  description: "HL7 v2.7 PMU_B07.CERTIFICATE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the PMU_B07.CERTIFICATE schema
 */
export type PMU_B07_CERTIFICATE = z.infer<typeof pmuB07CertificateSchema>;

/**
 * PMU_B07 message schema
 * Defines the structure and validation rules for the PMU_B07 message
 */
export const pmu_b07Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "STF": segments.stfSchema,
  "PRA": segments.praSchema.optional(),
  "CERTIFICATE": z.array(pmuB07CertificateSchema).optional()
}).register(hl7v2Metadata, {
  title: "PMU_B07",
  version: "2.7",
  description: "HL7 v2.7 PMU_B07 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the PMU_B07 schema
 */
export type PMU_B07 = z.infer<typeof pmu_b07Schema>;

/**
 * Default export for convenience
 */
export default pmu_b07Schema;