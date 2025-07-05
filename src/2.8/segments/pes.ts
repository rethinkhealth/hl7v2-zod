import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pes";

/**
 * HL7 v2.8 PES Segment
 *
 * HL7 v2.8 PES segment definition
 * Contains field definitions and constraints for the PES segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PES segment schema
 * Defines the structure and validation rules for the PES segment
 */
export const pesSchema = z
  .object({
    "1": z.array(fields.PES_1).optional(),
    "2": z.array(fields.PES_2).optional(),
    "3": z.array(fields.PES_3).optional(),
    "4": z.array(fields.PES_4).optional(),
    "5": fields.PES_5.optional(),
    "6": fields.PES_6.optional(),
    "7": z.array(fields.PES_7).optional(),
    "8": fields.PES_8.optional(),
    "9": fields.PES_9.optional(),
    "10": fields.PES_10,
    "11": z.array(fields.PES_11).optional(),
    "12": fields.PES_12.optional(),
    "13": z.array(fields.PES_13).optional()
  })
  .register(hl7v2Metadata, {
    title: "PES",
    version: "2.8",
    description: "HL7 v2.8 PES segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PES schema
 */
export type PES = z.infer<typeof pesSchema>;

/**
 * Default export for convenience
 */
export default pesSchema;
