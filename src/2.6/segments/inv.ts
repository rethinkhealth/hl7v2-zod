import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/inv";

/**
 * HL7 v2.6 INV Segment
 *
 * HL7 v2.6 INV segment definition
 * Contains field definitions and constraints for the INV segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * INV segment schema
 * Defines the structure and validation rules for the INV segment
 */
export const invSchema = z
  .object({
    "1": fields.INV_1,
    "2": z.array(fields.INV_2),
    "3": fields.INV_3.optional(),
    "4": fields.INV_4.optional(),
    "5": fields.INV_5.optional(),
    "6": fields.INV_6.optional(),
    "7": fields.INV_7.optional(),
    "8": fields.INV_8.optional(),
    "9": fields.INV_9.optional(),
    "10": fields.INV_10.optional(),
    "11": fields.INV_11.optional(),
    "12": fields.INV_12.optional(),
    "13": fields.INV_13.optional(),
    "14": fields.INV_14.optional(),
    "15": z.array(fields.INV_15).optional(),
    "16": fields.INV_16.optional(),
    "17": fields.INV_17.optional(),
    "18": fields.INV_18.optional(),
    "19": fields.INV_19.optional(),
    "20": fields.INV_20.optional()
  })
  .register(hl7v2Metadata, {
    title: "INV",
    version: "2.6",
    description: "HL7 v2.6 INV segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the INV schema
 */
export type INV = z.infer<typeof invSchema>;

/**
 * Default export for convenience
 */
export default invSchema;
