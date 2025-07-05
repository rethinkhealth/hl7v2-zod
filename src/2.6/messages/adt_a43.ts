import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 ADT_A43 Message
 * 
 * HL7 v2.6 ADT_A43 message definition
 * Contains segment definitions and constraints for the ADT_A43 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A43.PATIENT group schema
 * Defines the structure and validation rules for the ADT_A43.PATIENT group
 */
export const adtA43PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "MRG": segments.mrgSchema
}).register(hl7v2Metadata, {
  title: "ADT_A43.PATIENT",
  version: "2.6",
  description: "HL7 v2.6 ADT_A43.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A43.PATIENT schema
 */
export type ADT_A43_PATIENT = z.infer<typeof adtA43PatientSchema>;

/**
 * ADT_A43 message schema
 * Defines the structure and validation rules for the ADT_A43 message
 */
export const adt_a43Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PATIENT": z.array(adtA43PatientSchema)
}).register(hl7v2Metadata, {
  title: "ADT_A43",
  version: "2.6",
  description: "HL7 v2.6 ADT_A43 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A43 schema
 */
export type ADT_A43 = z.infer<typeof adt_a43Schema>;

/**
 * Default export for convenience
 */
export default adt_a43Schema;