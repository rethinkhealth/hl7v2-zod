import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/om1";

/**
 * HL7 v2.5 OM1 Segment
 *
 * HL7 v2.5 OM1 segment definition
 * Contains field definitions and constraints for the OM1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OM1 segment schema
 * Defines the structure and validation rules for the OM1 segment
 */
export const om1Schema = z
  .object({
    "1": fields.OM1_1,
    "2": fields.OM1_2,
    "3": z.array(fields.OM1_3).optional(),
    "4": fields.OM1_4,
    "5": fields.OM1_5,
    "6": fields.OM1_6.optional(),
    "7": fields.OM1_7.optional(),
    "8": z.array(fields.OM1_8),
    "9": fields.OM1_9.optional(),
    "10": fields.OM1_10.optional(),
    "11": fields.OM1_11.optional(),
    "12": fields.OM1_12.optional(),
    "13": z.array(fields.OM1_13).optional(),
    "14": z.array(fields.OM1_14).optional(),
    "15": fields.OM1_15.optional(),
    "16": z.array(fields.OM1_16).optional(),
    "17": fields.OM1_17.optional(),
    "18": fields.OM1_18,
    "19": fields.OM1_19.optional(),
    "20": fields.OM1_20.optional(),
    "21": fields.OM1_21.optional(),
    "22": fields.OM1_22.optional(),
    "23": fields.OM1_23.optional(),
    "24": fields.OM1_24.optional(),
    "25": z.array(fields.OM1_25).optional(),
    "26": fields.OM1_26.optional(),
    "27": z.array(fields.OM1_27).optional(),
    "28": z.array(fields.OM1_28).optional(),
    "29": fields.OM1_29.optional(),
    "30": fields.OM1_30.optional(),
    "31": fields.OM1_31.optional(),
    "32": fields.OM1_32.optional(),
    "33": fields.OM1_33.optional(),
    "34": z.array(fields.OM1_34).optional(),
    "35": fields.OM1_35.optional(),
    "36": fields.OM1_36.optional(),
    "37": fields.OM1_37.optional(),
    "38": fields.OM1_38.optional(),
    "39": fields.OM1_39.optional(),
    "40": z.array(fields.OM1_40).optional(),
    "41": fields.OM1_41.optional(),
    "42": fields.OM1_42.optional(),
    "43": fields.OM1_43.optional(),
    "44": fields.OM1_44.optional(),
    "45": fields.OM1_45.optional(),
    "46": fields.OM1_46.optional(),
    "47": fields.OM1_47.optional()
  })
  .register(hl7v2Metadata, {
    title: "OM1",
    version: "2.5",
    description: "HL7 v2.5 OM1 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the OM1 schema
 */
export type OM1 = z.infer<typeof om1Schema>;

/**
 * Default export for convenience
 */
export default om1Schema;
