import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 ADT_A52 Message
 * 
 * HL7 v2.7 ADT_A52 message definition
 * Contains segment definitions and constraints for the ADT_A52 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * ADT_A52 message schema
 * Defines the structure and validation rules for the ADT_A52 message
 */
export const adt_a52Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A52",
  version: "2.7",
  description: "HL7 v2.7 ADT_A52 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A52 schema
 */
export type ADT_A52 = z.infer<typeof adt_a52Schema>;

/**
 * Default export for convenience
 */
export default adt_a52Schema;