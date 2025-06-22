import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ORG_O20 Message
 * 
 * HL7 v2.9 ORG_O20 message definition
 * Contains segment definitions and constraints for the ORG_O20 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORG_O20.PATIENT group schema
 * Defines the structure and validation rules for the ORG_O20.PATIENT group
 */
export const orgO20PatientSchema = z.object({
  "PID": segments.pidSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORG_O20.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 ORG_O20.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORG_O20.PATIENT schema
 */
export type ORG_O20_PATIENT = z.infer<typeof orgO20PatientSchema>;

/**
 * ORG_O20.TIMING group schema
 * Defines the structure and validation rules for the ORG_O20.TIMING group
 */
export const orgO20TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "ORG_O20.TIMING",
  version: "2.9",
  description: "HL7 v2.9 ORG_O20.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORG_O20.TIMING schema
 */
export type ORG_O20_TIMING = z.infer<typeof orgO20TimingSchema>;

/**
 * ORG_O20.OBSERVATION_GROUP group schema
 * Defines the structure and validation rules for the ORG_O20.OBSERVATION_GROUP group
 */
export const orgO20ObservationGroupSchema = z.object({
  "OBR": segments.obrSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORG_O20.OBSERVATION_GROUP",
  version: "2.9",
  description: "HL7 v2.9 ORG_O20.OBSERVATION_GROUP group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORG_O20.OBSERVATION_GROUP schema
 */
export type ORG_O20_OBSERVATION_GROUP = z.infer<typeof orgO20ObservationGroupSchema>;

/**
 * ORG_O20.SPECIMEN group schema
 * Defines the structure and validation rules for the ORG_O20.SPECIMEN group
 */
export const orgO20SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "SAC": z.array(segments.sacSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORG_O20.SPECIMEN",
  version: "2.9",
  description: "HL7 v2.9 ORG_O20.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORG_O20.SPECIMEN schema
 */
export type ORG_O20_SPECIMEN = z.infer<typeof orgO20SpecimenSchema>;

/**
 * ORG_O20.ORDER group schema
 * Defines the structure and validation rules for the ORG_O20.ORDER group
 */
export const orgO20OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "TIMING": z.array(orgO20TimingSchema).optional(),
  "OBSERVATION_GROUP": orgO20ObservationGroupSchema.optional(),
  "CTI": z.array(segments.ctiSchema).optional(),
  "SPECIMEN": z.array(orgO20SpecimenSchema).optional()
}).register(hl7v2Metadata, {
  title: "ORG_O20.ORDER",
  version: "2.9",
  description: "HL7 v2.9 ORG_O20.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORG_O20.ORDER schema
 */
export type ORG_O20_ORDER = z.infer<typeof orgO20OrderSchema>;

/**
 * ORG_O20.RESPONSE group schema
 * Defines the structure and validation rules for the ORG_O20.RESPONSE group
 */
export const orgO20ResponseSchema = z.object({
  "PATIENT": orgO20PatientSchema.optional(),
  "ORDER": z.array(orgO20OrderSchema)
}).register(hl7v2Metadata, {
  title: "ORG_O20.RESPONSE",
  version: "2.9",
  description: "HL7 v2.9 ORG_O20.RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ORG_O20.RESPONSE schema
 */
export type ORG_O20_RESPONSE = z.infer<typeof orgO20ResponseSchema>;

/**
 * ORG_O20 message schema
 * Defines the structure and validation rules for the ORG_O20 message
 */
export const org_o20Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RESPONSE": orgO20ResponseSchema.optional()
}).register(hl7v2Metadata, {
  title: "ORG_O20",
  version: "2.9",
  description: "HL7 v2.9 ORG_O20 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ORG_O20 schema
 */
export type ORG_O20 = z.infer<typeof org_o20Schema>;

/**
 * Default export for convenience
 */
export default org_o20Schema;