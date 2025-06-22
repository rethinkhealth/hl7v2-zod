import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 ADT_A30 Message
 *
 * HL7 v2.6 ADT_A30 message definition
 * Contains segment definitions and constraints for the ADT_A30 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ADT_A30 message schema
 * Defines the structure and validation rules for the ADT_A30 message
 */
export const adt_a30Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    ARV: z.array(segments.arvSchema).optional(),
    MRG: segments.mrgSchema,
  })
  .register(hl7v2Metadata, {
    title: 'ADT_A30',
    version: '2.6',
    description: 'HL7 v2.6 ADT_A30 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the ADT_A30 schema
 */
export type ADT_A30 = z.infer<typeof adt_a30Schema>;

/**
 * Default export for convenience
 */
export default adt_a30Schema;
