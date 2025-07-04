import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 BAR_P12 Message
 * 
 * HL7 v2.5 BAR_P12 message definition
 * Contains segment definitions and constraints for the BAR_P12 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * BAR_P12.PROCEDURE group schema
 * Defines the structure and validation rules for the BAR_P12.PROCEDURE group
 */
export const barP12ProcedureSchema = z.object({
  "PR1": segments.pr1Schema,
  "ROL": z.array(segments.rolSchema).optional()
}).register(hl7v2Metadata, {
  title: "BAR_P12.PROCEDURE",
  version: "2.5",
  description: "HL7 v2.5 BAR_P12.PROCEDURE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the BAR_P12.PROCEDURE schema
 */
export type BAR_P12_PROCEDURE = z.infer<typeof barP12ProcedureSchema>;

/**
 * BAR_P12 message schema
 * Defines the structure and validation rules for the BAR_P12 message
 */
export const bar_p12Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PV1": segments.pv1Schema,
  "DG1": z.array(segments.dg1Schema).optional(),
  "DRG": segments.drgSchema.optional(),
  "PROCEDURE": z.array(barP12ProcedureSchema).optional()
}).register(hl7v2Metadata, {
  title: "BAR_P12",
  version: "2.5",
  description: "HL7 v2.5 BAR_P12 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the BAR_P12 schema
 */
export type BAR_P12 = z.infer<typeof bar_p12Schema>;

/**
 * Default export for convenience
 */
export default bar_p12Schema;