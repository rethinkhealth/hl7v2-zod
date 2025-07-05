import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 BAR_P05 Message
 * 
 * HL7 v2.6 BAR_P05 message definition
 * Contains segment definitions and constraints for the BAR_P05 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BAR_P05.PROCEDURE group schema
 * Defines the structure and validation rules for the BAR_P05.PROCEDURE group
 */
export const barP05ProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "BAR_P05.PROCEDURE",
  version: "2.6",
  description: "HL7 v2.6 BAR_P05.PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the BAR_P05.PROCEDURE schema
 */
export type BAR_P05_PROCEDURE = z.infer<typeof barP05ProcedureSchema>;

/**
 * BAR_P05.INSURANCE group schema
 * Defines the structure and validation rules for the BAR_P05.INSURANCE group
 */
export const barP05InsuranceSchema = z.object({
  "IN1": segments.in1Schema,
  "IN2": segments.in2Schema.optional(),
  "IN3": z.array(segments.in3Schema).optional(),
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "BAR_P05.INSURANCE",
  version: "2.6",
  description: "HL7 v2.6 BAR_P05.INSURANCE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the BAR_P05.INSURANCE schema
 */
export type BAR_P05_INSURANCE = z.infer<typeof barP05InsuranceSchema>;

/**
 * BAR_P05.VISIT group schema
 * Defines the structure and validation rules for the BAR_P05.VISIT group
 */
export const barP05VisitSchema = z.object({
  "PV1": segments.pv1Schema.optional(),
  "PV2": segments.pv2Schema.optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "DB1": z.array(segments.db1Schema).optional(),
  "OBX": z.array(segments.obxSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": segments.drgSchema.optional(),
  "PROCEDURE": z.array(barP05ProcedureSchema).optional(),
  "GT1": z.array(segments.gt1Schema).optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "INSURANCE": z.array(barP05InsuranceSchema).optional(),
  "ACC": segments.accSchema.optional(),
  "UB1": segments.ub1Schema.optional(),
  "UB2": segments.ub2Schema.optional(),
  "ABS": segments.absSchema.optional(),
  "BLC": z.array(segments.blcSchema).optional(),
  "RMI": segments.rmiSchema.optional()
}).register(hl7v2Metadata, {
  title: "BAR_P05.VISIT",
  version: "2.6",
  description: "HL7 v2.6 BAR_P05.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the BAR_P05.VISIT schema
 */
export type BAR_P05_VISIT = z.infer<typeof barP05VisitSchema>;

/**
 * BAR_P05 message schema
 * Defines the structure and validation rules for the BAR_P05 message
 */
export const bar_p05Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "ROL": z.array(segments.rolSchema).optional(),
  "VISIT": z.array(barP05VisitSchema)
}).register(hl7v2Metadata, {
  title: "BAR_P05",
  version: "2.6",
  description: "HL7 v2.6 BAR_P05 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the BAR_P05 schema
 */
export type BAR_P05 = z.infer<typeof bar_p05Schema>;

/**
 * Default export for convenience
 */
export default bar_p05Schema;