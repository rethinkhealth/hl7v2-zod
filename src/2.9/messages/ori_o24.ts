import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ORI_O24 Message
 * 
 * HL7 v2.9 ORI_O24 message definition
 * Contains segment definitions and constraints for the ORI_O24 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORI_O24.PATIENT group schema
 * Defines the structure and validation rules for the ORI_O24.PATIENT group
 */
export const oriO24PatientSchema = z.object({
  "PID": segments.pidSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORI_O24.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 ORI_O24.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORI_O24.PATIENT schema
 */
export type ORI_O24_PATIENT = z.infer<typeof oriO24PatientSchema>;

/**
 * ORI_O24.TIMING group schema
 * Defines the structure and validation rules for the ORI_O24.TIMING group
 */
export const oriO24TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORI_O24.TIMING",
  version: "2.9",
  description: "HL7 v2.9 ORI_O24.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORI_O24.TIMING schema
 */
export type ORI_O24_TIMING = z.infer<typeof oriO24TimingSchema>;

/**
 * ORI_O24.ORDER group schema
 * Defines the structure and validation rules for the ORI_O24.ORDER group
 */
export const oriO24OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(oriO24TimingSchema).optional(),
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT_1": z.array(segments.prtSchema).optional(),
  "IPC": z.array(segments.ipcSchema)
}).register(hl7v2Metadata, {
  title: "ORI_O24.ORDER",
  version: "2.9",
  description: "HL7 v2.9 ORI_O24.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORI_O24.ORDER schema
 */
export type ORI_O24_ORDER = z.infer<typeof oriO24OrderSchema>;

/**
 * ORI_O24.RESPONSE group schema
 * Defines the structure and validation rules for the ORI_O24.RESPONSE group
 */
export const oriO24ResponseSchema = z.object({
  "PATIENT": oriO24PatientSchema.optional(),
  "ORDER": z.array(oriO24OrderSchema)
}).register(hl7v2Metadata, {
  title: "ORI_O24.RESPONSE",
  version: "2.9",
  description: "HL7 v2.9 ORI_O24.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORI_O24.RESPONSE schema
 */
export type ORI_O24_RESPONSE = z.infer<typeof oriO24ResponseSchema>;

/**
 * ORI_O24 message schema
 * Defines the structure and validation rules for the ORI_O24 message
 */
export const ori_o24Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": oriO24ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORI_O24",
  version: "2.9",
  description: "HL7 v2.9 ORI_O24 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORI_O24 schema
 */
export type ORI_O24 = z.infer<typeof ori_o24Schema>;

/**
 * Default export for convenience
 */
export default ori_o24Schema;