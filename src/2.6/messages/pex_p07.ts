import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 PEX_P07 Message
 *
 * HL7 v2.6 PEX_P07 message definition
 * Contains segment definitions and constraints for the PEX_P07 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PEX_P07.VISIT group schema
 * Defines the structure and validation rules for the PEX_P07.VISIT group
 */
export const pexP07VisitSchema = z
  .object({
    PV1: segments.pv1Schema,
    PV2: segments.pv2Schema.optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.VISIT",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.VISIT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.VISIT schema
 */
export type PEX_P07_VISIT = z.infer<typeof pexP07VisitSchema>;

/**
 * PEX_P07.TIMING_QTY group schema
 * Defines the structure and validation rules for the PEX_P07.TIMING_QTY group
 */
export const pexP07TimingQtySchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.TIMING_QTY",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.TIMING_QTY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.TIMING_QTY schema
 */
export type PEX_P07_TIMING_QTY = z.infer<typeof pexP07TimingQtySchema>;

/**
 * PEX_P07.RX_ADMINISTRATION group schema
 * Defines the structure and validation rules for the PEX_P07.RX_ADMINISTRATION group
 */
export const pexP07RxAdministrationSchema = z
  .object({
    RXA: segments.rxaSchema,
    RXR: segments.rxrSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.RX_ADMINISTRATION",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.RX_ADMINISTRATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.RX_ADMINISTRATION schema
 */
export type PEX_P07_RX_ADMINISTRATION = z.infer<typeof pexP07RxAdministrationSchema>;

/**
 * PEX_P07.NK1_TIMING_QTY group schema
 * Defines the structure and validation rules for the PEX_P07.NK1_TIMING_QTY group
 */
export const pexP07Nk1TimingQtySchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.NK1_TIMING_QTY",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.NK1_TIMING_QTY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.NK1_TIMING_QTY schema
 */
export type PEX_P07_NK1_TIMING_QTY = z.infer<typeof pexP07Nk1TimingQtySchema>;

/**
 * PEX_P07.ASSOCIATED_RX_ADMIN group schema
 * Defines the structure and validation rules for the PEX_P07.ASSOCIATED_RX_ADMIN group
 */
export const pexP07AssociatedRxAdminSchema = z
  .object({
    RXA: segments.rxaSchema,
    RXR: segments.rxrSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.ASSOCIATED_RX_ADMIN",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.ASSOCIATED_RX_ADMIN group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.ASSOCIATED_RX_ADMIN schema
 */
export type PEX_P07_ASSOCIATED_RX_ADMIN = z.infer<typeof pexP07AssociatedRxAdminSchema>;

/**
 * PEX_P07.STUDY group schema
 * Defines the structure and validation rules for the PEX_P07.STUDY group
 */
export const pexP07StudySchema = z
  .object({
    CSR: segments.csrSchema,
    CSP: z.array(segments.cspSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.STUDY",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.STUDY group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.STUDY schema
 */
export type PEX_P07_STUDY = z.infer<typeof pexP07StudySchema>;

/**
 * PEX_P07.RX_ORDER group schema
 * Defines the structure and validation rules for the PEX_P07.RX_ORDER group
 */
export const pexP07RxOrderSchema = z
  .object({
    RXE: segments.rxeSchema,
    TIMING_QTY: z.array(pexP07TimingQtySchema),
    RXR: z.array(segments.rxrSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.RX_ORDER",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.RX_ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.RX_ORDER schema
 */
export type PEX_P07_RX_ORDER = z.infer<typeof pexP07RxOrderSchema>;

/**
 * PEX_P07.ASSOCIATED_RX_ORDER group schema
 * Defines the structure and validation rules for the PEX_P07.ASSOCIATED_RX_ORDER group
 */
export const pexP07AssociatedRxOrderSchema = z
  .object({
    RXE: segments.rxeSchema,
    NK1_TIMING_QTY: z.array(pexP07Nk1TimingQtySchema),
    RXR: z.array(segments.rxrSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.ASSOCIATED_RX_ORDER",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.ASSOCIATED_RX_ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.ASSOCIATED_RX_ORDER schema
 */
export type PEX_P07_ASSOCIATED_RX_ORDER = z.infer<typeof pexP07AssociatedRxOrderSchema>;

/**
 * PEX_P07.ASSOCIATED_PERSON group schema
 * Defines the structure and validation rules for the PEX_P07.ASSOCIATED_PERSON group
 */
export const pexP07AssociatedPersonSchema = z
  .object({
    NK1: segments.nk1Schema,
    ASSOCIATED_RX_ORDER: pexP07AssociatedRxOrderSchema.optional(),
    ASSOCIATED_RX_ADMIN: z.array(pexP07AssociatedRxAdminSchema).optional(),
    PRB: z.array(segments.prbSchema).optional(),
    OBX: z.array(segments.obxSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.ASSOCIATED_PERSON",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.ASSOCIATED_PERSON group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.ASSOCIATED_PERSON schema
 */
export type PEX_P07_ASSOCIATED_PERSON = z.infer<typeof pexP07AssociatedPersonSchema>;

/**
 * PEX_P07.PEX_CAUSE group schema
 * Defines the structure and validation rules for the PEX_P07.PEX_CAUSE group
 */
export const pexP07PexCauseSchema = z
  .object({
    PCR: segments.pcrSchema,
    RX_ORDER: pexP07RxOrderSchema.optional(),
    RX_ADMINISTRATION: z.array(pexP07RxAdministrationSchema).optional(),
    PRB: z.array(segments.prbSchema).optional(),
    OBX: z.array(segments.obxSchema).optional(),
    NTE: z.array(segments.nteSchema).optional(),
    ASSOCIATED_PERSON: pexP07AssociatedPersonSchema.optional(),
    STUDY: z.array(pexP07StudySchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.PEX_CAUSE",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.PEX_CAUSE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.PEX_CAUSE schema
 */
export type PEX_P07_PEX_CAUSE = z.infer<typeof pexP07PexCauseSchema>;

/**
 * PEX_P07.PEX_OBSERVATION group schema
 * Defines the structure and validation rules for the PEX_P07.PEX_OBSERVATION group
 */
export const pexP07PexObservationSchema = z
  .object({
    PEO: segments.peoSchema,
    PEX_CAUSE: z.array(pexP07PexCauseSchema)
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.PEX_OBSERVATION",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.PEX_OBSERVATION group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.PEX_OBSERVATION schema
 */
export type PEX_P07_PEX_OBSERVATION = z.infer<typeof pexP07PexObservationSchema>;

/**
 * PEX_P07.EXPERIENCE group schema
 * Defines the structure and validation rules for the PEX_P07.EXPERIENCE group
 */
export const pexP07ExperienceSchema = z
  .object({
    PES: segments.pesSchema,
    PEX_OBSERVATION: z.array(pexP07PexObservationSchema)
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07.EXPERIENCE",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07.EXPERIENCE group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the PEX_P07.EXPERIENCE schema
 */
export type PEX_P07_EXPERIENCE = z.infer<typeof pexP07ExperienceSchema>;

/**
 * PEX_P07 message schema
 * Defines the structure and validation rules for the PEX_P07 message
 */
export const pex_p07Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PD1: segments.pd1Schema.optional(),
    NTE: z.array(segments.nteSchema).optional(),
    VISIT: pexP07VisitSchema.optional(),
    EXPERIENCE: z.array(pexP07ExperienceSchema)
  })
  .register(hl7v2Metadata, {
    title: "PEX_P07",
    version: "2.6",
    description: "HL7 v2.6 PEX_P07 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the PEX_P07 schema
 */
export type PEX_P07 = z.infer<typeof pex_p07Schema>;

/**
 * Default export for convenience
 */
export default pex_p07Schema;
