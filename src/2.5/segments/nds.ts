import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/nds";

/**
 * HL7 v2.5 NDS Segment
 *
 * HL7 v2.5 NDS segment definition
 * Contains field definitions and constraints for the NDS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * NDS segment schema
 * Defines the structure and validation rules for the NDS segment
 */
export const ndsSchema = z
  .object({
    "1": fields.NDS_1,
    "2": fields.NDS_2,
    "3": fields.NDS_3,
    "4": fields.NDS_4
  })
  .register(hl7v2Metadata, {
    title: "NDS",
    version: "2.5",
    description: "HL7 v2.5 NDS segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the NDS schema
 */
export type NDS = z.infer<typeof ndsSchema>;

/**
 * Default export for convenience
 */
export default ndsSchema;
