import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 RSP_Z84 Message
 * 
 * HL7 v2.8 RSP_Z84 message definition
 * Contains segment definitions and constraints for the RSP_Z84 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_Z84.ROW_DEFINITION group schema
 * Defines the structure and validation rules for the RSP_Z84.ROW_DEFINITION group
 */
export const rspZ84RowDefinitionSchema = z.object({
  "RDF": segments.rdfSchema,
  "RDT": z.array(segments.rdtSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z84.ROW_DEFINITION",
  version: "2.8",
  description: "HL7 v2.8 RSP_Z84.ROW_DEFINITION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z84.ROW_DEFINITION schema
 */
export type RSP_Z84_ROW_DEFINITION = z.infer<typeof rspZ84RowDefinitionSchema>;

/**
 * RSP_Z84 message schema
 * Defines the structure and validation rules for the RSP_Z84 message
 */
export const rsp_z84Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "ROW_DEFINITION": rspZ84RowDefinitionSchema.optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z84",
  version: "2.8",
  description: "HL7 v2.8 RSP_Z84 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_Z84 schema
 */
export type RSP_Z84 = z.infer<typeof rsp_z84Schema>;

/**
 * Default export for convenience
 */
export default rsp_z84Schema;