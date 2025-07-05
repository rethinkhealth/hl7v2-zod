import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/gt1";

/**
 * HL7 v2.8 GT1 Segment
 *
 * HL7 v2.8 GT1 segment definition
 * Contains field definitions and constraints for the GT1 segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * GT1 segment schema
 * Defines the structure and validation rules for the GT1 segment
 */
export const gt1Schema = z
  .object({
    "1": fields.GT1_1,
    "2": z.array(fields.GT1_2).optional(),
    "3": z.array(fields.GT1_3),
    "4": z.array(fields.GT1_4).optional(),
    "5": z.array(fields.GT1_5).optional(),
    "6": z.array(fields.GT1_6).optional(),
    "7": z.array(fields.GT1_7).optional(),
    "8": fields.GT1_8.optional(),
    "9": fields.GT1_9.optional(),
    "10": fields.GT1_10.optional(),
    "11": fields.GT1_11.optional(),
    "12": fields.GT1_12.optional(),
    "13": fields.GT1_13.optional(),
    "14": fields.GT1_14.optional(),
    "15": fields.GT1_15.optional(),
    "16": z.array(fields.GT1_16).optional(),
    "17": z.array(fields.GT1_17).optional(),
    "18": z.array(fields.GT1_18).optional(),
    "19": z.array(fields.GT1_19).optional(),
    "20": fields.GT1_20.optional(),
    "21": z.array(fields.GT1_21).optional(),
    "22": fields.GT1_22.optional(),
    "23": fields.GT1_23.optional(),
    "24": fields.GT1_24.optional(),
    "25": fields.GT1_25.optional(),
    "26": fields.GT1_26.optional(),
    "27": fields.GT1_27.optional(),
    "28": fields.GT1_28.optional(),
    "29": z.array(fields.GT1_29).optional(),
    "30": fields.GT1_30.optional(),
    "31": fields.GT1_31.optional(),
    "32": fields.GT1_32.optional(),
    "33": fields.GT1_33.optional(),
    "34": z.array(fields.GT1_34).optional(),
    "35": z.array(fields.GT1_35).optional(),
    "36": fields.GT1_36.optional(),
    "37": fields.GT1_37.optional(),
    "38": fields.GT1_38.optional(),
    "39": fields.GT1_39.optional(),
    "40": fields.GT1_40.optional(),
    "41": fields.GT1_41.optional(),
    "42": z.array(fields.GT1_42).optional(),
    "43": fields.GT1_43.optional(),
    "44": z.array(fields.GT1_44).optional(),
    "45": z.array(fields.GT1_45).optional(),
    "46": z.array(fields.GT1_46).optional(),
    "47": fields.GT1_47.optional(),
    "48": fields.GT1_48.optional(),
    "49": fields.GT1_49.optional(),
    "50": fields.GT1_50.optional(),
    "51": z.array(fields.GT1_51).optional(),
    "52": fields.GT1_52.optional(),
    "53": fields.GT1_53.optional(),
    "54": fields.GT1_54.optional(),
    "55": z.array(fields.GT1_55).optional(),
    "56": fields.GT1_56.optional(),
    "57": fields.GT1_57.optional()
  })
  .register(hl7v2Metadata, {
    title: "GT1",
    version: "2.8",
    description: "HL7 v2.8 GT1 segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the GT1 schema
 */
export type GT1 = z.infer<typeof gt1Schema>;

/**
 * Default export for convenience
 */
export default gt1Schema;
