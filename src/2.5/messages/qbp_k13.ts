import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 QBP_K13 Message
 *
 * HL7 v2.5 QBP_K13 message definition
 * Contains segment definitions and constraints for the QBP_K13 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * QBP_K13.ROW_DEFINITION group schema
 * Defines the structure and validation rules for the QBP_K13.ROW_DEFINITION group
 */
export const qbpK13RowDefinitionSchema = z
  .object({
    RDF: segments.rdfSchema,
    RDT: z.array(segments.rdtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "QBP_K13.ROW_DEFINITION",
    version: "2.5",
    description: "HL7 v2.5 QBP_K13.ROW_DEFINITION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the QBP_K13.ROW_DEFINITION schema
 */
export type QBP_K13_ROW_DEFINITION = z.infer<typeof qbpK13RowDefinitionSchema>;

/**
 * QBP_K13 message schema
 * Defines the structure and validation rules for the QBP_K13 message
 */
export const qbp_k13Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: segments.errSchema.optional(),
    QAK: segments.qakSchema,
    QPD: segments.qpdSchema,
    ROW_DEFINITION: qbpK13RowDefinitionSchema.optional(),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "QBP_K13",
    version: "2.5",
    description: "HL7 v2.5 QBP_K13 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the QBP_K13 schema
 */
export type QBP_K13 = z.infer<typeof qbp_k13Schema>;

/**
 * Default export for convenience
 */
export default qbp_k13Schema;
