import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 ADT_A39 Message
 * 
 * HL7 v2.7 ADT_A39 message definition
 * Contains segment definitions and constraints for the ADT_A39 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A39.PATIENT group schema
 * Defines the structure and validation rules for the ADT_A39.PATIENT group
 */
export const adtA39PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "MRG": segments.mrgSchema,
  "PV1": segments.pv1Schema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A39.PATIENT",
  version: "2.7",
  description: "HL7 v2.7 ADT_A39.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A39.PATIENT schema
 */
export type ADT_A39_PATIENT = z.infer<typeof adtA39PatientSchema>;

/**
 * ADT_A39 message schema
 * Defines the structure and validation rules for the ADT_A39 message
 */
export const adt_a39Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PATIENT": z.array(adtA39PatientSchema)
}).register(hl7v2Metadata, {
  title: "ADT_A39",
  version: "2.7",
  description: "HL7 v2.7 ADT_A39 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A39 schema
 */
export type ADT_A39 = z.infer<typeof adt_a39Schema>;

/**
 * Default export for convenience
 */
export default adt_a39Schema;