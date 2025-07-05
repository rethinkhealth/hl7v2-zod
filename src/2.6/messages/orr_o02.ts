import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 ORR_O02 Message
 *
 * HL7 v2.6 ORR_O02 message definition
 * Contains segment definitions and constraints for the ORR_O02 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORR_O02.PATIENT group schema
 * Defines the structure and validation rules for the ORR_O02.PATIENT group
 */
export const orrO02PatientSchema = z
  .object({
    PID: segments.pidSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORR_O02.PATIENT",
    version: "2.6",
    description: "HL7 v2.6 ORR_O02.PATIENT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORR_O02.PATIENT schema
 */
export type ORR_O02_PATIENT = z.infer<typeof orrO02PatientSchema>;

/**
 * ORR_O02.CHOICE group schema
 * Defines the structure and validation rules for the ORR_O02.CHOICE group
 */
export const orrO02ChoiceSchema = z
  .object({
    OBR: segments.obrSchema,
    RQD: segments.rqdSchema,
    RQ1: segments.rq1Schema,
    RXO: segments.rxoSchema,
    ODS: segments.odsSchema,
    ODT: segments.odtSchema
  })
  .register(hl7v2Metadata, {
    title: "ORR_O02.CHOICE",
    version: "2.6",
    description: "HL7 v2.6 ORR_O02.CHOICE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORR_O02.CHOICE schema
 */
export type ORR_O02_CHOICE = z.infer<typeof orrO02ChoiceSchema>;

/**
 * ORR_O02.ORDER group schema
 * Defines the structure and validation rules for the ORR_O02.ORDER group
 */
export const orrO02OrderSchema = z
  .object({
    ORC: segments.orcSchema,
    CHOICE: orrO02ChoiceSchema,
    NTE: z.array(segments.nteSchema).optional(),
    CTI: z.array(segments.ctiSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORR_O02.ORDER",
    version: "2.6",
    description: "HL7 v2.6 ORR_O02.ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORR_O02.ORDER schema
 */
export type ORR_O02_ORDER = z.infer<typeof orrO02OrderSchema>;

/**
 * ORR_O02.RESPONSE group schema
 * Defines the structure and validation rules for the ORR_O02.RESPONSE group
 */
export const orrO02ResponseSchema = z
  .object({
    PATIENT: orrO02PatientSchema.optional(),
    ORDER: z.array(orrO02OrderSchema)
  })
  .register(hl7v2Metadata, {
    title: "ORR_O02.RESPONSE",
    version: "2.6",
    description: "HL7 v2.6 ORR_O02.RESPONSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the ORR_O02.RESPONSE schema
 */
export type ORR_O02_RESPONSE = z.infer<typeof orrO02ResponseSchema>;

/**
 * ORR_O02 message schema
 * Defines the structure and validation rules for the ORR_O02 message
 */
export const orr_o02Schema = z
  .object({
    MSH: segments.mshSchema,
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    RESPONSE: orrO02ResponseSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "ORR_O02",
    version: "2.6",
    description: "HL7 v2.6 ORR_O02 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the ORR_O02 schema
 */
export type ORR_O02 = z.infer<typeof orr_o02Schema>;

/**
 * Default export for convenience
 */
export default orr_o02Schema;
