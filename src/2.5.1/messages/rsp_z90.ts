import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.5 RSP_Z90 Message
 * 
 * HL7 v2.5 RSP_Z90 message definition
 * Contains segment definitions and constraints for the RSP_Z90 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_Z90.VISIT group schema
 * Defines the structure and validation rules for the RSP_Z90.VISIT group
 */
export const rspZ90VisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z90.VISIT",
  version: "2.5",
  description: "HL7 v2.5 RSP_Z90.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z90.VISIT schema
 */
export type RSP_Z90_VISIT = z.infer<typeof rspZ90VisitSchema>;

/**
 * RSP_Z90.TIMING group schema
 * Defines the structure and validation rules for the RSP_Z90.TIMING group
 */
export const rspZ90TimingSchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z90.TIMING",
  version: "2.5",
  description: "HL7 v2.5 RSP_Z90.TIMING group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z90.TIMING schema
 */
export type RSP_Z90_TIMING = z.infer<typeof rspZ90TimingSchema>;

/**
 * RSP_Z90.OBSERVATION group schema
 * Defines the structure and validation rules for the RSP_Z90.OBSERVATION group
 */
export const rspZ90ObservationSchema = z.object({
  "OBX": segments.obxSchema.optional(),
  "NTE": z.array(segments.nteSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z90.OBSERVATION",
  version: "2.5",
  description: "HL7 v2.5 RSP_Z90.OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z90.OBSERVATION schema
 */
export type RSP_Z90_OBSERVATION = z.infer<typeof rspZ90ObservationSchema>;

/**
 * RSP_Z90.SPECIMEN group schema
 * Defines the structure and validation rules for the RSP_Z90.SPECIMEN group
 */
export const rspZ90SpecimenSchema = z.object({
  "SPM": segments.spmSchema,
  "OBX": z.array(segments.obxSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z90.SPECIMEN",
  version: "2.5",
  description: "HL7 v2.5 RSP_Z90.SPECIMEN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z90.SPECIMEN schema
 */
export type RSP_Z90_SPECIMEN = z.infer<typeof rspZ90SpecimenSchema>;

/**
 * RSP_Z90.PATIENT group schema
 * Defines the structure and validation rules for the RSP_Z90.PATIENT group
 */
export const rspZ90PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "NK1": z.array(segments.nk1Schema).optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "VISIT": rspZ90VisitSchema.optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z90.PATIENT",
  version: "2.5",
  description: "HL7 v2.5 RSP_Z90.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z90.PATIENT schema
 */
export type RSP_Z90_PATIENT = z.infer<typeof rspZ90PatientSchema>;

/**
 * RSP_Z90.COMMON_ORDER group schema
 * Defines the structure and validation rules for the RSP_Z90.COMMON_ORDER group
 */
export const rspZ90CommonOrderSchema = z.object({
  "ORC": segments.orcSchema,
  "TIMING": z.array(rspZ90TimingSchema).optional(),
  "OBR": segments.obrSchema,
  "NTE": z.array(segments.nteSchema).optional(),
  "CTD": segments.ctdSchema.optional(),
  "OBSERVATION": z.array(rspZ90ObservationSchema)
}).register(hl7v2Metadata, {
  title: "RSP_Z90.COMMON_ORDER",
  version: "2.5",
  description: "HL7 v2.5 RSP_Z90.COMMON_ORDER group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z90.COMMON_ORDER schema
 */
export type RSP_Z90_COMMON_ORDER = z.infer<typeof rspZ90CommonOrderSchema>;

/**
 * RSP_Z90.QUERY_RESPONSE group schema
 * Defines the structure and validation rules for the RSP_Z90.QUERY_RESPONSE group
 */
export const rspZ90QueryResponseSchema = z.object({
  "PATIENT": rspZ90PatientSchema.optional(),
  "COMMON_ORDER": z.array(rspZ90CommonOrderSchema),
  "SPECIMEN": z.array(rspZ90SpecimenSchema).optional()
}).register(hl7v2Metadata, {
  title: "RSP_Z90.QUERY_RESPONSE",
  version: "2.5",
  description: "HL7 v2.5 RSP_Z90.QUERY_RESPONSE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the RSP_Z90.QUERY_RESPONSE schema
 */
export type RSP_Z90_QUERY_RESPONSE = z.infer<typeof rspZ90QueryResponseSchema>;

/**
 * RSP_Z90 message schema
 * Defines the structure and validation rules for the RSP_Z90 message
 */
export const rsp_z90Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "MSA": segments.msaSchema,
  "ERR": segments.errSchema.optional(),
  "QAK": segments.qakSchema,
  "QPD": segments.qpdSchema,
  "RCP": segments.rcpSchema,
  "QUERY_RESPONSE": z.array(rspZ90QueryResponseSchema),
  "DSC": segments.dscSchema
}).register(hl7v2Metadata, {
  title: "RSP_Z90",
  version: "2.5",
  description: "HL7 v2.5 RSP_Z90 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the RSP_Z90 schema
 */
export type RSP_Z90 = z.infer<typeof rsp_z90Schema>;

/**
 * Default export for convenience
 */
export default rsp_z90Schema;