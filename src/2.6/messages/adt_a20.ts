import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 ADT_A20 Message
 * 
 * HL7 v2.6 ADT_A20 message definition
 * Contains segment definitions and constraints for the ADT_A20 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * ADT_A20 message schema
 * Defines the structure and validation rules for the ADT_A20 message
 */
export const adt_a20Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "NPU": segments.npuSchema
}).register(hl7v2Metadata, {
  title: "ADT_A20",
  version: "2.6",
  description: "HL7 v2.6 ADT_A20 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A20 schema
 */
export type ADT_A20 = z.infer<typeof adt_a20Schema>;

/**
 * Default export for convenience
 */
export default adt_a20Schema;