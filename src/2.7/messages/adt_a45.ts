import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.7 ADT_A45 Message
 * 
 * HL7 v2.7 ADT_A45 message definition
 * Contains segment definitions and constraints for the ADT_A45 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A45.MERGE_INFO group schema
 * Defines the structure and validation rules for the ADT_A45.MERGE_INFO group
 */
export const adtA45MergeInfoSchema = z.object({
  "MRG": segments.mrgSchema,
  "PV1": segments.pv1Schema
}).register(hl7v2Metadata, {
  title: "ADT_A45.MERGE_INFO",
  version: "2.7",
  description: "HL7 v2.7 ADT_A45.MERGE_INFO group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A45.MERGE_INFO schema
 */
export type ADT_A45_MERGE_INFO = z.infer<typeof adtA45MergeInfoSchema>;

/**
 * ADT_A45 message schema
 * Defines the structure and validation rules for the ADT_A45 message
 */
export const adt_a45Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "MERGE_INFO": z.array(adtA45MergeInfoSchema)
}).register(hl7v2Metadata, {
  title: "ADT_A45",
  version: "2.7",
  description: "HL7 v2.7 ADT_A45 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A45 schema
 */
export type ADT_A45 = z.infer<typeof adt_a45Schema>;

/**
 * Default export for convenience
 */
export default adt_a45Schema;