import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ADT_A60 Message
 * 
 * HL7 v2.9 ADT_A60 message definition
 * Contains segment definitions and constraints for the ADT_A60 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A60.VISIT_GROUP group schema
 * Defines the structure and validation rules for the ADT_A60.VISIT_GROUP group
 */
export const adtA60VisitGroupSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "ARV": z.array(segments.arvSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A60.VISIT_GROUP",
  version: "2.9",
  description: "HL7 v2.9 ADT_A60.VISIT_GROUP group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A60.VISIT_GROUP schema
 */
export type ADT_A60_VISIT_GROUP = z.infer<typeof adtA60VisitGroupSchema>;

/**
 * ADT_A60.ADVERSE_REACTION_GROUP group schema
 * Defines the structure and validation rules for the ADT_A60.ADVERSE_REACTION_GROUP group
 */
export const adtA60AdverseReactionGroupSchema = z.object({
  "IAM": segments.iamSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "IAR": z.array(segments.iarSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A60.ADVERSE_REACTION_GROUP",
  version: "2.9",
  description: "HL7 v2.9 ADT_A60.ADVERSE_REACTION_GROUP group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A60.ADVERSE_REACTION_GROUP schema
 */
export type ADT_A60_ADVERSE_REACTION_GROUP = z.infer<typeof adtA60AdverseReactionGroupSchema>;

/**
 * ADT_A60 message schema
 * Defines the structure and validation rules for the ADT_A60 message
 */
export const adt_a60Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "ARV_1": z.array(segments.arvSchema).optional(),
  "VISIT_GROUP": adtA60VisitGroupSchema.optional(),
  "ADVERSE_REACTION_GROUP": z.array(adtA60AdverseReactionGroupSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A60",
  version: "2.9",
  description: "HL7 v2.9 ADT_A60 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A60 schema
 */
export type ADT_A60 = z.infer<typeof adt_a60Schema>;

/**
 * Default export for convenience
 */
export default adt_a60Schema;