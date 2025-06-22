import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 OSR_Q06 Message
 * 
 * HL7 v2.6 OSR_Q06 message definition
 * Contains segment definitions and constraints for the OSR_Q06 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OSR_Q06.PATIENT group schema
 * Defines the structure and validation rules for the OSR_Q06.PATIENT group
 */
export const osrQ06PatientSchema = z.object({
  "PID": segments.pidSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "OSR_Q06.PATIENT",
  version: "2.6",
  description: "HL7 v2.6 OSR_Q06.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OSR_Q06.PATIENT schema
 */
export type OSR_Q06_PATIENT = z.infer<typeof osrQ06PatientSchema>;

/**
 * OSR_Q06.TIMING group schema
 * Defines the structure and validation rules for the OSR_Q06.TIMING group
 */
export const osrQ06TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "OSR_Q06.TIMING",
  version: "2.6",
  description: "HL7 v2.6 OSR_Q06.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OSR_Q06.TIMING schema
 */
export type OSR_Q06_TIMING = z.infer<typeof osrQ06TimingSchema>;

/**
 * OSR_Q06.CHOICE group schema
 * Defines the structure and validation rules for the OSR_Q06.CHOICE group
 */
export const osrQ06ChoiceSchema = z.object({
  "OBR": segments.obrSchema,
  "RQD": segments.rqdSchema,
  "RQ1": segments.rq1Schema,
  "RXO": segments.rxoSchema,
  "ODS": segments.odsSchema,
  "ODT": segments.odtSchema
}).register(hl7v2Metadata, {
  title: "OSR_Q06.CHOICE",
  version: "2.6",
  description: "HL7 v2.6 OSR_Q06.CHOICE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OSR_Q06.CHOICE schema
 */
export type OSR_Q06_CHOICE = z.infer<typeof osrQ06ChoiceSchema>;

/**
 * OSR_Q06.ORDER group schema
 * Defines the structure and validation rules for the OSR_Q06.ORDER group
 */
export const osrQ06OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(osrQ06TimingSchema).optional(),
  "CHOICE": osrQ06ChoiceSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "CTI": z.array(segments.ctiSchema).optional()
}).register(hl7v2Metadata, {
  title: "OSR_Q06.ORDER",
  version: "2.6",
  description: "HL7 v2.6 OSR_Q06.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OSR_Q06.ORDER schema
 */
export type OSR_Q06_ORDER = z.infer<typeof osrQ06OrderSchema>;

/**
 * OSR_Q06.RESPONSE group schema
 * Defines the structure and validation rules for the OSR_Q06.RESPONSE group
 */
export const osrQ06ResponseSchema = z.object({
  "PATIENT": osrQ06PatientSchema.optional(),
  "ORDER": z.array(osrQ06OrderSchema)
}).register(hl7v2Metadata, {
  title: "OSR_Q06.RESPONSE",
  version: "2.6",
  description: "HL7 v2.6 OSR_Q06.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OSR_Q06.RESPONSE schema
 */
export type OSR_Q06_RESPONSE = z.infer<typeof osrQ06ResponseSchema>;

/**
 * OSR_Q06 message schema
 * Defines the structure and validation rules for the OSR_Q06 message
 */
export const osr_q06Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "QRD": segments.qrdSchema,
  "QRF": segments.qrfSchema.optional(),
  "RESPONSE": osrQ06ResponseSchema.optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "OSR_Q06",
  version: "2.6",
  description: "HL7 v2.6 OSR_Q06 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OSR_Q06 schema
 */
export type OSR_Q06 = z.infer<typeof osr_q06Schema>;

/**
 * Default export for convenience
 */
export default osr_q06Schema;