import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/pcr";

/**
 * HL7 v2.8 PCR Segment
 *
 * HL7 v2.8 PCR segment definition
 * Contains field definitions and constraints for the PCR segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * PCR segment schema
 * Defines the structure and validation rules for the PCR segment
 */
export const pcrSchema = z
  .object({
    "1": fields.PCR_1,
    "2": fields.PCR_2.optional(),
    "3": fields.PCR_3.optional(),
    "4": fields.PCR_4.optional(),
    "5": fields.PCR_5.optional(),
    "6": fields.PCR_6.optional(),
    "7": fields.PCR_7.optional(),
    "8": fields.PCR_8.optional(),
    "9": fields.PCR_9.optional(),
    "10": fields.PCR_10.optional(),
    "11": fields.PCR_11.optional(),
    "12": z.array(fields.PCR_12).optional(),
    "13": fields.PCR_13.optional(),
    "14": fields.PCR_14.optional(),
    "15": fields.PCR_15.optional(),
    "16": fields.PCR_16.optional(),
    "17": fields.PCR_17.optional(),
    "18": fields.PCR_18.optional(),
    "19": fields.PCR_19.optional(),
    "20": fields.PCR_20.optional(),
    "21": z.array(fields.PCR_21).optional(),
    "22": z.array(fields.PCR_22).optional(),
    "23": z.array(fields.PCR_23).optional()
  })
  .register(hl7v2Metadata, {
    title: "PCR",
    version: "2.8",
    description: "HL7 v2.8 PCR segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the PCR schema
 */
export type PCR = z.infer<typeof pcrSchema>;

/**
 * Default export for convenience
 */
export default pcrSchema;
