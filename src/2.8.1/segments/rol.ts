import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/rol";

/**
 * HL7 v2.8 ROL Segment
 *
 * HL7 v2.8 ROL segment definition
 * Contains field definitions and constraints for the ROL segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ROL segment schema
 * Defines the structure and validation rules for the ROL segment
 */
export const rolSchema = z
  .object({
    "1": fields.ROL_1.optional(),
    "2": fields.ROL_2,
    "3": fields.ROL_3,
    "4": z.array(fields.ROL_4),
    "5": fields.ROL_5.optional(),
    "6": fields.ROL_6.optional(),
    "7": fields.ROL_7.optional(),
    "8": fields.ROL_8.optional(),
    "9": z.array(fields.ROL_9).optional(),
    "10": fields.ROL_10.optional(),
    "11": z.array(fields.ROL_11).optional(),
    "12": z.array(fields.ROL_12).optional(),
    "13": fields.ROL_13.optional(),
    "14": fields.ROL_14.optional()
  })
  .register(hl7v2Metadata, {
    title: "ROL",
    version: "2.8",
    description: "HL7 v2.8 ROL segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the ROL schema
 */
export type ROL = z.infer<typeof rolSchema>;

/**
 * Default export for convenience
 */
export default rolSchema;
