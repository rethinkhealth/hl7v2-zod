import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.6 CSU_C09 Message
 * 
 * HL7 v2.6 CSU_C09 message definition
 * Contains segment definitions and constraints for the CSU_C09 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CSU_C09.VISIT group schema
 * Defines the structure and validation rules for the CSU_C09.VISIT group
 */
export const csuC09VisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PV2": segments.pv2Schema.optional()
}).register(hl7v2Metadata, {
  title: "CSU_C09.VISIT",
  version: "2.6",
  description: "HL7 v2.6 CSU_C09.VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CSU_C09.VISIT schema
 */
export type CSU_C09_VISIT = z.infer<typeof csuC09VisitSchema>;

/**
 * CSU_C09.TIMING_QTY group schema
 * Defines the structure and validation rules for the CSU_C09.TIMING_QTY group
 */
export const csuC09TimingQtySchema = z.object({
  "TQ1": segments.tq1Schema,
  "TQ2": z.array(segments.tq2Schema).optional()
}).register(hl7v2Metadata, {
  title: "CSU_C09.TIMING_QTY",
  version: "2.6",
  description: "HL7 v2.6 CSU_C09.TIMING_QTY group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CSU_C09.TIMING_QTY schema
 */
export type CSU_C09_TIMING_QTY = z.infer<typeof csuC09TimingQtySchema>;

/**
 * CSU_C09.RX_ADMIN group schema
 * Defines the structure and validation rules for the CSU_C09.RX_ADMIN group
 */
export const csuC09RxAdminSchema = z.object({
  "RXA": segments.rxaSchema,
  "RXR": segments.rxrSchema
}).register(hl7v2Metadata, {
  title: "CSU_C09.RX_ADMIN",
  version: "2.6",
  description: "HL7 v2.6 CSU_C09.RX_ADMIN group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CSU_C09.RX_ADMIN schema
 */
export type CSU_C09_RX_ADMIN = z.infer<typeof csuC09RxAdminSchema>;

/**
 * CSU_C09.STUDY_OBSERVATION group schema
 * Defines the structure and validation rules for the CSU_C09.STUDY_OBSERVATION group
 */
export const csuC09StudyObservationSchema = z.object({
  "ORC": segments.orcSchema.optional(),
  "OBR": segments.obrSchema,
  "ROL": z.array(segments.rolSchema).optional(),
  "TIMING_QTY": z.array(csuC09TimingQtySchema).optional(),
  "OBX": z.array(segments.obxSchema)
}).register(hl7v2Metadata, {
  title: "CSU_C09.STUDY_OBSERVATION",
  version: "2.6",
  description: "HL7 v2.6 CSU_C09.STUDY_OBSERVATION group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CSU_C09.STUDY_OBSERVATION schema
 */
export type CSU_C09_STUDY_OBSERVATION = z.infer<typeof csuC09StudyObservationSchema>;

/**
 * CSU_C09.STUDY_PHARM group schema
 * Defines the structure and validation rules for the CSU_C09.STUDY_PHARM group
 */
export const csuC09StudyPharmSchema = z.object({
  "ORC": segments.orcSchema.optional(),
  "RX_ADMIN": z.array(csuC09RxAdminSchema)
}).register(hl7v2Metadata, {
  title: "CSU_C09.STUDY_PHARM",
  version: "2.6",
  description: "HL7 v2.6 CSU_C09.STUDY_PHARM group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CSU_C09.STUDY_PHARM schema
 */
export type CSU_C09_STUDY_PHARM = z.infer<typeof csuC09StudyPharmSchema>;

/**
 * CSU_C09.STUDY_SCHEDULE group schema
 * Defines the structure and validation rules for the CSU_C09.STUDY_SCHEDULE group
 */
export const csuC09StudyScheduleSchema = z.object({
  "CSS": segments.cssSchema.optional(),
  "STUDY_OBSERVATION": z.array(csuC09StudyObservationSchema),
  "STUDY_PHARM": z.array(csuC09StudyPharmSchema)
}).register(hl7v2Metadata, {
  title: "CSU_C09.STUDY_SCHEDULE",
  version: "2.6",
  description: "HL7 v2.6 CSU_C09.STUDY_SCHEDULE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CSU_C09.STUDY_SCHEDULE schema
 */
export type CSU_C09_STUDY_SCHEDULE = z.infer<typeof csuC09StudyScheduleSchema>;

/**
 * CSU_C09.STUDY_PHASE group schema
 * Defines the structure and validation rules for the CSU_C09.STUDY_PHASE group
 */
export const csuC09StudyPhaseSchema = z.object({
  "CSP": segments.cspSchema.optional(),
  "STUDY_SCHEDULE": z.array(csuC09StudyScheduleSchema)
}).register(hl7v2Metadata, {
  title: "CSU_C09.STUDY_PHASE",
  version: "2.6",
  description: "HL7 v2.6 CSU_C09.STUDY_PHASE group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CSU_C09.STUDY_PHASE schema
 */
export type CSU_C09_STUDY_PHASE = z.infer<typeof csuC09StudyPhaseSchema>;

/**
 * CSU_C09.PATIENT group schema
 * Defines the structure and validation rules for the CSU_C09.PATIENT group
 */
export const csuC09PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PD1": segments.pd1Schema.optional(),
  "NTE": z.array(segments.nteSchema).optional(),
  "VISIT": csuC09VisitSchema.optional(),
  "CSR": segments.csrSchema,
  "STUDY_PHASE": z.array(csuC09StudyPhaseSchema)
}).register(hl7v2Metadata, {
  title: "CSU_C09.PATIENT",
  version: "2.6",
  description: "HL7 v2.6 CSU_C09.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CSU_C09.PATIENT schema
 */
export type CSU_C09_PATIENT = z.infer<typeof csuC09PatientSchema>;

/**
 * CSU_C09 message schema
 * Defines the structure and validation rules for the CSU_C09 message
 */
export const csu_c09Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "PATIENT": z.array(csuC09PatientSchema)
}).register(hl7v2Metadata, {
  title: "CSU_C09",
  version: "2.6",
  description: "HL7 v2.6 CSU_C09 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the CSU_C09 schema
 */
export type CSU_C09 = z.infer<typeof csu_c09Schema>;

/**
 * Default export for convenience
 */
export default csu_c09Schema;