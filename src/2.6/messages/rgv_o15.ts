import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 RGV_O15 Message
 *
 * HL7 v2.6 RGV_O15 message definition
 * Contains segment definitions and constraints for the RGV_O15 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RGV_O15.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the RGV_O15.PATIENT_VISIT group
 */
export const rgvO15PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.PATIENT_VISIT',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.PATIENT_VISIT group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.PATIENT_VISIT schema
 */
export type RGV_O15_PATIENT_VISIT = z.infer<typeof rgvO15PatientVisitSchema>;

/**
 * RGV_O15.TIMING group schema
 * Defines the structure and validation rules for the RGV_O15.TIMING group
 */
export const rgvO15TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.TIMING',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.TIMING group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.TIMING schema
 */
export type RGV_O15_TIMING = z.infer<typeof rgvO15TimingSchema>;

/**
 * RGV_O15.COMPONENTS group schema
 * Defines the structure and validation rules for the RGV_O15.COMPONENTS group
 */
export const rgvO15ComponentsSchema = z
  .object({
    RXC: segments.rxcSchema,
    NTE: z.array(segments.nteSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.COMPONENTS',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.COMPONENTS group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.COMPONENTS schema
 */
export type RGV_O15_COMPONENTS = z.infer<typeof rgvO15ComponentsSchema>;

/**
 * RGV_O15.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RGV_O15.TIMING_ENCODED group
 */
export const rgvO15TimingEncodedSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.TIMING_ENCODED',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.TIMING_ENCODED group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.TIMING_ENCODED schema
 */
export type RGV_O15_TIMING_ENCODED = z.infer<typeof rgvO15TimingEncodedSchema>;

/**
 * RGV_O15.TIMING_GIVE group schema
 * Defines the structure and validation rules for the RGV_O15.TIMING_GIVE group
 */
export const rgvO15TimingGiveSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.TIMING_GIVE',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.TIMING_GIVE group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.TIMING_GIVE schema
 */
export type RGV_O15_TIMING_GIVE = z.infer<typeof rgvO15TimingGiveSchema>;

/**
 * RGV_O15.OBSERVATION group schema
 * Defines the structure and validation rules for the RGV_O15.OBSERVATION group
 */
export const rgvO15ObservationSchema = z
  .object({
    OBX: segments.obxSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.OBSERVATION',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.OBSERVATION group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.OBSERVATION schema
 */
export type RGV_O15_OBSERVATION = z.infer<typeof rgvO15ObservationSchema>;

/**
 * RGV_O15.PATIENT group schema
 * Defines the structure and validation rules for the RGV_O15.PATIENT group
 */
export const rgvO15PatientSchema = z
  .object({
    PID: segments.pidSchema,
    NTE: z.array(segments.nteSchema).optional(),
    AL1: z.array(segments.al1Schema).optional(),
    PATIENT_VISIT: rgvO15PatientVisitSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.PATIENT',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.PATIENT group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.PATIENT schema
 */
export type RGV_O15_PATIENT = z.infer<typeof rgvO15PatientSchema>;

/**
 * RGV_O15.ORDER_DETAIL_SUPPLEMENT group schema
 * Defines the structure and validation rules for the RGV_O15.ORDER_DETAIL_SUPPLEMENT group
 */
export const rgvO15OrderDetailSupplementSchema = z
  .object({
    NTE: z.array(segments.nteSchema),
    RXR: z.array(segments.rxrSchema),
    COMPONENTS: z.array(rgvO15ComponentsSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.ORDER_DETAIL_SUPPLEMENT',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.ORDER_DETAIL_SUPPLEMENT group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.ORDER_DETAIL_SUPPLEMENT schema
 */
export type RGV_O15_ORDER_DETAIL_SUPPLEMENT = z.infer<typeof rgvO15OrderDetailSupplementSchema>;

/**
 * RGV_O15.ENCODING group schema
 * Defines the structure and validation rules for the RGV_O15.ENCODING group
 */
export const rgvO15EncodingSchema = z
  .object({
    RXE: segments.rxeSchema,
    TIMING_ENCODED: z.array(rgvO15TimingEncodedSchema),
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.ENCODING',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.ENCODING group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.ENCODING schema
 */
export type RGV_O15_ENCODING = z.infer<typeof rgvO15EncodingSchema>;

/**
 * RGV_O15.GIVE group schema
 * Defines the structure and validation rules for the RGV_O15.GIVE group
 */
export const rgvO15GiveSchema = z
  .object({
    RXG: segments.rxgSchema,
    TIMING_GIVE: z.array(rgvO15TimingGiveSchema),
    RXR: z.array(segments.rxrSchema),
    RXC: z.array(segments.rxcSchema).optional(),
    OBSERVATION: z.array(rgvO15ObservationSchema),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.GIVE',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.GIVE group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.GIVE schema
 */
export type RGV_O15_GIVE = z.infer<typeof rgvO15GiveSchema>;

/**
 * RGV_O15.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RGV_O15.ORDER_DETAIL group
 */
export const rgvO15OrderDetailSchema = z
  .object({
    RXO: segments.rxoSchema,
    ORDER_DETAIL_SUPPLEMENT: rgvO15OrderDetailSupplementSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.ORDER_DETAIL',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.ORDER_DETAIL group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.ORDER_DETAIL schema
 */
export type RGV_O15_ORDER_DETAIL = z.infer<typeof rgvO15OrderDetailSchema>;

/**
 * RGV_O15.ORDER group schema
 * Defines the structure and validation rules for the RGV_O15.ORDER group
 */
export const rgvO15OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(rgvO15TimingSchema).optional(),
    ORDER_DETAIL: rgvO15OrderDetailSchema.optional(),
    ENCODING: rgvO15EncodingSchema.optional(),
    GIVE: z.array(rgvO15GiveSchema),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15.ORDER',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15.ORDER group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the RGV_O15.ORDER schema
 */
export type RGV_O15_ORDER = z.infer<typeof rgvO15OrderSchema>;

/**
 * RGV_O15 message schema
 * Defines the structure and validation rules for the RGV_O15 message
 */
export const rgv_o15Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: rgvO15PatientSchema.optional(),
    ORDER: z.array(rgvO15OrderSchema),
  })
  .register(hl7v2Metadata, {
    title: 'RGV_O15',
    version: '2.6',
    description: 'HL7 v2.6 RGV_O15 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the RGV_O15 schema
 */
export type RGV_O15 = z.infer<typeof rgv_o15Schema>;

/**
 * Default export for convenience
 */
export default rgv_o15Schema;
