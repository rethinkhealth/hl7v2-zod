import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/cdm";

/**
 * HL7 v2.8 CDM Segment
 *
 * HL7 v2.8 CDM segment definition
 * Contains field definitions and constraints for the CDM segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CDM segment schema
 * Defines the structure and validation rules for the CDM segment
 */
export const cdmSchema = z
  .object({
    "1": fields.CDM_1,
    "2": z.array(fields.CDM_2).optional(),
    "3": fields.CDM_3,
    "4": fields.CDM_4.optional(),
    "5": fields.CDM_5.optional(),
    "6": z.array(fields.CDM_6).optional(),
    "7": z.array(fields.CDM_7).optional(),
    "8": fields.CDM_8.optional(),
    "9": z.array(fields.CDM_9).optional(),
    "10": fields.CDM_10.optional(),
    "11": z.array(fields.CDM_11).optional(),
    "12": z.array(fields.CDM_12).optional(),
    "13": fields.CDM_13.optional()
  })
  .register(hl7v2Metadata, {
    title: "CDM",
    version: "2.8",
    description: "HL7 v2.8 CDM segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the CDM schema
 */
export type CDM = z.infer<typeof cdmSchema>;

/**
 * Default export for convenience
 */
export default cdmSchema;
