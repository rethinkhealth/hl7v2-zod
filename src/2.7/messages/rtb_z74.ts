import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 RTB_Z74 Message
 *
 * HL7 v2.7 RTB_Z74 message definition
 * Contains segment definitions and constraints for the RTB_Z74 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RTB_Z74.ROW_DEFINITION group schema
 * Defines the structure and validation rules for the RTB_Z74.ROW_DEFINITION group
 */
export const rtbZ74RowDefinitionSchema = z
  .object({
    RDF: segments.rdfSchema,
    RDT: z.array(segments.rdtSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RTB_Z74.ROW_DEFINITION",
    version: "2.7",
    description: "HL7 v2.7 RTB_Z74.ROW_DEFINITION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RTB_Z74.ROW_DEFINITION schema
 */
export type RTB_Z74_ROW_DEFINITION = z.infer<typeof rtbZ74RowDefinitionSchema>;

/**
 * RTB_Z74 message schema
 * Defines the structure and validation rules for the RTB_Z74 message
 */
export const rtb_z74Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    QAK: segments.qakSchema,
    QPD: segments.qpdSchema,
    ROW_DEFINITION: rtbZ74RowDefinitionSchema.optional(),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RTB_Z74",
    version: "2.7",
    description: "HL7 v2.7 RTB_Z74 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RTB_Z74 schema
 */
export type RTB_Z74 = z.infer<typeof rtb_z74Schema>;

/**
 * Default export for convenience
 */
export default rtb_z74Schema;
