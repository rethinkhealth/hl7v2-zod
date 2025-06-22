import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ORL_O54 Message
 * 
 * HL7 v2.9 ORL_O54 message definition
 * Contains segment definitions and constraints for the ORL_O54 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O54.PATIENT group schema
 * Defines the structure and validation rules for the ORL_O54.PATIENT group
 */
export const orlO54PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O54.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 ORL_O54.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O54.PATIENT schema
 */
export type ORL_O54_PATIENT = z.infer<typeof orlO54PatientSchema>;

/**
 * ORL_O54.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the ORL_O54.SPECIMEN_OBSERVATION group
 */
export const orlO54SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O54.SPECIMEN_OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 ORL_O54.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O54.SPECIMEN_OBSERVATION schema
 */
export type ORL_O54_SPECIMEN_OBSERVATION = z.infer<typeof orlO54SpecimenObservationSchema>;

/**
 * ORL_O54.TIMING group schema
 * Defines the structure and validation rules for the ORL_O54.TIMING group
 */
export const orlO54TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O54.TIMING",
  version: "2.9",
  description: "HL7 v2.9 ORL_O54.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O54.TIMING schema
 */
export type ORL_O54_TIMING = z.infer<typeof orlO54TimingSchema>;

/**
 * ORL_O54.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O54.OBSERVATION_REQUEST group
 */
export const orlO54ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O54.OBSERVATION_REQUEST",
  version: "2.9",
  description: "HL7 v2.9 ORL_O54.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O54.OBSERVATION_REQUEST schema
 */
export type ORL_O54_OBSERVATION_REQUEST = z.infer<typeof orlO54ObservationRequestSchema>;

/**
 * ORL_O54.ORDER group schema
 * Defines the structure and validation rules for the ORL_O54.ORDER group
 */
export const orlO54OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(orlO54TimingSchema).optional(),
  "OBSERVATION_REQUEST": orlO54ObservationRequestSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O54.ORDER",
  version: "2.9",
  description: "HL7 v2.9 ORL_O54.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O54.ORDER schema
 */
export type ORL_O54_ORDER = z.infer<typeof orlO54OrderSchema>;

/**
 * ORL_O54.SPECIMEN group schema
 * Defines the structure and validation rules for the ORL_O54.SPECIMEN group
 */
export const orlO54SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "SPECIMEN_OBSERVATION": z.array(orlO54SpecimenObservationSchema).optional(),
  "SAC": z.array(segments.sacSchema).optional(),
  "ORDER": z.array(orlO54OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O54.SPECIMEN",
  version: "2.9",
  description: "HL7 v2.9 ORL_O54.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O54.SPECIMEN schema
 */
export type ORL_O54_SPECIMEN = z.infer<typeof orlO54SpecimenSchema>;

/**
 * ORL_O54.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O54.RESPONSE group
 */
export const orlO54ResponseSchema = z.object({
  "PATIENT": orlO54PatientSchema.optional(),
  "SPECIMEN": z.array(orlO54SpecimenSchema)
}).register(hl7v2Metadata, {
  title: "ORL_O54.RESPONSE",
  version: "2.9",
  description: "HL7 v2.9 ORL_O54.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O54.RESPONSE schema
 */
export type ORL_O54_RESPONSE = z.infer<typeof orlO54ResponseSchema>;

/**
 * ORL_O54 message schema
 * Defines the structure and validation rules for the ORL_O54 message
 */
export const orl_o54Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orlO54ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O54",
  version: "2.9",
  description: "HL7 v2.9 ORL_O54 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORL_O54 schema
 */
export type ORL_O54 = z.infer<typeof orl_o54Schema>;

/**
 * Default export for convenience
 */
export default orl_o54Schema;