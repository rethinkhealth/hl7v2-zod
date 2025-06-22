import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ORL_O55 Message
 * 
 * HL7 v2.9 ORL_O55 message definition
 * Contains segment definitions and constraints for the ORL_O55 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O55.PATIENT group schema
 * Defines the structure and validation rules for the ORL_O55.PATIENT group
 */
export const orlO55PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O55.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 ORL_O55.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O55.PATIENT schema
 */
export type ORL_O55_PATIENT = z.infer<typeof orlO55PatientSchema>;

/**
 * ORL_O55.SPECIMEN_OBSERVATION group schema
 * Defines the structure and validation rules for the ORL_O55.SPECIMEN_OBSERVATION group
 */
export const orlO55SpecimenObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O55.SPECIMEN_OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 ORL_O55.SPECIMEN_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O55.SPECIMEN_OBSERVATION schema
 */
export type ORL_O55_SPECIMEN_OBSERVATION = z.infer<typeof orlO55SpecimenObservationSchema>;

/**
 * ORL_O55.TIMING group schema
 * Defines the structure and validation rules for the ORL_O55.TIMING group
 */
export const orlO55TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O55.TIMING",
  version: "2.9",
  description: "HL7 v2.9 ORL_O55.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O55.TIMING schema
 */
export type ORL_O55_TIMING = z.infer<typeof orlO55TimingSchema>;

/**
 * ORL_O55.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O55.OBSERVATION_REQUEST group
 */
export const orlO55ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O55.OBSERVATION_REQUEST",
  version: "2.9",
  description: "HL7 v2.9 ORL_O55.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O55.OBSERVATION_REQUEST schema
 */
export type ORL_O55_OBSERVATION_REQUEST = z.infer<typeof orlO55ObservationRequestSchema>;

/**
 * ORL_O55.ORDER group schema
 * Defines the structure and validation rules for the ORL_O55.ORDER group
 */
export const orlO55OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(orlO55TimingSchema).optional(),
  "OBSERVATION_REQUEST": orlO55ObservationRequestSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O55.ORDER",
  version: "2.9",
  description: "HL7 v2.9 ORL_O55.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O55.ORDER schema
 */
export type ORL_O55_ORDER = z.infer<typeof orlO55OrderSchema>;

/**
 * ORL_O55.SPECIMEN_CONTAINER group schema
 * Defines the structure and validation rules for the ORL_O55.SPECIMEN_CONTAINER group
 */
export const orlO55SpecimenContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "ORDER": z.array(orlO55OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O55.SPECIMEN_CONTAINER",
  version: "2.9",
  description: "HL7 v2.9 ORL_O55.SPECIMEN_CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O55.SPECIMEN_CONTAINER schema
 */
export type ORL_O55_SPECIMEN_CONTAINER = z.infer<typeof orlO55SpecimenContainerSchema>;

/**
 * ORL_O55.SPECIMEN group schema
 * Defines the structure and validation rules for the ORL_O55.SPECIMEN group
 */
export const orlO55SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "SPECIMEN_OBSERVATION": z.array(orlO55SpecimenObservationSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "SPECIMEN_CONTAINER": z.array(orlO55SpecimenContainerSchema)
}).register(hl7v2Metadata, {
  title: "ORL_O55.SPECIMEN",
  version: "2.9",
  description: "HL7 v2.9 ORL_O55.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O55.SPECIMEN schema
 */
export type ORL_O55_SPECIMEN = z.infer<typeof orlO55SpecimenSchema>;

/**
 * ORL_O55.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O55.RESPONSE group
 */
export const orlO55ResponseSchema = z.object({
  "PATIENT": orlO55PatientSchema.optional(),
  "SPECIMEN": z.array(orlO55SpecimenSchema)
}).register(hl7v2Metadata, {
  title: "ORL_O55.RESPONSE",
  version: "2.9",
  description: "HL7 v2.9 ORL_O55.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O55.RESPONSE schema
 */
export type ORL_O55_RESPONSE = z.infer<typeof orlO55ResponseSchema>;

/**
 * ORL_O55 message schema
 * Defines the structure and validation rules for the ORL_O55 message
 */
export const orl_o55Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orlO55ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O55",
  version: "2.9",
  description: "HL7 v2.9 ORL_O55 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORL_O55 schema
 */
export type ORL_O55 = z.infer<typeof orl_o55Schema>;

/**
 * Default export for convenience
 */
export default orl_o55Schema;