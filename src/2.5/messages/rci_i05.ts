import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 RCI_I05 Message
 *
 * HL7 v2.5 RCI_I05 message definition
 * Contains segment definitions and constraints for the RCI_I05 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RCI_I05.PROVIDER group schema
 * Defines the structure and validation rules for the RCI_I05.PROVIDER group
 */
export const rciI05ProviderSchema = z
  .object({
    PRD: segments.prdSchema,
    CTD: z.array(segments.ctdSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RCI_I05.PROVIDER",
    version: "2.5",
    description: "HL7 v2.5 RCI_I05.PROVIDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RCI_I05.PROVIDER schema
 */
export type RCI_I05_PROVIDER = z.infer<typeof rciI05ProviderSchema>;

/**
 * RCI_I05.RESULTS group schema
 * Defines the structure and validation rules for the RCI_I05.RESULTS group
 */
export const rciI05ResultsSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RCI_I05.RESULTS",
    version: "2.5",
    description: "HL7 v2.5 RCI_I05.RESULTS group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RCI_I05.RESULTS schema
 */
export type RCI_I05_RESULTS = z.infer<typeof rciI05ResultsSchema>;

/**
 * RCI_I05.OBSERVATION group schema
 * Defines the structure and validation rules for the RCI_I05.OBSERVATION group
 */
export const rciI05ObservationSchema = z
  .object({
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional(),
    RESULTS: z.array(rciI05ResultsSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RCI_I05.OBSERVATION",
    version: "2.5",
    description: "HL7 v2.5 RCI_I05.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RCI_I05.OBSERVATION schema
 */
export type RCI_I05_OBSERVATION = z.infer<typeof rciI05ObservationSchema>;

/**
 * RCI_I05 message schema
 * Defines the structure and validation rules for the RCI_I05 message
 */
export const rci_i05Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    MSA: segments.msaSchema,
    QRD: segments.qrdSchema,
    QRF: segments.qrfSchema.optional(),
    PROVIDER: z.array(rciI05ProviderSchema),
    PID: segments.pidSchema,
    DG1: z.array(segments.dg1Schema).optional(),
    DRG: z.array(segments.drgSchema).optional(),
    AL1: z.array(segments.al1Schema).optional(),
    OBSERVATION: z.array(rciI05ObservationSchema).optional(),
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RCI_I05",
    version: "2.5",
    description: "HL7 v2.5 RCI_I05 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RCI_I05 schema
 */
export type RCI_I05 = z.infer<typeof rci_i05Schema>;

/**
 * Default export for convenience
 */
export default rci_i05Schema;
