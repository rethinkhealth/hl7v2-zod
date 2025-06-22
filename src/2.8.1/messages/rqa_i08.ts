import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 RQA_I08 Message
 * 
 * HL7 v2.8 RQA_I08 message definition
 * Contains segment definitions and constraints for the RQA_I08 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RQA_I08.AUTHORIZATION group schema
 * Defines the structure and validation rules for the RQA_I08.AUTHORIZATION group
 */
export const rqaI08AuthorizationSchema = z.object({
  "AUT": segments.autSchema,
  "CTD": segments.ctdSchema.optional()
}).register(hl7v2Metadata, {
  title: "RQA_I08.AUTHORIZATION",
  version: "2.8",
  description: "HL7 v2.8 RQA_I08.AUTHORIZATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RQA_I08.AUTHORIZATION schema
 */
export type RQA_I08_AUTHORIZATION = z.infer<typeof rqaI08AuthorizationSchema>;

/**
 * RQA_I08.PROVIDER group schema
 * Defines the structure and validation rules for the RQA_I08.PROVIDER group
 */
export const rqaI08ProviderSchema = z.object({
  "PRD": segments.prdSchema,
  "CTD": z.array(segments.ctdSchema).optional()
}).register(hl7v2Metadata, {
  title: "RQA_I08.PROVIDER",
  version: "2.8",
  description: "HL7 v2.8 RQA_I08.PROVIDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RQA_I08.PROVIDER schema
 */
export type RQA_I08_PROVIDER = z.infer<typeof rqaI08ProviderSchema>;

/**
 * RQA_I08.INSURANCE group schema
 * Defines the structure and validation rules for the RQA_I08.INSURANCE group
 */
export const rqaI08InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": segments.in3Schema.optional()
}).register(hl7v2Metadata, {
  title: "RQA_I08.INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 RQA_I08.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RQA_I08.INSURANCE schema
 */
export type RQA_I08_INSURANCE = z.infer<typeof rqaI08InsuranceSchema>;

/**
 * RQA_I08.RESULTS group schema
 * Defines the structure and validation rules for the RQA_I08.RESULTS group
 */
export const rqaI08ResultsSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RQA_I08.RESULTS",
  version: "2.8",
  description: "HL7 v2.8 RQA_I08.RESULTS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RQA_I08.RESULTS schema
 */
export type RQA_I08_RESULTS = z.infer<typeof rqaI08ResultsSchema>;

/**
 * RQA_I08.VISIT group schema
 * Defines the structure and validation rules for the RQA_I08.VISIT group
 */
export const rqaI08VisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "RQA_I08.VISIT",
  version: "2.8",
  description: "HL7 v2.8 RQA_I08.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RQA_I08.VISIT schema
 */
export type RQA_I08_VISIT = z.infer<typeof rqaI08VisitSchema>;

/**
 * RQA_I08.PROCEDURE group schema
 * Defines the structure and validation rules for the RQA_I08.PROCEDURE group
 */
export const rqaI08ProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "AUTHORIZATION": rqaI08AuthorizationSchema.optional()
}).register(hl7v2Metadata, {
  title: "RQA_I08.PROCEDURE",
  version: "2.8",
  description: "HL7 v2.8 RQA_I08.PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RQA_I08.PROCEDURE schema
 */
export type RQA_I08_PROCEDURE = z.infer<typeof rqaI08ProcedureSchema>;

/**
 * RQA_I08.GUARANTOR_INSURANCE group schema
 * Defines the structure and validation rules for the RQA_I08.GUARANTOR_INSURANCE group
 */
export const rqaI08GuarantorInsuranceSchema = z.object({
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(rqaI08InsuranceSchema)
}).register(hl7v2Metadata, {
  title: "RQA_I08.GUARANTOR_INSURANCE",
  version: "2.8",
  description: "HL7 v2.8 RQA_I08.GUARANTOR_INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RQA_I08.GUARANTOR_INSURANCE schema
 */
export type RQA_I08_GUARANTOR_INSURANCE = z.infer<typeof rqaI08GuarantorInsuranceSchema>;

/**
 * RQA_I08.OBSERVATION group schema
 * Defines the structure and validation rules for the RQA_I08.OBSERVATION group
 */
export const rqaI08ObservationSchema = z.object({
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "RESULTS": z.array(rqaI08ResultsSchema).optional()
}).register(hl7v2Metadata, {
  title: "RQA_I08.OBSERVATION",
  version: "2.8",
  description: "HL7 v2.8 RQA_I08.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RQA_I08.OBSERVATION schema
 */
export type RQA_I08_OBSERVATION = z.infer<typeof rqaI08ObservationSchema>;

/**
 * RQA_I08 message schema
 * Defines the structure and validation rules for the RQA_I08 message
 */
export const rqa_i08Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "RF1": segments.rf1Schema.optional(),
  "AUTHORIZATION": rqaI08AuthorizationSchema.optional(),
  "PROVIDER": z.array(rqaI08ProviderSchema),
  "PID": segments.pidSchema,
  "NK1": z.array(segments.nk1Schema).optional(),
  "GUARANTOR_INSURANCE": rqaI08GuarantorInsuranceSchema.optional(),
  "ACC": segments.accSchema.optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": z.array(segments.drgSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "PROCEDURE": z.array(rqaI08ProcedureSchema).optional(),
  "OBSERVATION": z.array(rqaI08ObservationSchema).optional(),
  "VISIT": rqaI08VisitSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RQA_I08",
  version: "2.8",
  description: "HL7 v2.8 RQA_I08 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RQA_I08 schema
 */
export type RQA_I08 = z.infer<typeof rqa_i08Schema>;

/**
 * Default export for convenience
 */
export default rqa_i08Schema;