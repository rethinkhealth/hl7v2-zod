import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/orc";

/**
 * HL7 v2.7 ORC Segment
 *
 * HL7 v2.7 ORC segment definition
 * Contains field definitions and constraints for the ORC segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * ORC segment schema
 * Defines the structure and validation rules for the ORC segment
 */
export const orcSchema = z
  .object({
    "1": fields.ORC_1,
    "2": fields.ORC_2.optional(),
    "3": fields.ORC_3.optional(),
    "4": fields.ORC_4.optional(),
    "5": fields.ORC_5.optional(),
    "6": fields.ORC_6.optional(),
    "8": fields.ORC_8.optional(),
    "9": fields.ORC_9.optional(),
    "10": z.array(fields.ORC_10).optional(),
    "11": z.array(fields.ORC_11).optional(),
    "12": z.array(fields.ORC_12).optional(),
    "13": fields.ORC_13.optional(),
    "14": z.array(fields.ORC_14).optional(),
    "15": fields.ORC_15.optional(),
    "16": fields.ORC_16.optional(),
    "17": fields.ORC_17.optional(),
    "18": fields.ORC_18.optional(),
    "19": z.array(fields.ORC_19).optional(),
    "20": fields.ORC_20.optional(),
    "21": z.array(fields.ORC_21).optional(),
    "22": z.array(fields.ORC_22).optional(),
    "23": z.array(fields.ORC_23).optional(),
    "24": z.array(fields.ORC_24).optional(),
    "25": fields.ORC_25.optional(),
    "26": fields.ORC_26.optional(),
    "27": fields.ORC_27.optional(),
    "28": fields.ORC_28.optional(),
    "29": fields.ORC_29.optional(),
    "30": fields.ORC_30.optional(),
    "31": fields.ORC_31.optional(),
    "32": fields.ORC_32.optional(),
    "33": z.array(fields.ORC_33).optional()
  })
  .register(hl7v2Metadata, {
    title: "ORC",
    version: "2.7",
    description: "HL7 v2.7 ORC segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the ORC schema
 */
export type ORC = z.infer<typeof orcSchema>;

/**
 * Default export for convenience
 */
export default orcSchema;
