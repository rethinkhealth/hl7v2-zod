import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 ORN_O08 Message
 * 
 * HL7 v2.7 ORN_O08 message definition
 * Contains segment definitions and constraints for the ORN_O08 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORN_O08.PATIENT group schema
 * Defines the structure and validation rules for the ORN_O08.PATIENT group
 */
export const ornO08PatientSchema = z.object({
  "PID": segments.pidSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORN_O08.PATIENT",
  version: "2.7",
  description: "HL7 v2.7 ORN_O08.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORN_O08.PATIENT schema
 */
export type ORN_O08_PATIENT = z.infer<typeof ornO08PatientSchema>;

/**
 * ORN_O08.TIMING group schema
 * Defines the structure and validation rules for the ORN_O08.TIMING group
 */
export const ornO08TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORN_O08.TIMING",
  version: "2.7",
  description: "HL7 v2.7 ORN_O08.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORN_O08.TIMING schema
 */
export type ORN_O08_TIMING = z.infer<typeof ornO08TimingSchema>;

/**
 * ORN_O08.ORDER group schema
 * Defines the structure and validation rules for the ORN_O08.ORDER group
 */
export const ornO08OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(ornO08TimingSchema).optional(),
  "RQD": segments.rqdSchema,
  "RQ1": segments.rq1Schema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORN_O08.ORDER",
  version: "2.7",
  description: "HL7 v2.7 ORN_O08.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORN_O08.ORDER schema
 */
export type ORN_O08_ORDER = z.infer<typeof ornO08OrderSchema>;

/**
 * ORN_O08.RESPONSE group schema
 * Defines the structure and validation rules for the ORN_O08.RESPONSE group
 */
export const ornO08ResponseSchema = z.object({
  "PATIENT": ornO08PatientSchema.optional(),
  "ORDER": z.array(ornO08OrderSchema)
}).register(hl7v2Metadata, {
  title: "ORN_O08.RESPONSE",
  version: "2.7",
  description: "HL7 v2.7 ORN_O08.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORN_O08.RESPONSE schema
 */
export type ORN_O08_RESPONSE = z.infer<typeof ornO08ResponseSchema>;

/**
 * ORN_O08 message schema
 * Defines the structure and validation rules for the ORN_O08 message
 */
export const orn_o08Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": ornO08ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORN_O08",
  version: "2.7",
  description: "HL7 v2.7 ORN_O08 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORN_O08 schema
 */
export type ORN_O08 = z.infer<typeof orn_o08Schema>;

/**
 * Default export for convenience
 */
export default orn_o08Schema;