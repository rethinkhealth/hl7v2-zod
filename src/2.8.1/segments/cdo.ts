import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/cdo";

/**
 * HL7 v2.8 CDO Segment
 *
 * HL7 v2.8 CDO segment definition
 * Contains field definitions and constraints for the CDO segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CDO segment schema
 * Defines the structure and validation rules for the CDO segment
 */
export const cdoSchema = z
  .object({
    "1": fields.CDO_1.optional(),
    "2": fields.CDO_2.optional(),
    "3": fields.CDO_3.optional(),
    "4": fields.CDO_4.optional()
  })
  .register(hl7v2Metadata, {
    title: "CDO",
    version: "2.8",
    description: "HL7 v2.8 CDO segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the CDO schema
 */
export type CDO = z.infer<typeof cdoSchema>;

/**
 * Default export for convenience
 */
export default cdoSchema;
