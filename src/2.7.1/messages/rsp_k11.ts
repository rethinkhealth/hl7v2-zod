import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 RSP_K11 Message
 * 
 * HL7 v2.7 RSP_K11 message definition
 * Contains segment definitions and constraints for the RSP_K11 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_K11.ROW_DEFINITION group schema
 * Defines the structure and validation rules for the RSP_K11.ROW_DEFINITION group
 */
export const rspK11RowDefinitionSchema = z.object({

}).register(hl7v2Metadata, {
  title: "RSP_K11.ROW_DEFINITION",
  version: "2.7",
  description: "HL7 v2.7 RSP_K11.ROW_DEFINITION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K11.ROW_DEFINITION schema
 */
export type RSP_K11_ROW_DEFINITION = z.infer<typeof rspK11RowDefinitionSchema>;

/**
 * RSP_K11 message schema
 * Defines the structure and validation rules for the RSP_K11 message
 */
export const rsp_k11Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "ROW_DEFINITION": rspK11RowDefinitionSchema.optional(),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K11",
  version: "2.7",
  description: "HL7 v2.7 RSP_K11 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_K11 schema
 */
export type RSP_K11 = z.infer<typeof rsp_k11Schema>;

/**
 * Default export for convenience
 */
export default rsp_k11Schema;