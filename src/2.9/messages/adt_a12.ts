import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 ADT_A12 Message
 * 
 * HL7 v2.9 ADT_A12 message definition
 * Contains segment definitions and constraints for the ADT_A12 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A12.OBSERVATION group schema
 * Defines the structure and validation rules for the ADT_A12.OBSERVATION group
 */
export const adtA12ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "ADT_A12.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 ADT_A12.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the ADT_A12.OBSERVATION schema
 */
export type ADT_A12_OBSERVATION = z.infer<typeof adtA12ObservationSchema>;

/**
 * ADT_A12 message schema
 * Defines the structure and validation rules for the ADT_A12 message
 */
export const adt_a12Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "EVN": segments.evnSchema,
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "DB1": z.array(segments.db1Schema).optional(),
  "OBSERVATION": z.array(adtA12ObservationSchema).optional(),
  "DG1": segments.dg1Schema.optional()
}).register(hl7v2Metadata, {
  title: "ADT_A12",
  version: "2.9",
  description: "HL7 v2.9 ADT_A12 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the ADT_A12 schema
 */
export type ADT_A12 = z.infer<typeof adt_a12Schema>;

/**
 * Default export for convenience
 */
export default adt_a12Schema;