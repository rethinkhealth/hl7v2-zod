import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 INU_U05 Message
 *
 * HL7 v2.7 INU_U05 message definition
 * Contains segment definitions and constraints for the INU_U05 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * INU_U05 message schema
 * Defines the structure and validation rules for the INU_U05 message
 */
export const inu_u05Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EQU: segments.equSchema,
    INV: z.array(segments.invSchema),
    ROL: segments.rolSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "INU_U05",
    version: "2.7",
    description: "HL7 v2.7 INU_U05 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the INU_U05 schema
 */
export type INU_U05 = z.infer<typeof inu_u05Schema>;

/**
 * Default export for convenience
 */
export default inu_u05Schema;
