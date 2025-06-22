import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 MDM_T02 Message
 *
 * HL7 v2.6 MDM_T02 message definition
 * Contains segment definitions and constraints for the MDM_T02 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MDM_T02.TIMING group schema
 * Defines the structure and validation rules for the MDM_T02.TIMING group
 */
export const mdmT02TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'MDM_T02.TIMING',
    version: '2.6',
    description: 'HL7 v2.6 MDM_T02.TIMING group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the MDM_T02.TIMING schema
 */
export type MDM_T02_TIMING = z.infer<typeof mdmT02TimingSchema>;

/**
 * MDM_T02.OBSERVATION group schema
 * Defines the structure and validation rules for the MDM_T02.OBSERVATION group
 */
export const mdmT02ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'MDM_T02.OBSERVATION',
    version: '2.6',
    description: 'HL7 v2.6 MDM_T02.OBSERVATION group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the MDM_T02.OBSERVATION schema
 */
export type MDM_T02_OBSERVATION = z.infer<typeof mdmT02ObservationSchema>;

/**
 * MDM_T02.COMMON_ORDER group schema
 * Defines the structure and validation rules for the MDM_T02.COMMON_ORDER group
 */
export const mdmT02CommonOrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(mdmT02TimingSchema).optional(),
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'MDM_T02.COMMON_ORDER',
    version: '2.6',
    description: 'HL7 v2.6 MDM_T02.COMMON_ORDER group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the MDM_T02.COMMON_ORDER schema
 */
export type MDM_T02_COMMON_ORDER = z.infer<typeof mdmT02CommonOrderSchema>;

/**
 * MDM_T02 message schema
 * Defines the structure and validation rules for the MDM_T02 message
 */
export const mdm_t02Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PV1: segments.pv1Schema,
    COMMON_ORDER: z.array(mdmT02CommonOrderSchema).optional(),
    TXA: segments.txaSchema,
    OBSERVATION: z.array(mdmT02ObservationSchema),
  })
  .register(hl7v2Metadata, {
    title: 'MDM_T02',
    version: '2.6',
    description: 'HL7 v2.6 MDM_T02 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the MDM_T02 schema
 */
export type MDM_T02 = z.infer<typeof mdm_t02Schema>;

/**
 * Default export for convenience
 */
export default mdm_t02Schema;
