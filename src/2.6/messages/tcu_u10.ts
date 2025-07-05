import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 TCU_U10 Message
 *
 * HL7 v2.6 TCU_U10 message definition
 * Contains segment definitions and constraints for the TCU_U10 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TCU_U10.TEST_CONFIGURATION group schema
 * Defines the structure and validation rules for the TCU_U10.TEST_CONFIGURATION group
 */
export const tcuU10TestConfigurationSchema = z
  .object({
    SPM: segments.spmSchema.optional(),
    TCC: z.array(segments.tccSchema)
  })
  .register(hl7v2Metadata, {
    title: "TCU_U10.TEST_CONFIGURATION",
    version: "2.6",
    description: "HL7 v2.6 TCU_U10.TEST_CONFIGURATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the TCU_U10.TEST_CONFIGURATION schema
 */
export type TCU_U10_TEST_CONFIGURATION = z.infer<typeof tcuU10TestConfigurationSchema>;

/**
 * TCU_U10 message schema
 * Defines the structure and validation rules for the TCU_U10 message
 */
export const tcu_u10Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EQU: segments.equSchema,
    TEST_CONFIGURATION: z.array(tcuU10TestConfigurationSchema),
    ROL: segments.rolSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "TCU_U10",
    version: "2.6",
    description: "HL7 v2.6 TCU_U10 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the TCU_U10 schema
 */
export type TCU_U10 = z.infer<typeof tcu_u10Schema>;

/**
 * Default export for convenience
 */
export default tcu_u10Schema;
