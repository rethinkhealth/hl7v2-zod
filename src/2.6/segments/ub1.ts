import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/ub1";

/**
 * HL7 v2.6 UB1 Segment
 *
 * HL7 v2.6 UB1 segment definition
 * Contains field definitions and constraints for the UB1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * UB1 segment schema
 * Defines the structure and validation rules for the UB1 segment
 */
export const ub1Schema = z
  .object({
    "1": fields.UB1_1.optional(),
    "3": fields.UB1_3.optional(),
    "4": fields.UB1_4.optional(),
    "5": fields.UB1_5.optional(),
    "6": fields.UB1_6.optional(),
    "7": z.array(fields.UB1_7).optional(),
    "8": fields.UB1_8.optional(),
    "9": fields.UB1_9.optional(),
    "10": z.array(fields.UB1_10).optional(),
    "11": fields.UB1_11.optional(),
    "12": fields.UB1_12.optional(),
    "13": fields.UB1_13.optional(),
    "14": fields.UB1_14.optional(),
    "15": fields.UB1_15.optional(),
    "16": z.array(fields.UB1_16).optional(),
    "17": fields.UB1_17.optional(),
    "18": fields.UB1_18.optional(),
    "19": fields.UB1_19.optional(),
    "20": fields.UB1_20.optional(),
    "21": fields.UB1_21.optional(),
    "22": fields.UB1_22.optional(),
    "23": fields.UB1_23.optional()
  })
  .register(hl7v2Metadata, {
    title: "UB1",
    version: "2.6",
    description: "HL7 v2.6 UB1 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the UB1 schema
 */
export type UB1 = z.infer<typeof ub1Schema>;

/**
 * Default export for convenience
 */
export default ub1Schema;
