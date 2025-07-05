import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pye";

/**
 * HL7 v2.7 PYE Segment
 *
 * HL7 v2.7 PYE segment definition
 * Contains field definitions and constraints for the PYE segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PYE segment schema
 * Defines the structure and validation rules for the PYE segment
 */
export const pyeSchema = z
  .object({
    "1": fields.PYE_1,
    "2": fields.PYE_2,
    "3": fields.PYE_3.optional(),
    "4": z.array(fields.PYE_4).optional(),
    "5": z.array(fields.PYE_5).optional(),
    "6": z.array(fields.PYE_6).optional(),
    "7": fields.PYE_7.optional()
  })
  .register(hl7v2Metadata, {
    title: "PYE",
    version: "2.7",
    description: "HL7 v2.7 PYE segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PYE schema
 */
export type PYE = z.infer<typeof pyeSchema>;

/**
 * Default export for convenience
 */
export default pyeSchema;
