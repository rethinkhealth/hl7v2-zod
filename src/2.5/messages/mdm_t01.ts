import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.5 MDM_T01 Message
 *
 * HL7 v2.5 MDM_T01 message definition
 * Contains segment definitions and constraints for the MDM_T01 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MDM_T01.TIMING group schema
 * Defines the structure and validation rules for the MDM_T01.TIMING group
 */
export const mdmT01TimingSchema = z
  .object({
    TQ1: segments.tq1Schema,
    TQ2: z.array(segments.tq2Schema).optional()
  })
  .register(hl7v2Metadata, {
    title: "MDM_T01.TIMING",
    version: "2.5",
    description: "HL7 v2.5 MDM_T01.TIMING group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MDM_T01.TIMING schema
 */
export type MDM_T01_TIMING = z.infer<typeof mdmT01TimingSchema>;

/**
 * MDM_T01.COMMON_ORDER group schema
 * Defines the structure and validation rules for the MDM_T01.COMMON_ORDER group
 */
export const mdmT01CommonOrderSchema = z
  .object({
    ORC: segments.orcSchema,
    TIMING: z.array(mdmT01TimingSchema).optional(),
    OBR: segments.obrSchema,
    NTE: z.array(segments.nteSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "MDM_T01.COMMON_ORDER",
    version: "2.5",
    description: "HL7 v2.5 MDM_T01.COMMON_ORDER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the MDM_T01.COMMON_ORDER schema
 */
export type MDM_T01_COMMON_ORDER = z.infer<typeof mdmT01CommonOrderSchema>;

/**
 * MDM_T01 message schema
 * Defines the structure and validation rules for the MDM_T01 message
 */
export const mdm_t01Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    EVN: segments.evnSchema,
    PID: segments.pidSchema,
    PV1: segments.pv1Schema,
    COMMON_ORDER: z.array(mdmT01CommonOrderSchema).optional(),
    TXA: segments.txaSchema
  })
  .register(hl7v2Metadata, {
    title: "MDM_T01",
    version: "2.5",
    description: "HL7 v2.5 MDM_T01 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the MDM_T01 schema
 */
export type MDM_T01 = z.infer<typeof mdm_t01Schema>;

/**
 * Default export for convenience
 */
export default mdm_t01Schema;
