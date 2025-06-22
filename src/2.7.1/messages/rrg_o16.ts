import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 RRG_O16 Message
 * 
 * HL7 v2.7 RRG_O16 message definition
 * Contains segment definitions and constraints for the RRG_O16 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RRG_O16.PATIENT group schema
 * Defines the structure and validation rules for the RRG_O16.PATIENT group
 */
export const rrgO16PatientSchema = z.object({
  "PID": segments.pidSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RRG_O16.PATIENT",
  version: "2.7",
  description: "HL7 v2.7 RRG_O16.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRG_O16.PATIENT schema
 */
export type RRG_O16_PATIENT = z.infer<typeof rrgO16PatientSchema>;

/**
 * RRG_O16.TIMING group schema
 * Defines the structure and validation rules for the RRG_O16.TIMING group
 */
export const rrgO16TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RRG_O16.TIMING",
  version: "2.7",
  description: "HL7 v2.7 RRG_O16.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRG_O16.TIMING schema
 */
export type RRG_O16_TIMING = z.infer<typeof rrgO16TimingSchema>;

/**
 * RRG_O16.TIMING_GIVE group schema
 * Defines the structure and validation rules for the RRG_O16.TIMING_GIVE group
 */
export const rrgO16TimingGiveSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RRG_O16.TIMING_GIVE",
  version: "2.7",
  description: "HL7 v2.7 RRG_O16.TIMING_GIVE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRG_O16.TIMING_GIVE schema
 */
export type RRG_O16_TIMING_GIVE = z.infer<typeof rrgO16TimingGiveSchema>;

/**
 * RRG_O16.GIVE group schema
 * Defines the structure and validation rules for the RRG_O16.GIVE group
 */
export const rrgO16GiveSchema = z.object({
  "RXG": segments.rxgSchema,
  "TIMING_GIVE": z.array(rrgO16TimingGiveSchema),
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional()
}).register(hl7v2Metadata, {
  title: "RRG_O16.GIVE",
  version: "2.7",
  description: "HL7 v2.7 RRG_O16.GIVE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRG_O16.GIVE schema
 */
export type RRG_O16_GIVE = z.infer<typeof rrgO16GiveSchema>;

/**
 * RRG_O16.ORDER group schema
 * Defines the structure and validation rules for the RRG_O16.ORDER group
 */
export const rrgO16OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(rrgO16TimingSchema).optional(),
  "GIVE": rrgO16GiveSchema.optional()
}).register(hl7v2Metadata, {
  title: "RRG_O16.ORDER",
  version: "2.7",
  description: "HL7 v2.7 RRG_O16.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRG_O16.ORDER schema
 */
export type RRG_O16_ORDER = z.infer<typeof rrgO16OrderSchema>;

/**
 * RRG_O16.RESPONSE group schema
 * Defines the structure and validation rules for the RRG_O16.RESPONSE group
 */
export const rrgO16ResponseSchema = z.object({
  "PATIENT": rrgO16PatientSchema.optional(),
  "ORDER": z.array(rrgO16OrderSchema)
}).register(hl7v2Metadata, {
  title: "RRG_O16.RESPONSE",
  version: "2.7",
  description: "HL7 v2.7 RRG_O16.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRG_O16.RESPONSE schema
 */
export type RRG_O16_RESPONSE = z.infer<typeof rrgO16ResponseSchema>;

/**
 * RRG_O16 message schema
 * Defines the structure and validation rules for the RRG_O16 message
 */
export const rrg_o16Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": rrgO16ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "RRG_O16",
  version: "2.7",
  description: "HL7 v2.7 RRG_O16 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RRG_O16 schema
 */
export type RRG_O16 = z.infer<typeof rrg_o16Schema>;

/**
 * Default export for convenience
 */
export default rrg_o16Schema;