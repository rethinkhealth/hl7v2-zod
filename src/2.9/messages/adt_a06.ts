import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ADT_A06 Message
 * 
 * HL7 v2.9 ADT_A06 message definition
 * Contains segment definitions and constraints for the ADT_A06 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A06.NEXT_OF_KIN group schema
 * Defines the structure and validation rules for the ADT_A06.NEXT_OF_KIN group
 */
export const adtA06NextOfKinSchema = z.object({
  "NK1": segments.nk1Schema,
  "OH2": z.array(segments.oh2Schema).optional(),
  "OH3": segments.oh3Schema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A06.NEXT_OF_KIN",
  version: "2.9",
  description: "HL7 v2.9 ADT_A06.NEXT_OF_KIN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A06.NEXT_OF_KIN schema
 */
export type ADT_A06_NEXT_OF_KIN = z.infer<typeof adtA06NextOfKinSchema>;

/**
 * ADT_A06.OBSERVATION group schema
 * Defines the structure and validation rules for the ADT_A06.OBSERVATION group
 */
export const adtA06ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A06.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 ADT_A06.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A06.OBSERVATION schema
 */
export type ADT_A06_OBSERVATION = z.infer<typeof adtA06ObservationSchema>;

/**
 * ADT_A06.PROCEDURE group schema
 * Defines the structure and validation rules for the ADT_A06.PROCEDURE group
 */
export const adtA06ProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "ROL": z.array(segments.rolSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A06.PROCEDURE",
  version: "2.9",
  description: "HL7 v2.9 ADT_A06.PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A06.PROCEDURE schema
 */
export type ADT_A06_PROCEDURE = z.infer<typeof adtA06ProcedureSchema>;

/**
 * ADT_A06.INSURANCE group schema
 * Defines the structure and validation rules for the ADT_A06.INSURANCE group
 */
export const adtA06InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": z.array(segments.in3Schema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A06.INSURANCE",
  version: "2.9",
  description: "HL7 v2.9 ADT_A06.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A06.INSURANCE schema
 */
export type ADT_A06_INSURANCE = z.infer<typeof adtA06InsuranceSchema>;

/**
 * ADT_A06 message schema
 * Defines the structure and validation rules for the ADT_A06 message
 */
export const adt_a06Schema = z.object({
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
  "MRG": segments.mrgSchema.optional(),
  "NEXT_OF_KIN": z.array(adtA06NextOfKinSchema).optional(),
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "ARV_2": z.array(segments.arvSchema).optional(),
  "ROL_1": z.array(segments.rolSchema).optional(),
  "PRT_1": z.array(segments.prtSchema).optional(),
  "DB1": z.array(segments.db1Schema).optional(),
  "OBSERVATION": z.array(adtA06ObservationSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "IAM": z.array(segments.iamSchema).optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": segments.drgSchema.optional(),
  "PROCEDURE": z.array(adtA06ProcedureSchema).optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(adtA06InsuranceSchema).optional(),
  "ACC": segments.accSchema.optional(),
  "UB1": segments.ub1Schema.optional(),
  "UB2": segments.ub2Schema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A06",
  version: "2.9",
  description: "HL7 v2.9 ADT_A06 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A06 schema
 */
export type ADT_A06 = z.infer<typeof adt_a06Schema>;

/**
 * Default export for convenience
 */
export default adt_a06Schema;