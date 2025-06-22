import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 BAR_P06 Message
 * 
 * HL7 v2.8 BAR_P06 message definition
 * Contains segment definitions and constraints for the BAR_P06 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BAR_P06.PATIENT group schema
 * Defines the structure and validation rules for the BAR_P06.PATIENT group
 */
export const barP06PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PV1": segments.pv1Schema.optional()
}).register(hl7v2Metadata, {
  title: "BAR_P06.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 BAR_P06.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the BAR_P06.PATIENT schema
 */
export type BAR_P06_PATIENT = z.infer<typeof barP06PatientSchema>;

/**
 * BAR_P06 message schema
 * Defines the structure and validation rules for the BAR_P06 message
 */
export const bar_p06Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PATIENT": z.array(barP06PatientSchema)
}).register(hl7v2Metadata, {
  title: "BAR_P06",
  version: "2.8",
  description: "HL7 v2.8 BAR_P06 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the BAR_P06 schema
 */
export type BAR_P06 = z.infer<typeof bar_p06Schema>;

/**
 * Default export for convenience
 */
export default bar_p06Schema;