import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 OSU_O52 Message
 * 
 * HL7 v2.9 OSU_O52 message definition
 * Contains segment definitions and constraints for the OSU_O52 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OSU_O52.PATIENT group schema
 * Defines the structure and validation rules for the OSU_O52.PATIENT group
 */
export const osuO52PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OSU_O52.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 OSU_O52.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OSU_O52.PATIENT schema
 */
export type OSU_O52_PATIENT = z.infer<typeof osuO52PatientSchema>;

/**
 * OSU_O52.ORDER_STATUS group schema
 * Defines the structure and validation rules for the OSU_O52.ORDER_STATUS group
 */
export const osuO52OrderStatusSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OSU_O52.ORDER_STATUS",
  version: "2.9",
  description: "HL7 v2.9 OSU_O52.ORDER_STATUS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OSU_O52.ORDER_STATUS schema
 */
export type OSU_O52_ORDER_STATUS = z.infer<typeof osuO52OrderStatusSchema>;

/**
 * OSU_O52 message schema
 * Defines the structure and validation rules for the OSU_O52 message
 */
export const osu_o52Schema = z.object({
  "MSH": segments.mshSchema,
  "MSA": segments.msaSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "ERR": z.array(segments.errSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": osuO52PatientSchema.optional(),
  "ARV_1": z.array(segments.arvSchema).optional(),
  "ORDER_STATUS": z.array(osuO52OrderStatusSchema)
}).register(hl7v2Metadata, {
  title: "OSU_O52",
  version: "2.9",
  description: "HL7 v2.9 OSU_O52 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OSU_O52 schema
 */
export type OSU_O52 = z.infer<typeof osu_o52Schema>;

/**
 * Default export for convenience
 */
export default osu_o52Schema;