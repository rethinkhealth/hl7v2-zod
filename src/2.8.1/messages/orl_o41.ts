import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 ORL_O41 Message
 * 
 * HL7 v2.8 ORL_O41 message definition
 * Contains segment definitions and constraints for the ORL_O41 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O41.PATIENT group schema
 * Defines the structure and validation rules for the ORL_O41.PATIENT group
 */
export const orlO41PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O41.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 ORL_O41.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O41.PATIENT schema
 */
export type ORL_O41_PATIENT = z.infer<typeof orlO41PatientSchema>;

/**
 * ORL_O41.TIMING group schema
 * Defines the structure and validation rules for the ORL_O41.TIMING group
 */
export const orlO41TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O41.TIMING",
  version: "2.8",
  description: "HL7 v2.8 ORL_O41.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O41.TIMING schema
 */
export type ORL_O41_TIMING = z.infer<typeof orlO41TimingSchema>;

/**
 * ORL_O41.SPECIMEN group schema
 * Defines the structure and validation rules for the ORL_O41.SPECIMEN group
 */
export const orlO41SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "SAC": z.array(segments.sacSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O41.SPECIMEN",
  version: "2.8",
  description: "HL7 v2.8 ORL_O41.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O41.SPECIMEN schema
 */
export type ORL_O41_SPECIMEN = z.infer<typeof orlO41SpecimenSchema>;

/**
 * ORL_O41.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O41.OBSERVATION_REQUEST group
 */
export const orlO41ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "SPECIMEN": z.array(orlO41SpecimenSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O41.OBSERVATION_REQUEST",
  version: "2.8",
  description: "HL7 v2.8 ORL_O41.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O41.OBSERVATION_REQUEST schema
 */
export type ORL_O41_OBSERVATION_REQUEST = z.infer<typeof orlO41ObservationRequestSchema>;

/**
 * ORL_O41.ORDER group schema
 * Defines the structure and validation rules for the ORL_O41.ORDER group
 */
export const orlO41OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(orlO41TimingSchema).optional(),
  "OBSERVATION_REQUEST": orlO41ObservationRequestSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O41.ORDER",
  version: "2.8",
  description: "HL7 v2.8 ORL_O41.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O41.ORDER schema
 */
export type ORL_O41_ORDER = z.infer<typeof orlO41OrderSchema>;

/**
 * ORL_O41.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O41.RESPONSE group
 */
export const orlO41ResponseSchema = z.object({
  "PATIENT": orlO41PatientSchema.optional(),
  "ORDER": z.array(orlO41OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O41.RESPONSE",
  version: "2.8",
  description: "HL7 v2.8 ORL_O41.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O41.RESPONSE schema
 */
export type ORL_O41_RESPONSE = z.infer<typeof orlO41ResponseSchema>;

/**
 * ORL_O41 message schema
 * Defines the structure and validation rules for the ORL_O41 message
 */
export const orl_o41Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orlO41ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O41",
  version: "2.8",
  description: "HL7 v2.8 ORL_O41 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORL_O41 schema
 */
export type ORL_O41 = z.infer<typeof orl_o41Schema>;

/**
 * Default export for convenience
 */
export default orl_o41Schema;