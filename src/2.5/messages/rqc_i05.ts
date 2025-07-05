import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 RQC_I05 Message
 *
 * HL7 v2.5 RQC_I05 message definition
 * Contains segment definitions and constraints for the RQC_I05 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RQC_I05.PROVIDER group schema
 * Defines the structure and validation rules for the RQC_I05.PROVIDER group
 */
export const rqcI05ProviderSchema = z
  .object({
    PRD: segments.prdSchema,
    CTD: z.array(segments.ctdSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RQC_I05.PROVIDER",
    version: "2.5",
    description: "HL7 v2.5 RQC_I05.PROVIDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RQC_I05.PROVIDER schema
 */
export type RQC_I05_PROVIDER = z.infer<typeof rqcI05ProviderSchema>;

/**
 * RQC_I05 message schema
 * Defines the structure and validation rules for the RQC_I05 message
 */
export const rqc_i05Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    PROVIDER: z.array(rqcI05ProviderSchema),
    PID: segments.pidSchema,
    NK1: z.array(segments.nk1Schema).optional(),
    GT1: z.array(segments.gt1Schema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RQC_I05",
    version: "2.5",
    description: "HL7 v2.5 RQC_I05 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RQC_I05 schema
 */
export type RQC_I05 = z.infer<typeof rqc_i05Schema>;

/**
 * Default export for convenience
 */
export default rqc_i05Schema;
