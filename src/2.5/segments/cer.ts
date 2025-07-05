import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/cer";

/**
 * HL7 v2.5 CER Segment
 *
 * HL7 v2.5 CER segment definition
 * Contains field definitions and constraints for the CER segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * CER segment schema
 * Defines the structure and validation rules for the CER segment
 */
export const cerSchema = z
  .object({
    "1": fields.CER_1,
    "2": fields.CER_2.optional(),
    "3": fields.CER_3.optional(),
    "4": fields.CER_4.optional(),
    "5": fields.CER_5.optional(),
    "6": fields.CER_6.optional(),
    "7": fields.CER_7.optional(),
    "8": fields.CER_8.optional(),
    "9": fields.CER_9.optional(),
    "10": fields.CER_10.optional(),
    "11": fields.CER_11.optional(),
    "12": fields.CER_12.optional(),
    "13": fields.CER_13,
    "14": z.array(fields.CER_14).optional(),
    "15": fields.CER_15.optional(),
    "16": fields.CER_16.optional(),
    "17": fields.CER_17.optional(),
    "18": z.array(fields.CER_18).optional(),
    "19": fields.CER_19.optional(),
    "20": fields.CER_20.optional(),
    "21": fields.CER_21.optional(),
    "22": z.array(fields.CER_22).optional(),
    "23": fields.CER_23.optional(),
    "24": fields.CER_24.optional(),
    "25": fields.CER_25.optional(),
    "26": fields.CER_26.optional(),
    "27": fields.CER_27.optional(),
    "28": fields.CER_28.optional(),
    "29": fields.CER_29.optional(),
    "30": fields.CER_30.optional(),
    "31": fields.CER_31.optional()
  })
  .register(hl7v2Metadata, {
    title: "CER",
    version: "2.5",
    description: "HL7 v2.5 CER segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the CER schema
 */
export type CER = z.infer<typeof cerSchema>;

/**
 * Default export for convenience
 */
export default cerSchema;
