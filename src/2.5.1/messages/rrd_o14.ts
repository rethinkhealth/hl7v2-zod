import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 RRD_O14 Message
 * 
 * HL7 v2.5 RRD_O14 message definition
 * Contains segment definitions and constraints for the RRD_O14 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RRD_O14.PATIENT group schema
 * Defines the structure and validation rules for the RRD_O14.PATIENT group
 */
export const rrdO14PatientSchema = z.object({
  "PID": segments.pidSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RRD_O14.PATIENT",
  version: "2.5",
  description: "HL7 v2.5 RRD_O14.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRD_O14.PATIENT schema
 */
export type RRD_O14_PATIENT = z.infer<typeof rrdO14PatientSchema>;

/**
 * RRD_O14.TIMING group schema
 * Defines the structure and validation rules for the RRD_O14.TIMING group
 */
export const rrdO14TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RRD_O14.TIMING",
  version: "2.5",
  description: "HL7 v2.5 RRD_O14.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRD_O14.TIMING schema
 */
export type RRD_O14_TIMING = z.infer<typeof rrdO14TimingSchema>;

/**
 * RRD_O14.DISPENSE group schema
 * Defines the structure and validation rules for the RRD_O14.DISPENSE group
 */
export const rrdO14DispenseSchema = z.object({
  "RXD": segments.rxdSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional()
}).register(hl7v2Metadata, {
  title: "RRD_O14.DISPENSE",
  version: "2.5",
  description: "HL7 v2.5 RRD_O14.DISPENSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRD_O14.DISPENSE schema
 */
export type RRD_O14_DISPENSE = z.infer<typeof rrdO14DispenseSchema>;

/**
 * RRD_O14.ORDER group schema
 * Defines the structure and validation rules for the RRD_O14.ORDER group
 */
export const rrdO14OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(rrdO14TimingSchema).optional(),
  "DISPENSE": rrdO14DispenseSchema.optional()
}).register(hl7v2Metadata, {
  title: "RRD_O14.ORDER",
  version: "2.5",
  description: "HL7 v2.5 RRD_O14.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRD_O14.ORDER schema
 */
export type RRD_O14_ORDER = z.infer<typeof rrdO14OrderSchema>;

/**
 * RRD_O14.RESPONSE group schema
 * Defines the structure and validation rules for the RRD_O14.RESPONSE group
 */
export const rrdO14ResponseSchema = z.object({
  "PATIENT": rrdO14PatientSchema.optional(),
  "ORDER": z.array(rrdO14OrderSchema)
}).register(hl7v2Metadata, {
  title: "RRD_O14.RESPONSE",
  version: "2.5",
  description: "HL7 v2.5 RRD_O14.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RRD_O14.RESPONSE schema
 */
export type RRD_O14_RESPONSE = z.infer<typeof rrdO14ResponseSchema>;

/**
 * RRD_O14 message schema
 * Defines the structure and validation rules for the RRD_O14 message
 */
export const rrd_o14Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": rrdO14ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "RRD_O14",
  version: "2.5",
  description: "HL7 v2.5 RRD_O14 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RRD_O14 schema
 */
export type RRD_O14 = z.infer<typeof rrd_o14Schema>;

/**
 * Default export for convenience
 */
export default rrd_o14Schema;