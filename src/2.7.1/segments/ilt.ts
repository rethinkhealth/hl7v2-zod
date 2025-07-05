import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/ilt";

/**
 * HL7 v2.7 ILT Segment
 *
 * HL7 v2.7 ILT segment definition
 * Contains field definitions and constraints for the ILT segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ILT segment schema
 * Defines the structure and validation rules for the ILT segment
 */
export const iltSchema = z
  .object({
    "1": fields.ILT_1,
    "2": fields.ILT_2,
    "3": fields.ILT_3.optional(),
    "4": fields.ILT_4.optional(),
    "5": fields.ILT_5.optional(),
    "6": fields.ILT_6.optional(),
    "7": fields.ILT_7.optional(),
    "8": fields.ILT_8.optional(),
    "9": fields.ILT_9.optional(),
    "10": fields.ILT_10.optional()
  })
  .register(hl7v2Metadata, {
    title: "ILT",
    version: "2.7",
    description: "HL7 v2.7 ILT segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the ILT schema
 */
export type ILT = z.infer<typeof iltSchema>;

/**
 * Default export for convenience
 */
export default iltSchema;
