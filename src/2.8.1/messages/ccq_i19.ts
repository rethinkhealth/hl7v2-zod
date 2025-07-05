import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 CCQ_I19 Message
 *
 * HL7 v2.8 CCQ_I19 message definition
 * Contains segment definitions and constraints for the CCQ_I19 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CCQ_I19.PROVIDER_CONTACT group schema
 * Defines the structure and validation rules for the CCQ_I19.PROVIDER_CONTACT group
 */
export const ccqI19ProviderContactSchema = z
  .object({
    PRD: segments.prdSchema,
    CTD: z.array(segments.ctdSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCQ_I19.PROVIDER_CONTACT",
    version: "2.8",
    description: "HL7 v2.8 CCQ_I19.PROVIDER_CONTACT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the CCQ_I19.PROVIDER_CONTACT schema
 */
export type CCQ_I19_PROVIDER_CONTACT = z.infer<typeof ccqI19ProviderContactSchema>;

/**
 * CCQ_I19 message schema
 * Defines the structure and validation rules for the CCQ_I19 message
 */
export const ccq_i19Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    RF1: segments.rf1Schema,
    PROVIDER_CONTACT: z.array(ccqI19ProviderContactSchema).optional(),
    REL: z.array(segments.relSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "CCQ_I19",
    version: "2.8",
    description: "HL7 v2.8 CCQ_I19 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the CCQ_I19 schema
 */
export type CCQ_I19 = z.infer<typeof ccq_i19Schema>;

/**
 * Default export for convenience
 */
export default ccq_i19Schema;
