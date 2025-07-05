import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.7 ADT_A60 Message
 *
 * HL7 v2.7 ADT_A60 message definition
 * Contains segment definitions and constraints for the ADT_A60 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A60.VISIT group schema
 * Defines the structure and validation rules for the ADT_A60.VISIT group
 */
export const adtA60VisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
    ARV: z.array(segments.arvSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ADT_A60.VISIT",
    version: "2.7",
    description: "HL7 v2.7 ADT_A60.VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ADT_A60.VISIT schema
 */
export type ADT_A60_VISIT = z.infer<typeof adtA60VisitSchema>;

/**
 * ADT_A60.ADVERSE_REACTION_GROUP group schema
 * Defines the structure and validation rules for the ADT_A60.ADVERSE_REACTION_GROUP group
 */
export const adtA60AdverseReactionGroupSchema = z
  .object({
    IAM: segments.iamSchema,
    NTE: z.array(segments.nteSchema).optional(),
    IAR: z.array(segments.iarSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ADT_A60.ADVERSE_REACTION_GROUP",
    version: "2.7",
    description: "HL7 v2.7 ADT_A60.ADVERSE_REACTION_GROUP group",
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
export const adt_a60Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    ARV: z.array(segments.arvSchema).optional(),
    VISIT: adtA60VisitSchema.optional(),
    ADVERSE_REACTION_GROUP: z.array(adtA60AdverseReactionGroupSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ADT_A60",
    version: "2.7",
    description: "HL7 v2.7 ADT_A60 message",
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
