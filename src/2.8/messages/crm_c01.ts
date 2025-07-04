import { z } from 'zod/v4';
import hl7v2Metadata from '../registry';
import * as segments from '../segments';

/**
 * HL7 v2.8 CRM_C01 Message
 * 
 * HL7 v2.8 CRM_C01 message definition
 * Contains segment definitions and constraints for the CRM_C01 message.
 * 
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CRM_C01.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the CRM_C01.PATIENT_VISIT group
 */
export const crmC01PatientVisitSchema = z.object({
  "PV1": segments.pv1Schema,
  "PRT": z.array(segments.prtSchema).optional()
}).register(hl7v2Metadata, {
  title: "CRM_C01.PATIENT_VISIT",
  version: "2.8",
  description: "HL7 v2.8 CRM_C01.PATIENT_VISIT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CRM_C01.PATIENT_VISIT schema
 */
export type CRM_C01_PATIENT_VISIT = z.infer<typeof crmC01PatientVisitSchema>;

/**
 * CRM_C01.PATIENT group schema
 * Defines the structure and validation rules for the CRM_C01.PATIENT group
 */
export const crmC01PatientSchema = z.object({
  "PID": segments.pidSchema,
  "PRT": z.array(segments.prtSchema).optional(),
  "ARV": z.array(segments.arvSchema).optional(),
  "PATIENT_VISIT": crmC01PatientVisitSchema.optional(),
  "CSR": segments.csrSchema,
  "CSP": z.array(segments.cspSchema).optional()
}).register(hl7v2Metadata, {
  title: "CRM_C01.PATIENT",
  version: "2.8",
  description: "HL7 v2.8 CRM_C01.PATIENT group",
  type: "Group"
});

/**
 * TypeScript type inferred from the CRM_C01.PATIENT schema
 */
export type CRM_C01_PATIENT = z.infer<typeof crmC01PatientSchema>;

/**
 * CRM_C01 message schema
 * Defines the structure and validation rules for the CRM_C01 message
 */
export const crm_c01Schema = z.object({
  "MSH": segments.mshSchema,
  "SFT": z.array(segments.sftSchema).optional(),
  "UAC": segments.uacSchema.optional(),
  "PATIENT": z.array(crmC01PatientSchema)
}).register(hl7v2Metadata, {
  title: "CRM_C01",
  version: "2.8",
  description: "HL7 v2.8 CRM_C01 message",
  type: "Message"
});

/**
 * TypeScript type inferred from the CRM_C01 schema
 */
export type CRM_C01 = z.infer<typeof crm_c01Schema>;

/**
 * Default export for convenience
 */
export default crm_c01Schema;