import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 ORL_O36 Message
 * 
 * HL7 v2.6 ORL_O36 message definition
 * Contains segment definitions and constraints for the ORL_O36 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORL_O36.TIMING group schema
 * Defines the structure and validation rules for the ORL_O36.TIMING group
 */
export const orlO36TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O36.TIMING",
  version: "2.6",
  description: "HL7 v2.6 ORL_O36.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O36.TIMING schema
 */
export type ORL_O36_TIMING = z.infer<typeof orlO36TimingSchema>;

/**
 * ORL_O36.OBSERVATION_REQUEST group schema
 * Defines the structure and validation rules for the ORL_O36.OBSERVATION_REQUEST group
 */
export const orlO36ObservationRequestSchema = z.object({
  "OBR": segments.obrSchema,
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O36.OBSERVATION_REQUEST",
  version: "2.6",
  description: "HL7 v2.6 ORL_O36.OBSERVATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O36.OBSERVATION_REQUEST schema
 */
export type ORL_O36_OBSERVATION_REQUEST = z.infer<typeof orlO36ObservationRequestSchema>;

/**
 * ORL_O36.ORDER group schema
 * Defines the structure and validation rules for the ORL_O36.ORDER group
 */
export const orlO36OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(orlO36TimingSchema).optional(),
  "OBSERVATION_REQUEST": orlO36ObservationRequestSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O36.ORDER",
  version: "2.6",
  description: "HL7 v2.6 ORL_O36.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O36.ORDER schema
 */
export type ORL_O36_ORDER = z.infer<typeof orlO36OrderSchema>;

/**
 * ORL_O36.SPECIMEN_CONTAINER group schema
 * Defines the structure and validation rules for the ORL_O36.SPECIMEN_CONTAINER group
 */
export const orlO36SpecimenContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "ORDER": z.array(orlO36OrderSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORL_O36.SPECIMEN_CONTAINER",
  version: "2.6",
  description: "HL7 v2.6 ORL_O36.SPECIMEN_CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O36.SPECIMEN_CONTAINER schema
 */
export type ORL_O36_SPECIMEN_CONTAINER = z.infer<typeof orlO36SpecimenContainerSchema>;

/**
 * ORL_O36.SPECIMEN group schema
 * Defines the structure and validation rules for the ORL_O36.SPECIMEN group
 */
export const orlO36SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "OBX": z.array(segments.obxSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "SPECIMEN_CONTAINER": z.array(orlO36SpecimenContainerSchema)
}).register(hl7v2Metadata, {
  title: "ORL_O36.SPECIMEN",
  version: "2.6",
  description: "HL7 v2.6 ORL_O36.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O36.SPECIMEN schema
 */
export type ORL_O36_SPECIMEN = z.infer<typeof orlO36SpecimenSchema>;

/**
 * ORL_O36.RESPONSE group schema
 * Defines the structure and validation rules for the ORL_O36.RESPONSE group
 */
export const orlO36ResponseSchema = z.object({
  "PID": segments.pidSchema,
  "SPECIMEN": z.array(orlO36SpecimenSchema)
}).register(hl7v2Metadata, {
  title: "ORL_O36.RESPONSE",
  version: "2.6",
  description: "HL7 v2.6 ORL_O36.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORL_O36.RESPONSE schema
 */
export type ORL_O36_RESPONSE = z.infer<typeof orlO36ResponseSchema>;

/**
 * ORL_O36 message schema
 * Defines the structure and validation rules for the ORL_O36 message
 */
export const orl_o36Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orlO36ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORL_O36",
  version: "2.6",
  description: "HL7 v2.6 ORL_O36 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORL_O36 schema
 */
export type ORL_O36 = z.infer<typeof orl_o36Schema>;

/**
 * Default export for convenience
 */
export default orl_o36Schema;