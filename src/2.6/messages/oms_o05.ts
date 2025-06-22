import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 OMS_O05 Message
 *
 * HL7 v2.6 OMS_O05 message definition
 * Contains segment definitions and constraints for the OMS_O05 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OMS_O05.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the OMS_O05.PATIENT_VISIT group
 */
export const omsO05PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'OMS_O05.PATIENT_VISIT',
    version: '2.6',
    description: 'HL7 v2.6 OMS_O05.PATIENT_VISIT group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the OMS_O05.PATIENT_VISIT schema
 */
export type OMS_O05_PATIENT_VISIT = z.infer<typeof omsO05PatientVisitSchema>;

/**
 * OMS_O05.INSURANCE group schema
 * Defines the structure and validation rules for the OMS_O05.INSURANCE group
 */
export const omsO05InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'OMS_O05.INSURANCE',
    version: '2.6',
    description: 'HL7 v2.6 OMS_O05.INSURANCE group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the OMS_O05.INSURANCE schema
 */
export type OMS_O05_INSURANCE = z.infer<typeof omsO05InsuranceSchema>;

/**
 * OMS_O05.TIMING group schema
 * Defines the structure and validation rules for the OMS_O05.TIMING group
 */
export const omsO05TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'OMS_O05.TIMING',
    version: '2.6',
    description: 'HL7 v2.6 OMS_O05.TIMING group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the OMS_O05.TIMING schema
 */
export type OMS_O05_TIMING = z.infer<typeof omsO05TimingSchema>;

/**
 * OMS_O05.OBSERVATION group schema
 * Defines the structure and validation rules for the OMS_O05.OBSERVATION group
 */
export const omsO05ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'OMS_O05.OBSERVATION',
    version: '2.6',
    description: 'HL7 v2.6 OMS_O05.OBSERVATION group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the OMS_O05.OBSERVATION schema
 */
export type OMS_O05_OBSERVATION = z.infer<typeof omsO05ObservationSchema>;

/**
 * OMS_O05.PATIENT group schema
 * Defines the structure and validation rules for the OMS_O05.PATIENT group
 */
export const omsO05PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT_VISIT: omsO05PatientVisitSchema.optional(),
    INSURANCE: z.array(omsO05InsuranceSchema).optional(),
    GT1: segments.gt1Schema.optional(),
    AL1: z.array(segments.al1Schema).optional(),
  })
  .register(hl7v2Metadata, {
    title: 'OMS_O05.PATIENT',
    version: '2.6',
    description: 'HL7 v2.6 OMS_O05.PATIENT group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the OMS_O05.PATIENT schema
 */
export type OMS_O05_PATIENT = z.infer<typeof omsO05PatientSchema>;

/**
 * OMS_O05.ORDER group schema
 * Defines the structure and validation rules for the OMS_O05.ORDER group
 */
export const omsO05OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(omsO05TimingSchema).optional(),
    RQD: segments.rqdSchema,
    RQ1: segments.rq1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    OBSERVATION: z.array(omsO05ObservationSchema).optional(),
    BLG: segments.blgSchema.optional(),
  })
  .register(hl7v2Metadata, {
    title: 'OMS_O05.ORDER',
    version: '2.6',
    description: 'HL7 v2.6 OMS_O05.ORDER group',
    type: 'Group',
  });

/**
 * TypeScript type inferred from the OMS_O05.ORDER schema
 */
export type OMS_O05_ORDER = z.infer<typeof omsO05OrderSchema>;

/**
 * OMS_O05 message schema
 * Defines the structure and validation rules for the OMS_O05 message
 */
export const oms_o05Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: omsO05PatientSchema.optional(),
    ORDER: z.array(omsO05OrderSchema),
  })
  .register(hl7v2Metadata, {
    title: 'OMS_O05',
    version: '2.6',
    description: 'HL7 v2.6 OMS_O05 message',
    type: 'Message',
  });

/**
 * TypeScript type inferred from the OMS_O05 schema
 */
export type OMS_O05 = z.infer<typeof oms_o05Schema>;

/**
 * Default export for convenience
 */
export default oms_o05Schema;
