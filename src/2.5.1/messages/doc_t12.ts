import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 DOC_T12 Message
 * 
 * HL7 v2.5 DOC_T12 message definition
 * Contains segment definitions and constraints for the DOC_T12 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DOC_T12.RESULT group schema
 * Defines the structure and validation rules for the DOC_T12.RESULT group
 */
export const docT12ResultSchema = z.object({
  "EVN": segments.evnSchema.optional(),
  "PID": segments.pidSchema,
  "PV1": segments.pv1Schema,
  "TXA": segments.txaSchema,
  "OBX": z.array(segments.obxSchema).optional()
}).register(hl7v2Metadata, {
  title: "DOC_T12.RESULT",
  version: "2.5",
  description: "HL7 v2.5 DOC_T12.RESULT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the DOC_T12.RESULT schema
 */
export type DOC_T12_RESULT = z.infer<typeof docT12ResultSchema>;

/**
 * DOC_T12 message schema
 * Defines the structure and validation rules for the DOC_T12 message
 */
export const doc_t12Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema.optional(),
  "QRD": segments.qrdSchema,
  "RESULT": z.array(docT12ResultSchema),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "DOC_T12",
  version: "2.5",
  description: "HL7 v2.5 DOC_T12 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the DOC_T12 schema
 */
export type DOC_T12 = z.infer<typeof doc_t12Schema>;

/**
 * Default export for convenience
 */
export default doc_t12Schema;