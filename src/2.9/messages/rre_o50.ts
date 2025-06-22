import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 RRE_O50 Message
 * 
 * HL7 v2.9 RRE_O50 message definition
 * Contains segment definitions and constraints for the RRE_O50 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RRE_O50.PATIENT group schema
 * Defines the structure and validation rules for the RRE_O50.PATIENT group
 */
export const rreO50PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RRE_O50.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 RRE_O50.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRE_O50.PATIENT schema
 */
export type RRE_O50_PATIENT = z.infer<typeof rreO50PatientSchema>;

/**
 * RRE_O50.TIMING group schema
 * Defines the structure and validation rules for the RRE_O50.TIMING group
 */
export const rreO50TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RRE_O50.TIMING",
  version: "2.9",
  description: "HL7 v2.9 RRE_O50.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRE_O50.TIMING schema
 */
export type RRE_O50_TIMING = z.infer<typeof rreO50TimingSchema>;

/**
 * RRE_O50.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RRE_O50.TIMING_ENCODED group
 */
export const rreO50TimingEncodedSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RRE_O50.TIMING_ENCODED",
  version: "2.9",
  description: "HL7 v2.9 RRE_O50.TIMING_ENCODED group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRE_O50.TIMING_ENCODED schema
 */
export type RRE_O50_TIMING_ENCODED = z.infer<typeof rreO50TimingEncodedSchema>;

/**
 * RRE_O50.ENCODING group schema
 * Defines the structure and validation rules for the RRE_O50.ENCODING group
 */
export const rreO50EncodingSchema = z.object({
  "RXE": segments.rxeSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "TIMING_ENCODED": z.array(rreO50TimingEncodedSchema),
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional()
}).register(hl7v2Metadata, {
  title: "RRE_O50.ENCODING",
  version: "2.9",
  description: "HL7 v2.9 RRE_O50.ENCODING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRE_O50.ENCODING schema
 */
export type RRE_O50_ENCODING = z.infer<typeof rreO50EncodingSchema>;

/**
 * RRE_O50.ORDER group schema
 * Defines the structure and validation rules for the RRE_O50.ORDER group
 */
export const rreO50OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(rreO50TimingSchema).optional(),
  "ENCODING": rreO50EncodingSchema.optional(),
  "PRT_1": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "RRE_O50.ORDER",
  version: "2.9",
  description: "HL7 v2.9 RRE_O50.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRE_O50.ORDER schema
 */
export type RRE_O50_ORDER = z.infer<typeof rreO50OrderSchema>;

/**
 * RRE_O50.RESPONSE group schema
 * Defines the structure and validation rules for the RRE_O50.RESPONSE group
 */
export const rreO50ResponseSchema = z.object({
  "PATIENT": rreO50PatientSchema.optional(),
  "ORDER": z.array(rreO50OrderSchema)
}).register(hl7v2Metadata, {
  title: "RRE_O50.RESPONSE",
  version: "2.9",
  description: "HL7 v2.9 RRE_O50.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRE_O50.RESPONSE schema
 */
export type RRE_O50_RESPONSE = z.infer<typeof rreO50ResponseSchema>;

/**
 * RRE_O50 message schema
 * Defines the structure and validation rules for the RRE_O50 message
 */
export const rre_o50Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": rreO50ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "RRE_O50",
  version: "2.9",
  description: "HL7 v2.9 RRE_O50 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RRE_O50 schema
 */
export type RRE_O50 = z.infer<typeof rre_o50Schema>;

/**
 * Default export for convenience
 */
export default rre_o50Schema;