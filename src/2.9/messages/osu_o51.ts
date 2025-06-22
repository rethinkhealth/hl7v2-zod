import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 OSU_O51 Message
 * 
 * HL7 v2.9 OSU_O51 message definition
 * Contains segment definitions and constraints for the OSU_O51 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OSU_O51.ORDER_STATUS group schema
 * Defines the structure and validation rules for the OSU_O51.ORDER_STATUS group
 */
export const osuO51OrderStatusSchema = z.object({
  "ORC": segments.orcSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "OSU_O51.ORDER_STATUS",
  version: "2.9",
  description: "HL7 v2.9 OSU_O51.ORDER_STATUS group",
  type: "Group"
});

/**
 * TypeScript type inferred from the OSU_O51.ORDER_STATUS schema
 */
export type OSU_O51_ORDER_STATUS = z.infer<typeof osuO51OrderStatusSchema>;

/**
 * OSU_O51 message schema
 * Defines the structure and validation rules for the OSU_O51 message
 */
export const osu_o51Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PID": segments.pidSchema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV_1": z.array(segments.arvSchema).optional(),
  "ORDER_STATUS": z.array(osuO51OrderStatusSchema)
}).register(hl7v2Metadata, {
  title: "OSU_O51",
  version: "2.9",
  description: "HL7 v2.9 OSU_O51 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the OSU_O51 schema
 */
export type OSU_O51 = z.infer<typeof osu_o51Schema>;

/**
 * Default export for convenience
 */
export default osu_o51Schema;