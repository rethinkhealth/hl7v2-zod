import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 ADT_A60 Message
 * 
 * HL7 v2.5 ADT_A60 message definition
 * Contains segment definitions and constraints for the ADT_A60 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */



/**
 * ADT_A60 message schema
 * Defines the structure and validation rules for the ADT_A60 message
 */
export const adt_a60Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PV1": segments.pv1Schema.optional(),
  "PV2": segments.pv2Schema.optional(),
  "IAM": z.array(segments.iamSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A60",
  version: "2.5",
  description: "HL7 v2.5 ADT_A60 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A60 schema
 */
export type ADT_A60 = z.infer<typeof adt_a60Schema>;

/**
 * Default export for convenience
 */
export default adt_a60Schema;