import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pdc";

/**
 * HL7 v2.6 PDC Segment
 *
 * HL7 v2.6 PDC segment definition
 * Contains field definitions and constraints for the PDC segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PDC segment schema
 * Defines the structure and validation rules for the PDC segment
 */
export const pdcSchema = z
  .object({
    "1": z.array(fields.PDC_1),
    "2": fields.PDC_2,
    "3": fields.PDC_3,
    "4": fields.PDC_4.optional(),
    "5": fields.PDC_5.optional(),
    "6": z.array(fields.PDC_6).optional(),
    "7": fields.PDC_7.optional(),
    "8": z.array(fields.PDC_8).optional(),
    "9": fields.PDC_9.optional(),
    "10": fields.PDC_10.optional(),
    "11": fields.PDC_11.optional(),
    "12": fields.PDC_12.optional(),
    "13": fields.PDC_13.optional(),
    "14": fields.PDC_14.optional(),
    "15": fields.PDC_15.optional()
  })
  .register(hl7v2Metadata, {
    title: "PDC",
    version: "2.6",
    description: "HL7 v2.6 PDC segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PDC schema
 */
export type PDC = z.infer<typeof pdcSchema>;

/**
 * Default export for convenience
 */
export default pdcSchema;
