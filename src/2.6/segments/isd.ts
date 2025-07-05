import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/isd";

/**
 * HL7 v2.6 ISD Segment
 *
 * HL7 v2.6 ISD segment definition
 * Contains field definitions and constraints for the ISD segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ISD segment schema
 * Defines the structure and validation rules for the ISD segment
 */
export const isdSchema = z
  .object({
    "1": fields.ISD_1,
    "2": fields.ISD_2.optional(),
    "3": fields.ISD_3
  })
  .register(hl7v2Metadata, {
    title: "ISD",
    version: "2.6",
    description: "HL7 v2.6 ISD segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the ISD schema
 */
export type ISD = z.infer<typeof isdSchema>;

/**
 * Default export for convenience
 */
export default isdSchema;
