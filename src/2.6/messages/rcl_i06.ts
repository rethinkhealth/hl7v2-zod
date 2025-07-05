import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 RCL_I06 Message
 * 
 * HL7 v2.6 RCL_I06 message definition
 * Contains segment definitions and constraints for the RCL_I06 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RCL_I06.PROVIDER group schema
 * Defines the structure and validation rules for the RCL_I06.PROVIDER group
 */
export const rclI06ProviderSchema = z.object({
  "PRD": segments.prdSchema,
  "CTD": z.array(segments.ctdSchema).optional()
}).register(hl7v2Metadata, {
  title: "RCL_I06.PROVIDER",
  version: "2.6",
  description: "HL7 v2.6 RCL_I06.PROVIDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCL_I06.PROVIDER schema
 */
export type RCL_I06_PROVIDER = z.infer<typeof rclI06ProviderSchema>;

/**
 * RCL_I06 message schema
 * Defines the structure and validation rules for the RCL_I06 message
 */
export const rcl_i06Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "QRD": segments.qrdSchema,
  "QRF": segments.qrfSchema.optional(),
  "PROVIDER": z.array(rclI06ProviderSchema),
  "PID": segments.pidSchema,
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": z.array(segments.drgSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "DSP": z.array(segments.dspSchema).optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RCL_I06",
  version: "2.6",
  description: "HL7 v2.6 RCL_I06 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RCL_I06 schema
 */
export type RCL_I06 = z.infer<typeof rcl_i06Schema>;

/**
 * Default export for convenience
 */
export default rcl_i06Schema;