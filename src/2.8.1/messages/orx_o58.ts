import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 ORX_O58 Message
 * 
 * HL7 v2.8 ORX_O58 message definition
 * Contains segment definitions and constraints for the ORX_O58 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORX_O58.PATIENT group schema
 * Defines the structure and validation rules for the ORX_O58.PATIENT group
 */
export const orxO58PatientSchema = z.object({
  "PID": segments.pidSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORX_O58.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 ORX_O58.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORX_O58.PATIENT schema
 */
export type ORX_O58_PATIENT = z.infer<typeof orxO58PatientSchema>;

/**
 * ORX_O58.ORDER group schema
 * Defines the structure and validation rules for the ORX_O58.ORDER group
 */
export const orxO58OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TXA": segments.txaSchema,
  "CTI": z.array(segments.ctiSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORX_O58.ORDER",
  version: "2.8",
  description: "HL7 v2.8 ORX_O58.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORX_O58.ORDER schema
 */
export type ORX_O58_ORDER = z.infer<typeof orxO58OrderSchema>;

/**
 * ORX_O58.RESPONSE group schema
 * Defines the structure and validation rules for the ORX_O58.RESPONSE group
 */
export const orxO58ResponseSchema = z.object({
  "PATIENT": orxO58PatientSchema.optional(),
  "ORDER": z.array(orxO58OrderSchema)
}).register(hl7v2Metadata, {
  title: "ORX_O58.RESPONSE",
  version: "2.8",
  description: "HL7 v2.8 ORX_O58.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORX_O58.RESPONSE schema
 */
export type ORX_O58_RESPONSE = z.infer<typeof orxO58ResponseSchema>;

/**
 * ORX_O58 message schema
 * Defines the structure and validation rules for the ORX_O58 message
 */
export const orx_o58Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orxO58ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORX_O58",
  version: "2.8",
  description: "HL7 v2.8 ORX_O58 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORX_O58 schema
 */
export type ORX_O58 = z.infer<typeof orx_o58Schema>;

/**
 * Default export for convenience
 */
export default orx_o58Schema;