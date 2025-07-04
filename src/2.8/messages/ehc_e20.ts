import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 EHC_E20 Message
 * 
 * HL7 v2.8 EHC_E20 message definition
 * Contains segment definitions and constraints for the EHC_E20 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * EHC_E20.INSURANCE group schema
 * Defines the structure and validation rules for the EHC_E20.INSURANCE group
 */
export const ehcE20InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional()
}).register(hl7v2Metadata, {
  title: "EHC_E20.INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 EHC_E20.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E20.INSURANCE schema
 */
export type EHC_E20_INSURANCE = z.infer<typeof ehcE20InsuranceSchema>;

/**
 * EHC_E20.DIAGNOSIS group schema
 * Defines the structure and validation rules for the EHC_E20.DIAGNOSIS group
 */
export const ehcE20DiagnosisSchema = z.object({
  "DG1": segments.dg1Schema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "EHC_E20.DIAGNOSIS",
  version: "2.8",
  description: "HL7 v2.8 EHC_E20.DIAGNOSIS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E20.DIAGNOSIS schema
 */
export type EHC_E20_DIAGNOSIS = z.infer<typeof ehcE20DiagnosisSchema>;

/**
 * EHC_E20.PSL_ITEM_INFO group schema
 * Defines the structure and validation rules for the EHC_E20.PSL_ITEM_INFO group
 */
export const ehcE20PslItemInfoSchema = z.object({
  "PSL": segments.pslSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "ADJ": z.array(segments.adjSchema).optional(),
  "LOC": z.array(segments.locSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "EHC_E20.PSL_ITEM_INFO",
  version: "2.8",
  description: "HL7 v2.8 EHC_E20.PSL_ITEM_INFO group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E20.PSL_ITEM_INFO schema
 */
export type EHC_E20_PSL_ITEM_INFO = z.infer<typeof ehcE20PslItemInfoSchema>;

/**
 * EHC_E20.PAT_INFO group schema
 * Defines the structure and validation rules for the EHC_E20.PAT_INFO group
 */
export const ehcE20PatInfoSchema = z.object({
  "PID": segments.pidSchema,
  "ACC": z.array(segments.accSchema).optional(),
  "INSURANCE": z.array(ehcE20InsuranceSchema),
  "DIAGNOSIS": z.array(ehcE20DiagnosisSchema).optional(),
  "OBX": z.array(segments.obxSchema).optional()
}).register(hl7v2Metadata, {
  title: "EHC_E20.PAT_INFO",
  version: "2.8",
  description: "HL7 v2.8 EHC_E20.PAT_INFO group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E20.PAT_INFO schema
 */
export type EHC_E20_PAT_INFO = z.infer<typeof ehcE20PatInfoSchema>;

/**
 * EHC_E20.AUTHORIZATION_REQUEST group schema
 * Defines the structure and validation rules for the EHC_E20.AUTHORIZATION_REQUEST group
 */
export const ehcE20AuthorizationRequestSchema = z.object({
  "IVC": segments.ivcSchema,
  "CTD": z.array(segments.ctdSchema),
  "LOC": z.array(segments.locSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "PAT_INFO": z.array(ehcE20PatInfoSchema),
  "PSL_ITEM_INFO": z.array(ehcE20PslItemInfoSchema)
}).register(hl7v2Metadata, {
  title: "EHC_E20.AUTHORIZATION_REQUEST",
  version: "2.8",
  description: "HL7 v2.8 EHC_E20.AUTHORIZATION_REQUEST group",
  type: "Group"
});

/**
 * TypeScript type inferred from the EHC_E20.AUTHORIZATION_REQUEST schema
 */
export type EHC_E20_AUTHORIZATION_REQUEST = z.infer<typeof ehcE20AuthorizationRequestSchema>;

/**
 * EHC_E20 message schema
 * Defines the structure and validation rules for the EHC_E20 message
 */
export const ehc_e20Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": z.array(segments.uacSchema).optional(),
  "AUTHORIZATION_REQUEST": ehcE20AuthorizationRequestSchema
}).register(hl7v2Metadata, {
  title: "EHC_E20",
  version: "2.8",
  description: "HL7 v2.8 EHC_E20 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the EHC_E20 schema
 */
export type EHC_E20 = z.infer<typeof ehc_e20Schema>;

/**
 * Default export for convenience
 */
export default ehc_e20Schema;