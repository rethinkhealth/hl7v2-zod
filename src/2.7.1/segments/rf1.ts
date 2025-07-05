import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/rf1";

/**
 * HL7 v2.7 RF1 Segment
 *
 * HL7 v2.7 RF1 segment definition
 * Contains field definitions and constraints for the RF1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * RF1 segment schema
 * Defines the structure and validation rules for the RF1 segment
 */
export const rf1Schema = z
  .object({
    "1": fields.RF1_1.optional(),
    "2": fields.RF1_2.optional(),
    "3": fields.RF1_3.optional(),
    "4": z.array(fields.RF1_4).optional(),
    "5": fields.RF1_5.optional(),
    "6": fields.RF1_6,
    "7": fields.RF1_7.optional(),
    "8": fields.RF1_8.optional(),
    "9": fields.RF1_9.optional(),
    "10": z.array(fields.RF1_10).optional(),
    "11": z.array(fields.RF1_11).optional(),
    "12": fields.RF1_12.optional()
  })
  .register(hl7v2Metadata, {
    title: "RF1",
    version: "2.7",
    description: "HL7 v2.7 RF1 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the RF1 schema
 */
export type RF1 = z.infer<typeof rf1Schema>;

/**
 * Default export for convenience
 */
export default rf1Schema;
