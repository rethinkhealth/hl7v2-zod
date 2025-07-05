import { z } from "zod/v4";
import hl7v2Metadata from "../registry";
import * as fields from "../fields/obr";

/**
 * HL7 v2.7 OBR Segment
 *
 * HL7 v2.7 OBR segment definition
 * Contains field definitions and constraints for the OBR segment.
 *
 * Generated using Zod v4 for improved performance and TypeScript efficiency.
 *
 * Includes HL7v2 metadata registration for enhanced validation and documentation.
 */

/**
 * OBR segment schema
 * Defines the structure and validation rules for the OBR segment
 */
export const obrSchema = z
  .object({
    "1": fields.OBR_1.optional(),
    "2": fields.OBR_2.optional(),
    "3": fields.OBR_3.optional(),
    "4": fields.OBR_4,
    "7": fields.OBR_7.optional(),
    "8": fields.OBR_8.optional(),
    "9": fields.OBR_9.optional(),
    "10": z.array(fields.OBR_10).optional(),
    "11": fields.OBR_11.optional(),
    "12": fields.OBR_12.optional(),
    "13": fields.OBR_13.optional(),
    "16": z.array(fields.OBR_16).optional(),
    "17": z.array(fields.OBR_17).optional(),
    "18": fields.OBR_18.optional(),
    "19": fields.OBR_19.optional(),
    "20": fields.OBR_20.optional(),
    "21": fields.OBR_21.optional(),
    "22": fields.OBR_22.optional(),
    "23": fields.OBR_23.optional(),
    "24": fields.OBR_24.optional(),
    "25": fields.OBR_25.optional(),
    "26": fields.OBR_26.optional(),
    "28": z.array(fields.OBR_28).optional(),
    "29": fields.OBR_29.optional(),
    "30": fields.OBR_30.optional(),
    "31": z.array(fields.OBR_31).optional(),
    "32": fields.OBR_32.optional(),
    "33": z.array(fields.OBR_33).optional(),
    "34": z.array(fields.OBR_34).optional(),
    "35": z.array(fields.OBR_35).optional(),
    "36": fields.OBR_36.optional(),
    "37": fields.OBR_37.optional(),
    "38": z.array(fields.OBR_38).optional(),
    "39": z.array(fields.OBR_39).optional(),
    "40": fields.OBR_40.optional(),
    "41": fields.OBR_41.optional(),
    "42": fields.OBR_42.optional(),
    "43": z.array(fields.OBR_43).optional(),
    "44": fields.OBR_44.optional(),
    "45": z.array(fields.OBR_45).optional(),
    "46": z.array(fields.OBR_46).optional(),
    "47": z.array(fields.OBR_47).optional(),
    "48": fields.OBR_48.optional(),
    "49": fields.OBR_49.optional(),
    "50": fields.OBR_50.optional(),
    "51": fields.OBR_51.optional(),
    "52": fields.OBR_52.optional(),
    "53": z.array(fields.OBR_53).optional()
  })
  .register(hl7v2Metadata, {
    title: "OBR",
    version: "2.7",
    description: "HL7 v2.7 OBR segment",
    type: "Segment"
  });

/**
 * TypeScript type inferred from the OBR schema
 */
export type OBR = z.infer<typeof obrSchema>;

/**
 * Default export for convenience
 */
export default obrSchema;
