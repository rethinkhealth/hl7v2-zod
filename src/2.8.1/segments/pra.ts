import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pra";

/**
 * HL7 v2.8 PRA Segment
 *
 * HL7 v2.8 PRA segment definition
 * Contains field definitions and constraints for the PRA segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PRA segment schema
 * Defines the structure and validation rules for the PRA segment
 */
export const praSchema = z
  .object({
    "1": fields.PRA_1.optional(),
    "2": z.array(fields.PRA_2).optional(),
    "3": z.array(fields.PRA_3).optional(),
    "4": fields.PRA_4.optional(),
    "5": z.array(fields.PRA_5).optional(),
    "6": z.array(fields.PRA_6).optional(),
    "7": z.array(fields.PRA_7).optional(),
    "8": fields.PRA_8.optional(),
    "9": fields.PRA_9.optional(),
    "10": fields.PRA_10.optional(),
    "11": z.array(fields.PRA_11).optional(),
    "12": fields.PRA_12.optional()
  })
  .register(hl7v2Metadata, {
    title: "PRA",
    version: "2.8",
    description: "HL7 v2.8 PRA segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PRA schema
 */
export type PRA = z.infer<typeof praSchema>;

/**
 * Default export for convenience
 */
export default praSchema;
