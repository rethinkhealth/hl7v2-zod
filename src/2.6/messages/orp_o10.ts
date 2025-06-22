import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 ORP_O10 Message
 * 
 * HL7 v2.6 ORP_O10 message definition
 * Contains segment definitions and constraints for the ORP_O10 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORP_O10.PATIENT group schema
 * Defines the structure and validation rules for the ORP_O10.PATIENT group
 */
export const orpO10PatientSchema = z.object({
  "PID": segments.pidSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORP_O10.PATIENT",
  version: "2.6",
  description: "HL7 v2.6 ORP_O10.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORP_O10.PATIENT schema
 */
export type ORP_O10_PATIENT = z.infer<typeof orpO10PatientSchema>;

/**
 * ORP_O10.TIMING group schema
 * Defines the structure and validation rules for the ORP_O10.TIMING group
 */
export const orpO10TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORP_O10.TIMING",
  version: "2.6",
  description: "HL7 v2.6 ORP_O10.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORP_O10.TIMING schema
 */
export type ORP_O10_TIMING = z.infer<typeof orpO10TimingSchema>;

/**
 * ORP_O10.COMPONENT group schema
 * Defines the structure and validation rules for the ORP_O10.COMPONENT group
 */
export const orpO10ComponentSchema = z.object({
  "RXC": segments.rxcSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORP_O10.COMPONENT",
  version: "2.6",
  description: "HL7 v2.6 ORP_O10.COMPONENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORP_O10.COMPONENT schema
 */
export type ORP_O10_COMPONENT = z.infer<typeof orpO10ComponentSchema>;

/**
 * ORP_O10.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the ORP_O10.ORDER_DETAIL group
 */
export const orpO10OrderDetailSchema = z.object({
  "RXO": segments.rxoSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "RXR": z.array(segments.rxrSchema),
  "COMPONENT": z.array(orpO10ComponentSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORP_O10.ORDER_DETAIL",
  version: "2.6",
  description: "HL7 v2.6 ORP_O10.ORDER_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORP_O10.ORDER_DETAIL schema
 */
export type ORP_O10_ORDER_DETAIL = z.infer<typeof orpO10OrderDetailSchema>;

/**
 * ORP_O10.ORDER group schema
 * Defines the structure and validation rules for the ORP_O10.ORDER group
 */
export const orpO10OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(orpO10TimingSchema).optional(),
  "ORDER_DETAIL": orpO10OrderDetailSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORP_O10.ORDER",
  version: "2.6",
  description: "HL7 v2.6 ORP_O10.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORP_O10.ORDER schema
 */
export type ORP_O10_ORDER = z.infer<typeof orpO10OrderSchema>;

/**
 * ORP_O10.RESPONSE group schema
 * Defines the structure and validation rules for the ORP_O10.RESPONSE group
 */
export const orpO10ResponseSchema = z.object({
  "PATIENT": orpO10PatientSchema.optional(),
  "ORDER": z.array(orpO10OrderSchema)
}).register(hl7v2Metadata, {
  title: "ORP_O10.RESPONSE",
  version: "2.6",
  description: "HL7 v2.6 ORP_O10.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORP_O10.RESPONSE schema
 */
export type ORP_O10_RESPONSE = z.infer<typeof orpO10ResponseSchema>;

/**
 * ORP_O10 message schema
 * Defines the structure and validation rules for the ORP_O10 message
 */
export const orp_o10Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orpO10ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORP_O10",
  version: "2.6",
  description: "HL7 v2.6 ORP_O10 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORP_O10 schema
 */
export type ORP_O10 = z.infer<typeof orp_o10Schema>;

/**
 * Default export for convenience
 */
export default orp_o10Schema;