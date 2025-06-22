import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.9 RCV_O59 Message
 * 
 * HL7 v2.9 RCV_O59 message definition
 * Contains segment definitions and constraints for the RCV_O59 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RCV_O59.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the RCV_O59.PATIENT_VISIT group
 */
export const rcvO59PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.PATIENT_VISIT",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.PATIENT_VISIT schema
 */
export type RCV_O59_PATIENT_VISIT = z.infer<typeof rcvO59PatientVisitSchema>;

/**
 * RCV_O59.TIMING group schema
 * Defines the structure and validation rules for the RCV_O59.TIMING group
 */
export const rcvO59TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.TIMING",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.TIMING schema
 */
export type RCV_O59_TIMING = z.infer<typeof rcvO59TimingSchema>;

/**
 * RCV_O59.COMPONENT group schema
 * Defines the structure and validation rules for the RCV_O59.COMPONENT group
 */
export const rcvO59ComponentSchema = z.object({
  "RXC": segments.rxcSchema,
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.COMPONENT",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.COMPONENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.COMPONENT schema
 */
export type RCV_O59_COMPONENT = z.infer<typeof rcvO59ComponentSchema>;

/**
 * RCV_O59.TIMING_ENCODED group schema
 * Defines the structure and validation rules for the RCV_O59.TIMING_ENCODED group
 */
export const rcvO59TimingEncodedSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.TIMING_ENCODED",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.TIMING_ENCODED group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.TIMING_ENCODED schema
 */
export type RCV_O59_TIMING_ENCODED = z.infer<typeof rcvO59TimingEncodedSchema>;

/**
 * RCV_O59.OBSERVATION group schema
 * Defines the structure and validation rules for the RCV_O59.OBSERVATION group
 */
export const rcvO59ObservationSchema = z.object({
  "OBX": segments.obxSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.OBSERVATION",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.OBSERVATION schema
 */
export type RCV_O59_OBSERVATION = z.infer<typeof rcvO59ObservationSchema>;

/**
 * RCV_O59.PATIENT group schema
 * Defines the structure and validation rules for the RCV_O59.PATIENT group
 */
export const rcvO59PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "AL1": z.array(segments.al1Schema).optional(),
  "PATIENT_VISIT": rcvO59PatientVisitSchema.optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.PATIENT",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.PATIENT schema
 */
export type RCV_O59_PATIENT = z.infer<typeof rcvO59PatientSchema>;

/**
 * RCV_O59.ORDER_DETAIL_SUPPLEMENT group schema
 * Defines the structure and validation rules for the RCV_O59.ORDER_DETAIL_SUPPLEMENT group
 */
export const rcvO59OrderDetailSupplementSchema = z.object({
  "NTE": z.array(segments.nteSchema),
  "RXR": z.array(segments.rxrSchema),
  "COMPONENT": z.array(rcvO59ComponentSchema).optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.ORDER_DETAIL_SUPPLEMENT",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.ORDER_DETAIL_SUPPLEMENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.ORDER_DETAIL_SUPPLEMENT schema
 */
export type RCV_O59_ORDER_DETAIL_SUPPLEMENT = z.infer<typeof rcvO59OrderDetailSupplementSchema>;

/**
 * RCV_O59.ENCODING group schema
 * Defines the structure and validation rules for the RCV_O59.ENCODING group
 */
export const rcvO59EncodingSchema = z.object({
  "RXE": segments.rxeSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "TIMING_ENCODED": z.array(rcvO59TimingEncodedSchema),
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.ENCODING",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.ENCODING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.ENCODING schema
 */
export type RCV_O59_ENCODING = z.infer<typeof rcvO59EncodingSchema>;

/**
 * RCV_O59.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the RCV_O59.ORDER_DETAIL group
 */
export const rcvO59OrderDetailSchema = z.object({
  "RXO": segments.rxoSchema,
  "ORDER_DETAIL_SUPPLEMENT": rcvO59OrderDetailSupplementSchema.optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.ORDER_DETAIL",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.ORDER_DETAIL group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.ORDER_DETAIL schema
 */
export type RCV_O59_ORDER_DETAIL = z.infer<typeof rcvO59OrderDetailSchema>;

/**
 * RCV_O59.ORDER group schema
 * Defines the structure and validation rules for the RCV_O59.ORDER group
 */
export const rcvO59OrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(rcvO59TimingSchema).optional(),
  "ORDER_DETAIL": rcvO59OrderDetailSchema.optional(),
  "PRT": z.array(segments.prtSchema).optional(),
  "ENCODING": rcvO59EncodingSchema.optional(),
  "RXD": segments.rxdSchema,
  "PRT_1": z.array(segments.prtSchema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "RXR": z.array(segments.rxrSchema),
  "RXC": z.array(segments.rxcSchema).optional(),
  "OBSERVATION": z.array(rcvO59ObservationSchema).optional(),
  "FT1": z.array(segments.ft1Schema).optional()
}).register(hl7v2Metadata, {
  title: "RCV_O59.ORDER",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59.ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RCV_O59.ORDER schema
 */
export type RCV_O59_ORDER = z.infer<typeof rcvO59OrderSchema>;

/**
 * RCV_O59 message schema
 * Defines the structure and validation rules for the RCV_O59 message
 */
export const rcv_o59Schema = z.object({
  "MSH": segments.mshSchema,
  "ARV": z.array(segments.arvSchema).optional(),
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "PATIENT": rcvO59PatientSchema.optional(),
  "ORDER": z.array(rcvO59OrderSchema)
}).register(hl7v2Metadata, {
  title: "RCV_O59",
  version: "2.9",
  description: "HL7 v2.9 RCV_O59 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RCV_O59 schema
 */
export type RCV_O59 = z.infer<typeof rcv_o59Schema>;

/**
 * Default export for convenience
 */
export default rcv_o59Schema;