import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 CCF_I22 Message
 *
 * HL7 v2.7 CCF_I22 message definition
 * Contains segment definitions and constraints for the CCF_I22 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CCF_I22 message schema
 * Defines the structure and validation rules for the CCF_I22 message
 */
export const ccf_i22Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    PID: segments.pidSchema
  })
  .register(hl7v2Metadata, {
    title: "CCF_I22",
    version: "2.7",
    description: "HL7 v2.7 CCF_I22 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the CCF_I22 schema
 */
export type CCF_I22 = z.infer<typeof ccf_i22Schema>;

/**
 * Default export for convenience
 */
export default ccf_i22Schema;
