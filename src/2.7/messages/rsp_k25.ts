import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 RSP_K25 Message
 * 
 * HL7 v2.7 RSP_K25 message definition
 * Contains segment definitions and constraints for the RSP_K25 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_K25.STAFF group schema
 * Defines the structure and validation rules for the RSP_K25.STAFF group
 */
export const rspK25StaffSchema = z.object({
  "STF": segments.stfSchema,
  "PRA": z.array(segments.praSchema).optional(),
  "ORG": z.array(segments.orgSchema).optional(),
  "AFF": z.array(segments.affSchema).optional(),
  "LAN": z.array(segments.lanSchema).optional(),
  "EDU": z.array(segments.eduSchema).optional(),
  "CER": z.array(segments.cerSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_K25.STAFF",
  version: "2.7",
  description: "HL7 v2.7 RSP_K25.STAFF group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_K25.STAFF schema
 */
export type RSP_K25_STAFF = z.infer<typeof rspK25StaffSchema>;

/**
 * RSP_K25 message schema
 * Defines the structure and validation rules for the RSP_K25 message
 */
export const rsp_k25Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": z.array(segments.errSchema).optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "RCP": segments.rcpSchema,
  "STAFF": z.array(rspK25StaffSchema),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_K25",
  version: "2.7",
  description: "HL7 v2.7 RSP_K25 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_K25 schema
 */
export type RSP_K25 = z.infer<typeof rsp_k25Schema>;

/**
 * Default export for convenience
 */
export default rsp_k25Schema;