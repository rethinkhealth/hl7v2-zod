import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/don";

/**
 * HL7 v2.8 DON Segment
 *
 * HL7 v2.8 DON segment definition
 * Contains field definitions and constraints for the DON segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * DON segment schema
 * Defines the structure and validation rules for the DON segment
 */
export const donSchema = z
  .object({
    "1": fields.DON_1.optional(),
    "2": fields.DON_2.optional(),
    "3": fields.DON_3,
    "4": fields.DON_4,
    "5": fields.DON_5,
    "6": fields.DON_6,
    "7": z.array(fields.DON_7),
    "8": z.array(fields.DON_8),
    "9": fields.DON_9,
    "10": z.array(fields.DON_10),
    "11": fields.DON_11,
    "12": fields.DON_12,
    "13": fields.DON_13,
    "14": z.array(fields.DON_14),
    "15": fields.DON_15,
    "16": fields.DON_16,
    "17": fields.DON_17,
    "18": fields.DON_18,
    "19": fields.DON_19,
    "20": fields.DON_20,
    "21": fields.DON_21,
    "22": fields.DON_22,
    "23": fields.DON_23,
    "24": fields.DON_24,
    "25": fields.DON_25,
    "26": fields.DON_26,
    "27": fields.DON_27,
    "28": fields.DON_28,
    "29": fields.DON_29,
    "30": fields.DON_30,
    "31": z.array(fields.DON_31),
    "32": fields.DON_32,
    "33": z.array(fields.DON_33)
  })
  .register(hl7v2Metadata, {
    title: "DON",
    version: "2.8",
    description: "HL7 v2.8 DON segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the DON schema
 */
export type DON = z.infer<typeof donSchema>;

/**
 * Default export for convenience
 */
export default donSchema;
