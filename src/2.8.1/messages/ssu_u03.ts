import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 SSU_U03 Message
 *
 * HL7 v2.8 SSU_U03 message definition
 * Contains segment definitions and constraints for the SSU_U03 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * SSU_U03.SPECIMEN group schema
 * Defines the structure and validation rules for the SSU_U03.SPECIMEN group
 */
export const ssuU03SpecimenSchema = z
  .object({
    SPM: segments.spmSchema,
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SSU_U03.SPECIMEN",
    version: "2.8",
    description: "HL7 v2.8 SSU_U03.SPECIMEN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SSU_U03.SPECIMEN schema
 */
export type SSU_U03_SPECIMEN = z.infer<typeof ssuU03SpecimenSchema>;

/**
 * SSU_U03.SPECIMEN_CONTAINER group schema
 * Defines the structure and validation rules for the SSU_U03.SPECIMEN_CONTAINER group
 */
export const ssuU03SpecimenContainerSchema = z
  .object({
    SAC: segments.sacSchema,
    OBX: z.array(segments.obxSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    SPECIMEN: z.array(ssuU03SpecimenSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "SSU_U03.SPECIMEN_CONTAINER",
    version: "2.8",
    description: "HL7 v2.8 SSU_U03.SPECIMEN_CONTAINER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the SSU_U03.SPECIMEN_CONTAINER schema
 */
export type SSU_U03_SPECIMEN_CONTAINER = z.infer<typeof ssuU03SpecimenContainerSchema>;

/**
 * SSU_U03 message schema
 * Defines the structure and validation rules for the SSU_U03 message
 */
export const ssu_u03Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EQU: segments.equSchema,
    SPECIMEN_CONTAINER: z.array(ssuU03SpecimenContainerSchema)
  })
  .register(hl7v2Metadata, {
    title: "SSU_U03",
    version: "2.8",
    description: "HL7 v2.8 SSU_U03 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the SSU_U03 schema
 */
export type SSU_U03 = z.infer<typeof ssu_u03Schema>;

/**
 * Default export for convenience
 */
export default ssu_u03Schema;
