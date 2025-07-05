import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.8 QBP_E03 Message
 *
 * HL7 v2.8 QBP_E03 message definition
 * Contains segment definitions and constraints for the QBP_E03 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QBP_E03.QUERY_INFORMATION group schema
 * Defines the structure and validation rules for the QBP_E03.QUERY_INFORMATION group
 */
export const qbpE03QueryInformationSchema = z
  .object({
    QPD: segments.qpdSchema,
    RCP: segments.rcpSchema
  })
  .register(hl7v2Metadata, {
    title: "QBP_E03.QUERY_INFORMATION",
    version: "2.8",
    description: "HL7 v2.8 QBP_E03.QUERY_INFORMATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the QBP_E03.QUERY_INFORMATION schema
 */
export type QBP_E03_QUERY_INFORMATION = z.infer<typeof qbpE03QueryInformationSchema>;

/**
 * QBP_E03 message schema
 * Defines the structure and validation rules for the QBP_E03 message
 */
export const qbp_e03Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: z.array(segments.uacSchema).optional(),
    QUERY_INFORMATION: qbpE03QueryInformationSchema
  })
  .register(hl7v2Metadata, {
    title: "QBP_E03",
    version: "2.8",
    description: "HL7 v2.8 QBP_E03 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the QBP_E03 schema
 */
export type QBP_E03 = z.infer<typeof qbp_e03Schema>;

/**
 * Default export for convenience
 */
export default qbp_e03Schema;
