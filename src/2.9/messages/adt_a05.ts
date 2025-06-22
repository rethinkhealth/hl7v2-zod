import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ADT_A05 Message
 * 
 * HL7 v2.9 ADT_A05 message definition
 * Contains segment definitions and constraints for the ADT_A05 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A05.NEXT_OF_KIN group schema
 * Defines the structure and validation rules for the ADT_A05.NEXT_OF_KIN group
 */
export const adtA05NextOfKinSchema = z.object({
  "NK1": segments.nk1Schema,
  "OH2": z.array(segments.oh2Schema).optional(),
  "OH3": segments.oh3Schema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A05.NEXT_OF_KIN",
  version: "2.9",
  description: "HL7 v2.9 ADT_A05.NEXT_OF_KIN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A05.NEXT_OF_KIN schema
 */
export type ADT_A05_NEXT_OF_KIN = z.infer<typeof adtA05NextOfKinSchema>;

/**
 * ADT_A05.OBSERVATION group schema
 * Defines the structure and validation rules for the ADT_A05.OBSERVATION group
 */
export const adtA05ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A05.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 ADT_A05.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A05.OBSERVATION schema
 */
export type ADT_A05_OBSERVATION = z.infer<typeof adtA05ObservationSchema>;

/**
 * ADT_A05.PROCEDURE group schema
 * Defines the structure and validation rules for the ADT_A05.PROCEDURE group
 */
export const adtA05ProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "ROL": z.array(segments.rolSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A05.PROCEDURE",
  version: "2.9",
  description: "HL7 v2.9 ADT_A05.PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A05.PROCEDURE schema
 */
export type ADT_A05_PROCEDURE = z.infer<typeof adtA05ProcedureSchema>;

/**
 * ADT_A05.AUTHORIZATION group schema
 * Defines the structure and validation rules for the ADT_A05.AUTHORIZATION group
 */
export const adtA05AuthorizationSchema = z.object({
  "AUT": segments.autSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A05.AUTHORIZATION",
  version: "2.9",
  description: "HL7 v2.9 ADT_A05.AUTHORIZATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A05.AUTHORIZATION schema
 */
export type ADT_A05_AUTHORIZATION = z.infer<typeof adtA05AuthorizationSchema>;

/**
 * ADT_A05.REFERRAL group schema
 * Defines the structure and validation rules for the ADT_A05.REFERRAL group
 */
export const adtA05ReferralSchema = z.object({
  "RF1": segments.rf1Schema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A05.REFERRAL",
  version: "2.9",
  description: "HL7 v2.9 ADT_A05.REFERRAL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A05.REFERRAL schema
 */
export type ADT_A05_REFERRAL = z.infer<typeof adtA05ReferralSchema>;

/**
 * ADT_A05.INSURANCE group schema
 * Defines the structure and validation rules for the ADT_A05.INSURANCE group
 */
export const adtA05InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": z.array(segments.in3Schema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "AUTHORIZATION": z.array(adtA05AuthorizationSchema).optional(),
  "REFERRAL": z.array(adtA05ReferralSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A05.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 ADT_A05.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A05.INSURANCE schema
 */
export type ADT_A05_INSURANCE = z.infer<typeof adtA05InsuranceSchema>;

/**
 * ADT_A05 message schema
 * Defines the structure and validation rules for the ADT_A05 message
 */
export const adt_a05Schema = z.object({
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
  "NEXT_OF_KIN": z.array(adtA05NextOfKinSchema).optional(),
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "ARV_2": z.array(segments.arvSchema).optional(),
  "ROL_1": z.array(segments.rolSchema).optional(),
  "PRT_1": z.array(segments.prtSchema).optional(),
  "DB1": z.array(segments.db1Schema).optional(),
  "OBSERVATION": z.array(adtA05ObservationSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "IAM": z.array(segments.iamSchema).optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": segments.drgSchema.optional(),
  "PROCEDURE": z.array(adtA05ProcedureSchema).optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(adtA05InsuranceSchema).optional(),
  "ACC": segments.accSchema.optional(),
  "UB1": segments.ub1Schema.optional(),
  "UB2": segments.ub2Schema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A05",
  version: "2.9",
  description: "HL7 v2.9 ADT_A05 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A05 schema
 */
export type ADT_A05 = z.infer<typeof adt_a05Schema>;

/**
 * Default export for convenience
 */
export default adt_a05Schema;