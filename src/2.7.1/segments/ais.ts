import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/ais";

/**
 * HL7 v2.7 AIS Segment
 *
 * HL7 v2.7 AIS segment definition
 * Contains field definitions and constraints for the AIS segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AIS segment schema
 * Defines the structure and validation rules for the AIS segment
 */
export const aisSchema = z
  .object({
    "1": fields.AIS_1,
    "2": fields.AIS_2.optional(),
    "3": fields.AIS_3,
    "4": fields.AIS_4.optional(),
    "5": fields.AIS_5.optional(),
    "6": fields.AIS_6.optional(),
    "7": fields.AIS_7.optional(),
    "8": fields.AIS_8.optional(),
    "9": fields.AIS_9.optional(),
    "10": fields.AIS_10.optional(),
    "11": z.array(fields.AIS_11).optional(),
    "12": z.array(fields.AIS_12).optional()
  })
  .register(hl7v2Metadata, {
    title: "AIS",
    version: "2.7",
    description: "HL7 v2.7 AIS segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the AIS schema
 */
export type AIS = z.infer<typeof aisSchema>;

/**
 * Default export for convenience
 */
export default aisSchema;
