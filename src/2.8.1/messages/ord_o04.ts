import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 ORD_O04 Message
 * 
 * HL7 v2.8 ORD_O04 message definition
 * Contains segment definitions and constraints for the ORD_O04 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORD_O04.PATIENT group schema
 * Defines the structure and validation rules for the ORD_O04.PATIENT group
 */
export const ordO04PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORD_O04.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 ORD_O04.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORD_O04.PATIENT schema
 */
export type ORD_O04_PATIENT = z.infer<typeof ordO04PatientSchema>;

/**
 * ORD_O04.TIMING_DIET group schema
 * Defines the structure and validation rules for the ORD_O04.TIMING_DIET group
 */
export const ordO04TimingDietSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORD_O04.TIMING_DIET",
  version: "2.8",
  description: "HL7 v2.8 ORD_O04.TIMING_DIET group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORD_O04.TIMING_DIET schema
 */
export type ORD_O04_TIMING_DIET = z.infer<typeof ordO04TimingDietSchema>;

/**
 * ORD_O04.TIMING_TRAY group schema
 * Defines the structure and validation rules for the ORD_O04.TIMING_TRAY group
 */
export const ordO04TimingTraySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORD_O04.TIMING_TRAY",
  version: "2.8",
  description: "HL7 v2.8 ORD_O04.TIMING_TRAY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORD_O04.TIMING_TRAY schema
 */
export type ORD_O04_TIMING_TRAY = z.infer<typeof ordO04TimingTraySchema>;

/**
 * ORD_O04.ORDER_DIET group schema
 * Defines the structure and validation rules for the ORD_O04.ORDER_DIET group
 */
export const ordO04OrderDietSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING_DIET": z.array(ordO04TimingDietSchema).optional(),
  "ODS": z.array(segments.odsSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORD_O04.ORDER_DIET",
  version: "2.8",
  description: "HL7 v2.8 ORD_O04.ORDER_DIET group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORD_O04.ORDER_DIET schema
 */
export type ORD_O04_ORDER_DIET = z.infer<typeof ordO04OrderDietSchema>;

/**
 * ORD_O04.ORDER_TRAY group schema
 * Defines the structure and validation rules for the ORD_O04.ORDER_TRAY group
 */
export const ordO04OrderTraySchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING_TRAY": z.array(ordO04TimingTraySchema).optional(),
  "ODT": z.array(segments.odtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORD_O04.ORDER_TRAY",
  version: "2.8",
  description: "HL7 v2.8 ORD_O04.ORDER_TRAY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORD_O04.ORDER_TRAY schema
 */
export type ORD_O04_ORDER_TRAY = z.infer<typeof ordO04OrderTraySchema>;

/**
 * ORD_O04.RESPONSE group schema
 * Defines the structure and validation rules for the ORD_O04.RESPONSE group
 */
export const ordO04ResponseSchema = z.object({
  "PATIENT": ordO04PatientSchema.optional(),
  "ORDER_DIET": z.array(ordO04OrderDietSchema),
  "ORDER_TRAY": z.array(ordO04OrderTraySchema).optional()
}).register(hl7v2Metadata, {
  title: "ORD_O04.RESPONSE",
  version: "2.8",
  description: "HL7 v2.8 ORD_O04.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORD_O04.RESPONSE schema
 */
export type ORD_O04_RESPONSE = z.infer<typeof ordO04ResponseSchema>;

/**
 * ORD_O04 message schema
 * Defines the structure and validation rules for the ORD_O04 message
 */
export const ord_o04Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": ordO04ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORD_O04",
  version: "2.8",
  description: "HL7 v2.8 ORD_O04 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORD_O04 schema
 */
export type ORD_O04 = z.infer<typeof ord_o04Schema>;

/**
 * Default export for convenience
 */
export default ord_o04Schema;