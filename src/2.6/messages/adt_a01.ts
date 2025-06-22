import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 ADT_A01 Message
 * 
 * HL7 v2.6 ADT_A01 message definition
 * Contains segment definitions and constraints for the ADT_A01 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A01.PROCEDURE group schema
 * Defines the structure and validation rules for the ADT_A01.PROCEDURE group
 */
export const adtA01ProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A01.PROCEDURE",
  version: "2.6",
  description: "HL7 v2.6 ADT_A01.PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A01.PROCEDURE schema
 */
export type ADT_A01_PROCEDURE = z.infer<typeof adtA01ProcedureSchema>;

/**
 * ADT_A01.INSURANCE group schema
 * Defines the structure and validation rules for the ADT_A01.INSURANCE group
 */
export const adtA01InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": z.array(segments.in3Schema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A01.INSURANCE",
  version: "2.6",
  description: "HL7 v2.6 ADT_A01.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A01.INSURANCE schema
 */
export type ADT_A01_INSURANCE = z.infer<typeof adtA01InsuranceSchema>;

/**
 * ADT_A01 message schema
 * Defines the structure and validation rules for the ADT_A01 message
 */
export const adt_a01Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "ARV_1": z.array(segments.arvSchema).optional(),
  "ROL_1": z.array(segments.rolSchema).optional(),
  "DB1": z.array(segments.db1Schema).optional(),
  "OBX": z.array(segments.obxSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": segments.drgSchema.optional(),
  "PROCEDURE": z.array(adtA01ProcedureSchema).optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "INSURANCE": z.array(adtA01InsuranceSchema).optional(),
  "ACC": segments.accSchema.optional(),
  "UB1": segments.ub1Schema.optional(),
  "UB2": segments.ub2Schema.optional(),
  "PDA": segments.pdaSchema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A01",
  version: "2.6",
  description: "HL7 v2.6 ADT_A01 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A01 schema
 */
export type ADT_A01 = z.infer<typeof adt_a01Schema>;

/**
 * Default export for convenience
 */
export default adt_a01Schema;