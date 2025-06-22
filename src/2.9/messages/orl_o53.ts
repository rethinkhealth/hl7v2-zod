import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ORL_O53 Message
 * 
 * HL7 v2.9 ORL_O53 message definition
 * Contains segment definitions and constraints for the ORL_O53 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O53.PATIENT group schema
 * Defines the structure and validation rules for the ORL_O53.PATIENT group
 */
export const orlO53PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O53.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 ORL_O53.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O53.PATIENT schema
 */
export type ORL_O53_PATIENT = z.infer<typeof orlO53PatientSchema>;

/**
 * ORL_O53.TIMING group schema
 * Defines the structure and validation rules for the ORL_O53.TIMING group
 */
export const orlO53TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O53.TIMING",
  version: "2.9",
  description: "HL7 v2.9 ORL_O53.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O53.TIMING schema
 */
export type ORL_O53_TIMING = z.infer<typeof orlO53TimingSchema>;

/**
 * ORL_O53.SPECIMEN group schema
 * Defines the structure and validation rules for the ORL_O53.SPECIMEN group
 */
export const orlO53SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "SAC": z.array(segments.sacSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O53.SPECIMEN",
  version: "2.9",
  description: "HL7 v2.9 ORL_O53.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O53.SPECIMEN schema
 */
export type ORL_O53_SPECIMEN = z.infer<typeof orlO53SpecimenSchema>;

/**
 * ORL_O53.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O53.OBSERVATION_REQUEST group
 */
export const orlO53ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "SPECIMEN": z.array(orlO53SpecimenSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O53.OBSERVATION_REQUEST",
  version: "2.9",
  description: "HL7 v2.9 ORL_O53.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O53.OBSERVATION_REQUEST schema
 */
export type ORL_O53_OBSERVATION_REQUEST = z.infer<typeof orlO53ObservationRequestSchema>;

/**
 * ORL_O53.ORDER group schema
 * Defines the structure and validation rules for the ORL_O53.ORDER group
 */
export const orlO53OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(orlO53TimingSchema).optional(),
  "OBSERVATION_REQUEST": orlO53ObservationRequestSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O53.ORDER",
  version: "2.9",
  description: "HL7 v2.9 ORL_O53.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O53.ORDER schema
 */
export type ORL_O53_ORDER = z.infer<typeof orlO53OrderSchema>;

/**
 * ORL_O53.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O53.RESPONSE group
 */
export const orlO53ResponseSchema = z.object({
  "PATIENT": orlO53PatientSchema.optional(),
  "ORDER": z.array(orlO53OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O53.RESPONSE",
  version: "2.9",
  description: "HL7 v2.9 ORL_O53.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O53.RESPONSE schema
 */
export type ORL_O53_RESPONSE = z.infer<typeof orlO53ResponseSchema>;

/**
 * ORL_O53 message schema
 * Defines the structure and validation rules for the ORL_O53 message
 */
export const orl_o53Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orlO53ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O53",
  version: "2.9",
  description: "HL7 v2.9 ORL_O53 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORL_O53 schema
 */
export type ORL_O53 = z.infer<typeof orl_o53Schema>;

/**
 * Default export for convenience
 */
export default orl_o53Schema;