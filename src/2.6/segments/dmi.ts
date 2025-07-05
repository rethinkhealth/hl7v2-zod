import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/dmi";

/**
 * HL7 v2.6 DMI Segment
 *
 * HL7 v2.6 DMI segment definition
 * Contains field definitions and constraints for the DMI segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DMI segment schema
 * Defines the structure and validation rules for the DMI segment
 */
export const dmiSchema = z
  .object({
    "1": fields.DMI_1.optional(),
    "2": fields.DMI_2.optional(),
    "3": fields.DMI_3.optional(),
    "4": fields.DMI_4.optional(),
    "5": fields.DMI_5.optional()
  })
  .register(hl7v2Metadata, {
    title: "DMI",
    version: "2.6",
    description: "HL7 v2.6 DMI segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the DMI schema
 */
export type DMI = z.infer<typeof dmiSchema>;

/**
 * Default export for convenience
 */
export default dmiSchema;
