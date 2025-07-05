import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/tcc";

/**
 * HL7 v2.6 TCC Segment
 *
 * HL7 v2.6 TCC segment definition
 * Contains field definitions and constraints for the TCC segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * TCC segment schema
 * Defines the structure and validation rules for the TCC segment
 */
export const tccSchema = z
  .object({
    "1": fields.TCC_1,
    "2": fields.TCC_2,
    "3": fields.TCC_3.optional(),
    "4": fields.TCC_4.optional(),
    "5": fields.TCC_5.optional(),
    "6": fields.TCC_6.optional(),
    "7": fields.TCC_7.optional(),
    "8": fields.TCC_8.optional(),
    "9": fields.TCC_9.optional(),
    "10": fields.TCC_10.optional(),
    "11": fields.TCC_11.optional(),
    "12": fields.TCC_12.optional(),
    "13": fields.TCC_13.optional(),
    "14": fields.TCC_14.optional()
  })
  .register(hl7v2Metadata, {
    title: "TCC",
    version: "2.6",
    description: "HL7 v2.6 TCC segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the TCC schema
 */
export type TCC = z.infer<typeof tccSchema>;

/**
 * Default export for convenience
 */
export default tccSchema;
