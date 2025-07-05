import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/cti";

/**
 * HL7 v2.6 CTI Segment
 *
 * HL7 v2.6 CTI segment definition
 * Contains field definitions and constraints for the CTI segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CTI segment schema
 * Defines the structure and validation rules for the CTI segment
 */
export const ctiSchema = z
  .object({
    "1": fields.CTI_1,
    "2": fields.CTI_2.optional(),
    "3": fields.CTI_3.optional()
  })
  .register(hl7v2Metadata, {
    title: "CTI",
    version: "2.6",
    description: "HL7 v2.6 CTI segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the CTI schema
 */
export type CTI = z.infer<typeof ctiSchema>;

/**
 * Default export for convenience
 */
export default ctiSchema;
