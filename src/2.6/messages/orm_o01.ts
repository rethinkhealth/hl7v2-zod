import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 ORM_O01 Message
 *
 * HL7 v2.6 ORM_O01 message definition
 * Contains segment definitions and constraints for the ORM_O01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORM_O01.PATIENT_VISIT group schema
 * Defines the structure and validation rules for the ORM_O01.PATIENT_VISIT group
 */
export const ormO01PatientVisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORM_O01.PATIENT_VISIT",
    version: "2.6",
    description: "HL7 v2.6 ORM_O01.PATIENT_VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORM_O01.PATIENT_VISIT schema
 */
export type ORM_O01_PATIENT_VISIT = z.infer<typeof ormO01PatientVisitSchema>;

/**
 * ORM_O01.INSURANCE group schema
 * Defines the structure and validation rules for the ORM_O01.INSURANCE group
 */
export const ormO01InsuranceSchema = z
  .object({
    IN1: segments.in1Schema,
    IN2: segments.in2Schema.optional(),
    IN3: segments.in3Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORM_O01.INSURANCE",
    version: "2.6",
    description: "HL7 v2.6 ORM_O01.INSURANCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORM_O01.INSURANCE schema
 */
export type ORM_O01_INSURANCE = z.infer<typeof ormO01InsuranceSchema>;

/**
 * ORM_O01.CHOICE group schema
 * Defines the structure and validation rules for the ORM_O01.CHOICE group
 */
export const ormO01ChoiceSchema = z
  .object({
    OBR: segments.obrSchema,
    RQD: segments.rqdSchema,
    RQ1: segments.rq1Schema,
    RXO: segments.rxoSchema,
    ODS: segments.odsSchema,
    ODT: segments.odtSchema
  })
  .register(hl7v2Metadata, {
    title: "ORM_O01.CHOICE",
    version: "2.6",
    description: "HL7 v2.6 ORM_O01.CHOICE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORM_O01.CHOICE schema
 */
export type ORM_O01_CHOICE = z.infer<typeof ormO01ChoiceSchema>;

/**
 * ORM_O01.OBSERVATION group schema
 * Defines the structure and validation rules for the ORM_O01.OBSERVATION group
 */
export const ormO01ObservationSchema = z
  .object({
    OBX: segments.obxSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORM_O01.OBSERVATION",
    version: "2.6",
    description: "HL7 v2.6 ORM_O01.OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORM_O01.OBSERVATION schema
 */
export type ORM_O01_OBSERVATION = z.infer<typeof ormO01ObservationSchema>;

/**
 * ORM_O01.PATIENT group schema
 * Defines the structure and validation rules for the ORM_O01.PATIENT group
 */
export const ormO01PatientSchema = z
  .object({
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT_VISIT: ormO01PatientVisitSchema.optional(),
    INSURANCE: z.array(ormO01InsuranceSchema).optional(),
    GT1: segments.gt1Schema.optional(),
    AL1: z.array(segments.al1Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORM_O01.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 ORM_O01.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORM_O01.PATIENT schema
 */
export type ORM_O01_PATIENT = z.infer<typeof ormO01PatientSchema>;

/**
 * ORM_O01.ORDER_DETAIL group schema
 * Defines the structure and validation rules for the ORM_O01.ORDER_DETAIL group
 */
export const ormO01OrderDetailSchema = z
  .object({
    CHOICE: ormO01ChoiceSchema,
    NTE: z.array(segments.nteSchema).optional(),
    CTD: segments.ctdSchema.optional(),
    DG1: z.array(segments.dg1Schema).optional(),
    OBSERVATION: z.array(ormO01ObservationSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORM_O01.ORDER_DETAIL",
    version: "2.6",
    description: "HL7 v2.6 ORM_O01.ORDER_DETAIL group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORM_O01.ORDER_DETAIL schema
 */
export type ORM_O01_ORDER_DETAIL = z.infer<typeof ormO01OrderDetailSchema>;

/**
 * ORM_O01.ORDER group schema
 * Defines the structure and validation rules for the ORM_O01.ORDER group
 */
export const ormO01OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    ORDER_DETAIL: ormO01OrderDetailSchema.optional(),
    FT1: z.array(segments.ft1Schema).optional(),
    CTI: z.array(segments.ctiSchema).optional(),
    BLG: segments.blgSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORM_O01.ORDER",
    version: "2.6",
    description: "HL7 v2.6 ORM_O01.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORM_O01.ORDER schema
 */
export type ORM_O01_ORDER = z.infer<typeof ormO01OrderSchema>;

/**
 * ORM_O01 message schema
 * Defines the structure and validation rules for the ORM_O01 message
 */
export const orm_o01Schema = z
  .object({
    MSH: segments.mshSchema,
    NTE: z.array(segments.nteSchema).optional(),
    PATIENT: ormO01PatientSchema.optional(),
    ORDER: z.array(ormO01OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORM_O01",
    version: "2.6",
    description: "HL7 v2.6 ORM_O01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORM_O01 schema
 */
export type ORM_O01 = z.infer<typeof orm_o01Schema>;

/**
 * Default export for convenience
 */
export default orm_o01Schema;
