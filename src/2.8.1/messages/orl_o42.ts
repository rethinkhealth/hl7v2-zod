import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 ORL_O42 Message
 * 
 * HL7 v2.8 ORL_O42 message definition
 * Contains segment definitions and constraints for the ORL_O42 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O42.PATIENT group schema
 * Defines the structure and validation rules for the ORL_O42.PATIENT group
 */
export const orlO42PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O42.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 ORL_O42.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O42.PATIENT schema
 */
export type ORL_O42_PATIENT = z.infer<typeof orlO42PatientSchema>;

/**
 * ORL_O42.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the ORL_O42.SPECIMEN_OBSERVATION group
 */
export const orlO42SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O42.SPECIMEN_OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 ORL_O42.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O42.SPECIMEN_OBSERVATION schema
 */
export type ORL_O42_SPECIMEN_OBSERVATION = z.infer<typeof orlO42SpecimenObservationSchema>;

/**
 * ORL_O42.TIMING group schema
 * Defines the structure and validation rules for the ORL_O42.TIMING group
 */
export const orlO42TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O42.TIMING",
  version: "2.8",
  description: "HL7 v2.8 ORL_O42.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O42.TIMING schema
 */
export type ORL_O42_TIMING = z.infer<typeof orlO42TimingSchema>;

/**
 * ORL_O42.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O42.OBSERVATION_REQUEST group
 */
export const orlO42ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O42.OBSERVATION_REQUEST",
  version: "2.8",
  description: "HL7 v2.8 ORL_O42.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O42.OBSERVATION_REQUEST schema
 */
export type ORL_O42_OBSERVATION_REQUEST = z.infer<typeof orlO42ObservationRequestSchema>;

/**
 * ORL_O42.ORDER group schema
 * Defines the structure and validation rules for the ORL_O42.ORDER group
 */
export const orlO42OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(orlO42TimingSchema).optional(),
  "OBSERVATION_REQUEST": orlO42ObservationRequestSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O42.ORDER",
  version: "2.8",
  description: "HL7 v2.8 ORL_O42.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O42.ORDER schema
 */
export type ORL_O42_ORDER = z.infer<typeof orlO42OrderSchema>;

/**
 * ORL_O42.SPECIMEN group schema
 * Defines the structure and validation rules for the ORL_O42.SPECIMEN group
 */
export const orlO42SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "SPECIMEN_OBSERVATION": z.array(orlO42SpecimenObservationSchema).optional(),
  "SAC": z.array(segments.sacSchema).optional(),
  "ORDER": z.array(orlO42OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O42.SPECIMEN",
  version: "2.8",
  description: "HL7 v2.8 ORL_O42.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O42.SPECIMEN schema
 */
export type ORL_O42_SPECIMEN = z.infer<typeof orlO42SpecimenSchema>;

/**
 * ORL_O42.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O42.RESPONSE group
 */
export const orlO42ResponseSchema = z.object({
  "PATIENT": orlO42PatientSchema.optional(),
  "SPECIMEN": z.array(orlO42SpecimenSchema)
}).register(hl7v2Metadata, {
  title: "ORL_O42.RESPONSE",
  version: "2.8",
  description: "HL7 v2.8 ORL_O42.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O42.RESPONSE schema
 */
export type ORL_O42_RESPONSE = z.infer<typeof orlO42ResponseSchema>;

/**
 * ORL_O42 message schema
 * Defines the structure and validation rules for the ORL_O42 message
 */
export const orl_o42Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orlO42ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O42",
  version: "2.8",
  description: "HL7 v2.8 ORL_O42 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORL_O42 schema
 */
export type ORL_O42 = z.infer<typeof orl_o42Schema>;

/**
 * Default export for convenience
 */
export default orl_o42Schema;