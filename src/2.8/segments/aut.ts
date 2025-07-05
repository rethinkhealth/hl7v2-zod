import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/aut";

/**
 * HL7 v2.8 AUT Segment
 *
 * HL7 v2.8 AUT segment definition
 * Contains field definitions and constraints for the AUT segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * AUT segment schema
 * Defines the structure and validation rules for the AUT segment
 */
export const autSchema = z
  .object({
    "1": fields.AUT_1.optional(),
    "2": fields.AUT_2,
    "3": fields.AUT_3.optional(),
    "4": fields.AUT_4.optional(),
    "5": fields.AUT_5.optional(),
    "6": fields.AUT_6.optional(),
    "7": fields.AUT_7.optional(),
    "8": fields.AUT_8.optional(),
    "9": fields.AUT_9.optional(),
    "10": fields.AUT_10.optional(),
    "11": z.array(fields.AUT_11).optional(),
    "12": z.array(fields.AUT_12).optional(),
    "13": fields.AUT_13,
    "14": fields.AUT_14.optional(),
    "15": fields.AUT_15.optional(),
    "16": fields.AUT_16.optional(),
    "17": fields.AUT_17.optional(),
    "18": fields.AUT_18.optional(),
    "19": fields.AUT_19.optional(),
    "20": fields.AUT_20.optional(),
    "21": fields.AUT_21.optional(),
    "22": fields.AUT_22.optional(),
    "23": fields.AUT_23.optional(),
    "24": fields.AUT_24.optional(),
    "25": fields.AUT_25.optional(),
    "26": fields.AUT_26.optional(),
    "27": fields.AUT_27.optional(),
    "28": fields.AUT_28.optional(),
    "29": fields.AUT_29.optional()
  })
  .register(hl7v2Metadata, {
    title: "AUT",
    version: "2.8",
    description: "HL7 v2.8 AUT segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the AUT schema
 */
export type AUT = z.infer<typeof autSchema>;

/**
 * Default export for convenience
 */
export default autSchema;
