import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as segments from "../segments";

/**
 * HL7 v2.6 RSP_Q11 Message
 *
 * HL7 v2.6 RSP_Q11 message definition
 * Contains segment definitions and constraints for the RSP_Q11 message.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RSP_Q11.MF_LOC_DEPT group schema
 * Defines the structure and validation rules for the RSP_Q11.MF_LOC_DEPT group
 */
export const rspQ11MfLocDeptSchema = z
  .object({
    LDP: segments.ldpSchema,
    LCH: z.array(segments.lchSchema).optional(),
    LCC: z.array(segments.lccSchema).optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Q11.MF_LOC_DEPT",
    version: "2.6",
    description: "HL7 v2.6 RSP_Q11.MF_LOC_DEPT group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Q11.MF_LOC_DEPT schema
 */
export type RSP_Q11_MF_LOC_DEPT = z.infer<typeof rspQ11MfLocDeptSchema>;

/**
 * RSP_Q11.QUERY_RESULT_CLUSTER group schema
 * Defines the structure and validation rules for the RSP_Q11.QUERY_RESULT_CLUSTER group
 */
export const rspQ11QueryResultClusterSchema = z
  .object({
    MFE: segments.mfeSchema,
    LOC: segments.locSchema,
    LCH: z.array(segments.lchSchema).optional(),
    LRL: z.array(segments.lrlSchema).optional(),
    MF_LOC_DEPT: z.array(rspQ11MfLocDeptSchema)
  })
  .register(hl7v2Metadata, {
    title: "RSP_Q11.QUERY_RESULT_CLUSTER",
    version: "2.6",
    description: "HL7 v2.6 RSP_Q11.QUERY_RESULT_CLUSTER group",
    type: "Group"
  });

/**
 * TypeScript type inferred from the RSP_Q11.QUERY_RESULT_CLUSTER schema
 */
export type RSP_Q11_QUERY_RESULT_CLUSTER = z.infer<typeof rspQ11QueryResultClusterSchema>;

/**
 * RSP_Q11 message schema
 * Defines the structure and validation rules for the RSP_Q11 message
 */
export const rsp_q11Schema = z
  .object({
    MSH: segments.mshSchema,
    SFT: z.array(segments.sftSchema).optional(),
    UAC: segments.uacSchema.optional(),
    MSA: segments.msaSchema,
    ERR: z.array(segments.errSchema).optional(),
    QAK: segments.qakSchema,
    QPD: segments.qpdSchema,
    QUERY_RESULT_CLUSTER: rspQ11QueryResultClusterSchema.optional(),
    DSC: segments.dscSchema.optional()
  })
  .register(hl7v2Metadata, {
    title: "RSP_Q11",
    version: "2.6",
    description: "HL7 v2.6 RSP_Q11 message",
    type: "Message"
  });

/**
 * TypeScript type inferred from the RSP_Q11 schema
 */
export type RSP_Q11 = z.infer<typeof rsp_q11Schema>;

/**
 * Default export for convenience
 */
export default rsp_q11Schema;
