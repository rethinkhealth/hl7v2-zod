import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 ADT_A44 Message
 * 
 * HL7 v2.8 ADT_A44 message definition
 * Contains segment definitions and constraints for the ADT_A44 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A44.PATIENT group schema
 * Defines the structure and validation rules for the ADT_A44.PATIENT group
 */
export const adtA44PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "MRG": segments.mrgSchema
}).register(hl7v2Metadata, {
  title: "ADT_A44.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 ADT_A44.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A44.PATIENT schema
 */
export type ADT_A44_PATIENT = z.infer<typeof adtA44PatientSchema>;

/**
 * ADT_A44 message schema
 * Defines the structure and validation rules for the ADT_A44 message
 */
export const adt_a44Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PATIENT": z.array(adtA44PatientSchema)
}).register(hl7v2Metadata, {
  title: "ADT_A44",
  version: "2.8",
  description: "HL7 v2.8 ADT_A44 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A44 schema
 */
export type ADT_A44 = z.infer<typeof adt_a44Schema>;

/**
 * Default export for convenience
 */
export default adt_a44Schema;