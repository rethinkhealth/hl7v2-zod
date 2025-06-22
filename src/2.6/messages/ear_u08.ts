import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 EAR_U08 Message
 * 
 * HL7 v2.6 EAR_U08 message definition
 * Contains segment definitions and constraints for the EAR_U08 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EAR_U08.SPECIMEN_CONTAINER group schema
 * Defines the structure and validation rules for the EAR_U08.SPECIMEN_CONTAINER group
 */
export const earU08SpecimenContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "SPM": z.array(segments.spmSchema).optional()
}).register(hl7v2Metadata, {
  title: "EAR_U08.SPECIMEN_CONTAINER",
  version: "2.6",
  description: "HL7 v2.6 EAR_U08.SPECIMEN_CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EAR_U08.SPECIMEN_CONTAINER schema
 */
export type EAR_U08_SPECIMEN_CONTAINER = z.infer<typeof earU08SpecimenContainerSchema>;

/**
 * EAR_U08.COMMAND_RESPONSE group schema
 * Defines the structure and validation rules for the EAR_U08.COMMAND_RESPONSE group
 */
export const earU08CommandResponseSchema = z.object({
  "ECD": segments.ecdSchema,
  "SPECIMEN_CONTAINER": earU08SpecimenContainerSchema.optional(),
  "ECR": segments.ecrSchema
}).register(hl7v2Metadata, {
  title: "EAR_U08.COMMAND_RESPONSE",
  version: "2.6",
  description: "HL7 v2.6 EAR_U08.COMMAND_RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EAR_U08.COMMAND_RESPONSE schema
 */
export type EAR_U08_COMMAND_RESPONSE = z.infer<typeof earU08CommandResponseSchema>;

/**
 * EAR_U08 message schema
 * Defines the structure and validation rules for the EAR_U08 message
 */
export const ear_u08Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EQU": segments.equSchema,
  "COMMAND_RESPONSE": z.array(earU08CommandResponseSchema),
  "ROL": segments.rolSchema.optional()
}).register(hl7v2Metadata, {
  title: "EAR_U08",
  version: "2.6",
  description: "HL7 v2.6 EAR_U08 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the EAR_U08 schema
 */
export type EAR_U08 = z.infer<typeof ear_u08Schema>;

/**
 * Default export for convenience
 */
export default ear_u08Schema;