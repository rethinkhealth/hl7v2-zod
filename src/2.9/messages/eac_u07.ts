import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 EAC_U07 Message
 * 
 * HL7 v2.9 EAC_U07 message definition
 * Contains segment definitions and constraints for the EAC_U07 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EAC_U07.ORDER_FOR_SPECIMEN_CONTAINER group schema
 * Defines the structure and validation rules for the EAC_U07.ORDER_FOR_SPECIMEN_CONTAINER group
 */
export const eacU07OrderForSpecimenContainerSchema = z.object({
  "OBR": z.array(segments.obrSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "EAC_U07.ORDER_FOR_SPECIMEN_CONTAINER",
  version: "2.9",
  description: "HL7 v2.9 EAC_U07.ORDER_FOR_SPECIMEN_CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EAC_U07.ORDER_FOR_SPECIMEN_CONTAINER schema
 */
export type EAC_U07_ORDER_FOR_SPECIMEN_CONTAINER = z.infer<typeof eacU07OrderForSpecimenContainerSchema>;

/**
 * EAC_U07.SPECIMEN_CONTAINER group schema
 * Defines the structure and validation rules for the EAC_U07.SPECIMEN_CONTAINER group
 */
export const eacU07SpecimenContainerSchema = z.object({
  "SAC": segments.sacSchema,
  "ORDER_FOR_SPECIMEN_CONTAINER": z.array(eacU07OrderForSpecimenContainerSchema).optional(),
  "SPM": z.array(segments.spmSchema).optional(),
  "DST": z.array(segments.dstSchema).optional()
}).register(hl7v2Metadata, {
  title: "EAC_U07.SPECIMEN_CONTAINER",
  version: "2.9",
  description: "HL7 v2.9 EAC_U07.SPECIMEN_CONTAINER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EAC_U07.SPECIMEN_CONTAINER schema
 */
export type EAC_U07_SPECIMEN_CONTAINER = z.infer<typeof eacU07SpecimenContainerSchema>;

/**
 * EAC_U07.COMMAND group schema
 * Defines the structure and validation rules for the EAC_U07.COMMAND group
 */
export const eacU07CommandSchema = z.object({
  "ECD": segments.ecdSchema,
  "TQ1": segments.tq1Schema.optional(),
  "SPECIMEN_CONTAINER": z.array(eacU07SpecimenContainerSchema).optional(),
  "CNS": segments.cnsSchema.optional()
}).register(hl7v2Metadata, {
  title: "EAC_U07.COMMAND",
  version: "2.9",
  description: "HL7 v2.9 EAC_U07.COMMAND group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EAC_U07.COMMAND schema
 */
export type EAC_U07_COMMAND = z.infer<typeof eacU07CommandSchema>;

/**
 * EAC_U07 message schema
 * Defines the structure and validation rules for the EAC_U07 message
 */
export const eac_u07Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EQU": segments.equSchema,
  "COMMAND": z.array(eacU07CommandSchema),
  "ROL": segments.rolSchema.optional()
}).register(hl7v2Metadata, {
  title: "EAC_U07",
  version: "2.9",
  description: "HL7 v2.9 EAC_U07 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the EAC_U07 schema
 */
export type EAC_U07 = z.infer<typeof eac_u07Schema>;

/**
 * Default export for convenience
 */
export default eac_u07Schema;