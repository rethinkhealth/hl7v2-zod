import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 RTB_K13 Message
 * 
 * HL7 v2.8 RTB_K13 message definition
 * Contains segment definitions and constraints for the RTB_K13 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RTB_K13.ROW_DEFINITION group schema
 * Defines the structure and validation rules for the RTB_K13.ROW_DEFINITION group
 */
export const rtbK13RowDefinitionSchema = z.object({
  "RDF": segments.rdfSchema,
  "RDT": z.array(segments.rdtSchema).optional()
}).register(hl7v2Metadata, {
  title: "RTB_K13.ROW_DEFINITION",
  version: "2.8",
  description: "HL7 v2.8 RTB_K13.ROW_DEFINITION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RTB_K13.ROW_DEFINITION schema
 */
export type RTB_K13_ROW_DEFINITION = z.infer<typeof rtbK13RowDefinitionSchema>;

/**
 * RTB_K13 message schema
 * Defines the structure and validation rules for the RTB_K13 message
 */
export const rtb_k13Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "ROW_DEFINITION": rtbK13RowDefinitionSchema.optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RTB_K13",
  version: "2.8",
  description: "HL7 v2.8 RTB_K13 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RTB_K13 schema
 */
export type RTB_K13 = z.infer<typeof rtb_k13Schema>;

/**
 * Default export for convenience
 */
export default rtb_k13Schema;