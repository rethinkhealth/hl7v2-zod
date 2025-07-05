import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/mfa";

/**
 * HL7 v2.8 MFA Segment
 *
 * HL7 v2.8 MFA segment definition
 * Contains field definitions and constraints for the MFA segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * MFA segment schema
 * Defines the structure and validation rules for the MFA segment
 */
export const mfaSchema = z
  .object({
    "1": fields.MFA_1,
    "2": fields.MFA_2.optional(),
    "3": fields.MFA_3.optional(),
    "4": fields.MFA_4,
    "5": z.array(fields.MFA_5),
    "6": z.array(fields.MFA_6)
  })
  .register(hl7v2Metadata, {
    title: "MFA",
    version: "2.8",
    description: "HL7 v2.8 MFA segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the MFA schema
 */
export type MFA = z.infer<typeof mfaSchema>;

/**
 * Default export for convenience
 */
export default mfaSchema;
