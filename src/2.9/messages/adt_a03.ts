import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ADT_A03 Message
 * 
 * HL7 v2.9 ADT_A03 message definition
 * Contains segment definitions and constraints for the ADT_A03 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A03.NEXT_OF_KIN group schema
 * Defines the structure and validation rules for the ADT_A03.NEXT_OF_KIN group
 */
export const adtA03NextOfKinSchema = z.object({
  "NK1": segments.nk1Schema,
  "OH2": z.array(segments.oh2Schema).optional(),
  "OH3": segments.oh3Schema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A03.NEXT_OF_KIN",
  version: "2.9",
  description: "HL7 v2.9 ADT_A03.NEXT_OF_KIN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A03.NEXT_OF_KIN schema
 */
export type ADT_A03_NEXT_OF_KIN = z.infer<typeof adtA03NextOfKinSchema>;

/**
 * ADT_A03.PROCEDURE group schema
 * Defines the structure and validation rules for the ADT_A03.PROCEDURE group
 */
export const adtA03ProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "ROL": z.array(segments.rolSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A03.PROCEDURE",
  version: "2.9",
  description: "HL7 v2.9 ADT_A03.PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A03.PROCEDURE schema
 */
export type ADT_A03_PROCEDURE = z.infer<typeof adtA03ProcedureSchema>;

/**
 * ADT_A03.OBSERVATION group schema
 * Defines the structure and validation rules for the ADT_A03.OBSERVATION group
 */
export const adtA03ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A03.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 ADT_A03.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A03.OBSERVATION schema
 */
export type ADT_A03_OBSERVATION = z.infer<typeof adtA03ObservationSchema>;

/**
 * ADT_A03.AUTHORIZATION group schema
 * Defines the structure and validation rules for the ADT_A03.AUTHORIZATION group
 */
export const adtA03AuthorizationSchema = z.object({
  "AUT": segments.autSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A03.AUTHORIZATION",
  version: "2.9",
  description: "HL7 v2.9 ADT_A03.AUTHORIZATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A03.AUTHORIZATION schema
 */
export type ADT_A03_AUTHORIZATION = z.infer<typeof adtA03AuthorizationSchema>;

/**
 * ADT_A03.REFERRAL group schema
 * Defines the structure and validation rules for the ADT_A03.REFERRAL group
 */
export const adtA03ReferralSchema = z.object({
  "RF1": segments.rf1Schema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A03.REFERRAL",
  version: "2.9",
  description: "HL7 v2.9 ADT_A03.REFERRAL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A03.REFERRAL schema
 */
export type ADT_A03_REFERRAL = z.infer<typeof adtA03ReferralSchema>;

/**
 * ADT_A03.INSURANCE group schema
 * Defines the structure and validation rules for the ADT_A03.INSURANCE group
 */
export const adtA03InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": z.array(segments.in3Schema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "AUTHORIZATION": z.array(adtA03AuthorizationSchema).optional(),
  "REFERRAL": z.array(adtA03ReferralSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A03.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 ADT_A03.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A03.INSURANCE schema
 */
export type ADT_A03_INSURANCE = z.infer<typeof adtA03InsuranceSchema>;

/**
 * ADT_A03 message schema
 * Defines the structure and validation rules for the ADT_A03 message
 */
export const adt_a03Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "OH1": z.array(segments.oh1Schema).optional(),
  "OH2": z.array(segments.oh2Schema).optional(),
  "OH3": segments.oh3Schema.optional(),
  "OH4": z.array(segments.oh4Schema).optional(),
  "ARV_1": z.array(segments.arvSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NEXT_OF_KIN": z.array(adtA03NextOfKinSchema).optional(),
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "ARV_2": z.array(segments.arvSchema).optional(),
  "ROL_1": z.array(segments.rolSchema).optional(),
  "PRT_1": z.array(segments.prtSchema).optional(),
  "DB1": z.array(segments.db1Schema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "IAM": z.array(segments.iamSchema).optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": segments.drgSchema.optional(),
  "PROCEDURE": z.array(adtA03ProcedureSchema).optional(),
  "OBSERVATION": z.array(adtA03ObservationSchema).optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(adtA03InsuranceSchema).optional(),
  "ACC": segments.accSchema.optional(),
  "PDA": segments.pdaSchema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A03",
  version: "2.9",
  description: "HL7 v2.9 ADT_A03 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A03 schema
 */
export type ADT_A03 = z.infer<typeof adt_a03Schema>;

/**
 * Default export for convenience
 */
export default adt_a03Schema;