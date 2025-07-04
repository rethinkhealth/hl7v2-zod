import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 ADT_A05 Message
 * 
 * HL7 v2.5 ADT_A05 message definition
 * Contains segment definitions and constraints for the ADT_A05 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A05.PROCEDURE group schema
 * Defines the structure and validation rules for the ADT_A05.PROCEDURE group
 */
export const adtA05ProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A05.PROCEDURE",
  version: "2.5",
  description: "HL7 v2.5 ADT_A05.PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A05.PROCEDURE schema
 */
export type ADT_A05_PROCEDURE = z.infer<typeof adtA05ProcedureSchema>;

/**
 * ADT_A05.INSURANCE group schema
 * Defines the structure and validation rules for the ADT_A05.INSURANCE group
 */
export const adtA05InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": z.array(segments.in3Schema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A05.INSURANCE",
  version: "2.5",
  description: "HL7 v2.5 ADT_A05.INSURANCE group",
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
  "SFT": z.array(segments.sftSchema).optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "ROL_1": z.array(segments.rolSchema).optional(),
  "DB1": z.array(segments.db1Schema).optional(),
  "OBX": z.array(segments.obxSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
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
  version: "2.5",
  description: "HL7 v2.5 ADT_A05 message",
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