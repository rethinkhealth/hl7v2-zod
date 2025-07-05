import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/iim";

/**
 * HL7 v2.7 IIM Segment
 *
 * HL7 v2.7 IIM segment definition
 * Contains field definitions and constraints for the IIM segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IIM segment schema
 * Defines the structure and validation rules for the IIM segment
 */
export const iimSchema = z
  .object({
    "1": fields.IIM_1,
    "2": fields.IIM_2,
    "3": fields.IIM_3.optional(),
    "4": fields.IIM_4.optional(),
    "5": fields.IIM_5.optional(),
    "6": fields.IIM_6.optional(),
    "7": fields.IIM_7.optional(),
    "8": fields.IIM_8.optional(),
    "9": fields.IIM_9.optional(),
    "10": fields.IIM_10.optional(),
    "11": fields.IIM_11.optional(),
    "12": fields.IIM_12.optional(),
    "13": fields.IIM_13.optional(),
    "14": fields.IIM_14.optional(),
    "15": z.array(fields.IIM_15).optional()
  })
  .register(hl7v2Metadata, {
    title: "IIM",
    version: "2.7",
    description: "HL7 v2.7 IIM segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the IIM schema
 */
export type IIM = z.infer<typeof iimSchema>;

/**
 * Default export for convenience
 */
export default iimSchema;
