import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/ivc";

/**
 * HL7 v2.6 IVC Segment
 *
 * HL7 v2.6 IVC segment definition
 * Contains field definitions and constraints for the IVC segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * IVC segment schema
 * Defines the structure and validation rules for the IVC segment
 */
export const ivcSchema = z
  .object({
    "1": fields.IVC_1,
    "2": fields.IVC_2.optional(),
    "3": fields.IVC_3.optional(),
    "4": fields.IVC_4,
    "5": fields.IVC_5,
    "6": fields.IVC_6,
    "7": fields.IVC_7,
    "8": fields.IVC_8,
    "9": fields.IVC_9.optional(),
    "10": fields.IVC_10,
    "11": fields.IVC_11,
    "12": fields.IVC_12.optional(),
    "13": fields.IVC_13.optional(),
    "14": fields.IVC_14.optional(),
    "15": fields.IVC_15.optional(),
    "16": fields.IVC_16.optional(),
    "17": fields.IVC_17.optional(),
    "18": fields.IVC_18.optional(),
    "19": fields.IVC_19.optional(),
    "20": fields.IVC_20.optional(),
    "21": fields.IVC_21.optional(),
    "22": fields.IVC_22.optional(),
    "23": fields.IVC_23.optional(),
    "24": z.array(fields.IVC_24).optional(),
    "25": fields.IVC_25,
    "26": fields.IVC_26.optional(),
    "27": fields.IVC_27.optional(),
    "28": fields.IVC_28.optional(),
    "29": fields.IVC_29.optional(),
    "30": fields.IVC_30.optional()
  })
  .register(hl7v2Metadata, {
    title: "IVC",
    version: "2.6",
    description: "HL7 v2.6 IVC segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the IVC schema
 */
export type IVC = z.infer<typeof ivcSchema>;

/**
 * Default export for convenience
 */
export default ivcSchema;
