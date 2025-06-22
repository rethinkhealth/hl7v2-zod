import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 RSP_Z82 Message
 * 
 * HL7 v2.9 RSP_Z82 message definition
 * Contains segment definitions and constraints for the RSP_Z82 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_Z82.VISIT group schema
 * Defines the structure and validation rules for the RSP_Z82.VISIT group
 */
export const rspZ82VisitSchema = z.object({
  "AL1": z.array(segments.al1Schema),
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z82.VISIT",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.VISIT schema
 */
export type RSP_Z82_VISIT = z.infer<typeof rspZ82VisitSchema>;

/**
 * RSP_Z82.TIMING group schema
 * Defines the structure and validation rules for the RSP_Z82.TIMING group
 */
export const rspZ82TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z82.TIMING",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.TIMING schema
 */
export type RSP_Z82_TIMING = z.infer<typeof rspZ82TimingSchema>;

/**
 * RSP_Z82.TREATMENT group schema
 * Defines the structure and validation rules for the RSP_Z82.TREATMENT group
 */
export const rspZ82TreatmentSchema = z.object({
  "RXC": z.array(segments.rxcSchema),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z82.TREATMENT",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.TREATMENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.TREATMENT schema
 */
export type RSP_Z82_TREATMENT = z.infer<typeof rspZ82TreatmentSchema>;

/**
 * RSP_Z82.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RSP_Z82.TIMING_ENCODED group
 */
export const rspZ82TimingEncodedSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z82.TIMING_ENCODED",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.TIMING_ENCODED group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.TIMING_ENCODED schema
 */
export type RSP_Z82_TIMING_ENCODED = z.infer<typeof rspZ82TimingEncodedSchema>;

/**
 * RSP_Z82.OBSERVATION group schema
 * Defines the structure and validation rules for the RSP_Z82.OBSERVATION group
 */
export const rspZ82ObservationSchema = z.object({
  "OBX": segments.obxSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z82.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.OBSERVATION schema
 */
export type RSP_Z82_OBSERVATION = z.infer<typeof rspZ82ObservationSchema>;

/**
 * RSP_Z82.PATIENT group schema
 * Defines the structure and validation rules for the RSP_Z82.PATIENT group
 */
export const rspZ82PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "VISIT": rspZ82VisitSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z82.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.PATIENT schema
 */
export type RSP_Z82_PATIENT = z.infer<typeof rspZ82PatientSchema>;

/**
 * RSP_Z82.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RSP_Z82.ORDER_DETAIL group
 */
export const rspZ82OrderDetailSchema = z.object({
  "RXO": segments.rxoSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "RXR": z.array(segments.rxrSchema),
  "TREATMENT": rspZ82TreatmentSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z82.ORDER_DETAIL",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.ORDER_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.ORDER_DETAIL schema
 */
export type RSP_Z82_ORDER_DETAIL = z.infer<typeof rspZ82OrderDetailSchema>;

/**
 * RSP_Z82.ENCODED_ORDER group schema
 * Defines the structure and validation rules for the RSP_Z82.ENCODED_ORDER group
 */
export const rspZ82EncodedOrderSchema = z.object({
  "RXE": segments.rxeSchema,
  "TIMING_ENCODED": z.array(rspZ82TimingEncodedSchema).optional(),
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z82.ENCODED_ORDER",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.ENCODED_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.ENCODED_ORDER schema
 */
export type RSP_Z82_ENCODED_ORDER = z.infer<typeof rspZ82EncodedOrderSchema>;

/**
 * RSP_Z82.COMMON_ORDER group schema
 * Defines the structure and validation rules for the RSP_Z82.COMMON_ORDER group
 */
export const rspZ82CommonOrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(rspZ82TimingSchema).optional(),
  "ORDER_DETAIL": rspZ82OrderDetailSchema.optional(),
  "ENCODED_ORDER": rspZ82EncodedOrderSchema.optional(),
  "RXD": segments.rxdSchema,
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional(),
  "OBSERVATION": z.array(rspZ82ObservationSchema)
}).register(hl7v2Metadata, {
  title: "RSP_Z82.COMMON_ORDER",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.COMMON_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.COMMON_ORDER schema
 */
export type RSP_Z82_COMMON_ORDER = z.infer<typeof rspZ82CommonOrderSchema>;

/**
 * RSP_Z82.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the RSP_Z82.QUERY_RESPONSE group
 */
export const rspZ82QueryResponseSchema = z.object({
  "PATIENT": rspZ82PatientSchema.optional(),
  "COMMON_ORDER": z.array(rspZ82CommonOrderSchema)
}).register(hl7v2Metadata, {
  title: "RSP_Z82.QUERY_RESPONSE",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82.QUERY_RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z82.QUERY_RESPONSE schema
 */
export type RSP_Z82_QUERY_RESPONSE = z.infer<typeof rspZ82QueryResponseSchema>;

/**
 * RSP_Z82 message schema
 * Defines the structure and validation rules for the RSP_Z82 message
 */
export const rsp_z82Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "RCP": segments.rcpSchema,
  "QUERY_RESPONSE": z.array(rspZ82QueryResponseSchema),
  "DSC": segments.dscSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z82",
  version: "2.9",
  description: "HL7 v2.9 RSP_Z82 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_Z82 schema
 */
export type RSP_Z82 = z.infer<typeof rsp_z82Schema>;

/**
 * Default export for convenience
 */
export default rsp_z82Schema;