import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pth";

/**
 * HL7 v2.7 PTH Segment
 *
 * HL7 v2.7 PTH segment definition
 * Contains field definitions and constraints for the PTH segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PTH segment schema
 * Defines the structure and validation rules for the PTH segment
 */
export const pthSchema = z
  .object({
    "1": fields.PTH_1,
    "2": fields.PTH_2,
    "3": fields.PTH_3,
    "4": fields.PTH_4,
    "5": fields.PTH_5.optional(),
    "6": fields.PTH_6.optional(),
    "7": fields.PTH_7.optional()
  })
  .register(hl7v2Metadata, {
    title: "PTH",
    version: "2.7",
    description: "HL7 v2.7 PTH segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PTH schema
 */
export type PTH = z.infer<typeof pthSchema>;

/**
 * Default export for convenience
 */
export default pthSchema;
