import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 UDM_Q05 Message
 * 
 * HL7 v2.7 UDM_Q05 message definition
 * Contains segment definitions and constraints for the UDM_Q05 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * UDM_Q05 message schema
 * Defines the structure and validation rules for the UDM_Q05 message
 */
export const udm_q05Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "URD": segments.urdSchema,
  "URS": segments.ursSchema.optional(),
  "DSP": z.array(segments.dspSchema),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "UDM_Q05",
  version: "2.7",
  description: "HL7 v2.7 UDM_Q05 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the UDM_Q05 schema
 */
export type UDM_Q05 = z.infer<typeof udm_q05Schema>;

/**
 * Default export for convenience
 */
export default udm_q05Schema;